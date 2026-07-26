import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ─── Component 1: Hero Header ─── */
export function HeroHeader({ isDarkMode }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      textAlign: "center",
      padding: "clamp(32px, 6vw, 72px) clamp(16px, 4vw, 48px)",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      <h1 style={{
        fontSize: "clamp(28px, 5vw, 52px)",
        fontFamily: "Bricolage Grotesque",
        fontWeight: 800,
        color: isDarkMode ? "#ffffff" : "#271526",
        margin: "0 0 16px",
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
      }}>
        Transformational Benefits
      </h1>
      <p style={{
        fontSize: "clamp(14px, 2vw, 17px)",
        color: isDarkMode ? "#cbd5e1" : "#626262",
        maxWidth: 520,
        margin: "0 auto",
        lineHeight: 1.6,
      }}>
        Unlock unprecedented business value through intelligent data analytics that drive measurable organizational impact
      </p>
    </div>
  );
}

/* ─── Component 2: Feature Cards ─── */
const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Accelerated Decision Making",
    desc: "Transform raw data into actionable insights within minutes, enabling faster strategic decisions and competitive advantage in dynamic markets.",
    gradient: "linear-gradient(135deg, #2B7FFF 0%, #00D3F2 100%)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M8 12h0" />
      </svg>
    ),
    title: "Predictive Intelligence",
    desc: "Harness the power of AI and machine learning to forecast trends, identify opportunities, and prevent issues before they impact your business.",
    gradient: "linear-gradient(135deg, #8E51FF 0%, #C27AFF 100%)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="6" rx="2" />
        <rect x="3" y="15" width="18" height="6" rx="2" />
        <line x1="7" y1="6" x2="7" y2="6.01" />
        <line x1="7" y1="18" x2="7" y2="18.01" />
      </svg>
    ),
    title: "Scalable Infrastructure",
    desc: "Handle massive datasets with enterprise-grade performance, automatic scaling, and cost optimization that grows with your organization's needs.",
    gradient: "linear-gradient(135deg, #00BC7D 0%, #00D5BE 100%)",
  },
];

