import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import harvardImage from "../../Assets/SAAS/harvard.jpg";

// ─── Inline styles via CSS-in-JS approach ───────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .hvd-root {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff;
    color: #1a1a1a;
    padding: 80px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  /* ── Section Label ── */
  .hvd-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 16px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .hvd-eyebrow.visible { opacity: 1; transform: translateY(0); }

  /* ── Heading ── */
  .hvd-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: #111;
    text-align: center;
    margin-bottom: 56px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
  }
  .hvd-heading.visible { opacity: 1; transform: translateY(0); }

  /* ── Card wrapper ── */
  .hvd-card {
    width: 100%;
    max-width: 1100px;
    border: 1px solid #e8e8e4;
    border-radius: 20px;
    padding: 52px 48px 48px;
    background: #fff;
    box-shadow: 0 2px 24px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
  }
  .hvd-card.visible { opacity: 1; transform: translateY(0); }

  /* ── Logo ── */
  .hvd-logo-wrap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #e8e0d4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }
  .hvd-logo-wrap:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  }
  .hvd-logo-wrap img { width: 100%; height: 100%; object-fit: contain; padding: 8px; }

  /* ── Quote title ── */
  .hvd-quote-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1rem, 2.4vw, 1.175rem);
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    line-height: 1.5;
    max-width: 580px;
  }

  /* ── Body copy ── */
  .hvd-body {
    font-size: 0.9rem;
    font-weight: 400;
    color: #666;
    text-align: center;
    line-height: 1.75;
    max-width: 640px;
  }

  /* ── Divider ── */
  .hvd-divider {
    width: 100%;
    height: 1px;
    background: #f0ede8;
  }

  /* ── Stats row ── */
  .hvd-stats {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  /* ── Stat card ── */
  .hvd-stat {
    background: #fefcf5;
    border-radius: 14px;
    padding: 28px 20px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    cursor: default;
  }
  .hvd-stat:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.08);
    background: #fffdf0;
  }

  /* ── Icon bubble ── */
  .hvd-icon-bubble {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f0c84a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  .hvd-stat:hover .hvd-icon-bubble { transform: scale(1.1) rotate(-5deg); }

  .hvd-icon-bubble svg {
    width: 22px;
    height: 22px;
    stroke: #000000;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hvd-stat-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.3;
  }

  .hvd-stat-desc {
    font-size: 0.775rem;
    color: #888;
    line-height: 1.6;
    max-width: 160px;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .hvd-root { padding: 56px 16px; }
    .hvd-card { padding: 36px 24px 32px; gap: 24px; }
    .hvd-stats { grid-template-columns: 1fr; max-width: 320px; margin: 0 auto; }
  }

  @media (max-width: 420px) {
    .hvd-stats { max-width: 100%; }
  }
`;

// ─── Icons ──────────────────────────────────────────────────────────────────
const IconRefresh = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    <line x1="12" y1="6" x2="16" y2="6" />
    <line x1="12" y1="10" x2="16" y2="10" />
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ─── Subcomponents ───────────────────────────────────────────────────────────
const StatCard = ({ icon, title, description, delay = 0, isDarkMode }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hvd-stat"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        background: isDarkMode ? "#FDB925" : "#FFFCEB",
      }}
    >
      <div
        className="hvd-icon-bubble"
        style={{
          background: isDarkMode ? "#FFFFFF" : "#F4DC58",
        }}
      >
        {icon}
      </div>
      <div
        className="hvd-stat-title"
        style={{
          color: isDarkMode ? "#000000" : "#1a1a1a",
        }}
      >
        {title}
      </div>
      <div
        className="hvd-stat-desc"
        style={{
          color: isDarkMode ? "#000000" : "#888",
        }}
      >
        {description}
      </div>
    </div>
  );
};

// ─── Hook: scroll-triggered visibility ───────────────────────────────────────
function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HarvardResearchSection() {
  const [eyebrowRef, eyebrowVisible] = useVisible();
  const [headingRef, headingVisible] = useVisible();
  const [cardRef, cardVisible] = useVisible(0.1);
  const isDarkMode = useTheme();

  return (
    <>
      <style>{css}</style>
      <section
        className="hvd-root"
        aria-labelledby="hvd-title"
        style={{
          background: isDarkMode ? "#0C1437" : "#ffffff",
        }}
      >

        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className={`hvd-eyebrow${eyebrowVisible ? " visible" : ""}`}
          style={{
            color: isDarkMode ? "#9ca3af" : "#888",
          }}
        >
          Research
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          id="hvd-title"
          className={`hvd-heading${headingVisible ? " visible" : ""}`}
          style={{
            color: isDarkMode ? "#FFFFFF" : "#111",
          }}
        >
          What Harvard Says
        </h2>

        {/* Card */}
        <article
          ref={cardRef}
          className={`hvd-card${cardVisible ? " visible" : ""}`}
          aria-label="Harvard Business School research summary"
          style={{
            background: isDarkMode ? "#1a1f3a" : "#fff",
            border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e8e8e4",
          }}
        >
          {/* Logo */}
          <div className="hvd-logo-wrap" aria-hidden="true">
            <img src={harvardImage} alt="Harvard" />
          </div>

          {/* Quote title */}
          <h3
            className="hvd-quote-title"
            style={{
              color: isDarkMode ? "#FFFFFF" : "#1a1a1a",
            }}
          >
            "Harvard Research: Continuous Learning Drives Talent and Organizational Growth"
          </h3>

          {/* Body */}
          <p
            className="hvd-body"
            style={{
              color: isDarkMode ? "#DDDDDD" : "#666",
            }}
          >
            Organizations that invest in continuous learning gain measurable improvements in productivity,
            engagement, and innovation. Harvard Business School's research confirms that a strong focus
            on talent development provides a competitive advantage, helping teams stay adaptable and
            enabling organizations to thrive in an ever-evolving landscape. Companies with a
            learning-centric culture consistently outperform their peers across all key performance metrics.
          </p>

          <div
            className="hvd-divider"
            aria-hidden="true"
            style={{
              background: isDarkMode ? "rgba(255,255,255,0.1)" : "#f0ede8",
            }}
          />

          {/* Stats */}
          <div className="hvd-stats" role="list" aria-label="Key research findings">
            <StatCard
              icon={<IconRefresh />}
              title="+17% Productivity Growth"
              description="Companies with strategic learning cultures outperform their competitors."
              delay={0}
              isDarkMode={isDarkMode}
            />
            <StatCard
              icon={<IconBook />}
              title="Higher Retention & Engagement"
              description="Learning programs integrated into work lead to stronger employee loyalty."
              delay={0.12}
              isDarkMode={isDarkMode}
            />
            <StatCard
              icon={<IconZap />}
              title="Agility & Innovation"
              description="Organizations that embrace learning develop future-ready teams."
              delay={0.24}
              isDarkMode={isDarkMode}
            />
          </div>
        </article>

      </section>
    </>
  );
}