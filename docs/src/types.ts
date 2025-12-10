export interface Point {
  x: number;
  y: number;
}

export interface AnalysisResult {
  detected: boolean;
  // Bounding box [ymin, xmin, ymax, xmax] (0-1000)
  box_2d: [number, number, number, number]; 
  confidence: number;
  label: string;
}

export enum GameState {
  IDLE = 'IDLE',       // Camera running, looking for input
  CAPTURING = 'CAPTURING', // Freeze frame
  ANALYZING = 'ANALYZING', // Sending to Gemini
  GROWING = 'GROWING',     // Three.js animation
  ERROR = 'ERROR'
}

// Particle structure for the point cloud
export interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  color: [number, number, number];
  type: number; // 0: Dead, 1: RootHead, 2: Stem, 3: Flower
}