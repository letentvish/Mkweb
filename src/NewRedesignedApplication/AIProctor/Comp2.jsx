import { useState, useEffect, useRef } from "react";
import { FaGem, FaTrophy } from "react-icons/fa";
import tabRightImage from "../../Assets/AiProctor/Background.webp";
import createIcon from "../../Assets/AiProctor/What/create.svg";
import monitorIcon from "../../Assets/AiProctor/What/Frame (4).svg";
import evaluateIcon from "../../Assets/AiProctor/What/evaluate.svg";
import certifyIcon from "../../Assets/AiProctor/What/certify.svg";

/* ═══════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════ */

function useInView(threshold = 0.12) {
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
  const [ref, visible] = useInView(0.08);
  const transforms = {
    up: "translateY(36px)",
    down: "translateY(-36px)",
    left: "translateX(36px)",
    right: "translateX(-36px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.75s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Badge({ children, color = "#10B981", bg, pulse = false, extraStyle = {} }) {
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
        ...extraStyle,
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
            animation: "aboutPulseDot 2s infinite",
          }}
        />
      )}
      {children}
    </span>
  );
}

/* ── Feature Card ── */
function FeatureCard({ icon, title, description, delay = 0, isDarkMode = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay} direction="up">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: isDarkMode
            ? (hovered ? "#1E2850" : "#1A2445")
            : (hovered ? "#FAFBFD" : "#FFFFFF"),
          borderRadius: 16,
          padding: "26px 22px",
          border: isDarkMode
            ? `1.5px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)"}`
            : `1.5px solid ${hovered ? "#D4D9E3" : "#ECF0F5"}`,
          cursor: "default",
          transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
          transform: hovered ? "translateY(-4px)" : "none",
          boxShadow: hovered
            ? (isDarkMode
              ? "0 14px 36px rgba(0,0,0,0.3), 0 0 0 1px rgba(99,102,241,0.06)"
              : "0 14px 36px rgba(15,23,42,0.07), 0 0 0 1px rgba(99,102,241,0.06)")
            : (isDarkMode
              ? "0 1px 4px rgba(0,0,0,0.2)"
              : "0 1px 4px rgba(15,23,42,0.03)"),
          height: "100%",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 14,
            background: "#FCDE53",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 23,
            color: "#854D0E",
            marginBottom: 18,
            boxShadow: "0 3px 10px rgba(252,222,83,0.35)",
            transition: "transform 0.3s cubic-bezier(.16,1,.3,1)",
            transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
          }}
        >
          {icon}
        </div>
        <h4
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: isDarkMode ? "#F1F5F9" : "#0F172A",
            marginBottom: 5,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: 14, color: isDarkMode ? "#94A3B8" : "#64748B", lineHeight: 1.55, margin: 0 }}>
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════
   MONITORING MOCKUP (Right side)
   ═══════════════════════════════════════════════ */

function MonitoringMockup() {
  const [ref, visible] = useInView(0.12);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(48px) scale(0.96)",
        transition: "all 1s cubic-bezier(.16,1,.3,1) 0.2s",
      }}
    >
      <img
        src={tabRightImage}
        alt="AI Proctor Monitoring Dashboard"
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
   MAIN: ABOUT SECTION
   ═══════════════════════════════════════════════ */

export default function AboutSection() {
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
          padding: "clamp(52px, 8vw, 80px) 24px",
          maxWidth: 1200,
          margin: "0 auto",
          fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
        }}
      >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        @keyframes aboutPulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .about-section-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: clamp(40px, 6vw, 88px);
          align-items: center;
        }
        .about-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 960px) {
          .about-section-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 325px) {
          .about-features-grid {
            grid-template-columns: 1fr !important;
            
          }
        }
      `}</style>

      <div className="about-section-grid">
        {/* ════ LEFT COLUMN: Copy + Feature Cards ════ */}
        <div>
          {/* About Us pill */}
          <FadeIn delay={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 28,
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
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  boxShadow: isDarkMode ? "0 1px 3px rgba(0,0,0,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <FaGem style={{ fontSize: 12 }} />
                About Us
              </span>
              <div
                style={{
                  height: 1.5,
                  width: 52,
                  background: isDarkMode
                    ? "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)"
                    : "linear-gradient(90deg, #CBD5E1 0%, transparent 100%)",
                  borderRadius: 1,
                }}
              />
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.08}>
            <h2
              style={{
                fontFamily: headingFont,
                fontSize: "clamp(30px, 3.8vw, 46px)",
                fontWeight: 800,
                color: isDarkMode ? "#F1F5F9" : "#0F172A",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                marginBottom: 22,
              }}
            >
              What Is AI Proctor?
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.14}>
            <p
              style={{
                fontSize: "clamp(14.5px, 1.4vw, 16.5px)",
                color: isDarkMode ? "#94A3B8" : "#5A6478",
                lineHeight: 1.75,
                maxWidth: 530,
                marginBottom: 40,
              }}
            >
              AI Proctor is an intelligent exam invigilation platform that
              uses computer vision, behavioral analytics, and machine
              learning to ensure assessment integrity—without human
              intervention. From test creation to certification, everything
              is automated and scalable.
            </p>
          </FadeIn>

          {/* Feature Cards 2×2 */}
          <div className="about-features-grid">
            <FeatureCard
              icon={<img src={createIcon} alt="Create" style={{ width: "23px", height: "23px" }} />}
              title="Create"
              description="Set up assessments"
              delay={0.2}
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<img src={monitorIcon} alt="Monitor" style={{ width: "23px", height: "23px" }} />}
              title="Monitor"
              description="AI watches in real-time"
              delay={0.26}
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<img src={evaluateIcon} alt="Evaluate" style={{ width: "23px", height: "23px" }} />}
              title="Evaluate"
              description="Automated scoring"
              delay={0.32}
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<img src={certifyIcon} alt="Certify" style={{ width: "23px", height: "23px" }} />}
              title="Certify"
              description="Issue credentials"
              delay={0.38}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* ════ RIGHT COLUMN: Monitoring Mockup ════ */}
        <MonitoringMockup />
      </div>
      </div>
    </section>
  );
}