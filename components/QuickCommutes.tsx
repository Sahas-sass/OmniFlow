// components/QuickCommutes.tsx
"use client";

export default function QuickCommutes() {
  const commutes = [
    {
      id: 1,
      title: "Morning Lecture",
      from: "Sector 4 Hub",
      to: "Univ of Moratuwa",
      time: "18 min",
      mode: "Mag-Train",
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      id: 2,
      title: "Client Meeting",
      from: "Campus",
      to: "Colombo Tech District",
      time: "32 min",
      mode: "Auto-Bus",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      id: 3,
      title: "Weekend Market",
      from: "Home",
      to: "Neo-Colombo Center",
      time: "12 min",
      mode: "Air-Transit",
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-6 relative z-10">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-700">Quick Commutes</h3>
        <button className="text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors">
          View All &rarr;
        </button>
      </div>

      {/* Horizontal Scrolling Container - Scrollbar firmly hidden */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 scrollbar-hide snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {commutes.map((route) => (
          <button 
            key={route.id}
            className="shrink-0 w-64 soft-card p-5 text-left hover:scale-[1.02] transition-transform border border-transparent hover:border-teal-100 snap-start"
          >
            <div className="flex justify-between items-start mb-3">
              <div className={`p-2 rounded-xl ${route.bg} ${route.color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-extrabold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-full">{route.time}</span>
            </div>
            
            <h4 className="font-extrabold text-base text-gray-900 mb-1 truncate">{route.title}</h4>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 truncate">
              <span className="truncate">{route.from}</span>
              <span>&rarr;</span>
              <span className="truncate">{route.to}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}