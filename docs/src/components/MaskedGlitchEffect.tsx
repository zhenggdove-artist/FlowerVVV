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
    const loadImages = async () => {
      console.log("MaskedGlitchEffect: Loading images...");

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

    let lastTime = Date.now();

    const animate = () => {
      const baseImg = baseImageRef.current;
      const maskBuffer = maskBufferRef.current;

      if (!baseImg || !maskBuffer) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      timeRef.current += deltaTime;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Calculate object-cover scaling for base image
      const scaleBase = Math.max(width / baseImg.width, height / baseImg.height);
      const offsetXBase = (width - baseImg.width * scaleBase) / 2;
      const offsetYBase = (height - baseImg.height * scaleBase) / 2;

      // Draw base image
      ctx.drawImage(baseImg, offsetXBase, offsetYBase, baseImg.width * scaleBase, baseImg.height * scaleBase);

      // Get image data
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Create a copy for reading original values
      const originalData = new Uint8ClampedArray(data);

      // Wave parameters
      const time = timeRef.current;
      const waveSpeed = 2.0;
      const waveAmplitude = 8; // pixels of horizontal displacement
      const waveFrequency = 0.02; // waves per pixel height

      // RGB channel separation amounts (chromatic aberration)
      const rgbSeparation = Math.sin(time * 3) * 4; // oscillating separation

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

            // Only apply if source pixels are also in mask (to prevent bleeding)
            if (maskBuffer[y * width + sourceXRed] === 1) {
              data[i] = originalData[idxRed];
            }
            if (maskBuffer[y * width + sourceXGreen] === 1) {
              data[i + 1] = originalData[idxGreen + 1];
            }
            if (maskBuffer[y * width + sourceXBlue] === 1) {
              data[i + 2] = originalData[idxBlue + 2];
            }
          } else {
            // Outside mask: make transparent
            data[idx * 4 + 3] = 0;
          }
        }
      }

      // Add occasional stronger glitch bursts
      if (Math.random() < 0.05) {
        const glitchLine = Math.floor(Math.random() * height);
        const glitchHeight = Math.floor(Math.random() * 10) + 5;
        const glitchDisplacement = Math.floor((Math.random() - 0.5) * 30);

        for (let dy = 0; dy < glitchHeight; dy++) {
          const y = glitchLine + dy;
          if (y < 0 || y >= height) continue;

          for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (maskBuffer[idx] === 1) {
              const sourceX = Math.max(0, Math.min(width - 1, x + glitchDisplacement));
              const sourceIdx = y * width + sourceX;

              if (maskBuffer[sourceIdx] === 1) {
                const i = idx * 4;
                const si = sourceIdx * 4;
                data[i] = originalData[si];
                data[i + 1] = originalData[si + 1];
                data[i + 2] = originalData[si + 2];
              }
            }
          }
        }
      }

      // Put modified image data back
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
      style={{ opacity: 0.8 }}
    />
  );
};

export default MaskedGlitchEffect;
