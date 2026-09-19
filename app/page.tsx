// app/page.tsx
"use client";
import JourneySearch from '@/components/JourneySearch';
import QuickCommutes from '@/components/QuickCommutes';
import TransitInfoCards from '@/components/TransitInfoCards';
import CityPulse from '@/components/CityPulse';
import EcoImpact from '@/components/EcoImpact';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col items-center">
      
      {/* Custom Float Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />

      {/* Hero Section with Soft Glow Background */}
      <div className="w-full relative overflow-hidden">
        
        {/* Abstract Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full bg-teal-100/40 blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-mint-100/30 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16 py-12 px-4 sm:px-6">
          
          {/* Left Column: Branding, Typography & Overlapping 3D Asset */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-4 relative">
            
            {/* Brand Header */}
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="relative w-10 h-10 shrink-0 drop-shadow-sm">
                <Image 
                  src="/logo.png" 
                  alt="OmniFlow Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                OmniFlow
              </h1>
            </div>

            {/* Typography Section */}
            <span className="inline-block text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] uppercase text-teal-700 bg-teal-50 border border-teal-100/60 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              Neo-Colombo 2100
            </span>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#111827] leading-[1.1] mb-5 tracking-tighter">
              The future of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 via-teal-300 to-white/70 drop-shadow-sm">
                urban mobility.
              </span>
            </h2>
            
            <p className="text-gray-500 font-medium text-sm sm:text-base max-w-sm leading-relaxed mb-12">
              Experience seamless, zero-emission autonomous transit. Powered by Omni-AI to eliminate friction from your daily commute.
            </p>

            {/* Floating 3D City Asset with Glassmorphic Elements */}
            <div className="relative w-full max-w-85 aspect-square mx-auto lg:mx-0 mt-4 mb-8">
              
              {/* Main Image */}
              <div className="absolute inset-0 animate-float z-10">
                <Image 
                  src="/city-3d.png" 
                  alt="Futuristic 3D City Asset" 
                  fill 
                  className="object-contain drop-shadow-[0_20px_40px_rgba(45,212,191,0.15)]"
                  priority
                />
              </div>

              {/* Overlapping Glass Pill 1: Top Left */}
              <div className="absolute top-4 -left-4 sm:-left-8 z-20 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl p-2.5 pr-4 flex items-center gap-3 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                </div>
                <div className="text-left">
                  <span className="block text-[8px] uppercase font-bold text-gray-400 tracking-wider">Grid Status</span>
                  <span className="block text-xs font-extrabold text-gray-900 leading-none mt-0.5">Optimal</span>
                </div>
              </div>

              {/* Overlapping Glass Pill 2: Bottom Right */}
              <div className="absolute bottom-10 -right-2 sm:-right-8 z-20 bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl p-2.5 pl-4 flex items-center gap-3 animate-[fadeIn_0.7s_ease-out]">
                <div className="text-right">
                  <span className="block text-[8px] uppercase font-bold text-gray-400 tracking-wider">Eco-Index</span>
                  <span className="block text-xs font-extrabold text-teal-600 font-mono leading-none mt-0.5">100% Zero-E</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-500 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>

              {/* Floating Data Node: Background Right */}
              <div className="absolute top-[35%] -right-12 z-0 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-full px-3 py-1.5 hidden sm:block animate-pulse">
                 <span className="text-[9px] font-mono text-gray-500 tracking-tighter uppercase">Lat 6.9271</span>
              </div>
            </div>
            
          </div>

          {/* Right Column: Search Module */}
          <div className="w-full max-w-md shrink-0 relative z-30 lg:mt-6">
            <JourneySearch />
          </div>

        </div>
      </div>

      <QuickCommutes />
      <CityPulse />
      <EcoImpact />
      <TransitInfoCards />
      
    </div>
  );
}