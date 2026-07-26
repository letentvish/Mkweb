import { useEffect, useState } from "react";
import MentorshipIcon from "../../../Assets/NewMile/KeyDiff/Metorship.svg";
import AiIntegratedIcon from "../../../Assets/NewMile/KeyDiff/AiIntegrated.svg";
import IndustryImg from "../../../Assets/NewMile/KeyDiff/Industry.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .km-wrapper {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff;
    min-height: 100vh;
    padding: 60px 40px;
    max-width: 100%;
    margin: 0 auto;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode {
    background: #000000;
  }

  .km-eyebrow {
    font-family: 'Sora', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f15a22;
    margin-bottom: 18px;
  }

  .km-header-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  .km-headline {
    font-family: 'Sora', sans-serif;
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 800;
    color: #0d1b2a;
    line-height: 1.15;
    max-width: 720px;
    transition: color 0.3s ease;
  }

  .km-wrapper.dark-mode .km-headline {
    color: #FFFFFF;
  }

  .km-divider {
    width: 64px;
    height: 3px;
    background: #f15a22;
    margin-top: 16px;
    flex-shrink: 0;
    align-self: center;
  }

  .km-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .km-grid.row-1 {
    grid-template-columns: 1fr 3fr;
  }

  .km-grid.row-2 {
    grid-template-columns: 4fr 3fr;
  }

  .km-card {
    background: #f5f6f8;
    border-radius: 16px;
    padding: 32px 28px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
    cursor: default;
  }

  .km-wrapper.dark-mode .km-card {
    background: #1D242D;
  }

  .km-card.card-1 { background: #FFFFFF; }
  .km-card.card-2 { background: #F2F4F6; }
  .km-card.card-3 { background: #D5E3FC4D; }
  .km-card.card-4 { background: #E0E3E566; }

  .km-wrapper.dark-mode .km-card.card-1,
  .km-wrapper.dark-mode .km-card.card-2,
  .km-wrapper.dark-mode .km-card.card-3,
  .km-wrapper.dark-mode .km-card.card-4 {
    background: #1D242D;
  }

  .km-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  }

  .km-wrapper.dark-mode .km-card:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  }

  .km-card.featured {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .km-card.peach-icon .km-icon-wrap {
    background: #FFDBCE;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-card.peach-icon .km-icon-wrap {
    background: #2a1f10;
  }

  .km-card.peach-icon .km-icon-wrap svg {
    color: #FF5C00;
  }

  .km-card.orange-icon .km-icon-wrap {
    background: #FF5C00;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-card.orange-icon .km-icon-wrap {
    background: #FF5C00;
  }

  .km-card.blue-icon .km-icon-wrap {
    background: #DAE2FD;
  }

  .km-wrapper.dark-mode .km-card.blue-icon .km-icon-wrap {
    background: #252B45;
  }

  .km-card.white-icon .km-icon-wrap {
    background: #FFFFFF;
  }

  .km-wrapper.dark-mode .km-card.white-icon .km-icon-wrap {
    background: #1D242D;
  }

  .km-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #edeef5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-bottom: 20px;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-icon-wrap {
    background: #252B45;
  }

  .km-icon-wrap svg {
    width: 20px;
    height: 20px;
    color: #6b7280;
    transition: color 0.3s ease;
  }

  .km-wrapper.dark-mode .km-icon-wrap svg {
    color: #9aa3b0;
  }

  .km-card-title {
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0d1b2a;
    margin-bottom: 10px;
    transition: color 0.3s ease;
  }

  .km-wrapper.dark-mode .km-card-title {
    color: #FFFFFF;
  }

  .km-card-desc {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  .km-wrapper.dark-mode .km-card-desc {
    color: #9aa3b0;
  }

  .km-card-text {
    flex: 1;
  }

  .km-card-image {
    width: 120px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    flex-shrink: 0;
    background: #c9d4e0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-card-image {
    background: #2a3a4a;
  }

  .km-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Meeting room placeholder */
  .km-room-placeholder {
    width: 120px;
    height: 100px;
    border-radius: 12px;
    background: linear-gradient(135deg, #c9cdd4 0%, #a8b0bc 100%);
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-room-placeholder {
    background: linear-gradient(135deg, #2a3a4a 0%, #1D242D 100%);
  }

  .km-room-placeholder::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: rgba(0,0,0,0.15);
  }

  .km-bottom-banner {
    background: #0d1b2a;
    border-radius: 16px;
    padding: 36px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 0;
    transition: background 0.3s ease;
  }

  .km-wrapper.dark-mode .km-bottom-banner {
    background: #1D242D;
  }

  .km-banner-text {
    flex: 1;
  }

  .km-banner-text h3 {
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .km-banner-text p {
    font-size: 13.5px;
    color: #9aa3b0;
    line-height: 1.6;
  }

  .km-cta-btn {
    background: #f15a22;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    padding: 14px 28px;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .km-cta-btn:hover {
    background: #d94d18;
    transform: scale(1.03);
  }

  @media (max-width: 1024px) {
    .km-grid.row-1,
    .km-grid.row-2 {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .km-wrapper { padding: 40px 24px; }
    .km-grid,
    .km-grid.row-1,
    .km-grid.row-2 {
      grid-template-columns: 1fr;
    }
    .km-header-row {
      flex-direction: column;
      gap: 16px;
    }
    .km-headline { max-width: 100%; font-size: 32px; }
    .km-bottom-banner {
      flex-direction: column;
      align-items: flex-start;
    }
    .km-card.featured {
      flex-direction: column;
    }
    .km-room-placeholder {
      width: 100%;
      height: 180px;
    }
    .km-card-title { font-size: 18px; }
    .km-card-desc { font-size: 14px; }
  }

  @media (max-width: 480px) {
    .km-wrapper { padding: 32px 16px; }
    .km-headline { font-size: 26px; }
    .km-card { padding: 24px 20px; }
    .km-card-title { font-size: 17px; }
    .km-card-desc { font-size: 13px; }
    .km-banner-text h3 { font-size: 18px; }
    .km-banner-text p { font-size: 12.5px; }
    .km-bottom-banner { padding: 28px 24px; }
  }
`;

// SVG Icons
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

export default function KineticMile() {
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
      <div className={`km-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="km-eyebrow">Why Kinetic Mile</div>

        <div className="km-header-row">
          <h1 className="km-headline">
            The Editorial Vanguard<br />of Professional Growth.
          </h1>
          <div className="km-divider" />
        </div>

        {/* Top row */}
        <div className="km-grid row-1" style={{ marginBottom: 16 }}>
          {/* Card 1: Impact-Led */}
          <div className="km-card peach-icon card-1">
            <div className="km-icon-wrap">
              <BoltIcon />
            </div>
            <div className="km-card-title">Impact-Led</div>
            <div className="km-card-desc">
              Actionable strategies designed to deliver measurable results in real-world scenarios.
            </div>
          </div>

          {/* Card 2: Real Industry Practitioners */}
          <div className="km-card featured blue-icon card-2">
            <div className="km-card-text">
              <div className="km-icon-wrap">
                <BriefcaseIcon style={{ color: '#565E74' }} />
              </div>
              <div className="km-card-title">Real Industry Practitioners</div>
              <div className="km-card-desc">
                Learn from veterans who are currently shaping the landscape of global industries.
              </div>
            </div>
            <div className="km-room-placeholder">
              <img src={IndustryImg} alt="Real Industry" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="km-grid row-2" style={{ marginBottom: 16 }}>
          {/* Card 3: 1:1 Mentorship */}
          <div className="km-card white-icon card-3">
            <div className="km-icon-wrap">
              <img src={MentorshipIcon} alt="Mentorship" style={{ width: 24, height: 24, filter: 'brightness(0) saturate(100%) invert(57%) sepia(11%) saturate(574%) hue-rotate(179deg) brightness(93%) contrast(87%)' }} />
            </div>
            <div className="km-card-title">1:1 Mentorship &amp; Coaching</div>
            <div className="km-card-desc">
              Personalized guidance from experts who help you navigate your unique career challenges.
            </div>
          </div>

          {/* Card 4: AI Integrated */}
          <div className="km-card orange-icon card-4">
            <div className="km-icon-wrap">
              <img src={AiIntegratedIcon} alt="AI Integrated" style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="km-card-title">AI Integrated Personalised Pathways</div>
            <div className="km-card-desc">
              Smart algorithms that adapt your learning journey in real-time based on your progress and goals.
            </div>
          </div>
        </div>

        {/* Bottom Dark Banner */}
        <div className="km-bottom-banner">
          <div className="km-banner-text">
            <h3>Long-Term Holistic Development</h3>
            <p>
              We don't just teach skills; we nurture the mindset, health, and strategic thinking required for lifelong mastery.
            </p>
          </div>
          <button className="km-cta-btn">Explore the Pathway</button>
        </div>
      </div>
    </>
  );
}