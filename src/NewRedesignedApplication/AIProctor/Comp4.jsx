import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <bolt />
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Full Automation",
    description: "Zero human intervention from start to finish",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Advanced Fraud Detection",
    description: "Multi-layered AI algorithms identify cheating patterns",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Unlimited Scalability",
    description: "Monitor thousands of exams simultaneously",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
        <path d="M7 7h.01" />
      </svg>
    ),
    title: "Seamless Integrations",
    description: "Connect with any LMS, HRMS, or ATS platform",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "White Label Ready",
    description: "Brand the platform with your own identity",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Enterprise Security",
    description: "SOC 2, GDPR compliant with end-to-end encryption",
  },
];

function useInView(threshold = 0.15) {
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

function FeatureCard({ feature, index, inView }) {
  return (
    <div
      className="feature-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
    >
      <div className="icon-wrapper">
        {feature.icon}
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.description}</p>
    </div>
  );
}

export default function KeyFeatures() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [sectionRef, inView] = useInView(0.1);
  const [headerRef, headerInView] = useInView(0.2);

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

        .kf-section {
          background: ${isDarkMode ? '#0A0F1E' : '#f5f5f7'};
          padding: 96px 24px;
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kf-inner {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
        }

        .kf-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .kf-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: ${isDarkMode ? '#F1F5F9' : '#111'};
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .kf-subtitle {
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          color: ${isDarkMode ? '#94A3B8' : '#6e6e73'};
          font-weight: 400;
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto;
          transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
        }

        .kf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature-card {
          background: ${isDarkMode ? '#1A2445' : '#fff'};
          border-radius: 18px;
          padding: 32px 28px 30px;
          border: 1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
          cursor: default;
          will-change: transform, opacity;
          position: relative;
          overflow: hidden;
        }

        .feature-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 18px;
          box-shadow: 0 0 0 0 ${isDarkMode ? 'rgba(255,255,255,0)' : 'rgba(0,0,0,0)'};
          transition: box-shadow 0.3s ease;
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-4px) !important;
          transition: opacity 0.55s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        }

        .feature-card:hover::after {
          box-shadow: ${isDarkMode ? '0 12px 40px rgba(0,0,0,0.3)' : '0 12px 40px rgba(0,0,0,0.1)'};
        }

        .icon-wrapper {
          width: 52px;
          height: 52px;
          background: #FCDE53;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          color: #1a1a1a;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.08) rotate(-3deg);
        }

        .feature-title {
          font-size: 1rem;
          font-weight: 700;
          color: ${isDarkMode ? '#F1F5F9' : '#111'};
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .feature-desc {
          font-size: 0.9rem;
          color: ${isDarkMode ? '#94A3B8' : '#6e6e73'};
          line-height: 1.6;
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .kf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .kf-section {
            padding: 72px 20px;
          }
        }

        @media (max-width: 560px) {
          .kf-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .kf-section {
            padding: 56px 16px;
          }
          .kf-header {
            margin-bottom: 44px;
          }
          .feature-card {
            padding: 26px 22px 24px;
          }
        }
      `}</style>

      <section className="kf-section" aria-labelledby="features-heading">
        <div className="kf-inner">
          <header
            className="kf-header"
            ref={headerRef}
          >
            <h2
              id="features-heading"
              className="kf-title"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Key Features
            </h2>
            <p
              className="kf-subtitle"
              style={{
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              Everything you need to deliver secure, scalable online assessments
            </p>
          </header>

          <div className="kf-grid" ref={sectionRef} role="list">
            {features.map((feature, i) => (
              <div key={feature.title} role="listitem">
                <FeatureCard feature={feature} index={i} inView={inView} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}