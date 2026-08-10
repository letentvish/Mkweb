import React from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CapabilityPillars.css";

export default function CapabilityPillars() {
  const navigate = useNavigate();

  const servicePillars = [
    {
      step: "01",
      pillarTag: "PILLAR 01",
      icon: <Users style={{ width: 28, height: 28 }} />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw style={{ width: 28, height: 28 }} />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 style={{ width: 28, height: 28 }} />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap style={{ width: 28, height: 28 }} />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass style={{ width: 28, height: 28 }} />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="cc-pillars-section" id="capability-pillars">
      
      {/* Background Radial Pattern */}
      <div className="cc-why-pattern" />

      <div className="cc-pillars-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 text-left py-4 z-20">
            
            <div className="flex items-center gap-3">
              <p className="cc-why-tag">
                JOURNEYS
              </p>
            </div>

            {/* Main Title */}
            <h2 className="cc-why-title" style={{ fontSize: '3rem', lineHeight: 1.08 }}>
              Five ways we build lasting <span style={{ color: '#0284c7' }}>capability</span>
            </h2>

            <div className="cc-why-divider" style={{ marginLeft: 0 }} />

            <p className="cc-why-intro" style={{ marginLeft: 0, fontSize: '1.125rem' }}>
              We don't deliver one-off training. We design integrated capability systems tailored to your strategy, leaders, and operating rhythm.
            </p>

            {/* Bottom Strategic Action CTA */}
            <div className="pt-4">
              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
              >
                <span>Discuss Your Capability Roadmap</span>
                <ArrowRight style={{ width: 16, height: 16, marginLeft: '0.5rem' }} />
              </button>
            </div>

          </div>

          {/* Right Column: Version 1 (Grid Cards Layout) */}
          <div className="lg:col-span-7 text-left space-y-12">
            <div className="grid grid-cols-1 gap-8">
              {servicePillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="cc-pillar-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                      {pillar.icon}
                    </div>
                    <span className="font-mono font-extrabold text-xs text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {pillar.pillarTag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-poppins font-extrabold text-[#01182F] mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[#0284c7] text-sm font-semibold mb-3 font-poppins">
                    {pillar.subtitle}
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/60 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
