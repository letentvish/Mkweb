import React, { useState } from "react";
import NewNavbar from "../Components/NewNavbar";
import NewFooter from "../Components/NewFooter";
import SuiteConfiguratorModal from "./SuiteConfiguratorModal";
import EcosystemCtaSection from "./EcosystemCtaSection";

// Section Components
import PalbonHero from "./components/PalbonHero";
import PalbonFeatureBar from "./components/PalbonFeatureBar";
import PalbonFrictionSection from "./components/PalbonFrictionSection";
import PalbonClaritySection from "./components/PalbonClaritySection";
import PalbonFrameworkSection from "./components/PalbonFrameworkSection";
import PalbonArchitectureSection from "./components/PalbonArchitectureSection";

export default function PalbonPage() {
  const [isSuiteModalOpen, setIsSuiteModalOpen] = useState(false);

  const handleOpenSuiteModal = () => setIsSuiteModalOpen(true);
  const handleCloseSuiteModal = () => setIsSuiteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden">
      
      {/* Global Navigation Bar */}
      <NewNavbar />

      {/* SECTION 1: HERO V3 (Modular App Grid & 3D WebGL CircularGallery) */}
      <PalbonHero onOpenSuiteModal={handleOpenSuiteModal} />

      {/* SECTION 1.5: FEATURE BAR (4 Enterprise Value Props) */}
      <PalbonFeatureBar />

      {/* SECTION 2: FRICTION (Dual Row Animated Image Marquee) */}
      <PalbonFrictionSection />

      {/* SECTION 3: CLARITY (A Single Source of Truth - Dark) */}
      <PalbonClaritySection />

      {/* SECTION 4: BUILT FOR YOUR FRAMEWORK (Configuration & Reasoning Cards) */}
      <PalbonFrameworkSection onOpenSuiteModal={handleOpenSuiteModal} />

      {/* SECTION 5: SYSTEM ARCHITECTURE (Single Record / Event Driven / Shared Logic) */}
      <PalbonArchitectureSection onOpenSuiteModal={handleOpenSuiteModal} />

      {/* SECTION 6: ECOSYSTEM CTA BANNER */}
      <EcosystemCtaSection onOpenSuiteModal={handleOpenSuiteModal} />

      {/* Suite Configurator Modal Overlay */}
      <SuiteConfiguratorModal 
        isOpen={isSuiteModalOpen} 
        onClose={handleCloseSuiteModal} 
      />

      {/* Global Footer */}
      <NewFooter />

    </div>
  );
}
