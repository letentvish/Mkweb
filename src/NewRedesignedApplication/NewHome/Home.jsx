import React from 'react';
import HeroSection from './Components/HeroSection';
import PartnersSection from './Components/PartnersSection';
import SolutionsSection from './Components/SolutionsSection';
import BusinessApproach from './Components/BusinessApproach';
import ContextSection from './Components/ContextSection';
import IntroVideo from './Components/IntroVideo';
import StatsSection from './Components/StatsSection';
import CTASection from './Components/CTASection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <div id="partners">
        <PartnersSection />
      </div>
      <SolutionsSection />
      <div id="business-pillars">
        <BusinessApproach />
      </div>
      <ContextSection />
      <StatsSection />
      {/* <div id="news">
        <NewsSection />
      </div>
      <CTASection /> */}
      <IntroVideo />
      <CTASection />
    </div>
  );
};

export default Home;
