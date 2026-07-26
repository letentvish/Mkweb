import React, { useState, useEffect } from "react";
import "./TransformLearningJourney.css";
import milepotential from "../../../Assets/milepotential.png";
import milepotential2 from "../../../Assets/milepotential2.png";

const TransformLearningJourney = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync with global theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['theme'] });
    return () => observer.disconnect();
  }, []);

  const themeClass = isDarkMode ? "dark" : "light";

  return (
    <section className={`tlj-container ${themeClass}`} style={{ background: isDarkMode ? '#000' : '#f3f3f3' }}>
      <div className="tlj-main-box" style={{ 
        background: isDarkMode ? '#1D242D' : '#fff',
        border: isDarkMode ? 'none' : '1px solid rgba(0,0,0,0.08)'
      }}>
        
        {/* Blurs */}
        <div className="tlj-blur tlj-blur-top" style={{ background: isDarkMode ? '#FF6B35' : '#E9B00F' }}></div>
        <div className="tlj-blur tlj-blur-bottom" style={{ background: isDarkMode ? '#9333ea' : '#E9B00F' }}></div>

        <div className="tlj-content-wrapper">
          
          {/* LEFT IMAGE (Visible > 550px) */}
          <div className="tlj-side-image tlj-left-img">
            <div className="tlj-polygon-bg tlj-polygon-bg-left"></div>
            <img src={milepotential} alt="Student" className="tlj-img-cut-left" style={{ width: '100%', display: 'block' }} />
          </div>

          {/* CENTER CONTENT */}
          <div className="tlj-center-text">
            <h2 className="tlj-title" style={{ color: isDarkMode ? '#fff' : '#111' }}>
              Unlock Your Learning
            </h2>
            <h3 className="tlj-subtitle" style={{ color: isDarkMode ? '#FF6B35' : '#E9B00F' }}>
              Potential Today
            </h3>
            <p className="tlj-description" style={{ color: isDarkMode ? '#ccc' : '#555' }}>
              Join thousands of learners around the world who are advancing their careers with our expertly crafted courses.
            </p>
          </div>

          {/* RIGHT IMAGE (Visible > 550px) */}
          <div className="tlj-side-image tlj-right-img">
            <div className="tlj-polygon-bg tlj-polygon-bg-right"></div>
            <img src={milepotential2} alt="Student" className="tlj-img-cut-right" style={{ width: '100%', display: 'block' }} />
          </div>

        </div>

        {/* MOBILE GRID (Visible < 550px) */}
        <div className="tlj-mobile-grid">
           <img src={milepotential} alt="Student" className="tlj-img-cut-left" style={{ width: '100%', background: '#a8d5e2', borderRadius: '12px' }} />
           <img src={milepotential2} alt="Student" className="tlj-img-cut-right" style={{ width: '100%', background: '#a8d5e2', borderRadius: '12px' }} />
        </div>

      </div>
    </section>
  );
};

export default TransformLearningJourney;