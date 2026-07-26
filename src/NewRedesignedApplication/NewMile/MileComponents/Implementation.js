import React, { useState, useEffect } from 'react';
import { HiGlobeAlt } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import "./Implementation.css";

// Straight Arrow for Mobile
const VerticalArrow = ({ isDarkMode }) => (
  <div className="imp-vertical-arrow-container">
    <svg width="16" height="60" viewBox="0 0 16 60" fill="none">
      <line x1="8" y1="0" x2="8" y2="45" stroke={isDarkMode ? "#FF6B35" : "#E9B00F"} strokeWidth="2" strokeDasharray="6 4" />
      <polygon points="8,58 3,46 13,46" fill={isDarkMode ? "#FF6B35" : "#E9B00F"} />
    </svg>
  </div>
);

// Alternating Curved Arrow for Desktop
const HorizontalCurvedArrow = ({ index, isDarkMode }) => {
  const isUp = index % 2 === 0; // Alternates curves
  const path = isUp ? "M 5 25 Q 45 0, 85 25" : "M 5 10 Q 45 35, 85 10";
  const arrowHead = isUp ? "85,25 77,20 80,30" : "85,10 77,5 80,15";

  return (
    <div className="imp-horizontal-arrow">
      <svg width="100%" height="40" viewBox="0 0 90 40" preserveAspectRatio="none">
        <path d={path} fill="none" stroke={isDarkMode ? "#FF6B35" : "#E9B00F"} strokeWidth="2" strokeDasharray="5 4" />
        <polygon points={arrowHead} fill={isDarkMode ? "#FF6B35" : "#E9B00F"} />
      </svg>
    </div>
  );
};

const Implementation = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['theme'] });
    
    const handleResize = () => setIsDesktop(window.innerWidth >= 700);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const steps = [
    {
      icon: <HiGlobeAlt />,
      title: "Process",
      desc: "We start with an MoU and service agreement, followed by MILE deployment, a go-live plan, and pre-registration of students."
    },
    {
      icon: <BiNetworkChart />,
      title: "Structure",
      desc: "Customize the platform, set up end-to-end learning paths, and launch with a live orientation event, including a calendar of sessions and events."
    },
    {
      icon: <MdPeople />,
      title: "Governance & KPI",
      desc: "Conduct feedback reviews with students, quarterly meetings with placement teams and HoDs, and define clear success criteria using CRM tools."
    }
  ];

  return (
    <section className={`imp-section${isDarkMode ? ' dark-mode' : ''}`}>
      <div className="imp-container">
        {/* Header */}
        <div className="imp-header">
          <h2 className="imp-heading">
            How We Work: <span>Implementation Plan</span>
          </h2>
          <p className="imp-subheading">
            MILE offers a structured 4-6 week implementation process to ensure a smooth transition and successful adoption.
          </p>
        </div>

        {/* Dynamic Layout */}
        <div className={isDesktop ? "imp-desktop-grid" : "imp-mobile-stack"}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Desktop Card Structure */}
              {isDesktop ? (
                <div className="imp-step-wrapper">
                  <div className="imp-step-card">
                    <div className="imp-icon-box">{step.icon}</div>
                    <div className="imp-text-box">
                      <h3 className="imp-step-title">{step.title}</h3>
                      <p className="imp-step-desc">{step.desc}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <HorizontalCurvedArrow index={index} isDarkMode={isDarkMode} />
                  )}
                </div>
              ) : (
                /* Mobile Card Structure */
                <>
                  <div className="imp-mobile-card">
                    <div className="imp-icon-box">{step.icon}</div>
                    <div className="imp-text-box">
                      <h3 className="imp-step-title">{step.title}</h3>
                      <p className="imp-step-desc">{step.desc}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && <VerticalArrow isDarkMode={isDarkMode} />}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Implementation;