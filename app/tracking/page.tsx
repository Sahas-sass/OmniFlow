// app/tracking/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import TransitCard from '@/components/TransitCard'; // Adjust path if necessary

export default function LiveTracking() {
  const [viewMode, setViewMode] = useState<'Radar' | 'Cabin'>('Radar');
  const [isFavorite, setIsFavorite] = useState(false);
  const [emergencyStatus, setEmergencyStatus] = useState<'idle' | 'confirm' | 'stopped'>('idle');

  const aiStates = ['Scanning Route...', 'Clearing Drone Traffic...', 'Path Optimal'];
  const [aiText, setAiText] = useState(aiStates[0]);

  useEffect(() => {
    if (emergencyStatus === 'stopped') {
      setAiText('EMERGENCY OVERRIDE ACTIVE');
      return;
    }
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % aiStates.length;
      setAiText(aiStates[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [emergencyStatus]);

  const routeColor = emergencyStatus === 'stopped' ? '#ef4444' : '#2dd4bf';
  const pulseColor = emergencyStatus === 'stopped' ? 'bg-red-500' : 'bg-teal-500';
  const pingColor = emergencyStatus === 'stopped' ? 'bg-red-400' : 'bg-teal-400';

  const handleEmergencyClick = () => {
    if (emergencyStatus === 'idle') setEmergencyStatus('confirm');
    else if (emergencyStatus === 'confirm') setEmergencyStatus('stopped');
  };

  return (
    <div className="w-full max-w-md lg:max-w-4xl mx-auto flex flex-col min-h-screen sm:min-h-[85vh] px-4 pt-4 pb-8 relative overflow-hidden bg-[#f3f7fb]">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes speedLines {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .speed-line {
          position: absolute;
          width: 2px;
          height: 150px;
          background: linear-gradient(to bottom, transparent, rgba(45,212,191,0.4), transparent);
          animation: speedLines 1.5s linear infinite;
        }
      `}} />

      {/* Header */}
      <div className="flex items-center justify-between shrink-0 mb-4 relative z-30">
        <Link href="/route" className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-white transition-colors border border-gray-100">
          <span className="text-gray-900 font-bold text-xl leading-none">&larr;</span>
        </Link>
        <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">Live Map</h1>
        
        <button onClick={() => setIsFavorite(!isFavorite)} className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center border border-gray-100 transition-all active:scale-95">
           <svg className={`w-5 h-5 transition-colors duration-300 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400 fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
        </button>
      </div>

      {/* Holographic Map Area - Updated with Tailwind v4 classes */}
      <div className="relative w-full flex-1 bg-linear-to-b from-[#E8EDF2] to-[#d8e3ec] rounded-3xl overflow-hidden border border-gray-300/50 shadow-inner perspective-distant z-0 min-h-75">
        
        {/* AR Cabin View Background */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${viewMode === 'Cabin' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Image src="/cabin-view.jpg" alt="Cabin Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px]"></div>
        </div>

        {/* AR / Camera View Toggle */}
        <div className="absolute top-4 left-4 z-40 bg-gray-900/80 backdrop-blur-md p-1 rounded-full flex gap-1 shadow-lg border border-white/10">
          <button onClick={() => setViewMode('Radar')} className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors ${viewMode === 'Radar' ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Radar</button>
          <button onClick={() => setViewMode('Cabin')} className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors ${viewMode === 'Cabin' ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Cabin</button>
        </div>

        {/* AI Route Optimizer Indicator */}
        <div className={`absolute top-4 right-4 z-40 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm border ${emergencyStatus === 'stopped' ? 'border-red-500' : 'border-white'} flex items-center gap-2 transition-colors`}>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColor} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${pulseColor}`}></span>
          </span>
          <span className={`text-[9px] font-mono font-bold tracking-tight w-32 truncate ${emergencyStatus === 'stopped' ? 'text-red-600' : 'text-gray-800'}`}>
            OMNI-AI: {aiText}
          </span>
        </div>

        {/* Isometric 3D Grid Floor - Updated inset class */}
        <div 
          className="absolute -inset-full opacity-40 origin-bottom transition-all duration-700 ease-in-out z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px)', 
            backgroundSize: '40px 40px',
            transform: viewMode === 'Radar' ? 'rotateX(65deg) scale(1.5) translateY(-20%)' : 'rotateX(0deg) scale(1.5) translateY(0%)',
            opacity: viewMode === 'Radar' ? 0.4 : 0
          }}
        ></div>

        {/* Velocity Speed Lines */}
        {viewMode === 'Radar' && emergencyStatus !== 'stopped' && (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-60 pointer-events-none" style={{ transform: 'rotateX(65deg) scale(1.5)' }}>
            <div className="speed-line left-[20%]" style={{ animationDelay: '0.2s' }}></div>
            <div className="speed-line left-[45%]" style={{ animationDelay: '0.8s' }}></div>
            <div className="speed-line left-[70%]" style={{ animationDelay: '0.5s' }}></div>
            <div className="speed-line left-[90%]" style={{ animationDelay: '1.1s' }}></div>
          </div>
        )}

        {/* Dynamic Route Line */}
        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(45,212,191,0.8)] z-10 transition-opacity duration-500" style={{ opacity: viewMode === 'Radar' ? 1 : 0 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 80 Q 150 120, 200 250 T 350 400" fill="transparent" stroke={routeColor} strokeWidth="5" strokeDasharray="10 10" className={emergencyStatus !== 'stopped' ? 'animate-[dash_2s_linear_infinite]' : ''} style={{ transition: 'stroke 0.3s ease' }} />
        </svg>

        {/* Current Location Pin (The vehicle) - Updated positioning classes */}
        <div className={`absolute top-42.5 left-33.75 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm border-2 ${emergencyStatus === 'stopped' ? 'border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)]' : 'border-teal-400 shadow-[0_0_25px_rgba(45,212,191,0.6)]'} flex items-center justify-center z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${viewMode === 'Cabin' ? 'opacity-0 pointer-events-none scale-125' : 'opacity-100'}`}>
           <span className={`absolute w-full h-full rounded-2xl border ${emergencyStatus === 'stopped' ? 'border-red-500' : 'border-teal-400'} animate-ping opacity-75`}></span>
           <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner relative z-10 text-white transition-colors ${emergencyStatus === 'stopped' ? 'bg-red-500' : 'primary-gradient'}`}>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16M8 16v2M16 16v2M4 8a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" /></svg>
           </div>
        </div>
      </div>

      <TransitCard 
        emergencyStatus={emergencyStatus} 
        onEmergencyClick={handleEmergencyClick} 
      />
      
    </div>
  );
}