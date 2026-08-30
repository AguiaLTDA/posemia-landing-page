import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { AudienceSection } from './components/AudienceSection';
import { NoCodeSection } from './components/NoCodeSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { CurriculumSection } from './components/CurriculumSection';
import { ComplementaryContentSection } from './components/ComplementaryContentSection';
import { ProfessionalTracksSection } from './components/ProfessionalTracksSection';
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
    <div className="min-h-screen surface-shell">
      <Navbar onOpenForm={scrollToForm} />

      <main>
        <HeroSection onOpenForm={scrollToForm} />
        <OverviewSection />
        <AudienceSection />
        <NoCodeSection />
        <LearningJourneySection />
        <CurriculumSection />
        <ComplementaryContentSection />
        <ProfessionalTracksSection />
        <CourseInfoSection />
        <LeadFormSection />
        <FaqSection />
      </main>

      <Footer />
      <FloatingCTA onOpenForm={scrollToForm} />
    </div>
  );
}

export default App;
