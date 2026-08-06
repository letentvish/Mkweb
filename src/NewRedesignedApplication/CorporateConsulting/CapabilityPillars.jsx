import React from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CapabilityPillars() {
  const navigate = useNavigate();

  const servicePillars = [
    {
      step: "01",
      pillarTag: "PILLAR 01",
      icon: <Users className="w-8 h-8 text-[#0284c7]" />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design."
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw className="w-8 h-8 text-[#0284c7]" />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks."
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 className="w-8 h-8 text-[#0284c7]" />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output."
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap className="w-8 h-8 text-[#0284c7]" />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies."
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass className="w-8 h-8 text-[#0284c7]" />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution."
    }
  ];

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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 text-left py-4 z-20">
            
            <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase mb-1">
              JOURNEYS
            </p>

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

          {/* Right Column: Sticky Stacking Cards with Cards Design */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16 pb-16">
            {servicePillars.map((item, idx) => (
              <div
                key={idx}
                style={{
                  top: `${100 + idx * 24}px`,
                  zIndex: idx + 10,
                }}
                className="sticky bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-100/40 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 text-left group overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  
                  {/* Left Square Icon Box */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-sky-50/80 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Right Content */}
                  <div className="flex-grow space-y-2 w-full">
                    
                    {/* Header Row: Sub-tag & Top Right Pill Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-extrabold text-[#0284c7] uppercase tracking-wider block font-poppins">
                        {item.pillarTag}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-[10px] font-mono font-extrabold tracking-wider uppercase">
                        {item.pillarTag}
                      </span>
                    </div>

                    <h3 className="font-poppins font-extrabold text-xl sm:text-2xl text-[#01182F] tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-[#0284c7] font-poppins">
                      {item.subtitle}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-0.5">
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
