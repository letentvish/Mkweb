import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CorporateConsulting.css";

export default function TransformSection() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Automatic sequential light pulse timer moving across 5 nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  const rhythmSteps = [
    {
      id: "01",
      position: "below",
      title: "Absolute Clarity",
      description: 'Discovery and alignment. We see the organisation as it truly is — and agree on what "better" means.',
      lightOffset: "left-[0%]"
    },
    {
      id: "02",
      position: "above",
      title: "Root diagnosis",
      description: "Deep diagnostics and assessment. We locate the cause, never mistaking it for the symptom.",
      lightOffset: "left-[23%]"
    },
    {
      id: "03",
      position: "below",
      title: "Design",
      description: "Bespoke journey architecture. We craft the intervention to fit you exactly — nothing borrowed.",
      lightOffset: "left-[48%]"
    },
    {
      id: "04",
      position: "above",
      title: "Action",
      description: "Delivery and experience. Labs, simulations, and coaching bring the design to life in the work.",
      lightOffset: "left-[72%]"
    },
    {
      id: "05",
      position: "below",
      title: "Sustained impact",
      description: "Embedding and measurement. We stay until the change holds and the capability compounds.",
      lightOffset: "left-[90%]"
    }
  ];

  return (
    <section className="cc-transform-section" id="how-transforms">
      <div className="cc-transform-container">
        
        {/* Header Section */}
        <div className="cc-transform-header">
          <div style={{ textTransform: 'uppercase' }}>
            <span className="cc-transform-tag">
              FRAMEWORK
            </span>
            <h2 className="cc-transform-title">
              How Mkraft Transforms
            </h2>
          </div>

          <div style={{ textAlign: 'left' }}>
            <p className="cc-transform-intro">
              A clean methodology cuts through confusion. We follow a five-stage rhythm that turns organizational diagnosis into measurable, scaled performance.
            </p>

            <div className="cc-transform-cta-group">
              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-primary"
                style={{ padding: '0.625rem 1.75rem', fontSize: '0.875rem' }}
              >
                Diagnose
              </button>

              <button
                onClick={() => navigate("/contact")}
                style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <span>Talk to an Expert</span>
                <ChevronRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
          </div>
        </div>

        {/* 5-Step Staggered Horizontal Timeline Grid */}
        <div className="cc-transform-timeline-wrapper">
          
          {/* Central Horizontal Timeline Line with Dynamic Traveling Light Movement (Desktop Only) */}
          <div className="cc-transform-track">
            <div className="cc-transform-track-inner">
              <div 
                className={`cc-transform-light-beam ${rhythmSteps[currentActive].lightOffset}`} 
              />
            </div>
          </div>

          {/* Desktop Horizontal 5-Step Timeline Grid (lg:grid-cols-5) */}
          <div className="cc-transform-desktop-grid">
            {rhythmSteps.map((step, idx) => {
              const isSelected = currentActive === idx;

              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cc-transform-step-node"
                >
                  
                  {/* ABOVE Content Block */}
                  {step.position === 'above' && (
                    <div 
                      className="cc-transform-above-block"
                      style={{
                        transform: isSelected ? 'translateY(-0.5rem)' : 'translateY(0)',
                        opacity: isSelected ? 1 : 0.8
                      }}
                    >
                      <h3 
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.25rem',
                          color: isSelected ? '#0284c7' : '#ffffff',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.625, color: isSelected ? '#f1f5f9' : '#cbd5e1' }}>
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* DOT DIRECTLY CENTERED ON THE LINE WITH DYNAMIC LIGHT TRIGGER */}
                  <div className="cc-transform-dot-wrap">
                    <div 
                      className={`cc-transform-dot ${isSelected ? 'cc-transform-dot-active' : ''}`}
                    />
                  </div>

                  {/* BELOW Content Block */}
                  {step.position === 'below' && (
                    <div 
                      className="cc-transform-below-block"
                      style={{
                        transform: isSelected ? 'translateY(0.5rem)' : 'translateY(0)',
                        opacity: isSelected ? 1 : 0.8
                      }}
                    >
                      <h3 
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 800,
                          fontSize: '1.25rem',
                          color: isSelected ? '#0284c7' : '#ffffff',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', lineHeight: 1.625, color: isSelected ? '#f1f5f9' : '#cbd5e1' }}>
                        {step.description}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Responsive View (Stacked / 2-Column Cards) */}
          <div className="cc-transform-mobile-grid">
            {rhythmSteps.map((step, idx) => {
              const isSelected = currentActive === idx;

              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cc-transform-mobile-card ${isSelected ? 'cc-transform-mobile-card-active' : ''}`}
                >
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>STEP {step.id}</span>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: isSelected ? '#0284c7' : '#ffffff' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.625, color: '#cbd5e1', fontWeight: 400 }}>{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
