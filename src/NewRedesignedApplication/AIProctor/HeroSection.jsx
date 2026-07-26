import { useState, useEffect, useRef } from "react";
import { FaShieldAlt, FaLock, FaBolt, FaSyncAlt, FaBrain, FaDesktop, FaClipboardList, FaClock, FaSearch, FaUser, FaEye, FaBox, FaVolumeUp } from "react-icons/fa";
import { MdCellTower } from "react-icons/md";
import heroSectionImage from "../../Assets/AiProctor/HeroSection.webp";

// ─── Animation Hook ───
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Animated Wrapper ───
function FadeIn({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useInView(0.1);
  const dirs = { up: "translateY(32px)", down: "translateY(-32px)", left: "translateX(32px)", right: "translateX(-32px)", none: "none" };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : dirs[direction],
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Progress Bar ───
function ProgressBar({ value, color = "#3B82F6", height = 6 }) {
  const [ref, visible] = useInView(0.2);
  return (
    <div ref={ref} style={{ width: "100%", background: "rgba(255,255,255,0.08)", borderRadius: height, height, overflow: "hidden" }}>
      <div style={{
        width: visible ? `${value}%` : "0%",
        height: "100%",
        borderRadius: height,
        background: color,
        transition: "width 1.2s cubic-bezier(.16,1,.3,1) 0.3s",
      }} />
    </div>
  );
}

// ─── Trust Score Ring ───
function TrustRing({ score = 95, size = 100 }) {
  const [ref, visible] = useInView(0.2);
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div ref={ref} style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#6366F1" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={visible ? offset : circ}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1) 0.4s" }} />
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: "#818CF8", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 2 }}>Trust</span>
      </div>
    </div>
  );
}

// ─── Pill Badge ───
function Badge({ children, color = "#10B981", bg, pulse = false }) {
  const bgColor = bg || `${color}18`;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px",
      borderRadius: 999, fontSize: 11, fontWeight: 600, color, background: bgColor,
      letterSpacing: 0.5, textTransform: "uppercase", whiteSpace: "nowrap",
    }}>
      {pulse && (
        <span style={{
          width: 7, height: 7, borderRadius: "50%", background: color,
          boxShadow: `0 0 6px ${color}`,
          animation: "pulse-dot 2s infinite",
        }} />
      )}
      {children}
    </span>
  );
}

// ─── Detection Item ───
function DetectionItem({ icon, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)",
      transition: "background 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(99,102,241,0.15)", fontSize: 13, color: "#818CF8",
        }}>{icon}</div>
        <span style={{ fontSize: 13, color: "#CBD5E1", fontWeight: 500 }}>{label}</span>
      </div>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#10B981" fillOpacity="0.15" />
        <path d="M5.5 9.5l2 2 5-5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ─── Main Component ───
export default function AIProctorLanding() {
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
    <div style={{
      minHeight: "auto",
      background: isDarkMode
        ? "linear-gradient(180deg, #0A0F1E 0%, #0F1419 40%, #0A0E16 100%)"
        : "linear-gradient(180deg, #EEF2F7 0%, #E2E8F0 40%, #F0F4F8 100%)",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes scan-line { 0%{top:0;opacity:0} 10%{opacity:.6} 90%{opacity:.6} 100%{top:100%;opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { margin:0; padding:0; box-sizing:border-box; }
      `}</style>

      {/* ══════ HERO SECTION ══════ */}
      <section style={{ padding: "80px 24px 0", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <FadeIn delay={0}>
          <h1 style={{
            fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
            fontSize: "clamp(32px, 5vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.12,
            color: isDarkMode ? "#F1F5F9" : "#0F172A",
            maxWidth: 780,
            margin: "0 auto",
            letterSpacing: "-0.02em",
          }}>
            AI-Powered Exam Proctoring That Scales With Zero Human Intervention
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: isDarkMode ? "#94A3B8" : "#64748B",
            maxWidth: 640,
            margin: "24px auto 0",
            lineHeight: 1.65,
          }}>
            Ensure exam integrity with advanced AI monitoring. Detect fraud, prevent cheating, and deliver trusted certifications—all automated, all scalable.
          </p>
        </FadeIn>


        {/* ══════ HERO IMAGE ══════ */}
        <FadeIn delay={0.35} direction="up">
          <div style={{
            marginTop: 64,
            maxWidth: 960,
            margin: "64px auto 0",
          }}>
            <img
              src={heroSectionImage}
              alt="AI Proctoring System Dashboard"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "20px",
                boxShadow: isDarkMode
                  ? "0 32px 80px rgba(15,23,42,0.45)"
                  : "0 32px 80px rgba(15,23,42,0.35)",
              }}
            />
          </div>
        </FadeIn>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 720px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Bottom spacer */}
      <div style={{ height: 80 }} />
    </div>
  );
}