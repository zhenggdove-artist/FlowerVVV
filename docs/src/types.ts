export interface Point {
  x: number;
  y: number;
}

export interface FaceRegion {
  // Center position of the face (normalized 0-1)
  centerX: number;
  centerY: number;
  // Radius for circular region (normalized 0-1)
  radius: number;
  confidence: number;
}

export interface AnalysisResult {
  detected: boolean;
  // Multiple face regions for multi-person support
  faceRegions?: FaceRegion[];
  // Legacy bounding box for backward compatibility [ymin, xmin, ymax, xmax] (0-1000)
  box_2d?: [number, number, number, number];
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