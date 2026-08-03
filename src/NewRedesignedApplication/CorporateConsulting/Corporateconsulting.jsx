import React from "react";
import CorporateHero from "./Herosection";
import ServiceCards from "./Servicecards";
import VideoSection from "./Videosection";
import ConsultingExcellence from "./Consultingexcellence";
import Advisory from "./Advisoryexcellence";
import SuccessStories from "./Sucessstories";
import WhatSetsUsApart from "./Whatsetsusapart";
import CTASection from "./Ctasection";

const CorporateConsulting = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <CorporateHero />

      {/* Video Section */}
      <VideoSection />

      {/* How We Can Help */}
      <ServiceCards />

      {/* Consulting Excellence */}
      <ConsultingExcellence />

      {/* Advisory Excellence */}
      <Advisory />

      {/* Impact & Success Stories */}
      <SuccessStories />

      {/* What Sets Us Apart */}
      <WhatSetsUsApart />

      {/* Call To Action */}
      <CTASection />
    </div>
  );
};

export default CorporateConsulting;