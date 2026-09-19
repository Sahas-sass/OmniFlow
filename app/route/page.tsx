// app/route/page.tsx
import Link from 'next/link';

export default function RouteDetails() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 px-4">
      
      {/* Header & Back Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Link href="/" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100">
          <span className="text-gray-900 font-bold text-xl leading-none">&larr;</span>
        </Link>
        <h1 className="text-xl font-extrabold text-gray-900">Active Journey</h1>
        <div className="w-10 h-10" /> {/* Spacer for centering */}
      </div>

      {/* Real-time Alert Banner */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-md">
          <span className="text-white font-bold">!</span>
        </div>
        <div>
          <h3 className="text-red-900 font-bold text-sm">Air-Transit Delay</h3>
          <p className="text-red-700 text-xs font-medium mt-1">
            High winds at District 9. Mag-Train alternative has been automatically pre-booked at no extra cost.
          </p>
        </div>
      </div>

      {/* Route Summary Stats */}
      <div className="soft-card p-6 flex justify-between items-center relative z-10">
        <div className="text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Time</span>
          <span className="text-2xl font-extrabold text-gray-900">42 <span className="text-sm">min</span></span>
        </div>
        <div className="w-px h-10 bg-gray-200"></div>
        <div className="text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Cost</span>
          <span className="text-2xl font-extrabold text-gray-900">2.40 <span className="text-sm">Cr</span></span>
        </div>
        <div className="w-px h-10 bg-gray-200"></div>
        <div className="text-center">
          <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Access</span>
          <span className="text-2xl font-extrabold text-teal-500">100%</span>
        </div>
      </div>

      {/* Unified Transit Timeline */}
      <div className="soft-card p-6 sm:p-8 relative z-10">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Route Steps</h2>
        
        <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
          
          {/* Step 1: Walk */}
          <div className="relative pl-8">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-200 border-4 border-white shadow-sm" />
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">Walk to Sector 4 Hub</h4>
                <p className="text-sm text-gray-500 font-medium">Level pathways, 400m</p>
              </div>
              <span className="text-sm font-bold text-gray-400">09:00</span>
            </div>
          </div>

          {/* Step 2: Auto-Bus */}
          <div className="relative pl-8">
            <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full primary-gradient border-4 border-white shadow-md flex items-center justify-center" />
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">Auto-Bus (Line C)</h4>
                <p className="text-sm text-teal-600 font-bold bg-teal-50 inline-block px-2 py-0.5 rounded-md mt-1">Wheelchair Ramp Deployed</p>
              </div>
              <span className="text-sm font-bold text-gray-900">09:08</span>
            </div>
          </div>

          {/* Step 3: Mag-Train */}
          <div className="relative pl-8">
             <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-gray-900 border-4 border-white shadow-md flex items-center justify-center" />
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">Mag-Train (Express)</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">Platform 2 &rarr; Platform 4</p>
              </div>
              <span className="text-sm font-bold text-gray-900">09:22</span>
            </div>
          </div>

          {/* Step 4: Destination */}
          <div className="relative pl-8">
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-teal-400 border-4 border-white shadow-sm" />
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">Arrive at Aero-Hub</h4>
                <p className="text-sm text-gray-500 font-medium">District 9</p>
              </div>
              <span className="text-sm font-bold text-gray-400">09:42</span>
            </div>
          </div>

        </div>
      </div>

      <Link href="/tracking" className="w-full mt-2 primary-gradient hover:opacity-90 text-white text-center font-bold py-4 rounded-2xl transition-opacity text-lg shadow-[0_8px_20px_rgba(45,212,191,0.3)] block">
        Start Live Tracking
      </Link>

    </div>
  );
}