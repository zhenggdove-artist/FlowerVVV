import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion } from './types.ts';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const App: React.FC = () => {
  console.log("###################################################");
  console.log("APP.TSX: DUAL DETECTION MODE (COCO-SSD + BLAZEFACE)!");
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const objectDetectorRef = useRef<cocoSsd.ObjectDetection | null>(null);
  const faceDetectorRef = useRef<blazeface.BlazeFaceModel | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("Point camera at statues");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [detectedHeads, setDetectedHeads] = useState<FaceRegion[]>([]);
  const [isDetectorReady, setIsDetectorReady] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const initClickCountRef = useRef<number>(0);

  const [growthTrigger, setGrowthTrigger] = useState<number>(0);

  console.log("APP STATE - gameState:", gameState, "capturedImage:", !!capturedImage, "heads:", detectedHeads.length);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize COCO-SSD + BlazeFace
  useEffect(() => {
    let cancelled = false;

    const initDetectors = async () => {
      try {
        console.log("Initializing detectors...");

        // Load both models in parallel
        const [cocoModel, blazeModel] = await Promise.all([
          cocoSsd.load({ base: 'lite_mobilenet_v2' }),
          blazeface.load()
        ]);

        if (cancelled) return;

        objectDetectorRef.current = cocoModel;
        faceDetectorRef.current = blazeModel;
        setIsDetectorReady(true);
        console.log("Both detectors initialized successfully");
      } catch (err) {
        console.error("Failed to initialize detectors:", err);
        setStatusText("DETECTOR ERROR");
        setGameState(GameState.ERROR);
      }
    };

    initDetectors();

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

          // Wait for video to be ready, then auto-click twice to dismiss play button
          videoRef.current.onloadedmetadata = () => {
            console.log("Video loaded - executing initialization clicks");
            setTimeout(() => {
              // First click
              const clickEvent = new MouseEvent('click', { bubbles: true });
              document.body.dispatchEvent(clickEvent);
              console.log("Init click 1/2");

              setTimeout(() => {
                // Second click
                const clickEvent2 = new MouseEvent('click', { bubbles: true });
                document.body.dispatchEvent(clickEvent2);
                console.log("Init click 2/2");

                // Mark as initialized after both clicks
                setTimeout(() => {
                  setIsInitialized(true);
                  console.log("Initialization complete - detection enabled");
                }, 500);
              }, 300);
            }, 500);
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

  // Dual Detection Loop - BlazeFace + COCO-SSD (OPTIMIZED - Lower frequency)
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

    if (!isDetectorReady || !objectDetectorRef.current || !faceDetectorRef.current) return;
    if (!videoRef.current || !overlayCanvasRef.current) return;

    console.log("Starting optimized dual detection (300ms interval)...");

    const detectObjects = async () => {
      const video = videoRef.current;
      const canvas = overlayCanvasRef.current;
      const cocoDetector = objectDetectorRef.current;
      const faceDetector = faceDetectorRef.current;

      if (!video || !canvas || !cocoDetector || !faceDetector || video.videoWidth === 0) {
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
        // Run BlazeFace first (faster, better for faces), then COCO-SSD as backup
        const faceDetections = await faceDetector.estimateFaces(video, false);

        // Only run COCO-SSD if BlazeFace found nothing
        let validPersons: any[] = [];
        if (faceDetections.length === 0) {
          const personDetections = await cocoDetector.detect(video);
          validPersons = personDetections.filter(
            pred => pred.class === 'person' && pred.score > 0.05
          );
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
          const processedRegions = new Set<string>();

          // Process BlazeFace detections (higher priority for faces)
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

            // Store region
            const regionKey = `${Math.round(headCenterX)},${Math.round(headCenterY)}`;
            processedRegions.add(regionKey);

            headRegions.push({
              centerX: headCenterX / canvas.width,
              centerY: headCenterY / canvas.height,
              radius: headRadius / Math.max(canvas.width, canvas.height),
              confidence: face.probability ? face.probability[0] : 0.9
            });
          });

          // Process COCO-SSD person detections (only if not already detected by BlazeFace)
          validPersons.forEach((detection) => {
            const [x, y, width, height] = detection.bbox;

            // Convert to canvas coordinates
            const canvasX = offsetX + (x / video.videoWidth) * drawWidth;
            const canvasY = offsetY + (y / video.videoHeight) * drawHeight;
            const canvasWidth = (width / video.videoWidth) * drawWidth;
            const canvasHeight = (height / video.videoHeight) * drawHeight;

            // Estimate head position: top 18% of person bbox
            const headHeight = canvasHeight * 0.18;
            const headCenterX = canvasX + canvasWidth / 2;
            const headCenterY = canvasY + headHeight / 2;

            // Check if this region already processed
            const regionKey = `${Math.round(headCenterX)},${Math.round(headCenterY)}`;
            if (processedRegions.has(regionKey)) return;

            const headRadius = Math.min(canvasWidth * 0.35, canvasHeight * 0.12);

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

            headRegions.push({
              centerX: headCenterX / canvas.width,
              centerY: headCenterY / canvas.height,
              radius: headRadius / Math.max(canvas.width, canvas.height),
              confidence: detection.score
            });
          });

          setDetectedHeads(headRegions);

          // Update status text
          if (headRegions.length > 0) {
            setStatusText(`${headRegions.length} DETECTED - TAP TO CAPTURE`);
          } else {
            setStatusText("Point camera at statues");
          }

      } catch (err) {
        console.error("Detection error:", err);
      }
    };

    // Run detection every 300ms instead of every frame (reduces load significantly)
    detectObjects();
    const intervalId = setInterval(detectObjects, 300);
    detectionIntervalRef.current = intervalId as any;

    return () => {
      if (detectionIntervalRef.current) {
        clearInterval(detectionIntervalRef.current);
      }
    };
  }, [gameState, isDetectorReady, viewport.width, viewport.height, isInitialized]);

  const handleInteraction = useCallback(async () => {
    // Skip actual action during initialization clicks
    if (!isInitialized) {
      initClickCountRef.current++;
      console.log(`Initialization click ${initClickCountRef.current}/2 - skipping action`);
      return;
    }

    // IF IDLE: Capture and detect heads
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

        // Check if at least one statue is detected
        if (detectedHeads.length === 0) {
          setStatusText("NO STATUES DETECTED");
          setTimeout(() => setStatusText("Point camera at statues"), 2000);
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

  }, [gameState, detectedHeads, isInitialized]);

  const handleReset = () => {
    setGameState(GameState.IDLE);
    setCapturedImage(null);
    setAnalysisResult(null);
    setGrowthTrigger(0);
    setDetectedHeads([]);
    setStatusText("Point camera at statues");
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
