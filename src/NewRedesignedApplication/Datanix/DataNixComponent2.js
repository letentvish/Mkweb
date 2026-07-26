import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "1",
    title: "Real-time Analytics",
    description:
      "Advanced data processing engines that transform raw datasets into interactive visualizations and actionable insights in real-time.",
  },
  {
    number: "2",
    title: "Machine Learning",
    description:
      "Intelligent algorithms that automatically discover patterns, predict trends, and provide recommendations for optimal business decisions.",
  },
  {
    number: "3",
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade AWS infrastructure providing unlimited scalability, robust security, and reliable performance for mission-critical operations.",
  },
];

export default function DatanixSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    check();
    window.addEventListener("resize", check);

    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => {
      window.removeEventListener("resize", check);
      observer.disconnect();
    };
  }, []);

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&family=Roboto:wght@400;500;700;900&display=swap');

  .datanix-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: ${isDarkMode ? '#0B1B3D' : '#fafaf8'};
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 80px 0;
    box-sizing: border-box;
  }

  .datanix-container {
    width: 100%;
    padding: 2rem 3rem;
  }

  .datanix-header {
   width: 100%;
   padding: 2rem 3rem;
    margin-bottom: 3rem;
    z-index: 2;
  }

  .datanix-title {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 800;
    color: ${isDarkMode ? '#ffffff' : '#000000'};
    margin: 0 0 16px 0;
    line-height: 1.15;
    letter-spacing: -0.5px;
  }

  .datanix-subtitle {
    font-size: 15px;
    color: ${isDarkMode ? '#cbd5e1' : '#64607D'};
    line-height: 1.7;
    margin: 0 0 28px 0;
    max-width: 360px;
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

  .datanix-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: #FCDE53;
    background-size: 300% 100%;
    color: #271526;
    border: none;
    border-radius: 50px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(255, 224, 102, 0.4);
    animation: gradientShift 3s ease infinite;
  }

  .datanix-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(255, 224, 102, 0.5);
    animation: gradientShift 1.5s ease infinite;
  }

  .datanix-timeline-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    margin-top: 20px;
  }

  .datanix-curve-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  .datanix-curve-path {
    fill: none;
    stroke: ${isDarkMode ? '#1e40af' : '#032E43'};
    stroke-width: 8;
    stroke-linecap: round;
    filter: drop-shadow(0px 24px 24px rgba(55, 52, 169, ${isDarkMode ? '0.5' : '0.3'}));
  }

  /* Each step-box is absolutely positioned on the curve */
  .datanix-step-box {
    position: absolute;
    z-index: 2;
    background: none;
    box-shadow: none;
    padding: 0;
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 320px;
    overflow: visible;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .datanix-step-box:hover {
    transform: translateY(-8px);
  }

  .datanix-step-box:hover .datanix-step-dot {
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(252, 222, 83, 0.4);
  }

  .datanix-step-box:hover .datanix-step-number {
    opacity: ${isDarkMode ? '0.5' : '0.5'};
  }

  /* Position each box so the dot sits on the curve line */
  .datanix-step-box:nth-child(1) {
    left: 2%;
    top : 110%;
    transform: translateY(-50%);
  }

  .datanix-step-box:nth-child(2) {
    left: 35%;
    top: 90%;
    transform: translateY(-50%);
  }

  .datanix-step-box:nth-child(3) {
    left: 70%;
    top: 45%;
    transform: translateY(-50%);
  }

  .datanix-step-dot {
    width: 18px;
    height: 18px;
    background: #FCDE53;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    flex-shrink: 0;
    margin-bottom: 14px;
    margin-left: 30%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .datanix-step-content {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .datanix-step-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: ${isDarkMode ? '#ffffff' : '#000000'};
    margin: 0 0 8px 0;
    letter-spacing: -0.2px;
  }

  .datanix-step-desc {
    font-size: 16px;
    color: ${isDarkMode ? '#cbd5e1' : '#64607D'};
    line-height: 1.7;
    margin: 0;
    max-width: 280px;
  }

  .datanix-step-number {
    font-family: 'Roboto', sans-serif;
    font-size: 140px;
    font-weight: 900;
    color: ${isDarkMode ? '#60a5fa' : '#9DD9D2'};
    line-height: 1;
    position: absolute;
    z-index: 0;
    pointer-events: none;
    user-select: none;
    left: 70%;
    top: 0;
    transform: translateX(-50%);
    opacity: ${isDarkMode ? '0.3' : '0.35'};
    transition: opacity 0.3s ease;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .datanix-container {
      padding: 0 30px;
    }

    .datanix-title {
      font-size: 36px;
    }

    .datanix-curve-svg {
      display: none;
    }

    .datanix-timeline-wrapper {
      height: auto;
      margin-top: 40px;
    }

    .datanix-steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .datanix-step-box {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .datanix-step-dot {
      margin-left: 0;
      margin-bottom: 14px;
    }

    .datanix-step-content {
      text-align: center;
    }

    .datanix-step-title {
      text-align: center;
    }

    .datanix-step-desc {
      text-align: center;
      max-width: 100%;
    }

    .datanix-step-number {
      font-size: 90px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .datanix-section {
      padding: 0 0;
    }

    .datanix-header {
      max-width: 100%;
      margin-bottom: 50px;
    }

    .datanix-title {
      font-size: 32px;
    }

    .datanix-timeline-wrapper {
      height: auto;
    }

    .datanix-curve-svg {
      display: none;
    }

    .datanix-steps-mobile {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .datanix-step-box {
      position: relative;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 100%;
      flex-direction: row;
      gap: 20px;
      align-items: flex-start;
    }

    .datanix-step-dot {
      margin-bottom: 0;
      margin-top: 4px;
    }

    .datanix-step-number {
      font-size: 80px;
      left: 70%;
      top: 0;
      transform: translateX(-50%);
      opacity: 0.35;
    }

    .datanix-step-desc {
      max-width: 100%;
    }

    .datanix-step-connector {
      display: block;
      position: absolute;
      left: 8px;
      top: 26px;
      bottom: -40px;
      width: 3px;
      background: linear-gradient(to bottom, #1a2a3a, rgba(26, 42, 58, 0.2));
      border-radius: 2px;
    }

    .datanix-step-box:last-child .datanix-step-connector {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .datanix-container {
      padding: 0 20px;
    }

    .datanix-title {
      font-size: 28px;
    }

    .datanix-subtitle {
      font-size: 14px;
    }

    .datanix-step-number {
      font-size: 60px;
      left: 70%;
      top: 0;
      transform: translateX(-50%);
      opacity: 0.3;
    }

    .datanix-cta {
      padding: 12px 28px;
      font-size: 14px;
    }
  }

  @media (max-width: 350px) {
    .datanix-container {
      padding: 0 16px;
    }

    .datanix-title {
      font-size: 24px;
    }

    .datanix-step-title {
      font-size: 18px;
    }

    .datanix-step-desc {
      font-size: 14px;
    }

    .datanix-step-number {
      font-size: 50px;
      left: 70%;
      top: 0;
      transform: translateX(-50%);
      opacity: 0.3;
    }
  }
`;

  return (
    <>
      <style>{styles}</style>
      <section className="datanix-section">
        <div className="datanix-container">
          <div className="datanix-header">
            <h2 className="datanix-title">What is DATANIX?</h2>
            <p className="datanix-subtitle">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy.
            </p>


            <div className="datanix-timeline-wrapper">
            {!isMobile && !isTablet && (
              <svg
                className="datanix-curve-svg"
                viewBox="0 0 1200 500"
                preserveAspectRatio="none"
              >
                <path
                  className="datanix-curve-path"
                  d="M 100 450 C 280 500, 380 240, 540 340 C 700 440, 850 50, 960 125"
                />
              </svg>
            )}

            <div className={isMobile ? "datanix-steps-mobile" : isTablet ? "datanix-steps-grid" : ""}>
              {steps.map((step, index) => (
                <div className="datanix-step-box" key={step.number}>
                  <div className="datanix-step-dot" />
                  {isMobile && <div className="datanix-step-connector" />}
                  <div className="datanix-step-content">
                    <h3 className="datanix-step-title">{step.title}</h3>
                    <p className="datanix-step-desc">{step.description}</p>
                  </div>
                  <span className="datanix-step-number">{step.number}</span>
                </div>
              ))}
            </div>
          </div>
          </div>

          
        </div>
      </section>
    </>
  );
}