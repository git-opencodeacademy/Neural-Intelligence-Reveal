
import React, { useState, useEffect } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import { AnimationMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AnimationMode>('network');

  // Toggle mode automatically for the loop feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prev) => (prev === 'network' ? 'logo' : 'network'));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Animation */}
      <NeuralCanvas mode={mode} />

      {/* Foreground Text Layer */}
      <div className="z-10 text-center select-none pointer-events-none">
        <div className={`transition-all duration-1000 transform ${mode === 'logo' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            NEURAL GENESIS
          </h1>
          <p className="mt-4 text-gray-400 font-light tracking-[0.3em] uppercase text-xs md:text-sm">
            Artificial Intelligence System v3.1
          </p>
        </div>

        <div className={`absolute left-1/2 -translate-x-1/2 bottom-20 transition-all duration-1000 ${mode === 'network' ? 'opacity-50' : 'opacity-0'}`}>
          <p className="text-violet-400 text-[10px] tracking-[0.5em] uppercase animate-pulse">
            Processing Synaptic Layers...
          </p>
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        <button 
          onClick={() => setMode('network')}
          className={`px-4 py-2 rounded-full border text-xs font-medium transition-all duration-300 ${mode === 'network' ? 'bg-violet-600 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'}`}
        >
          NETWORK VIEW
        </button>
        <button 
          onClick={() => setMode('logo')}
          className={`px-4 py-2 rounded-full border text-xs font-medium transition-all duration-300 ${mode === 'logo' ? 'bg-violet-600 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'}`}
        >
          LOGO FORM
        </button>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-10 left-10 flex flex-col space-y-2 opacity-30">
        <div className="w-12 h-1 bg-violet-500" />
        <div className="w-8 h-1 bg-blue-500" />
      </div>
      
      <div className="absolute bottom-10 right-10 text-[10px] text-gray-600 font-mono tracking-widest opacity-40">
        0x78a9c2...CORE_ACTIVE
      </div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};

export default App;
