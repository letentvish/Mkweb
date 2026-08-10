import React from "react";
import { Users, Search, Cpu, Target } from "lucide-react";
import "./WhyMKraft.css";

export default function WhyMKraft() {

  const cardsLeft = [
    {
      step: "01",
      badge: "BESPOKE",
      title: "Built around your business, not our binder.",
      description: "No predefined program. No borrowed playbook. Every engagement starts with your organisation as it actually is — and is designed for nothing else.",
      icon: <Users style={{ width: 24, height: 24, color: '#0284c7' }} />
    },
    {
      step: "03",
      badge: "TECHNOLOGY ENABLED",
      title: "Capability that doesn't fade when the workshop ends.",
      description: "Our digital platforms keep the learning alive, track progress in real time, and hold the change in place long after the last session.",
      icon: <Cpu style={{ width: 24, height: 24, color: '#0284c7' }} />
    }
  ];

  const cardsRight = [
    {
      step: "02",
      badge: "RESEARCH BACKED",
      title: "Diagnosis before design. Always.",
      description: "Prescription without diagnosis is malpractice — in medicine and in consulting. We use validated assessments and hard data to find the cause before we touch the cure.",
      icon: <Search style={{ width: 24, height: 24, color: '#0284c7' }} />
    },
    {
      step: "04",
      badge: "OUTCOME FOCUSED",
      title: "We are measured by your performance, not our presence.",
      description: "Success isn't a feedback form. It's stronger leaders, tighter teams, and business outcomes you can point to a year later.",
      icon: <Target style={{ width: 24, height: 24, color: '#0284c7' }} />
    }
  ];

  return (
    <section className="cc-why-section" id="why-mkraft">
      
      {/* Background Radial Pattern */}
      <div className="cc-why-pattern" />

      <div className="cc-why-container">
        
        {/* Header Section */}
        <header className="cc-why-header">
          <p className="cc-why-tag">
            WHY MKRAFT
          </p>

          <div className="cc-why-divider" />

          <h2 className="cc-why-title">
            Why <span style={{ color: '#0284c7' }}>MKraft</span>
          </h2>

          <p className="cc-why-intro">
            Most consulting hands you a deck. <br style={{ display: 'inline' }} />
            We hand you a difference that outlives the engagement.
          </p>
        </header>

        {/* Central Hub & 4 Orbital Cards Grid */}
        <div className="cc-why-grid">
          
          {/* Left 2 Cards (01 & 03) */}
          <div className="cc-why-col-left cc-why-card-stack">
            {cardsLeft.map((card, idx) => (
              <div key={idx} className="cc-why-card">
                {/* Step Ribbon Badge (Left Side) */}
                <div className="cc-why-ribbon">
                  {card.step}
                </div>

                <div className="cc-why-card-inner">
                  {/* Top Icon Circle */}
                  <div className="cc-why-icon-circle">
                    {card.icon}
                  </div>

                  {/* Sub-tag Badge */}
                  <span className="cc-why-badge">
                    {card.badge}
                  </span>

                  <h3 className="cc-why-card-title">
                    {card.title}
                  </h3>

                  <p className="cc-why-card-desc">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Central White Circular Hub & Orbital Ring */}
          <div className="cc-why-col-center cc-why-hub-wrap">
            
            {/* Orbital Dashed Ring */}
            <div className="cc-why-orbit-ring" />

            {/* Top-Left Orbit Node Circle */}
            <div className="cc-why-orbit-node cc-why-node-tl">
              <Users style={{ width: 20, height: 20, color: '#ffffff' }} />
            </div>

            {/* Top-Right Orbit Node Circle */}
            <div className="cc-why-orbit-node cc-why-node-tr">
              <Search style={{ width: 20, height: 20, color: '#ffffff' }} />
            </div>

            {/* Bottom-Left Orbit Node Circle */}
            <div className="cc-why-orbit-node cc-why-node-bl">
              <Cpu style={{ width: 20, height: 20, color: '#ffffff' }} />
            </div>

            {/* Bottom-Right Orbit Node Circle */}
            <div className="cc-why-orbit-node cc-why-node-br">
              <Target style={{ width: 20, height: 20, color: '#ffffff' }} />
            </div>

            {/* Central White Card Hub */}
            <div className="cc-why-central-card">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.875rem', color: '#01182F', letterSpacing: '-0.025em' }}>
                Why <span style={{ color: '#0284c7' }}>MKraft</span>
              </h3>
              <div style={{ width: '2rem', height: '4px', backgroundColor: '#0284c7', borderRadius: '9999px', marginTop: '0.625rem', marginBottom: '0.625rem' }} />
              <p style={{ fontSize: '0.75rem', color: '#64748b', maxWidth: '180px', lineHeight: 1.4, fontWeight: 500 }}>
                Four core principles driving capability that outlives the engagement.
              </p>
            </div>

          </div>

          {/* Right 2 Cards (02 & 04) */}
          <div className="cc-why-col-right cc-why-card-stack">
            {cardsRight.map((card, idx) => (
              <div key={idx} className="cc-why-card">
                {/* Step Ribbon Badge (Left Side) */}
                <div className="cc-why-ribbon">
                  {card.step}
                </div>

                <div className="cc-why-card-inner">
                  {/* Top Icon Circle */}
                  <div className="cc-why-icon-circle">
                    {card.icon}
                  </div>

                  {/* Sub-tag Badge */}
                  <span className="cc-why-badge">
                    {card.badge}
                  </span>

                  <h3 className="cc-why-card-title">
                    {card.title}
                  </h3>

                  <p className="cc-why-card-desc">
                    {card.description}
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
