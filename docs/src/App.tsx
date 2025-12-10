import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { GameState, AnalysisResult } from './types.ts';

// Use relative path for better compatibility with GitHub Pages
const referenceImage = './01.jpg';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const comparisonCanvasRef = useRef<HTMLCanvasElement>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isAligned, setIsAligned] = useState<boolean>(false);

  // A counter that increments to trigger new growth bursts
  const [growthTrigger, setGrowthTrigger] = useState<number>(0);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Camera
  useEffect(() => {
    const startCamera = async () => {
      try {
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
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setStatusText("CAMERA ERROR");
        setGameState(GameState.ERROR);
      }
    };
    startCamera();
  }, []);

  // Check alignment between video feed and reference image
  useEffect(() => {
    if (gameState !== GameState.IDLE || !videoRef.current || !comparisonCanvasRef.current) return;

    const checkAlignment = () => {
      const video = videoRef.current;
      const canvas = comparisonCanvasRef.current;
      if (!video || !canvas || video.videoWidth === 0) return;

      canvas.width = 320; // Lower resolution for performance
      canvas.height = 240;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw current video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const videoData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Load and compare with reference image
      const img = new Image();
      img.src = referenceImage;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const refData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Calculate similarity (simplified MSE)
        let diffSum = 0;
        const pixels = videoData.data.length / 4;

        for (let i = 0; i < videoData.data.length; i += 4) {
          const rDiff = videoData.data[i] - refData.data[i];
          const gDiff = videoData.data[i + 1] - refData.data[i + 1];
          const bDiff = videoData.data[i + 2] - refData.data[i + 2];
          diffSum += (rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
        }

        const mse = diffSum / (pixels * 3);
        const similarity = Math.max(0, 100 - Math.sqrt(mse) / 2.55);

        // If similarity > 70%, show alignment hint
        setIsAligned(similarity > 70);
        if (similarity > 70) {
          setStatusText("ALIGNED - TAP TO CAPTURE");
        } else {
          setStatusText("");
        }
      };
    };

    const intervalId = setInterval(checkAlignment, 500); // Check every 500ms
    return () => clearInterval(intervalId);
  }, [gameState]);

  const handleInteraction = useCallback(async () => {
    // IF IDLE: Capture and use mask
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

        // Check if aligned before allowing capture
        if (!isAligned) {
          setStatusText("PLEASE ALIGN WITH REFERENCE IMAGE");
          setTimeout(() => setStatusText(""), 2000);
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

        // 2. Use predefined mask area (will be processed from 02.jpg)
        setGameState(GameState.ANALYZING);
        setStatusText("VENI VIDI VICI");

        // Set a simple result - the mask will be processed in PlantGrowth
        const result: AnalysisResult = {
          detected: true,
          box_2d: [0, 0, 1000, 1000], // Full image, will use mask
          confidence: 1.0,
          label: "mask_area"
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

  }, [gameState, isAligned]);

  const handleReset = () => {
    setGameState(GameState.IDLE);
    setCapturedImage(null);
    setAnalysisResult(null);
    setGrowthTrigger(0);
    setStatusText("");
  };

  return (
    <div className="relative w-full h-screen bg-void-black overflow-hidden font-future select-none">

      {/* Hidden Canvas for Capture */}
      <canvas ref={canvasRef} className="hidden" />
      {/* Hidden Canvas for Alignment Comparison */}
      <canvas ref={comparisonCanvasRef} className="hidden" />

      {/* --- LAYER 1: VIDEO FEED --- */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${capturedImage ? 'opacity-0' : 'opacity-100'}`}
        style={{
             filter: 'contrast(1.1) brightness(1.1) saturate(0.8) sepia(0.2)'
        }}
      />

      {/* --- LAYER 1.5: REFERENCE IMAGE OVERLAY (30% opacity) --- */}
      {!capturedImage && gameState === GameState.IDLE && (
        <>
          <img
            src={referenceImage}
            alt="Reference"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{
              opacity: 0.3,
              mixBlendMode: 'lighten'
            }}
          />
          {/* Alignment indicator border */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              border: isAligned ? '8px solid #00FF00' : '8px solid #FF0000',
              boxShadow: isAligned
                ? '0 0 30px rgba(0, 255, 0, 0.8), inset 0 0 30px rgba(0, 255, 0, 0.3)'
                : '0 0 20px rgba(255, 0, 0, 0.5)',
            }}
          />
        </>
      )}

      {/* --- LAYER 2: FROZEN IMAGE (For Analysis/Growth) --- */}
      {capturedImage && (
        <img 
            src={capturedImage} 
            alt="Frozen Reality" 
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
                 // Dreamcore aesthetic
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
