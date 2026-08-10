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
      icon: <Users style={{ width: 32, height: 32 }} />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design."
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw style={{ width: 32, height: 32 }} />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks."
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 style={{ width: 32, height: 32 }} />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output."
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap style={{ width: 32, height: 32 }} />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies."
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass style={{ width: 32, height: 32 }} />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution."
    }
  ];

  return (
    <section className="cc-pillars-section" id="capability-pillars">
      
      {/* Background Radial Pattern */}
      <div className="cc-why-pattern" />

      <div className="cc-pillars-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header matching Screenshot */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 text-left py-2 z-20">
            
            <div className="flex items-center gap-3">
              <p className="cc-why-tag">
                JOURNEYS
              </p>
            </div>

            {/* Main Title matching Screenshot */}
            <h2 className="cc-why-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.08 }}>
              Five ways <br />we build <br />lasting <span style={{ color: '#0284c7' }}>capability</span>
            </h2>

            <p className="cc-why-intro" style={{ marginLeft: 0, fontSize: '1rem', color: '#475569', maxWidth: '26rem', lineHeight: 1.6 }}>
              Bespoke solutions, engineered end to end. Choose one, or weave several into a single journey — every pillar runs on the same diagnostic engine.
            </p>

            {/* Action Buttons matching Screenshot: Diagnose & Explore */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-primary"
                style={{ padding: '0.875rem 2.25rem', fontSize: '0.9375rem', borderRadius: '9999px' }}
              >
                <span>Diagnose</span>
                <ArrowRight style={{ width: 16, height: 16, marginLeft: '0.5rem' }} />
              </button>

              <button
                onClick={() => navigate("/contact")}
                style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.9375rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <span>Explore</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>

          </div>

          {/* Right Column: Timeline Cards matching Screenshot */}
          <div className="lg:col-span-7 relative text-left">
            
            {/* Middle Vertical Timeline Line (Desktop Only) */}
            <div className="cc-pillar-timeline-line" />

            <div className="space-y-8">
              {servicePillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="cc-pillar-card-screenshot"
                >
                  {/* Timeline Dot Aligned with Card */}
                  <div className="cc-pillar-timeline-node">
                    <div className="cc-pillar-timeline-dot-inner" />
                  </div>

                  {/* Left Icon Square */}
                  <div className="cc-pillar-icon-box">
                    {pillar.icon}
                  </div>

                  {/* Right Content */}
                  <div className="cc-pillar-content">
                    {/* Pillar Tag Pill */}
                    <div className="cc-pillar-badge">
                      {pillar.pillarTag}
                    </div>

                    <h3 className="cc-pillar-title">
                      {pillar.title}
                    </h3>

                    <p className="cc-pillar-subtitle">
                      {pillar.subtitle}
                    </p>

                    <p className="cc-pillar-description">
                      {pillar.description}
                    </p>
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
