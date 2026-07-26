import { useState, useEffect, useRef } from "react";

const getStyles = (isDarkMode) => `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue-deep: #2B35CF;
    --blue-mid: #3D4FE8;
    --blue-light: #5B6BF5;
    --blue-bg: #3749E5;
    --yellow: #F5C518;
    --yellow-hover: #FFCF2D;
    --white: #FFFFFF;
    --white-70: rgba(255,255,255,0.70);
    --white-30: rgba(255,255,255,0.30);
    --white-15: rgba(255,255,255,0.15);
    --white-08: rgba(255,255,255,0.08);
    --pill-bg: rgba(255,255,255,0.12);
    --pill-border: rgba(255,255,255,0.25);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #0f1535;
    min-height: 100vh;
  }

  .hero {
    position: relative;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 80px 24px 60px;
  }

  /* ── Layered background ── */
  .hero-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, #4A5AFF 0%, #3142E8 40%, #1E2BB5 70%, #0e1540 100%);
    z-index: 0;
  }

  /* Grid texture overlay */
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
    background-size: 48px 48px;
    z-index: 1;
    mask-image: radial-gradient(ellipse 85% 70% at 50% 30%, black 40%, transparent 100%);
  }

  /* Ambient glow blobs */
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 1;
    animation: blobFloat 8s ease-in-out infinite alternate;
  }
  .blob-1 {
    width: 500px; height: 500px;
    background: rgba(100, 120, 255, 0.25);
    top: -100px; left: -80px;
    animation-delay: 0s;
  }
  .blob-2 {
    width: 400px; height: 400px;
    background: rgba(80, 60, 220, 0.20);
    bottom: -80px; right: -60px;
    animation-delay: -4s;
  }
  .blob-3 {
    width: 300px; height: 300px;
    background: rgba(140, 160, 255, 0.15);
    top: 40%; left: 60%;
    animation-delay: -2s;
  }

  @keyframes blobFloat {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(20px, -30px) scale(1.05); }
  }

  /* ── Content ── */
  .hero-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 820px;
    gap: 0;
  }

  /* Pill badge */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 999px;
    padding: 8px 18px;
    margin-bottom: 36px;
    backdrop-filter: blur(12px);
    opacity: 0;
    transform: translateY(-10px);
    animation: fadeSlideDown 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
  }
  .badge-icon {
    width: 18px; height: 18px;
    display: grid; place-items: center;
  }
  .badge-icon svg { width: 14px; height: 14px; }
  .badge-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }
  .badge-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.30), transparent);
    width: 100px;
    margin: 0 4px;
  }

  /* Headline */
  .headline {
    font-family: 'Sora', sans-serif;
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 800;
    line-height: 1.15;
    color: #FFFFFF;
    letter-spacing: -0.02em;
    margin-bottom: 44px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s forwards;
  }

  /* CTA row */
  .cta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 44px;
    opacity: 0;
    transform: translateY(16px);
    animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s forwards;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--yellow);
    color: #1a1a1a;
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 700;
    padding: 14px 36px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(245,197,24,0.35);
    text-decoration: none;
    min-width: 160px;
  }
  .btn-primary:hover {
    background: var(--yellow-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(245,197,24,0.50);
  }
  .btn-primary:active { transform: translateY(0); }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #FFFFFF;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 13px 28px;
    border-radius: 999px;
    border: 1.5px solid rgba(255,255,255,0.30);
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
    text-decoration: none;
    backdrop-filter: blur(8px);
  }
  .btn-secondary:hover {
    border-color: rgba(255,255,255,0.65);
    background: rgba(255,255,255,0.08);
    transform: translateY(-2px);
  }
  .btn-secondary:active { transform: translateY(0); }

  .arrow-icon {
    display: inline-flex;
    transition: transform 0.2s;
  }
  .btn-secondary:hover .arrow-icon { transform: translateX(3px); }

  /* Feature pills */
  .feature-list {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    transform: translateY(12px);
    animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.75s forwards;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
  }

  .check-icon {
    width: 28px; height: 28px;
    border-radius: 8px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.18);
    display: grid;
    place-items: center;
    flex-shrink: 0;
    backdrop-filter: blur(6px);
    transition: background 0.2s, transform 0.2s;
  }
  .feature-item:hover .check-icon {
    background: rgba(255,255,255,0.22);
    transform: scale(1.08);
  }
  .check-icon svg { width: 13px; height: 13px; }

  /* Divider between features */
  .feature-divider {
    width: 1px;
    height: 16px;
    background: rgba(255,255,255,0.30);
  }

  /* ── Keyframes ── */
  @keyframes fadeSlideDown {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideUp {
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .hero { padding: 64px 20px 48px; }
    .badge-line { display: none; }
    .cta-row { flex-direction: column; width: 100%; }
    .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
    .feature-divider { display: none; }
    .feature-list { gap: 12px; }
    .badge { margin-bottom: 28px; }
    .headline { margin-bottom: 36px; }
  }

  @media (max-width: 400px) {
    .hero {
      padding: 48px 16px 40px;
      min-height: auto;
    }

    .badge {
      padding: 6px 14px;
      margin-bottom: 24px;
      font-size: 11px;
    }

    .badge-text {
      font-size: 11px;
      max-width: 280px;
      text-align: center;
    }

    .badge-icon {
      width: 16px;
      height: 16px;
    }

    .badge-icon svg {
      width: 12px;
      height: 12px;
    }

    .headline {
      font-size: clamp(24px, 6vw, 28px);
      margin-bottom: 28px;
      line-height: 1.2;
    }

    .cta-row {
      gap: 12px;
      margin-bottom: 32px;
    }

    .btn-primary {
      font-size: 14px;
      padding: 12px 28px;
      min-width: auto;
    }

    .btn-secondary {
      font-size: 14px;
      padding: 11px 24px;
    }

    .feature-list {
      flex-direction: column;
      gap: 10px;
      width: 100%;
      align-items: flex-start;
    }

    .feature-item {
      font-size: 13px;
      width: 100%;
    }

    .check-icon {
      width: 24px;
      height: 24px;
    }

    .check-icon svg {
      width: 11px;
      height: 11px;
    }

    .blob-1 {
      width: 350px;
      height: 350px;
    }

    .blob-2 {
      width: 300px;
      height: 300px;
    }

    .blob-3 {
      width: 200px;
      height: 200px;
    }
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 7L5 10L11 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.9"/>
    <rect x="8.5" y="1" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.9"/>
    <rect x="1" y="8.5" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.9"/>
    <rect x="8.5" y="8.5" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.9"/>
  </svg>
);

const features = [
  { label: "Time-saving" },
  { label: "Team-ready features" },
  { label: "Easy to start" },
];

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const styles = getStyles(isDarkMode);

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
      <style>{styles}</style>
      <section className="hero" aria-label="Hero">
        {/* Layered background */}
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="blob blob-1" aria-hidden="true" />
        <div className="blob blob-2" aria-hidden="true" />
        <div className="blob blob-3" aria-hidden="true" />

        <div className="hero-content">
          {/* Badge */}
          <div className="badge" role="note">
            <div className="badge-line" />
            <span className="badge-icon"><GridIcon /></span>
            <span className="badge-text">Ready to Scale Your Assessments With AI?</span>
            <div className="badge-line" />
          </div>

          {/* Headline */}
          <h1 className="headline">
            Join leading institutions and enterprises using AI Proctor to deliver secure, scalable exams with zero human intervention.
          </h1>


          {/* Feature list */}
          <div className="feature-list" role="list">
            {features.map((f, i) => (
              <>
                {i > 0 && <div className="feature-divider" key={`div-${i}`} aria-hidden="true" />}
                <div className="feature-item" role="listitem" key={f.label}>
                  <div className="check-icon" aria-hidden="true">
                    <CheckIcon />
                  </div>
                  <span>{f.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}