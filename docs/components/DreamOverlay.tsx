import React, { useEffect, useState } from 'react';
import { GameState, AnalysisResult } from '../types';

interface DreamOverlayProps {
  gameState: GameState;
  onInteraction: () => void;
  onReset: () => void;
  analysisText: string;
  analysisResult: AnalysisResult | null;
}

const DreamOverlay: React.FC<DreamOverlayProps> = ({ gameState, onInteraction, onReset, analysisText, analysisResult }) => {
  const [randomCode, setRandomCode] = useState<string>('');

  // Generate random "matrix" code effect
  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789∆∇∑∏';
      let str = '';
      for (let i = 0; i < 8; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setRandomCode(str);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Convert polygon points to SVG path string for visualization
  const getPolygonPath = () => {
    if (!analysisResult || !analysisResult.polygon || analysisResult.polygon.length === 0) return '';
    
    // Normalize 0-1000 to 0-100 percentage
    const points = analysisResult.polygon.map(p => `${p.x / 10},${p.y / 10}`).join(' ');
    return points;
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 md:p-8 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <h1 className="text-4xl md:text-7xl font-future text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-widest animate-pulse"
            style={{ 
              textShadow: '0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0',
              WebkitTextStroke: '1px #FF10F0'
            }}>
          VENI VIDI VICI
        </h1>
        <div className="text-xs font-code text-neon-pink/70 mt-2 tracking-[0.5em] drop-shadow-[0_0_5px_rgba(255,20,240,0.8)]">
          SYSTEM_ID // {randomCode}
        </div>
      </div>

      {/* --- CENTRAL RETICLE (Only in IDLE) --- */}
      {gameState === GameState.IDLE && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neon-pink/30 opacity-70">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neon-pink/80 font-code text-xs text-center tracking-widest">
            [ LOCATE TARGET ]
          </div>
        </div>
      )}

      {/* --- POLYGON VISUALIZATION (During Growth) --- */}
      {(gameState === GameState.GROWING && analysisResult) && (
        <div className="absolute inset-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon 
                    points={getPolygonPath()} 
                    fill="none" 
                    stroke="#FF10F0" 
                    strokeWidth="0.2" 
                    vectorEffect="non-scaling-stroke"
                    className="opacity-50 drop-shadow-[0_0_8px_#FF10F0]"
                >
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                </polygon>
            </svg>
            <div className="absolute top-4 left-4 text-[10px] font-code text-neon-pink bg-black/50 px-2 py-1 border border-neon-pink/50">
                CONTOUR_LOCKED
            </div>
        </div>
      )}

      {/* --- ANALYSIS VISUALS --- */}
      {(gameState === GameState.ANALYZING) && (
        <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center backdrop-blur-[2px] transition-all duration-500">
           <div className="text-neon-pink font-code text-2xl animate-pulse bg-black/70 p-6 border border-neon-pink shadow-[0_0_30px_rgba(255,16,240,0.3)]">
              VENI VIDI VICI QUID SUMUS
              <div className="w-full h-1 bg-neon-pink/30 mt-4 overflow-hidden relative">
                 <div className="absolute h-full bg-neon-pink w-1/3 animate-[scanline_1.5s_ease-in-out_infinite]"></div>
              </div>
           </div>
        </div>
      )}

      {/* --- FOOTER CONTROLS --- */}
      <div className="flex flex-col items-center justify-end w-full mb-12 pointer-events-auto">
        
        {/* Status Text */}
        <div className="mb-8 font-code text-neon-pink h-6 text-lg tracking-wider drop-shadow-[0_0_8px_#FF10F0]">
          {analysisText}
        </div>

        {/* MAIN BUTTON - Handles both Capture and Propagate */}
        <button
            onClick={onInteraction}
            disabled={gameState === GameState.ANALYZING}
            className={`group relative px-12 py-5 bg-black/60 overflow-hidden border-2 transition-all active:scale-95 duration-200 shadow-[0_0_20px_rgba(255,16,240,0.2)]
                ${gameState === GameState.ANALYZING ? 'border-gray-500 opacity-50 cursor-not-allowed' : 'border-neon-pink hover:bg-neon-pink/10 cursor-pointer hover:shadow-[0_0_40px_rgba(255,16,240,0.6)]'}
            `}
        >
            <div className="absolute inset-0 w-full h-full bg-neon-pink/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative font-future text-2xl md:text-3xl text-white tracking-[0.2em] font-bold group-hover:text-white transition-colors drop-shadow-[0_0_5px_#FF10F0]">
              {gameState === GameState.IDLE ? 'VICI' : (gameState === GameState.GROWING ? 'VICI' : '...')}
            </span>
        </button>

        {/* RESET BUTTON (Small) */}
        {(gameState === GameState.GROWING || gameState === GameState.ERROR) && (
          <button
            onClick={onReset}
            className="mt-8 text-xs text-neon-pink/50 hover:text-white font-code tracking-widest border-b border-transparent hover:border-neon-pink transition-colors uppercase"
          >
            [ REBOOT SYSTEM ]
          </button>
        )}
        
        {/* Decorative Lines */}
        <div className="absolute bottom-10 left-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"></div>
        <div className="absolute bottom-10 right-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"></div>
      </div>

      {/* --- CRT SCANLINE EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

export default DreamOverlay;