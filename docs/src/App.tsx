import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion, ColorScheme } from './types.ts';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

// Helper: Calculate IoU (Intersection over Union) between two bounding boxes
function calculateIoU(box1: any, box2: any): number {
  const [x1, y1] = box1.topLeft;
  const [x1_2, y1_2] = box1.bottomRight;
  const [x2, y2] = box2.topLeft;
  const [x2_2, y2_2] = box2.bottomRight;

  const xA = Math.max(x1, x2);
  const yA = Math.max(y1, y2);
  const xB = Math.min(x1_2, x2_2);
  const yB = Math.min(y1_2, y2_2);

  const intersectionArea = Math.max(0, xB - xA) * Math.max(0, yB - yA);
  const box1Area = (x1_2 - x1) * (y1_2 - y1);
  const box2Area = (x2_2 - x2) * (y2_2 - y2);
  const unionArea = box1Area + box2Area - intersectionArea;

  return intersectionArea / unionArea;
}

// Helper: Merge overlapping detections from multi-scale detection
function mergeOverlappingDetections(detections: any[], iouThreshold: number = 0.4): any[] {
  if (detections.length === 0) return [];

  // Sort by confidence (probability)
  const sorted = [...detections].sort((a, b) => {
    const confA = a.probability ? a.probability[0] : 0.5;
    const confB = b.probability ? b.probability[0] : 0.5;
    return confB - confA;
  });

  const keep: any[] = [];

  while (sorted.length > 0) {
    const current = sorted.shift()!;
    keep.push(current);

    // Remove overlapping detections
    const remaining = sorted.filter(det => {
      const iou = calculateIoU(current, det);
      return iou < iouThreshold; // Keep if IoU is below threshold
    });

    sorted.length = 0;
    sorted.push(...remaining);
  }

  return keep;
}

// Color schemes pool for random selection
const colorSchemes: ColorScheme[] = [
  // Scheme 0: Pink
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.05, g: 0.35, b: 0.15 },
    flower: { r: 1.0, g: 0.1, b: 0.9 },
    bug: { r: 1.0, g: 0.3, b: 0.8 }
  },
  // Scheme 1: Yellow/Orange
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.4, b: 0.1 },
    flower: { r: 1.0, g: 0.8, b: 0.0 },
    bug: { r: 1.0, g: 0.6, b: 0.0 }
  },
  // Scheme 2: Purple/Violet
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.15, g: 0.3, b: 0.2 },
    flower: { r: 0.6, g: 0.2, b: 1.0 },
    bug: { r: 0.8, g: 0.3, b: 1.0 }
  },
  // Scheme 3: Red
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.35, b: 0.1 },
    flower: { r: 1.0, g: 0.1, b: 0.1 },
    bug: { r: 1.0, g: 0.2, b: 0.3 }
  },
  // Scheme 4: Blue/Cyan
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.05, g: 0.3, b: 0.25 },
    flower: { r: 0.0, g: 0.6, b: 1.0 },
    bug: { r: 0.2, g: 0.8, b: 1.0 }
  },
  // Scheme 5: White/Light
  {
    head: { r: 0.0, g: 1.0, b: 0.5 },
    vine: { r: 0.1, g: 0.4, b: 0.15 },
    flower: { r: 1.0, g: 0.95, b: 0.9 },
    bug: { r: 0.9, g: 0.9, b: 1.0 }
  }
];

const colorSchemeNames = ['Pink', 'Yellow', 'Purple', 'Red', 'Blue', 'White'];

// Get random color scheme (no longer sequential)
const getRandomColorScheme = (): ColorScheme => {
  const randomIndex = Math.floor(Math.random() * colorSchemes.length);
  return colorSchemes[randomIndex];
};

