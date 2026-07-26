import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import HeroSection from './Components/Component1';
import WhatIsSection from './Components/Component2';
import CaRVEBehaviourFramework from './Components/Component3';
import HowCaRVEWorks from './Components/Component4';
import CaRVEStyles from './Components/Component6';
import HarnessDataCTA from './Components/Component7';
import EnergyStatesSection from './Components/component5';

const Carve = () => {
  const isDarkMode = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 min-h-screen ${
        isDarkMode ? 'bg-[#0B1B3D]' : 'bg-white'
      }`}
    >
      <HeroSection />
      <WhatIsSection />
      <CaRVEBehaviourFramework />
      <EnergyStatesSection />
      <CaRVEStyles />
      <HowCaRVEWorks />
      <HarnessDataCTA />
    </div>
  );
};

export default Carve;
