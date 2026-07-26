import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ─── Utility: useInView hook ───────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// ─── Particle grid background ──────────────────────────────────────────────
function ParticleGrid() {
  return (
    <div aria-hidden="true" style={styles.particleGrid}>
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={i}
          style={{
            ...styles.dot,
            animationDelay: `${(i * 0.13) % 4}s`,
            opacity: Math.random() * 0.25 + 0.05,
          }}
        />
      ))}
    </div>
  );
}

// ─── Animated noise overlay ────────────────────────────────────────────────
function NoiseOverlay() {
  return <div aria-hidden="true" style={styles.noise} />;
}

// ─── Main CTA Section ─────────────────────────────────────────────────────
export default function DatanixCTA() {
  const [sectionRef, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState(null);

  function handleButtonClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: Date.now() });
    setTimeout(() => setRipple(null), 600);
  }

  return (
    <>
      <style>{css}</style>
      <section
        ref={sectionRef}
        style={styles.section}
        aria-labelledby="cta-heading"
      >
        {/* Content */}
        <div style={styles.inner}>
          {/* Headline */}
          <h2
            id="cta-heading"
            className={`cta-headline${inView ? " cta-visible" : ""}`}
            style={{ ...styles.headline, transitionDelay: "120ms" }}
          >
            Ready to Harness Your Data Power?
          </h2>

          {/* Body copy */}
          <p
            className={`cta-body${inView ? " cta-visible" : ""}`}
            style={{ ...styles.body, transitionDelay: "240ms", color: "#DBEAFE" }}
          >
            Join thousands of organizations worldwide who transform massive
            datasets into actionable insights with DATANIX — the trusted
            platform for data-driven decisions and organizational success.
          </p>

          {/* CTA Button */}
          <div
            className={`cta-btn-wrap${inView ? " cta-visible" : ""}`}
            style={{ ...styles.btnWrap, transitionDelay: "360ms" }}
          >
            <Link
              to="/contact"
              style={{
                ...styles.btn,
                ...(hovered ? styles.btnHover : {}),
                backgroundColor: "#FCDE53",
                textDecoration: "none",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={handleButtonClick}
              aria-label="Get in touch with the Datanix team"
            >
              {/* Ripple */}
              {ripple && (
                <span
                  key={ripple.key}
                  className="ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                  }}
                />
              )}

              <span style={styles.btnText}>Get in Touch</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────
const TEAL = "#0d3d4f";
const TEAL_DEEP = "#032E43";
const YELLOW = "#f5d130";
const YELLOW_DARK = "#d4b020";
const WHITE = "#ffffff";
const WHITE_DIM = "#ffffff";
const WHITE_FAINT = "rgba(255,255,255,0.08)";

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    overflowX: "hidden",
    backgroundColor: TEAL_DEEP,
    minHeight: "420px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(48px, 10vw, 96px) clamp(16px, 5vw, 24px)",
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  },
  gradientOrb1: {
    position: "absolute",
    top: "-120px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "700px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(ellipse, rgba(15,90,115,0.55) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  gradientOrb2: {
    position: "absolute",
    bottom: "-80px",
    left: "20%",
    width: "400px",
    height: "300px",
    borderRadius: "50%",
    background:
      "radial-gradient(ellipse, rgba(245,209,48,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
    opacity: 0.025,
    pointerEvents: "none",
    zIndex: 1,
  },
  particleGrid: {
    position: "absolute",
    inset: 0,
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    pointerEvents: "none",
    zIndex: 1,
    padding: "20px",
    gap: "0px",
  },
  dot: {
    width: "2px",
    height: "2px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.35)",
    placeSelf: "center",
    animation: "dotPulse 4s ease-in-out infinite",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "760px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0px",
    padding: "0 clamp(8px, 3vw, 16px)",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: YELLOW,
    marginBottom: "24px",
    opacity: 0,
    padding: "6px 14px",
    border: `1px solid rgba(245,209,48,0.25)`,
    borderRadius: "100px",
    backdropFilter: "blur(6px)",
    background: "rgba(245,209,48,0.07)",
  },
  eyebrowDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: YELLOW,
    display: "inline-block",
    boxShadow: `0 0 8px ${YELLOW}`,
  },
  headline: {
    margin: "0 0 clamp(16px, 3vw, 24px)",
    fontSize: "clamp(1rem, 5vw, 3.25rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    color: WHITE,
    opacity: 0,
    textAlign: "center",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    hyphens: "auto",
    maxWidth: "100%",
    whiteSpace: "normal",
    boxSizing: "border-box",
    width: "100%",
  },
  body: {
    margin: "0 0 clamp(28px, 5vw, 40px)",
    fontSize: "clamp(0.75rem, 2vw, 1.075rem)",
    lineHeight: 1.75,
    color: "#DBEAFE",
    maxWidth: "100%",
    padding: "0 clamp(8px, 2vw, 16px)",
    opacity: 0,
    textAlign: "center",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    boxSizing: "border-box",
    width: "100%",
  },
  brand: {
    color: WHITE,
    fontWeight: 700,
  },
  btnWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    marginBottom: "clamp(40px, 8vw, 56px)",
    opacity: 0,
    width: "100%",
  },
  btn: {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "clamp(12px, 2vw, 15px) clamp(24px, 5vw, 36px)",
    borderRadius: "100px",
    backgroundColor: "#FCDE53",
    border: "none",
    cursor: "pointer",
    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
    fontWeight: 700,
    letterSpacing: "0.01em",
    color: TEAL_DEEP,
    boxShadow: `0 4px 24px rgba(252,222,83,0.3), 0 1px 3px rgba(0,0,0,0.2)`,
    transition:
      "background-color 0.22s ease, box-shadow 0.22s ease, transform 0.18s ease",
    outline: "none",
    fontFamily: "inherit",
    width: "auto",
    maxWidth: "100%",
  },
  btnHover: {
    backgroundColor: "#fde68a",
    boxShadow: `0 8px 36px rgba(252,222,83,0.45), 0 2px 6px rgba(0,0,0,0.2)`,
    transform: "translateY(-2px)",
  },
  btnText: {
    position: "relative",
    zIndex: 1,
  },
  arrow: {
    position: "relative",
    zIndex: 1,
    transition: "transform 0.22s ease",
    flexShrink: 0,
  },
  secondaryLink: {
    fontSize: "0.875rem",
    color: WHITE_DIM,
    textDecoration: "none",
    letterSpacing: "0.01em",
    transition: "color 0.18s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
  proof: {
    display: "flex",
    gap: "0px",
    borderTop: `1px solid ${WHITE_FAINT}`,
    paddingTop: "32px",
    width: "100%",
    justifyContent: "center",
    opacity: 0,
  },
  proofItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    flex: "1",
    padding: "0 24px",
    borderRight: `1px solid ${WHITE_FAINT}`,
    ":last-child": { borderRight: "none" },
  },
  proofStat: {
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
    fontWeight: 700,
    color: WHITE,
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  proofLabel: {
    fontSize: "0.78rem",
    fontWeight: 500,
    color: WHITE_DIM,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
};

// ─── CSS animations ────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

  /* Entrance animation base */
  .cta-eyebrow,
  .cta-headline,
  .cta-body,
  .cta-btn-wrap,
  .cta-proof {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }

  .cta-eyebrow.cta-visible,
  .cta-headline.cta-visible,
  .cta-body.cta-visible,
  .cta-btn-wrap.cta-visible,
  .cta-proof.cta-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* Ripple effect */
  .ripple {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
    transform: translate(-50%, -50%) scale(0);
    animation: rippleAnim 0.6s ease-out forwards;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes rippleAnim {
    to {
      transform: translate(-50%, -50%) scale(60);
      opacity: 0;
    }
  }

  /* Dot pulse */
  @keyframes dotPulse {
    0%, 100% { opacity: 0.05; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.6); }
  }

  /* Proof item border fix */
  [style*="flex: 1"]:last-child {
    border-right: none !important;
  }

  /* Secondary link hover */
  a[style*="WHITE_DIM"]:hover,
  section a:hover {
    color: rgba(255,255,255,0.9) !important;
  }

  /* Tablet responsive */
  @media (max-width: 768px) {
    section {
      padding: 80px 24px !important;
      min-height: 380px !important;
    }
    .cta-headline {
      font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
      line-height: 1.2 !important;
    }
    .cta-body {
      font-size: clamp(0.9rem, 2.5vw, 1rem) !important;
      margin-bottom: 32px !important;
    }
  }

  /* Mobile responsive */
  @media (max-width: 600px) {
    section {
      padding: 60px 20px !important;
      min-height: 320px !important;
    }
    .cta-headline {
      font-size: clamp(1.5rem, 7vw, 2rem) !important;
      margin-bottom: 16px !important;
    }
    .cta-body {
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
      margin-bottom: 28px !important;
    }
    [style*="gap: 0px"][style*="borderTop"] {
      flex-direction: column;
      gap: 24px !important;
    }
    [style*="gap: 0px"][style*="borderTop"] > div {
      border-right: none !important;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding-bottom: 24px !important;
    }
    [style*="gap: 0px"][style*="borderTop"] > div:last-child {
      border-bottom: none !important;
    }
  }

  @media (max-width: 500px) {
    section {
      padding: 48px 12px !important;
      overflow-x: hidden !important;
    }
    .cta-headline {
      font-size: 1.2rem !important;
      line-height: 1.35 !important;
      word-wrap: break-word !important;
      overflow-wrap: break-word !important;
      hyphens: auto !important;
      max-width: 100% !important;
      letter-spacing: 0 !important;
      white-space: normal !important;
      padding: 0 8px !important;
    }
    .cta-body {
      font-size: 0.9rem !important;
    }
    .cta-btn-wrap {
      margin-bottom: 40px !important;
    }
    [style*="padding: 15px 36px"] {
      padding: 12px 24px !important;
      width: 100%;
      justify-content: center;
      font-size: 0.9rem !important;
    }
  }

  @media (max-width: 400px) {
    section {
      padding: 40px 10px !important;
    }
    .cta-headline {
      font-size: 1.1rem !important;
      line-height: 1.4 !important;
      word-wrap: break-word !important;
      overflow-wrap: break-word !important;
      hyphens: auto !important;
      padding: 0 6px !important;
      letter-spacing: 0 !important;
    }
    .cta-body {
      font-size: 0.85rem !important;
      padding: 0 6px !important;
    }
  }

  @media (max-width: 360px) {
    section {
      padding: 36px 8px !important;
    }
    .cta-headline {
      font-size: 1rem !important;
      line-height: 1.45 !important;
      padding: 0 4px !important;
    }
    .cta-body {
      font-size: 0.8rem !important;
      padding: 0 4px !important;
    }
  }

  @media (max-width: 320px) {
    .cta-headline {
      font-size: 0.95rem !important;
      line-height: 1.5 !important;
    }
    .cta-body {
      font-size: 0.75rem !important;
    }
  }
`;