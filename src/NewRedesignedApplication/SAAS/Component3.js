import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

// ── Tokens ────────────────────────────────────────────────────────────────────
const COLORS = {
  bgPage: "#e8f4f4",
  bgCard: "#ddeef0",
  cardBorder: "rgba(255,255,255,0.85)",
  iconBg1: "#4a8fa8",
  iconBg2: "#3d7d96",
  titleBlue: "#1e3a8a",
  headingDark: "#1a2e4a",
  body: "#5a7080",
  white: "#ffffff",
};

// ── useIntersectionObserver ───────────────────────────────────────────────────
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconBook() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <polyline points="2 20 22 20"/>
    </svg>
  );
}

function IconScale() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M3 9l9-6 9 6"/>
      <circle cx="5" cy="14" r="3"/>
      <circle cx="19" cy="14" r="3"/>
      <path d="M2 17c0 1.7 1.3 3 3 3s3-1.3 3-3"/>
      <path d="M16 17c0 1.7 1.3 3 3 3s3-1.3 3-3"/>
    </svg>
  );
}

// ── IconOrb ───────────────────────────────────────────────────────────────────
function IconOrb({ icon, delay = 0, isDarkMode }) {
  return (
    <div
      style={{
        width: 110,
        height: 110,
        borderRadius: "50%",
        background: isDarkMode
          ? "linear-gradient(85.81deg, #2B8DF8 -49.61%, #1E51BE 96.59%)"
          : "radial-gradient(circle at 38% 38%, #6ab4cc, #2f6e87 55%, #1b4f63)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 40px rgba(30,80,120,0.22), inset 0 -3px 8px rgba(0,0,0,0.15)",
        transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease",
        animationDelay: `${delay}ms`,
        flexShrink: 0,
      }}
      className="icon-orb"
    >
      {icon}
    </div>
  );
}

// ── FeatureCard ───────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <IconBook />,
    title: "Magnetix LXP",
    subtitle: "The Adaptive Learning Experience",
    body: "AI that curates, recommends, and personalizes learning journeys in real time—so every learner gets the right content at the right moment.",
  },
  {
    icon: <IconAnalytics />,
    title: "Assessment Tools",
    subtitle: "Intelligent Assessments That Know",
    body: "AI‑powered item banking, automated grading, and real‑time adaptability to measure true competency, not just recall.",
  },
  {
    icon: <IconScale />,
    title: "Data Analytics",
    subtitle: "Predictive Insights That Speak",
    body: "AI transforms raw learning and assessment data into actionable forecasts—spotting at‑risk learners, skill gaps, and ROI before they become problems.",
  },
  {
    icon: <IconScale />,
    title: "AI Proctor",
    subtitle: "Autonomous Integrity Guardian",
    body: "AI‑driven behavioral analysis, identity verification, and environment scanning to ensure exam integrity without compromising learner experience.",
  },
];

