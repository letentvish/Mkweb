import { useState, useEffect, useRef } from 'react';
import image1 from "../../Assets/FacuilityImages/PallaviSingh.png";
import image2 from "../../Assets/FacuilityImages/BonoshreeMukherjee.png";
import image4 from "../../Assets/FacuilityImages/JagannathaRao.png";
import image5 from "../../Assets/FacuilityImages/AnjuChawla.png";
import image6 from "../../Assets/FacuilityImages/MarkWallace.png";
import image7 from "../../Assets/FacuilityImages/DhanrajDadhich.png";
import image8 from "../../Assets/FacuilityImages/JCShukla.png";
import image9 from "../../Assets/FacuilityImages/BalaKairalisadanam.png";
import image10 from "../../Assets/FacuilityImages/SandeepBhattacharya.png";
import image11 from "../../Assets/FacuilityImages/Sreekumar.png";
import image12 from "../../Assets/FacuilityImages/DebashishMishra.png";
import vaishnavRamesh from "../../Assets/FacuilityImages/Vaishnav_Ramesh.png";
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
    description: "Debashish has 20+ years of HR expertise across IT, Engineering, Product, Financial Services, SaaS, FinTech, and ITES. He has led functions like OD, Talent, Performance, L&D, and HR, with a passion for People & Technology. A Gallup Strengths Coach and Master Trainer, he has trained 65K+ professionals on high-impact organizational and behavioral topics. His transformational initiatives have driven radical change for individuals, teams, and organizations. He mentors startup founders, boards, and CXOs and enjoys exploring Technology, Human Psychology, and Leadership. As an advisor, he collaborates with HR leaders, coaches, and facilitators to maximize impact. A lifelong learner, he is deeply committed to serving his purpose.",
    linkedin: "https://www.linkedin.com/in/debashishmishramkraft"
  },
  {
    name: "Palukuri Jagannatha Rao",
    role: "Co-Founder & Chief of Facilitation",
    image: image4,
    description: "Jagan has conducted leadership and management programs across industries, benefiting 25,000+ professionals in India and abroad. With expertise in Decision-making, Emotional Intelligence, Team Building, and Change Management, Jagan has trained over 1,000 managers and worked with organizations like Wipro, NTT Data, and Freshworks. A certified trainer in multiple global methodologies, he is also the author of Hop, Skip, and Jump to Leadership.",
    linkedin: "https://www.linkedin.com/in/jagannatharao"
  },
  {
    name: "Vaishnav Ramesh",
    role: "Director – Engagement and Growth",
    image: vaishnavRamesh,
    description: "Vaishnav is a seasoned GTM specialist and behavioral coaching expert with 15+ years of global experience driving high-performance teams and business growth. A Computer Science Engineering graduate, he excelled with tech giants like Freshworks and Zoho, serving clients worldwide. Recognized as Best People Manager org-wide and Best in Department, his passion for effective leadership led to deep expertise in psychology, NLP, and behavioral sciences. Certified as NLP Trainer and Master Coach, Positive Psychology practitioner, Workplace Happiness Consultant, and trained in Non-Violent Communication, Transactional Analysis, and more. He designs workshops, facilitates sales enablement frameworks, and coaches teams for resilience and peak performance, bridging tech strategy with human-centered growth.",
    linkedin: "https://www.linkedin.com/in/vaishnavramesh/"
  },
  {
    name: "Divyansh Dixit",
    role: "VP Information Technology",
    image: divyanshDixit,
    description: "Divyansh Dixit is a multi-company technology founder with 6+ years of experience building advanced digital products and innovation-driven systems at the intersection of engineering, AI, and business strategy. He has designed and led mission-critical platforms, AI-powered engines, enterprise applications, and automation frameworks that drive operational efficiency, intelligence, and measurable business impact. Known for translating complex requirements into clean, scalable, end-to-end solutions, he combines strategic vision with deep technical execution. He has collaborated closely with leadership teams across industries, helping transform ambitious ideas into production-ready products. His entrepreneurial journey reflects a strong ability to identify real problems, architect future-ready systems, and deliver robust, intelligent technology solutions that elevate entire ecosystems and are built to scale and last.",
    linkedin: "https://www.linkedin.com/in/divyansh-dixit-9b7a83312/"
  },
  {
    name: "Dr. Anju Chawla",
    role: "Advisor & Consultant",
    image: image5,
    description: "Anju Chawla, Founder of EQ Advantage, is a leading expert in Emotional Intelligence (EI), leadership development, and coaching. With 8,000+ coaching hours, she empowers individuals through objective insights, tailored strategies, and holistic emotional well-being solutions. Skilled in NLP and Transactional Analysis, she designs impactful EI workshops, leadership training, and professional etiquette programs. Her integrity, clarity, and dedication drive lasting transformation for professionals and organizations alike.",
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
    description: "Dhanraj is a pioneering tech visionary with 24+ years of expertise in Blockchain, AI, Quantum Computing, and IoT. As a Forbes Business Council member, he has shaped global tech advancements, including creating the world's fastest blockchain and a $1.5B unicorn in just 8 months. His innovations span Layer1 Blockchains, Quantum Teleportation, and DNA Data Storage. He developed the Sustainable Consensus for 5ireChain which achieved a significant valuation of $30 million and co-founded Rarible. Honored with global awards, he is renowned as #TheAlgoMan and The Future Architect.",
    linkedin: "https://www.linkedin.com/in/dhanrajdadhich/"
  },
  {
    name: "J.C. Shukla",
    role: "Advisor & Consultant",
    image: image8,
    description: "Mr. Shukla, Managing Director of Nahak Overseas Limited, is a seasoned Strategic Consultant to CEOs and boards across sectors. With over four decades of experience, he holds a Mechanical Engineering degree and an MBA from IIM Ahmedabad (1971). He serves on the board of the US-based Hawthorne World and advises the governments of Germany, Kenya, and others. In 2003, he was appointed as a UNO observer at WSIS Geneva and led an ITC/WTO/UNCTAD seminar on ICT for global marketing, attended by representatives from 50 countries.",
    linkedin: "https://www.linkedin.com/in/jc-shukla-13a1974/"
  },
  {
    name: "Bala Kairalisadanam",
    role: "Advisor & Partner Consultant",
    image: image9,
    description: "Bala, a Ph.D. in Marketing Science from LaSalle University (2000) and an alumnus of IIM Ahmedabad, IRMA Anand, and IIT Kharagpur, has nearly three decades of data-driven marketing expertise. He specializes in AI, data science, and analytics adoption, shaping enterprise strategies and scalable AI/ML solutions. Formerly Head of Global AI-Data Science Strategy at Nihilent Technologies, he has held leadership roles at Mu Sigma, Aramark, IRI, and Gallup. Key achievements include scaling analytics automation, securing major business deals, and enhancing predictive accuracy, saving $50M in warranty reserves. Recognized with Microsoft's 2019 Golden Partner Award.",
    linkedin: "https://www.linkedin.com/in/bala-kairalisadanam/"
  },
  {
    name: "Prof. Sandeep Bhattacharya",
    role: "Advisor & Consultant",
    image: image10,
    description: "Prof. Sandeep brings nearly 40 years of experience, with 30 years in industry leadership across Singapore, the Middle East, and India, and a decade in academia. He has taught at top institutions like the American University Dubai, SP Jain Singapore & Dubai, and IIT Madras, covering subjects like Leadership, Strategic Management, Sales, HR Analytics, and more. A consultant, coach, and author, he has worked globally, mentored student councils, and led corporate education initiatives. His expertise bridges industry, academia, and students to enhance employability.",
    linkedin: "https://www.linkedin.com/in/sandeepbhattacharya/"
  },
  {
    name: "Rajagopalan S Sreekumar",
    role: "Learning Advisor & Consultant",
    image: image11,
    description: "Sreekumar, a Gallup Certified Strengths Coach and NLP & Enneagram Master Coach, has 25 years of experience in facilitation and leadership development. Passionate about enabling professionals, he has guided thousands across organizations through experiential workshops. His expertise in aligning organizational culture with strategic solutions drives growth, inspires teams, and fosters positive community impact.",
    linkedin: "https://www.linkedin.com/in/rajagopalan-s-sreekumar-4a5a4810/"
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  .lt-root {
    font-family: 'DM Sans', sans-serif;
    background: #FFFFFF;
    padding: 80px 24px 100px;
  }
  [theme='dark'] .lt-root { background: #0A0E27; }

  .lt-inner { max-width: 1280px; margin: 0 auto; }

  .lt-header { margin-bottom: 64px; text-align: center; }

  .lt-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3B82F6;
    margin-bottom: 12px;
  }

  .lt-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    color: #111827;
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
    color: #6B7280;
    max-width: 500px;
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
  @media (max-width: 400px)  { .lt-grid { grid-template-columns: 1fr 1fr; gap: 12px; } }

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
    border-radius: 20px;
  }
  .lt-card-outer:hover .lt-flipper,
  .lt-card-outer.lt-tapped .lt-flipper {
    transform: rotateY(180deg);
  }

  /* ── Shared face ── */
  .lt-face {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
  }

  /* ══ FRONT ══ */
  .lt-front {
    background: #ffffff;
    box-shadow: 0 4px 24px rgba(59,130,246,0.10), 0 1px 6px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 20px 22px;
    gap: 12px;
  }
  [theme='dark'] .lt-front { background: #1a1f3a; }

  /* Circular photo */
  .lt-circle-wrap {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #3B82F6;
    box-shadow: 0 0 0 5px rgba(59,130,246,0.13), 0 4px 16px rgba(59,130,246,0.18);
    flex-shrink: 0;
  }
  .lt-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .lt-front-info { text-align: center; }

  .lt-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #2563EB;
    margin: 0 0 5px;
    line-height: 1.25;
  }
  [theme='dark'] .lt-name { color: #60a5fa; }

  .lt-role {
    font-size: 13.5px;
    font-weight: 400;
    color: #6B7280;
    line-height: 1.4;
  }
  [theme='dark'] .lt-role { color: #9ca3af; }

  .lt-front-li {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #0077B5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    position: relative;
    z-index: 5;
  }
  .lt-front-li:hover { background: #005582; transform: scale(1.1); }

  /* ══ BACK ══ */
  .lt-back {
    transform: rotateY(180deg);
    background: linear-gradient(150deg, #1e3a8a 0%, #1d4ed8 100%);
    box-shadow: 0 8px 32px rgba(29,78,216,0.35);
    display: flex;
    flex-direction: column;
    padding: 22px 20px 20px;
    gap: 10px;
  }

  .lt-back-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    flex-shrink: 0;
  }

  .lt-back-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 3px;
    line-height: 1.25;
  }
  .lt-back-role {
    font-size: 13px;
    font-weight: 500;
    color: #93c5fd;
    line-height: 1.4;
  }

  .lt-back-li {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    position: relative;
    z-index: 5;
  }
  .lt-back-li:hover { background: rgba(255,255,255,0.3); }

  .lt-divider {
    height: 1px;
    background: rgba(255,255,255,0.15);
    flex-shrink: 0;
    margin: 0;
  }

  .lt-back-desc {
    font-size: 12px;
    color: rgba(255,255,255,0.88);
    line-height: 1.72;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-right: 4px;
  }
  .lt-back-desc::-webkit-scrollbar { width: 3px; }
  .lt-back-desc::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 2px; }
  .lt-back-desc::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.25); border-radius: 2px; }
  .lt-back-desc::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.45); }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .lt-flipper, .lt-title, .lt-subtitle, .lt-card-outer {
      transition: none !important; transform: none !important; opacity: 1 !important;
    }
    .lt-card-outer:hover .lt-flipper,
    .lt-card-outer.lt-tapped .lt-flipper { transform: none !important; }
  }
