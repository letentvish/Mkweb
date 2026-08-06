import React, { useState, useEffect, useRef } from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CapabilityPillars() {
  const navigate = useNavigate();
  const [version, setVersion] = useState("v2"); // "v1" or "v2"
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const pillarRefs = useRef([]);

  const servicePillars = [
    {
      step: "01",
      pillarTag: "PILLAR 01",
      icon: <Users className="w-7 h-7" />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design.",
      // Real corporate boardroom & executive leadership meeting image
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks.",
      // Real team workshop & culture collaboration image
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output.",
      // Real talent performance architecture & analytics discussion image
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap className="w-7 h-7" />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies.",
      // Real tech workspace & digital workforce learning image
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass className="w-7 h-7" />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution.",
      // Real strategic enterprise advisory & executive consulting image
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Scroll observer to trigger node zoom & light drop activation in Version 2
  useEffect(() => {
    if (version !== "v2") return;

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index)) {
            setActivePillarIndex(index);
          }
        }
      });
    }, observerOptions);

    pillarRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [version]);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="capability-pillars">
      
      {/* Background Radial Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(2, 132, 199, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(2, 132, 199, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 text-left py-4 z-20">
            
            <div className="flex items-center gap-3">
              <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase">
                JOURNEYS
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Five ways <br />
              we build <br />
              lasting <span className="text-[#0284c7]">capability</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-md">
              Bespoke solutions, engineered end to end. Choose one, or weave several into a single journey — every pillar runs on the same diagnostic engine.
            </p>

            {/* Interactive Version Toggle Switch Button Container */}
            <div className="pt-1">
              <div className="inline-flex p-1 rounded-full bg-slate-200/80 border border-slate-300/70 shadow-inner text-xs font-mono">
                <button
                  onClick={() => setVersion("v1")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    version === "v1"
                      ? "bg-[#0284c7] text-white shadow-md font-bold"
                      : "text-slate-600 hover:text-slate-900 font-semibold"
                  }`}
                >
                  Version 1 (Cards)
                </button>

                <button
                  onClick={() => setVersion("v2")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    version === "v2"
                      ? "bg-[#0284c7] text-white shadow-md font-bold"
                      : "text-slate-600 hover:text-slate-900 font-semibold"
                  }`}
                >
                  Version 2 (Full-Height & Media)
                </button>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={() => navigate("/assessment")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                <span>Diagnose</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Middle Column: Vertical Scroll Line & Animated Constant Light Drop */}
          <div className={`hidden lg:flex lg:col-span-1 flex-col items-center justify-between relative py-6 self-stretch ${
            version === "v2" ? "min-h-screen py-12 justify-around" : ""
          }`}>
            {/* Continuous Vertical Blue Indicator Line */}
            <div className="w-[2px] bg-sky-200/90 absolute top-8 bottom-8 left-1/2 -translate-x-1/2 z-0" />

            {/* Fixed Animated Light Drop Beam (Positioned Constant at Viewport Center in Version 2) */}
            {version === "v2" && (
              <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 z-30 pointer-events-none my-auto">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-[#0284c7] shadow-[0_0_25px_#0284c7] ring-4 ring-sky-300/80 animate-pulse border-2 border-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white animate-ping" />
                </div>
              </div>
            )}

            {/* 5 Node Dots */}
            {servicePillars.map((_, idx) => {
              const isActive = activePillarIndex === idx && version === "v2";
              return (
                <div 
                  key={idx}
                  className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md relative z-10 my-auto transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-[#0284c7] border-2 border-white scale-150 ring-4 ring-sky-400 shadow-[0_0_25px_#0284c7]"
                      : "bg-white border-2 border-[#0284c7]"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full transition-transform ${isActive ? "bg-white scale-125" : "bg-[#0284c7]"}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Version 1 vs Version 2 Content */}
          <div className="lg:col-span-6">
            
            {/* VERSION 1: Compact Enterprise White Cards */}
            {version === "v1" && (
              <div className="space-y-6 sm:space-y-8 pb-12">
                {servicePillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-100/40 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 text-left group overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      
                      {/* Left Square Icon Box */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-sky-50/80 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                        {item.icon}
                      </div>

                      {/* Right Content */}
                      <div className="flex-grow space-y-2 w-full">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-extrabold text-[#0284c7] tracking-wider uppercase bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full">
                            {item.pillarTag}
                          </span>
                        </div>

                        <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-[#01182F] tracking-tight leading-snug group-hover:text-[#0284c7] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-[#0284c7] font-bold text-xs sm:text-sm">
                          {item.subtitle}
                        </p>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VERSION 2: Full-Height Frameless Items with Scroll Light Trigger & Content Zoom */}
            {version === "v2" && (
              <div className="space-y-12">
                {servicePillars.map((item, idx) => {
                  const isActive = activePillarIndex === idx;

                  return (
                    <div
                      key={idx}
                      ref={(el) => (pillarRefs.current[idx] = el)}
                      data-index={idx}
                      className={`min-h-screen flex flex-col justify-center py-12 lg:py-16 text-left group border-0 bg-transparent shadow-none transition-all duration-500 ${
                        isActive ? "scale-[1.03] opacity-100" : "scale-100 opacity-75"
                      }`}
                    >
                      
                      {/* Real High-Resolution Subject Photography (No AI) */}
                      <div className={`w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg border transition-all duration-700 mb-6 ${
                        isActive
                          ? "shadow-2xl border-sky-400 ring-4 ring-sky-200/60 scale-[1.01]"
                          : "border-slate-200/80"
                      }`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isActive ? "scale-105 brightness-100" : "filter brightness-90"
                          }`}
                        />
                      </div>

                      {/* Top Badge & Pillar Number */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-[#0284c7] text-white shadow-md"
                            : "bg-sky-50 text-[#0284c7] border border-sky-200"
                        }`}>
                          {item.pillarTag}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#0284c7] text-white shadow-lg scale-110"
                            : "bg-sky-50 border border-sky-100 text-[#0284c7]"
                        }`}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Title & Copy with Zoom & Highlight */}
                      <h3 className={`font-poppins font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug mb-2 transition-all duration-300 ${
                        isActive ? "text-[#0284c7] scale-[1.02] origin-left" : "text-[#01182F]"
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`font-bold text-sm sm:text-base mb-3 transition-colors duration-300 ${
                        isActive ? "text-[#0369a1]" : "text-[#0284c7]"
                      }`}>
                        {item.subtitle}
                      </p>

                      <p className={`text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300 ${
                        isActive ? "text-slate-900 font-medium" : "text-slate-600"
                      }`}>
                        {item.description}
                      </p>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
