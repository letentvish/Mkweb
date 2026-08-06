import React from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CapabilityPillars() {
  const navigate = useNavigate();

  const servicePillars = [
    {
      step: "01",
      pillarTag: "PILLAR 01",
      icon: <Users className="w-7 h-7 text-[#0284c7]" />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design.",
      // Real corporate boardroom & executive leadership meeting image
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw className="w-7 h-7 text-[#0284c7]" />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks.",
      // Real team workshop & culture collaboration image
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 className="w-7 h-7 text-[#0284c7]" />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output.",
      // Real talent performance architecture & analytics discussion image
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap className="w-7 h-7 text-[#0284c7]" />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies.",
      // Real tech workspace & digital workforce learning image
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass className="w-7 h-7 text-[#0284c7]" />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution.",
      // Real strategic enterprise advisory & executive consulting image
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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

          {/* Middle Column: Vertical Scroll Line & 5 Node Indicator Dots */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-around relative py-12 self-stretch min-h-screen">
            {/* Continuous Vertical Blue Indicator Line */}
            <div className="w-[2px] bg-sky-200/90 absolute top-12 bottom-12 left-1/2 -translate-x-1/2 z-0" />

            {/* 5 Node Dots */}
            {servicePillars.map((_, idx) => (
              <div 
                key={idx}
                className="w-5 h-5 rounded-full bg-white border-2 border-[#0284c7] flex items-center justify-center shadow-md relative z-10 my-auto group hover:scale-125 transition-all duration-300 cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-[#0284c7] group-hover:scale-125 transition-transform" />
              </div>
            ))}
          </div>

          {/* Right Column: Full-Height Frameless Items (No Stroke, No Fill) */}
          <div className="lg:col-span-6 space-y-12">
            {servicePillars.map((item, idx) => (
              <div
                key={idx}
                className="min-h-screen flex flex-col justify-center py-12 lg:py-16 text-left group border-0 bg-transparent shadow-none"
              >
                
                {/* Real High-Resolution Subject Photography (No AI) */}
                <div className="w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 mb-6 group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                </div>

                {/* Top Badge & Pillar Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-[#0284c7] uppercase tracking-wider bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                    {item.pillarTag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                    {item.icon}
                  </div>
                </div>

                {/* Title & Copy */}
                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#01182F] tracking-tight leading-snug mb-2 group-hover:text-[#0284c7] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#0284c7] font-bold text-sm sm:text-base mb-3">
                  {item.subtitle}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
