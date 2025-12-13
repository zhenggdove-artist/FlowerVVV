import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion, ColorScheme } from './types.ts';
import * as blazeface from '@tensorflow-models/blazeface';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { FaceDetector, FilesetResolver } from '@mediapipe/tasks-vision';

// ============================================
// DUAL ENGINE CONFIGURATION
// ============================================
type DetectionEngine = 'BLAZEFACE' | 'MEDIAPIPE' | 'HYBRID';
const DETECTION_ENGINE: DetectionEngine = 'HYBRID';

const INTERACTION_CONFIDENCE_MIN = 0.4; // 40%
const DISPLAY_CONFIDENCE_MIN = 0.15;
const BOX_PERSIST_MS = 700;
// ============================================

// Color schemes pool for random selection (紅橙黃綠藍靛紫)
const colorSchemes: ColorScheme[] = [
  // Scheme 0: Red (紅)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.35, b: 0.1 },
    flower: { r: 1.0, g: 0.1, b: 0.1 },
    bug: { r: 1.0, g: 0.2, b: 0.3 }
  },
  // Scheme 1: Orange (橙)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.4, b: 0.1 },
    flower: { r: 1.0, g: 0.5, b: 0.0 },
    bug: { r: 1.0, g: 0.6, b: 0.2 }
  },
  // Scheme 2: Yellow (黃)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.4, b: 0.1 },
    flower: { r: 1.0, g: 0.9, b: 0.0 },
    bug: { r: 1.0, g: 0.95, b: 0.3 }
  },
  // Scheme 3: Green (綠)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.05, g: 0.4, b: 0.15 },
    flower: { r: 0.2, g: 0.9, b: 0.2 },
    bug: { r: 0.3, g: 1.0, b: 0.4 }
  },
  // Scheme 4: Blue (藍)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.05, g: 0.3, b: 0.25 },
    flower: { r: 0.0, g: 0.5, b: 1.0 },
    bug: { r: 0.2, g: 0.7, b: 1.0 }
  },
  // Scheme 5: Indigo (靛)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.15, g: 0.3, b: 0.25 },
    flower: { r: 0.3, g: 0.0, b: 0.8 },
    bug: { r: 0.4, g: 0.2, b: 0.9 }
  },
  // Scheme 6: Purple (紫)
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.15, g: 0.3, b: 0.2 },
    flower: { r: 0.8, g: 0.2, b: 1.0 },
    bug: { r: 0.9, g: 0.3, b: 1.0 }
  }
];

const colorSchemeNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];

// Get random color scheme (no longer sequential)
const getRandomColorScheme = (): ColorScheme => {
  const randomIndex = Math.floor(Math.random() * colorSchemes.length);
  return colorSchemes[randomIndex];
};

// ============================================
// HUMAN DETECTION (Top-of-head hair check)
// ============================================

type HairCheckResult = { isHuman: boolean; reason: string; hairCoverage: number; edgeRatio: number };

const HAIR_SAMPLE = 56;
let hairSampleCanvas: HTMLCanvasElement | null = null;
let hairSampleCtx: CanvasRenderingContext2D | null = null;
const getHairSampleCtx = (): CanvasRenderingContext2D | null => {
  if (hairSampleCtx) return hairSampleCtx;
  if (typeof document === 'undefined') return null;
  hairSampleCanvas = document.createElement('canvas');
  hairSampleCanvas.width = HAIR_SAMPLE;
  hairSampleCanvas.height = HAIR_SAMPLE;
  hairSampleCtx = hairSampleCanvas.getContext('2d', { willReadFrequently: true });
  return hairSampleCtx;
};

/**
 * If the TOP of the head is largely covered by dark (black/brown) hair, treat as HUMAN.
 * Otherwise we treat detected face/head as STATUE.
 */
