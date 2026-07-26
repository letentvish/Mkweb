import { useState, useEffect, useRef } from "react";
import { FaShieldAlt, FaLock, FaBolt, FaExclamationTriangle, FaGem, FaUser, FaUsers, FaMobileAlt, FaEye, FaRobot, FaGraduationCap, FaCog, FaQuestionCircle } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import backgroundImage from "../../Assets/AiProctor/TabRight.webp";
import icon1 from "../../Assets/AiProctor/SimpleSteps/Icon1.svg";
import icon2 from "../../Assets/AiProctor/SimpleSteps/Icon2.svg";
import icon3 from "../../Assets/AiProctor/SimpleSteps/Icon3.svg";
import icon4 from "../../Assets/AiProctor/SimpleSteps/Icon4.svg";

/* ═══════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════ */

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   SUBCOMPONENTS
   ═══════════════════════════════════════════════ */

function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useInView(0.06);
  const transforms = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Badge({ children, color = "#10B981", bg, pulse = false, sx = {} }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 12px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        color,
        background: bg || `${color}18`,
        letterSpacing: 0.5,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        ...sx,
      }}
    >
      {pulse && (
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 6px ${color}`,
            animation: "hiwPulse 2s infinite",
          }}
        />
      )}
      {children}
    </span>
  );
}

/* ── Step Card ── */
function StepCard({ icon, title, description, delay = 0, isFirst = false, isDarkMode = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay} direction="left">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: isDarkMode
            ? (hovered ? "#1E2850" : "#1A2445")
            : (hovered ? "#FAFBFD" : "#FFFFFF"),
          borderRadius: 18,
          padding: "28px 26px",
          border: isDarkMode
            ? `1.5px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)"}`
            : `1.5px solid ${hovered ? "#D4D9E3" : "#ECF0F5"}`,
          cursor: "default",
          transition: "all 0.35s cubic-bezier(.16,1,.3,1)",
          transform: hovered ? "translateY(-3px)" : "none",
          boxShadow: hovered
            ? (isDarkMode
              ? "0 16px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(99,102,241,0.06)"
              : "0 16px 40px rgba(15,23,42,0.07), 0 0 0 1px rgba(99,102,241,0.06)")
            : (isDarkMode
              ? "0 2px 8px rgba(0,0,0,0.1)"
              : "0 2px 8px rgba(15,23,42,0.03)"),
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "#FCDE53",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            marginBottom: 18,
            boxShadow: "0 3px 12px rgba(252,222,83,0.35)",
            transition: "transform 0.35s cubic-bezier(.16,1,.3,1)",
            transform: hovered ? "scale(1.08) rotate(-2deg)" : "scale(1)",
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: isDarkMode ? "#F1F5F9" : "#0F172A",
            marginBottom: 8,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 14.5,
            color: isDarkMode ? "#94A3B8" : "#64748B",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════
   DASHBOARD MOCKUP (Right side)
   ═══════════════════════════════════════════════ */

function DashboardMockup() {
  const [ref, visible] = useInView(0.08);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(50px) scale(0.95)",
        transition: "all 1s cubic-bezier(.16,1,.3,1) 0.15s",
      }}
    >
      <img
        src={backgroundImage}
        alt="AI Proctoring System Dashboard"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "22px",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT: HOW IT WORKS SECTION
   ═══════════════════════════════════════════════ */

const steps = [
  {
    icon: <img src={icon1} alt="Smart Assessment Creation" style={{ width: "24px", height: "24px" }} />,
    title: "Smart Assessment Creation",
    description:
      "Create custom exams with question banks, time limits, difficulty levels, and configure proctoring rules in minutes.",
  },
  {
    icon: <img src={icon2} alt="AI Invigilation & Monitoring" style={{ width: "24px", height: "24px" }} />,
    title: "AI Invigilation & Monitoring",
    description:
      "Real-time AI monitors eye tracking, tab switching, voice activity, and environment while candidates take their exams.",
  },
  {
    icon: <img src={icon3} alt="Automated Evaluation & Fraud Scoring" style={{ width: "24px", height: "24px" }} />,
    title: "Automated Evaluation & Fraud Scoring",
    description:
      "AI analyzes behavioral patterns, generates integrity confidence scores, and flags suspicious activity with timestamped evidence.",
  },
  {
    icon: <img src={icon4} alt="Reporting & Certification" style={{ width: "24px", height: "24px" }} />,
    title: "Reporting & Certification",
    description:
      "Generate comprehensive integrity reports, issue blockchain-verified certificates, and seamlessly integrate with your LMS or HRMS.",
  },
];

export default function HowItWorksSection() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const headingFont = "'Space Grotesk', 'DM Sans', sans-serif";

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
    <section
      style={{
        background: isDarkMode ? "#0A0F1E" : "transparent",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "clamp(40px, 6vw, 60px) 24px",
          maxWidth: 1240,
          margin: "0 auto",
          fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
        }}
      >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        @keyframes hiwPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .hiw-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: start;
        }
        .hiw-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 0.55fr;
          gap: 12px;
        }
        @media (max-width: 960px) {
          .hiw-main-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 600px) {
          .hiw-dashboard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Section Header ── */}
      <FadeIn delay={0}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "8px 20px",
              borderRadius: 999,
              border: isDarkMode ? "1.5px solid rgba(255,255,255,0.15)" : "1.5px solid #D4D9E3",
              background: isDarkMode ? "rgba(99,102,241,0.12)" : "#FFFFFF",
              fontSize: 12,
              fontWeight: 700,
              color: "#6366F1",
              letterSpacing: 1.3,
              textTransform: "uppercase",
              boxShadow: isDarkMode ? "0 1px 3px rgba(0,0,0,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <FaGem style={{ fontSize: 12 }} />
            How It Works
          </span>
          <div
            style={{
              height: 1.5,
              width: 52,
              background: isDarkMode
                ? "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)"
                : "linear-gradient(90deg, #CBD5E1, transparent)",
              borderRadius: 1,
            }}
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <h2
          style={{
            fontFamily: headingFont,
            fontSize: "clamp(30px, 4vw, 50px)",
            fontWeight: 800,
            color: isDarkMode ? "#F1F5F9" : "#0F172A",
            lineHeight: 1.14,
            letterSpacing: "-0.025em",
            marginBottom: "clamp(40px, 5vw, 64px)",
            maxWidth: 780,
          }}
        >
          Four simple steps from assessment creation to trusted certification
        </h2>
      </FadeIn>

      {/* ── Main Layout ── */}
      <div className="hiw-main-grid">
        {/* LEFT: Step Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {steps.map((step, i) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={0.1 + i * 0.08}
              isFirst={i === 0}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* RIGHT: Dashboard Mockup */}
        <DashboardMockup />
      </div>
      </div>
    </section>
  );
}