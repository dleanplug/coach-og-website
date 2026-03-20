import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Ticker } from "@/components/shared/Ticker";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisualBreakSection } from "@/components/sections/VisualBreakSection";
import { VisualInterludeSection } from "@/components/sections/VisualInterludeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CTASection } from "@/components/sections/CTASection";
import { tickerItems } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex-1 w-full flex flex-col min-h-screen'>
        <HeroSection />
        <Ticker items={tickerItems} />
        <AboutSection />
        <VisualBreakSection />
        <ServicesSection />
        <IndustriesSection />
        <PhilosophySection />
        <TestimonialsSection />
        <VisualInterludeSection />
        <EventsSection />
        <ResourcesSection />
        <PodcastSection />
        <SkillsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
