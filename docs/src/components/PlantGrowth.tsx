import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { AnalysisResult } from '../types.ts';

// Use relative path for better compatibility with GitHub Pages
const maskImage = './02.jpg';

interface PlantGrowthProps {
  analysis: AnalysisResult | null;
  capturedImage: string | null;
  active: boolean;
  growthTrigger: number;
  width: number;
  height: number;
}

// Custom Shader for swaying plants
const vertexShader = `
  uniform float uTime;
  attribute float aType; // 0:Dead, 1:Head, 2:Stem, 3:Flower
  attribute vec3 color;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    vec3 pos = position;

    // Sway logic for Stems (2) and Flowers (3)
    if (aType > 1.5) {
      float swayIntensity = (aType > 2.5) ? 3.0 : 1.0; // Flowers sway more
      float speed = 2.0;
      // Simple sine wave displacement based on Y position and Time
      pos.x += sin(uTime * speed + pos.y * 0.05) * swayIntensity;
      pos.y += cos(uTime * speed * 0.7 + pos.x * 0.05) * (swayIntensity * 0.5);
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Size attenuation manually or fixed
    // Flowers bigger than stems
    gl_PointSize = (aType > 2.5 ? 12.0 : (aType > 0.5 ? 3.0 : 0.0));
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  
  void main() {
    // Circular particles
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(length(coord) > 0.5) discard;
    
    gl_FragColor = vec4(vColor, 0.9);
  }
`;

