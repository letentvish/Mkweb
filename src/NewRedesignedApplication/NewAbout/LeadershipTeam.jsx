import { useState, useEffect, useRef } from 'react';
import './LeadershipTeam.css';
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

const avatarPlaceholder1 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
const avatarPlaceholder2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";
const avatarPlaceholder3 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80";

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
    name: "Dhanraj Dadhich",
    role: "CTO & Chief Research Officer",
    image: image7,
    description: "Dhanraj is a pioneering tech visionary with 24+ years of expertise in Blockchain, AI, Quantum Computing, and IoT. As a Forbes Business Council member, he has shaped global tech advancements, including creating the world's fastest blockchain and a $1.5B unicorn in just 8 months. His innovations span Layer1 Blockchains, Quantum Teleportation, and DNA Data Storage.",
    linkedin: "https://www.linkedin.com/in/dhanrajdadhich/"
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
    linkedin: "https://www.linkedin.com"
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
  },
  {
    name: "Leadership Advisor",
    role: "Executive Advisory Partner",
    image: avatarPlaceholder1,
    description: "Placeholder profile bio text for Executive Advisory Partner. Specializing in high-impact executive coaching, corporate alignment, and transformational leadership strategy across global enterprises.",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "Strategic Consultant",
    role: "Senior Enterprise Consultant",
    image: avatarPlaceholder2,
    description: "Placeholder profile bio text for Senior Enterprise Consultant. Focused on organizational capability architecture, competency assessment frameworks, and workforce optimization.",
    linkedin: "https://www.linkedin.com"
  },
  {
    name: "Capability Specialist",
    role: "Principal Practice Lead",
    image: avatarPlaceholder3,
    description: "Placeholder profile bio text for Principal Practice Lead. Driving behavioral transformation, skill telemetry modeling, and bespoke corporate learning journeys.",
    linkedin: "https://www.linkedin.com"
  }
];

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

  const handleLinkedInClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <section className="lt-root" ref={sectionRef} id="leadership-team">
        <div className="lt-inner">
          
          {/* Header */}
          <div className="lt-header">
            <p className="lt-eyebrow">THE MINDS BEHIND MULTIPLIERSKRAFT</p>
            <h2 className={`lt-title ${headerVisible ? 'lt-visible' : ''}`}>
              Our Leadership
            </h2>
            <p className={`lt-subtitle ${headerVisible ? 'lt-visible' : ''}`}>
              A collective of global industry leaders dedicated to enterprise transformation.
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
                    
                    {/* FRONT: Circular Avatar Profile Design matching Screenshot */}
                    <div className="lt-face lt-front">
                      
                      {/* Circular Avatar Image with Blue Border Ring & Glow */}
                      <div className="relative mt-2 mb-4">
                        <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 shadow-[0_0_24px_rgba(2,132,199,0.2)] flex items-center justify-center">
                          <div className="w-full h-full rounded-full border-[3.5px] border-[#0284c7] overflow-hidden bg-slate-100 shadow-inner">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Bio Flip Badge Pill */}
                        <div className="absolute -top-1 -right-1 bg-white/90 backdrop-blur-sm border border-sky-200 text-[#0284c7] font-mono font-extrabold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 z-10">
                          <span>BIO</span>
                          <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      {/* Name in Bold Blue (#0284c7) */}
                      <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#0284c7] tracking-tight leading-tight px-2">
                        {member.name}
                      </h3>

                      {/* Role in Medium Slate Grey */}
                      <p className="text-slate-500 font-sans text-sm sm:text-base font-normal mt-1.5 px-2">
                        {member.role}
                      </p>

                      {/* LinkedIn Rounded Square Button */}
                      <div className="mt-4 mb-2">
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 inline-flex cursor-pointer"
                            onClick={(e) => handleLinkedInClick(e, member.linkedin)}
                            title={`${member.name} LinkedIn Profile`}
                          >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center border border-slate-200">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* BACK: Detailed Bio Face */}
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
                            onClick={(e) => handleLinkedInClick(e, member.linkedin)}
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