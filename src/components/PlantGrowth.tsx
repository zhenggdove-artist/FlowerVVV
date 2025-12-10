import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { AnalysisResult } from '../types.ts';

interface PlantGrowthProps {
  analysis: AnalysisResult | null;
  capturedImage: string | null;
  active: boolean;
  growthTrigger: number;
  width: number;
  height: number;
}

const PlantGrowth: React.FC<PlantGrowthProps> = ({ analysis, capturedImage, active, growthTrigger, width, height }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  
  // Edge Detection Data
  const edgePointsRef = useRef<Float32Array | null>(null); // [x, y, x, y...]
  const edgeCountRef = useRef<number>(0);
  
  // Particle System Refs
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);
  
  // Simulation Data (Structure of Arrays)
  const MAX_PARTICLES = 50000;
  const dataRef = useRef<{
    positions: Float32Array;
    colors: Float32Array;
    types: Float32Array; // 0: Dead, 1: Active Vine Head, 2: Vine Body (Static), 3: Flower
    velocities: Float32Array; 
    life: Float32Array;
  } | null>(null);

  // --- IMAGE PROCESSING: EDGE DETECTION ---
  useEffect(() => {
    if (!capturedImage || !analysis || !active) return;

    const processImage = async () => {
      const img = new Image();
      img.src = capturedImage;
      await new Promise((resolve) => { img.onload = resolve; });

      const canvas = document.createElement('canvas');
      canvas.width = width; // Use screen dimensions for simpler mapping
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw image scaled to fit screen exactly like the background
      // object-cover equivalent manual calculation
      const scale = Math.max(width / img.width, height / img.height);
      const x = (width / 2) - (img.width / 2) * scale;
      const y = (height / 2) - (img.height / 2) * scale;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Get Bounding Box from Gemini (0-1000 normalized)
      const box = analysis.box_2d; // [ymin, xmin, ymax, xmax]
      const bYmin = (box[0] / 1000) * height;
      const bXmin = (box[1] / 1000) * width;
      const bYmax = (box[2] / 1000) * height;
      const bXmax = (box[3] / 1000) * width;

      // Ensure bounds
      const sx = Math.max(0, Math.floor(bXmin));
      const sy = Math.max(0, Math.floor(bYmin));
      const sw = Math.min(width - sx, Math.floor(bXmax - bXmin));
      const sh = Math.min(height - sy, Math.floor(bYmax - bYmin));

      if (sw <= 0 || sh <= 0) return;

      const imageData = ctx.getImageData(sx, sy, sw, sh);
      const data = imageData.data;
      const w = imageData.width;
      const h = imageData.height;

      // Sobel Operator for Edge Detection
      // We only collect points that are "Edges"
      const points: number[] = [];
      const threshold = 40; // Sensitivity

      for (let y = 1; y < h - 1; y += 2) { // Skip every other row for speed/style
        for (let x = 1; x < w - 1; x += 2) {
          const idx = (y * w + x) * 4;
          
          // Simple Grayscale
          const gray = (data[idx] + data[idx+1] + data[idx+2]) / 3;
          
          // Right neighbor
          const idxR = (y * w + (x+1)) * 4;
          const grayR = (data[idxR] + data[idxR+1] + data[idxR+2]) / 3;

          // Bottom neighbor
          const idxB = ((y+1) * w + x) * 4;
          const grayB = (data[idxB] + data[idxB+1] + data[idxB+2]) / 3;

          const dx = Math.abs(gray - grayR);
          const dy = Math.abs(gray - grayB);
          
          const magnitude = dx + dy;

          if (magnitude > threshold) {
             // Coordinate Space Conversion: 
             // Local box (x,y) -> Screen (sx+x, sy+y) -> ThreeJS (Center Origin)
             const screenX = sx + x;
             const screenY = sy + y;
             
             // ThreeJS Map
             const threeX = screenX - (width / 2);
             const threeY = (height / 2) - screenY;

             points.push(threeX, threeY);
          }
        }
      }

      edgePointsRef.current = new Float32Array(points);
      edgeCountRef.current = points.length / 2;
      console.log(`Edge Detection complete. Found ${edgeCountRef.current} points.`);
    };

    processImage();

  }, [capturedImage, analysis, active, width, height]);

  // --- THREE.JS SETUP ---
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
    camera.position.z = 100;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_PARTICLES * 3);
    const colors = new Float32Array(MAX_PARTICLES * 3);
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3, 
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthTest: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    dataRef.current = {
      positions: positions,
      colors: colors,
      types: new Float32Array(MAX_PARTICLES).fill(0), 
      velocities: new Float32Array(MAX_PARTICLES * 3),
      life: new Float32Array(MAX_PARTICLES),
    };

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    geometryRef.current = geometry;
    materialRef.current = material;

    animate();

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  // --- SPAWN LOGIC ---
  useEffect(() => {
    if (growthTrigger > 0 && active && edgePointsRef.current && edgeCountRef.current > 0) {
      spawnVinesOnContours(50); // Spawn 50 crawlers
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [growthTrigger, active]);

  const spawnVinesOnContours = (count: number) => {
    if (!dataRef.current || !edgePointsRef.current) return;
    const { positions, colors, types, velocities, life } = dataRef.current;
    const edgePoints = edgePointsRef.current;
    const edgeCount = edgeCountRef.current;

    let spawned = 0;
    for (let i = 0; i < MAX_PARTICLES; i++) {
        if (spawned >= count) break;
        
        if (types[i] === 0) {
            // Pick a random EDGE point
            const rIdx = Math.floor(Math.random() * edgeCount);
            const x = edgePoints[rIdx * 2];
            const y = edgePoints[rIdx * 2 + 1];

            types[i] = 1; // HEAD
            life[i] = 1.0;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = 0;

            // Velocity: Random drift initially, will snap to edges in animate
            velocities[i * 3] = (Math.random() - 0.5) * 2;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 2;

            colors[i * 3] = 0.0;
            colors[i * 3 + 1] = 1.0;
            colors[i * 3 + 2] = 0.5;

            spawned++;
        }
    }
    if (geometryRef.current) geometryRef.current.attributes.position.needsUpdate = true;
  };

  const spawnStatic = (x: number, y: number, type: number) => {
     if (!dataRef.current) return;
     const { positions, colors, types, life } = dataRef.current;

     // Quick find empty
     const start = Math.floor(Math.random() * MAX_PARTICLES);
     for (let j = 0; j < 100; j++) { // Search limited range for performance
         const idx = (start + j) % MAX_PARTICLES;
         if (types[idx] === 0) {
             types[idx] = type;
             positions[idx * 3] = x;
             positions[idx * 3 + 1] = y;
             positions[idx * 3 + 2] = 0;
             life[idx] = -1;

             if (type === 2) { // VINE BODY
                colors[idx * 3] = 0.0;
                colors[idx * 3 + 1] = 0.4 + Math.random() * 0.4;
                colors[idx * 3 + 2] = 0.1;
             } else if (type === 3) { // FLOWER
                // Neon Pink/Purple
                colors[idx * 3] = 1.0;
                colors[idx * 3 + 1] = 0.1;
                colors[idx * 3 + 2] = 0.8 + Math.random() * 0.2;
             }
             return;
         }
     }
  };

  const animate = () => {
    if (!sceneRef.current || !dataRef.current || !geometryRef.current) return;

    const { positions, types, velocities, life } = dataRef.current;
    
    // Animate Particles
    for (let i = 0; i < MAX_PARTICLES; i++) {
        if (types[i] === 1) { // HEAD
            const x = positions[i * 3];
            const y = positions[i * 3 + 1];
            
            // Move
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];

            // 1. Leave Trail
            if (Math.random() < 0.5) {
                spawnStatic(x, y, 2);
            }

            // 2. Change Direction (Random walk simulating organic growth)
            velocities[i * 3] += (Math.random() - 0.5) * 0.5;
            velocities[i * 3 + 1] += (Math.random() - 0.5) * 0.5;
            
            // Damping to keep speed controlled
            velocities[i * 3] *= 0.95;
            velocities[i * 3 + 1] *= 0.95;

            // 3. Bloom Flower
            if (Math.random() < 0.02) {
                spawnStatic(x + (Math.random()-0.5)*10, y + (Math.random()-0.5)*10, 3);
            }

            life[i] -= 0.01;
            if (life[i] <= 0) {
                 types[i] = 0;
                 // Final Cluster
                 spawnStatic(x, y, 3);
                 spawnStatic(x+4, y+4, 3);
                 spawnStatic(x-4, y-2, 3);
            }
        }
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.attributes.color.needsUpdate = true;

    if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    frameIdRef.current = requestAnimationFrame(animate);
  };

  return (
    <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10 mix-blend-screen" />
  );
};

export default PlantGrowth;