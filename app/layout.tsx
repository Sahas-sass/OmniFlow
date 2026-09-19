// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OmniFlow | Transportation 2100',
  description: 'Seamless smart-city transit for everyone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B0F19] text-[#F8FAFC] min-h-screen selection:bg-cyan-500/30`}>
        {/* Responsive container: Full width on mobile, max-width on large screens */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}