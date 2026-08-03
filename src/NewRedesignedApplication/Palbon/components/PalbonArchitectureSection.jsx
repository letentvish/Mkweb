import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PalbonArchitectureSection({ onOpenSuiteModal }) {
  const navigate = useNavigate();
  const [activeArchTab, setActiveArchTab] = useState("single-record");

  // Swipe navigation for architecture tabs on mobile
  const archTabOrder = ["single-record", "event-driven", "shared-logic"];
  const archSwipeStartXRef = useRef(null);
  const handleArchTabSwipeStart = (e) => {
    archSwipeStartXRef.current = e.touches ? e.touches[0].clientX : null;
  };
  const handleArchTabSwipeEnd = (e) => {
    if (archSwipeStartXRef.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : null;
    if (endX === null) return;
    const diff = archSwipeStartXRef.current - endX;
    if (Math.abs(diff) < 50) return; // ignore tiny swipes
    const currentIdx = archTabOrder.indexOf(activeArchTab);
    if (diff > 0) {
      // Swipe left → next tab
      const next = archTabOrder[(currentIdx + 1) % archTabOrder.length];
      setActiveArchTab(next);
    } else {
      // Swipe right → previous tab
      const prev = archTabOrder[(currentIdx - 1 + archTabOrder.length) % archTabOrder.length];
      setActiveArchTab(prev);
    }
    archSwipeStartXRef.current = null;
  };

  const archTabData = {
    "single-record": {
      anchor: "ANCHOR",
      title: "One person, one record, one truth",
      body: "An employee is not a separate entity in HR, payroll, and projects. They are a single record. A change in one place is a change everywhere, instantly.",
      image: "/Single Record.webp"
    },
    "event-driven": {
      anchor: "STREAM",
      title: "Real-time triggers, zero manual intervention",
      body: "Events propagate instantly across the entire architecture. When a project milestone completes, invoicing and commission schedules trigger automatically without human lag.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    "shared-logic": {
      anchor: "UNIFIED",
      title: "Single source of truth for enterprise business rules",
      body: "Define core calculations, compliance rules, and permissions once. Every module inherits the exact same business logic, preventing conflicting metrics across departments.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    }
  };

  const currentArchContent = archTabData[activeArchTab];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 relative overflow-hidden" id="architecture-section">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#94A3B8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-bold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>SYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            The logic of one system
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Complexity is the enemy of execution. A unified structure eliminates the translation layer between departments, making the organization faster by design.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 mb-4 sm:mb-8 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveArchTab("single-record")}
            className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
              activeArchTab === "single-record" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>Single record</span>
            {activeArchTab === "single-record" && (
              <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
            )}
          </button>

          <button
            onClick={() => setActiveArchTab("event-driven")}
            className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
              activeArchTab === "event-driven" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>Event driven</span>
            {activeArchTab === "event-driven" && (
              <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
            )}
          </button>

          <button
            onClick={() => setActiveArchTab("shared-logic")}
            className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
              activeArchTab === "shared-logic" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>Shared logic</span>
            {activeArchTab === "shared-logic" && (
              <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
            )}
          </button>
        </div>

        {/* Swipe hint dots — mobile only */}
        <div className="flex lg:hidden justify-center items-center gap-2 mb-4">
          {archTabOrder.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveArchTab(tab)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeArchTab === tab
                  ? "w-6 h-2 bg-[#0284c7]"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Unboxed Dual Column Layout - Swipeable on Mobile */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
          onTouchStart={handleArchTabSwipeStart}
          onTouchEnd={handleArchTabSwipeEnd}
        >
          
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden flex items-center justify-center min-h-[220px] max-h-[300px] sm:min-h-[400px] sm:max-h-none lg:min-h-[700px] h-full">
            <img 
              src={currentArchContent.image}
              alt={currentArchContent.title} 
              className="w-full h-full object-contain transition-all duration-700 drop-shadow-xl max-h-[280px] sm:max-h-none"
            />
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-3 sm:space-y-6 text-left pl-0 lg:pl-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
              <span>{currentArchContent.anchor}</span>
            </div>

            <h3 className="text-xl sm:text-3xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]">
              {currentArchContent.title.includes("truth") ? (
                <>
                  One person, one record, <br className="hidden sm:inline" />
                  one <span className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] bg-clip-text text-transparent">truth</span>
                </>
              ) : (
                currentArchContent.title
              )}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {currentArchContent.body}
            </p>

            <div className="flex items-center gap-4 pt-3">
              <button
                onClick={onOpenSuiteModal}
                className="px-6 py-3 rounded-full border-2 border-[#0284c7] text-[#0284c7] hover:bg-[#0284c7] hover:text-white font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                Explore Architecture Blueprint
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-extrabold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
