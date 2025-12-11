import React, { useRef, useEffect } from 'react';

interface MaskedGlitchEffectProps {
  baseImage: string;
  maskImage: string;
  width: number;
  height: number;
  active: boolean;
}

const MaskedGlitchEffect: React.FC<MaskedGlitchEffectProps> = ({
  baseImage,
  maskImage,
  width,
  height,
  active
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const baseImageRef = useRef<HTMLImageElement | null>(null);
  const maskImageRef = useRef<HTMLImageElement | null>(null);
  const maskBufferRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Load images and create mask buffer
  useEffect(() => {
    console.log("=================================================");
    console.log("MaskedGlitchEffect: COMPONENT MOUNTED!");
    console.log("Active:", active);
    console.log("Width:", width, "Height:", height);
    console.log("=================================================");

    const loadImages = async () => {
      console.log("MaskedGlitchEffect: Loading images...");
      console.log("Base image path:", baseImage);
      console.log("Mask image path:", maskImage);

      try {
        // Load base image
        const baseImg = new Image();
        baseImg.crossOrigin = "anonymous";
        baseImg.src = baseImage;
        await new Promise((resolve, reject) => {
          baseImg.onload = resolve;
          baseImg.onerror = reject;
        });
        baseImageRef.current = baseImg;
        console.log("Base image loaded:", baseImg.width, "x", baseImg.height);

        // Load mask image
        const maskImg = new Image();
        maskImg.crossOrigin = "anonymous";
        maskImg.src = maskImage;
        await new Promise((resolve, reject) => {
          maskImg.onload = resolve;
          maskImg.onerror = reject;
        });
        maskImageRef.current = maskImg;
        console.log("Mask image loaded:", maskImg.width, "x", maskImg.height);

        // Create mask buffer
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
        if (!tempCtx) return;

        // Calculate object-cover scaling for mask
        const scaleMask = Math.max(width / maskImg.width, height / maskImg.height);
        const offsetXMask = (width - maskImg.width * scaleMask) / 2;
        const offsetYMask = (height - maskImg.height * scaleMask) / 2;

        // Draw mask to identify red region
        tempCtx.drawImage(maskImg, offsetXMask, offsetYMask, maskImg.width * scaleMask, maskImg.height * scaleMask);
        const maskData = tempCtx.getImageData(0, 0, width, height);

        // Create mask buffer (1 = inside red region, 0 = outside)
        const maskBuffer = new Uint8Array(width * height);
        let redPixelCount = 0;

        for (let i = 0; i < maskData.data.length; i += 4) {
          const r = maskData.data[i];
          const g = maskData.data[i + 1];
          const b = maskData.data[i + 2];
          const pixelIndex = i / 4;

          // Detect red pixels (more lenient threshold)
          if (r > 150 && g < 100 && b < 100) {
            maskBuffer[pixelIndex] = 1;
            redPixelCount++;
          }
        }

        maskBufferRef.current = maskBuffer;
        console.log(`Mask created: ${redPixelCount} red pixels out of ${width * height} total pixels`);
        console.log(`Red region coverage: ${(redPixelCount / (width * height) * 100).toFixed(2)}%`);

      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, [baseImage, maskImage, width, height]);

  // Animation loop
  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Create offscreen canvas for processing (never visible to user)
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    const offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true });
    if (!offscreenCtx) return;

    let lastTime = Date.now();

    let frameCount = 0;
    const animate = () => {
      const baseImg = baseImageRef.current;
      const maskBuffer = maskBufferRef.current;

      if (!baseImg || !maskBuffer) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      frameCount++;
      if (frameCount % 60 === 0) {
        console.log("MaskedGlitchEffect: Animating frame", frameCount);
      }

      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      timeRef.current += deltaTime;

      // Calculate object-cover scaling for base image
      const scaleBase = Math.max(width / baseImg.width, height / baseImg.height);
      const offsetXBase = (width - baseImg.width * scaleBase) / 2;
      const offsetYBase = (height - baseImg.height * scaleBase) / 2;

      // Draw base image to OFFSCREEN canvas (not visible)
      offscreenCtx.clearRect(0, 0, width, height);
      offscreenCtx.drawImage(baseImg, offsetXBase, offsetYBase, baseImg.width * scaleBase, baseImg.height * scaleBase);

      // Get image data from offscreen canvas
      const imageData = offscreenCtx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Create a copy for reading original values
      const originalData = new Uint8ClampedArray(data);

      // ========================================
      // 🎛️ GLITCH效果參數 - 在這裡調整!
      // ========================================
      const time = timeRef.current;

      // 波紋速度 (數值越大晃動越快)
      const waveSpeed = 3.0; // 原本: 2.0

      // 波紋幅度 (水平位移的像素數,越大晃動越明顯)
      const waveAmplitude = 15; // 原本: 8

      // 波紋頻率 (數值越大波紋越密集)
      const waveFrequency = 0.03; // 原本: 0.02

      // RGB色彩分離強度 (數值越大彩虹邊緣越明顯)
      const rgbSeparation = Math.sin(time * 4) * 6; // 原本: Math.sin(time * 3) * 4
      // ========================================

      // Apply wave distortion ONLY to masked pixels
      for (let y = 0; y < height; y++) {
        // Calculate wave displacement for this row
        const wave = Math.sin(y * waveFrequency + time * waveSpeed) * waveAmplitude;
        const displacement = Math.floor(wave);

        // RGB channel offsets
        const redOffset = Math.floor(displacement + rgbSeparation);
        const greenOffset = Math.floor(displacement);
        const blueOffset = Math.floor(displacement - rgbSeparation);

        for (let x = 0; x < width; x++) {
          const idx = y * width + x;

          // Only apply effect to masked region
          if (maskBuffer[idx] === 1) {
            const i = idx * 4;

            // Apply RGB channel separation with wave displacement
            const sourceXRed = Math.max(0, Math.min(width - 1, x + redOffset));
            const sourceXGreen = Math.max(0, Math.min(width - 1, x + greenOffset));
            const sourceXBlue = Math.max(0, Math.min(width - 1, x + blueOffset));

            const idxRed = (y * width + sourceXRed) * 4;
            const idxGreen = (y * width + sourceXGreen) * 4;
            const idxBlue = (y * width + sourceXBlue) * 4;

            // Apply glitch effect regardless of source position
            data[i] = originalData[idxRed];
            data[i + 1] = originalData[idxGreen + 1];
            data[i + 2] = originalData[idxBlue + 2];
          } else {
            // Outside mask: make transparent
            data[idx * 4 + 3] = 0;
          }
        }
      }

      // ========================================
      // 🎛️ 隨機干擾爆發參數
      // ========================================
      // 強烈干擾的觸發機率 (0.0-1.0, 越大越頻繁)
      const glitchBurstProbability = 0.15; // 原本: 0.05

      // Add occasional stronger glitch bursts
      if (Math.random() < glitchBurstProbability) {
        const glitchLine = Math.floor(Math.random() * height);

        // 干擾區域高度 (像素數)
        const glitchHeight = Math.floor(Math.random() * 20) + 10; // 原本: 10 + 5

        // 干擾位移強度
        const glitchDisplacement = Math.floor((Math.random() - 0.5) * 50); // 原本: 30
        // ========================================

        for (let dy = 0; dy < glitchHeight; dy++) {
          const y = glitchLine + dy;
          if (y < 0 || y >= height) continue;

          for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (maskBuffer[idx] === 1) {
              const sourceX = Math.max(0, Math.min(width - 1, x + glitchDisplacement));
              const sourceIdx = y * width + sourceX;

              const i = idx * 4;
              const si = sourceIdx * 4;
              data[i] = originalData[si];
              data[i + 1] = originalData[si + 1];
              data[i + 2] = originalData[si + 2];
            }
          }
        }
      }

      // Clear the display canvas first (ensure no static image appears)
      ctx.clearRect(0, 0, width, height);

      // Put modified image data to display canvas
      ctx.putImageData(imageData, 0, 0);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [active, width, height]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        opacity: 1.0, // 🎛️ Glitch透明度 - 完全不透明，只显示晃动效果
        zIndex: 10
      }}
    />
  );
};

export default MaskedGlitchEffect;
