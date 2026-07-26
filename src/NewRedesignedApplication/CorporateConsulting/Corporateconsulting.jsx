import React from "react";
import CorporateHero from "./Herosection";
import ServiceCards from "./Servicecards";
import VideoSection from "./Videosection";
import ConsultingExcellence from "./Consultingexcellence";
import Advisory from "./Advisoryexcellence";
import SuccessStories from "./Sucessstories";
import WhatSetsUsApart from "./Whatsetsusapart";
import CTASection from "./Ctasection";
import Corporatefooter from "./Corporatefooter";
import "./CorporateConsulting.css";

const CorporateConsulting = () => {
  return (
    <div className="corporate-consulting-container">
      <CorporateHero />
      <VideoSection />
      <ServiceCards />
      <ConsultingExcellence />
      <Advisory />
      <SuccessStories />
      <WhatSetsUsApart />
      <CTASection />
    </div>
  );
};

export default CorporateConsulting;