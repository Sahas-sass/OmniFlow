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
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16 py-8 px-4 sm:px-6">
        
        {/* Left Column: Branding */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
          <div className="flex items-center gap-3.5 mb-6 justify-center lg:justify-start">
            <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
              <Image 
                src="/logo.png" 
                alt="OmniFlow Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900">
              OmniFlow
            </h1>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Next-Gen <br className="hidden lg:block"/> City Transit
          </h2>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-md">
            Seamless multi-modal transportation network designed for the autonomous metropolis of 2100.
          </p>
        </div>

        {/* Right Column: Main Search Only */}
        <div className="w-full max-w-md shrink-0">
          <JourneySearch />
        </div>

      </div>

      {/* Moved outside the Hero columns so it spans full width */}
      <QuickCommutes />
      <CityPulse />
      <EcoImpact />
      <TransitInfoCards />
      
    </div>
  );
}