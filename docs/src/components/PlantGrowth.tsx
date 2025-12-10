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
const MAX_PLANTS = 8;

interface PlantInstance {
  id: number;
  x: number;
  y: number;
  scale: number;
}

const PlantGrowth: React.FC<PlantGrowthProps> = ({ analysis, capturedImage, active, growthTrigger, width, height }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imgSize, setImgSize] = useState<{ w: number; h: number } | null>(null);
  const [plants, setPlants] = useState<PlantInstance[]>([]);
  const frameTimer = useRef<NodeJS.Timeout | null>(null);
  const nextId = useRef(0);

  const frames = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => `./frame_${String(i).padStart(5, '0')}.png`),
    []
  );

  // Preload第一張避免空白
  useEffect(() => {
    const img = new Image();
    img.src = frames[0];
  }, [frames]);

  // 取得拍攝圖片實際尺寸
  useEffect(() => {
    if (!capturedImage) {
      setImgSize(null);
      return;
    }
    const img = new Image();
    img.src = capturedImage;
    img.onload = () => setImgSize({ w: img.naturalWidth, h: img.naturalHeight });
  }, [capturedImage]);

  // 根據 box_2d 對應到螢幕座標（object-fit: cover）
  const mapBoxToScreen = () => {
    if (!analysis || !imgSize) {
      return {
        xMin: width * 0.4,
        xMax: width * 0.6,
        yMin: height * 0.4,
        yMax: height * 0.6,
      };
    }

    const [ymin, xmin, ymax, xmax] = analysis.box_2d;
    const { w: imgW, h: imgH } = imgSize;
    const scale = Math.max(width / imgW, height / imgH);
    const offsetX = (width - imgW * scale) / 2;
    const offsetY = (height - imgH * scale) / 2;

    const toScreenX = (x: number) => offsetX + (x / 1000) * imgW * scale;
    const toScreenY = (y: number) => offsetY + (y / 1000) * imgH * scale;

    return {
      xMin: toScreenX(xmin),
      xMax: toScreenX(xmax),
      yMin: toScreenY(ymin),
      yMax: toScreenY(ymax),
    };
  };

  // 新增植物：縮小到 1/20，位置落在 box 內的隨機點
  useEffect(() => {
    if (!active) return;
    const box = mapBoxToScreen();
    const newPlants: PlantInstance[] = [];
    const plantCount = 3; // 每次多幾株
    for (let i = 0; i < plantCount; i++) {
      const x = box.xMin + Math.random() * (box.xMax - box.xMin);
      const y = box.yMax - Math.random() * (box.yMax - box.yMin); // 從下往上分布
      newPlants.push({
        id: nextId.current++,
        x,
        y,
        scale: 0.05 + Math.random() * 0.01, // 約 1/20 大小再稍微抖動
      });
    }
    setPlants((prev) => [...prev, ...newPlants].slice(-MAX_PLANTS));
  }, [growthTrigger, active]);

  // 循環播放序列，24fps，避免卡頓用 setInterval
  useEffect(() => {
    if (!active) {
      if (frameTimer.current) clearInterval(frameTimer.current);
      return;
    }
    if (frameTimer.current) clearInterval(frameTimer.current);
    frameTimer.current = setInterval(() => {
      setCurrentFrame((f) => (f + 1) % FRAME_COUNT);
    }, 1000 / FPS);
    return () => {
      if (frameTimer.current) clearInterval(frameTimer.current);
    };
  }, [active]);

  if (!active || plants.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" style={{ width, height }}>
      {plants.map((plant) => (
        <img
          key={plant.id}
          src={frames[currentFrame]}
          alt="Floral growth sequence"
          className="absolute select-none drop-shadow-[0_0_10px_rgba(0,255,200,0.25)]"
          style={{
            left: plant.x,
            top: plant.y,
            transform: `translate(-50%, -100%) scale(${plant.scale})`,
            transformOrigin: '50% 100%',
            filter: 'brightness(1.05) saturate(1.05)',
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default PlantGrowth;
