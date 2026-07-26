import React, { useEffect } from 'react';
import HeroSectionMile from './MileComponents/HeroSectionMile';
import IntroductionSection from './MileComponents/IntroductionSection';
import TransformLearningJourney from './MileComponents/TranformLearningJourney';
import Implementation from './MileComponents/Implementation';
import HighlightsSection from './MileComponents/HighlightsSection';
import FeaturesSection from './MileComponents/FeaturesSection';
import BenefitsSection from './MileComponents/BenefitsSection';
import JourneySection from './MileComponents/JourneySection';
import KeyDifferentiators from './MileComponents/KeyDifferentiators';
import MilesFooter from './MileComponents/MilesFooter';
import { useTheme } from './useTheme';

function MilePage() {
  const isDarkMode = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-[#F3F3F3] text-gray-900"
      }`}
    >
      <HeroSectionMile />
      <IntroductionSection />
      <JourneySection />
      <KeyDifferentiators />
      <BenefitsSection />
      <FeaturesSection />
      <HighlightsSection />
      <Implementation />
      <TransformLearningJourney />
    </div>
  );
}

export default MilePage;