const PlantGrowth: React.FC<PlantGrowthProps> = ({ analysis, capturedImage, active, growthTrigger, width, height }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const hudCanvasRef = useRef<HTMLCanvasElement>(null);
  
  // Three.js Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  
  // Edge Detection Data
  const edgePointsRef = useRef<Float32Array | null>(null); // [x, y, x, y...]
  const edgeCountRef = useRef<number>(0);
  
  // Surface Data (Face of the object)
  const surfacePointsRef = useRef<Float32Array | null>(null);
  const surfaceCountRef = useRef<number>(0);
  
  // Particle System Refs
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  
  // Simulation Data (Structure of Arrays)
  const MAX_PARTICLES = 50000;
  const dataRef = useRef<{
    positions: Float32Array;
    colors: Float32Array;
    types: Float32Array; // 0: Dead, 1: Active Vine Head, 2: Vine Body (Static), 3: Flower
    velocities: Float32Array; 
    life: Float32Array;
    activeHeads: number[]; // Indices of active heads for HUD tracking
  } | null>(null);

  const startTimeRef = useRef<number>(Date.now());

  // --- IMAGE PROCESSING: RED MASK DETECTION ---
  useEffect(() => {
    if (!capturedImage || !analysis || !active) return;

    const processImage = async () => {
      // Load the mask image (02.jpg with red area)
      const maskImg = new Image();
      maskImg.src = maskImage;
      await new Promise((resolve) => { maskImg.onload = resolve; });

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Calculate object-cover scaling to match CSS
      const scale = Math.max(width / maskImg.width, height / maskImg.height);
      const offsetX = (width - maskImg.width * scale) / 2;
      const offsetY = (height - maskImg.height * scale) / 2;

      // Draw mask image
      ctx.drawImage(maskImg, offsetX, offsetY, maskImg.width * scale, maskImg.height * scale);

      console.log("=== PlantGrowth Debug (Mask Mode) ===");
      console.log("Mask Image size:", maskImg.width, "x", maskImg.height);
      console.log("Canvas size:", width, "x", height);
      console.log("Scale:", scale);
      console.log("Offset:", offsetX, offsetY);

      try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        const ePoints: number[] = [];
        const sPoints: number[] = [];

        // Detect red pixels in the mask (RGB where R > 200, G < 100, B < 100)
        for (let py = 0; py < height; py += 3) {
            for (let px = 0; px < width; px += 3) {
                const idx = (py * width + px) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                // Check if pixel is red
                if (r > 200 && g < 100 && b < 100) {
                    const threeX = px - (width / 2);
                    const threeY = (height / 2) - py;

                    // Randomly assign to edge or surface
                    if (Math.random() < 0.3) {
                        ePoints.push(threeX, threeY);
                    } else {
                        sPoints.push(threeX, threeY);
                    }
                }
            }
        }

        console.log("Red mask points - Edges:", ePoints.length / 2, "Surface:", sPoints.length / 2);
        console.log("======================================");

        edgePointsRef.current = new Float32Array(ePoints);
        edgeCountRef.current = ePoints.length / 2;

        surfacePointsRef.current = new Float32Array(sPoints);
        surfaceCountRef.current = sPoints.length / 2;

      } catch (e) {
        console.error("Mask detection failed", e);
      }
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
    const aTypes = new Float32Array(MAX_PARTICLES).fill(0);
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aType', new THREE.BufferAttribute(aTypes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    dataRef.current = {
      positions: positions,
      colors: colors,
      types: aTypes,
      velocities: new Float32Array(MAX_PARTICLES * 3),
      life: new Float32Array(MAX_PARTICLES),
      activeHeads: []
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
    if (growthTrigger > 0 && active) {
      spawnGrowth(40); // Increased burst size
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [growthTrigger, active]);

  const spawnGrowth = (count: number) => {
    if (!dataRef.current) return;
    const { positions, colors, types, velocities, life, activeHeads } = dataRef.current;
    
    // Safety check for data availability
    const edgePoints = edgePointsRef.current;
    const edgeCount = edgeCountRef.current;
    const surfacePoints = surfacePointsRef.current;
    const surfaceCount = surfaceCountRef.current;
    
    if (!edgePoints && !surfacePoints) return;

    let spawned = 0;
    for (let i = 0; i < MAX_PARTICLES; i++) {
        if (spawned >= count) break;
        
        if (types[i] === 0) {
            let x = 0, y = 0;
            
            // Randomly choose between edge and surface (50/50 if both exist)
            const useSurface = surfaceCount > 0 && (Math.random() > 0.5 || edgeCount === 0);

            if (useSurface && surfacePoints) {
                const rIdx = Math.floor(Math.random() * surfaceCount);
                x = surfacePoints[rIdx * 2];
                y = surfacePoints[rIdx * 2 + 1];
            } else if (edgePoints && edgeCount > 0) {
                const rIdx = Math.floor(Math.random() * edgeCount);
                x = edgePoints[rIdx * 2];
                y = edgePoints[rIdx * 2 + 1];
            } else {
                continue; // Can't spawn
            }

            types[i] = 1; // HEAD
            life[i] = 1.0;
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = 0;

            velocities[i * 3] = (Math.random() - 0.5) * 2;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 2;

            colors[i * 3] = 0.0;
            colors[i * 3 + 1] = 1.0;
            colors[i * 3 + 2] = 0.5;
            
            activeHeads.push(i); // Track this head
            spawned++;
        }
    }
    if (geometryRef.current) geometryRef.current.attributes.aType.needsUpdate = true;
  };

  const spawnStatic = (x: number, y: number, type: number) => {
     if (!dataRef.current) return;
     const { positions, colors, types, life } = dataRef.current;

     const start = Math.floor(Math.random() * MAX_PARTICLES);
     for (let j = 0; j < 50; j++) {
         const idx = (start + j) % MAX_PARTICLES;
         if (types[idx] === 0) {
             types[idx] = type;
             positions[idx * 3] = x;
             positions[idx * 3 + 1] = y;
             positions[idx * 3 + 2] = 0;
             life[idx] = -1;

             if (type === 2) { // VINE BODY
                colors[idx * 3] = 0.0;
                colors[idx * 3 + 1] = 0.5 + Math.random() * 0.5;
                colors[idx * 3 + 2] = 0.2;
             } else if (type === 3) { // FLOWER
                // Neon Pink/Purple
                colors[idx * 3] = 1.0;
                colors[idx * 3 + 1] = 0.0 + Math.random() * 0.2;
                colors[idx * 3 + 2] = 0.8 + Math.random() * 0.2;
             }
             return;
         }
     }
  };

  const animate = () => {
    if (!sceneRef.current || !dataRef.current || !geometryRef.current || !materialRef.current) return;

    const { positions, types, velocities, life, activeHeads } = dataRef.current;
    const time = (Date.now() - startTimeRef.current) / 1000;
    
    // Update Shader Time
    materialRef.current.uniforms.uTime.value = time;

    // HUD Context
    const ctx = hudCanvasRef.current?.getContext('2d');
    if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillStyle = '#00FF00';
        ctx.lineWidth = 1;
        ctx.font = '10px monospace';
    }

    // Process Active Heads
    // Filter out dead heads from tracking array
    const nextActiveHeads: number[] = [];

    for (const i of activeHeads) {
        if (types[i] !== 1) continue;

        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        
        // Draw HUD for this head
        if (ctx) {
            // Map 3D coord back to 2D Canvas coord
            const cx = x + width / 2;
            const cy = height / 2 - y;

            // Box
            ctx.strokeRect(cx - 10, cy - 10, 20, 20);
            
            // Text
            if (Math.random() > 0.8) { // flicker text
                 ctx.fillText((Math.random()).toFixed(3), cx + 12, cy - 2);
            }
            
            // Connecting Lines
            if (nextActiveHeads.length > 0 && Math.random() > 0.5) {
                const neighborIdx = nextActiveHeads[nextActiveHeads.length - 1];
                const nx = positions[neighborIdx * 3] + width / 2;
                const ny = height / 2 - positions[neighborIdx * 3 + 1];
                
                // Only draw if relatively close
                if (Math.abs(nx - cx) < 100 && Math.abs(ny - cy) < 100) {
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(nx, ny);
                    ctx.stroke();
                }
            }
        }

        // Move Head
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];

        // Leave Vine
        if (Math.random() < 0.6) {
            spawnStatic(x, y, 2);
        }

        // Random Walk
        velocities[i * 3] += (Math.random() - 0.5) * 0.8;
        velocities[i * 3 + 1] += (Math.random() - 0.5) * 0.8;
        velocities[i * 3] *= 0.92;
        velocities[i * 3 + 1] *= 0.92;

        // Bloom
        if (Math.random() < 0.03) {
            spawnStatic(x + (Math.random()-0.5)*15, y + (Math.random()-0.5)*15, 3);
        }

        life[i] -= 0.015;
        if (life[i] <= 0) {
             types[i] = 0; // Die
             // Final Cluster
             spawnStatic(x, y, 3);
             spawnStatic(x+5, y+5, 3);
        } else {
             nextActiveHeads.push(i);
        }
    }
    
    // Update active heads reference
    dataRef.current.activeHeads = nextActiveHeads;

    geometryRef.current.attributes.position.needsUpdate = true;
    geometryRef.current.attributes.color.needsUpdate = true;
    geometryRef.current.attributes.aType.needsUpdate = true;

    if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    frameIdRef.current = requestAnimationFrame(animate);
  };

  return (
    <>
        <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10" />
        <canvas ref={hudCanvasRef} width={width} height={height} className="absolute inset-0 pointer-events-none z-15 mix-blend-screen opacity-70" />
    </>
  );
};

export default PlantGrowth;
