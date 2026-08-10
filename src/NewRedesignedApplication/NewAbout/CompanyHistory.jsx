import { useState, useEffect, useRef } from 'react';
import './CompanyHistory.css';

export default function CompanyHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const expertisePillars = [
    "Academia",
    "HR & Talent",
    "Learning & Development",
    "Leadership Coaching",
    "Technology & AI"
  ];

  return (
    <div ref={ref} className="history-section" id="company-identity">
      
      {/* Background Radial Glow */}
      <div className="history-pattern" />

      <div className="history-container">
        
        {/* Top Eyebrow Badge */}
        <div
          className="history-badge-wrap"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <span className="history-badge">
            OUR PURPOSE & IDENTITY
          </span>
        </div>

        {/* Main Section Headline */}
        <h2
          className="history-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'
          }}
        >
          Purpose, Passion & <span className="history-title-accent">Performance</span>
        </h2>

        {/* Accent Divider */}
        <div 
          className="history-divider"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
          }}
        />

        {/* Main Center-Aligned Paragraph Content */}
        <div
          className="history-card"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s'
          }}
        >
          {/* Subtle Top Inner Line */}
          <div className="history-card-top-line" />

          <p className="history-text-primary">
            This is how we define our identity — serving as a trusted partner in organizational and individual growth.
          </p>

          <p className="history-text-secondary">
            Our commitment is to deliver unique, diverse expertise that drives immediate success today while building sustainable capabilities for tomorrow.
          </p>

          {/* Core Expertise Tags */}
          <div className="history-tags-group">
            {expertisePillars.map((pillar, idx) => (
              <span 
                key={idx}
                className="history-tag-pill"
              >
                {pillar}
              </span>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}