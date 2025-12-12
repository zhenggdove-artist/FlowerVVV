import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult, FaceRegion } from './types.ts';
import { FaceDetector, FilesetResolver, Detection } from '@mediapipe/tasks-vision';

const App: React.FC = () => {
  console.log("###################################################");
  console.log("APP.TSX: FACE DETECTION MODE!");
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null); // Canvas for drawing face circles
  const faceDetectorRef = useRef<FaceDetector | null>(null);
  const detectionIntervalRef = useRef<number | null>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("Point camera at faces");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [detectedFaces, setDetectedFaces] = useState<FaceRegion[]>([]);
  const [isFaceDetectorReady, setIsFaceDetectorReady] = useState<boolean>(false);

  // A counter that increments to trigger new growth bursts
  const [growthTrigger, setGrowthTrigger] = useState<number>(0);

  console.log("APP STATE - gameState:", gameState, "capturedImage:", !!capturedImage, "faces:", detectedFaces.length);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize MediaPipe Face Detector
  useEffect(() => {
    let cancelled = false;

    const initFaceDetector = async () => {
      try {
        console.log("Initializing MediaPipe Face Detector...");

        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        const detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.5
        });

        if (cancelled) return;

        faceDetectorRef.current = detector;
        setIsFaceDetectorReady(true);
        console.log("Face Detector initialized successfully");
      } catch (err) {
        console.error("Failed to initialize face detector:", err);
        setStatusText("FACE DETECTOR ERROR");
        setGameState(GameState.ERROR);
      }
    };

    initFaceDetector();

    return () => {
      cancelled = true;
      if (faceDetectorRef.current) {
        faceDetectorRef.current.close();
      }
    };
  }, []);

  // Initialize Camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        console.log("Starting camera...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use back camera
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setStatusText("CAMERA ERROR");
        setGameState(GameState.ERROR);
      }
    };
    startCamera();
  }, []);

  // Face Detection Loop - RUNS CONTINUOUSLY FROM START
  useEffect(() => {
    // Only run face detection when in IDLE state (before capture)
    if (gameState !== GameState.IDLE) {
      if (detectionIntervalRef.current) {
        cancelAnimationFrame(detectionIntervalRef.current);
        detectionIntervalRef.current = null;
      }
      return;
    }

    if (!isFaceDetectorReady || !faceDetectorRef.current) return;
    if (!videoRef.current || !overlayCanvasRef.current) return;

    console.log("Starting continuous face detection...");

    let lastVideoTime = -1;

    const detectFaces = () => {
      const video = videoRef.current;
      const canvas = overlayCanvasRef.current;
      const detector = faceDetectorRef.current;

      if (!video || !canvas || !detector || video.videoWidth === 0) {
        detectionIntervalRef.current = requestAnimationFrame(detectFaces);
        return;
      }

      // Set canvas size to match viewport
      if (canvas.width !== viewport.width || canvas.height !== viewport.height) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        detectionIntervalRef.current = requestAnimationFrame(detectFaces);
        return;
      }

      // Only detect if video frame has updated
      if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;

        try {
          // Detect faces in the video frame
          const detections: Detection[] = detector.detectForVideo(video, performance.now()).detections;

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

          const faceRegions: FaceRegion[] = [];

          // Draw circles around detected faces
          detections.forEach((detection) => {
            const bbox = detection.boundingBox;
            if (!bbox) return;

            // Convert bbox coordinates to canvas coordinates
            const x = offsetX + (bbox.originX / video.videoWidth) * drawWidth;
            const y = offsetY + (bbox.originY / video.videoHeight) * drawHeight;
            const width = (bbox.width / video.videoWidth) * drawWidth;
            const height = (bbox.height / video.videoHeight) * drawHeight;

            // Calculate center and radius for circle
            const centerX = x + width / 2;
            const centerY = y + height / 2;
            // Use the larger dimension and multiply by 0.7 to fit head better
            const radius = Math.max(width, height) * 0.7;

            // Draw circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = '#00FF00';
            ctx.lineWidth = 4;
            ctx.stroke();

            // Draw confidence text
            ctx.fillStyle = '#00FF00';
            ctx.font = '16px monospace';
            ctx.fillText(
              `Face ${(detection.categories[0]?.score || 0).toFixed(2)}`,
              centerX - radius,
              centerY - radius - 10
            );

            // Store face region (normalized coordinates 0-1)
            faceRegions.push({
              centerX: centerX / canvas.width,
              centerY: centerY / canvas.height,
              radius: radius / Math.max(canvas.width, canvas.height),
              confidence: detection.categories[0]?.score || 0
            });
          });

          setDetectedFaces(faceRegions);

          // Update status text
          if (faceRegions.length > 0) {
            setStatusText(`${faceRegions.length} FACE(S) DETECTED - TAP TO CAPTURE`);
          } else {
            setStatusText("Point camera at faces");
          }

        } catch (err) {
          console.error("Face detection error:", err);
        }
      }

      detectionIntervalRef.current = requestAnimationFrame(detectFaces);
    };

    detectFaces();

    return () => {
      if (detectionIntervalRef.current) {
        cancelAnimationFrame(detectionIntervalRef.current);
      }
    };
  }, [gameState, isFaceDetectorReady, viewport.width, viewport.height]);

  const handleInteraction = useCallback(async () => {
    // IF IDLE: Capture and detect faces
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

        // Check if at least one face is detected
        if (detectedFaces.length === 0) {
          setStatusText("NO FACES DETECTED - POINT AT FACE(S)");
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

        // 2. Use detected face regions
        setGameState(GameState.ANALYZING);
        setStatusText("VENI VIDI VICI");

        // Create result with all detected face regions
        const result: AnalysisResult = {
          detected: true,
          faceRegions: detectedFaces,
          confidence: detectedFaces.reduce((sum, face) => sum + face.confidence, 0) / detectedFaces.length,
          label: `${detectedFaces.length} face(s)`
        };

        setAnalysisResult(result);
        setStatusText("");
        setGameState(GameState.GROWING);
        setGrowthTrigger(prev => prev + 1); // Trigger initial growth
    }
    // IF ALREADY GROWING: Add more plants
    else if (gameState === GameState.GROWING) {
        setGrowthTrigger(prev => prev + 1);
    }

  }, [gameState, detectedFaces]);

  const handleReset = () => {
    setGameState(GameState.IDLE);
    setCapturedImage(null);
    setAnalysisResult(null);
    setGrowthTrigger(0);
    setDetectedFaces([]);
    setStatusText("Point camera at faces");
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
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${capturedImage ? 'opacity-0' : 'opacity-100'}`}
        style={{
             filter: 'contrast(1.1) brightness(1.1) saturate(0.8)'
        }}
      />

      {/* --- LAYER 1.5: FACE DETECTION OVERLAY --- */}
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
