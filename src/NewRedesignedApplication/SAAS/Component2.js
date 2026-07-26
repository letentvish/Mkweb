import { useState, useEffect, useRef } from "react";
import Marquee from 'react-fast-marquee';
import organizationSuccessImage from "../../Assets/SAAS/organizationSuccess.png";
import { useTheme } from "../../hooks/useTheme";

// --- Utility: useInView hook ---
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// --- Company Names ---
const companyNames = [
  "Reliance Industries",
  "Endurance",
  "Dr. Reddy's",
  "Bosch",
  "Hindustan Petroleum",
  "Merck",
  "Narayana Healthcare",
  "Panasonic",
  "Cotiviti",
];

// --- LogoBar ---
function LogoBar() {
  const isDarkMode = useTheme();

  return (
    <div
      style={{
        padding: "32px 0",
        borderBottom: isDarkMode
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
        background: isDarkMode
          ? "#0C1437"
          : "#f8fafc",
      }}
      role="list"
      aria-label="Trusted by leading companies"
    >
      <Marquee gradient={false} speed={90}>
        {[...companyNames, ...companyNames, ...companyNames].map((name, index) => (
          <div
            key={index}
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(16px, 1.8vw, 20px)",
              fontWeight: "600",
              color: isDarkMode ? "#DDDDDD" : "#374151",
              padding: "0 clamp(40px, 5vw, 80px)",
              whiteSpace: "nowrap",
              transition: "color 0.3s ease, transform 0.3s ease",
              cursor: "default",
              borderRight: isDarkMode
                ? "1px solid rgba(255, 255, 255, 0.15)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = isDarkMode ? "#FFFFFF" : "#111827";
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = isDarkMode ? "#DDDDDD" : "#374151";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            {name}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// --- HeroSection ---
function HeroSection() {
  const [textRef, textInView] = useInView();
  const [imgRef, imgInView] = useInView();
  const isDarkMode = useTheme();

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "center",
        padding: "clamp(48px, 8vw, 96px) clamp(24px, 8vw, 96px)",
        background: isDarkMode
          ? "#0C1437"
          : "linear-gradient(160deg, #ffffff 60%, #f0f6ff 100%)",
        minHeight: "520px",
      }}
      className="hero-section"
    >
      {/* Left: Text */}
      <div
        ref={textRef}
        style={{
          opacity: textInView ? 1 : 0,
          transform: textInView ? "translateX(0)" : "translateX(-32px)",
          transition: "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(28px, 4.5vw, 52px)",
            fontWeight: "800",
            color: isDarkMode ? "#FFFFFF" : "#0d0d0d",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            marginBottom: "clamp(16px, 3vw, 28px)",
            maxWidth: "520px",
          }}
        >
          People are the foundation of every organization's success.
        </h1>
        <p
          style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: isDarkMode ? "#DDDDDD" : "#555",
            lineHeight: 1.75,
            maxWidth: "460px",
            fontWeight: 400,
          }}
        >
          Multiplierskraft transforms how organizations invest in their people by delivering personalized, scalable learning solutions for students, enterprises, and custom needs. In today's fast-evolving landscape, continuous learning is essential—organizations that prioritize growth foster innovation, build resilience, and achieve long-term success by unlocking individual potential through the right learning environment.
        </p>
      </div>

      {/* Right: Image */}
      <div
        ref={imgRef}
        style={{
          opacity: imgInView ? 1 : 0,
          transform: imgInView ? "translateX(0) scale(1)" : "translateX(32px) scale(0.97)",
          transition: "opacity 0.75s cubic-bezier(.22,.68,0,1.2) 0.12s, transform 0.75s cubic-bezier(.22,.68,0,1.2) 0.12s",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 48px rgba(0,0,0,0.10)",
          position: "relative",
        }}
      >
        <img
          src={organizationSuccessImage}
          alt="Organization success foundation"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function MultiplierskraftLanding() {
  const isDarkMode = useTheme();

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        background: isDarkMode ? "#0C1437" : "#fff",
        width: "100%"
      }}>
        <LogoBar />
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <HeroSection />
        </div>
      </div>
    </>
  );
}
