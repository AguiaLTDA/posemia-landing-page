import React from 'react';
import { FluidBackgroundCanvas } from './components/FluidBackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { AudienceTracksSection } from './components/AudienceTracksSection';
import { CurriculumStepperSection } from './components/CurriculumStepperSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { CourseInfoSection } from './components/CourseInfoSection';
import { LeadFormSection } from './components/LeadFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export function App() {
  const scrollToForm = () => {
    const el = document.getElementById('inscricao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#041A13] text-[#D7E1DD] selection:bg-[#00D889] selection:text-[#041A13]">
      {/* Dynamic Fluid Background Canvas */}
      <FluidBackgroundCanvas />

      {/* Film Grain Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-1 bg-noise opacity-40" />

      {/* Main Content Layout Stack: 10 Consolidated Editorial Sections */}
      <div className="relative z-10 space-y-0">
        <Navbar onOpenForm={scrollToForm} />
        <HeroSection onOpenForm={scrollToForm} />
        <OverviewSection />
        <AudienceTracksSection />
        <CurriculumStepperSection />
        <DifferentiatorsSection />
        <CourseInfoSection />
        <LeadFormSection />
        <FaqSection />
        <Footer />
        <FloatingCTA onOpenForm={scrollToForm} />
      </div>
    </div>
  );
}

export default App;

