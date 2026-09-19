// components/NavBar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Route', 
      path: '/route',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    { 
      name: 'Map', 
      path: '/tracking',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* 1. TOP HEADER (Visible on all screens) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto soft-card px-5 py-3 flex items-center justify-between pointer-events-auto">
          
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 flex-shrink-0 drop-shadow-sm">
              <Image
                src="/logo.png"
                alt="OmniFlow Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-gray-900 text-xl tracking-tight hidden sm:block">
              OmniFlow
            </span>
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Profile / Settings */}
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
             <span className="text-xs text-gray-500 font-bold">U</span>
          </div>

        </div>
      </header>

      {/* 2. BOTTOM TAB BAR (Visible ONLY on Mobile) */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="soft-card px-2 py-2 flex items-center justify-around shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.icon}
                <span className="text-[10px] font-bold mt-1">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}