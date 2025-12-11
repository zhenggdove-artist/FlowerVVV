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
      // 🎛️ GLITCH效果參數 - 可在此調整
      // ========================================
      const time = timeRef.current;

      // 波浪晃動參數
      const waveSpeed = 0.5;        // 波浪速度 (數值越小越慢)
      const waveAmplitude = 6;      // 波浪幅度 (晃動範圍，像素)
      const waveFrequency = 0.02;   // 波浪頻率 (數值越小波浪越平緩)

      // RGB色彩分離 (顏色錯位效果)
      const rgbSeparationBase = 15; // 基礎色彩分離強度
      const rgbSeparationMax = 25;  // 最大色彩分離 (突波時)

      // GLITCH突波參數
      const burstIntensity = 20;    // 突波強度
      const burstProbability = 0.08; // 突波機率 (降低頻率)
      // ========================================

      // Clear all to transparent first
      for (let i = 0; i < data.length; i += 4) {
        data[i + 3] = 0;
      }

      // Apply smooth wave + GLITCH effect - "push" pixels from mask outward
      for (let y = 0; y < height; y++) {
        // 平滑波浪晃動 (慢速、小幅度)
        const wave = Math.sin(y * waveFrequency + time * waveSpeed) * waveAmplitude;

        // 偶爾的GLITCH突波
        const hasBurst = Math.random() < burstProbability;
        const burstOffset = hasBurst ? (Math.random() - 0.5) * 2 * burstIntensity : 0;

        // 組合位移
        const displacement = Math.floor(wave + burstOffset);

        // 強烈RGB色彩分離 (保持強烈的顏色錯位)
        const rgbSep = hasBurst ? rgbSeparationMax : rgbSeparationBase;
        const redOffset = displacement + Math.floor((Math.random() - 0.5) * 2 * rgbSep);
        const greenOffset = displacement + Math.floor((Math.random() - 0.5) * rgbSep * 0.5);
        const blueOffset = displacement - Math.floor((Math.random() - 0.5) * 2 * rgbSep);

        for (let x = 0; x < width; x++) {
          const idx = y * width + x;

          // Only process pixels FROM masked region
          if (maskBuffer[idx] === 1) {
            // Push this pixel to displaced positions (can go outside mask)
            const targetXRed = x + redOffset;
            const targetXGreen = x + greenOffset;
            const targetXBlue = x + blueOffset;

            const sourceIdx = idx * 4;

            // Draw red channel
            if (targetXRed >= 0 && targetXRed < width) {
              const targetIdxRed = (y * width + targetXRed) * 4;
              data[targetIdxRed] = originalData[sourceIdx];
              data[targetIdxRed + 3] = 255; // Make visible
            }

            // Draw green channel
            if (targetXGreen >= 0 && targetXGreen < width) {
              const targetIdxGreen = (y * width + targetXGreen) * 4;
              data[targetIdxGreen + 1] = originalData[sourceIdx + 1];
              data[targetIdxGreen + 3] = 255; // Make visible
            }

            // Draw blue channel
            if (targetXBlue >= 0 && targetXBlue < width) {
              const targetIdxBlue = (y * width + targetXBlue) * 4;
              data[targetIdxBlue + 2] = originalData[sourceIdx + 2];
              data[targetIdxBlue + 3] = 255; // Make visible
            }
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
        opacity: 0.5, // 🎛️ Glitch透明度 (0.0-1.0)
        zIndex: 10
      }}
    />
  );
};

export default MaskedGlitchEffect;