const App: React.FC = () => {
  console.log("###################################################");
  console.log("APP.TSX: OPTIMIZED - BLAZEFACE ONLY (FAST MODE)!");
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const faceDetectorRef = useRef<blazeface.BlazeFaceModel | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("LOADING...");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [detectedHeads, setDetectedHeads] = useState<FaceRegion[]>([]);
  const [isDetectorReady, setIsDetectorReady] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<string>("Initializing...");

  const [growthTrigger, setGrowthTrigger] = useState<number>(0);
  const detectionStableCountRef = useRef<number>(0);
  const autoCaptureFiredRef = useRef<boolean>(false);
  const detectionFrameCount = useRef<number>(0);

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

  // Initialize BlazeFace (Fast & Lightweight)
  useEffect(() => {
    let cancelled = false;

    const initDetector = async () => {
      try {
        console.log("Loading BlazeFace (optimized for multiple faces)...");
        setLoadingProgress("Loading AI model...");
        setStatusText("LOADING DETECTOR...");

        // Load BlazeFace with optimized settings
        const blazeModel = await blazeface.load({
          maxFaces: 30,           // Balanced: 30 faces (reduced from 50 for performance)
          iouThreshold: 0.2,      // More lenient NMS - allow more overlapping detections
          scoreThreshold: 0.4     // Balanced threshold (from 0.35, slightly higher for performance)
        });

        if (cancelled) return;

        console.log("BlazeFace model loaded, preparing detector...");
        setLoadingProgress("Initializing detector...");

        faceDetectorRef.current = blazeModel;
        setIsDetectorReady(true);
        setStatusText("READY - Point camera at faces");
        setLoadingProgress("");
        console.log("BlazeFace loaded successfully - READY!");
      } catch (err) {
        console.error("Failed to initialize detector:", err);
        setStatusText("DETECTOR ERROR");
        setLoadingProgress("Error loading detector");
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

    if (!isDetectorReady || !faceDetectorRef.current) return;
    if (!videoRef.current || !overlayCanvasRef.current) return;

    console.log("Starting SMART adaptive detection (500ms interval)...");

    // Create temporary canvas for image preprocessing (reusable)
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

    const detectFaces = async () => {
      const video = videoRef.current;
      const canvas = overlayCanvasRef.current;
      const faceDetector = faceDetectorRef.current;

      if (!video || !canvas || !faceDetector || video.videoWidth === 0 || !tempCtx) {
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
        detectionFrameCount.current++;

        // SMART ADAPTIVE MULTI-SCALE: Only use multiple scales every 3rd frame
        // This reduces computational load while still catching small faces
        const useMultiScale = detectionFrameCount.current % 3 === 0;
        const scales = useMultiScale ? [1.0, 0.6] : [1.0]; // 2 scales instead of 3
        const allDetections: any[] = [];

        for (const scale of scales) {
          // Set temp canvas size based on scale
          tempCanvas.width = video.videoWidth * scale;
          tempCanvas.height = video.videoHeight * scale;

          // Only apply preprocessing on smaller scale (where it's most needed)
          if (scale < 1.0) {
            tempCtx.filter = 'contrast(1.3) brightness(1.15)'; // Reduced processing
          } else {
            tempCtx.filter = 'none';
          }

          tempCtx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
          tempCtx.filter = 'none';

          // Run detection on this scale
          const scaleDetections = await faceDetector.estimateFaces(tempCanvas, false);

          // Scale coordinates back to original size
          scaleDetections.forEach((face: any) => {
            const scaledFace = {
              ...face,
              topLeft: [face.topLeft[0] / scale, face.topLeft[1] / scale],
              bottomRight: [face.bottomRight[0] / scale, face.bottomRight[1] / scale],
              landmarks: face.landmarks?.map((lm: number[]) => [lm[0] / scale, lm[1] / scale]),
              probability: face.probability,
              scale: scale
            };
            allDetections.push(scaledFace);
          });
        }

        // Merge overlapping detections using custom NMS
        const mergedDetections = mergeOverlappingDetections(allDetections, 0.35);

        if (useMultiScale) {
          console.log(`🔍 Multi-scale: ${allDetections.length} raw → ${mergedDetections.length} merged`);
        } else {
          console.log(`🔍 Fast detect: ${mergedDetections.length} faces`);
        }

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

        // Process ALL merged multi-scale detections
        mergedDetections.forEach((face: any, index: number) => {
            const [x, y] = face.topLeft;
            const [x2, y2] = face.bottomRight;
            const width = x2 - x;
            const height = y2 - y;
            const confidence = face.probability ? face.probability[0] : 0.9;

            console.log(`  Face ${index + 1}: bbox=[${x.toFixed(0)},${y.toFixed(0)},${width.toFixed(0)},${height.toFixed(0)}] confidence=${confidence.toFixed(2)}`);

            // Convert to canvas coordinates
            const canvasX = offsetX + (x / video.videoWidth) * drawWidth;
            const canvasY = offsetY + (y / video.videoHeight) * drawHeight;
            const canvasWidth = (width / video.videoWidth) * drawWidth;
            const canvasHeight = (height / video.videoHeight) * drawHeight;

            // For face detection, the entire bbox IS the head
            const headCenterX = canvasX + canvasWidth / 2;
            const headCenterY = canvasY + canvasHeight / 2;
            const headRadius = Math.max(canvasWidth, canvasHeight) * 0.6;

            // Draw circle with 2pt semi-transparent line
            ctx.beginPath();
            ctx.arc(headCenterX, headCenterY, headRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw detection box
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
            ctx.lineWidth = 1;
            ctx.strokeRect(canvasX, canvasY, canvasWidth, canvasHeight);

            // Draw face number and confidence
            ctx.fillStyle = 'rgba(0, 255, 0, 0.9)';
            ctx.font = 'bold 16px monospace';
            ctx.fillText(`#${index + 1}`, canvasX + 5, canvasY + 20);
            ctx.font = '12px monospace';
            ctx.fillText(`${(confidence * 100).toFixed(0)}%`, canvasX + 5, canvasY + 38);

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

          setDetectedHeads(headRegions);

          // AUTO-CAPTURE LOGIC: If faces detected for 2 consecutive frames, auto-capture
          if (headRegions.length > 0) {
            detectionStableCountRef.current++;

            // After 2 stable detections (about 1 second), auto-trigger capture
            if (detectionStableCountRef.current >= 2 && !autoCaptureFiredRef.current) {
              console.log("AUTO-CAPTURE: Faces detected for 2 frames - triggering capture!");
              autoCaptureFiredRef.current = true;

              // Trigger capture immediately
              setTimeout(() => {
                handleInteraction();
              }, 100);
            }

            setStatusText(`${headRegions.length} DETECTED - CAPTURING...`);
          } else {
            detectionStableCountRef.current = 0;
            setStatusText("Point camera at faces");
          }

      } catch (err) {
        console.error("Detection error:", err);
      }
    };

    // Run detection every 500ms (balanced for performance and responsiveness)
    detectFaces();
    const intervalId = setInterval(detectFaces, 500);
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
    if ((newClickCount - 1) % 5 === 0) {
      const newColorScheme = getRandomColorScheme();
      const newColorIndex = colorSchemes.findIndex(
        scheme => scheme.flower.r === newColorScheme.flower.r &&
                  scheme.flower.g === newColorScheme.flower.g &&
                  scheme.flower.b === newColorScheme.flower.b
      );
      setCurrentColorScheme(newColorScheme);
      setCurrentColorIndex(newColorIndex);
      const schemeName = colorSchemeNames[newColorIndex];
      console.log(`🎨 COLOR CHANGED to ${schemeName} (RANDOM) at click ${newClickCount}:`, newColorScheme);
    }

    // IF IDLE: Capture and detect heads
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

        // Check if at least one face is detected
        if (detectedHeads.length === 0) {
          setStatusText("NO FACES DETECTED");
          setTimeout(() => setStatusText("Point camera at faces"), 2000);
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
    setStatusText("Point camera at faces");
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
        analysisText={loadingProgress || statusText}
        analysisResult={analysisResult}
      />

      {/* Vignette & Grain Overlay for atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,10,0,0.6)_100%)] mix-blend-multiply"></div>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"></div>

    </div>
  );
};

export default App;
