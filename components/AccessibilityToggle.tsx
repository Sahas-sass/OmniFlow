"use client";
import { useState } from "react";

export default function AccessibilityToggle() {
  const [isAccessible, setIsAccessible] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#0B0F19]/50 border border-cyan-500/30 rounded-xl p-4 mb-6 transition-all hover:bg-[#0B0F19]/70">
      <div className="flex flex-col">
        <span className="text-base font-bold text-white">Step-Free Access</span>
        <span className="text-xs text-slate-300">Prioritize wheelchair-friendly routes</span>
      </div>
      <button 
        onClick={() => setIsAccessible(!isAccessible)}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${isAccessible ? 'bg-[#0066FF]' : 'bg-slate-600'}`}
        aria-pressed={isAccessible}
        aria-label="Toggle step-free accessibility routing"
      >
        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isAccessible ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}