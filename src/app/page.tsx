import Hero from '@/components/sections/Hero';
import DevelopersSummary from '@/components/sections/DevelopersSummary';
import Marquee from '@/components/sections/Marquee';
import ProjectGrid from '@/components/sections/ProjectGrid';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <DevelopersSummary />
      <Marquee />
      <ProjectGrid />
    </div>
  );
}
