import React from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CapabilityPillars() {
  const navigate = useNavigate();

  const servicePillars = [
    {
      step: "01",
      icon: <Users className="w-6 h-6 text-[#0284c7]" />,
      title: "Organization & Leadership Development",
      subtitle: "EXECUTIVE LEADERSHIP & ALIGNMENT",
      description: "Empowering leadership teams to navigate disruption, align strategic intent, and build high-trust performance cultures across the enterprise.",
      image: "/pillar_consulting.png"
    },
    {
      step: "02",
      icon: <RefreshCw className="w-6 h-6 text-[#0284c7]" />,
      title: "Culture Transformation and Change Management",
      subtitle: "CHANGE ACCELERATION & READINESS",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks.",
      image: "/pillar_academic.png"
    },
    {
      step: "03",
      icon: <BarChart3 className="w-6 h-6 text-[#0284c7]" />,
      title: "Talent and Performance Architecture",
      subtitle: "WORKFORCE OPTIMIZATION & KPI ALIGNMENT",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output.",
      image: "/pillar_technology.png"
    },
    {
      step: "04",
      icon: <GraduationCap className="w-6 h-6 text-[#0284c7]" />,
      title: "AI LXP and Learning Services",
      subtitle: "CONTINUOUS CAPABILITY & SKILL TELEMETRY",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies.",
      image: "/hero_woman.png"
    },
    {
      step: "05",
      icon: <Compass className="w-6 h-6 text-[#0284c7]" />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "OPERATING MODEL & ORG ARCHITECTURE",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution.",
      image: "/approach_isometric.png"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="capability-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 text-left py-4 z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>SERVICES & PILLARS</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]">
              Five ways we build <br />
              lasting <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">capability</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              We do not sell templated advice. We bring 5 targeted consulting pillars designed to transform leadership, culture, performance, and strategic execution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                <span>Explore Pillars</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
              >
                <span>Contact Advisory</span>
              </button>
            </div>

          </div>

          {/* Right Column: Sticky Stacking Cards */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16 pb-16">
            {servicePillars.map((item, idx) => (
              <div
                key={idx}
                style={{
                  top: `${100 + idx * 24}px`,
                  zIndex: idx + 10,
                }}
                className="sticky bg-white border border-sky-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-900/10 min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center text-left group transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8 h-full">
                  
                  {/* Left Graphic Preview Box */}
                  <div className="md:col-span-5 w-full h-48 sm:h-56 lg:h-64 rounded-2xl bg-sky-50/70 border border-sky-100/90 overflow-hidden relative flex items-center justify-center p-4 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                  {/* Right Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-extrabold text-[#0284c7] bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full">
                        {item.step}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-sky-50 text-[#0284c7] border border-sky-100">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#01182F] tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs font-bold text-[#0284c7] uppercase tracking-wider font-poppins">
                      {item.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
