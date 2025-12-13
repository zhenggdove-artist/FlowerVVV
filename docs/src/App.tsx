import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion, ColorScheme } from './types.ts';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';
import { FaceDetector, FilesetResolver } from '@mediapipe/tasks-vision';

// ============================================
// DUAL ENGINE CONFIGURATION
// ============================================
type DetectionEngine = 'BLAZEFACE' | 'MEDIAPIPE';
const DETECTION_ENGINE: DetectionEngine = 'MEDIAPIPE'; // Switch to 'MEDIAPIPE' to test
const MEDIAPIPE_MODEL_FULL_RANGE = "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_full_range/float16/1/blaze_face_full_range.tflite";
const MEDIAPIPE_MODEL_SHORT_RANGE = "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite";
// ============================================

type StatueMaterialAnalysis = {
  isStatue: boolean;
  reason: string;
  saturation: number;
  skinTone: number;
  grayRatio: number;
  texture: number;
  signature: Uint8Array;
  hairDarkRatio?: number;
};

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

// Expand bbox slightly to capture material context (hairline, shoulders, background)
const padBoundingBox = (
  bbox: { x: number; y: number; width: number; height: number },
  video: HTMLVideoElement
) => {
  const padX = Math.min(bbox.width * 0.12, 18);
  const padY = Math.min(bbox.height * 0.12, 18);
  const x = Math.max(0, bbox.x - padX);
  const y = Math.max(0, bbox.y - padY);
  const x2 = Math.min(video.videoWidth, bbox.x + bbox.width + padX);
  const y2 = Math.min(video.videoHeight, bbox.y + bbox.height + padY);
  return {
    x,
    y,
    width: Math.max(1, x2 - x),
    height: Math.max(1, y2 - y)
  };
};

const buildRegionSignature = (sourceCanvas: HTMLCanvasElement): Uint8Array => {
  const signatureCanvas = document.createElement('canvas');
  const signatureSize = 8;
  signatureCanvas.width = signatureSize;
  signatureCanvas.height = signatureSize;
  const sigCtx = signatureCanvas.getContext('2d');
  if (!sigCtx) return new Uint8Array();
  sigCtx.drawImage(sourceCanvas, 0, 0, signatureSize, signatureSize);
  const sigData = sigCtx.getImageData(0, 0, signatureSize, signatureSize).data;
  const signature = new Uint8Array(signatureSize * signatureSize);
  for (let i = 0; i < signature.length; i++) {
    const idx = i * 4;
    const r = sigData[idx];
    const g = sigData[idx + 1];
    const b = sigData[idx + 2];
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
    signature[i] = Math.round(luma);
  }
  return signature;
};

