import HeroHeader from '@/components/HeroHeader';
import JourneySearch from '@/components/JourneySearch';

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-8 px-4 sm:px-6">
      <HeroHeader />
      <JourneySearch />
    </div>
  );
}