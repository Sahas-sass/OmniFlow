// components/TransitCard.tsx
"use client";
import { useState } from 'react';

interface TransitCardProps {
  emergencyStatus: 'idle' | 'confirm' | 'stopped';
  onEmergencyClick: () => void;
}

export default function TransitCard({ emergencyStatus, onEmergencyClick }: TransitCardProps) {
  const [accessRequested, setAccessRequested] = useState(false);
  const currentSpeed = emergencyStatus === 'stopped' ? '0 km/h' : '40 km/h';

  return (
    <div className="bg-white/75 backdrop-blur-xl p-6 shrink-0 rounded-3xl border border-gray-200 shadow-lg relative z-20 mt-4 sm:max-w-2xl sm:mx-auto w-full">
      
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none mb-1">Arriving in 4 Mins</h2>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Auto-Bus (Line C) • Nexus Stn</p>
        </div>
        <div className="text-right pb-1">
           <span className="text-3xl font-extrabold text-teal-500 leading-none">80%</span>
        </div>
      </div>

      {/* Micro-Timeline Nodes */}
      <div className="flex justify-between text-[9px] font-extrabold text-gray-400 uppercase tracking-widest mb-1.5 px-1 relative">
        <span className="text-teal-500">Sector 4</span>
        <span className="text-teal-500">Aero-Hub</span>
        <span className="text-gray-400">Nexus Stn</span>
      </div>

      {/* Sleek Gradient Progress Bar */}
      <div className="w-full h-2.5 bg-gray-200/60 rounded-full overflow-hidden mb-5 shadow-inner relative">
        <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-white/50 z-10"></div>
        <div className="absolute top-0 bottom-0 left-[85%] w-0.5 bg-white/50 z-10"></div>
        <div className={`h-full rounded-full w-[80%] relative z-0 transition-colors duration-500 ${emergencyStatus === 'stopped' ? 'bg-red-500' : 'primary-gradient'}`}>
           <span className="absolute right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"></span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-white/60 rounded-2xl p-4 flex items-center gap-3 border border-gray-100/50 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">Dist</span>
            <span className="block text-lg font-extrabold text-gray-900 font-mono tracking-tighter">1.2 km</span>
          </div>
        </div>
        <div className="bg-white/60 rounded-2xl p-4 flex items-center gap-3 border border-gray-100/50 shadow-sm">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${emergencyStatus === 'stopped' ? 'bg-red-50 text-red-500' : 'bg-teal-50 text-teal-500'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-0.5">Speed</span>
            <span className={`block text-lg font-extrabold font-mono tracking-tighter transition-colors ${emergencyStatus === 'stopped' ? 'text-red-500' : 'text-teal-600'}`}>{currentSpeed}</span>
          </div>
        </div>
      </div>

      {/* Cabin Environment Status */}
      <div className="flex items-center justify-between bg-gray-900 text-gray-300 rounded-xl p-3 mb-6 shadow-inner text-[9px] font-mono tracking-wider border border-gray-800">
         <div className="flex gap-1.5 items-center"><span className="text-teal-400 animate-pulse">●</span> TEMP 22°C</div>
         <div className="flex gap-1.5 items-center"><span className="text-teal-400 animate-pulse">●</span> AIR OPTIMA</div>
         <div className="flex gap-1.5 items-center"><span className="text-teal-400 animate-pulse">●</span> OPTIC-LINK</div>
      </div>

      {/* Interactive Action Buttons */}
      <div className="flex flex-col gap-3 mt-4">
        <button 
          onClick={() => setAccessRequested(true)}
          disabled={accessRequested}
          className={`w-full font-extrabold py-3.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
            accessRequested 
              ? 'bg-teal-700 text-white cursor-default shadow-inner' 
              : 'primary-gradient hover:opacity-90 text-white shadow-[0_8px_20px_rgba(45,212,191,0.25)]'
          }`}
        >
          {accessRequested ? (
            <>
              <svg className="w-4 h-4 shrink-0 animate-[fadeIn_0.3s_ease-in]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Request Sent
            </>
          ) : (
            <>
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 5h2v6l3.5 3.5-1.4 1.4-3.6-3.6v-3.3l-2.7 2.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.6-3.6V7z"/></svg>
              Accessibility Request
            </>
          )}
        </button>

        <button 
          onClick={onEmergencyClick}
          disabled={emergencyStatus === 'stopped'}
          className={`w-full backdrop-blur-sm border-2 font-bold py-3.5 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
            emergencyStatus === 'idle' 
              ? 'bg-white/80 border-red-100 text-red-500 hover:bg-red-50 shadow-sm'
              : emergencyStatus === 'confirm'
              ? 'bg-red-500 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse'
              : 'bg-gray-900 border-gray-900 text-red-500 cursor-not-allowed shadow-inner'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {emergencyStatus === 'idle' && 'Emergency Stop'}
          {emergencyStatus === 'confirm' && 'Confirm Stop?'}
          {emergencyStatus === 'stopped' && 'Vehicle Halted'}
        </button>
      </div>
    </div>
  );
}