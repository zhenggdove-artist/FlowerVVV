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

  // For detection box persistence (2 second minimum display per box)
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
        maxFaces: 100,
        iouThreshold: 0.1,
        scoreThreshold: 0.3
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

      console.log("🔧 Creating FaceDetector with OPTIMIZED config...");
      console.log("   - Model: blaze_face_short_range (optimized for accuracy)");
      console.log("   - minDetectionConfidence: 0.65 (HIGH - reduces false positives)");
      console.log("   - minSuppressionThreshold: 0.4 (strict NMS)");

      const detector = await FaceDetector.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        minDetectionConfidence: 0.65,  // CRITICAL: 65% confidence minimum (was 0.3)
        minSuppressionThreshold: 0.4   // Stricter Non-Maximum Suppression
      });
      console.log("✅ FaceDetector created with HIGH accuracy settings");

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
            // ENHANCED 6-LAYER FILTER SYSTEM (MediaPipe Optimized)
            // ============================================

            // Filter 1: Reject detections that are too large (likely false positives)
            // MediaPipe more strict: max 50% of video dimension (was 70%)
            const maxFaceSize = Math.min(video.videoWidth, video.videoHeight) * (DETECTION_ENGINE === 'MEDIAPIPE' ? 0.5 : 0.7);
            if (width > maxFaceSize || height > maxFaceSize) {
              console.log(`  ❌ FILTER 1 FAIL: Face ${index + 1} too large (${width.toFixed(0)}x${height.toFixed(0)} exceeds ${maxFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 2: Reject detections that are too small (noise)
            // For MediaPipe: minimum 3% of video width or 15 pixels (stricter)
            const minFaceSize = DETECTION_ENGINE === 'MEDIAPIPE'
              ? Math.max(15, video.videoWidth * 0.03)
              : Math.max(10, video.videoWidth * 0.02);
            if (width < minFaceSize || height < minFaceSize) {
              console.log(`  ❌ FILTER 2 FAIL: Face ${index + 1} too small (${width.toFixed(0)}x${height.toFixed(0)} below ${minFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 3: Reject detections with low confidence
            // MediaPipe: Match minDetectionConfidence (0.65), BlazeFace: 0.3
            const minConfidence = DETECTION_ENGINE === 'MEDIAPIPE' ? 0.65 : 0.3;
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
            const edgeMargin = DETECTION_ENGINE === 'MEDIAPIPE' ? 0.05 : 0; // 5% margin for MediaPipe
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
            const materialAnalysis = analyzeStatueMaterial(video, { x, y, width, height });

            console.log(`    🗿 Statue check: ${materialAnalysis.isStatue ? '✅ IS STATUE' : '❌ IS HUMAN'}`);
            console.log(`    📊 Reason: ${materialAnalysis.reason}`);

            if (!materialAnalysis.isStatue) {
              console.log(`  ❌ FILTER 7 FAIL: REJECTED - ${materialAnalysis.reason} (we only want statues)`);
              return;
            }

            console.log(`  ✅✅ FINAL ACCEPTANCE: Face ${index + 1} is a STATUE - passed ALL filters including material check`);

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

          // Remove regions older than 2 seconds from history
          detectedRegionsHistoryRef.current = detectedRegionsHistoryRef.current.filter(
            item => currentTime - item.timestamp < 2000
          );

          // Get unique regions to display (merge current detections with recent history)
          const regionsToDisplay: typeof detectedRegionsForDisplay = [];
          const addedPositions = new Set<string>();

          // Add all regions from history (including current frame)
          detectedRegionsHistoryRef.current.forEach(item => {
            // Use center position as unique key (rounded to avoid floating point issues)
            const key = `${Math.round(item.region.headCenterX)}_${Math.round(item.region.headCenterY)}`;
            if (!addedPositions.has(key)) {
              regionsToDisplay.push(item.region);
              addedPositions.add(key);
            }
          });

          if (detectedRegionsForDisplay.length === 0 && regionsToDisplay.length > 0) {
            console.log(`⏱️ Showing ${regionsToDisplay.length} persistent detection boxes from recent history`);
          }

          // Draw all regions to display
          regionsToDisplay.forEach((region) => {
            // Draw circle with 2pt semi-transparent line
            ctx.beginPath();
            ctx.arc(region.headCenterX, region.headCenterY, region.headRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw detection box
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
            ctx.lineWidth = 1;
            ctx.strokeRect(region.canvasX, region.canvasY, region.canvasWidth, region.canvasHeight);

            // Draw face number and confidence
            ctx.fillStyle = 'rgba(0, 255, 0, 0.9)';
            ctx.font = 'bold 16px monospace';
            ctx.fillText(`#${region.index + 1}`, region.canvasX + 5, region.canvasY + 20);
            ctx.font = '12px monospace';
            ctx.fillText(`${(region.confidence * 100).toFixed(0)}%`, region.canvasX + 5, region.canvasY + 38);
          });

          setDetectedHeads(headRegions);

          // AUTO-CAPTURE LOGIC: If faces detected for 2 consecutive frames, auto-capture
          if (headRegions.length > 0) {
            detectionStableCountRef.current++;

            // After 2 stable detections (about 400ms), auto-trigger capture - FAST!
            if (detectionStableCountRef.current >= 2 && !autoCaptureFiredRef.current) {
              console.log("AUTO-CAPTURE: Faces detected for 2 frames - triggering FAST capture!");
              autoCaptureFiredRef.current = true;

              // Trigger capture immediately
              setTimeout(() => {
                handleInteraction();
              }, 50);
            }

            setStatusText(`${headRegions.length} STATUE(S) DETECTED - CAPTURING...`);
          } else {
            detectionStableCountRef.current = 0;
            setStatusText("Point camera at STATUES");
          }

      } catch (err) {
        console.error("Detection error:", err);
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

        // Check if at least one statue is detected
        if (detectedHeads.length === 0) {
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
          faceRegions: detectedHeads,
          confidence: detectedHeads.reduce((sum, head) => sum + head.confidence, 0) / detectedHeads.length,
          label: `${detectedHeads.length} statue(s)`
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
