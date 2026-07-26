import { useEffect, useState } from "react";
import CarrierIcon from "../../../Assets/NewMile/Intro/Carrier.svg";
import CompleteIcon from "../../../Assets/NewMile/Intro/Complete.svg";
import AiEnabledIcon from "../../../Assets/NewMile/Intro/AiEnabled.svg";
import MILELearningEnvironment from "../../../Assets/NewMile/Intro/MILELearningEnvironment.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .mile-page {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff;
    padding: 32px 24px;
    max-width: 100%;
    margin: 0 auto;
    transition: background 0.3s ease;
  }

  .mile-page.dark-mode {
    background: #000000;
  }

  /* ── SECTION 1: What is MILE ── */
  .mile-s1 {
    background: #f0f2f5;
    border-radius: 20px;
    padding: 60px 56px;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 32px;
    align-items: start;
    margin-bottom: 32px;
    transition: background 0.3s ease;
  }

  .mile-page.dark-mode .mile-s1 {
    background: #000000;
  }

  .mile-left {}

  .mile-badge {
    display: inline-block;
    background: #fff3ed;
    color: #c0440f;
    font-family: 'Sora', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 50px;
    margin-bottom: 20px;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .mile-page.dark-mode .mile-badge {
    background: #2a1f10;
    color: #e8a045;
  }

  .mile-headline {
    font-family: 'Sora', sans-serif;
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 800;
    color: #515F74;
    line-height: 1.1;
    margin-bottom: 18px;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-headline {
    color: #FFFFFF;
  }

  .mile-body {
    font-size: 17px;
    color: #5a6678;
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 280px;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-body {
    color: #9aa3b0;
  }

  .mile-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: 1.5px solid #d0d5dd;
    border-radius: 50px;
    padding: 11px 20px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 500;
    color: #0d1b2a;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, color 0.3s ease;
  }

  .mile-page.dark-mode .mile-link-btn {
    color: #FFFFFF;
    border-color: #2a3a4a;
  }

  .mile-link-btn:hover {
    border-color: #f15a22;
    background: #fff8f5;
  }

  .mile-page.dark-mode .mile-link-btn:hover {
    border-color: #f15a22;
    background: rgba(241,90,34,0.1);
  }

  .mile-link-btn .arrow {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #0d1b2a;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .mile-page.dark-mode .mile-link-btn .arrow {
    background: #1D242D;
    color: #FFFFFF;
  }

  /* Right cards stack */
  .mile-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .mile-top-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .mile-card-sm {
    background: #ffffff;
    border-radius: 16px;
    padding: 22px 20px;
    transition: transform 0.2s, box-shadow 0.2s, background 0.3s ease;
  }

  .mile-page.dark-mode .mile-card-sm {
    background: #1D242D;
  }

  .mile-card-sm:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }

  .mile-page.dark-mode .mile-card-sm:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .mile-card-sm-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .mile-card-icon {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mile-card-icon img {
    width: 28px;
    height: 28px;
  }

  .mile-card-num {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #d0d5dd;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-card-num {
    color: #2a3a4a;
  }

  .mile-card-title {
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0d1b2a;
    margin-bottom: 8px;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-card-title {
    color: #FFFFFF;
  }

  .mile-card-desc {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-card-desc {
    color: #9aa3b0;
  }

  /* Dark featured card */
  .mile-card-dark {
    background: #0d1b2a;
    border-radius: 16px;
    padding: 24px 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .mile-page.dark-mode .mile-card-dark {
    background: #1D242D;
  }

  .mile-card-dark-left {}

  .mile-card-dark-top {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .mile-q-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f15a22;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 16px;
    color: #fff;
    flex-shrink: 0;
  }

  .mile-ai-tag {
    background: rgba(255,255,255,0.1);
    color: #ffffff;
    font-family: 'Sora', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 50px;
  }

  .mile-avatar-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .mile-avatar-title svg {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .mile-dark-title {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
  }

  .mile-dark-desc {
    font-size: 16px;
    color: #9aa3b0;
    line-height: 1.6;
    max-width: 300px;
  }

  /* MILE circle badge */
  .mile-circle-badge {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #f15a22;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #ffffff;
    flex-shrink: 0;
    position: relative;
    letter-spacing: 0.04em;
  }

  .mile-circle-ring {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255,255,255,0.25);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* ── SECTION 2: Ecosystem ── */
  .mile-s2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .mile-eco-card {
    background: transparent;
    border-radius: 20px;
    padding: 0;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    position: relative;
    overflow: hidden;
  }

  .mile-eco-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  .mile-eco-right {}

  .mile-eco-title {
    font-family: 'Sora', sans-serif;
    font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 800;
    color: #515F74;
    margin-bottom: 18px;
    line-height: 1.15;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-eco-title {
    color: #FFFFFF;
  }

  .mile-eco-body {
    font-size: 14px;
    color: #5a6678;
    line-height: 1.75;
    margin-bottom: 28px;
    transition: color 0.3s ease;
  }

  .mile-page.dark-mode .mile-eco-body {
    color: #9aa3b0;
  }

  .mile-eco-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .mile-btn-primary {
    background: #f15a22;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 13px 26px;
    font-family: 'Sora', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }

  .mile-btn-primary:hover {
    background: #d94d18;
    transform: scale(1.03);
  }

  .mile-btn-outline {
    background: transparent;
    color: #0d1b2a;
    border: 1.5px solid #d0d5dd;
    border-radius: 50px;
    padding: 13px 26px;
    font-family: 'Sora', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, color 0.3s ease;
  }

  .mile-page.dark-mode .mile-btn-outline {
    color: #FFFFFF;
    border-color: #2a3a4a;
  }

  .mile-btn-outline:hover {
    border-color: #0d1b2a;
    background: #f5f6f8;
  }

  .mile-page.dark-mode .mile-btn-outline:hover {
    border-color: #FFFFFF;
    background: rgba(255,255,255,0.05);
  }

  @media (max-width: 1000px) {
    .mile-circle-badge { width: 90px; height: 90px; font-size: 18px; }
    .mile-circle-ring { width: 130px; height: 130px; }
  }

  @media (max-width: 1024px) {
    .mile-s1 {
      grid-template-columns: 1fr;
      padding: 40px 28px;
    }
    .mile-s2 { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .mile-page { padding: 24px 16px; }
    .mile-s1 { padding: 32px 20px; }
    .mile-top-cards { grid-template-columns: 1fr; }
    .mile-card-dark {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 28px 20px;
    }
    .mile-card-dark-left { width: 100%; }
    .mile-avatar-title { justify-content: center; }
    .mile-dark-desc { max-width: 100%; }
    .mile-headline { font-size: 32px; }
    .mile-body { max-width: 100%; }
    .mile-eco-title { font-size: 28px; }
    .mile-eco-card { min-height: 220px; }
  }

  @media (max-width: 480px) {
    .mile-s1 { padding: 24px 16px; gap: 24px; }
    .mile-headline { font-size: 26px; }
    .mile-body { font-size: 15px; }
    .mile-card-sm { padding: 18px 16px; }
    .mile-card-title { font-size: 17px; }
    .mile-card-desc { font-size: 14px; }
    .mile-dark-title { font-size: 18px; }
    .mile-dark-desc { font-size: 14px; }
    .mile-circle-badge { width: 90px; height: 90px; font-size: 18px; }
    .mile-circle-ring { width: 130px; height: 130px; }
    .mile-eco-title { font-size: 24px; }
    .mile-eco-body { font-size: 13px; }
  }
`;


export default function MileSection() {
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
      <style>{styles}</style>
      <div className={`mile-page ${isDarkMode ? 'dark-mode' : ''}`}>

        {/* ── SECTION 1 ── */}
        <div className="mile-s1">
          {/* Left */}
          <div className="mile-left">
            <div className="mile-badge">Methodology</div>
            <h1 className="mile-headline">What is MILE?</h1>
            <p className="mile-body">
              MILE is a solution which is integrated with direct feedback from the education ecosystem to present personalized offerings through <span className="arrow">→</span>
            </p>
            {/* <button className="mile-link-btn">
              <span className="arrow">→</span>
              Explore the framework
            </button> */}
          </div>

          {/* Right */}
          <div className="mile-right">
            {/* Top two white cards */}
            <div className="mile-top-cards">
              {/* Card 1 */}
              <div className="mile-card-sm">
                <div className="mile-card-sm-header">
                  <div className="mile-card-icon"><img src={CarrierIcon} alt="Career" /></div>
                  <span className="mile-card-num">01</span>
                </div>
                <div className="mile-card-title">Career &amp; Future Readiness</div>
                <div className="mile-card-desc">Expert-led capability building designed for tomorrow's workforce.</div>
              </div>

              {/* Card 2 */}
              <div className="mile-card-sm">
                <div className="mile-card-sm-header">
                  <div className="mile-card-icon"><img src={CompleteIcon} alt="Complete" /></div>
                  <span className="mile-card-num">02</span>
                </div>
                <div className="mile-card-title">Complete Experience</div>
                <div className="mile-card-desc">Immersive industry exposure and real-world applied learning.</div>
              </div>
            </div>

            {/* Dark featured card */}
            <div className="mile-card-dark">
              <div className="mile-card-dark-left">
                <div className="mile-card-dark-top">
                  <div className="mile-card-icon"><img src={AiEnabledIcon} alt="AI Enabled" /></div>
                  <span className="mile-ai-tag">AI-Enabled</span>
                </div>
                <div className="mile-avatar-title">
                  <div className="mile-dark-title">Command, Communicate<br />with Conviction</div>
                </div>
                <p className="mile-dark-desc">
                  Harnessing advanced learning support systems to build authentic presence and authoritative communication skills.
                </p>
              </div>

              {/* Circle badge */}
              <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="mile-circle-ring" />
                <div className="mile-circle-badge">MILE</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Ecosystem ── */}
        <div className="mile-s2">
          {/* Left dark card */}
          <div className="mile-eco-card">
            <img src={MILELearningEnvironment} alt="MILE Learning Environment" className="mile-eco-img" />
          </div>

          {/* Right text */}
          <div className="mile-eco-right">
            <h2 className="mile-eco-title">The Ecosystem Approach</h2>
            <p className="mile-eco-body">
              By decentralizing traditional education, MILE connects industry experts directly with learners. This 360-degree feedback loop ensures that every skill acquired is immediately applicable in high-stakes professional environments.
            </p>
            {/* <div className="mile-eco-actions">
              <button className="mile-btn-primary">View Methodology</button>
              <button className="mile-btn-outline">Download Brochure</button>
            </div> */}
          </div>
        </div>

      </div>
    </>
  );
}