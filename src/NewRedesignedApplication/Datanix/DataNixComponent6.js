import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DatanixCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const navigate = useNavigate();

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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@300;400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .dnix-cta-section {
          background-color: ${isDarkMode ? '#032E43' : '#f0f9ff'};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 40px;
          min-height: 380px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dnix-cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(ellipse at 50% 50%, rgba(20, 80, 110, 0.3) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .dnix-cta-heading {
          color: ${isDarkMode ? '#ffffff' : '#032E43'};
          font-size: 48px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .dnix-cta-description {
          color: ${isDarkMode ? '#DBEAFE' : '#475569'};
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          max-width: 680px;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .dnix-cta-button {
          font-family: 'Source Sans 3', sans-serif;
          background: linear-gradient(90deg, #FCDE53, #FFE066, #FCDE53, #FFE066);
          background-size: 300% 100%;
          color: #000000;
          border: none;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 16px rgba(242, 210, 78, 0.25);
          animation: gradientShift 3s ease infinite;
        }

        .dnix-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(242, 210, 78, 0.35);
          animation: gradientShift 1.5s ease infinite;
        }

        .dnix-cta-button:active {
          transform: translateY(0);
        }

        /* Responsive: Tablet */
        @media (max-width: 768px) {
          .dnix-cta-section {
            padding: 60px 30px;
            min-height: 320px;
          }

          .dnix-cta-heading {
            font-size: 36px;
            margin-bottom: 20px;
          }

          .dnix-cta-description {
            font-size: 15px;
            max-width: 520px;
            margin-bottom: 32px;
          }
        }

        /* Responsive: Small mobile down to 350px */
        @media (max-width: 480px) {
          .dnix-cta-section {
            padding: 48px 20px;
            min-height: 280px;
          }

          .dnix-cta-heading {
            font-size: 26px;
            margin-bottom: 16px;
          }

          .dnix-cta-description {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 28px;
            max-width: 100%;
          }

          .dnix-cta-button {
            padding: 12px 28px;
            font-size: 14px;
          }
        }

        @media (max-width: 350px) {
          .dnix-cta-section {
            padding: 40px 16px;
          }

          .dnix-cta-heading {
            font-size: 22px;
            margin-bottom: 14px;
          }

          .dnix-cta-description {
            font-size: 13px;
            line-height: 1.55;
            margin-bottom: 24px;
          }

          .dnix-cta-button {
            padding: 11px 24px;
            font-size: 13px;
          }
        }
      `}</style>

      <section className="dnix-cta-section">
        <h2 className="dnix-cta-heading">Ready to Harness Your Data Power?</h2>
        <p className="dnix-cta-description">
          Join thousands of organizations worldwide who transform massive datasets
          into actionable insights with DATANIX for data-driven decisions and
          organizational success. Trust our platform for their learning needs.
        </p>
        <button
          className="dnix-cta-button"
          onClick={() => navigate('/contact')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default DatanixCTA;