// components/HeroHeader.tsx
export default function HeroHeader() {
  return (
    <div className="text-center mb-8 max-w-lg mx-auto pt-6">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
        OmniFlow
      </h1>
      <p className="text-base md:text-lg text-slate-100 leading-relaxed font-medium">
        Seamlessly navigate the 2100 smart-city grid. One unified platform for air, rail, and road.
      </p>
    </div>
  );
}