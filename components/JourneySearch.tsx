"use client";
import { useState } from 'react';
import AccessibilityToggle from './AccessibilityToggle';

export default function JourneySearch() {
  const [activeModes, setActiveModes] = useState<string[]>(['Auto-Bus']);
  
  const transitOptions = [
    {
      name: 'Auto-Bus',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="7" width="16" height="10" rx="2" ry="2" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M8 17v2M16 17v2" />
        </svg>
      )
    },
    {
      name: 'Mag-Train',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="14" height="10" rx="2" ry="2" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v5M9 20h6" />
        </svg>
      )
    },
    {
      name: 'Air-Transit',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 17-8-4-8 4 8-17z" />
        </svg>
      )
    },
    {
      name: 'Smart Road',
      icon: (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4L3 7v14l6-3 6 3 6-3V4l-6 3-6-3zM9 4v14M15 7v14" />
        </svg>
      )
    }
  ];

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
            className="w-full bg-gray-50/70 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-gray-700 ml-1">Destination</label>
          <input 
            type="text" 
            placeholder="e.g. Aero-Hub District 9" 
            className="w-full bg-gray-50/70 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>
      </div>

      <AccessibilityToggle />

      {/* Transit Modes - Styled with icons */}
      <div>
        <label className="text-sm font-bold text-gray-700 ml-1 mb-3 block">Transit Modes</label>
        <div className="flex flex-wrap gap-2.5">
          {transitOptions.map((option) => (
            <button 
              key={option.name} 
              onClick={() => toggleMode(option.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeModes.includes(option.name) 
                  ? 'bg-gray-900 text-white shadow-md border border-gray-900' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50 hover:border-gray-200'
              }`}
            >
              {option.icon}
              {option.name}
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