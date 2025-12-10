import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnalysisResult } from '../types.ts';

interface PlantGrowthProps {
  analysis: AnalysisResult | null;
  capturedImage: string | null;
  active: boolean;
  growthTrigger: number;
  width: number;
  height: number;
}

const FRAME_COUNT = 444; // frame_00000.png ... frame_00443.png
const FPS = 24;

const PlantGrowth: React.FC<PlantGrowthProps> = ({ active, growthTrigger, width, height }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const playIdRef = useRef(0);
  const rafRef = useRef<number>();

  const frames = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => `./frame_${String(i).padStart(5, '0')}.png`),
    []
  );

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(rafRef.current || 0);
      return;
    }

    playIdRef.current += 1;
    const thisPlay = playIdRef.current;
    setCurrentFrame(0);
    let start: number | null = null;

    const step = (now: number) => {
      if (playIdRef.current !== thisPlay) return;
      if (start === null) start = now;
      const elapsed = (now - start) / 1000;
      const frame = Math.min(FRAME_COUNT - 1, Math.floor(elapsed * FPS));
      setCurrentFrame(frame);

      if (frame >= FRAME_COUNT - 1) {
        return; // stop at last frame
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current || 0);
  }, [active, growthTrigger]);

  if (!active) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 flex items-end justify-center overflow-hidden"
      style={{ width, height }}
    >
      <img
        src={frames[currentFrame]}
        alt="Floral growth sequence"
        className="w-auto max-h-full object-contain select-none drop-shadow-[0_0_18px_rgba(0,255,200,0.4)]"
        style={{ filter: 'brightness(1.1) saturate(1.1)' }}
      />
    </div>
  );
};

export default PlantGrowth;
