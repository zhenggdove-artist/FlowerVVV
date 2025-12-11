import React, { useRef, useState, useEffect, useCallback } from 'react';
import DreamOverlay from './components/DreamOverlay.tsx';
import PlantGrowth from './components/PlantGrowth.tsx';
import MaskedGlitchEffect from './components/MaskedGlitchEffect.tsx';
import { GameState, AnalysisResult } from './types.ts';

// Use relative path for better compatibility with GitHub Pages
const referenceImage = './01.jpg';
const maskImage = './02.jpg';

const App: React.FC = () => {
  console.log("###################################################");
  console.log("APP.TSX: COMPONENT RENDERING!");
  console.log("###################################################");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const comparisonCanvasRef = useRef<HTMLCanvasElement>(null);
  const referenceImageRef = useRef<HTMLImageElement | null>(null);
  const referenceImageDataRef = useRef<ImageData | null>(null);
  const referenceGrayRef = useRef<Float32Array | null>(null);
  const referenceGrayFlippedRef = useRef<Float32Array | null>(null);
  const referenceMeanRef = useRef<number>(0);
  const referenceMeanFlippedRef = useRef<number>(0);
  const maskBufferRef = useRef<Uint8Array | null>(null);
  const maskBufferFlippedRef = useRef<Uint8Array | null>(null);
  const maskCoverageRef = useRef<number>(0);
  const similarityHistoryRef = useRef<number[]>([]);
  const [isReferenceReady, setIsReferenceReady] = useState<boolean>(false);
  const [compareSize, setCompareSize] = useState<{ width: number; height: number }>({ width: 160, height: 120 });

  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [statusText, setStatusText] = useState<string>("Align camera to reference image");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isAligned, setIsAligned] = useState<boolean>(false);
  const [similarityScore, setSimilarityScore] = useState<number>(0);

  // A counter that increments to trigger new growth bursts
  const [growthTrigger, setGrowthTrigger] = useState<number>(0);

  console.log("APP STATE - gameState:", gameState, "capturedImage:", !!capturedImage, "isAligned:", isAligned);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload reference + mask images
  useEffect(() => {
    let cancelled = false;

    const loadImage = (src: string) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
      });
    };

    const bootstrapReference = async () => {
      try {
        const [img, mask] = await Promise.all([
          loadImage(referenceImage),
          loadImage(maskImage)
        ]);
        if (cancelled) return;

        referenceImageRef.current = img;

        const targetWidth = 200; // Base width for comparison, height follows aspect ratio
        const targetHeight = Math.round(targetWidth * (img.height / img.width));
        setCompareSize({ width: targetWidth, height: targetHeight });

        // --- Reference image pre-processing ---
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          // Use object-cover style to avoid aspect distortion
          const scale = Math.min(targetWidth / img.width, targetHeight / img.height);
          const offsetX = (targetWidth - img.width * scale) / 2;
          const offsetY = (targetHeight - img.height * scale) / 2;
          ctx.drawImage(img, offsetX, offsetY, img.width * scale, img.height * scale);
          referenceImageDataRef.current = ctx.getImageData(0, 0, targetWidth, targetHeight);

          const gray = new Float32Array(targetWidth * targetHeight);
          const grayFlipped = new Float32Array(targetWidth * targetHeight);
          let sum = 0;
          let sumFlipped = 0;
          const data = referenceImageDataRef.current.data;
          for (let y = 0; y < targetHeight; y++) {
            for (let x = 0; x < targetWidth; x++) {
              const idx = (y * targetWidth + x) * 4;
              const val = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
              gray[y * targetWidth + x] = val;
              sum += val;

              const flipX = targetWidth - 1 - x;
              grayFlipped[y * targetWidth + flipX] = val;
              sumFlipped += val;
            }
          }
          referenceGrayRef.current = gray;
          referenceGrayFlippedRef.current = grayFlipped;
          referenceMeanRef.current = sum / gray.length;
          referenceMeanFlippedRef.current = sumFlipped / grayFlipped.length;
        }

        // --- Mask pre-processing (use the red area as ROI for matching) ---
        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = targetWidth;
        maskCanvas.height = targetHeight;
        const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
        if (maskCtx) {
          const scaleMask = Math.max(targetWidth / mask.width, targetHeight / mask.height);
          const maskOffsetX = (targetWidth - mask.width * scaleMask) / 2;
          const maskOffsetY = (targetHeight - mask.height * scaleMask) / 2;
          maskCtx.drawImage(mask, maskOffsetX, maskOffsetY, mask.width * scaleMask, mask.height * scaleMask);

          const maskData = maskCtx.getImageData(0, 0, targetWidth, targetHeight).data;
          const maskBuffer = new Uint8Array(targetWidth * targetHeight);
          const maskBufferFlipped = new Uint8Array(targetWidth * targetHeight);
          let maskCount = 0;

          for (let y = 0; y < targetHeight; y++) {
            for (let x = 0; x < targetWidth; x++) {
              const idx = (y * targetWidth + x) * 4;
              const r = maskData[idx];
              const g = maskData[idx + 1];
              const b = maskData[idx + 2];

              if (r > 180 && g < 100 && b < 100) {
                const flatIdx = y * targetWidth + x;
                maskBuffer[flatIdx] = 1;
                const flipX = targetWidth - 1 - x;
                maskBufferFlipped[y * targetWidth + flipX] = 1;
                maskCount++;
              }
            }
          }

          maskBufferRef.current = maskBuffer;
          maskBufferFlippedRef.current = maskBufferFlipped;
          maskCoverageRef.current = maskCount;

          console.log(`Mask processed: ${maskCount} ROI pixels (${((maskCount / (targetWidth * targetHeight)) * 100).toFixed(1)}%)`);
        }

        console.log("Reference and mask loaded and processed");
        setIsReferenceReady(true);
      } catch (err) {
        console.error("Failed to load reference/mask images", err);
        setStatusText("IMAGE LOAD ERROR");
        setGameState(GameState.ERROR);
      }
    };

    bootstrapReference();

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
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setStatusText("CAMERA ERROR");
        setGameState(GameState.ERROR);
      }
    };
    startCamera();
  }, []);

  // Check alignment between video feed and reference image - RUNS CONTINUOUSLY FROM START
  useEffect(() => {
    // Only run alignment check when in IDLE state (before capture)
    if (gameState !== GameState.IDLE) return;
    if (!isReferenceReady) return;
    if (!videoRef.current || !comparisonCanvasRef.current) return;
    if (!referenceImageDataRef.current) return; // Wait for reference image to load

    console.log("Starting continuous alignment detection...");

    const checkAlignment = () => {
      const video = videoRef.current;
      const canvas = comparisonCanvasRef.current;
      const refData = referenceImageDataRef.current;

      if (!video || !canvas || !refData || video.videoWidth === 0) return;
      if (!referenceGrayRef.current || !referenceGrayFlippedRef.current) return;

      canvas.width = compareSize.width;
      canvas.height = compareSize.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw current video frame using object-cover scaling (avoid letterboxing).
      ctx.clearRect(0, 0, compareSize.width, compareSize.height);
      const scale = Math.max(compareSize.width / video.videoWidth, compareSize.height / video.videoHeight);
      const offsetX = (compareSize.width - video.videoWidth * scale) / 2;
      const offsetY = (compareSize.height - video.videoHeight * scale) / 2;
      ctx.drawImage(video, offsetX, offsetY, video.videoWidth * scale, video.videoHeight * scale);
      const videoData = ctx.getImageData(0, 0, compareSize.width, compareSize.height);

      // Convert to grayscale array
      const videoGray = new Float32Array(compareSize.width * compareSize.height);
      for (let i = 0; i < videoData.data.length; i += 4) {
        const videoGrayVal = (videoData.data[i] + videoData.data[i + 1] + videoData.data[i + 2]) / 3;
        const idx = i / 4;
        videoGray[idx] = videoGrayVal;
      }

      const computeNCC = (
        videoArr: Float32Array,
        refArr: Float32Array,
        maskArr?: Uint8Array | null
      ) => {
        let vSum = 0;
        let rSum = 0;
        let count = 0;

        if (maskArr) {
          for (let i = 0; i < videoArr.length; i++) {
            if (maskArr[i]) {
              vSum += videoArr[i];
              rSum += refArr[i];
              count++;
            }
          }
        } else {
          count = videoArr.length;
          for (let i = 0; i < videoArr.length; i++) {
            vSum += videoArr[i];
            rSum += refArr[i];
          }
        }

        if (count === 0) return -1;
        const vMean = vSum / count;
        const rMean = rSum / count;

        let dot = 0;
        let vVar = 0;
        let rVar = 0;
        for (let i = 0; i < videoArr.length; i++) {
          if (maskArr && !maskArr[i]) continue;
          const v = videoArr[i] - vMean;
          const r = refArr[i] - rMean;
          dot += v * r;
          vVar += v * v;
          rVar += r * r;
        }
        if (vVar === 0 || rVar === 0) return -1;
        return dot / Math.sqrt(vVar * rVar);
      };

      const simNormal = computeNCC(videoGray, referenceGrayRef.current, maskBufferRef.current);
      const simFlipped = computeNCC(videoGray, referenceGrayFlippedRef.current, maskBufferFlippedRef.current);
      const bestSim = Math.max(simNormal, simFlipped);

      // Convert -1..1 to 0..100
      const similarity = Math.max(0, Math.min(100, (bestSim + 1) * 50));

      // Smooth similarity to avoid jitter
      similarityHistoryRef.current.push(similarity);
      if (similarityHistoryRef.current.length > 5) similarityHistoryRef.current.shift();
      const smoothed = similarityHistoryRef.current.reduce((a, b) => a + b, 0) / similarityHistoryRef.current.length;

      setSimilarityScore(smoothed);

      // Require stronger match (NCC ~0.5 -> similarity ~75)
      const threshold = 75;
      const alignedNow = smoothed >= threshold;
      setIsAligned(alignedNow);

      if (alignedNow) {
        setStatusText(`ALIGNED ${smoothed.toFixed(0)}% - TAP TO CAPTURE`);
      } else {
        setStatusText(`Align camera: ${smoothed.toFixed(0)}%`);
      }
    };

    // Run immediately on mount
    checkAlignment();

    // Then check every 500ms
    const intervalId = setInterval(checkAlignment, 500);
    return () => clearInterval(intervalId);
  }, [gameState, isReferenceReady, compareSize.width, compareSize.height]);

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
    setSimilarityScore(0);
    setIsAligned(false);
    similarityHistoryRef.current = [];
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

      {/* --- LAYER 1.5: GLITCH OVERLAY (ONLY wobbling glitch, no static image) --- */}
      {!capturedImage && gameState === GameState.IDLE && (
        <>
          {/* Masked Glitch Effect - wobbling wave effect ONLY */}
          <MaskedGlitchEffect
            baseImage={referenceImage}
            maskImage={maskImage}
            width={viewport.width}
            height={viewport.height}
            active={true}
          />

          {/* Alignment indicator border - Red when not aligned, Green when aligned */}
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
