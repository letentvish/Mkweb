import { useState, useEffect } from "react";
import "./JourneySection.css";

const CompassIcon = ({ isDarkMode }) => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" fill="none"/>
    <circle cx="14" cy="14" r="2" fill={isDarkMode ? "#f0a860" : "#e07830"}/>
    <path d="M14 7v2M14 19v2M7 14h2M19 14h2" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 11l3 3-3 3" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

const InnovatorIcon = ({ isDarkMode }) => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="10" r="5" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" fill="none"/>
    <path d="M11 15.5c0 0-2 1-2 4h10c0-3-2-4-2-4" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M14 5V3M9.5 7l-1.5-1.5M18.5 7l1.5-1.5" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 10h6" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const AchieverIcon = ({ isDarkMode }) => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <path d="M14 4l2.2 6.5H23l-5.6 4 2.1 6.5L14 17l-5.5 4 2.1-6.5L5 10.5h6.8z" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    <circle cx="14" cy="13" r="2.5" fill={isDarkMode ? "#f0a860" : "#e07830"} opacity="0.2"/>
  </svg>
);

const ChampionIcon = ({ isDarkMode }) => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
    <path d="M9 6h10v6a5 5 0 01-10 0V6z" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" fill="none"/>
    <path d="M9 9H6a3 3 0 003 3M19 9h3a3 3 0 01-3 3" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M14 17v3M10 23h8" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11 20h6" stroke={isDarkMode ? "#f0a860" : "#e07830"} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const getStages = (isDarkMode) => [
  {
    id: 1,
    title: "Prarambh Explorer",
    desc: "Start your journey with self-awareness, time management, and digital communication skills.",
    icon: <CompassIcon isDarkMode={isDarkMode} />,
  },
  {
    id: 2,
    title: "Pragati Innovator",
    desc: "Dive into advanced communication, technical skills, AI literacy, and digital marketing.",
    icon: <InnovatorIcon isDarkMode={isDarkMode} />,
  },
  {
    id: 3,
    title: "Udyam Achiever",
    desc: "Apply your skills through real-world projects, hackathons, and internships.",
    icon: <AchieverIcon isDarkMode={isDarkMode} />,
  },
  {
    id: 4,
    title: "Udaan Champion",
    desc: "Join the MILE alumni network for lifelong learning and career preparation.",
    icon: <ChampionIcon isDarkMode={isDarkMode} />,
  },
];

// Downward Arrow for Mobile (Vertical Layout)
const DownwardArrow = ({ isDarkMode }) => (
  <div className="arrow-container">
    <svg
      className="downward-arrow"
      width="16"
      height="100%"
      viewBox="0 0 16 90"
      preserveAspectRatio="none"
      fill="none"
    >
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="72"
        stroke={isDarkMode ? "#f0a860" : "#e07830"}
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
      <polygon
        points="8,88 3,74 13,74"
        fill={isDarkMode ? "#f0a860" : "#e07830"}
      />
    </svg>
  </div>
);

// Curved Arrows for Desktop (Horizontal Layout)
const CurvedArrow = ({ arrowType, isDarkMode }) => {
  const getArrowPath = () => {
    if (arrowType === 2) {
      // 2nd arrow: curves down
      return "M 4 8 Q 40 32 76 8";
    } else {
      // 1st and 3rd arrows: curve up
      return "M 4 28 Q 40 4 76 28";
    }
  };

  const getPolygonPoints = () => {
    if (arrowType === 2) {
      return "76,8 68,6 70,13";
    } else {
      return "76,28 68,23 70,30";
    }
  };

  return (
    <div className="horizontal-arrow">
      <svg className="curved-arrow" height="36" viewBox="0 0 80 36" preserveAspectRatio="none">
        <path
          d={getArrowPath()}
          fill="none"
          stroke={isDarkMode ? "#f0a860" : "#e07830"}
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        <polygon points={getPolygonPoints()} fill={isDarkMode ? "#f0a860" : "#e07830"} />
      </svg>
    </div>
  );
};

export default function VerticalJourneyStages() {
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

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stages = getStages(isDarkMode);

  return (
    <div className={`responsive-journey-wrapper${isDarkMode ? " dark-mode" : ""}`}>
      <div className="responsive-journey-container">
        <h2 className="responsive-journey-heading">Our Gamified Learning Journey</h2>
        
        {/* DESKTOP VIEW - Horizontal Layout */}
        {isDesktop ? (
          <div className="responsive-journey-card">
            <div className="responsive-journey-stages">
              {stages.map((stage) => (
                <div key={stage.id}>
                  <div className="responsive-journey-top">
                    <div className="responsive-journey-icon-box">{stage.icon}</div>
                    {stage.id < stages.length && (
                      <div className="responsive-journey-arrow">
                        <CurvedArrow arrowType={stage.id} isDarkMode={isDarkMode} />
                      </div>
                    )}
                  </div>
                  <div className="responsive-journey-text">
                    <p className="responsive-journey-stage-title">{stage.title}</p>
                    <p className="responsive-journey-stage-desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* MOBILE VIEW - Vertical Layout */
          <div className="responsive-journey-vertical-content">
            {stages.map((stage, index) => (
              <div key={stage.id}>
                <div className="responsive-stage-box">
                  <div className="responsive-stage-icon-box">{stage.icon}</div>
                  <div className="responsive-stage-text">
                    <h3 className="responsive-stage-title">{stage.title}</h3>
                    <p className="responsive-stage-desc">{stage.desc}</p>
                  </div>
                </div>

                {index < stages.length - 1 && (
                  <DownwardArrow isDarkMode={isDarkMode} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}