export function FeatureCards({ isDarkMode }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
      gap: "clamp(12px, 1.5vw, 16px)",
      padding: "0 clamp(16px, 4vw, 48px)",
      maxWidth: 1100,
      margin: "0 auto",
    }}>
      {features.map((f, i) => (
        <FeatureCard key={i} feature={f} delay={i * 0.15} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

function FeatureCard({ feature, delay, isDarkMode }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isDarkMode ? "#063147" : "#ffffff",
        borderRadius: 16,
        padding: "clamp(20px, 2.5vw, 28px)",
        border: isDarkMode ? "1px solid rgba(100, 116, 139, 0.25)" : "1px solid rgba(100, 116, 139, 0.15)",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.4s ease ${inView ? "0s" : delay + "s"}`,
        cursor: "default",
        boxShadow: hovered
          ? isDarkMode
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(100,200,255,0.1)"
            : "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(100,200,255,0.15)"
          : isDarkMode
            ? "0 4px 20px rgba(0,0,0,0.2)"
            : "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Decorative dots */}
      <div style={{
        position: "absolute",
        top: 20,
        right: 24,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        opacity: 0.4,
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#51A2FF" }} />
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#00D3F3", marginLeft: 8 }} />
      </div>

      {/* Icon with gradient border */}
      <div style={{
        background: feature.gradient,
        borderRadius: 12,
        padding: 2,
        marginBottom: 18,
        width: 56,
        height: 56,
        transform: hovered ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          background: "#FCDE53",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "rotate(5deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}>
          {feature.icon}
        </div>
      </div>

      <h3 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(17px, 2vw, 20px)",
        fontWeight: 700,
        color: isDarkMode ? "#f1f5f9" : "#191A15",
        margin: "0 0 10px",
        lineHeight: 1.3,
      }}>
        {feature.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(13px, 1.6vw, 15px)",
        color: isDarkMode ? "#90A1B9" : "#626262",
        margin: 0,
        lineHeight: 1.65,
      }}>
        {feature.desc}
      </p>
    </div>
  );
}

/* ─── Component 3: Performance Metrics ─── */
const metrics = [
  { value: "10x", label: "Processing Speed" },
  { value: "94%", label: "Prediction Accuracy" },
  { value: "60%", label: "Cost Reduction" },
  { value: "8x", label: "Efficiency Gains" },
];

function AnimatedValue({ target }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const numMatch = target.match(/^(\d+)(.*)/);
    const num = parseInt(numMatch[1]);
    const suffix = numMatch[2];
    const duration = 1600;
    const steps = 50;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(target);
        return;
      }
      setDisplay(Math.round(current) + suffix);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{display}</span>;
}

function WaveLines() {
  /*
   * The image shows ~10-14 thin curved lines that:
   * - Originate from the bottom-left corner area
   * - Fan outward: some sweep up along the left edge (going to top-left area)
   *   and some curve along the bottom edge toward the center-right
   * - They form a tight bundle at origin and spread apart
   * - Colors go from pink/magenta to slightly purple
   * - The lines that go upward curve gently to the right
   * - The lines that go along bottom are more horizontal with slight upward curve
   */
  const lineCount = 14;
  const lines = [];

  for (let i = 0; i < lineCount; i++) {
    const t = i / (lineCount - 1); // 0 = most vertical (up), 1 = most horizontal (right)

    // All lines start from roughly the same origin point at bottom-left
    const startX = 10 + t * 8;
    const startY = 295 + t * 15; // slight spread at origin

    // Angle interpolation: t=0 goes upward, t=1 goes rightward
    // For upward lines (low t):
    //   curve up along left edge, gentle rightward bend at top
    // For horizontal lines (high t):
    //   sweep along bottom edge toward center/right

    let cp1x, cp1y, cp2x, cp2y, endX, endY;

    if (t < 0.5) {
      // More vertical lines - sweep upward along left edge
      const s = t / 0.5; // 0 to 1 within vertical group
      cp1x = 15 + s * 25;
      cp1y = 180 - s * 30;
      cp2x = 30 + s * 40;
      cp2y = 80 + s * 20;
      endX = 50 + s * 50;
      endY = 10 + s * 30;
    } else {
      // More horizontal lines - sweep along bottom
      const s = (t - 0.5) / 0.5; // 0 to 1 within horizontal group
      cp1x = 50 + s * 60;
      cp1y = 250 - s * 20;
      cp2x = 140 + s * 120;
      cp2y = 240 - s * 10;
      endX = 250 + s * 200;
      endY = 290 - s * 10;
    }

    // Color: pink/magenta spectrum
    const hue = 310 - t * 25;
    const sat = 75 + t * 10;
    const light = 55 + t * 12;

    lines.push(
      <path
        key={i}
        d={`M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`}
        stroke={`hsl(${hue}, ${sat}%, ${light}%)`}
        strokeWidth="1.0"
        fill="none"
        opacity={0.65 + t * 0.15}
      />
    );
  }

  return (
    <svg
      className="wave-lines-svg"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "50%",
        height: "100%",
        pointerEvents: "none",
      }}
      viewBox="0 0 500 310"
      fill="none"
      preserveAspectRatio="xMinYMax meet"
    >
      {lines}
    </svg>
  );
}

export function MetricsBar({ isDarkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px 40px",
        marginTop: "20px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mc-card {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          background: ${isDarkMode ? '#111338' : '#ffffff'};
          border-radius: 20px;
          padding: 52px 64px 48px;
          max-width: 1100px;
          width: 100%;
          overflow: hidden;
          box-shadow: ${isDarkMode ? '0 8px 60px rgba(0, 0, 0, 0.6)' : '0 8px 60px rgba(0, 0, 0, 0.1)'};
        }

        .mc-title {
          text-align: center;
          color: ${isDarkMode ? '#dfe2f0' : '#271526'};
          font-size: 30px;
          font-weight: 600;
          letter-spacing: 0.005em;
          margin-bottom: 44px;
          position: relative;
          z-index: 1;
        }

        .mc-grid {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .mc-item {
          flex: 1;
          padding: 0 28px;
        }

        .mc-item:first-child {
          padding-left: 12px;
        }

        .mc-item:last-child {
          padding-right: 12px;
        }

        .mc-divider {
          width: 2.5px;
          height: 56px;
          background: linear-gradient(
            180deg,
            rgba(50, 80, 255, 0.05) 0%,
            #3b6aff 50%,
            rgba(50, 80, 255, 0.05) 100%
          );
          border-radius: 2px;
          flex-shrink: 0;
        }

        .mc-value {
          font-size: 48px;
          font-weight: 800;
          color: ${isDarkMode ? '#ffffff' : '#191A15'};
          line-height: 1.15;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .mc-label {
          font-size: 15px;
          font-weight: 500;
          color: ${isDarkMode ? '#7a7f9d' : '#626262'};
          letter-spacing: 0.01em;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .mc-card {
            padding: 40px 48px 40px;
          }

          .mc-title {
            font-size: 26px;
            margin-bottom: 36px;
          }

          .mc-value {
            font-size: 40px;
          }

          .mc-item {
            padding: 0 20px;
          }
        }

        /* Mobile Large */
        @media (max-width: 768px) {
          .mc-card {
            padding: 32px 28px 32px;
            border-radius: 16px;
          }

          .mc-title {
            font-size: 24px;
            margin-bottom: 32px;
          }

          .mc-grid {
            flex-wrap: wrap;
            gap: 24px;
          }

          .mc-item {
            flex: 1 1 calc(50% - 12px);
            padding: 0 !important;
            text-align: center;
          }

          .mc-divider {
            display: none;
          }

          .mc-value {
            font-size: 36px;
          }

          .mc-label {
            font-size: 14px;
          }
        }

        /* Mobile Medium */
        @media (max-width: 480px) {
          .mc-card {
            padding: 28px 20px 28px;
          }

          .mc-title {
            font-size: 22px;
            margin-bottom: 28px;
          }

          .mc-grid {
            flex-direction: column;
            gap: 28px;
          }

          .mc-item {
            flex: 1 1 100%;
            width: 100%;
          }

          .mc-value {
            font-size: 40px;
          }

          .mc-label {
            font-size: 13px;
          }
        }

        /* Mobile Small */
        @media (max-width: 350px) {
          .mc-card {
            padding: 24px 16px 24px;
            border-radius: 12px;
          }

          .mc-title {
            font-size: 20px;
            margin-bottom: 24px;
          }

          .mc-grid {
            gap: 24px;
          }

          .mc-value {
            font-size: 36px;
          }

          .mc-label {
            font-size: 12px;
          }
        }

        /* Hide decorative wave lines on mobile */
        @media (max-width: 768px) {
          .wave-lines-svg {
            display: none;
          }
        }
      `}</style>

      <div className="mc-card">
        <WaveLines />
        <div className="mc-title">Performance &amp; Impact Metrics</div>
        <div className="mc-grid">
          {metrics.map((m, i) => (
            <div key={`group-${i}`} style={{ display: 'contents' }}>
              {i > 0 && <div className="mc-divider" />}
              <div
                className="mc-item"
                style={{
                  animation: visible
                    ? `fadeUp 0.6s ${200 + i * 100}ms cubic-bezier(0.16, 1, 0.3, 1) both`
                    : "none",
                  opacity: visible ? undefined : 0,
                }}
              >
                <div className="mc-value">
                  {visible ? <AnimatedValue target={m.value} /> : "0"}
                </div>
                <div className="mc-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Full Page Composition ─── */
export default function TransformationalBenefits() {
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
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      <div style={{
        minHeight: "100vh",
        background: isDarkMode ? "#0B1B3D" : "#f8fafc",
        paddingBottom: "clamp(32px, 5vw, 64px)",
      }}>
        <HeroHeader isDarkMode={isDarkMode} />
        <FeatureCards isDarkMode={isDarkMode} />
      </div>
    </>
  );
}