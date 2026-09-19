// components/TransitInfoCards.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

const transitData = [
  {
    id: "auto-bus",
    name: "Auto-Bus",
    tagline: "Street-Level AI Transit",
    description: "The backbone of the smart-city grid. Auto-Buses use swarm-logic to dynamically route through traffic, ensuring zero bottlenecks. Fully equipped with automated ramps and leveling suspension for 100% step-free wheelchair access.",
    stats: { speed: "60 km/h", capacity: "45 Pax", power: "Solar-Electric" },
    image: "/auto-bus.jpg"
  },
  {
    id: "mag-train",
    name: "Mag-Train",
    tagline: "High-Speed Artery",
    description: "Frictionless magnetic levitation trains that connect outer sectors to the city core in minutes. The Mag-Train network operates on elevated rails, completely separated from pedestrian and road traffic for maximum safety.",
    stats: { speed: "400 km/h", capacity: "300 Pax", power: "Magnetic/Grid" },
    image: "/mag-train.jpg"
  },
  {
    id: "air-transit",
    name: "Air-Transit",
    tagline: "Point-to-Point eVTOL",
    description: "Autonomous aerial passenger drones for express, long-distance travel across the metropolis. Features localized noise-cancellation hubs and priority booking for emergency medical transit.",
    stats: { speed: "250 km/h", capacity: "4 Pax", power: "Solid-State Battery" },
    image: "/air-transit.jpg"
  },
  {
    id: "smart-road",
    name: "Smart Road",
    tagline: "Active Infrastructure",
    description: "Piezoelectric road surfaces that charge vehicles as they drive. The roads communicate directly with all transit modes to manage speed limits, weather warnings, and route optimizations in real-time.",
    stats: { speed: "Variable", capacity: "Infinite", power: "Piezo-Kinetic" },
    image: "/smart-road.jpg"
  }
];

export default function TransitInfoCards() {
  const [selectedMode, setSelectedMode] = useState<typeof transitData[0] | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Available Transport Grid</h3>
        <p className="text-gray-500 font-medium">Select a mode to view 2100 network specifications.</p>
      </div>

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {transitData.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setSelectedMode(mode)}
            className="soft-card flex flex-col text-left hover:scale-105 transition-transform duration-300 group border border-transparent hover:border-teal-200 overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-gray-100">
              <Image
                src={mode.image}
                alt={mode.name}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>

            <div className="p-5 flex flex-col items-center text-center w-full">
              <h4 className="font-extrabold text-gray-900 text-lg mb-1">{mode.name}</h4>
              <span className="text-xs font-bold text-teal-500">{mode.tagline}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal / Pop-up */}
      {selectedMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="soft-card w-full max-w-lg relative overflow-hidden animate-[slideUp_0.3s_ease-out] flex flex-col">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={selectedMode.image}
                alt={selectedMode.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedMode(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-gray-900 transition-colors shadow-sm"
              >
                <span className="font-bold font-sans">&times;</span>
              </button>
            </div>

            <div className="p-8">
              <div className="mb-4">
                <h3 className="text-3xl font-extrabold text-gray-900">{selectedMode.name}</h3>
                <span className="inline-block mt-2 text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg">{selectedMode.tagline}</span>
              </div>

              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
              {selectedMode.description}
              </p>

              <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
                <div className="text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Top Speed</span>
                <span className="text-sm font-bold text-gray-900">{selectedMode.stats.speed}</span>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Capacity</span>
                <span className="text-sm font-bold text-gray-900">{selectedMode.stats.capacity}</span>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Power</span>
                <span className="text-sm font-bold text-teal-600">{selectedMode.stats.power}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}