const computeMotionScore = (prev: Uint8Array | undefined, current: Uint8Array) => {
  if (!prev || prev.length !== current.length) return 0;
  let diff = 0;
  for (let i = 0; i < current.length; i++) {
    diff += Math.abs(current[i] - prev[i]);
  }
  return diff / (current.length * 255);
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
): StatueMaterialAnalysis => {
  const tempCanvas = document.createElement('canvas');
  const width = Math.max(4, Math.round(bbox.width));
  const height = Math.max(4, Math.round(bbox.height));
  tempCanvas.width = width;
  tempCanvas.height = height;
  const ctx = tempCanvas.getContext('2d', { willReadFrequently: true });

  if (!ctx) {
    return { isStatue: false, reason: 'Canvas error', saturation: 0, skinTone: 0, grayRatio: 0, texture: 0, signature: new Uint8Array() };
  }

  ctx.drawImage(
    video,
    bbox.x, bbox.y, bbox.width, bbox.height,
    0, 0, width, height
  );

  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = imageData.data;

  let totalSaturation = 0;
  let skinTonePixels = 0;
  let totalSamples = 0;
  let grayPixels = 0;
  let lumaSum = 0;
  let lumaSqSum = 0;
  let edgeSum = 0;
  let hairDarkCount = 0;
  let hairSamples = 0;

  const stride = Math.max(1, Math.floor(Math.min(width, height) / 24));
  const hairRegionY = Math.max(1, Math.floor(height * 0.45)); // top 45% area for hair check

  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const idx = (y * width + x) * 4;
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const delta = max - min;
      const saturation = max === 0 ? 0 : (delta / max) * 100;
      totalSaturation += saturation;

      const isSkinRGB = (
        r > 95 && g > 40 && b > 20 &&
        r > g && g > b &&
        Math.abs(r - g) > 15
      );
      const cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b;
      const cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;
      const isSkinYCbCr = cb >= 77 && cb <= 127 && cr >= 133 && cr <= 173;
      if (isSkinRGB || isSkinYCbCr) {
        skinTonePixels++;
      }

      const colorDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
      if (colorDiff < 18) {
        grayPixels++;
      }

      const luma = 0.299 * r + 0.587 * g + 0.114 * b;
      lumaSum += luma;
      lumaSqSum += luma * luma;

      // Hair heuristic: dense dark band near top of head = likely real human hair
      if (y <= hairRegionY) {
        if (luma < 120) {
          hairDarkCount++;
        }
        hairSamples++;
      }

      if (x >= stride) {
        const leftIdx = (y * width + (x - stride)) * 4;
        const leftLuma = 0.299 * pixels[leftIdx] + 0.587 * pixels[leftIdx + 1] + 0.114 * pixels[leftIdx + 2];
        edgeSum += Math.abs(luma - leftLuma);
      }
      if (y >= stride) {
        const topIdx = ((y - stride) * width + x) * 4;
        const topLuma = 0.299 * pixels[topIdx] + 0.587 * pixels[topIdx + 1] + 0.114 * pixels[topIdx + 2];
        edgeSum += Math.abs(luma - topLuma);
      }

      totalSamples++;
    }
  }

  const avgSaturation = totalSaturation / Math.max(1, totalSamples);
  const skinToneRatio = skinTonePixels / Math.max(1, totalSamples);
  const grayRatio = grayPixels / Math.max(1, totalSamples);
  const avgLuma = lumaSum / Math.max(1, totalSamples);
  const lumaVariance = lumaSqSum / Math.max(1, totalSamples) - avgLuma * avgLuma;
  const lumaStd = Math.sqrt(Math.max(0, lumaVariance));
  const edgeDensity = edgeSum / (Math.max(1, totalSamples) * 255 * 2);
  const hairDarkRatio = hairSamples > 0 ? hairDarkCount / hairSamples : 0;

  console.log(`    dYZ" Material Analysis: sat=${avgSaturation.toFixed(1)}%, skin=${(skinToneRatio * 100).toFixed(1)}%, gray=${(grayRatio * 100).toFixed(1)}%, tex=${(edgeDensity * 100).toFixed(1)}%, lumaStd=${lumaStd.toFixed(1)}, hairDark=${(hairDarkRatio * 100).toFixed(1)}%`);

  // Hair-only heuristic: if large dark band on top -> human, otherwise treat as statue
  const hairLooksHuman = hairDarkRatio > 0.1; // sensitive

  let isStatue = true;
  let reason = 'No human hair signature detected';

  if (hairLooksHuman) {
    isStatue = false;
    reason = `Human hair detected (dark top ${(hairDarkRatio * 100).toFixed(1)}%)`;
  }

  const signature = buildRegionSignature(tempCanvas);

  return {
    isStatue,
    reason,
    saturation: avgSaturation,
    skinTone: skinToneRatio * 100,
    grayRatio: grayRatio * 100,
    texture: edgeDensity * 100,
    signature,
    hairDarkRatio: hairDarkRatio * 100
  };
};
const App: React.FC = () => {
  console.log("###################################################");
  console.log(`APP.TSX: DUAL ENGINE MODE - ACTIVE: ${DETECTION_ENGINE}`);
  console.log(`🗿 STATUE DETECTION: ENABLED (rejecting human faces)`);
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);

  // Dual engine refs
  const blazefaceDetectorRef = useRef<blazeface.BlazeFaceModel | null>(null);
  const mediapipeDetectorRef = useRef<FaceDetector | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  // MediaPipe specific
  const videoTimestampRef = useRef<number>(0);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("LOADING...");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [detectedHeads, setDetectedHeads] = useState<FaceRegion[]>([]);
  const [isDetectorReady, setIsDetectorReady] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

