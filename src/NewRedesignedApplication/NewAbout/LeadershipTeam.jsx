import { useState, useEffect, useRef } from 'react';
import image1 from "../../Assets/FacuilityImages/PallaviSingh.png";
import image2 from "../../Assets/FacuilityImages/BonoshreeMukherjee.png";
import image5 from "../../Assets/FacuilityImages/AnjuChawla.png";
import image6 from "../../Assets/FacuilityImages/MarkWallace.png";
import image7 from "../../Assets/FacuilityImages/DhanrajDadhich.png";
import image8 from "../../Assets/FacuilityImages/JCShukla.png";
import image10 from "../../Assets/FacuilityImages/SandeepBhattacharya.png";
import image11 from "../../Assets/FacuilityImages/Sreekumar.png";
import image12 from "../../Assets/FacuilityImages/DebashishMishra.png";
import divyanshDixit from "../../Assets/FacuilityImages/DivyanshDixit.png";

const teamMembers = [
  {
    name: "Pallavi Singh",
    role: "Co-Founder & Director",
    image: image1,
    description: "With 13+ years of experience across Transport, Energy, IT, and Telecom, Pallavi specializes in Talent Management, Learning & Leadership Development. She drives strategic talent initiatives, ensuring skill gap assessments, succession planning, and employee engagement. Pallavi has led global portfolios, setting learning benchmarks, implementing competency frameworks, and leveraging data analytics for performance enhancement and decision-making.",
    linkedin: "https://www.linkedin.com/in/pallavi-singh-a59b77bb"
  },
  {
    name: "Bonoshree Mukherjee",
    role: "Co-Founder & Director",
    image: image2,
    description: "Bonoshree (Bonny) is a dynamic L&D professional with 15 years of expertise in training, coaching, and leadership development. Certified in soft skills training and instructional design, she specializes in end-to-end L&D solutions and learning platforms. A strategic thinker, Bonny ensures seamless training delivery, optimizes resources, and drives business growth through industry insights and competitor analysis. She has a strong track record of enhancing operational efficiency, meeting goals, and delivering exceptional client service across diverse industries.",
    linkedin: "https://www.linkedin.com/in/bonoshree-mukherjee-312b3b37"
  },
  {
    name: "Debashish Mishra",
    role: "Founder & Managing Director",
    image: image12,
    description: "Debashish has 20+ years of HR expertise across IT, Engineering, Product, Financial Services, SaaS, FinTech, and ITES. He has led functions like OD, Talent, Performance, L&D, and HR, with a passion for People & Technology. A Gallup Strengths Coach and Master Trainer, he has trained 65K+ professionals on high-impact organizational and behavioral topics. His transformational initiatives have driven radical change for individuals, teams, and organizations.",
    linkedin: "https://www.linkedin.com/in/debashishmishramkraft"
  },
  {
    name: "Divyansh Dixit",
    role: "VP Information Technology",
    image: divyanshDixit,
    description: "Divyansh Dixit is a multi-company technology founder with 6+ years of experience building advanced digital products and innovation-driven systems at the intersection of engineering, AI, and business strategy. He has designed and led mission-critical platforms, AI-powered engines, enterprise applications, and automation frameworks that drive operational efficiency, intelligence, and measurable business impact.",
    linkedin: "https://www.linkedin.com/in/divyansh-dixit-9b7a83312/"
  },
  {
    name: "Dr. Anju Chawla",
    role: "Advisor & Consultant",
    image: image5,
    description: "Anju Chawla, Founder of EQ Advantage, is a leading expert in Emotional Intelligence (EI), leadership development, and coaching. With 8,000+ coaching hours, she empowers individuals through objective insights, tailored strategies, and holistic emotional well-being solutions. Skilled in NLP and Transactional Analysis, she designs impactful EI workshops, leadership training, and professional etiquette programs.",
    linkedin: "https://www.linkedin.com/in/dr-anju-chawla-eqadvantage/"
  },
  {
    name: "Mark Wallace",
    role: "Director of Growth & International Strategy",
    image: image6,
    description: "Mark joined us as the Director - Growth and International Strategy to establish and expand our presence in Europe, driving strategic growth, partnerships, and innovation in the Education and EdTech space. With over two decades of experience in Student Recruitment, Transnational Education, and Digital Learning, he has held senior leadership positions at FutureLearn, HyperionDev, and Higher Ed Partners in the UK.",
    linkedin: null
  },
  {
    name: "Dhanraj Dadhich",
    role: "CTO & Chief Research Officer",
    image: image7,
    description: "Dhanraj is a pioneering tech visionary with 24+ years of expertise in Blockchain, AI, Quantum Computing, and IoT. As a Forbes Business Council member, he has shaped global tech advancements, including creating the world's fastest blockchain and a $1.5B unicorn in just 8 months. His innovations span Layer1 Blockchains, Quantum Teleportation, and DNA Data Storage.",
    linkedin: "https://www.linkedin.com/in/dhanrajdadhich/"
  },
  {
    name: "J.C. Shukla",
    role: "Advisor & Consultant",
    image: image8,
    description: "Mr. Shukla, Managing Director of Nahak Overseas Limited, is a seasoned Strategic Consultant to CEOs and boards across sectors. With over four decades of experience, he holds a Mechanical Engineering degree and an MBA from IIM Ahmedabad (1971). He serves on the board of the US-based Hawthorne World and advises global governments.",
    linkedin: "https://www.linkedin.com/in/jc-shukla-13a1974/"
  },
  {
    name: "Prof. Sandeep Bhattacharya",
    role: "Advisor & Consultant",
    image: image10,
    description: "Prof. Sandeep brings nearly 40 years of experience, with 30 years in industry leadership across Singapore, the Middle East, and India, and a decade in academia. He has taught at top institutions like the American University Dubai, SP Jain Singapore & Dubai, and IIT Madras, covering subjects like Leadership, Strategic Management, Sales, HR Analytics, and more.",
    linkedin: "https://www.linkedin.com/in/sandeepbhattacharya/"
  },
  {
    name: "Rajagopalan S Sreekumar",
    role: "Learning Advisor & Consultant",
    image: image11,
    description: "Sreekumar, a Gallup Certified Strengths Coach and NLP & Enneagram Master Coach, has 25 years of experience in facilitation and leadership development. Passionate about enabling professionals, he has guided thousands across organizations through experiential workshops.",
    linkedin: "https://www.linkedin.com/in/rajagopalan-s-sreekumar-4a5a4810/"
  }
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

  .lt-root {
    font-family: 'Inter', sans-serif;
    background: #F8FAFC;
    padding: 80px 24px 100px;
  }
  [theme='dark'] .lt-root { background: #01182F; }

  .lt-inner { max-width: 1280px; margin: 0 auto; }

  .lt-header { margin-bottom: 64px; text-align: center; }

  .lt-eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #0284c7;
    margin-bottom: 12px;
    font-family: 'Poppins', sans-serif;
  }

  .lt-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
    color: #01182F;
    line-height: 1.1;
    letter-spacing: -0.02em;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
  }
  [theme='dark'] .lt-title { color: #fff; }
  .lt-title.lt-visible { opacity: 1; transform: translateY(0); }

  .lt-subtitle {
    margin-top: 16px;
    font-size: 16px;
    color: #475569;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.8s 0.15s cubic-bezier(0.22,1,0.36,1), transform 0.8s 0.15s cubic-bezier(0.22,1,0.36,1);
  }
  .lt-subtitle.lt-visible { opacity: 1; transform: translateY(0); }

  /* ── Grid ── */
  .lt-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    align-items: start;
  }
  @media (max-width: 1100px) { .lt-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 760px)  { .lt-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .lt-root { padding: 48px 16px 72px; } .lt-header { margin-bottom: 40px; } }
  @media (max-width: 400px)  { .lt-grid { grid-template-columns: 1fr; gap: 16px; } }

  /* ── Card wrapper — perspective lives here ── */
  .lt-card-outer {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
    perspective: 1100px;
    height: 380px;
  }
  .lt-card-outer.lt-visible { opacity: 1; transform: translateY(0); }

  /* ── Flipper ── */
  .lt-flipper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.72s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 24px;
  }
  .lt-card-outer:hover .lt-flipper,
  .lt-card-outer.lt-tapped .lt-flipper {
    transform: rotateY(180deg);
  }

  /* ── Shared face ── */
  .lt-face {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
  }

  /* ── FRONT ── */
  .lt-front {
    background: #FFFFFF;
    border: 1px solid rgba(226, 232, 240, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
  }
  [theme='dark'] .lt-front {
    background: #01182F;
    border: 1px solid rgba(2, 132, 199, 0.2);
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
  }

  .lt-img-wrap {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
    background: #F1F5F9;
    flex-shrink: 0;
  }
  [theme='dark'] .lt-img-wrap { background: #0f172a; }

  .lt-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .lt-card-outer:hover .lt-img { transform: scale(1.04); }

  .lt-front-grad {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(1, 24, 47, 0.3) 100%);
    pointer-events: none;
  }

  /* Flip indicator icon pill */
  .lt-flip-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.7);
    border-radius: 20px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 700;
    color: #01182F;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s;
    z-index: 5;
  }
  [theme='dark'] .lt-flip-badge {
    background: rgba(1, 24, 47, 0.85);
    border-color: rgba(2, 132, 199, 0.4);
    color: #38bdf8;
  }
  .lt-flip-badge svg {
    width: 11px; height: 11px;
    transition: transform 0.4s;
  }
  .lt-card-outer:hover .lt-flip-badge svg { transform: rotate(180deg); }

  .lt-front-info {
    padding: 14px 16px;
    background: #FFFFFF;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    border-top: 1px solid rgba(226, 232, 240, 0.6);
    z-index: 10;
  }
  [theme='dark'] .lt-front-info {
    background: #01182F;
    border-top-color: rgba(2, 132, 199, 0.2);
  }

  .lt-name {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #01182F;
    line-height: 1.25;
    margin: 0;
  }
  [theme='dark'] .lt-name { color: #F8FAFC; }

  .lt-role {
    font-size: 12px;
    font-weight: 600;
    color: #0284c7;
    margin-top: 3px;
  }

  /* ── BACK ── */
  .lt-back {
    background: #01182F;
    color: #fff;
    transform: rotateY(180deg);
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(2, 132, 199, 0.4);
  }

  .lt-back-top { flex: 1; overflow: hidden; display: flex; flex-direction: column; }

  .lt-back-name {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    line-height: 1.2;
  }
  .lt-back-role {
    font-size: 11px;
    font-weight: 600;
    color: #38bdf8;
    margin-top: 3px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .lt-divider {
    width: 24px;
    height: 2px;
    background: #0284c7;
    border-radius: 2px;
    margin: 12px 0;
    flex-shrink: 0;
  }

  .lt-desc-scroll {
    flex: 1;
    overflow-y: auto;
    padding-right: 4px;
    margin-right: -4px;
  }
  .lt-desc-scroll::-webkit-scrollbar { width: 3px; }
  .lt-desc-scroll::-webkit-scrollbar-thumb { background: rgba(2, 132, 199, 0.4); border-radius: 3px; }

  .lt-desc {
    font-size: 12px;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0;
    font-weight: 400;
  }

  .lt-back-bottom {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .lt-linkedin-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 600;
    color: #38bdf8;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .lt-linkedin-link:hover { opacity: 0.8; text-decoration: underline; }

  .lt-unflip-hint {
    font-size: 10px;
    color: #64748b;
  }
`;

export default function LeadershipTeam() {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [tappedCard, setTappedCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    teamMembers.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleIndices((prev) => [...new Set([...prev, index])]);
      }, 100 * index + 200);
      return () => clearTimeout(timer);
    });
  }, []);

  const handleCardClick = (index) => {
    if ('ontouchstart' in window) {
      setTappedCard(tappedCard === index ? null : index);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section className="lt-root" ref={sectionRef} id="leadership-team">
        <div className="lt-inner">
          
          {/* Header */}
          <div className="lt-header">
            <p className="lt-eyebrow">THE MINDS BEHIND MULTIPLIERSKRAFT</p>
            <h2 className={`lt-title ${headerVisible ? 'lt-visible' : ''}`}>
              Leadership & Advisors
            </h2>
            <p className={`lt-subtitle ${headerVisible ? 'lt-visible' : ''}`}>
              A collective of industry pioneers, Gallup coaches, tech founders, and academic experts dedicated to enterprise transformation.
            </p>
          </div>

          {/* Grid */}
          <div className="lt-grid">
            {teamMembers.map((member, index) => {
              const isVisible = visibleIndices.includes(index);
              const isTapped = tappedCard === index;

              return (
                <div
                  key={index}
                  className={`lt-card-outer ${isVisible ? 'lt-visible' : ''} ${isTapped ? 'lt-tapped' : ''}`}
                  onClick={() => handleCardClick(index)}
                  style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                >
                  <div className="lt-flipper">
                    
                    {/* FRONT */}
                    <div className="lt-face lt-front">
                      <div className="lt-img-wrap">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="lt-img"
                          loading="lazy"
                        />
                        <div className="lt-front-grad" />
                        <div className="lt-flip-badge">
                          <span>BIO</span>
                          <svg viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="lt-front-info">
                        <h3 className="lt-name">{member.name}</h3>
                        <p className="lt-role">{member.role}</p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="lt-face lt-back">
                      <div className="lt-back-top">
                        <h3 className="lt-back-name">{member.name}</h3>
                        <p className="lt-back-role">{member.role}</p>
                        <div className="lt-divider" />
                        <div className="lt-desc-scroll">
                          <p className="lt-desc">{member.description}</p>
                        </div>
                      </div>
                      <div className="lt-back-bottom">
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lt-linkedin-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                            <span>LinkedIn Profile</span>
                          </a>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-mono">MultipliersKraft</span>
                        )}
                        <span className="lt-unflip-hint">Hover / Flip</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}