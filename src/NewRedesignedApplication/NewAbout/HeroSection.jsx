import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

export default function LeadershipHero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const genericHeroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="about-hero-section" id="about-hero">
      
      {/* Background Subtle Radial Pattern */}
      <div className="about-hero-pattern" />

      <div className="about-hero-container">
        
        {/* Main Hero Card Container with Generic Corporate Image & Text Overlay */}
        <div
          className="about-hero-card"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {/* Background High-Impact Generic Corporate Executive Office Photo */}
          <img
            src={genericHeroImage}
            alt="MultipliersKraft Corporate Architecture"
            className="about-hero-img"
          />

          {/* Dark Executive Overlay for Maximum Contrast & Readability */}
          <div className="about-hero-overlay" />

          {/* Content Overlay Box */}
          <div className="about-hero-content">
            
            {/* About Us Pill Badge */}
            <div className="about-hero-pill">
              <span className="about-hero-pill-dot" />
              <span>ABOUT MULTIPLIERSKRAFT</span>
            </div>

            {/* Headline */}
            <h1 className="about-hero-title">
              Architecting Human Potential <br />
              & Enterprise Capability
            </h1>

          </div>

        </div>

      </div>

    </section>
  );
}