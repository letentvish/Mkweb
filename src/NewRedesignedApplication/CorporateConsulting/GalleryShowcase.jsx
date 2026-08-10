import React from "react";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./GalleryShowcase.css";

export default function GalleryShowcase() {
  const navigate = useNavigate();

  // Curated list of high-quality corporate capability workshop & boardroom images
  const marqueeImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="cc-gallery-section" id="gallery-showcase">
      <div className="cc-gallery-container">
        
        {/* Integrated Executive Call To Action Card */}
        <div className="cc-gallery-cta-box">
          
          <span style={{ fontSize: '12px', fontFamily: 'Poppins, monospace', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            READY TO TRANSFORM YOUR CAPABILITY?
          </span>

          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#ffffff', marginTop: '0.75rem', marginBottom: '1.25rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Let’s Build Capability That <span style={{ color: '#38bdf8', fontStyle: 'italic', fontFamily: 'serif' }}>Stays.</span>
          </h2>

          <p style={{ fontSize: '1.125rem', color: '#cbd5e1', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2.5rem', lineHeight: 1.625, fontWeight: 400 }}>
            Every engagement starts with a conversation about your reality — not a deck about ours. Talk to an expert today.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={() => navigate("/contact")}
              className="cc-hero-btn-primary"
              style={{ backgroundColor: '#0284c7', padding: '0.875rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Explore Engagement Models</span>
              <ArrowRight style={{ width: 18, height: 18, marginLeft: '0.5rem' }} />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="cc-hero-btn-secondary"
              style={{ backgroundColor: 'transparent', color: '#ffffff', borderColor: '#ffffff' }}
            >
              Talk to an Expert
            </button>
          </div>

        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.75rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
            Capability in <span style={{ color: '#38bdf8' }}>Action</span>
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' }}>
            Real leadership workshops, executive strategy labs, and high-impact interventions around the globe.
          </p>
        </div>

        {/* Continuous Horizontal Infinite Marquee Carousel */}
        <div className="cc-gallery-marquee-wrap">
          <Marquee 
            speed={40} 
            gradient={true} 
            gradientColor="#01182F" 
            gradientWidth={100}
            pauseOnHover={true}
          >
            {marqueeImages.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="cc-gallery-card"
              >
                <img 
                  src={imgUrl} 
                  alt={`Capability in action ${idx + 1}`} 
                  className="cc-gallery-img"
                />
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