function FeatureCard({ feature, index, isDarkMode }) {
  const [ref, visible] = useReveal(0.12);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={feature.title.replace("\n", " ")}
      style={{
        border: isDarkMode
          ? `1.5px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`
          : `1.5px solid ${hovered ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.75)"}`,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        minWidth: 240,
        height: "100%",
        cursor: "default",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 60px rgba(30,80,120,0.14), 0 2px 8px rgba(30,80,120,0.08)"
          : "0 4px 24px rgba(30,80,120,0.07)",
        transform: visible
          ? hovered ? "translateY(-8px) scale(1.012)" : "translateY(0) scale(1)"
          : "translateY(40px) scale(0.97)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.55s cubic-bezier(.22,.68,0,1.2) ${index * 110}ms, opacity 0.55s ease ${index * 110}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Part 1 - Icon with gradient background */}
      <div style={{
        height: "200px",
        background: isDarkMode
          ? "linear-gradient(180deg, #2E3551 0%, #191E39 100%)"
          : "linear-gradient(180deg, rgba(157, 217, 210, 0.2) 0%, #FFFFFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "44px 36px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        {/* Ripple circles animation */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="icon-ripple"
            style={{
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        <div style={{
          position: "relative",
          zIndex: 2,
        }}>
          <IconOrb icon={feature.icon} delay={index * 80} isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Part 2 - Title and Subtitle */}
      <div style={{
        height: "140px",
        background: isDarkMode ? "#2E3551" : "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px 24px",
        flexShrink: 0,
      }}>
        <h3 style={{
          fontSize: "clamp(1.05rem, 2.2vw, 1.22rem)",
          fontWeight: 800,
          color: isDarkMode ? "#FFFFFF" : COLORS.headingDark,
          lineHeight: 1.3,
          marginBottom: 8,
          letterSpacing: "-0.01em",
          fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif",
        }}>
          {feature.title}
        </h3>

        {feature.subtitle && (
          <h4 style={{
            fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
            fontWeight: 600,
            color: isDarkMode ? "#7CB8F7" : "#0065CC",
            lineHeight: 1.4,
            marginBottom: 0,
            letterSpacing: "0.01em",
            fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif",
          }}>
            {feature.subtitle}
          </h4>
        )}
      </div>

      {/* Part 3 - Description */}
      <div style={{
        height: "180px",
        background: isDarkMode ? "#2E3551" : "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        padding: "20px 24px 32px",
        flexShrink: 0,
      }}>
        <p style={{
          fontSize: "clamp(0.875rem, 1.5vw, 0.95rem)",
          color: isDarkMode ? "#DDDDDD" : COLORS.body,
          lineHeight: 1.7,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontWeight: 400,
          maxWidth: 300,
        }}>
          {feature.body}
        </p>
      </div>
    </article>
  );
}

// ── Section Heading ───────────────────────────────────────────────────────────
function SectionHeading({ isDarkMode }) {
  const [ref, visible] = useReveal(0.3);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        marginBottom: "clamp(36px, 6vw, 64px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(.22,.68,0,1.1)",  
      }}
    >
      <h2 style={{
        fontSize: "clamp(1.75rem, 4.5vw, 2.85rem)",
        fontWeight: 800,
        color: isDarkMode ? "#FFFFFF" : COLORS.titleBlue,
        lineHeight: 1.18,
        letterSpacing: "-0.025em",
        maxWidth: 680,
        margin: "0 auto",
        fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif",
      }}>
        Unlock Your Team's Potential with{" "}
        <span style={{ display: "inline-block" }}>MultipliersKraft</span>
      </h2>
    </div>
  );
}

// ── Background decoration ─────────────────────────────────────────────────────
function BgDecor({ isDarkMode }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* soft radial blobs */}
      <div style={{
        position: "absolute", top: "-10%", left: "55%",
        width: 600, height: 600, borderRadius: "50%",
        background: isDarkMode
          ? "radial-gradient(circle, rgba(43,141,248,0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(100,190,210,0.18) 0%, transparent 70%)",
        transform: "translate(-50%,-50%)",
      }} />
      <div style={{
        position: "absolute", bottom: "-5%", left: "15%",
        width: 500, height: 500, borderRadius: "50%",
        background: isDarkMode
          ? "radial-gradient(circle, rgba(30,81,190,0.10) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(80,160,200,0.13) 0%, transparent 70%)",
      }} />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function MultiplierSkraftSection() {
  const isDarkMode = useTheme();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;800&display=swap');

        @keyframes rippleExpand {
          0%   {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        .icon-ripple {
          position: absolute;
          width: 140px;
          height: 140px;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 2px solid rgba(106, 180, 204, 0.4);
          animation: rippleExpand 4.5s ease-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .icon-orb:hover {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 0 18px 50px rgba(30,80,120,0.30), inset 0 -3px 8px rgba(0,0,0,0.15) !important;
        }

        .cards-grid > * {
          flex: 1 1 22%;
          min-width: 240px;
        }

        @media (max-width: 1200px) {
          .cards-grid > * {
            flex: 1 1 45%;
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            flex-direction: column !important;
            align-items: center !important;
          }
          .cards-grid > * {
            width: 100% !important;
            max-width: 440px !important;
            flex: 1 1 100% !important;
          }
        }

        @media (max-width: 480px) {
          .cards-grid > * {
            padding: 36px 24px 32px !important;
          }
        }
      `}</style>

      <section
        role="region"
        aria-label="Multiplier Skraft features"
        style={{
          position: "relative",
          background: isDarkMode
            ? "linear-gradient(180deg, #060F32 0%, #2D3E6E 173.48%)"
            : "linear-gradient(160deg, #dff2f4 0%, #c8e8ed 40%, #d4eef2 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(60px, 10vw, 120px) 0",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <BgDecor isDarkMode={isDarkMode} />

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "100%", padding: "0 clamp(20px, 3vw, 40px)" }}>
          <SectionHeading isDarkMode={isDarkMode} />

          <div
            className="cards-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(16px, 1.8vw, 24px)",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}