import GrainOverlay from '@/components/landing/GrainOverlay';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/sections/HeroSection';
import FeatureSection from '@/components/landing/sections/FeatureSection';
import CalendarPreview from '@/components/landing/sections/CalendarPreview';
import StatsSection from '@/components/landing/sections/StatsSection';
import PricingSection from '@/components/landing/sections/PricingSection';
import CtaBanner from '@/components/landing/sections/CtaBanner';
import FooterSection from '@/components/landing/sections/FooterSection';

export default function Home() {
  return (
    <main style={{ background: 'var(--obsidian)' }}>
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CalendarPreview />
      <StatsSection />
      <PricingSection />
      <CtaBanner />
      <FooterSection />
    </main>
  );
}
