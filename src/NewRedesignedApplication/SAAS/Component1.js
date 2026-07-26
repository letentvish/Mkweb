import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroSectionImage from "../../Assets/SAAS/HeroSection.jpg";

// ── Utility: useInView hook ──────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Design tokens ────────────────────────────────────────────────────────────
const tokens = {
  navy:    "#0b1929",
  navyMid: "#0f2035",
  navyCard:"#0d2340",
  border:  "rgba(255,255,255,0.07)",
  accent:  "#4f8ef7",
  accentG: "linear-gradient(135deg,#5b8dee,#7c5af6)",
  gold:    "#f0c84a",
  text:    "#e8edf4",
  muted:   "#8fa8c0",
};

// ── Global CSS injected once ─────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${tokens.navy}; color: ${tokens.text}; font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }

  /* ── Fade/slide animations ── */
  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
  @keyframes floatA   { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-8px);} }
  @keyframes floatB   { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-12px);} }
  @keyframes pulse    { 0%,100%{opacity:.6;} 50%{opacity:1;} }
  @keyframes shimmer  { 0%{background-position:-400px 0;} 100%{background-position:400px 0;} }
  @keyframes lineGrow { from{transform:scaleX(0);} to{transform:scaleX(1);} }
  @keyframes spin     { to{transform:rotate(360deg);} }

  .fade-up   { animation: fadeUp .7s ease both; }
  .fade-in   { animation: fadeIn .9s ease both; }
  .float-a   { animation: floatA 5s ease-in-out infinite; }
  .float-b   { animation: floatB 7s ease-in-out infinite; }

  /* ── Noise texture overlay ── */
  .noise::after {
    content:'';position:absolute;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='auto25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events:none;z-index:0;border-radius:inherit;
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar{width:6px;}
  ::-webkit-scrollbar-track{background:${tokens.navy};}
  ::-webkit-scrollbar-thumb{background:${tokens.navyCard};border-radius:3px;}

  /* ── Responsive dashboard ── */
  .hero-dashboard-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    .hero-dashboard { transform: scale(0.85); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 300px; }
  }

  @media (max-width: 1024px) {
    .hero-dashboard { transform: scale(0.7); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 280px; }
  }

  @media (max-width: 768px) {
    .hero-dashboard { transform: scale(0.55); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 220px; }
  }

  @media (max-width: 640px) {
    .hero-dashboard { transform: scale(0.5); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 200px; }
  }

  @media (max-width: 480px) {
    .hero-dashboard { transform: scale(0.4); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 160px; }
  }

  @media (max-width: 380px) {
    .hero-dashboard { transform: scale(0.35); transform-origin: center top; }
    .hero-dashboard-wrapper { min-height: 140px; }
  }
`;

// ── Sub-components ───────────────────────────────────────────────────────────

function GlowOrb({ style }) {
  return (
    <div style={{
      position: "absolute", borderRadius: "50%",
      filter: "blur(80px)", pointerEvents: "none", opacity: 0.18,
      ...style,
    }} />
  );
}

function CTAButton({ children, outline, small, onClick, to }) {
  const [hov, setHov] = useState(false);

  const baseStyle = outline ? {
    background: "transparent",
    border: `1.5px solid #FCDE53`,
    color: "#fff",
    borderRadius: 50,
    padding: small ? "8px 18px" : "clamp(10px, 2vw, 14px) clamp(20px, 3vw, 28px)",
    fontSize: small ? 13 : "clamp(13px, 2vw, 15px)",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "all .25s ease",
    transform: hov ? "translateY(-1px)" : "none",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    textDecoration: "none",
  } : {
    background: hov ? "#d4a93a" : tokens.gold,
    color: "#0b1929",
    border: "none",
    borderRadius: 50,
    padding: small ? "8px 18px" : "clamp(10px, 2vw, 14px) clamp(24px, 4vw, 32px)",
    fontSize: small ? 13 : "clamp(13px, 2vw, 15px)",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    boxShadow: hov ? `0 8px 28px rgba(240,200,74,0.4)` : `0 4px 16px rgba(240,200,74,0.25)`,
    transition: "all .25s ease",
    transform: hov ? "translateY(-2px) scale(1.02)" : "none",
    letterSpacing: "0.01em",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    textDecoration: "none",
  };

  if (to) {
    if (outline) {
      return (
        <Link
          to={to}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={baseStyle}
        >
          {children} <span style={{ fontSize: 17 }}>→</span>
        </Link>
      );
    }
    return (
      <Link
        to={to}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={baseStyle}
      >
        {children}
      </Link>
    );
  }

  if (outline) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={baseStyle}
      >
        {children} <span style={{ fontSize: 17 }}>→</span>
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={baseStyle}
    >
      {children}
    </button>
  );
}

