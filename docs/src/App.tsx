import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion, ColorScheme } from './types.ts';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

// Generate random color scheme for plants
const generateRandomColorScheme = (): ColorScheme => {
  const randomColor = () => ({
    r: Math.random() * 0.3 + 0.1,  // Prevent too dark colors
    g: Math.random() * 0.8 + 0.2,
    b: Math.random() * 0.8 + 0.2
  });

  return {
    head: { r: 0.0, g: 1.0, b: 0.5 },  // Always keep head greenish for visibility
    vine: randomColor(),
    flower: randomColor(),
    bug: randomColor()
  };
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

  const [growthTrigger, setGrowthTrigger] = useState<number>(0);
  const detectionStableCountRef = useRef<number>(0);
  const autoCaptureFiredRef = useRef<boolean>(false);

  // Color scheme management
  const [viciClickCount, setViciClickCount] = useState<number>(0);
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>(() => generateRandomColorScheme());

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
        console.log("Loading BlazeFace (fast mode)...");
        setStatusText("LOADING DETECTOR...");

        // Load only BlazeFace - much faster than COCO-SSD
        const blazeModel = await blazeface.load();

        if (cancelled) return;

        faceDetectorRef.current = blazeModel;
        setIsDetectorReady(true);
        setStatusText("READY - Point camera at faces");
        console.log("BlazeFace loaded successfully - READY!");
      } catch (err) {
        console.error("Failed to initialize detector:", err);
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
        // Run BlazeFace detection (fast & accurate for faces/heads)
        const faceDetections = await faceDetector.estimateFaces(video, false);

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

          // Process BlazeFace detections
          faceDetections.forEach((face: any) => {
            const [x, y] = face.topLeft;
            const [x2, y2] = face.bottomRight;
            const width = x2 - x;
            const height = y2 - y;

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

    // Every 10 clicks, generate new random color scheme
    if (newClickCount % 10 === 0) {
      const newColorScheme = generateRandomColorScheme();
      setCurrentColorScheme(newColorScheme);
      console.log(`Color scheme changed at click ${newClickCount}:`, newColorScheme);
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
