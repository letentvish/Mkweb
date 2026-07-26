import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const integrations = [
  {
    name: "Reliance Industries",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Reliance Industries</span>
    ),
  },
  {
    name: "Endurance",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Endurance</span>
    ),
  },
  {
    name: "Dr. Reddy's",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Dr. Reddy's</span>
    ),
  },
  {
    name: "Bosch",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Bosch</span>
    ),
  },
  {
    name: "Hindustan Petroleum",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Hindustan Petroleum</span>
    ),
  },
  {
    name: "Merck",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Merck</span>
    ),
  },
  {
    name: "Narayana Healthcare",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Narayana Healthcare</span>
    ),
  },
  {
    name: "Panasonic",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Panasonic</span>
    ),
  },
  {
    name: "Cotiviti",
    logo: (isDarkMode) => (
      <span style={{ fontFamily: "'sans-serif', sans-serif", fontWeight: 600, fontSize: "18px", color: isDarkMode ? "#DDDDDD" : "#1a1a1a" }}>Cotiviti</span>
    ),
  },
];

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

const featureCards = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: 28, height: 28 }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#000000" strokeLinejoin="round"/>
      </svg>
    ),
    title: "One-Click Integration",
    description: "Connect your favorite tools in seconds with our pre-built integrations.",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Secure & Compliant",
    description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance.",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Custom APIs",
    description: "Build custom integrations with our comprehensive REST API documentation.",
  },
];

function FeatureCards({ isDarkMode }) {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className="feature-cards-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        marginTop: "56px",
      }}
    >
      {featureCards.map((card, index) => (
        <div
          key={card.title}
          style={{
            background: isDarkMode
              ? "radial-gradient(circle at 50% 50%, #1A2550 0%, #0C1437 100%)"
              : "#042F43",
            borderRadius: "16px",
            padding: "40px 32px 36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.55s ease ${index * 100 + 100}ms, transform 0.55s ease ${index * 100 + 100}ms`,
            cursor: "default",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = isDarkMode
              ? "radial-gradient(circle at 50% 50%, #253265 0%, #0F1845 100%)"
              : "#065770";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.transition = "background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = isDarkMode
              ? "radial-gradient(circle at 50% 50%, #1A2550 0%, #0C1437 100%)"
              : "#042F43";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "14px",
              background: "#FCDE53",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 16px rgba(252,222,83,0.35)",
            }}
          >
            <card.icon />
          </div>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "#e8f0f8",
              margin: 0,
              fontFamily: "'sans-serif', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#7a93ab",
              lineHeight: 1.65,
              margin: 0,
              fontFamily: "'sans-serif', sans-serif",
              fontWeight: 400,
            }}
          >
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function IntegrationCard({ integration, index, isVisible, isDarkMode }) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
      }}
    >
      <div
        className="integration-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          height: "80px",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.25s ease",
          background: "transparent",
          position: "relative",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = isDarkMode
            ? "0 8px 32px rgba(43,141,248,0.15)"
            : "0 8px 32px rgba(0,0,0,0.10)";
          e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
          e.currentTarget.style.background = isDarkMode ? "#2E3551" : "#fff";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.background = "transparent";
        }}
      >
        {integration.logo(isDarkMode)}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [headerRef, headerVisible] = useIntersectionObserver();
  const isDarkMode = useTheme();

  return (
    <section
      style={{
        width: "100%",
        background: isDarkMode
          ? "linear-gradient(180deg, #060F32 0%, #2D3E6E 173.48%)"
          : "#fafafa",
        padding: "80px 24px 100px",
        fontFamily: "'sans-serif', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 800,
              color: isDarkMode ? "#FFFFFF" : "#0f172a",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: isDarkMode ? "#DDDDDD" : "#64748b",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Leading organizations trust Multiplierskraft to transform their learning and development initiatives.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={sectionRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
            rowGap: "10px",
          }}
          className="integrations-grid"
        >
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={integration.name}
              integration={integration}
              index={index}
              isVisible={isVisible}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Feature Cards */}
        <FeatureCards isDarkMode={isDarkMode} />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .integrations-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .integrations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        @media (max-width: 540px) {
          .integrations-grid {
            grid-template-columns: 1fr !important;
            gap: 0px !important; /* Reduces the gap between the grid rows */
          }

          .integration-card {
            height: 40px !important; /* Decreases height from 80px to 10px */
          }

          /* This targets the spans inside your integration.logo functions */
          .integration-card span {
            font-size: 14px !important;
            font-weight: 550 !important;
          }
        }
        
      `}</style>
    </section>
  );
}