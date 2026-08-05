import React from "react";
import CorporateHero from "./Herosection";
import WhyMKraft from "./WhyMKraft";
import TransformSection from "./TransformSection";
import CapabilityPillars from "./CapabilityPillars";
import AssessmentHubSection from "./AssessmentHubSection";
import DiagnosticsSection from "./DiagnosticsSection";
import CTASection from "./Ctasection";

const CorporateConsulting = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pt-16">
      {/* 1. Hero Section & 3 Sub-Cards */}
      <CorporateHero />

      {/* 2. Why MKraft (4 Feature Cards Grid) */}
      <WhyMKraft />

      {/* 3. How MKraft Transforms (5-Step Methodology Flow) */}
      <TransformSection />

      {/* 4. Five ways we build lasting capability (5 Service Pillars) */}
      <CapabilityPillars />

      {/* 5. Assessment Hub & Next-Gen Diagnostic Ecosystem */}
      <AssessmentHubSection />

      {/* 6. Organizational Diagnostics & Telemetry Dashboard */}
      <DiagnosticsSection />

      {/* 7. Bottom Call To Action */}
      <CTASection />
    </div>
  );
};

export default CorporateConsulting;