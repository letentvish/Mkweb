import React from "react";
import { Users, Zap, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CorporateConsulting.css";

const CorporateHero = () => {
  const navigate = useNavigate();

  const heroBgImage = "https://lh3.googleusercontent.com/aida/AP1WRLuM_VjiKISRwK7zGvTPtJcgrtR4TRez_HCXDdZxXAbOQyvFp6PTMvdzdQlXz4jVj7LY2hVPV_AxEtlUSFgUIDS1db1NIPuD3eVyTIc4m1J89mgAIq7Q5OvkHunlSBOTjtCeqCm0a1zX67C0R0Ttvr7A0ijqmPvh7PJiQZo4de6bJk_ISJvWi38gP0OS25uQTxVM4ZL4Z9CjgYMlCFxHC9x_dl1ga5CRXcLrX51OTV3kzv3IpguB5Ebtmdw";

  return (
    <section className="cc-hero-section">
      
      {/* Background Image with Linear Gradient Overlay */}
      <div 
        className="cc-hero-bg-img"
        style={{ backgroundImage: `url('${heroBgImage}')` }}
      />
      <div className="cc-hero-bg-overlay" />

      {/* Main Container */}
      <div className="cc-hero-container">
        
        {/* Top Content Area: 2-Column Layout */}
        <div className="cc-hero-top-grid">
          
          {/* Left Column: Line Accent & Headline */}
          <div style={{ maxWidth: '36rem', textAlign: 'left' }}>
            <div className="cc-hero-[#0284c7]-line" />
            <h1 className="cc-hero-headline">
              Most consulting visits. <br />
              <span className="cc-hero-headline-accent">We <i className="cc-hero-headline-italic">Integrate.</i></span>
            </h1>
          </div>

          {/* Right Column: Sub-headline Intro & CTAs */}
          <div style={{ maxWidth: '32rem', textAlign: 'left', marginLeft: 'auto' }}>
            <p className="cc-hero-intro-text">
              Bespoke leadership, culture, and change consulting — diagnosed at the root, measured at every step, coached until it holds. When we leave, the capability stays. That's the whole point.
            </p>

            <div className="cc-hero-btn-group">
              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-primary"
              >
                Explore
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-secondary"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

        </div>

        {/* Features Grid: 3 Staggered Aspect Ratio Cards */}
        <div className="cc-hero-cards-grid">
          
          {/* Feature Card 1 - Component 3 */}
          <div className="cc-hero-card">
            <img 
              alt="Leadership that multiplies" 
              className="cc-hero-card-img" 
              src="/Component 3 (2).png"
            />
            {/* Card Overlay Gradient */}
            <div className="cc-hero-card-gradient" />
            
            <div className="cc-hero-card-content">
              <div className="cc-hero-card-icon-wrap">
                <Users style={{ width: 24, height: 24, color: '#ffffff' }} />
              </div>
              <h3 className="cc-hero-card-title">Leadership that multiplies</h3>
              <p className="cc-hero-card-desc">We don't build a leader. We build leaders who build leaders — so strength compounds at every layer.</p>
            </div>
          </div>

          {/* Feature Card 2 - Component 4 (Staggered Downward on lg screens) */}
          <div className="cc-hero-card cc-hero-card-staggered">
            <img 
              alt="Transformation that lasts" 
              className="cc-hero-card-img" 
              src="/Component 4 (2).png"
            />
            {/* Card Overlay Gradient */}
            <div className="cc-hero-card-gradient" />
            
            <div className="cc-hero-card-content">
              <div className="cc-hero-card-icon-wrap">
                <Zap style={{ width: 24, height: 24, color: '#ffffff' }} />
              </div>
              <h3 className="cc-hero-card-title">Transformation that lasts</h3>
              <p className="cc-hero-card-desc">Change that people choose survives. Change that people survive doesn't. We design the first kind.</p>
            </div>
          </div>

          {/* Feature Card 3 - Component 5 */}
          <div className="cc-hero-card">
            <img 
              alt="Outcomes you can measure" 
              className="cc-hero-card-img" 
              src="/Component 5 (1).png"
            />
            {/* Card Overlay Gradient */}
            <div className="cc-hero-card-gradient" />
            
            <div className="cc-hero-card-content">
              <div className="cc-hero-card-icon-wrap">
                <BarChart3 style={{ width: 24, height: 24, color: '#ffffff' }} />
              </div>
              <h3 className="cc-hero-card-title">Outcomes you can measure</h3>
              <p className="cc-hero-card-desc">Attendance is not a result. We're measured by what moves: leadership, teams, and the numbers your board reads.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CorporateHero;