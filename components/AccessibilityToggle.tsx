"use client";
import { useState } from "react";

export default function AccessibilityToggle() {
  const [isAccessible, setIsAccessible] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 transition-all border border-gray-100">
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-900">Step-Free Access</span>
        <span className="text-xs text-gray-500 font-medium">Prioritize wheelchair routes</span>
      </div>
      <button 
        onClick={() => setIsAccessible(!isAccessible)}
        className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${isAccessible ? 'primary-gradient' : 'bg-gray-300'}`}
      >
        <div className={`bg-white w-6 h-6 rounded-full shadow-sm transform transition-transform duration-300 ${isAccessible ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}