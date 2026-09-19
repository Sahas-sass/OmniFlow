// app/tracking/page.tsx
import Link from 'next/link';

export default function LiveTracking() {
  return (
    <div className="w-full max-w-md lg:max-w-4xl mx-auto flex flex-col h-[85vh] px-4 gap-4">
      
      {/* Header */}
      <div className="flex items-center justify-between pt-4 shrink-0">
        <Link href="/route" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100">
          <span className="text-gray-900 font-bold text-xl leading-none">&larr;</span>
        </Link>
        <h1 className="text-xl font-extrabold text-gray-900">Live Map</h1>
        <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
           {/* Heart/Favorite Icon placeholder */}
           <span className="text-gray-400 font-bold text-sm">♡</span>
        </div>
      </div>

      {/* Map Area (CSS Stylized to match the light theme reference) */}
      <div className="relative w-full flex-1 bg-[#E8EDF2] rounded-3xl overflow-hidden border border-gray-200 shadow-inner my-2">
        {/* Decorative Map Grid / Streets */}
        <div className="absolute inset-0 opacity-40" style={{ 
            backgroundImage: 'linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px)', 
            backgroundSize: '40px 40px' 
        }}></div>

        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 80 Q 150 120, 200 250 T 350 400" fill="transparent" stroke="#EF4444" strokeWidth="4" strokeDasharray="8 8" />
        </svg>

        {/* Origin Pin */}
        <div className="absolute top-15 left-7.5 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300">
           <div className="w-full h-full bg-teal-200 object-cover flex items-center justify-center text-xs font-bold text-teal-800">Start</div>
        </div>

        {/* Current Location Pin (The vehicle) */}
        <div className="absolute top-55 left-45 w-14 h-14 rounded-2xl bg-white shadow-xl border-2 border-teal-400 flex items-center justify-center z-10 animate-pulse">
           <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center shadow-inner">
             <span className="text-white text-xs font-bold">Pod</span>
           </div>
        </div>

        {/* Destination Pin */}
        <div className="absolute top-92.5 left-82.5">
          <div className="w-8 h-8 rounded-full bg-red-500 border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* Active Transit Card (Bottom Panel) */}
      <div className="soft-card p-6 shrink-0 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">Arriving in 4 Mins</h2>
            <p className="text-sm text-gray-500 font-medium">Auto-Bus (Line C) • Nexus Station</p>
          </div>
          <div className="text-right">
             <span className="text-3xl font-extrabold text-teal-500">80%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-6 shadow-inner">
          <div className="h-full primary-gradient rounded-full w-[80%] relative">
             <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-size-[1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 font-bold">⛕</div>
            <div>
              <span className="block text-lg font-bold text-gray-900">1.2 km</span>
              <span className="text-xs text-gray-500 font-medium">Distance</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 font-bold">⏱</div>
            <div>
              <span className="block text-lg font-bold text-gray-900">40 km/h</span>
              <span className="text-xs text-gray-500 font-medium">Avg Speed</span>
            </div>
          </div>
        </div>

        {/* Emergency Stop / Assistance */}
        <div className="flex gap-4">
          <button className="flex-1 bg-white border-2 border-red-100 text-red-500 hover:bg-red-50 font-bold py-4 rounded-2xl transition-colors text-base shadow-sm">
            Emergency Stop
          </button>
          <button className="flex-1 primary-gradient hover:opacity-90 text-white font-bold py-4 rounded-2xl transition-opacity text-base shadow-[0_8px_20px_rgba(45,212,191,0.3)]">
            Accessibility Help
          </button>
        </div>
      </div>
      
    </div>
  );
}