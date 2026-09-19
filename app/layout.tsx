// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OmniFlow | Transportation 2100',
  description: 'Seamless smart-city transit for everyone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen selection:bg-teal-500/30`}>
        {/* The global navigation bar */}
        <NavBar />
        
        {/* Responsive container with top padding to account for the fixed NavBar */}
        <main className="w-full mx-auto pt-24 pb-6 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}