const analyzeHairOnTop = (
  video: HTMLVideoElement,
  bbox: { x: number; y: number; width: number; height: number }
): HairCheckResult => {
  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  // Analyze a central band slightly ABOVE the bbox to catch hair even when the detector returns only the face.
  const roiX = clamp(Math.floor(bbox.x + bbox.width * 0.15), 0, video.videoWidth - 1);
  const roiW = clamp(Math.floor(bbox.width * 0.7), 1, video.videoWidth - roiX);
  const roiY = clamp(Math.floor(bbox.y - bbox.height * 0.35), 0, video.videoHeight - 1);
  const roiH = clamp(Math.floor(bbox.height * 0.6), 1, video.videoHeight - roiY);

  const SAMPLE = HAIR_SAMPLE;
  const ctx = getHairSampleCtx();
  if (!ctx) return { isHuman: false, reason: 'Canvas error', hairCoverage: 0, edgeRatio: 0 };

  ctx.drawImage(video, roiX, roiY, roiW, roiH, 0, 0, SAMPLE, SAMPLE);
  const imageData = ctx.getImageData(0, 0, SAMPLE, SAMPLE);
  const pixels = imageData.data;

  const lumas = new Float32Array(SAMPLE * SAMPLE);
  let hairPixels = 0;
  let totalPixels = 0;
  let hairSatSum = 0;
  let hairSatCount = 0;

  // Focus on the upper band (where hair should exist) to avoid skin/forehead diluting coverage.
  const BAND_RATIO = 0.65;
  const bandH = Math.max(2, Math.floor(SAMPLE * BAND_RATIO));

  for (let i = 0, p = 0; i < pixels.length; i += 4, p++) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    const v = max / 255;
    const s = max === 0 ? 0 : delta / max;

    const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    lumas[p] = luma;

    // Hue (0..360)
    let h = 0;
    if (delta !== 0) {
      if (max === r) h = ((g - b) / delta) % 6;
      else if (max === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h *= 60;
      if (h < 0) h += 360;
    }

    const y = Math.floor(p / SAMPLE);
    if (y >= bandH) continue;

    // Spec: HUMAN if the TOP is largely covered by highly-saturated black/dark-brown hair.
    // We treat "black hair" as very dark with some chroma (avoid gray shadows).
    const isDeepBrown = h >= 10 && h <= 65 && s >= 0.18 && luma <= 0.58 && v <= 0.8;
    const isSaturatedDark = luma <= 0.42 && s >= 0.24;
    const isSaturatedBlack = v <= 0.23 && luma <= 0.28 && s >= 0.08;

    const isHairPixel = isSaturatedBlack || isDeepBrown || isSaturatedDark;
    if (isHairPixel) {
      hairPixels++;
      hairSatSum += s;
      hairSatCount++;
    }
    totalPixels++;
  }

  // Texture/edge check to reduce flat-dark false positives
  let edgeCount = 0;
  const EDGE_THRESHOLD = 0.12;
  for (let y = 0; y < bandH - 1; y++) {
    for (let x = 0; x < SAMPLE - 1; x++) {
      const idx = y * SAMPLE + x;
      const d = Math.abs(lumas[idx] - lumas[idx + 1]) + Math.abs(lumas[idx] - lumas[idx + SAMPLE]);
      if (d > EDGE_THRESHOLD) edgeCount++;
    }
  }

  const hairCoverage = totalPixels > 0 ? hairPixels / totalPixels : 0;
  const edgeRatio = edgeCount / Math.max(1, (bandH - 1) * (SAMPLE - 1));
  const avgHairSat = hairSatCount > 0 ? hairSatSum / hairSatCount : 0;

  const HAIR_COVERAGE_MIN = 0.28;
  const EDGE_RATIO_MIN = 0.03;
  const SAT_MIN = 0.14;
  const isHuman = hairCoverage >= HAIR_COVERAGE_MIN && avgHairSat >= SAT_MIN && edgeRatio >= EDGE_RATIO_MIN;

  return {
    isHuman,
    hairCoverage,
    edgeRatio,
    reason: isHuman
      ? `Top hair detected (coverage ${(hairCoverage * 100).toFixed(0)}%, sat ${(avgHairSat * 100).toFixed(0)}%, texture ${(edgeRatio * 100).toFixed(0)}%)`
      : `No strong top-hair (coverage ${(hairCoverage * 100).toFixed(0)}%, sat ${(avgHairSat * 100).toFixed(0)}%, texture ${(edgeRatio * 100).toFixed(0)}%)`
  };
};

// ============================================
// STATUE MATERIAL DETECTION SYSTEM
// ============================================

/**
 * Analyzes if a detected region is a STATUE (not a real human face)
 * Statues have: low saturation, uniform color, non-skin tones
 */
