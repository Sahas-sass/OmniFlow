// components/OmniAIAssistant.tsx
"use client";
import { useState } from 'react';

export default function OmniAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  // Custom Robot SVG Icon
  const RobotIcon = (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="14" height="11" rx="3" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8V4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4h4" />
      <circle cx="9.5" cy="13.5" r="1.5" fill="currentColor" />
      <circle cx="14.5" cy="13.5" r="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-none">
      
      {/* AI Chat Window */}
      {isOpen && (
        <div className="soft-card w-[90vw] sm:w-80 h-96 mb-4 flex flex-col overflow-hidden animate-[slideUp_0.2s_ease-out] border border-teal-100 shadow-2xl pointer-events-auto">
          
          {/* Header */}
          <div className="primary-gradient p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                 {RobotIcon}
              </div>
              <h4 className="font-extrabold text-sm tracking-wide">Omni-AI</h4>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-1 rounded-full transition-colors flex items-center justify-center w-6 h-6"
            >
              <span className="font-bold text-lg leading-none">&times;</span>
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 bg-gray-50/80 p-4 overflow-y-auto flex flex-col gap-3">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%] self-start">
              <p className="text-xs font-medium text-gray-600 leading-relaxed">
                Hello! I noticed you are planning a route to District 9. Would you like me to cross-reference the weather for the Air-Transit network, or pre-book a Mag-Train seat?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Omni-AI..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-full pl-4 pr-10 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:ring-1 focus:ring-teal-400 placeholder-gray-400 shadow-inner"
              />
              <button className="absolute right-1 top-1 w-8 h-8 rounded-full primary-gradient text-white flex items-center justify-center shadow-sm">
                <span className="text-[10px] transform -rotate-45 block leading-none ml-0.5 mt-0.5">➔</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 pointer-events-auto ${
          isOpen 
            ? 'bg-white text-gray-900 border border-gray-200' 
            : 'primary-gradient text-white shadow-[0_8px_20px_rgba(45,212,191,0.4)]'
        }`}
      >
        {isOpen ? (
          <span className="font-bold text-2xl leading-none mb-1">&times;</span>
        ) : (
          RobotIcon
        )}
      </button>
    </div>
  );
}