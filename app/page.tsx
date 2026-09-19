import JourneySearch from '@/components/JourneySearch';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-8 px-4 sm:px-6 min-h-[90vh]">
      
      {/* Left Column: 3D Asset & Branding */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Brand Icon and Text */}
        <div className="flex items-center gap-3.5 mb-6 justify-center lg:justify-start">
          <div className="relative w-12 h-12 flex-shrink-0 drop-shadow-md">
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
        <p className="text-gray-500 font-medium text-lg max-w-md mb-8">
          Seamlessly navigate the 2100 smart-city grid. One unified platform for autonomous air, rail, and road.
        </p>

        {/* 3D Vehicle Render Area */}
        <div className="w-full h-64 md:h-80 relative flex items-center justify-center mt-4">
          <Image
            src="/transit-pod.png"
            alt="OmniFlow 2100 Transit Vehicle"
            fill
            className="object-contain drop-shadow-[0_20px_30px_rgba(45,212,191,0.2)] hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </div>

      {/* Right Column: Search Card */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <JourneySearch />
      </div>
      
    </div>
  );
}