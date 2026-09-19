"use client";
import { useState } from 'react';
import AccessibilityToggle from './AccessibilityToggle';

export default function JourneySearch() {
  const [activeModes, setActiveModes] = useState<string[]>(['Auto-Bus']);
  const allModes = ['Auto-Bus', 'Mag-Train', 'Air-Transit', 'Smart Road'];

  const toggleMode = (mode: string) => {
    if (activeModes.includes(mode)) {
      setActiveModes(activeModes.filter(m => m !== mode));
    } else {
      setActiveModes([...activeModes, mode]);
    }
  };

  return (
    <div className="soft-card p-6 md:p-8 w-full max-w-md mx-auto flex flex-col gap-6 relative z-10">
      
      {/* Search Inputs */}
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-gray-700 ml-1">Current Location</label>
          <input 
            type="text" 
            placeholder="e.g. Sector 4, Neo-Colombo" 
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all shadow-inner"
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-gray-700 ml-1">Destination</label>
          <input 
            type="text" 
            placeholder="e.g. Aero-Hub District 9" 
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all shadow-inner"
          />
        </div>
      </div>

      <AccessibilityToggle />

      {/* Transit Modes - Styled like pill tags */}
      <div>
        <label className="text-sm font-bold text-gray-700 ml-1 mb-3 block">Transit Modes</label>
        <div className="flex flex-wrap gap-2">
          {allModes.map((mode) => (
            <button 
              key={mode} 
              onClick={() => toggleMode(mode)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeModes.includes(mode) 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mt-2 primary-gradient hover:opacity-90 text-white font-bold py-4 rounded-2xl transition-opacity text-lg shadow-[0_8px_20px_rgba(45,212,191,0.3)]">
        Find Routes
      </button>
    </div>
  );
}