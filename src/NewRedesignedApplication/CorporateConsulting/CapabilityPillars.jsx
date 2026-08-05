import React from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CapabilityPillars() {
  const navigate = useNavigate();

  const servicePillars = [
    {
      step: "01",
      icon: <Users className="w-7 h-7 text-[#0284c7]" />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design."
    },
    {
      step: "02",
      icon: <RefreshCw className="w-7 h-7 text-[#0284c7]" />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks."
    },
    {
      step: "03",
      icon: <BarChart3 className="w-7 h-7 text-[#0284c7]" />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output."
    },
    {
      step: "04",
      icon: <GraduationCap className="w-7 h-7 text-[#0284c7]" />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies."
    },
    {
      step: "05",
      icon: <Compass className="w-7 h-7 text-[#0284c7]" />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and org architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="capability-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 text-left py-4">
            
            <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block font-poppins">
              Journeys
            </span>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]">
              Five ways we build lasting capability
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Bespoke solutions, engineered end to end. Choose one, or weave several into a single journey — every pillar runs on the same diagnostic engine.
            </p>

            {/* Action CTAs */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={() => navigate("/assessment")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                Diagnose
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1 transition-colors cursor-pointer group"
              >
                <span>Explore</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean Items with Icon Header (No Images) */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16">
            {servicePillars.map((item, idx) => (
              <div
                key={idx}
                className="text-left group pb-8 border-b border-slate-200/80 last:border-0"
              >
                {/* Top Icon Circle & Pillar Step Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#0284c7] bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-poppins">
                    PILLAR {item.step}
                  </span>
                </div>

                {/* Content Underneath */}
                <div className="space-y-2">
                  <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#01182F] tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm font-bold text-[#0284c7] font-poppins">
                    {item.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
