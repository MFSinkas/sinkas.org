
import React from 'react';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import TalksSection from '../components/TalksSection';
import HighlightsSection from '../components/HighlightsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <ExperienceSection />
      <TalksSection />
      <HighlightsSection />
      <Footer />
    </div>
  );
};

export default Index;