// ── Dashboard mockup cards ───────────────────────────────────────────────────
function MockCard({ style, children, delay = 0, float = false }) {
  return (
    <div
      className={float === "a" ? "float-a" : float === "b" ? "float-b" : ""}
      style={{
        background: "rgba(13,35,64,0.9)",
        border: `1px solid ${tokens.border}`,
        borderRadius: 14,
        backdropFilter: "blur(12px)",
        padding: 16,
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function HeroDashboard() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-dashboard" style={{ position: "relative", width: "100%", maxWidth: 620 }}>
      {/* Assignment card */}
      <MockCard style={{ width: 210, position: "absolute", top: 0, left: 0, zIndex: 3 }}>
        <p style={{ fontSize: 11, color: tokens.muted, marginBottom: 6 }}>Submit <strong style={{ color: tokens.text }}>assignments</strong></p>
        <p style={{ fontSize: 11, color: tokens.muted, marginBottom: 0 }}>to track your learning progress.</p>
      </MockCard>

      {/* Checklist card */}
      <MockCard style={{ width: 190, position: "absolute", top: 130, left: 10, zIndex: 3 }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 2 ? 10 : 0 }}>
            <div style={{
              width: 16, height: 16, borderRadius: "50%",
              border: `2px solid ${i < 2 ? tokens.accent : "rgba(255,255,255,0.2)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {i < 2 && <div style={{ width: 6, height: 6, borderRadius: "50%", background: tokens.accent }} />}
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{
                height: 6,
                borderRadius: 4,
                background: i < 2 ? `rgba(79,142,247,${0.6 - i * 0.15})` : "rgba(255,255,255,0.1)",
                width: animate ? '100%' : '0%',
                transition: `width 1s ease ${0.7 + i * 0.2}s`,
              }} />
            </div>
          </div>
        ))}
      </MockCard>

      {/* Course builder card */}
      <MockCard style={{ width: 240, position: "absolute", top: 0, left: 220, zIndex: 3 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 10, fontSize: 10, color: tokens.muted }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: tokens.accent }} />
          Course Builder
          <span style={{ marginLeft: 4, color: tokens.accent }}>Editing ∨</span>
          <div style={{ marginLeft: "auto" }}>
            <div style={{ background: tokens.accentG, borderRadius: 20, padding: "2px 10px", color: "#fff", fontSize: 10 }}>Publish</div>
          </div>
        </div>
        <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Build your first<br/>LMS course</p>
        <p style={{ fontSize: 10, color: tokens.muted, marginBottom: 12 }}>Interactive course builder</p>
        <div style={{ background: "rgba(79,142,247,0.12)", borderRadius: 8, padding: "8px 10px", marginBottom: 8 }}>
          <div style={{
            height: 5,
            borderRadius: 3,
            background: "rgba(79,142,247,0.4)",
            width: animate ? "60%" : "0%",
            marginBottom: 5,
            transition: "width 1s ease 0.8s",
          }} />
          <div style={{
            height: 5,
            borderRadius: 3,
            background: "rgba(79,142,247,0.25)",
            width: animate ? "80%" : "0%",
            transition: "width 1s ease 1s",
          }} />
        </div>
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 10px", display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: "linear-gradient(135deg,#e85d7d,#f4a261)", flexShrink: 0 }} />
          <div>
            <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.2)", width: 80, marginBottom: 5 }} />
            <div style={{ height: 4, borderRadius: 3, background: "rgba(255,255,255,0.1)", width: 60 }} />
          </div>
        </div>
      </MockCard>

      {/* Certificate card */}
      <MockCard style={{ width: 150, position: "absolute", top: 20, left: 470, zIndex: 3 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 11, fontWeight: 700 }}>LearnHub</span>
          <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10 }}>👤</span>
          </div>
        </div>
        <div style={{ background: tokens.accentG, borderRadius: 8, padding: "6px 10px", marginBottom: 6, textAlign: "center" }}>
          <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>Certificate</span>
        </div>
        <div style={{
          height: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,0.12)",
          marginBottom: 4,
          width: animate ? "100%" : "0%",
          transition: "width 0.8s ease 1.2s",
        }} />
        <div style={{
          height: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,0.07)",
          width: animate ? "70%" : "0%",
          transition: "width 0.8s ease 1.4s",
        }} />
      </MockCard>

      {/* Analytics dark card */}
      <MockCard style={{ width: 150, position: "absolute", top: 160, left: 470, zIndex: 3, background: "#0a0f1a" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {["#e85d7d","#f4a261","#5b8dee","#f0c84a"].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: c }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "flex-end", height: 48 }}>
          {[60, 40, 75, 55, 80, 45].map((h, i) => (
            <div key={i} style={{
              width: 10,
              height: animate ? h * 0.6 : 0,
              background: `rgba(79,142,247,${0.3 + i * 0.08})`,
              borderRadius: 2,
              transition: `height 0.8s ease ${1.2 + i * 0.1}s`,
            }} />
          ))}
        </div>
      </MockCard>

      {/* Spacer for layout */}
      <div style={{ height: 340, width: "100%" }} />
    </div>
  );
}

// ── Stats bar ────────────────────────────────────────────────────────────────
function StatItem({ value, label, delay, inView }) {
  return (
    <div style={{
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 800,
        fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff",
        lineHeight: 1, marginBottom: 8,
      }}>{value}</p>
      <p style={{ fontSize: 14, color: tokens.muted, fontWeight: 400 }}>{label}</p>
    </div>
  );
}

// ── Feature cards section ────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, delay, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(79,142,247,0.06)" : "rgba(13,35,64,0.5)",
        border: `1px solid ${hov ? "rgba(79,142,247,0.3)" : tokens.border}`,
        borderRadius: 18, padding: "28px 24px",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s, background .3s, border .3s`,
        cursor: "pointer",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: tokens.accentG,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 16,
        boxShadow: "0 4px 16px rgba(79,142,247,0.3)",
        transition: "transform .25s ease",
        transform: hov ? "scale(1.1)" : "none",
      }}>{icon}</div>
      <p style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{title}</p>
      <p style={{ fontSize: 14, color: tokens.muted, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

// ── Main Page Component ──────────────────────────────────────────────────────
export default function LMSLandingPage() {
  const [activeSection, setActiveSection] = useState(1);
  const [statsRef, statsInView] = useInView();
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      setIsSmallScreen(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (y < h * 0.25) setActiveSection(1);
      else if (y < h * 0.5) setActiveSection(2);
      else if (y < h * 0.75) setActiveSection(3);
      else setActiveSection(4);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#032E43", overflowX: "hidden" }}>
      {/* ── HERO UPPER PART ── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "60px", paddingBottom: "40px" }}>
        <GlowOrb style={{ width: 600, height: 600, top: -100, left: -200, background: "radial-gradient(circle,#2a4a8a,transparent)" }} />
        <GlowOrb style={{ width: 400, height: 400, bottom: 0, right: "20%", background: "radial-gradient(circle,#1a3a5c,transparent)" }} />

        <div style={{
          position: "relative", zIndex: 2,
          width: "100%", maxWidth: 1300, margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 40px)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : (isSmallScreen ? "40fr 60fr" : "minmax(0,1fr) minmax(0,1.1fr)"),
          gap: 40, alignItems: "center",
        }}>
          {/* Left copy */}
          <div>
            <h1 className="fade-up" style={{
              animationDelay: ".2s",
              fontFamily: "'Sora', sans-serif", fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1,
              color: "#fff", marginBottom: 24,
            }}>
              The Intelligence Suite<br />
              <span style={{ color: "#0065CC" }}>End‑to‑End SaaS for Talent Development</span>
            </h1>

            <p className="fade-up" style={{
              animationDelay: ".35s",
              fontSize: "clamp(14px, 1.8vw, 16px)", color: "#DDDDDD",
              lineHeight: 1.7, maxWidth: 440, marginBottom: 36,
            }}>
              Modern solutions that elevate learning experiences, validate competencies, surface deep insights, and protect assessment credibility.
            </p>
          </div>

          {/* Right hero image */}
          <div className="fade-in" style={{
            animationDelay: ".4s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img
              src={heroSectionImage}
              alt="LMS Platform Dashboard"
              style={{
                width: "100%",
                maxWidth: "620px",
                height: "auto",
                borderRadius: "16px",
                
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </section>


    </div>
  );
}