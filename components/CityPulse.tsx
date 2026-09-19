// components/CityPulse.tsx
"use client";

export default function CityPulse() {
  const statuses = [
    { label: "Mag-Train Swarm", status: "Optimal", color: "bg-teal-400" },
    { label: "Air-Transit Hubs", status: "High Winds", color: "bg-amber-400" },
    { label: "Grid Power", status: "100% Green", color: "bg-teal-400" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8 mt-4">
      <div className="soft-card p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-gray-100">
        
        {/* Live Indicator Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </div>
          <h3 className="font-extrabold text-gray-900 text-sm uppercase tracking-wider">
            City Pulse <span className="text-gray-400 font-medium ml-1">| Neo-Colombo</span>
          </h3>
        </div>

        {/* Status Metrics */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-6 md:justify-end flex-1">
          {statuses.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between sm:justify-start gap-2 border-b sm:border-b-0 border-gray-100 pb-2 sm:pb-0 last:pb-0 last:border-0">
              <span className="text-sm font-bold text-gray-500">{item.label}:</span>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 shadow-inner">
                <span className={`w-2 h-2 rounded-full ${item.color} shadow-sm`}></span>
                <span className="text-xs font-extrabold text-gray-900">{item.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}