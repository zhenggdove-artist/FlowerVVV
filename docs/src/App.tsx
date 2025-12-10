import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import { analyzeImage } from './services/geminiService.ts';
import { GameState, AnalysisResult } from './types.ts';

const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>(""); 
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  
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

  const handleInteraction = useCallback(async () => {
    // IF IDLE: Capture and Analyze
    if (gameState === GameState.IDLE) {
        if (!videoRef.current || !canvasRef.current) return;

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

        // 2. Analyze
        setGameState(GameState.ANALYZING);
        setStatusText("VENI VIDI VICI QUID SUMUS");
        
        try {
            const result = await analyzeImage(base64);
            setAnalysisResult(result);
            
            if (result.detected) {
                setStatusText("");
                setGameState(GameState.GROWING);
                setGrowthTrigger(prev => prev + 1); // Trigger initial growth
            } else {
                setStatusText("NO CONCRETE DETECTED.");
                setGameState(GameState.GROWING); // Still go to growing for fun, but maybe on a fallback box
                setGrowthTrigger(prev => prev + 1);
            }

        } catch (e) {
            setStatusText("OFFLINE MODE - USING LOCAL GROWTH");
            setGameState(GameState.GROWING);
            setGrowthTrigger(prev => prev + 1);
        }
    } 
    // IF ALREADY GROWING: Add more plants
    else if (gameState === GameState.GROWING) {
        setGrowthTrigger(prev => prev + 1);
    }
    
  }, [gameState]);

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
