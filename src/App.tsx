import React from 'react';
import { FluidBackgroundCanvas } from './components/FluidBackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { AudienceSection } from './components/AudienceSection';
import { NoCodeSection } from './components/NoCodeSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { CurriculumSection } from './components/CurriculumSection';
import { ModuleDetailsSection } from './components/ModuleDetailsSection';
import { HandsOnSection } from './components/HandsOnSection';
import { IntegratorProjectSection } from './components/IntegratorProjectSection';
import { MicroCredentialsSection } from './components/MicroCredentialsSection';
import { TechLabsSection } from './components/TechLabsSection';
import { ProfessionalTracksSection } from './components/ProfessionalTracksSection';
import { SkillsSection } from './components/SkillsSection';
import { MethodologySection } from './components/MethodologySection';
import { TechStackSection } from './components/TechStackSection';
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
    <div className="relative min-h-screen bg-black text-[#E2E8F0] selection:bg-[#00F296] selection:text-black">
      {/* Dynamic Particle & Fluid Canvas */}
      <FluidBackgroundCanvas />

      {/* Film Grain Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-1 bg-noise opacity-30" />

      {/* Main Content Layout Stack */}
      <div className="relative z-10 space-y-0">
        <Navbar onOpenForm={scrollToForm} />
        <HeroSection onOpenForm={scrollToForm} />
        <OverviewSection />
        <AudienceSection />
        <NoCodeSection />
        <LearningJourneySection />
        <CurriculumSection />
        <ModuleDetailsSection />
        <HandsOnSection />
        <IntegratorProjectSection />
        <MicroCredentialsSection />
        <TechLabsSection />
        <ProfessionalTracksSection />
        <SkillsSection />
        <MethodologySection />
        <TechStackSection />
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