const analyzeStatueMaterial = (
  video: HTMLVideoElement,
  bbox: { x: number; y: number; width: number; height: number }
): { isStatue: boolean; reason: string; saturation: number; skinTone: number } => {
  // Create temporary canvas to extract region
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = bbox.width;
  tempCanvas.height = bbox.height;
  const ctx = tempCanvas.getContext('2d', { willReadFrequently: true });

  if (!ctx) {
    return { isStatue: false, reason: 'Canvas error', saturation: 0, skinTone: 0 };
  }

  // Draw the detected region
  ctx.drawImage(
    video,
    bbox.x, bbox.y, bbox.width, bbox.height,
    0, 0, bbox.width, bbox.height
  );

  const imageData = ctx.getImageData(0, 0, bbox.width, bbox.height);
  const pixels = imageData.data;

  let totalSaturation = 0;
  let skinTonePixels = 0;
  let totalPixels = 0;
  let grayPixels = 0;

  // Sample pixels (every 4th pixel for performance)
  for (let i = 0; i < pixels.length; i += 16) {  // RGBA format, skip 4 pixels
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Convert RGB to HSV to get saturation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Saturation in HSV (0-100%)
    const saturation = max === 0 ? 0 : (delta / max) * 100;
    totalSaturation += saturation;

    // Check for human skin tone (RGB based detection)
    // Human skin: R > G > B, with specific ratios
    const isLikelySkin = (
      r > 95 && g > 40 && b > 20 &&
      r > g && g > b &&
      Math.abs(r - g) > 15 &&
      (r - g) > 15
    );

    if (isLikelySkin) {
      skinTonePixels++;
    }

    // Check for grayscale/metallic (R ≈ G ≈ B)
    const colorDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    if (colorDiff < 15) {
      grayPixels++;
    }

    totalPixels++;
  }

  const avgSaturation = totalSaturation / totalPixels;
  const skinToneRatio = skinTonePixels / totalPixels;
  const grayRatio = grayPixels / totalPixels;

  console.log(`    🎨 Material Analysis: saturation=${avgSaturation.toFixed(1)}%, skin=${(skinToneRatio * 100).toFixed(1)}%, gray=${(grayRatio * 100).toFixed(1)}%`);

  // STATUE CRITERIA:
  // 1. Low saturation (<25%) - statues are usually monochrome
  // 2. Low skin tone ratio (<15%) - not human skin color
  // 3. High gray ratio (>40%) - metallic/stone materials

  if (avgSaturation < 90 && skinToneRatio < 0.9) {
    return {
      isStatue: true,
      reason: `Low saturation (${avgSaturation.toFixed(1)}%) + No skin tone`,
      saturation: avgSaturation,
      skinTone: skinToneRatio * 100
    };
  }

  if (grayRatio > 0.4 && skinToneRatio < 0.2) {
    return {
      isStatue: true,
      reason: `Grayscale material (${(grayRatio * 100).toFixed(1)}%)`,
      saturation: avgSaturation,
      skinTone: skinToneRatio * 100
    };
  }

  if (skinToneRatio > 0.3) {
    return {
      isStatue: false,
      reason: `Human skin detected (${(skinToneRatio * 100).toFixed(1)}%)`,
      saturation: avgSaturation,
      skinTone: skinToneRatio * 100
    };
  }

  // Edge case: medium saturation but no skin = possible colored statue
  if (avgSaturation < 99 && skinToneRatio < 0.001) {
    return {
      isStatue: true,
      reason: 'Colored statue (low saturation, no skin)',
      saturation: avgSaturation,
      skinTone: skinToneRatio * 100
    };
  }

  return {
    isStatue: false,
    reason: `Too colorful (sat=${avgSaturation.toFixed(1)}%)`,
    saturation: avgSaturation,
    skinTone: skinToneRatio * 100
  };
};

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);

    // Dual engine refs
    const blazefaceDetectorRef = useRef<blazeface.BlazeFaceModel | null>(null);
    const mediapipeDetectorRef = useRef<FaceDetector | null>(null);
    const cocoDetectorRef = useRef<cocoSsd.ObjectDetection | null>(null);
    const detectionIntervalRef = useRef<number | null>(null);
    const cocoLoadingPromiseRef = useRef<Promise<cocoSsd.ObjectDetection | null> | null>(null);
    const cocoLoadFailedRef = useRef<boolean>(false);
    const isDetectingRef = useRef<boolean>(false);

    // COCO-SSD throttling + cached head regions (derived from "person" boxes)
    const lastPersonDetectAtRef = useRef<number>(0);
    const cachedPersonHeadDetectionsRef = useRef<any[]>([]);

  // MediaPipe specific
  const videoTimestampRef = useRef<number>(0);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("LOADING...");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [detectedHeads, setDetectedHeads] = useState<FaceRegion[]>([]);
  const detectedHeadsRef = useRef<FaceRegion[]>([]);
  const [isDetectorReady, setIsDetectorReady] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const [growthTrigger, setGrowthTrigger] = useState<number>(0);

  // For detection box persistence (0.7s minimum display per box)
  const detectedRegionsHistoryRef = useRef<Array<{
    region: {
      canvasX: number;
      canvasY: number;
      canvasWidth: number;
      canvasHeight: number;
      headCenterX: number;
      headCenterY: number;
      headRadius: number;
      confidence: number;
      index: number;
    };
    timestamp: number;
  }>>([]);

  // Color scheme management
  const [viciClickCount, setViciClickCount] = useState<number>(0);
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>(colorSchemes[0]); // Start with pink
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

  const ensureCocoLoaded = useCallback(async (): Promise<cocoSsd.ObjectDetection | null> => {
    if (cocoDetectorRef.current) return cocoDetectorRef.current;
    if (cocoLoadFailedRef.current) return null;
    if (cocoLoadingPromiseRef.current) return cocoLoadingPromiseRef.current;

    const promise = (async () => {
      try {
        const model = await cocoSsd.load({ base: 'lite_mobilenet_v2' });
        cocoDetectorRef.current = model;
        return model;
      } catch (err) {
        cocoLoadFailedRef.current = true;
        console.warn("COCO-SSD load failed (disabling person fallback):", err);
        return null;
      } finally {
        cocoLoadingPromiseRef.current = null;
      }
    })();

    cocoLoadingPromiseRef.current = promise;
    return promise;
  }, [ensureCocoLoaded]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Detection Engine (Dual Engine System)
  useEffect(() => {
    let cancelled = false;

    const setDetectorProgress = (progress: number, phase: string) => {
      if (cancelled) return;
      const pct = Math.max(0, Math.min(100, Math.round(progress)));
      setStatusText(`LOADING DETECTORS ${pct}%${phase ? ` (${phase})` : ''}`);
    };

    function runWithProgress<T>(
      phase: string,
      startPercent: number,
      endPercent: number,
      task: () => Promise<T>
    ): Promise<T> {
      setDetectorProgress(startPercent, phase);

      let current = startPercent;
      const interval = window.setInterval(() => {
        if (cancelled) return;
        current = Math.min(endPercent - 1, current + 1);
        setDetectorProgress(current, phase);
      }, 120);

      return task().finally(() => {
        window.clearInterval(interval);
        setDetectorProgress(endPercent, phase);
      });
    }

    const initBlazeFace = async () => {
      console.log("🔵 Initializing BlazeFace with AGGRESSIVE settings...");
        const blazeModel = await blazeface.load({
          maxFaces: 100,
          iouThreshold: 0.1,
          scoreThreshold: 0.15
        });

      if (cancelled) return;

      blazefaceDetectorRef.current = blazeModel;
      console.log("✅ BlazeFace loaded successfully!");
      return true;
    };

    const initMediaPipe = async () => {
      console.log("🟣 Initializing MediaPipe FaceDetector with OPTIMIZED settings...");
      console.log("📦 Loading MediaPipe Vision wasm files...");
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
      );
      console.log("✅ Vision wasm loaded");

      if (cancelled) return false;

      console.log("🔧 Creating FaceDetector with OPTIMIZED config...");
      console.log("   - Model: blaze_face_short_range");
      console.log("   - minDetectionConfidence: 0.2 (high recall)");
      console.log("   - minSuppressionThreshold: 0.3 (less strict NMS)");

      const createDetector = async (delegate: 'GPU' | 'CPU') =>
        FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
            delegate
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.2,
          minSuppressionThreshold: 0.3
        });

      let detector: FaceDetector;
      try {
        detector = await createDetector('GPU');
      } catch (gpuErr) {
        console.warn("MediaPipe GPU init failed; retrying CPU:", gpuErr);
        detector = await createDetector('CPU');
      }
      console.log("✅ FaceDetector created with HIGH accuracy settings");

      if (cancelled) return false;

      mediapipeDetectorRef.current = detector;
      console.log("✅ MediaPipe loaded successfully!");
      return true;
    };

    const initDetector = async () => {
      try {
        const mediapipeOk = await runWithProgress('MEDIAPIPE', 0, 40, () =>
          initMediaPipe().catch((err) => {
            console.error("MediaPipe init failed:", err);
            return false;
          })
        );

        const blazeOk = await runWithProgress('BLAZEFACE', 40, 70, () =>
          initBlazeFace().catch((err) => {
            console.error("BlazeFace init failed:", err);
            return false;
          })
        );

        await runWithProgress('PERSON', 70, 100, async () => {
          await ensureCocoLoaded();
          return true;
        });

        if (cancelled) return;

        const ok = Boolean(mediapipeOk || blazeOk);
        if (!ok) {
          throw new Error("No detection model initialized");
        }

        setIsDetectorReady(true);
        setStatusText("READY - Point camera at TARGET");
        console.log(`✅ ${DETECTION_ENGINE} is ready for STATUE detection!`);
      } catch (err) {
        console.error(`❌ Failed to initialize ${DETECTION_ENGINE}:`, err);
        console.error("Error details:", err);
        setStatusText(`${DETECTION_ENGINE} ERROR`);
        setGameState(GameState.ERROR);
      }
    };

    initDetector();

    return () => {
      cancelled = true;
    };
  }, []);

  // Initialize Camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        console.log("Starting camera...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // Auto-start detection immediately after video loads
          videoRef.current.onloadedmetadata = () => {
            console.log("Video loaded - auto-starting detection immediately");
            // Mark as initialized immediately to start detection
            setIsInitialized(true);
            console.log("Detection enabled");
          };
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setStatusText("CAMERA ERROR");
        setGameState(GameState.ERROR);
      }
    };
    startCamera();
  }, []);

  // Fast Detection Loop - BlazeFace Only (OPTIMIZED)
  useEffect(() => {
    // Don't start detection until initialization is complete
    if (!isInitialized) return;

    if (gameState !== GameState.IDLE) {
      if (detectionIntervalRef.current) {
        clearInterval(detectionIntervalRef.current);
        detectionIntervalRef.current = null;
      }
      return;
    }

    if (!isDetectorReady) return;
    if (!videoRef.current || !overlayCanvasRef.current) return;

    // Check if the appropriate detector is ready
    const hasBlazeFace = !!blazefaceDetectorRef.current;
    const hasMediaPipe = !!mediapipeDetectorRef.current;
    const hasCoco = !!cocoDetectorRef.current;
    if (!hasBlazeFace && !hasMediaPipe && !hasCoco) return;

    console.log(`Starting face detection with ${DETECTION_ENGINE} (200ms interval)...`);

    const detectFaces = async () => {
      if (isDetectingRef.current) return;
      const video = videoRef.current;
      const canvas = overlayCanvasRef.current;

      if (!video || !canvas || video.videoWidth === 0) {
        return;
      }

      // Set canvas size to match viewport
      if (canvas.width !== viewport.width || canvas.height !== viewport.height) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      isDetectingRef.current = true;
      try {
        // ============================================
        // DUAL ENGINE DETECTION
        // ============================================
        let faceDetections: any[] = [];

        const runBlazeFace = async (): Promise<boolean> => {
          const detector = blazefaceDetectorRef.current;
          if (!detector) return false;

          try {
            const blazeFaces = await detector.estimateFaces(video, false);
            faceDetections.push(...blazeFaces.map((f: any) => ({ ...f, _source: 'BLAZEFACE_FACE' })));
            return blazeFaces.length > 0;
          } catch (err) {
            console.warn("BlazeFace detect() failed:", err);
            return false;
          }
        };

        const runMediaPipe = (): boolean => {
          const detector = mediapipeDetectorRef.current;
          if (!detector) return false;

          try {
            const timestamp = video.currentTime * 1000;
            const result = detector.detectForVideo(video, timestamp);

            const converted = (result.detections || []).map((detection: any) => {
              const bbox = detection.boundingBox;
              return {
                topLeft: [bbox.originX, bbox.originY],
                bottomRight: [bbox.originX + bbox.width, bbox.originY + bbox.height],
                probability: detection.categories && detection.categories.length > 0
                  ? [detection.categories[0].score]
                  : [0.5],
                _source: 'MEDIAPIPE_FACE'
              };
            });

            faceDetections.push(...converted);
            return converted.some((d: any) => (d.probability?.[0] ?? 0) >= DISPLAY_CONFIDENCE_MIN);
          } catch (err) {
            console.warn("MediaPipe detect() failed:", err);
            return false;
          }
        };

        if (DETECTION_ENGINE === 'HYBRID') {
          const mediapipeOk = runMediaPipe();
          if (!mediapipeOk) await runBlazeFace();
        } else if (DETECTION_ENGINE === 'MEDIAPIPE') {
          const mediapipeOk = runMediaPipe();
          if (!mediapipeOk) await runBlazeFace();
        } else {
          const blazeOk = await runBlazeFace();
          if (!blazeOk) runMediaPipe();
        }

        /*

        // HYBRID: run BlazeFace + MediaPipe and combine results
        if (DETECTION_ENGINE === 'HYBRID') {
          const blaze = blazefaceDetectorRef.current;
          if (blaze) {
            try {
              const blazeFaces = await blaze.estimateFaces(video, false);
              faceDetections = [
                ...faceDetections,
                ...blazeFaces.map((f: any) => ({ ...f, _source: 'BLAZEFACE_FACE' }))
              ];
            } catch (err) {
              console.warn("BlazeFace detect() failed:", err);
            }
          }
        }

        if (DETECTION_ENGINE === 'BLAZEFACE') {
          // --- BlazeFace Detection ---
          const detector = blazefaceDetectorRef.current;
          if (!detector) return;

          console.log('🔵 Using BlazeFace detection...');
          faceDetections = await detector.estimateFaces(video, false);
          console.log(`✅ BlazeFace detected ${faceDetections.length} faces`);

        } else {
          // --- MediaPipe Detection ---
          const detector = mediapipeDetectorRef.current;
          if (!detector) return;

          console.log('🟣 Using MediaPipe detection...');
          console.log(`📹 Video state: readyState=${video.readyState}, size=${video.videoWidth}x${video.videoHeight}`);

          // CRITICAL: Use video.currentTime (in seconds) * 1000 for milliseconds
          const timestamp = video.currentTime * 1000;
          console.log(`⏱️ Video timestamp: ${timestamp.toFixed(2)}ms (currentTime=${video.currentTime.toFixed(3)}s)`);

          // Call MediaPipe detectForVideo
          const result = detector.detectForVideo(video, timestamp);
          console.log('📦 MediaPipe raw result:', result);
          console.log(`📦 Result.detections:`, result.detections);

          if (!result.detections || result.detections.length === 0) {
            console.log('⚠️ MediaPipe returned 0 detections');
          }

          // Convert MediaPipe format to BlazeFace-like format
          faceDetections = [...faceDetections, ...(result.detections || []).map((detection: any, index: number) => {
            // MediaPipe returns boundingBox: { originX, originY, width, height }
            const bbox = detection.boundingBox;
            console.log(`  MediaPipe detection ${index}:`, bbox, 'categories:', detection.categories);

            // Convert to BlazeFace format: { topLeft: [x, y], bottomRight: [x2, y2], probability: [score] }
            const converted = {
              topLeft: [bbox.originX, bbox.originY],
              bottomRight: [bbox.originX + bbox.width, bbox.originY + bbox.height],
              probability: detection.categories && detection.categories.length > 0
                ? [detection.categories[0].score]
                : [0.5],
              _source: 'MEDIAPIPE_FACE'
            };
            console.log(`  ✅ Converted to BlazeFace format:`, converted);
            return converted;
          })];

          console.log(`✅ MediaPipe detected ${faceDetections.length} faces (after conversion)`);
        }

        */

        // ============================================
        // COCO-SSD PERSON DETECTION (HEAD FALLBACK)
        const now = Date.now();
        const PERSON_REFRESH_MS = 400;
        const PERSON_MIN_SCORE = 0.25;

        const shouldUsePersonFallback = faceDetections.length === 0;

        if (shouldUsePersonFallback) {
          const coco = cocoDetectorRef.current;
          if (coco && now - lastPersonDetectAtRef.current > PERSON_REFRESH_MS) {
            try {
              const detections = await coco.detect(video, 5, PERSON_MIN_SCORE);
              const personHeads = (detections || [])
                .filter((d: cocoSsd.DetectedObject) => d.class === 'person' && d.score >= PERSON_MIN_SCORE)
                .map((d: cocoSsd.DetectedObject) => {
                  const [px, py, pw, ph] = d.bbox;
                  const aspect = ph / Math.max(1, pw);

                  // Derive a head-only region from the person box (do NOT display body boxes)
                  const headHeightRatio = aspect < 1.2 ? 0.45 : 0.3;
                  const headWidthRatio = aspect < 1.2 ? 0.65 : 0.45;

                  const headW = pw * headWidthRatio;
                  const headH = ph * headHeightRatio;
                  const headX = px + (pw - headW) / 2;
                  const headY = py;

                  const clampedX = Math.max(0, Math.min(video.videoWidth - 1, headX));
                  const clampedY = Math.max(0, Math.min(video.videoHeight - 1, headY));
                  const clampedW = Math.max(1, Math.min(video.videoWidth - clampedX, headW));
                  const clampedH = Math.max(1, Math.min(video.videoHeight - clampedY, headH));

                  return {
                    topLeft: [clampedX, clampedY],
                    bottomRight: [clampedX + clampedW, clampedY + clampedH],
                    probability: [d.score],
                    _source: 'COCO_PERSON'
                  };
                });

              cachedPersonHeadDetectionsRef.current = personHeads;
              lastPersonDetectAtRef.current = now;
            } catch (err) {
              console.warn("COCO-SSD detect() failed:", err);
            }
          }

          if (cachedPersonHeadDetectionsRef.current.length > 0) {
            faceDetections.push(...cachedPersonHeadDetectionsRef.current);
          }
        }

        // UNIFIED PROCESSING (Both engines)
        // ============================================
        // console.log(`🔍 ${DETECTION_ENGINE} detected ${faceDetections.length} face/head candidate(s)`);

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Calculate video display dimensions (object-cover)
          const videoAspect = video.videoWidth / video.videoHeight;
          const canvasAspect = canvas.width / canvas.height;

          let drawWidth, drawHeight, offsetX, offsetY;
          if (canvasAspect > videoAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / videoAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * videoAspect;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          }

          const headRegions: FaceRegion[] = [];
          const currentTime = Date.now();
          const detectedRegionsForDisplay: Array<{
            canvasX: number;
            canvasY: number;
            canvasWidth: number;
            canvasHeight: number;
            headCenterX: number;
            headCenterY: number;
            headRadius: number;
            confidence: number;
            index: number;
          }> = [];

          // Process ALL BlazeFace detections (supports multiple faces)
          faceDetections.forEach((face: any, index: number) => {
            const [x, y] = face.topLeft;
            const [x2, y2] = face.bottomRight;
              const width = x2 - x;
              const height = y2 - y;
              const confidence = face.probability ? face.probability[0] : 0.9;
              const source = face._source || 'UNKNOWN';
              const isPersonHead = source === 'COCO_PERSON';

            // ============================================
            // ENHANCED 6-LAYER FILTER SYSTEM (MediaPipe Optimized)
            // ============================================

              // Filter 1: Reject detections that are too large (likely false positives)
              const maxFaceSize = Math.min(video.videoWidth, video.videoHeight) * (isPersonHead ? 0.95 : 0.9);
            if (width > maxFaceSize || height > maxFaceSize) {
              return;
            }

              // Filter 2: Reject detections that are too small (noise)
              const minFaceSize = isPersonHead
                ? Math.max(18, video.videoWidth * 0.02)
                : Math.max(12, video.videoWidth * 0.015);
            if (width < minFaceSize || height < minFaceSize) {
              return;
            }

              // Filter 3: Reject detections with very low confidence
              const minConfidence = DISPLAY_CONFIDENCE_MIN;
            if (confidence < minConfidence) {
              return;
            }

            // Filter 4: Aspect ratio check - faces should be roughly square to oval
            // MediaPipe stricter: 1.8:1 max (was 2.5:1)
            const aspectRatio = Math.max(width, height) / Math.min(width, height);
              const maxAspectRatio = isPersonHead ? 3.5 : 2.8;
            if (aspectRatio > maxAspectRatio) {
              return;
            }

            // Filter 5: Position sanity check - reject detections at extreme edges
            // Faces at very edge of frame are often false positives
              const edgeMargin = 0; // allow edges (better recall)
            const minX = video.videoWidth * edgeMargin;
            const maxX = video.videoWidth * (1 - edgeMargin);
            const minY = video.videoHeight * edgeMargin;
            const maxY = video.videoHeight * (1 - edgeMargin);

            const centerX = x + width / 2;
            const centerY = y + height / 2;

            if (centerX < minX || centerX > maxX || centerY < minY || centerY > maxY) {
              return;
            }

            // Filter 6: Size consistency check - reject extremely different width/height
            // Real faces have relatively consistent proportions
            const sizeDiff = Math.abs(width - height);
            const avgSize = (width + height) / 2;
            const sizeVariance = sizeDiff / avgSize;

            if (!isPersonHead && sizeVariance > 0.75) {
              return;
            }

            // ============================================
            // Filter 7: TOP-HAIR HUMAN REJECTION (CRITICAL)
            // ============================================
            // Analyze the region to determine if it's a statue or human
            const hairAnalysis = analyzeHairOnTop(video, { x, y, width, height });

            if (hairAnalysis.isHuman) {
              // Ensure we never show/persist boxes over real humans.
              const humanCanvasX = offsetX + (x / video.videoWidth) * drawWidth;
              const humanCanvasY = offsetY + (y / video.videoHeight) * drawHeight;
              const humanCanvasW = (width / video.videoWidth) * drawWidth;
              const humanCanvasH = (height / video.videoHeight) * drawHeight;
              const humanCenterX = humanCanvasX + humanCanvasW / 2;
              const humanCenterY = humanCanvasY + humanCanvasH / 2;
              const clearRadius = Math.max(24, Math.max(humanCanvasW, humanCanvasH) * 0.6);
              const clearRadius2 = clearRadius * clearRadius;

              detectedRegionsHistoryRef.current = detectedRegionsHistoryRef.current.filter((item) => {
                const dx = item.region.headCenterX - humanCenterX;
                const dy = item.region.headCenterY - humanCenterY;
                return dx * dx + dy * dy > clearRadius2;
              });
              return;
            }

            /*
            console.log(`    🗿 Statue check: ${materialAnalysis.isStatue ? '✅ IS STATUE' : '❌ IS HUMAN'}`);
            console.log(`    📊 Reason: ${materialAnalysis.reason}`);

            if (!materialAnalysis.isStatue) {
              console.log(`  ❌ FILTER 7 FAIL: REJECTED - ${materialAnalysis.reason} (we only want statues)`);
              return;
            }

            console.log(`  ✅✅ FINAL ACCEPTANCE: Face ${index + 1} is a STATUE - passed ALL filters including material check`);

            */

            // Convert to canvas coordinates
            const canvasX = offsetX + (x / video.videoWidth) * drawWidth;
            const canvasY = offsetY + (y / video.videoHeight) * drawHeight;
            const canvasWidth = (width / video.videoWidth) * drawWidth;
            const canvasHeight = (height / video.videoHeight) * drawHeight;

            // For face detection, the entire bbox IS the head
            const headCenterX = canvasX + canvasWidth / 2;
            const headCenterY = canvasY + canvasHeight / 2;
            const headRadius = Math.max(canvasWidth, canvasHeight) * 0.6;

            // Store for potential persistence
            detectedRegionsForDisplay.push({
              canvasX,
              canvasY,
              canvasWidth,
              canvasHeight,
              headCenterX,
              headCenterY,
              headRadius,
              confidence,
              index
            });

            // Calculate GROWTH region - smaller circle in lower-middle part of head
            const growthCenterX = headCenterX;
            const growthCenterY = headCenterY + headRadius * 0.3; // Move down 30% of radius
            const growthRadius = headRadius * 0.5; // 50% of head radius

            headRegions.push({
              centerX: headCenterX / canvas.width,
              centerY: headCenterY / canvas.height,
              radius: headRadius / Math.max(canvas.width, canvas.height),
              confidence: face.probability ? face.probability[0] : 0.9,
              growthCenterX: growthCenterX / canvas.width,
              growthCenterY: growthCenterY / canvas.height,
              growthRadius: growthRadius / Math.max(canvas.width, canvas.height)
            });
          });

          // Add newly detected regions to history with current timestamp
          detectedRegionsForDisplay.forEach(region => {
            detectedRegionsHistoryRef.current.push({
              region: region,
              timestamp: currentTime
            });
          });

          // Remove regions older than BOX_PERSIST_MS from history
          detectedRegionsHistoryRef.current = detectedRegionsHistoryRef.current.filter(
            item => currentTime - item.timestamp < BOX_PERSIST_MS
          );

            // Get unique regions to display (merge current detections with recent history)
            // Prefer the highest-confidence region per position key (prevents stale low-confidence boxes).
            const regionsByKey = new Map<string, (typeof detectedRegionsForDisplay)[number]>();
            detectedRegionsHistoryRef.current.forEach(item => {
              const key = `${Math.round(item.region.headCenterX)}_${Math.round(item.region.headCenterY)}`;
              const existing = regionsByKey.get(key);
              if (!existing || item.region.confidence > existing.confidence) {
                regionsByKey.set(key, item.region);
              }
            });

            const regionsToDisplay = Array.from(regionsByKey.values());
            const displayRegions = regionsToDisplay.filter(r => r.confidence >= DISPLAY_CONFIDENCE_MIN);
            const actionableRegions = displayRegions.filter(r => r.confidence >= INTERACTION_CONFIDENCE_MIN);

            // Draw all regions to display (orange dashed; dim if below interaction threshold)
            displayRegions.forEach((region) => {
              const isActionable = region.confidence >= INTERACTION_CONFIDENCE_MIN;
              const boxAlpha = isActionable ? 0.85 : 0.35;
              const circleAlpha = isActionable ? 0.55 : 0.25;
              const textAlpha = isActionable ? 0.95 : 0.6;

              ctx.save();
              ctx.setLineDash([8, 6]);

              // Draw circle
              ctx.beginPath();
              ctx.arc(region.headCenterX, region.headCenterY, region.headRadius, 0, 2 * Math.PI);
              ctx.strokeStyle = `rgba(255, 165, 0, ${circleAlpha})`;
              ctx.lineWidth = 2;
              ctx.stroke();

              // Draw detection box (orange dashed)
              ctx.strokeStyle = `rgba(255, 165, 0, ${boxAlpha})`;
              ctx.lineWidth = 2;
              ctx.strokeRect(region.canvasX, region.canvasY, region.canvasWidth, region.canvasHeight);

              // Draw face number and confidence
              ctx.fillStyle = `rgba(255, 165, 0, ${textAlpha})`;
              ctx.font = 'bold 16px monospace';
              ctx.fillText(`#${region.index + 1}`, region.canvasX + 5, region.canvasY + 20);
              ctx.font = '12px monospace';
              ctx.fillText(`${(region.confidence * 100).toFixed(0)}%`, region.canvasX + 5, region.canvasY + 38);

              ctx.restore();
            });

            const headsForInteraction: FaceRegion[] = actionableRegions.map((region) => {
              const growthCenterX = region.headCenterX;
              const growthCenterY = region.headCenterY + region.headRadius * 0.3;
              const growthRadius = region.headRadius * 0.5;

              return {
                centerX: region.headCenterX / canvas.width,
                centerY: region.headCenterY / canvas.height,
                radius: region.headRadius / Math.max(canvas.width, canvas.height),
                confidence: region.confidence,
                growthCenterX: growthCenterX / canvas.width,
                growthCenterY: growthCenterY / canvas.height,
                growthRadius: growthRadius / Math.max(canvas.width, canvas.height)
              };
            });

            detectedHeadsRef.current = headsForInteraction;
            setDetectedHeads(headsForInteraction);

            if (headsForInteraction.length > 0) {
              setStatusText(`${headsForInteraction.length} TARGET(S) DETECTED`);
            } else if (displayRegions.length > 0) {
              setStatusText("LOW CONFIDENCE - MOVE CLOSER");
            } else {
              setStatusText("Point camera at TARGET");
            }

      } catch (err) {
        console.error("Detection error:", err);
      } finally {
        isDetectingRef.current = false;
      }
    };

    // Run detection every 200ms (faster response, still efficient)
    detectFaces();
    const intervalId = setInterval(detectFaces, 200);
    detectionIntervalRef.current = intervalId as any;

    return () => {
      if (detectionIntervalRef.current) {
        clearInterval(detectionIntervalRef.current);
      }
    };
  }, [gameState, isDetectorReady, viewport.width, viewport.height, isInitialized]);

  const handleInteraction = useCallback(async () => {
    if (!isInitialized || !isDetectorReady) return;
    // Increment VICI click counter
    const newClickCount = viciClickCount + 1;
    setViciClickCount(newClickCount);

    // Change color every 5 clicks with RANDOM selection
    // First 5 clicks (1-5): Color A, Next 5 clicks (6-10): Color B, etc.
    // So change color at clicks 6, 11, 16, 21...
    if ((newClickCount - 1) % 5 === 0 && newClickCount > 1) {
      const newColorScheme = getRandomColorScheme();
      const newColorIndex = colorSchemes.findIndex(
        scheme => scheme.flower.r === newColorScheme.flower.r &&
                  scheme.flower.g === newColorScheme.flower.g &&
                  scheme.flower.b === newColorScheme.flower.b
      );
      setCurrentColorScheme(newColorScheme);
      setCurrentColorIndex(newColorIndex);
      const schemeName = colorSchemeNames[newColorIndex];
      console.log(`🎨 COLOR CHANGED to ${schemeName} (RANDOM) at click ${newClickCount} (every 5 clicks):`, newColorScheme);
    }

    // IF IDLE: Capture and detect heads
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

        const heads = detectedHeadsRef.current;

        // Require at least one visible/actionable detection box (confidence >= 40%)
          if (heads.length === 0) {
            setStatusText("NO TARGET DETECTED");
            setTimeout(() => setStatusText("Point camera at TARGET"), 1200);
            return;
          }

        setGameState(GameState.CAPTURING);
        setStatusText("");

        // 1. Capture Frame
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Draw current video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get Base64
        const base64 = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(base64);

        // 2. Use detected head regions
        setGameState(GameState.ANALYZING);
        setStatusText("VENI VIDI VICI");

        // Create result with all detected head regions
        const result: AnalysisResult = {
          detected: true,
          faceRegions: heads,
          confidence: heads.reduce((sum, head) => sum + head.confidence, 0) / heads.length,
          label: `${heads.length} target(s)`
        };

        setAnalysisResult(result);
        setStatusText("");
        setGameState(GameState.GROWING);
        setGrowthTrigger(prev => prev + 1);
    }
    // IF ALREADY GROWING: Add more plants
    else if (gameState === GameState.GROWING) {
        setGrowthTrigger(prev => prev + 1);
    }

  }, [gameState, isDetectorReady, isInitialized, viciClickCount]);

  const handleReset = () => {
    setGameState(GameState.IDLE);
    setCapturedImage(null);
    setAnalysisResult(null);
    setGrowthTrigger(0);
    setDetectedHeads([]);
    detectedHeadsRef.current = [];
    setStatusText("Point camera at TARGET");
  };

  return (
    <div className="relative w-full h-screen bg-void-black overflow-hidden font-future select-none">

      {/* Hidden Canvas for Capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* --- LAYER 1: VIDEO FEED --- */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        webkit-playsinline="true"
        x5-playsinline="true"
        x-webkit-airplay="allow"
        className={`absolute top-0 left-0 transition-opacity duration-700 ${capturedImage ? 'opacity-0' : 'opacity-100'}`}
        style={{
          filter: 'contrast(1.1) brightness(1.1) saturate(0.8)',
          width: '100.5%',
          height: '100.5%',
          left: '-0.25%',
          top: '-0.25%',
          objectFit: 'cover'
        }}
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          video.play().catch(err => console.log("Play error:", err));
        }}
        onCanPlay={(e) => {
          const video = e.currentTarget;
          if (video.paused) {
            video.play().catch(err => console.log("Play error:", err));
          }
        }}
        onPause={(e) => {
          const video = e.currentTarget;
          video.play().catch(err => console.log("Play error:", err));
        }}
      />

      {/* --- LAYER 1.5: DETECTION OVERLAY --- */}
      {!capturedImage && gameState === GameState.IDLE && (
        <canvas
          ref={overlayCanvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        />
      )}

      {/* --- LAYER 2: FROZEN IMAGE (For Analysis/Growth) --- */}
      {capturedImage && (
        <img
            src={capturedImage}
            alt="Frozen Reality"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
                 filter: 'contrast(1.2) brightness(0.9) saturate(0.5) sepia(0.3) blur(0.5px)'
            }}
        />
      )}

      {/* --- LAYER 3: PLANT GROWTH (THREE.JS + HUD) --- */}
      <PlantGrowth
        active={gameState === GameState.GROWING}
        analysis={analysisResult}
        capturedImage={capturedImage}
        growthTrigger={growthTrigger}
        width={viewport.width}
        height={viewport.height}
        colorScheme={currentColorScheme}
      />

      {/* --- LAYER 4: UI OVERLAY --- */}
      <DreamOverlay
        gameState={gameState}
        onInteraction={handleInteraction}
        onReset={handleReset}
        analysisText={statusText}
        analysisResult={analysisResult}
      />

      {/* Vignette & Grain Overlay for atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,10,0,0.6)_100%)] mix-blend-multiply"></div>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"></div>

    </div>
  );
};

export default App;
