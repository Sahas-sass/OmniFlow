// app/route/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import SwipeToLaunch from '@/components/SwipeToLaunch';

export default function ActiveJourney() {
  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 pt-6 pb-12 relative min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Ambient Glowing Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-20%] w-[70%] h-[40%] rounded-full bg-teal-200/20 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-20%] w-[60%] h-[50%] rounded-full bg-mint-200/20 blur-[100px]"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-center relative mb-6">
        <Link href="/" className="absolute left-0 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:bg-white transition-colors z-10">
          <span className="font-bold text-gray-600">&larr;</span>
        </Link>
        <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">Active Journey</h1>
      </div>

      {/* 3D Isometric Map Visual with 2. Environmental HUD */}
      <div className="relative w-full h-48 sm:h-56 mb-6 rounded-3xl overflow-hidden shadow-sm border border-gray-200/60 group">
        <Image 
          src="/route-3d.jpg" 
          alt="3D Route Map" 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          priority
        />
        {/* Updated gradient class */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-50/90 via-transparent to-transparent"></div>
        
        {/* Environmental HUD */}
        <div className="absolute top-4 left-4 bg-gray-900/70 backdrop-blur-md rounded-xl p-2.5 border border-white/10 shadow-lg flex items-center gap-3">
           <div className="flex flex-col">
             <span className="text-[8px] text-gray-400 font-mono tracking-wider">ENV.STAT</span>
             <span className="text-[10px] text-teal-400 font-bold font-mono">WIND 45km/h</span>
           </div>
           <div className="w-px h-6 bg-gray-700"></div>
           <div className="flex flex-col">
             <span className="text-[8px] text-gray-400 font-mono tracking-wider">AQI</span>
             <span className="text-[10px] text-teal-400 font-bold font-mono">12 (OPT)</span>
           </div>
        </div>
        
        {/* Live Pulse */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm">
           <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <span className="text-[10px] font-extrabold text-gray-900 uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Glassmorphic Alert */}
      <div className="bg-red-50/80 backdrop-blur-md border border-red-100 rounded-2xl p-4 flex gap-3 mb-5 shadow-sm relative overflow-hidden">
        <span className="absolute top-2 right-3 text-[8px] font-mono text-red-300">SYS.OVR.3</span>
        <div className="w-6 h-6 shrink-0 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">!</div>
        <div>
          <h4 className="text-sm font-extrabold text-red-900 mb-0.5">Air-Transit Delay</h4>
          <p className="text-xs font-medium text-red-700 leading-relaxed">
            High winds at District 9. Mag-Train alternative has been automatically pre-booked at no extra cost.
          </p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="soft-card p-5 flex justify-between items-center mb-5 divide-x divide-gray-100 text-center relative">
        <span className="absolute top-2 left-2 text-[8px] font-mono text-gray-300 leading-none">+</span>
        <span className="absolute bottom-2 right-2 text-[8px] font-mono text-gray-300 leading-none">+</span>
        
        <div className="flex-1">
          <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Time</span>
          <div className="text-2xl font-extrabold text-gray-900">42 <span className="text-sm">min</span></div>
        </div>
        <div className="flex-1">
          <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Cost</span>
          <div className="text-2xl font-extrabold text-gray-900">2.40 <span className="text-sm">Cr</span></div>
        </div>
        <div className="flex-1">
          <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Access</span>
          <div className="text-2xl font-extrabold text-teal-500">100%</div>
        </div>
      </div>

      {/* Journey Progress Bar */}
      <div className="soft-card p-5 mb-6 bg-white/60 backdrop-blur-lg">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5">Journey Progress</span>
            <h4 className="text-sm font-extrabold text-gray-900">33% Completed</h4>
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5">Estimated Arrival</span>
            <h4 className="text-sm font-extrabold text-teal-600">09:42</h4>
          </div>
        </div>
        
        <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          {/* Removed conflicting 'relative' class */}
          <div className="absolute top-0 left-0 h-full w-[33%] primary-gradient rounded-full">
            <span className="absolute right-0.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"></span>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
          <span>Started 09:00</span>
          <span>28 min remaining</span>
        </div>
      </div>

      {/* Route Steps Timeline */}
      <div className="soft-card p-6 relative overflow-hidden mb-8 bg-white/60 backdrop-blur-lg">
        <span className="absolute top-4 right-4 text-[8px] font-mono text-gray-300">SEQ.004</span>
        <h3 className="text-sm font-extrabold text-gray-900 mb-6 relative z-10">Route Steps</h3>
        
        <div className="relative z-10 flex flex-col gap-6">
          
          {/* Updated left and w classes */}
          <div className="absolute left-3.75 top-10 bottom-4 w-0.5 bg-gray-100 -z-10"></div>
          
          {/* Updated left, w, and bg-linear classes */}
          <div className="absolute left-3.75 top-10 h-20 w-0.5 bg-linear-to-b from-teal-400 to-transparent -z-10"></div>
          <div className="absolute left-[13.5px] top-14 w-1.5 h-4 bg-white rounded-full shadow-[0_0_10px_#2dd4bf] animate-bounce -z-10"></div>

          {/* Step 1: Walk */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-teal-50 border-2 border-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 z-10">
              <div className="w-2.5 h-2.5 bg-teal-200 rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="font-extrabold text-sm text-gray-900">Walk to Sector 4 Hub</h4>
                <span className="text-xs font-bold text-gray-400">09:00</span>
              </div>
              <p className="text-xs font-medium text-gray-500">Level pathways, 400m</p>
            </div>
          </div>

          {/* Step 2: Auto-Bus (ACTIVE) */}
          <div className="flex gap-4 items-start">
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 z-10">
              <span className="absolute w-8 h-8 bg-teal-400 rounded-full animate-ping opacity-40"></span>
              <div className="relative w-8 h-8 bg-teal-400 text-white rounded-full flex items-center justify-center shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="7" width="16" height="10" rx="2" ry="2" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M8 17v2M16 17v2" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="font-extrabold text-sm text-gray-900">Auto-Bus (Line C)</h4>
                <span className="text-xs font-bold text-gray-900">09:08</span>
              </div>
              <div className="inline-flex items-center gap-1.5 mt-1.5 bg-teal-50 text-teal-700 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-md border border-teal-100">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 5h2v6l3.5 3.5-1.4 1.4-3.6-3.6v-3.3l-2.7 2.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.6-3.6V7z"/></svg>
                Wheelchair Ramp Deployed
              </div>
            </div>
          </div>

          {/* Step 3: Mag-Train */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 z-10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="5" width="14" height="10" rx="2" ry="2" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v5M9 20h6" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="font-extrabold text-sm text-gray-900">Mag-Train (Express)</h4>
                <span className="text-xs font-bold text-gray-500">09:22</span>
              </div>
              <p className="text-xs font-medium text-gray-500">Platform 2 &rarr; Platform 4</p>
            </div>
          </div>

          {/* Step 4: Arrive */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 z-10">
              <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="font-extrabold text-sm text-gray-900">Arrive at Aero-Hub</h4>
                <span className="text-xs font-bold text-gray-500">09:42</span>
              </div>
              <p className="text-xs font-medium text-gray-500">District 9</p>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Swipe Component */}
      <SwipeToLaunch />

    </div>
  );
}