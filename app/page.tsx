// app/page.tsx
import JourneySearch from '@/components/JourneySearch';
import QuickCommutes from '@/components/QuickCommutes';
import TransitInfoCards from '@/components/TransitInfoCards';
import CityPulse from '@/components/CityPulse';
import EcoImpact from '@/components/EcoImpact';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col items-center">
      
      {/* Hero Section with Soft Glow Background */}
      <div className="w-full relative overflow-hidden">
        
        {/* Abstract Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full bg-teal-100/40 blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-mint-100/30 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16 py-12 px-4 sm:px-6">
          
          {/* Left Column: Branding, Typography & 3D Asset */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-2 lg:pt-8 relative">
            
            {/* Brand Header */}
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
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

            {/* Main Headline */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5 tracking-tight">
              Next-Gen City <br className="hidden lg:block"/> Transit
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-500 font-medium text-lg max-w-105 leading-relaxed mb-10">
              Seamless multi-modal transportation network designed for the autonomous metropolis of 2100.
            </p>

            {/* Floating 3D City Asset */}
            <div className="relative w-full max-w-[320px] aspect-square drop-shadow-2xl animate-[pulse_6s_ease-in-out_infinite]">
               <Image 
                 src="/city-3d.png" 
                 alt="Futuristic 3D City Asset" 
                 fill 
                 className="object-contain"
                 priority
               />
            </div>
          </div>

          {/* Right Column: Search Module */}
          <div className="w-full max-w-md shrink-0 relative z-10 lg:mt-4">
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