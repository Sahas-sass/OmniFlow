// components/NavBar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Route Details', path: '/route' },
    { name: 'Live Map', path: '/tracking' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-4xl mx-auto soft-card px-6 py-3 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg primary-gradient flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <span className="font-extrabold text-gray-900 tracking-tight hidden sm:block">
            OmniFlow
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-1 sm:gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
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

        {/* Profile / Settings Placeholder */}
        <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden flex items-center justify-center">
           <span className="text-xs text-gray-500 font-bold">U</span>
        </div>

      </div>
    </nav>
  );
}