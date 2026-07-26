import { wrap } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// ── Intersection Observer hook ──────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.66Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.66Z"/>
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconTrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const IconLightbulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

// ── Animated highlight text ──────────────────────────────────────────────────
const HighlightedText = ({ children }) => (
  <span style={{
    color: "#FF8811",
    fontWeight: 600,
  }}>
    {children}
  </span>
);

// ── Feature card ─────────────────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, description, delay = 0, accent }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

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

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        padding: "20px 22px",
        borderRadius: "14px",
        background: isDarkMode ? "#1f2937" : "#EFFBF9",
        border: `1.5px solid ${hovered ? "#6ee7b7" : (isDarkMode ? "#374151" : "#e6f7f4")}`,
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: inView
          ? hovered ? "translateY(-3px)" : "translateY(0)"
          : "translateY(20px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        boxShadow: hovered
          ? (isDarkMode ? "0 12px 40px rgba(16, 185, 129, 0.2)" : "0 12px 40px rgba(16, 185, 129, 0.12)")
          : (isDarkMode ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.04)"),
        cursor: "default",
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: "12px",
        background: "#FCDE53",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: "#000000",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
      }}>
        <Icon />
      </div>
      <div>
        <p style={{ margin: "0 0 5px", fontWeight: 700, fontSize: "15px", color: isDarkMode ? "#e5e7eb" : "#1a2e2b", letterSpacing: "-0.01em" }}>{title}</p>
        <p style={{ margin: 0, fontSize: "13.5px", color: isDarkMode ? "#9ca3af" : "#5d7a74", lineHeight: 1.65 }}>{description}</p>
      </div>
    </div>
  );
};

// ── Section: Why Assessment Is Important ────────────────────────────────────
const WhyAssessmentSection = () => {
  const [titleRef, titleInView] = useInView();
  const [bodyRef, bodyInView] = useInView();
  const [boxRef, boxInView] = useInView();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

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

  return (
    <section style={{
      padding: "100px 24px 80px",
      textAlign: "center",
      background: isDarkMode
        ? "linear-gradient(180deg, #0f1419 0%, #1a1f2e 100%)"
        : "linear-gradient(180deg, #ffffff 0%, #f7fffe 100%)",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Title */}
        <div ref={titleRef}>
          <h1 style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 800,
            color: isDarkMode ? "#e5e7eb" : "#0d1f1c",
            margin: "0 0 18px",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            whiteSpace: "nowrap",
          }}>
            Why Assessment Is Important?
          </h1>
          <p style={{
            fontSize: "16px",
            color: isDarkMode ? "#9ca3af" : "#626262",
            lineHeight: 1.7,
            margin: "0 0 28px",
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
          }}>
            Assessments are powerful tools designed to understand how individuals naturally behave and perform at work.
          </p>
        </div>

        {/* Inline highlight sentence */}
        <div ref={bodyRef} style={{
          fontSize: "clamp(15px, 2.2vw, 17px)",
          color: isDarkMode ? "#9ca3af" : "#626262",
          lineHeight: 1.75,
          marginBottom: "36px",
          opacity: bodyInView ? 1 : 0,
          transform: bodyInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
        }}>
          <span style={{ whiteSpace: "nowrap" }}>
            They focus on how people{" "}
            <HighlightedText >
              <span style={{display: "inline",
                whiteSpace:"normal"
              }}>
                communicate, collaborate, make decisions, lead, and respond to challenges
              </span>
            </HighlightedText>
          </span>
          {" "}— not just what they know, but how they work with others.
        </div>

        {/* Callout box */}
        <div ref={boxRef} style={{
          background: isDarkMode ? "#1f2937" : "#F6F6F6",
          border: "none",
          borderRadius: "14px",
          padding: "22px 28px",
          fontSize: "14.5px",
          color: isDarkMode ? "#d1d5db" : "#271526",
          lineHeight: 1.75,
          textAlign: "center",
          opacity: boxInView ? 1 : 0,
          transform: boxInView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
          transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
          boxShadow: isDarkMode ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 4px 20px rgba(14, 165, 233, 0.08)",
        }}>
          By combining behavioral insights, self-reflection, and multi-source feedback, assessments help organizations move beyond assumptions, strengthen leadership, and build self-aware, high-performing teams.
        </div>
      </div>
    </section>
  );
};

// ── Section: Why Behavioral Insights Matter ─────────────────────────────────
const WhyInsightsSection = () => {
  const [leftRef, leftInView] = useInView();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

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

  const cards = [
    {
      icon: IconBrain,
      title: "Build Self-Awareness",
      description: "Help individuals understand their natural working style and behavioural strengths.",
      delay: 0,
      accent: "#fef9c3",
    },
    {
      icon: IconUsers,
      title: "Improve Team Collaboration",
      description: "Reduce friction by making different communication and work styles visible.",
      delay: 80,
      accent: "#ede9fe",
    },
    {
      icon: IconTarget,
      title: "Enable Better People Decisions",
      description: "Support hiring, role alignment and development with objective behavioural data.",
      delay: 160,
      accent: "#fecaca",
    },
    {
      icon: IconLightbulb,
      title: "Personalise Learning & Growth",
      description: "Connect behavioural insights with targeted learning pathways inside your LMS.",
      delay: 240,
      accent: "#ddd6fe",
    },
  ];

  return (
    <>
      <style>{`
        .scrollable-cards-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 8px;
        }

        /* Custom scrollbar styling */
        .scrollable-cards-container::-webkit-scrollbar {
          width: 6px;
        }

        .scrollable-cards-container::-webkit-scrollbar-track {
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 10px;
        }

        .scrollable-cards-container::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
          border-radius: 10px;
        }

        .scrollable-cards-container::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
        }

        /* For Firefox */
        .scrollable-cards-container {
          scrollbar-width: thin;
          scrollbar-color: ${isDarkMode ? 'rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)'};
        }

        @media (max-width: 768px) {
          .scrollable-cards-container {
            max-height: none;
            overflow-y: visible;
          }
        }
      `}</style>
      <section style={{
        padding: "60px 24px 60px",
        background: isDarkMode
          ? "linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%)"
          : "linear-gradient(180deg, #f7fffe 0%, #ffffff 100%)",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px 80px",
          alignItems: "start",
        }}>
          {/* Left column */}
          <div ref={leftRef} style={{
            opacity: leftInView ? 1 : 0,
            transform: leftInView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: isDarkMode ? "#e5e7eb" : "#0d1f1c",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 18px",
              fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
            }}>
              Why Behavioral<br />Insights Matter?
            </h2>
            <p style={{
              fontSize: "15.5px",
              color: isDarkMode ? "#9ca3af" : "#45556C",
              lineHeight: 1.7,
              margin: 0,
            }}>
              Understanding behaviour is the foundation of high-performing teams and effective leadership.
            </p>
          </div>

          {/* Right column — scrollable cards */}
          <div className="scrollable-cards-container">
            {cards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ── Styles injected once ─────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; font-family: 'DM Sans', 'Segoe UI', system-ui, sans-serif; }

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    @media (max-width: 640px) {
      section { padding-left: 16px !important; padding-right: 16px !important; }
    }
  `}</style>
);

// ── Root component ───────────────────────────────────────────────────────────
export default function AssessmentPage() {
  return (
    <>
      <GlobalStyles />
      <main style={{ minHeight: "100vh", background: "#ffffff" }}>
        <WhyAssessmentSection />
        <WhyInsightsSection />
      </main>
    </>
  );
}