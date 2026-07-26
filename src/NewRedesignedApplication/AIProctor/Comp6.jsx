import { useEffect, useRef, useState } from "react";

const INTEGRATIONS_ROW1 = ["Moodle", "SAP", "Canvas", "Blackboard", "Workday"];
const INTEGRATIONS_ROW2 = ["SAP", "Greenhouse"];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function IntegrationPill({ label, index, inView }) {
  return (
    <span
      className="pill"
      role="listitem"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        transition: `opacity 0.5s ease ${0.15 + index * 0.05}s, transform 0.5s cubic-bezier(0.34,1.4,0.64,1) ${0.15 + index * 0.05}s`,
      }}
    >
      {label}
    </span>
  );
}

export default function IntegrationsSection() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [sectionRef, inView] = useInView(0.05);

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .int-outer {
          background: ${isDarkMode ? '#0A0F1E' : '#f5f5f7'};
          padding: 40px 24px;
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .int-card {
          background: ${isDarkMode ? '#0d2b3e' : '#fff'};
          border-radius: 24px;
          padding: 56px 40px 52px;
          max-width: 1040px;
          width: 100%;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
        }

        /* subtle noise texture overlay */
        .int-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: 24px;
          opacity: 0.35;
        }

        .int-heading {
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          font-weight: 700;
          color: ${isDarkMode ? '#ffffff' : '#111'};
          letter-spacing: -0.025em;
          line-height: 1.2;
          margin-bottom: 10px;
          position: relative;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .int-subheading {
          font-size: clamp(0.85rem, 1.3vw, 0.95rem);
          color: ${isDarkMode ? 'rgba(255,255,255,0.52)' : '#6e6e73'};
          font-weight: 400;
          margin-bottom: 40px;
          position: relative;
          transition: opacity 0.5s ease 0.08s, transform 0.5s ease 0.08s;
        }

        .pills-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
          position: relative;
        }

        .pills-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FCDE53;
          color: #1a1200;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 10px 26px;
          border-radius: 999px;
          cursor: default;
          white-space: nowrap;
          will-change: transform, opacity;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, opacity 0.5s ease;
          letter-spacing: 0.01em;
        }

        .pill:hover {
          transform: translateY(-3px) scale(1.04) !important;
          box-shadow: 0 8px 24px rgba(252,222,83,0.35);
        }

        .int-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid ${isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
          border-radius: 999px;
          padding: 13px 28px;
          color: ${isDarkMode ? 'rgba(255,255,255,0.85)' : '#111'};
          font-family: 'Manrope', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
          transition-property: opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s;
        }

        .int-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: ${isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.03)'};
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 999px;
        }

        .int-cta:hover {
          border-color: ${isDarkMode ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.4)'};
          color: ${isDarkMode ? '#fff' : '#000'};
          transform: translateY(-2px);
          box-shadow: ${isDarkMode ? '0 6px 20px rgba(0,0,0,0.25)' : '0 6px 20px rgba(0,0,0,0.1)'};
        }

        .int-cta:hover::before {
          opacity: 1;
        }

        .int-cta:active {
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .int-card {
            padding: 44px 24px 40px;
            border-radius: 18px;
          }
          .int-subheading {
            margin-bottom: 32px;
          }
          .pill {
            font-size: 0.83rem;
            padding: 9px 20px;
          }
        }
      `}</style>

      <section className="int-outer" aria-labelledby="integrations-heading">
        <div
          className="int-card"
          ref={sectionRef}
        >
          <h2
            id="integrations-heading"
            className="int-heading"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
            }}
          >
            Works with your LMS / HRMS / ATS
          </h2>
          <p
            className="int-subheading"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Seamless integration with leading platforms
          </p>

          <div className="pills-container" role="list" aria-label="Supported integrations">
            <div className="pills-row">
              {INTEGRATIONS_ROW1.map((label, i) => (
                <IntegrationPill key={`${label}-${i}`} label={label} index={i} inView={inView} />
              ))}
            </div>
            <div className="pills-row">
              {INTEGRATIONS_ROW2.map((label, i) => (
                <IntegrationPill
                  key={`${label}-r2-${i}`}
                  label={label}
                  index={INTEGRATIONS_ROW1.length + i}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          <div>
            <button
              className="int-cta"
              aria-label="Learn about REST API, webhooks, and SSO integrations"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.55s ease ${0.15 + (INTEGRATIONS_ROW1.length + INTEGRATIONS_ROW2.length) * 0.05 + 0.1}s, transform 0.55s ease ${0.15 + (INTEGRATIONS_ROW1.length + INTEGRATIONS_ROW2.length) * 0.05 + 0.1}s`,
              }}
            >
              + many more via REST API, webhooks, and SSO
            </button>
          </div>
        </div>
      </section>
    </>
  );
}