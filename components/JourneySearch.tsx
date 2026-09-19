"use client";
import { useState } from 'react';
import AccessibilityToggle from './AccessibilityToggle';

export default function JourneySearch() {
  const [activeModes, setActiveModes] = useState<string[]>(['Auto-Bus', 'Mag-Train']);
  const allModes = ['Auto-Bus', 'Mag-Train', 'Air-Transit', 'Smart Road'];

  const toggleMode = (mode: string) => {
    if (activeModes.includes(mode)) {
      setActiveModes(activeModes.filter(m => m !== mode));
    } else {
      setActiveModes([...activeModes, mode]);
    }
  };

  return (
    <div className="glass-panel p-6 md:p-8 w-full max-w-md mx-auto flex flex-col shadow-2xl">
      <h2 className="text-2xl font-bold text-white tracking-wide mb-5">Plan Your Journey</h2>
      
      <AccessibilityToggle />

      <div className="space-y-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-200">Current Location</label>
          <input 
            type="text" 
            placeholder="e.g. Sector 4, Neo-Colombo" 
            className="w-full bg-[#0B0F19]/60 border border-slate-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-200">Destination</label>
          <input 
            type="text" 
            placeholder="e.g. Aero-Hub District 9" 
            className="w-full bg-[#0B0F19]/60 border border-slate-500/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base"
          />
        </div>
      </div>

      <div className="pt-6">
        <label className="text-sm font-semibold text-slate-200 mb-3 block">Include Transit Modes</label>
        <div className="flex flex-wrap gap-2.5">
          {allModes.map((mode) => (
            <button 
              key={mode} 
              onClick={() => toggleMode(mode)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                activeModes.includes(mode) 
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mt-8 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-[0_0_20px_rgba(0,102,255,0.4)]">
        Find Routes
      </button>
    </div>
  );
}