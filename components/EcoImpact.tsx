// components/EcoImpact.tsx
"use client";

export default function EcoImpact() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-12 mt-4">
      <div className="soft-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-teal-100/50">
        
        {/* Soft Background Glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-mint-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 shadow-sm">
               <span className="text-teal-500 text-sm font-bold">🌱</span>
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Eco-Impact Score</h3>
          </div>
          <p className="text-sm font-medium text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed">
            Your transit choices actively heal the city. All OmniFlow routes are powered by the Neo-Colombo kinetic grid and localized solar mesh.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="flex w-full md:w-auto gap-3 sm:gap-4 z-10 shrink-0">
          <div className="flex-1 md:w-32 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-sm text-center flex flex-col justify-center">
            <span className="block text-[10px] uppercase font-extrabold text-teal-600 mb-1">Carbon Offset</span>
            <span className="text-2xl font-extrabold text-gray-900">-42 <span className="text-xs text-gray-400">kg</span></span>
          </div>
          
          <div className="flex-1 md:w-32 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-sm text-center flex flex-col justify-center">
            <span className="block text-[10px] uppercase font-extrabold text-teal-600 mb-1">City AQI</span>
            <span className="text-2xl font-extrabold text-gray-900">12 <span className="text-xs text-teal-500 font-bold block sm:inline">Clean</span></span>
          </div>
        </div>

      </div>
    </div>
  );
}