// app/profile/page.tsx
"use client";
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-[#f3f7fb] flex flex-col relative overflow-hidden font-sans pb-10">
      
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] rounded-full bg-teal-200/40 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-mint-200/30 blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-30 w-full max-w-2xl mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link href="/" className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center hover:bg-white transition-colors border border-gray-100">
          <span className="text-gray-900 font-bold text-xl leading-none">&larr;</span>
        </Link>
        <h1 className="text-lg font-extrabold text-gray-900 tracking-tight">Commuter ID</h1>
        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center border border-gray-100 transition-colors hover:bg-white">
           <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </button>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 flex flex-col gap-6 animate-[slideUp_0.4s_ease-out]">
        
        {/* Holographic ID Card */}
        <div className="w-full bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-gray-700">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex items-start justify-between relative z-10 mb-8">
            <div className="flex items-center gap-4">
              {/* User Avatar matching your UI */}
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] border-2 border-white/20">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-orange-400">U</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">User Omni-Pass</h2>
                <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-md border border-teal-400/20">
                  Student • University of Moratuwa
                </span>
              </div>
            </div>
            
            {/* Holographic RFID Icon */}
            <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10 border-t border-white/10 pt-5">
            <div>
              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Omni-ID</span>
              <span className="text-lg font-mono text-white tracking-widest">0x9F4...A2</span>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Network Status</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                <span className="text-sm font-bold text-teal-400">Sync Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry & Eco Impact */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center text-teal-600 mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Carbon Offset</span>
            <span className="block text-2xl font-black text-gray-900 mt-1 font-mono tracking-tighter">420 kg</span>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Hours Saved</span>
            <span className="block text-2xl font-black text-gray-900 mt-1 font-mono tracking-tighter">18.5 h</span>
          </div>
        </div>

        {/* Saved Transit Nodes */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 mb-5">Frequent Hubs</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm">University of Moratuwa</h4>
                  <span className="text-xs font-bold text-gray-400">Sector 4 • Mag-Train</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-sm">Nethra AI Clinic</h4>
                  <span className="text-xs font-bold text-gray-400">Rural Grid • Auto-Bus</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:flex-1 bg-white border border-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition-colors hover:bg-gray-50 text-sm shadow-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            Payment Methods
          </button>
          <button className="w-full sm:flex-1 bg-white border border-gray-200 text-gray-900 font-bold py-3.5 rounded-xl transition-colors hover:bg-gray-50 text-sm shadow-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            Preferences
          </button>
        </div>

      </div>
    </div>
  );
}