`;

function LinkedInIcon({ size = 14 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function MemberCard({ member, index, isVisible }) {
  const delay = `${0.05 + index * 0.05}s`;
  const [tapped, setTapped] = useState(false);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (member.linkedin) {
      window.open(member.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`lt-card-outer${isVisible ? ' lt-visible' : ''}${tapped ? ' lt-tapped' : ''}`}
      style={{ transitionDelay: isVisible ? delay : '0s' }}
      onTouchEnd={(e) => { e.preventDefault(); setTapped(p => !p); }}
    >
      <div className="lt-flipper">

        {/* ── FRONT ── */}
        <div className="lt-face lt-front">
          <div className="lt-circle-wrap">
            <img src={member.image} alt={member.name} className="lt-img" loading="lazy" />
          </div>
          <div className="lt-front-info">
            <h3 className="lt-name">{member.name}</h3>
            <p className="lt-role">{member.role}</p>
          </div>
          {member.linkedin && (
            <button
              type="button"
              className="lt-front-li"
              onClick={handleLinkedInClick}
              aria-label={`${member.name} on LinkedIn`}
            >
              <LinkedInIcon size={14} />
            </button>
          )}
        </div>

        {/* ── BACK ── */}
        <div className="lt-face lt-back">
          <div className="lt-back-header">
            <div>
              <h3 className="lt-back-name">{member.name}</h3>
              <p className="lt-back-role">{member.role}</p>
            </div>
            {member.linkedin && (
              <button
                type="button"
                className="lt-back-li"
                onClick={handleLinkedInClick}
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon size={14} />
              </button>
            )}
          </div>
          <div className="lt-divider" />
          <p className="lt-back-desc">{member.description}</p>
        </div>

      </div>
    </div>
  );
}

export default function LeadershipTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section ref={ref} className="lt-root">
        <div className="lt-inner">
          <header className="lt-header">
       
            <h2 className={`lt-title${isVisible ? ' lt-visible' : ''}`}>Leadership Team</h2>
           
          </header>

          <div className="lt-grid">
            {teamMembers.map((member, i) => (
              <MemberCard key={i} member={member} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}