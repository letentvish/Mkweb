import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import frame53 from "../../Assets/Frame53.jpg";
import frame54 from "../../Assets/Frame54.jpg";
import frame247 from "../../Assets/Frame247.jpg";

const FeatureCard = ({ imageSrc, title, description, index, isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150 * index);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <style>{`
        .feature-card {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? "translateY(0)" : "translateY(24px)"};
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px ${isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.1)"};
        }

        .feature-card-image-wrapper {
          border-radius: 1rem;
          overflow: hidden;
          background: ${isDarkMode ? "#1a2332" : "#EFFBF9"};
          aspect-ratio: 1 / 0.85;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin-bottom: 24px;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-card-image-wrapper {
          transform: scale(1.02);
        }

        .feature-card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-card-image {
          transform: scale(1.05);
        }

        .feature-card-content {
          padding: 0 16px;
        }

        .feature-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 30px;
          font-weight: 600;
          color: ${isDarkMode ? "#ffffff" : "#191A15"};
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .feature-card-description {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          color: ${isDarkMode ? "#cbd5e1" : "#A6A6A6"};
          font-weight: 400;
          line-height: 1.65;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .feature-card-title {
            font-size: 26px;
          }

          .feature-card-description {
            font-size: 16px;
          }

          .feature-card-content {
            padding: 0 12px;
          }
        }

        /* Mobile Large */
        @media (max-width: 768px) {
          .feature-card-image-wrapper {
            margin-bottom: 20px;
          }

          .feature-card-title {
            font-size: 24px;
          }

          .feature-card-description {
            font-size: 15px;
          }
        }

        /* Mobile Medium */
        @media (max-width: 480px) {
          .feature-card-image-wrapper {
            margin-bottom: 16px;
          }

          .feature-card-title {
            font-size: 22px;
            margin-bottom: 8px;
          }

          .feature-card-description {
            font-size: 14px;
            line-height: 1.6;
          }

          .feature-card-content {
            padding: 0 8px;
          }
        }

        /* Mobile Small */
        @media (max-width: 350px) {
          .feature-card-image-wrapper {
            margin-bottom: 12px;
          }

          .feature-card-title {
            font-size: 20px;
          }

          .feature-card-description {
            font-size: 13px;
          }

          .feature-card-content {
            padding: 0 4px;
          }
        }
      `}</style>
      <div ref={ref} className="feature-card">
        <div className="feature-card-image-wrapper">
          <img
            src={imageSrc}
            alt={title}
            className="feature-card-image"
          />
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title">
            {title}
          </h3>
          <p className="feature-card-description">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

const features = [
  {
    imageSrc: frame247,
    title: "Real-time Data Visualization",
    description:
      "Transform complex datasets into interactive dashboards with real-time analytics and dynamic visualizations for instant insights.",
  },
  {
    imageSrc: frame53,
    title: "Cloud-Native Architecture",
    description:
      "Built on AWS infrastructure for unlimited scalability, enterprise security, and 99.9% uptime reliability for your critical data operations.",
  },
  {
    imageSrc: frame54,
    title: "ML-Powered Analytics",
    description:
      "Leverage advanced machine learning algorithms to uncover patterns, predict trends, and generate actionable insights from your data.",
  },
];

export default function CoreFeatures() {
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
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
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

        .core-features-container {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: ${isDarkMode ? "#0B1B3D" : "#ffffff"};
          padding: 2rem 3rem;
        }

        .core-features-header {
          text-align: center;
          margin-bottom: clamp(32px, 5vw, 56px);
        }

        .core-features-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: ${isDarkMode ? "#ffffff" : "#111"};
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .core-features-description {
          font-size: clamp(0.85rem, 1.3vw, 0.95rem);
          color: ${isDarkMode ? "#cbd5e1" : "#6b7280"};
          line-height: 1.65;
          margin: 0 auto 24px;
          max-width: 600px;
        }

        .core-features-cta {
          background: linear-gradient(90deg, #FCDE53, #FFE066, #FCDE53, #FFE066);
          background-size: 300% 100%;
          border: none;
          border-radius: 999px;
          padding: 12px 28px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #271526;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 8px rgba(240,224,64,0.3);
          animation: gradientShift 3s ease infinite;
        }

        .core-features-cta:hover {
          transform: scale(1.04) translateY(-2px);
          box-shadow: 0 4px 16px rgba(240,224,64,0.45);
          animation: gradientShift 1.5s ease infinite;
        }

        .core-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .core-features-container {
            padding: 2rem 2rem;
          }

          .core-features-grid {
            grid-template-columns: repeat(2, minmax(280px, 400px));
            gap: 2.5rem;
            justify-content: center;
          }
        }

        /* Tablet Small - Better card sizing */
        @media (max-width: 900px) {
          .core-features-grid {
            grid-template-columns: repeat(2, minmax(260px, 360px));
            gap: 2rem;
          }
        }

        /* Mobile Large */
        @media (max-width: 768px) {
          .core-features-container {
            padding: 2rem 1.5rem;
          }

          .core-features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 500px;
            margin: 0 auto;
          }

          .core-features-header {
            margin-bottom: 40px;
          }
        }

        /* Mobile Large - Smaller cards */
        @media (max-width: 600px) {
          .core-features-grid {
            max-width: 450px;
          }
        }

        /* Mobile Medium */
        @media (max-width: 480px) {
          .core-features-container {
            padding: 1.5rem 1.25rem;
          }

          .core-features-title {
            font-size: 1.5rem;
          }

          .core-features-description {
            font-size: 0.875rem;
          }

          .core-features-grid {
            gap: 1.5rem;
          }
        }

        /* Mobile Small */
        @media (max-width: 350px) {
          .core-features-container {
            padding: 1.25rem 1rem;
          }

          .core-features-title {
            font-size: 1.375rem;
          }

          .core-features-description {
            font-size: 0.8125rem;
            line-height: 1.6;
          }

          .core-features-header {
            margin-bottom: 32px;
          }
        }
      `}</style>
      <div className="core-features-container">
        {/* Header */}
        <div className="core-features-header">
          <h1 className="core-features-title">
            Core Features
          </h1>
          <p className="core-features-description">
            We offer a variety of interesting features that you can help increase your
            productivity at work and manage your project easily.
          </p>
         
        </div>

        {/* Feature Cards Grid */}
        <div className="core-features-grid">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              index={i}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </>
  );
}