import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisualInterludeSection } from "@/components/sections/VisualInterludeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ROISection } from "@/components/sections/ROISection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex-1 w-full flex flex-col min-h-screen'>
        <HeroSection />
        <AboutSection />
        <VisualInterludeSection />
        <ServicesSection />
        <IndustriesSection />
        <PhilosophySection />
        <TestimonialsSection />
        <ROISection />
        <ResourcesSection />
        <PodcastSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
