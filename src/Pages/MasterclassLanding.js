import { useState, useEffect, useRef } from "react";
import MultiStepRegistrationModal from "./components/MultiStepRegistrationModal";
import LogoDark from "../Assets/MultipliersKraftLogoDark.png";
import JaganImage from "../Assets/Jagan.jpeg";
import VaishnavImage from "../Assets/FacuilityImages/Vaishnav_Ramesh.png";
import WorkshopImg1 from "../Assets/Workshop/image1.jpeg";
import { FaBrain, FaHandshake, FaBolt, FaComments, FaBullseye, FaMap, FaFire, FaRoad, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #F8F7F4; color: #1A1A2E; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0F1B3D; }
  ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 3px; }

  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
  @keyframes scaleIn { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
  @keyframes tickerMove { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes ringPulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.15);opacity:0.2} }

  .role-cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  @media (max-width: 1024px) {
    .role-cards-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .role-cards-grid { grid-template-columns: 1fr; }
  }

  .what-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    .what-grid { grid-template-columns: 1fr; }
  }

  .reveal { opacity:0; transform:translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-d1 { transition-delay:0.1s; }
  .reveal-d2 { transition-delay:0.2s; }
  .reveal-d3 { transition-delay:0.3s; }

  .modal-overlay { position:fixed; inset:0; z-index:2000; background:rgba(10,15,40,0.85); backdrop-filter:blur(8px); display:none; align-items:center; justify-content:center; padding:1.5rem; }
  .modal-overlay.open { display:flex; animation:fadeUp 0.25s ease; }
  .modal-box { background:#fff; border-radius:20px; width:100%; max-width:480px; max-height:90vh; overflow-y:auto; animation:slideUp 0.3s ease; position:relative; }
  .success-icon-anim { animation: scaleIn 0.4s ease; }

  /* ========== RESPONSIVE STYLES ========== */

  /* Tablet (768px and below) */
  @media (max-width: 768px) {
    body { font-size: 14px; }

    /* Navigation - hide links, show only button */
    nav .nav-links { display: none !important; }
    nav { padding: 0 4% !important; height: 60px !important; }
    nav img { height: 32px !important; }
    nav button { padding: 0.4rem 1rem !important; font-size: 0.8rem !important; }

    /* Hero section - stack vertically */
    .hero-section { padding: 80px 4% 60px !important; }

    .hero-content-wrapper {
      display: flex !important;
      flex-direction: column !important;
      gap: 3rem !important;
      align-items: stretch !important;
    }

    /* Hero image - show first, centered */
    .hero-image-container {
      order: -1 !important;
      width: 100% !important;
      max-width: 500px !important;
      margin: 0 auto !important;
    }

    .hero-image-container > div {
      max-width: 100% !important;
    }

    /* Hero text content */
    .hero-text-content {
      width: 100% !important;
      text-align: center !important;
    }

    .hero-text-content > div {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    /* Grid layouts - 1 column */
    div[style*="gridTemplateColumns"]:not(.hero-content-wrapper) { grid-template-columns: 1fr !important; }

    /* Countdown timer - smaller */
    div[style*="minWidth:65"] { min-width: 55px !important; padding: 0.6rem 0.7rem !important; }
    div[style*="minWidth:65"] span { font-size: 1.3rem !important; }

    /* Sections padding */
    section { padding: 60px 4% !important; }

    /* Footer grid */
    footer > div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
  }

  /* Mobile (480px and below) */
  @media (max-width: 480px) {
    /* Hero section - stack vertically with tight spacing */
    .hero-section { padding: 70px 4% 50px !important; }

    .hero-content-wrapper {
      display: flex !important;
      flex-direction: column !important;
      gap: 2.5rem !important;
      align-items: stretch !important;
    }

    /* Hero image - full width, show first */
    .hero-image-container {
      order: -1 !important;
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
    }

    .hero-image-container > div {
      max-width: 100% !important;
      border-width: 2px !important;
      border-radius: 16px !important;
    }

    /* Hero text content - centered */
    .hero-text-content {
      width: 100% !important;
      text-align: center !important;
    }

    .hero-text-content h1 {
      font-size: 2rem !important;
      line-height: 1.15 !important;
    }

    /* Buttons full width */
    button:not([style*="width:44px"]):not(.what-slider-chevron):not(.learn-slider-chevron), a[style*="padding"] { width: 100% !important; text-align: center !important; justify-content: center !important; }

    /* Countdown timer - smaller */
    div[style*="minWidth:55"] { min-width: 48px !important; padding: 0.5rem 0.6rem !important; }
    div[style*="minWidth:55"] span { font-size: 1.1rem !important; }
    div[style*="minWidth:55"] div { font-size: 0.55rem !important; }

    /* Section headers */
    h1 { font-size: 2rem !important; line-height: 1.15 !important; }
    h2 { font-size: 1.8rem !important; }
    h3 { font-size: 1rem !important; }

    /* Cards padding */
    div[style*="padding:2rem"] { padding: 1.5rem !important; }

    /* Modal */
    .modal-overlay { padding: 1rem !important; }
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ICON_MAP = {
  brain: FaBrain,
  target: FaBullseye,
  comments: FaComments,
  handshake: FaHandshake,
  bolt: FaBolt,
  map: FaMap,
  people: FaUserFriends,
};

const WHAT_YOULL_GET = [
  { icon: "target", title: "Read any buyer in 60 seconds", desc: "Learn VAK preference mapping and how to instantly detect a buyer's communication style before you even start pitching." },
  { icon: "comments", title: "One language pattern that closes", desc: "Walk away with a single, ethical NLP language pattern for your next sales conversation — no scripts, no manipulation." },
  { icon: "people", title: "Instant rapport techniques", desc: "Experience matching & mirroring live — and understand why top closers never 'wing it' when building trust." },
  { icon: "bolt", title: "The peak state secret", desc: "How anchoring works and how to enter every sales call or meeting already in peak performance state." },
];

const AGENDA = [
  { time: "0:00 – 0:10", title: "Welcome & Context Setting", desc: "Introductions, quick icebreaker, and setting expectations for the session." },
  { time: "0:10 – 0:25", title: "NLP & Sales — The Connection", desc: "Why NLP works in selling. A brief overview of the NLP Communication Model and how buyers filter reality." },
  { time: "0:25 – 0:40", title: "Live Demonstration", desc: "Jagan & Vaishnav demonstrate VAK mapping, instant rapport, and a live NLP language pattern in action." },
  { time: "0:40 – 0:50", title: "What the 2-Day Workshop Unlocks", desc: "An honest walkthrough of the full workshop curriculum — what you'll learn and how it will change your sales results." },
  { time: "0:50 – 1:00", title: "Open Q&A", desc: "Ask Jagan & Vaishnav anything about NLP, sales, or the workshop. Real questions, real answers." },
];

const TESTIMONIALS_MC = [
  { initials: "NK", name: "Neha Kapoor", role: "Sales Executive, EdTech", text: "I attended the Masterclass not knowing what to expect. Within 10 minutes of Jagan's demonstration, I had my first 'aha moment'. I enrolled in the workshop on the spot." },
  { initials: "RS", name: "Rohan Shetty", role: "Business Dev, SaaS", text: "The live VAK demonstration alone was worth the ₹199. Vaishnav read a volunteer from the audience in under 2 minutes. I've never seen anything like it." },
  { initials: "MP", name: "Meera Pillai", role: "Insurance Advisor", text: "It was only 1 hour but it felt like a complete shift in how I see sales. Signed up for the 2-day workshop immediately after. Best ₹199 I've spent." },
];

const FAQS_MC = [
  { q: "What will I learn in the 1-hour NLP Sales Masterclass?", a: "You’ll get a practical introduction to NLP-based selling, decoding customer behaviour, and learning techniques to improve conversions." },
  { q: "Who is this Masterclass best suited for?", a: "This Masterclass is designed for sales professionals across any industry who are looking to strengthen their communication and selling skills." },
  { q: "Can professionals from non-technical or non-SaaS industries attend?", a: "Absolutely. The concepts taught in the Masterclass are applicable across industries, including SaaS, manufacturing, retail, consulting, insurance, real estate, and other B2B and B2C sales environments." },
  { q: "Who is conducting this Masterclass?", a: "Mr. Jagannatha Rao and Mr. Vaishnav Ramesh will conduct the 1-hour Masterclass. Mr. Jagannatha Rao (Jagan) is a seasoned professional with 30 years of experience, including 10 years in sales and 20+ years in Learning & Development. He also headed the sales enablement function for a large SaaS company, where he coached sales teams across geographies. Vaishnav Ramesh is a Certified NLP & Positive Psychology Coach with 16+ years of experience across Oil & Gas and SaaS, closing deals in the field, leading teams to $1M+ pipelines, and enabling 140+ Account Executives to sell with clarity and confidence." },
  { q: "Will the Masterclass cover the complete NLP Sales framework?", a: "No. The Masterclass is intended to provide a high-level introduction to NLP-based selling techniques. Complete frameworks, role-plays, advanced techniques, and practical implementation exercises will be covered in depth during the 2-day offline workshop in Bangalore." },
  { q: "Will I receive a certificate after completing the Masterclass?", a: "No. Participants will not receive a certificate for attending the 1-hour Masterclass. Certificates will only be provided to participants who attend the complete 2-day offline NLP Sales Workshop conducted by MultipliersKraft." },
  { q: "Will the Masterclass be recorded?", a: "Yes. The 1-hour Masterclass will be recorded, and the recording can be shared upon request." },
  { q: "How do I register for the 2-day workshop after attending the Masterclass?", a: "Participants attending the Masterclass will receive complete details about the 2-day workshop, including the agenda, pricing, venue, and registration process during the session." },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(targetDate) - new Date());
      setTime({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── REGISTRATION MODAL (Now using multi-step flow with email verification) ──

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ onOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding:"0 5%", display:"flex", alignItems:"center", justifyContent:"space-between", height:70, background: scrolled ? "rgba(15,27,61,0.99)" : "rgba(15,27,61,0.95)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(201,168,76,0.2)", transition:"all 0.3s" }}>
      <img src={LogoDark} alt="MKraft Logo" style={{ height:40 }} />
      <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
        <div className="nav-links" style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
          {[["#what","What You'll Get"],["#agenda","Agenda"],["#trainers","Trainers"],["#faq","FAQ"]].map(([href, label]) => (
            <a key={href} href={href} style={{ color:"rgba(255,255,255,0.75)", textDecoration:"none", fontSize:"0.875rem", fontWeight:500, letterSpacing:"0.05em", textTransform:"uppercase" }}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onOpen }) {
  const cd = useCountdown("2025-04-21T00:00:00");
  return (
    <section className="hero-section" style={{ minHeight:"100vh", background:"#0F1B3D", position:"relative", display:"flex", alignItems:"center", overflow:"hidden", padding:"100px 5% 80px" }}>
      {/* BG */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 50% 60% at 80% 30%, rgba(44,62,193,0.3) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(201,168,76,0.1) 0%, transparent 60%)" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(44,62,193,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(44,62,193,0.05) 1px, transparent 1px)", backgroundSize:"50px 50px" }} />

      {/* Main Content - Two Column Layout */}
      <div className="hero-content-wrapper" style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center", width:"100%", maxWidth:"1400px", margin:"0 auto" }}>

        {/* Left Column - Text Content */}
        <div className="hero-text-content" style={{ position:"relative" }}>

        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4.5vw,3.5rem)", fontWeight:900, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
          <em style={{ fontStyle:"italic", color:"#C9A84C" }}>Learn the Art of Selling</em>
        </h1>
        <p style={{ fontSize:"1.25rem", lineHeight:1.75, color:"rgba(255,255,255,0.65)", marginBottom:"1rem", maxWidth:540 }}>
          A live, 1-hour NLP Sales Masterclass by <strong style={{color:"rgba(255,255,255,0.9)"}}>Jagan & Vaishnav</strong> — designed to give you real, immediately usable tools to transform how you sell.
        </p>
        <p style={{ fontSize:"1.0rem", lineHeight:1.6, color:"rgba(255,255,255,0.4)", marginBottom:"2.5rem" }}>
          No fluff. No theory overload. One hour that changes how you see every sales conversation — forever.
        </p>
        <p style={{ fontSize:"0.72rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:"0.75rem" }}>Registration closes soon — seats are limited</p>
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
          <button onClick={onOpen} style={{ background:"#2C3EC1", color:"#fff", border:"none", padding:"1rem 2rem", borderRadius:6, fontWeight:700, fontSize:"1rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", position:"relative", overflow:"hidden" }}>
            Reserve My Seat
          </button>
          <a href="#what" style={{ background:"transparent", color:"#fff", border:"1px solid rgba(255,255,255,0.3)", padding:"1rem 1.75rem", borderRadius:6, fontWeight:600, fontSize:"0.95rem", textDecoration:"none", display:"inline-flex", alignItems:"center" }}>
            See What's Covered ↓
          </a>
        </div>
        </div>

        {/* Right Column - Workshop Image */}
        <div className="hero-image-container" style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ position:"relative", width:"100%", maxWidth:"550px", aspectRatio:"4/3", borderRadius:"20px", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.4)", border:"3px solid rgba(44,62,193,0.3)" }}>
            <img
              src={WorkshopImg1}
              alt="MKraft NLP Masterclass — Live Training Session"
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
            {/* Overlay gradient for better aesthetics */}
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(44,62,193,0.15), rgba(201,168,76,0.15))" }} />
          </div>
          {/* Decorative elements */}
          <div style={{ position:"absolute", top:"-10px", right:"-10px", width:"80px", height:"80px", borderRadius:"50%", background:"rgba(201,168,76,0.2)", filter:"blur(40px)", zIndex:-1 }} />
          <div style={{ position:"absolute", bottom:"-10px", left:"-10px", width:"100px", height:"100px", borderRadius:"50%", background:"rgba(44,62,193,0.2)", filter:"blur(50px)", zIndex:-1 }} />
        </div>

      </div>
    </section>
  );
}

// ─── TARGET AUDIENCE SECTION ─────────────────────────────────────────────────
function TargetAudienceSection() {
  const roles = [
    { title: "SDRs & BDRs", desc: "Building your pipeline" },
    { title: "Account Executives", desc: "Closing more deals" },
    { title: "Sales Managers", desc: "Enabling your team" },
    { title: "Sales Consultants", desc: "Winning more clients" },
  ];
  const industries = ["SaaS", "Manufacturing", "Retail", "Consulting", "Insurance", "Real Estate", "B2B", "B2C"];

  return (
    <section style={{ padding:"70px 5% 80px", background:"#F8F7F4" }}>
      <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A07830", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>Who is this For?</span>
        <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#0F1B3D", marginBottom:"1rem", lineHeight:1.2 }}>
          Built for Sales Professionals<br />Who Want to Sell Smarter
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize:"1.05rem", lineHeight:1.7, color:"#4A4A6A", maxWidth:560, margin:"0 auto 2.5rem" }}>Whether you're in B2B or B2C, SaaS or manufacturing — if you sell for a living, this masterclass was built for you.</p>
      </div>

      <div style={{ textAlign:"center", marginBottom:"1.75rem" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.65rem", fontWeight:900, letterSpacing:"0.2em", textTransform:"uppercase", color:"#A07830", marginBottom:"1.25rem" }}>Your Role</span>
      </div>
      <div className="role-cards-grid" style={{ maxWidth:"1100px", margin:"0 auto 3rem" }}>
        {roles.map((role, i) => (
          <RoleCard key={i} role={role} delay={i} />
        ))}
      </div>

      <div style={{ textAlign:"center" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#A07830", marginBottom:"1.25rem" }}>Your Industry</span>
        <div className="reveal reveal-d1" style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.5rem" }}>
          {industries.map((ind, i) => (
            <span key={i} style={{ fontSize:"0.75rem", fontWeight:600, padding:"0.4rem 1rem", borderRadius:100, background:"#0F1B3D", color:"#fff", letterSpacing:"0.02em" }}>{ind}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`reveal reveal-d${delay + 1}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:"#fff", borderRadius:12, padding:"2rem 1.25rem", transition:"all 0.35s", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)", textAlign:"center", cursor:"default", minHeight:"100px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.95rem", fontWeight:700, color:"#0F1B3D", marginBottom:"0.35rem" }}>{role.title}</h3>
      <p style={{ fontSize:"0.8rem", color:"#6B7280", lineHeight:1.5 }}>{role.desc}</p>
    </div>
  );
}

// ─── WHAT SECTION ─────────────────────────────────────────────────────────────
function WhatSection() {
  return (
    <section id="what" style={{ padding:"100px 5% 0px 5%", background:"#0F1B3D" }}>
      <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#C9A84C", border:"1px solid rgba(201,168,76,0.4)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>What You'll Get</span>
        <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#fff", marginBottom:"1rem" }}>
          The Selling Principles, <em style={{ fontStyle:"italic", color:"#C9A84C" }}>Most Professionals Never Learn.</em> <br></br> Introduced in One Hour.           
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize:"1.05rem", lineHeight:1.7, color:"rgba(255,255,255,0.5)", maxWidth:580, margin:"0 auto" }}>This isn't a preview or a sales pitch. You'll leave with actionable NLP tools you can use in your very next conversation.</p>
      </div>
      <div className="what-grid" style={{ maxWidth:"900px", margin:"0 auto" }}>
        {WHAT_YOULL_GET.map((item, i) => (
          <WhatCard key={i} item={item} delay={i} />
        ))}
      </div>
    </section>
  );
}

function WhatCard({ item, delay }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = ICON_MAP[item.icon];
  return (
    <div className={`reveal reveal-d${delay + 1}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:"rgba(255,255,255,0.05)", borderRadius:12, padding:"2rem", border:`1px solid ${hovered ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.08)"}`, transition:"all 0.35s", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 12px 30px rgba(0,0,0,0.2)" : "none" }}>
      <div style={{ color:"#C9A84C", fontSize:"1.3rem", marginBottom:"1.25rem" }}>
        {IconComponent && <IconComponent size={24} />}
      </div>
      <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"1rem", fontWeight:600, color:"#fff", marginBottom:"0.6rem" }}>{item.title}</h3>
      <p style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.5)", lineHeight:1.65 }}>{item.desc}</p>
    </div>
  );
}

// ─── AGENDA SECTION ──────────────────────────────────────────────────────────
function AgendaSection() {
  return (
    <section id="agenda" style={{ padding:"100px 5%", background:"#0F1B3D" }}>
      <div style={{ textAlign:"center", marginBottom:"4rem" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#E8C97A", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>Session Agenda</span>
        <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#fff", marginBottom:"1rem" }}>
          60 Minutes. <em style={{ fontStyle:"italic", color:"#C9A84C" }}>Every Minute Counts.</em>
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize:"1.05rem", lineHeight:1.7, color:"rgba(255,255,255,0.5)", maxWidth:560, margin:"0 auto" }}>A tight, structured session — no padding, no filler. Just pure value from start to finish.</p>
      </div>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        {AGENDA.map((item, i) => <AgendaItem key={i} item={item} index={i} total={AGENDA.length} />)}
      </div>
    </section>
  );
}

function AgendaItem({ item, index, total }) {
  const [hovered, setHovered] = useState(false);
  const colors = ["#2C3EC1","#3D8EDA","#C9A84C","#22C55E","#A07830"];
  return (
    <div className="reveal" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display:"flex", gap:"1.5rem", padding:"1.5rem 1.5rem 1.5rem 0", borderBottom: index < total-1 ? "1px solid rgba(255,255,255,0.06)" : "none", transition:"padding 0.3s", paddingLeft: hovered ? "0.75rem" : 0 }}>
      <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>
        <div style={{ width:36, height:36, borderRadius:"50%", background:`rgba(${colors[index] === "#C9A84C" ? "201,168,76" : colors[index] === "#2C3EC1" ? "44,62,193" : "34,197,94"},0.15)`, border:`1px solid ${colors[index]}40`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", fontWeight:600, color:colors[index] }}>{String(index+1).padStart(2,"0")}</div>
        {index < total - 1 && <div style={{ width:1, flex:1, background:"rgba(255,255,255,0.06)", marginTop:"0.5rem", minHeight:20 }} />}
      </div>
      <div style={{ paddingBottom: index < total-1 ? "1rem" : 0 }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.75rem", color:"#C9A84C", opacity:0.7, display:"block", marginBottom:"0.35rem" }}>{item.time}</span>
        <h4 style={{ fontWeight:600, color:"#fff", fontSize:"0.95rem", marginBottom:"0.35rem" }}>{item.title}</h4>
        <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.45)", lineHeight:1.6 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── TRAINERS ─────────────────────────────────────────────────────────────────
function TrainersSection() {
  const trainers = [
    { initial:"J", name:"Jagan", title:"Senior Sales Leader & Certified NLP Practitioner", quote:"Every great sale begins long before the pitch — it starts with understanding how your customer's mind works.", bio:"Jagan is a seasoned professional with 30 years of experience, including 10 years in sales and 20-plus years in Learning & Development. He specializes in delivering high-impact programs on selling skills, which include the entire sales cycle from prospecting to closing the sale, drawing from his firsthand experience in sales to make learning practical and relevant. He also headed the sales enablement function for a large SaaS company, where he guided and coached the sales teams across geographies. Having worked with diverse industries such as IT, pharmaceuticals, manufacturing, and government institutions, he brings a strong contextual understanding to every session. Known for his clarity of thought and ability to simplify complex concepts, Jagan has trained and influenced over 30,000 professionals across India and globally, helping them enhance their sales effectiveness and achieve better business outcomes.", tags:["NLP Practitioner","B2B Sales","Leadership Coaching","Closing Specialist"], avatarGradient:"linear-gradient(135deg,#C9A84C,#A07830)", image: JaganImage },
    { initial:"V", name:"Vaishnav Ramesh", title:"Certified NLP & Positive Psychology Coach", quote:"The language you use doesn't just describe reality — it creates it. That's the power we bring to your sales conversations.", bio:"Vaishnav Ramesh is a Certified NLP & Positive Psychology Coach with 16+ years across Oil & Gas and SaaS — closing deals in the field, leading teams to $1M+ pipelines, and enabling 140+ Account Executives to sell with clarity and confidence.", tags:["NLP Communication","Rapport Building","B2C Expert","Storytelling"], avatarGradient:"linear-gradient(135deg,#2C3EC1,#1A2D5A)", image: VaishnavImage },
  ];
  return (
    <section id="trainers" style={{ padding:"75px 5% 50px 5%", background:"#F8F7F4" }}>
      <div style={{ textAlign:"center", marginBottom:"4rem" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A07830", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>Your Hosts</span>
        <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#0F1B3D" }}>
          Learn from the <em style={{ fontStyle:"italic", color:"#2C3EC1" }}>Best</em>
        </h2>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"2rem" }}>
        {trainers.map((t, i) => <TrainerCard key={i} trainer={t} delay={i*2} />)}
      </div>
    </section>
  );
}

function TrainerCard({ trainer: t, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`reveal reveal-d${delay}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:"#fff", borderRadius:16, overflow:"hidden", border:"1px solid rgba(0,0,0,0.06)", transition:"all 0.35s", transform: hovered ? "translateY(-8px)" : "none", boxShadow: hovered ? "0 30px 60px rgba(0,0,0,0.12)" : "none" }}>
      <div style={{ padding:"2rem 2rem 1rem", display:"flex", alignItems:"center", gap:"1.5rem", borderBottom:"1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ width:72, height:72, borderRadius:"50%", overflow:"hidden", border:`3px solid ${t.name === "Jagan" ? "#C9A84C" : "#2C3EC1"}`, boxShadow:"0 4px 15px rgba(0,0,0,0.15)", flexShrink:0 }}>
          <img src={t.image} alt={t.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", fontWeight:700, color:"#0F1B3D" }}>{t.name}</div>
          <div style={{ fontSize:"0.82rem", color:"#A07830", fontWeight:600, marginTop:"0.2rem" }}>{t.title}</div>
        </div>
      </div>
      <div style={{ padding:"1.5rem 2rem 2rem" }}>
        <div style={{ background:"#E8E8F8", borderLeft:"3px solid #2C3EC1", padding:"1rem 1.25rem", borderRadius:"0 8px 8px 0", fontSize:"0.875rem", fontStyle:"italic", color:"#1A2D5A", lineHeight:1.6, marginBottom:"1.25rem" }}>"{t.quote}"</div>
        <p style={{ fontSize:"0.875rem", color:"#4A4A6A", lineHeight:1.7, marginBottom:"1.25rem" }}>{t.bio}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
          {t.tags.map(tag => <span key={tag} style={{ fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.06em", padding:"0.3rem 0.75rem", borderRadius:100, background:"#E8E8F8", color:"#2C3EC1" }}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

// ─── PRICING CTA ──────────────────────────────────────────────────────────────
function PricingCTA({ onOpen }) {
  return (
    <section style={{ padding:"80px 5%", background:"#fff" }}>
      <div className="reveal" style={{ maxWidth:700, margin:"0 auto", textAlign:"center", background:"linear-gradient(135deg,#0F1B3D,#1A2D5A)", borderRadius:24, padding:"4rem 3rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(44,62,193,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(44,62,193,0.08) 1px, transparent 1px)", backgroundSize:"40px 40px" }} />
        <div style={{ position:"relative" }}>
          <span style={{ display:"inline-block", background:"rgba(201,168,76,0.15)", border:"1px solid rgba(201,168,76,0.35)", color:"#E8C97A", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", padding:"0.3rem 1rem", borderRadius:100, marginBottom:"1.5rem" }}>Limited Seats Available</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3vw,2.5rem)", fontWeight:700, color:"#fff", marginBottom:"1rem", lineHeight:1.2 }}>
            <em style={{ fontStyle:"italic", color:"#C9A84C" }}>Build the Skills That Move Your Sales Career Forward</em>
          </h2>
          <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.55)", marginBottom:"2.5rem", lineHeight:1.7 }}>Join Jagan & Vaishnav for a live, in-person NLP Sales Masterclass in Bangalore. Real skills. Real results.</p>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", flexWrap:"wrap" }}>
            <button onClick={onOpen} style={{ background:"#2C3EC1", color:"#fff", border:"none", padding:"1rem 2.5rem", borderRadius:8, fontWeight:700, fontSize:"1rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
              Reserve My Seat
            </button>
          </div>
          <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.3)", marginTop:"1.25rem" }}>📍 Bangalore · After April 20th · In-Person Only</p>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding:"50px 5%", background:"#F8F7F4" }}>
      <div style={{ textAlign:"center", marginBottom:"4rem" }}>
        <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A07830", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>Questions</span>
        <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, color:"#0F1B3D" }}>
          Got <strong style={{color:"#2C3EC1" }}>Questions?</strong>
        </h2>
      </div>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        {FAQS_MC.map((faq, i) => (
          <div key={i} style={{ borderBottom:"1px solid rgba(0,0,0,0.08)" }}>
            <button onClick={() => setOpen(open===i ? null : i)} style={{ width:"100%", textAlign:"left", padding:"1.5rem 0", background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:"1rem", color: open===i ? "#2C3EC1" : "#0F1B3D", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem" }}>
              {faq.q}
              <span style={{ width:28, height:28, flexShrink:0, borderRadius:"50%", background: open===i ? "#2C3EC1" : "#E8E8F8", color: open===i ? "#fff" : "#2C3EC1", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", transition:"all 0.3s", transform: open===i ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            <div style={{ maxHeight: open===i ? 300 : 0, overflow:"hidden", transition:"max-height 0.4s ease", fontSize:"0.9rem", color:"#4A4A6A", lineHeight:1.75, paddingBottom: open===i ? "1.5rem" : 0 }}>{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:"#0F1B3D", padding:"3rem 5% 1.5rem", borderTop:"1px solid rgba(201,168,76,0.15)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"2rem", marginBottom:"2rem" }}>
        <div>
          <img src={LogoDark} alt="MKraft Logo" style={{ height:40, marginBottom:"0.75rem" }} />
          <p style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.45)", lineHeight:1.7, maxWidth:280 }}>Empowering sales professionals with NLP-based training programmes.</p>
        </div>
        <div style={{ display:"flex", gap:"3rem", flexWrap:"wrap" }}>
          {[["Quick Links",["#what|What You'll Get","#agenda|Agenda","#trainers|Trainers","#faq|FAQ"]],["Contact",["mailto:info@mkraft.com|info@mkraft.com","#|Bangalore, India"]]].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.35)", marginBottom:"1rem" }}>{title}</h4>
              {links.map(link => { const [href,label]=link.split("|"); return (
                <div key={label} style={{ marginBottom:"0.6rem" }}><a href={href} style={{ color:"rgba(255,255,255,0.55)", textDecoration:"none", fontSize:"0.875rem" }}>{label}</a></div>
              ); })}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function MasterclassPage() {
  const [showModal, setShowModal] = useState(false);
  useReveal();

  return (
    <>
      <style>{globalStyles}</style>
      <Nav onOpen={() => setShowModal(true)} />
      <Hero onOpen={() => setShowModal(true)} />
      <TargetAudienceSection />
      <WhatSection />
      <AgendaSection />
      <TrainersSection />
      <PricingCTA onOpen={() => setShowModal(true)} />
      <FAQSection />
      <Footer />
      {showModal && <MultiStepRegistrationModal eventType="masterclass" onClose={() => setShowModal(false)} />}
    </>
  );
}