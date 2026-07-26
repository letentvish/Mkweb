import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../Assets/assesmentCarve/AssessmentHeroSection.jpg";
import carveImage from "../../Assets/assesmentCarve/carve-assessment_1.jpg";
import assessment180Image from "../../Assets/assesmentCarve/180-assessment.jpg";
import assessment360Image from "../../Assets/assesmentCarve/360-assessment.jpg";

/* ─────────────────────────────────────────
   HERO SECTION  (Screenshot 1)
───────────────────────────────────────── */
function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "480px",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Light overlay for better text readability */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }} />

      {/* Transparent/Blur text box */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "32px 48px 36px",
          maxWidth: "1100px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          marginTop: "100px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Pill badge */}
        <div style={{
          display: "inline-block",
          border: "1.5px solid #2D3E6E",
          borderRadius: "999px",
          padding: "4px 18px",
          fontSize: "12px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          letterSpacing: "0.05em",
          color: "#2D3E6E",
          marginBottom: "20px",
        }}>
          Assessment Solutions
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: "800",
          color: "#000000",
          lineHeight: 1.25,
          margin: 0,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          letterSpacing: "-0.01em",
        }}>
          Understand How People{" "}
          <span style={{ color: "#0065CC" }}>Think,<br />Behave, and Work</span>
        </h1>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ASSESSMENT SOLUTIONS SECTION (Screenshot 2)
───────────────────────────────────────── */
const tabs = ["CaRVE", "180 Assessment", "360 Assessment"];

const tabContent = {
  CaRVE: {
    title: "CaRVE Assessment",
    description:
      "The CaRVE Assessment is a psychometric tool that helps organizations understand how individuals naturally behave at work. It focuses on how people communicate, collaborate, make decisions, and respond to challenges—revealing how they work rather than what they know—so teams can build greater self-awareness and perform more effectively.",
    ctaLabel: "Learn More About Software",
    path: "/carve",
    image: carveImage,
  },
  "180 Assessment": {
    title: "180° Assessment",
    description:
    "A 180-degree assessment captures feedback from both the employee and their direct manager to create a focused view of performance and expectations. This method helps identify strengths, highlight improvement areas, and align individual goals with organizational objectives through clear, two-way evaluation.",
    ctaLabel: "Contact Us",
    path: "/contact",
    image: assessment180Image,
  },
  "360 Assessment": {
    title: "360° Assessment",
    description:
      "A 360-degree assessment gathers insights from managers, peers, direct reports, and the individual to deliver a complete picture of workplace behavior and leadership effectiveness. This approach promotes self-awareness, strengthens collaboration, and supports targeted development through well-rounded, multi-source feedback.",
    ctaLabel: "Contact Us",
    path: "/contact",
    image: assessment360Image,
  },
};

function AssessmentImage({ image, alt }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: "580px",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
      border: "1px solid #e5e7eb",
    }}>
      <img
        src={image}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function AssessmentSection() {
  const [activeTab, setActiveTab] = useState("CaRVE");
  const [visible, setVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const themeObserver = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setContentKey(k => k + 1);
  };

  const content = tabContent[activeTab];

  return (
    <section
      ref={sectionRef}
      style={{
        background: isDarkMode
          ? "linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)"
          : "linear-gradient(145deg, #f3f0ff 0%, #fdf6ff 40%, #fffbf0 100%)",
        padding: "72px 24px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <h2 style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: "700",
            color: isDarkMode ? "#e5e7eb" : "#111827",
            letterSpacing: "-0.01em",
            margin: 0,
          }}>
            Assessment Solutions
          </h2>
        </div>

        {/* Tab switcher */}
        <div style={{
          background: isDarkMode ? "#0f1419" : "#1a1f3a",
          borderRadius: "50px",
          padding: "6px",
          display: "flex",
          maxWidth: "800px",
          margin: "0 auto 56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                fontSize: "clamp(12px, 1.5vw, 15px)",
                fontWeight: "600",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                letterSpacing: "0.01em",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background: activeTab === tab ? "#ffffff" : "transparent",
                color: activeTab === tab ? "#111827" : "#ffffff",
                boxShadow: activeTab === tab ? "0 2px 12px rgba(0,0,0,0.15)" : "none",
                transform: activeTab === tab ? "scale(1.02)" : "scale(1)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div
          key={contentKey}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(24px, 5vw, 64px)",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
            animation: "fadeSlideIn 0.45s ease both",
          }}
        >
          {/* Text column */}
          <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
            <h3 style={{
              fontSize: "clamp(22px, 3.5vw, 34px)",
              fontWeight: "800",
              color: isDarkMode ? "#60a5fa" : "#0065CC",
              margin: "0 0 20px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}>
              {content.title}
            </h3>
            <p style={{
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: isDarkMode ? "#9ca3af" : "#626262",
              lineHeight: 1.75,
              margin: "0 0 32px",
              maxWidth: "480px",
            }}>
              {content.description}
            </p>
            <button
              onClick={() => navigate(content.path)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "50px",
                border: isDarkMode ? "2px solid #374151" : "2px solid #d1d5db",
                background: isDarkMode ? "#1f2937" : "#fff",
                color: isDarkMode ? "#e5e7eb" : "#111827",
                fontSize: "14px",
                fontWeight: "600",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: isDarkMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = isDarkMode ? "#e5e7eb" : "#111827";
                e.currentTarget.style.color = isDarkMode ? "#111827" : "#fff";
                e.currentTarget.style.borderColor = isDarkMode ? "#e5e7eb" : "#111827";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = isDarkMode ? "#1f2937" : "#fff";
                e.currentTarget.style.color = isDarkMode ? "#e5e7eb" : "#111827";
                e.currentTarget.style.borderColor = isDarkMode ? "#374151" : "#d1d5db";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {content.ctaLabel}
              <span style={{ fontSize: "16px" }}>→</span>
            </button>
          </div>

          {/* Dashboard mockup column */}
          <div style={{
            flex: "1 1 420px",
            minWidth: "300px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}>
            <AssessmentImage image={content.image} alt={content.title} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────── */
export default function App() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <HeroSection />
      <AssessmentSection />
    </div>
  );
}