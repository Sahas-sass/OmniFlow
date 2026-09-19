// components/SwipeToLaunch.tsx
"use client";
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SwipeToLaunch() {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(56); // Default w-14 (56px)
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isUnlocked) return;
    setIsDragging(true);
    // Capture pointer so dragging works even if cursor leaves the thumb
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current || isUnlocked) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const minWidth = 56;
    const maxWidth = rect.width - 12; // Container width minus padding (6px on each side)
    
    // Calculate new width based on mouse/touch x position
    let newWidth = e.clientX - rect.left;
    newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
    
    setSliderWidth(newWidth);
    
    // If dragged more than 85% of the way across, trigger unlock
    if (newWidth > maxWidth * 0.85) {
      setIsUnlocked(true);
      setIsDragging(false);
      setSliderWidth(maxWidth);
      
      // Simulate processing time, then route (or alert)
      setTimeout(() => {
        alert("System Initialized: Transition to Live Tracking Screen");
        // Replace alert with router.push('/live-tracking') when you build the next page
      }, 500);
    }
  };

  const handlePointerUp = () => {
    if (!isUnlocked) {
      setIsDragging(false);
      setSliderWidth(56); // Snap back to start if not fully swiped
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-16 bg-gray-900 rounded-2xl overflow-hidden shadow-[0_12px_24px_rgba(17,24,39,0.2)] flex items-center justify-center select-none touch-none"
    >
      {/* Background Text */}
      <span className={`text-gray-300 font-extrabold text-[11px] tracking-[0.2em] uppercase z-10 pl-8 transition-opacity duration-300 ${isUnlocked ? 'opacity-0' : 'opacity-100'}`}>
        Initialize Live Tracking
      </span>
      
      {/* Draggable Thumb */}
      <div 
        style={{ width: `${sliderWidth}px` }}
        className={`absolute left-1.5 top-1.5 bottom-1.5 rounded-xl flex items-center justify-end pr-4 z-20 cursor-grab active:cursor-grabbing shadow-inner 
          ${isUnlocked ? 'bg-teal-500 transition-all duration-300' : 'bg-teal-400'} 
          ${!isDragging && !isUnlocked ? 'transition-all duration-300 ease-out' : ''}
        `}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {isUnlocked ? (
          // Success Checkmark
          <svg className="w-6 h-6 text-white animate-[fadeIn_0.2s_ease-in]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          // Double Arrows
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  );
}