const [growthTrigger, setGrowthTrigger] = useState<number>(0);
const detectionStableCountRef = useRef<number>(0);
const autoCaptureFiredRef = useRef<boolean>(false);
const lastDetectedHeadsRef = useRef<FaceRegion[]>([]);
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
const regionMotionHistoryRef = useRef<Map<string, { signature: Uint8Array; timestamp: number }>>(new Map());

  // Color scheme management
  const [viciClickCount, setViciClickCount] = useState<number>(0);
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>(colorSchemes[0]); // Start with pink
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

  console.log("APP STATE - gameState:", gameState, "capturedImage:", !!capturedImage, "heads:", detectedHeads.length, "clicks:", viciClickCount);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Detection Engine (Dual Engine System)
  useEffect(() => {
    let cancelled = false;

    const initBlazeFace = async () => {
      console.log("🔵 Initializing BlazeFace with AGGRESSIVE settings...");
      setStatusText("LOADING BLAZEFACE...");

      const blazeModel = await blazeface.load({
        maxFaces: 150,
        iouThreshold: 0.2,
        scoreThreshold: 0.18
      });

      if (cancelled) return;

      blazefaceDetectorRef.current = blazeModel;
      console.log("✅ BlazeFace loaded successfully!");
      return true;
    };

    const initMediaPipe = async () => {
      console.log("🟣 Initializing MediaPipe FaceDetector with OPTIMIZED settings...");
      setStatusText("LOADING MEDIAPIPE...");

      console.log("📦 Loading MediaPipe Vision wasm files...");
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
      );
      console.log("✅ Vision wasm loaded");

      if (cancelled) return false;

      console.log("🔧 Creating FaceDetector with WIDE-RANGE config (prefers small/far heads, falls back if needed)...");
      console.log("   - Model: blaze_face_full_range (captures small distant heads)");
      console.log("   - minDetectionConfidence: 0.28 (very sensitive; rely on hair/material filters to reject humans)");
      console.log("   - minSuppressionThreshold: 0.15 (looser NMS to keep weak boxes)");

      let detector: FaceDetector | null = null;
      try {
        detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: MEDIAPIPE_MODEL_FULL_RANGE,
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.28,
          minSuppressionThreshold: 0.15
        });
        console.log("✅ FaceDetector created with FULL-RANGE model");
      } catch (err) {
        console.warn("⚠️ Full-range model failed, falling back to short-range:", err);
        detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: MEDIAPIPE_MODEL_SHORT_RANGE,
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.32,
          minSuppressionThreshold: 0.2
        });
        console.log("✅ FaceDetector created with SHORT-RANGE fallback");
      }

      if (cancelled) return false;

      mediapipeDetectorRef.current = detector;
      console.log("✅ MediaPipe loaded successfully!");
      return true;
    };

    const initDetector = async () => {
      try {
        if (DETECTION_ENGINE === 'BLAZEFACE') {
          await initBlazeFace();
        } else {
          await initMediaPipe();
        }

        if (cancelled) return;

        setIsDetectorReady(true);
        setStatusText("READY - Point camera at STATUES");
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
            console.log("Detection enabled - auto-capture will trigger when statues detected");
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
    if (DETECTION_ENGINE === 'BLAZEFACE' && !blazefaceDetectorRef.current) return;
    if (DETECTION_ENGINE === 'MEDIAPIPE' && !mediapipeDetectorRef.current) return;

    console.log(`Starting face detection with ${DETECTION_ENGINE} (200ms interval)...`);

    const detectFaces = async () => {
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

      try {
        // ============================================
        // DUAL ENGINE DETECTION
        // ============================================
        let faceDetections: any[] = [];

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
          faceDetections = (result.detections || []).map((detection: any, index: number) => {
            // MediaPipe returns boundingBox: { originX, originY, width, height }
            const bbox = detection.boundingBox;
            console.log(`  MediaPipe detection ${index}:`, bbox, 'categories:', detection.categories);

            // Convert to BlazeFace format: { topLeft: [x, y], bottomRight: [x2, y2], probability: [score] }
            const converted = {
              topLeft: [bbox.originX, bbox.originY],
              bottomRight: [bbox.originX + bbox.width, bbox.originY + bbox.height],
              probability: detection.categories && detection.categories.length > 0
                ? [detection.categories[0].score]
                : [0.5]
            };
            console.log(`  ✅ Converted to BlazeFace format:`, converted);
            return converted;
          });

          console.log(`✅ MediaPipe detected ${faceDetections.length} faces (after conversion)`);
        }

        // ============================================
        // UNIFIED PROCESSING (Both engines)
        // ============================================
        console.log(`🔍 ${DETECTION_ENGINE} detected ${faceDetections.length} faces in current frame`);

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

            console.log(`  Face ${index + 1}: bbox=[${x.toFixed(0)},${y.toFixed(0)},${width.toFixed(0)},${height.toFixed(0)}] confidence=${confidence.toFixed(2)}`);

            // ============================================
            // ENHANCED 8-LAYER FILTER SYSTEM (MediaPipe Optimized)
            // ============================================

            // Filter 1: Reject detections that are too large (likely false positives)
            // Allow large faces (close-up statues)
            const maxFaceSize = Math.min(video.videoWidth, video.videoHeight) * 0.95;
            if (width > maxFaceSize || height > maxFaceSize) {
              console.log(`  ❌ FILTER 1 FAIL: Face ${index + 1} too large (${width.toFixed(0)}x${height.toFixed(0)} exceeds ${maxFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 2: Reject detections that are too small (noise)
            // For MediaPipe: minimum 0.6% of video width or 4 pixels (allow distant statues)
            const minFaceSize = DETECTION_ENGINE === 'MEDIAPIPE'
              ? Math.max(4, video.videoWidth * 0.006)
              : Math.max(4, video.videoWidth * 0.005);
            if (width < minFaceSize || height < minFaceSize) {
              console.log(`  ❌ FILTER 2 FAIL: Face ${index + 1} too small (${width.toFixed(0)}x${height.toFixed(0)} below ${minFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 3: Reject detections with low confidence
            // MediaPipe: Match relaxed minDetectionConfidence (0.2), BlazeFace: 0.18
            const minConfidence = DETECTION_ENGINE === 'MEDIAPIPE' ? 0.2 : 0.18;
            if (confidence < minConfidence) {
              console.log(`  ❌ FILTER 3 FAIL: Face ${index + 1} low confidence (${(confidence * 100).toFixed(0)}% < ${(minConfidence * 100).toFixed(0)}%)`);
              return;
            }

            // Filter 4: Aspect ratio check - faces should be roughly square to oval
            // MediaPipe stricter: 1.8:1 max (was 2.5:1)
            const aspectRatio = Math.max(width, height) / Math.min(width, height);
            const maxAspectRatio = DETECTION_ENGINE === 'MEDIAPIPE' ? 1.8 : 2.5;
            if (aspectRatio > maxAspectRatio) {
              console.log(`  ❌ FILTER 4 FAIL: Face ${index + 1} invalid aspect ratio (${aspectRatio.toFixed(2)} > ${maxAspectRatio})`);
              return;
            }

            // Filter 5: Position sanity check - reject detections at extreme edges
            // Faces at very edge of frame are often false positives
            const edgeMargin = DETECTION_ENGINE === 'MEDIAPIPE' ? 0.01 : 0; // 1% margin for MediaPipe
            const minX = video.videoWidth * edgeMargin;
            const maxX = video.videoWidth * (1 - edgeMargin);
            const minY = video.videoHeight * edgeMargin;
            const maxY = video.videoHeight * (1 - edgeMargin);

            const centerX = x + width / 2;
            const centerY = y + height / 2;

            if (centerX < minX || centerX > maxX || centerY < minY || centerY > maxY) {
              console.log(`  ❌ FILTER 5 FAIL: Face ${index + 1} too close to edge (center: ${centerX.toFixed(0)}, ${centerY.toFixed(0)})`);
              return;
            }

            // Filter 6: Size consistency check - reject extremely different width/height
            // Real faces have relatively consistent proportions
            const sizeDiff = Math.abs(width - height);
            const avgSize = (width + height) / 2;
            const sizeVariance = sizeDiff / avgSize;

            if (sizeVariance > 0.4 && DETECTION_ENGINE === 'MEDIAPIPE') {
              console.log(`  ❌ FILTER 6 FAIL: Face ${index + 1} inconsistent dimensions (variance: ${(sizeVariance * 100).toFixed(0)}%)`);
              return;
            }

            console.log(`  ✅ PASSED geometric filters 1-6`);

            // ============================================
            // Filter 7: STATUE MATERIAL DETECTION (CRITICAL)
            // ============================================
            // Analyze the region to determine if it's a statue or human
            const paddedBox = padBoundingBox({ x, y, width, height }, video);
            const materialAnalysis = analyzeStatueMaterial(video, paddedBox);

            console.log(`    🗿 Statue check: ${materialAnalysis.isStatue ? '✅ IS STATUE' : '❌ IS HUMAN'}`);
            console.log(`    📊 Reason: ${materialAnalysis.reason}`);

            if (!materialAnalysis.isStatue) {
              console.log(`  ❌ FILTER 7 FAIL: REJECTED - ${materialAnalysis.reason} (we only want statues)`);
              return;
            }

            // ============================================
            // Motion filter disabled to maximize detection retention
            console.log(`  ✅✅ FINAL ACCEPTANCE: Face ${index + 1} is a STATUE - passed ALL filters`);

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

          // Drop stale motion signatures (keep memory bounded)
          regionMotionHistoryRef.current.forEach((entry, key) => {
            if (currentTime - entry.timestamp > 4000) {
              regionMotionHistoryRef.current.delete(key);
            }
          });

          // Add newly detected regions to history with current timestamp
          detectedRegionsForDisplay.forEach(region => {
            detectedRegionsHistoryRef.current.push({
              region: region,
              timestamp: currentTime
            });
          });

          // Remove regions older than 1 second from history
          detectedRegionsHistoryRef.current = detectedRegionsHistoryRef.current.filter(
            item => currentTime - item.timestamp < 1000
          );

          // Get unique regions to display (merge current detections with recent history)
          const regionsToDisplay: typeof detectedRegionsForDisplay = [];
          const addedPositions = new Set<string>();

          detectedRegionsHistoryRef.current.forEach(item => {
            const key = `${Math.round(item.region.headCenterX)}_${Math.round(item.region.headCenterY)}`;
            if (!addedPositions.has(key)) {
              regionsToDisplay.push(item.region);
              addedPositions.add(key);
            }
          });

          // Draw all regions to display
          regionsToDisplay.forEach((region) => {
            // Draw circle with dashed orange line
            ctx.beginPath();
            ctx.setLineDash([6, 4]);
            ctx.arc(region.headCenterX, region.headCenterY, region.headRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255, 165, 0, 0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw detection box dashed orange
            ctx.setLineDash([6, 4]);
            ctx.strokeStyle = 'rgba(255, 165, 0, 0.8)';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(region.canvasX, region.canvasY, region.canvasWidth, region.canvasHeight);

            // Draw face number and confidence
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(255, 165, 0, 0.9)';
            ctx.font = 'bold 16px monospace';
            ctx.fillText(`#${region.index + 1}`, region.canvasX + 5, region.canvasY + 20);
            ctx.font = '12px monospace';
            ctx.fillText(`${(region.confidence * 100).toFixed(0)}%`, region.canvasX + 5, region.canvasY + 38);
          });

          setDetectedHeads(headRegions);

          // Manual capture only: show status but do not auto-trigger, so VICI stays clickable
          if (headRegions.length > 0) {
            setStatusText(`${headRegions.length} STATUE(S) DETECTED - READY`);
          } else {
            setStatusText("Point camera at STATUES");
          }

          // keep latest detections in a ref for immediate button press
          if (headRegions.length > 0) {
            lastDetectedHeadsRef.current = headRegions;
          }

      } catch (err) {
        console.error("Detection error:", err);
      }
    };

    // Run detection every 90ms (more responsive)
    detectFaces();
    const intervalId = setInterval(detectFaces, 90);
    detectionIntervalRef.current = intervalId as any;

    return () => {
      if (detectionIntervalRef.current) {
        clearInterval(detectionIntervalRef.current);
      }
    };
  }, [gameState, isDetectorReady, viewport.width, viewport.height, isInitialized]);

  const handleInteraction = useCallback(async () => {
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

        // Check if at least one statue is detected (use latest ref to avoid race where state cleared)
        const heads = detectedHeads.length > 0 ? detectedHeads : lastDetectedHeadsRef.current;

        if (!heads || heads.length === 0) {
          setStatusText("NO STATUES DETECTED");
          setTimeout(() => setStatusText("Point camera at STATUES"), 2000);
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
          label: `${heads.length} statue(s)`
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

  }, [gameState, detectedHeads, viciClickCount]);

  const handleReset = () => {
    setGameState(GameState.IDLE);
    setCapturedImage(null);
    setAnalysisResult(null);
    setGrowthTrigger(0);
    setDetectedHeads([]);
    setStatusText("Point camera at STATUES");
    detectionStableCountRef.current = 0;
    autoCaptureFiredRef.current = false;
    lastDetectedHeadsRef.current = [];
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
