import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

/* ─────────────────────────────────────────────
   Keyframe styles injected once
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-deep:      #0b1c2c;
    --bg-mid:       #0f2d44;
    --bg-teal:      #0d3d4f;
    --accent-gold:  #f5d848;
    --accent-gold-hover: #ffe566;
    --text-primary: #ffffff;
    --text-muted:   rgba(255,255,255,0.55);
    --border-light: rgba(255,255,255,0.18);
    --font-display: 'Sora', sans-serif;
    --font-body:    'Inter', sans-serif;
  }

  /* ── Gradient mesh background ── */
  .cta-root {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 320px;
    padding: 88px 24px 96px;
    overflow: hidden;
    font-family: var(--font-body);
    background: radial-gradient(ellipse 90% 120% at 70% 50%, #0d4a5e 0%, #0b2a40 45%, #081820 100%);
  }

  /* subtle noise grain */
  .cta-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
    z-index: 0;
  }

  /* glowing teal orb right side */
  .cta-root::after {
    content: '';
    position: absolute;
    right: -8%;
    top: 50%;
    transform: translateY(-50%);
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(20,140,160,0.22) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* secondary dim orb left */
  .cta-orb-left {
    position: absolute;
    left: -5%;
    top: 50%;
    transform: translateY(-50%);
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(15,80,110,0.18) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .cta-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 760px;
    width: 100%;
    gap: 0;
  }

  /* ── Heading ── */
  .cta-heading {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.18;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  .cta-heading.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Sub-text ── */
  .cta-sub {
    font-size: clamp(0.95rem, 2.2vw, 1.05rem);
    font-weight: 400;
    color: var(--text-muted);
    line-height: 1.65;
    max-width: 560px;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.7s 0.12s cubic-bezier(.22,1,.36,1), transform 0.7s 0.12s cubic-bezier(.22,1,.36,1);
  }
  .cta-sub.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Button row ── */
  .cta-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 28px;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.7s 0.22s cubic-bezier(.22,1,.36,1), transform 0.7s 0.22s cubic-bezier(.22,1,.36,1);
  }
  .cta-buttons.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Primary — gold pill */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 32px;
    border-radius: 999px;
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 600;
    color: #1a1400;
    background: var(--accent-gold);
    border: none;
    cursor: pointer;
    transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
    box-shadow: 0 4px 20px rgba(245,216,72,0.28);
    letter-spacing: 0.01em;
    white-space: nowrap;
    text-decoration: none;
  }
  .btn-primary:hover {
    background: var(--accent-gold-hover);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 32px rgba(245,216,72,0.38);
  }
  .btn-primary:active { transform: translateY(0) scale(0.98); }

  /* Secondary — ghost outlined */
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 30px;
    border-radius: 999px;
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
    background: transparent;
    border: 1.5px solid var(--border-light);
    cursor: pointer;
    transition: border-color 0.22s ease, background 0.22s ease, transform 0.18s ease;
    white-space: nowrap;
    text-decoration: none;
    letter-spacing: 0.01em;
    backdrop-filter: blur(4px);
  }
  .btn-secondary:hover {
    border-color: rgba(255,255,255,0.45);
    background: rgba(255,255,255,0.06);
    transform: translateY(-2px);
  }
  .btn-secondary:active { transform: translateY(0); }

  .btn-secondary .arrow {
    display: inline-flex;
    align-items: center;
    transition: transform 0.22s ease;
  }
  .btn-secondary:hover .arrow { transform: translateX(4px); }

  /* ── Fine print ── */
  .cta-fine {
    font-size: 0.8rem;
    color: var(--text-muted);
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0;
    transition: opacity 0.7s 0.34s cubic-bezier(.22,1,.36,1);
  }
  .cta-fine.visible { opacity: 1; }

  .cta-fine .dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--text-muted);
    flex-shrink: 0;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .cta-root { padding: 72px 20px 80px; }
    .cta-buttons { flex-direction: column; align-items: center; width: 100%; }
    .btn-primary, .btn-secondary { width: 100%; max-width: 320px; justify-content: center; }
    .cta-fine { flex-wrap: wrap; justify-content: center; gap: 8px 6px; }
  }
`;

function injectStyles(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}

/* ─────────────────────────────────────────────
   Arrow icon
───────────────────────────────────────────── */
function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main CTA Section Component
───────────────────────────────────────────── */
export default function CTASection({
  heading = "Ready to Transform Your Learning Experience?",
  subtext = "Join thousands of organizations worldwide who trust our platform for their learning needs.",
  primaryLabel = "Get Started",
  primaryHref = "#get-started",
  secondaryLabel = "Watch Demo for free",
  secondaryHref = "#demo",
  finePrint = ["Cancel anytime"],
}) {
  injectStyles("cta-section-styles", STYLES);

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isDarkMode = useTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="cta-root"
      ref={ref}
      aria-label="Call to action"
      style={{
        background: isDarkMode
          ? "#0C1437"
          : "radial-gradient(ellipse 90% 120% at 70% 50%, #0d4a5e 0%, #0b2a40 45%, #081820 100%)"
      }}
    >
      <div className="cta-orb-left" aria-hidden="true" />

      <div className="cta-inner">
        <h2 className={`cta-heading${visible ? " visible" : ""}`}>
          {heading}
        </h2>

        <p className={`cta-sub${visible ? " visible" : ""}`}>
          {subtext}
        </p>

        <div className={`cta-buttons${visible ? " visible" : ""}`} role="group" aria-label="Primary actions">
          <Link to="/contact" className="btn-primary">
            {primaryLabel}
          </Link>
          {/* <Link to="/contact" className="btn-secondary">
            {secondaryLabel}
            <span className="arrow"><ArrowRight /></span>
          </Link> */}
        </div>

      </div>
    </section>
  );
}