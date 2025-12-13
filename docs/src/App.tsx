import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion, ColorScheme } from './types.ts';
import { FaceDetector, FilesetResolver } from '@mediapipe/tasks-vision';

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

const App: React.FC = () => {
  console.log("###################################################");
  console.log("APP.TSX: MEDIAPIPE FACE DETECTION - FULL RANGE MODE!");
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const faceDetectorRef = useRef<FaceDetector | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  // Store latest MediaPipe detection results (callback-based)
  const latestDetectionResultsRef = useRef<any>(null);

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

  // Initialize MediaPipe Face Detection (Full Range Model for 5m+ distance)
  useEffect(() => {
    let cancelled = false;

    const initDetector = async () => {
      try {
        console.log("Loading MediaPipe FaceDetector (Full Range Model for distant faces)...");
        setStatusText("LOADING DETECTOR...");

        // Load MediaPipe Vision FilesetResolver
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        if (cancelled) return;

        // Create FaceDetector with Full Range model
        // Short Range: < 2m, Full Range: 5m+ ← CRITICAL for distant detection
        const detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            // Use Full Range model for detecting distant faces (5m+)
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_long_range/float16/1/blaze_face_long_range.tflite",
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.4,  // Lower threshold for distant faces
          minSuppressionThreshold: 0.3
        });

        if (cancelled) return;

        faceDetectorRef.current = detector;
        setIsDetectorReady(true);
        setStatusText("READY - Point camera at faces");
        console.log("MediaPipe FaceDetector (Full Range) loaded successfully - READY!");
      } catch (err) {
        console.error("Failed to initialize MediaPipe detector:", err);
        setStatusText("DETECTOR ERROR");
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

    console.log("Starting FAST face detection (200ms interval)...");

    const detectFaces = async () => {
      const video = videoRef.current;
      const canvas = overlayCanvasRef.current;
      const faceDetector = faceDetectorRef.current;

      if (!video || !canvas || !faceDetector || video.videoWidth === 0) {
        return;
      }

      // Set canvas size to match viewport
      if (canvas.width !== viewport.width || canvas.height !== viewport.height) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        detectionIntervalRef.current = requestAnimationFrame(detectObjects);
        return;
      }

      try {
        // Run MediaPipe Face Detection (VIDEO mode)
        // MediaPipe uses timestamp-based detection for video streams
        const timestamp = performance.now();
        const detectionResult = faceDetector.detectForVideo(video, timestamp);

        // Store results in ref for potential access
        latestDetectionResultsRef.current = detectionResult;

        // Extract face detections from MediaPipe result
        const faceDetections = detectionResult.detections || [];

        console.log(`🔍 MediaPipe detected ${faceDetections.length} faces in current frame`);

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

          // Process ALL MediaPipe detections (supports multiple faces)
          faceDetections.forEach((detection: any, index: number) => {
            // MediaPipe returns boundingBox with originX, originY, width, height
            // All coordinates are normalized (0-1), need to convert to video pixels
            const bbox = detection.boundingBox;
            const x = bbox.originX * video.videoWidth;
            const y = bbox.originY * video.videoHeight;
            const width = bbox.width * video.videoWidth;
            const height = bbox.height * video.videoHeight;

            // Get confidence score from categories
            const confidence = detection.categories && detection.categories.length > 0
              ? detection.categories[0].score
              : 0.9;

            console.log(`  Face ${index + 1}: bbox=[${x.toFixed(0)},${y.toFixed(0)},${width.toFixed(0)},${height.toFixed(0)}] confidence=${confidence.toFixed(2)}`);

            // FILTER OUT INVALID DETECTIONS
            // Filter 1: Reject detections that are too large (likely false positives)
            // A valid face should not exceed 70% of video width or height
            const maxFaceSize = Math.min(video.videoWidth, video.videoHeight) * 0.7;
            if (width > maxFaceSize || height > maxFaceSize) {
              console.log(`  ❌ REJECTED: Face ${index + 1} too large (${width.toFixed(0)}x${height.toFixed(0)} exceeds ${maxFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 2: Reject detections that are too small (noise)
            // For distant faces, use 2% of video width or minimum 10 pixels
            const minFaceSize = Math.max(10, video.videoWidth * 0.02);
            if (width < minFaceSize || height < minFaceSize) {
              console.log(`  ❌ REJECTED: Face ${index + 1} too small (${width.toFixed(0)}x${height.toFixed(0)} below ${minFaceSize.toFixed(0)})`);
              return;
            }

            // Filter 3: Reject detections with very low confidence
            // Lower threshold for distant faces (MediaPipe Full Range model)
            if (confidence < 0.35) {
              console.log(`  ❌ REJECTED: Face ${index + 1} low confidence (${(confidence * 100).toFixed(0)}%)`);
              return;
            }

            // Filter 4: Aspect ratio check - faces should be roughly square to oval
            // Reject extremely wide or tall detections
            const aspectRatio = Math.max(width, height) / Math.min(width, height);
            if (aspectRatio > 2.5) {
              console.log(`  ❌ REJECTED: Face ${index + 1} invalid aspect ratio (${aspectRatio.toFixed(2)})`);
              return;
            }

            console.log(`  ✅ ACCEPTED: Face ${index + 1} passed all filters`);

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

            setStatusText(`${headRegions.length} DETECTED - CAPTURING...`);
          } else {
            detectionStableCountRef.current = 0;
            setStatusText("Point camera at faces");
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
