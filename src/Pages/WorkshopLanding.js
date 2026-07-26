import { useState, useEffect, useRef } from "react";
import MultiStepRegistrationModal from "./components/MultiStepRegistrationModal";
import LogoDark from "../Assets/MultipliersKraftLogoDark.png";
import JaganImage from "../Assets/Jagan.jpeg";
import VaishnavImage from "../Assets/FacuilityImages/Vaishnav_Ramesh.png";
import WorkshopImg1 from "../Assets/Workshop/image1.jpeg";
import WorkshopImg2 from "../Assets/Workshop/image2.jpeg";
import WorkshopImg3 from "../Assets/Workshop/image3.jpeg";
import { FaBrain, FaHandshake, FaEye, FaBolt, FaSearch, FaComments, FaBook, FaShieldAlt, FaBullseye, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaCreditCard, FaStar, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ─── STYLES ───────────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #F8F7F4; color: #1A1A2E; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0F1B3D; }
  ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 3px; }

  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes float { 0%,100%{transform:translateY(-50%) translateX(0)} 50%{transform:translateY(-52%) translateX(-10px)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
  @keyframes scaleIn { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
  @keyframes cardPopIn { 0%{opacity:0.3;transform:scale(0.92)} 60%{opacity:1;transform:scale(1.02)} 100%{opacity:1;transform:scale(1)} }

  .learn-slider-card { flex:0 0 300px; }
  @media (max-width: 768px) {
    .learn-slider-card { flex:0 0 260px; }
    .events-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .events-left { text-align: center; }
    .events-left p, .events-left h2 { margin-left: auto; margin-right: auto; }
    .events-right { max-width: 460px; margin: 0 auto; width: 100%; }
  }
  @media (max-width: 480px) {
    .events-grid { gap: 1.5rem !important; }
    .events-left h2 { font-size: 1.6rem !important; }
    .events-right { max-width: 100%; }
  }

  .reveal { opacity:0; transform:translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-d1 { transition-delay:0.1s; }
  .reveal-d2 { transition-delay:0.2s; }
  .reveal-d3 { transition-delay:0.3s; }
  .reveal-d4 { transition-delay:0.4s; }

  .modal-overlay { position:fixed; inset:0; z-index:2000; background:rgba(10,15,40,0.85); backdrop-filter:blur(8px); display:none; align-items:center; justify-content:center; padding:1.5rem; }
  .modal-overlay.open { display:flex; animation:fadeIn 0.25s ease; }
  .modal-box { background:#fff; border-radius:20px; width:100%; max-width:500px; max-height:90vh; overflow-y:auto; animation:slideUp 0.3s ease; position:relative; }
  .success-icon { animation: scaleIn 0.4s ease; }

  /* ========== RESPONSIVE STYLES ========== */

  /* Tablet (768px and below) */
  @media (max-width: 768px) {
    body { font-size: 14px; }

    /* Navigation - hide links, show only button */
    nav .nav-links { display: none !important; }
    nav { padding: 0 4% !important; height: 60px !important; }
    nav img { height: 32px !important; }
    nav button { padding: 0.4rem 1rem !important; font-size: 0.8rem !important; }

    /* Hero section */
    section[style*="minHeight"] { padding: 80px 4% 60px !important; }

    /* Hero section - two-column to vertical stack */
    .hero-content-wrapper {
      display: flex !important;
      flex-direction: column !important;
      gap: 3rem !important;
      align-items: stretch !important;
    }

    .hero-image-container {
      order: -1 !important;
      width: 100% !important;
      max-width: 500px !important;
      margin: 0 auto !important;
    }

    .hero-text-content {
      width: 100% !important;
      text-align: center !important;
    }

    .hero-text-content > div[style*="display:flex"] {
      justify-content: center !important;
    }

    /* Grid layouts - 1 column */
    div[style*="gridTemplateColumns"]:not(.hero-content-wrapper) { grid-template-columns: 1fr !important; }

    /* Countdown timer - smaller */
    div[style*="minWidth:70"] { min-width: 58px !important; padding: 0.6rem 0.8rem !important; }
    div[style*="minWidth:70"] span { font-size: 1.4rem !important; }

    /* Sections padding */
    section { padding: 60px 4% !important; }

    /* ProofBar - stack vertically */
    div[style*="flexWrap:wrap"] { flex-direction: column !important; gap: 0.75rem !important; }

    /* Day toggle buttons */
    button[style*="padding:0.75rem 2.5rem"] { padding: 0.65rem 1.5rem !important; font-size: 0.8rem !important; }

    /* Footer grid */
    footer > div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
  }

  /* Mobile (480px and below) */
  @media (max-width: 480px) {
    /* Hero section - full width image, centered text */
    .hero-content-wrapper {
      display: flex !important;
      flex-direction: column !important;
      gap: 2.5rem !important;
    }

    .hero-image-container {
      order: -1 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    .hero-image-container > div {
      max-width: 100% !important;
    }

    .hero-text-content {
      width: 100% !important;
      text-align: center !important;
    }

    .hero-text-content h1 {
      font-size: 2rem !important;
    }

    .hero-text-content p {
      max-width: 100% !important;
    }

    /* Buttons full width */
    button:not([style*="width:44px"]):not(.learn-slider-chevron), a[href][style*="padding"] { width: 100% !important; text-align: center !important; justify-content: center !important; }

    /* Countdown timer - stack horizontally but smaller */
    div[style*="minWidth:58"] { min-width: 50px !important; padding: 0.5rem 0.65rem !important; }
    div[style*="minWidth:58"] span { font-size: 1.15rem !important; }
    div[style*="minWidth:58"] div { font-size: 0.55rem !important; }

    /* Section headers */
    h1 { font-size: 2rem !important; line-height: 1.15 !important; }
    h2 { font-size: 1.6rem !important; }
    h3 { font-size: 1rem !important; }
    h4 { font-size: 0.9rem !important; }

    /* Cards padding */
    div[style*="padding:2rem"] { padding: 1.5rem !important; }
    div[style*="padding:3rem"] { padding: 2rem !important; }

    /* Modal */
    .modal-overlay { padding: 1rem !important; }

    /* Timeline items */
    div[style*="width:100"][style*="fontFamily"] { width: 70px !important; font-size: 0.7rem !important; }

    /* ProofBar items */
    div[style*="fontSize:0.85rem"] { font-size: 0.75rem !important; }
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ICON_MAP = {
  brain: FaBrain,
  handshake: FaHandshake,
  eye: FaEye,
  bolt: FaBolt,
  search: FaSearch,
  comments: FaComments,
  book: FaBook,
  shield: FaShieldAlt,
  target: FaBullseye,
  calendar: FaCalendarAlt,
  map: FaMapMarkerAlt,
  clock: FaClock,
  check: FaCheckCircle,
  star: FaStar,
};

const LEARN_CARDS = [
  { day: "Day 1 · Morning", icon: "brain", title: "NLP Communication Model", desc: "Understand how customers filter and perceive reality. Decode deletions, distortions, and generalisations to communicate in ways that truly land." },
  { day: "Day 1 · Morning", icon: "handshake", title: "Deep Rapport Building", desc: "Master matching & mirroring, pacing & leading, and sensory acuity. Build trust with any buyer in under 60 seconds using NLP techniques." },
  { day: "Day 1 · Late Morning", icon: "eye", title: "VAK Preference Mapping", desc: "Identify Visual, Auditory, and Kinesthetic buyer types. Craft messages that align with how each customer thinks and makes decisions." },
  { day: "Day 1 · Afternoon", icon: "bolt", title: "Buyer State Management", desc: "Use anchoring techniques to manage your own state and guide buyers into peak buying states using emotional triggers." },
  { day: "Day 1 · Afternoon", icon: "search", title: "NLP Questioning & Discovery", desc: "Apply Meta-Model questioning, chunk up/down to explore needs, and read meta-programs — toward/away, options/procedures, internal/external." },
  { day: "Day 2 · Morning", icon: "comments", title: "NLP Language Patterns for Pitching", desc: "Use Milton Model patterns, presuppositions, and embedded commands to craft short, powerful pitches that compel action." },
  { day: "Day 2 · Late Morning", icon: "book", title: "Storytelling for Sales", desc: "Build persuasive stories using sensory-rich VAK language. Convert product features into compelling customer narratives." },
  { day: "Day 2 · Late Morning", icon: "shield", title: "Objection Handling via Reframing", desc: "Master value, risk, trust, and timing objections. Use NLP language patterns to redefine objections and turn resistance into agreement." },
  { day: "Day 2 · Afternoon", icon: "target", title: "NLP Closing Techniques", desc: "Apply trial closes, double binds, assumptive closes, future pacing, and commitment questions in live B2C and B2B simulations." },
];

const DAY1 = [
  {
    section: "Day 1 — Morning",
    sectionTitle: "NLP Foundations & The Communication Model",
    items: [
      {
        time: "9:30 – 10:00",
        title: "Welcome & Context Setting",
        bullets: [
          'Icebreaker: "What is one selling challenge you face today?"',
          "Personal selling goals for the workshop",
          "What is NLP? How it enhances sales performance",
        ],
      },
      {
        time: "10:00 – 11:00",
        title: "NLP Communication Model for Sales",
        bullets: [
          "How customers perceive, filter, and respond",
          "Deletions, distortions & generalisations in customer communication",
          "How to speak to the customer's map of the world",
          "Activity: Decode a customer's verbal patterns",
        ],
      },
    ],
  },
  {
    section: "Day 1 — Late Morning",
    sectionTitle: "Building Deep Rapport & VAK Preference Mapping",
    items: [
      {
        time: "11:15 – 12:15",
        title: "Building Deep Rapport (NLP Style)",
        bullets: [
          "Matching & mirroring physiology",
          "Pacing & leading conversations",
          "Sensory acuity and calibration",
          "Lab practice: Build rapport in under 60 seconds",
        ],
      },
      {
        time: "12:15 – 1:00",
        title: "VAK Preference Mapping",
        bullets: [
          "Identifying Visual / Auditory / Kinesthetic buyer types",
          "Crafting messages that align with each type",
          "Quick practice: Convert one pitch into V-, A-, and K-language",
        ],
      },
    ],
  },
  {
    section: "Day 1 — Afternoon",
    sectionTitle: "Customer Buying States, Questioning & Need Discovery",
    items: [
      {
        time: "2:00 – 3:00",
        title: "Understanding Customer Buying States",
        bullets: [
          "Emotional states' influence on decisions",
          "State management for sellers (anchoring technique)",
          'Activity: Create a personal "peak performance anchor"',
        ],
      },
      {
        time: "3:00 – 4:00",
        title: "NLP-Based Questioning & Listening",
        bullets: [
          "Meta-Model questioning for clarity",
          "Chunking up & down to explore customer needs",
          "Reading meta-programs (toward/away, options/procedures)",
        ],
      },
      {
        time: "4:00 – 5:15",
        title: "The Structured Need Discovery Conversation",
        bullets: [
          "Combining rapport + questioning + state reading",
          "4-step NLP discovery framework",
          "Practice through paired role-plays (B2C and B2B scenarios)",
        ],
      },
    ],
  },
  {
    section: "Day 1 — Close",
    sectionTitle: "Daily Reflection",
    items: [
      {
        time: "5:15 – 5:30",
        title: "End of Day 1",
        bullets: [
          "What I Learned — participants capture their key NLP insights and communication breakthroughs from the day's sessions",
          "Where I Got Stuck — honest reflection on challenges faced, whether in rapport-building, VAK mapping, or the discovery framework",
          "1 Commitment for Day 2 — each participant sets one specific, actionable intention to carry into the second day",
        ],
      },
    ],
  },
];

const DAY2 = [
  {
    section: "Day 2 — Morning",
    sectionTitle: "Pitching Using NLP Language Patterns",
    items: [
      {
        time: "9:30 – 10:00",
        title: "Day 1 Recap + Anchoring Warm-Up",
        bullets: [
          'Quick review followed by a "State activation" energizer',
          "Anchors applied — getting participants into peak state",
        ],
      },
      {
        time: "10:00 – 11:00",
        title: "Pitching Using NLP Language Patterns",
        bullets: [
          "Milton model patterns to make messages compelling",
          "Using presuppositions in selling",
          "Using embedded commands ethically",
          "Crafting a powerful, short pitch",
        ],
      },
    ],
  },
  {
    section: "Day 2 — Late Morning",
    sectionTitle: "Storytelling for Sales & Objection Handling",
    items: [
      {
        time: "11:15 – 12:30",
        title: "Storytelling for Sales Using NLP",
        bullets: [
          "Structure of a persuasive story",
          "Using sensory-rich language (VAK)",
          "Practice: Convert a product feature into a customer story",
          "B2B & B2C examples",
        ],
      },
      {
        time: "12:30 – 1:15",
        title: "Objection Handling Using NLP Reframing",
        bullets: [
          "Types of objections (value, risk, trust, timing)",
          "Reframing perspectives",
          "Language patterns for redefining objections",
          "Exercise: Reframe 10 common objections",
        ],
      },
    ],
  },
  {
    section: "Day 2 — Afternoon",
    sectionTitle: "Decision Strategies & NLP-Based Closing Techniques",
    items: [
      {
        time: "2:00 – 3:00",
        title: "Decision Strategies & Buying Triggers",
        bullets: [
          "How customers internally decide (NLP decision strategies)",
          "Detecting patterns from language",
          'Leveraging "evidence procedures"',
        ],
      },
      {
        time: "3:00 – 4:00",
        title: "NLP-Based Closing Techniques",
        bullets: [
          "Trial closes using sensory language",
          "Double binds & assumptive closes",
          "Future pacing & commitment questions",
          "Practice: Closing simulations (B2B and B2C)",
        ],
      },
    ],
  },
  {
    section: "Day 2 — Final Session",
    sectionTitle: "Integrated Sales Role-Plays (Final Assessment)",
    items: [
      {
        time: "4:00 – 5:00",
        title: "Integrated Sales Role-Plays",
        bullets: [
          "B2C Scenarios: Retail, Insurance, Real estate, Personal services",
          "B2B Scenarios: SaaS, Consulting, Manufacturing, Distribution",
          "Role-play structure: Rapport → Discovery → Pitch → Objection Handling → Close",
          "NLP checklist used for peer feedback",
        ],
      },
    ],
  },
  {
    section: "Day 2 — Workshop Closure",
    sectionTitle: "Bringing It All Together",
    items: [
      {
        time: "5:00 – 5:30",
        title: "Workshop Closure",
        bullets: [
          "Personal Sales Blueprint — each participant leaves with a personalised plan integrating NLP techniques into their unique sales approach",
          "NLP Techniques to Practise Daily — a curated set of NLP tools and habits to embed into everyday selling, from anchoring to language patterns",
          "Certification + Group Photo — participants receive their certification and celebrate the completion of the two-day programme together",
        ],
      },
    ],
  },
];

const TESTIMONIALS = [
  { initials: "RK", name: "Rahul Krishnan", role: "Senior Sales Executive, Insurance", text: "The VAK mapping alone transformed how I approach every customer conversation. Within two weeks, my closing rate improved dramatically. The rapport-building techniques work across every industry." },
  { initials: "PS", name: "Priya Sharma", role: "Business Development Manager, SaaS", text: "I've attended many sales trainings, but this was the first time I understood *why* certain techniques work. The NLP framework gives you a mental model that applies across every sales situation you'll ever face." },
  { initials: "AM", name: "Arjun Mehta", role: "Sales Manager, Real Estate", text: "Jagan and Vaishnav don't just teach — they demonstrate. Watching the objection reframing exercises live was eye-opening. I now handle 'it's too expensive' with total confidence." },
  { initials: "DT", name: "Divya Thomas", role: "Key Account Manager, Manufacturing", text: "The anchoring technique for state management has been a game changer. I used to get nervous before big pitches — now I step in already in peak state. Highly recommend." },
  { initials: "VN", name: "Vikram Nair", role: "VP Sales, Consulting Firm", text: "The structured need discovery framework completely replaced how our team qualifies leads. The combination of NLP listening tools and the 4-step model is now used company-wide." },
];

const FAQS = [
  { q: "What will I learn in the 2-day NLP Sales Workshop?", a: "You’ll learn how to apply NLP-based selling techniques across the entire sales cycle, including customer psychology, objection handling, pitching, influencing, and closing sales conversations with confidence." },
  { q: "Who is this workshop best suited for?", a: "This workshop is designed for sales professionals across any industry who are looking to strengthen their communication and selling skills." },
  { q: "Who is conducting this sales training program?", a: "Mr. Jagannatha Rao and Mr. Vaishnav Ramesh will conduct this sales training program. Mr. Jagannatha Rao (Jagan) is a seasoned professional with 30 years of experience, including 10 years in sales and 20+ years in Learning & Development. He also headed the sales enablement function for a large SaaS company, where he coached sales teams across geographies. Vaishnav Ramesh is a Certified NLP & Positive Psychology Coach with 16+ years of experience across Oil & Gas and SaaS, closing deals in the field, leading teams to $1M+ pipelines, and enabling 140+ Account Executives to sell with clarity and confidence." },
  { q: "How is this different from other sales training programs?", a: "Unlike theory-heavy sales programs, this workshop combines real-world sales experience with NLP techniques, focusing on mindset, communication, and practical application across the entire sales cycle, from prospecting to closing." },
  { q: "What is the structure of the 2-day workshop?", a: "The workshop is divided into Day 1: Inner Game (mindset, rapport building, customer psychology) and Day 2: Outer Game (pitching, objection handling, closing techniques)." },
  { q: "Will there be hands-on practice, or is it only theoretical?", a: "The workshop is highly interactive and practice-oriented, including role-plays, live simulations, and practical exercises such as rapport-building, need discovery, objection handling, and closing scenarios." },
  { q: "What outcomes can I expect after attending the workshop?", a: "You’ll walk away with a personalised sales blueprint, improved confidence, and practical NLP tools that you can immediately apply in real sales conversations." },
  { q: "Will the 2-day workshop be recorded?", a: "The 2-day workshop is designed as a highly immersive, in-person learning experience. However, recordings may be shared on request for revision and learning purposes." },
  { q: "Where will the 2-day workshop be conducted, and what is the format?", a: "The workshop will be conducted offline in Bangalore, ensuring deep learning through face-to-face interaction, coaching, and peer practice." },
  { q: "Do participants need to bring their own laptops for the workshop?", a: "Yes. Participants are requested to bring their own laptops for the 2-day workshop. Certain activities, exercises, and note-taking sessions may require participants to work on their devices during the program." },
  { q: "Will food and refreshments be provided during the workshop?", a: "Yes. Lunch and refreshments/snacks will be provided for all participants during both days of the workshop to ensure a comfortable and engaging learning experience." },
  { q: "Will I receive a certificate after completing the workshop?", a: "Yes. All participants will receive a participation certificate upon completing the 2-day program from MultipliersKraft." },
  { q: "What if I can’t attend this batch? Will there be future workshops?", a: "Yes. Additional batches may be scheduled based on demand. You can register your interest for upcoming sessions." },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(targetDate) - new Date());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
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
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function Nav({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding:"0 5%", display:"flex", alignItems:"center", justifyContent:"space-between", height:70, background: scrolled ? "rgba(15,27,61,0.99)" : "rgba(15,27,61,0.95)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(201,168,76,0.2)", boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none", transition:"all 0.3s" }}>
      <img src={LogoDark} alt="MKraft Logo" style={{ height:40 }} />
      <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
        <div className="nav-links" style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
          {["#learn","#schedule","#trainers","#faq"].map((h, i) => (
            <a key={i} href={h} style={{ color:"rgba(255,255,255,0.75)", textDecoration:"none", fontSize:"0.875rem", fontWeight:500, letterSpacing:"0.05em", textTransform:"uppercase" }}>
              {["Learn","Schedule","Trainers","FAQ"][i]}
            </a>
          ))}
        </div>
        <button onClick={() => onOpenModal("workshop")} style={{ background:"#C9A84C", color:"#0F1B3D", border:"none", padding:"0.5rem 1.25rem", borderRadius:4, fontWeight:600, fontSize:"0.875rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Register Now</button>
      </div>
    </nav>
  );
}

function SectionHeader({ tag, title, sub, centered, titleEm }) {
  return (
    <div className="section-header" style={{ marginBottom:"4rem", textAlign: centered ? "center" : "left" }}>
      <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A07830", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>{tag}</span>
      <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:700, lineHeight:1.2, color:"#0F1B3D", marginBottom:"1rem" }}
        dangerouslySetInnerHTML={{ __html: title.replace(titleEm, `<em style="font-style:italic;color:#2C3EC1">${titleEm}</em>`) }}
      />
      {sub && <p className="reveal reveal-d2" style={{ fontSize:"1.05rem", lineHeight:1.7, color:"#4A4A6A", maxWidth:600, margin: centered ? "0 auto" : 0 }}>{sub}</p>}
    </div>
  );
}

// ─── REGISTRATION MODAL (Now using multi-step flow with email verification) ──

// ─── SECTIONS ─────────────────────────────────────────────────────────────────
function Hero({ onOpenModal }) {
  const cd = useCountdown("2025-04-21T00:00:00");
  return (
    <section style={{ minHeight:"100vh", background:"#0F1B3D", position:"relative", display:"flex", alignItems:"center", overflow:"hidden", padding:"100px 5% 80px" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 50% at 70% 50%, rgba(44,62,193,0.25) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,168,76,0.12) 0%, transparent 60%)" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize:"60px 60px" }} />

      {/* Two-column layout: Text left, Image right */}
      <div className="hero-content-wrapper" style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center", width:"100%", maxWidth:"1400px", margin:"0 auto" }}>

        {/* Left Column - Text Content */}
        <div className="hero-text-content" style={{ position:"relative" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", border:"1px solid rgba(201,168,76,0.4)", background:"rgba(201,168,76,0.08)", color:"#E8C97A", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", padding:"0.4rem 1rem", borderRadius:100, marginBottom:"2rem" }}>
            <span style={{ animation:"pulse 2s infinite", fontSize:"0.5rem" }}>●</span> 1st July · Bangalore
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.2rem,5vw,4rem)", fontWeight:900, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
            Master the <em style={{ fontStyle:"italic", color:"#C9A84C" }}>Psychology</em><br/>of Selling
          </h1>
          <p style={{ fontSize:"1.1rem", lineHeight:1.7, color:"rgba(255,255,255,0.65)", marginBottom:"2.5rem", maxWidth:560 }}>
            A transformative programme combining <strong style={{ color:"rgba(255,255,255,0.85)" }}>Neuro-Linguistic Programming</strong> with practical selling skills — designed to elevate your mindset, communication, and closing performance.
          </p>
          <p style={{ fontSize:"0.75rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:"0.75rem" }}>Masterclass begins after April 20th</p>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
            <button onClick={() => onOpenModal("workshop")} style={{ background:"#C9A84C", color:"#0F1B3D", border:"none", padding:"0.9rem 1.75rem", borderRadius:6, fontWeight:700, fontSize:"0.95rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Enroll in 2-Day Workshop</button>
          </div>
          
          {/* <div style={{ display:"flex", gap:"1rem", alignItems:"center" }}>
            {[["d","Days"],["h","Hrs"],["m","Min"],["s","Sec"]].map(([key, label], i) => (
              <>
                {i > 0 && <span style={{ fontSize:"1.5rem", color:"rgba(201,168,76,0.4)", marginBottom:"0.75rem" }}>:</span>}
                <div key={key} style={{ textAlign:"center", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"0.75rem 1rem", minWidth:70 }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"1.75rem", fontWeight:500, color:"#C9A84C", lineHeight:1, display:"block" }}>{String(cd[key]).padStart(2,"0")}</span>
                  <div style={{ fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginTop:"0.25rem" }}>{label}</div>
                </div>
              </>
            ))}
          </div> */}
        </div>

        {/* Right Column - Workshop Image */}
        <div className="hero-image-container" style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ position:"relative", width:"100%", maxWidth:"550px", aspectRatio:"4/3", borderRadius:"20px", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.4)", border:"3px solid rgba(44,62,193,0.3)" }}>
            <img
              src={WorkshopImg1}
              alt="MKraft NLP Workshop — Live Training Session"
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(44,62,193,0.15), rgba(201,168,76,0.15))" }} />
          </div>

          {/* Decorative blur elements */}
          <div style={{ position:"absolute", top:"10%", right:"-10%", width:"200px", height:"200px", background:"rgba(201,168,76,0.15)", borderRadius:"50%", filter:"blur(60px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"15%", left:"-5%", width:"180px", height:"180px", background:"rgba(44,62,193,0.2)", borderRadius:"50%", filter:"blur(50px)", pointerEvents:"none" }} />
        </div>

      </div>
    </section>
  );
}

function ProofBar() {
  const items = ["500+ Sales Professionals Trained", "MKraft Certified Programme", "B2C & B2B Focus", "NLP-Based Methodology"];
  return (
    <div style={{ background:"#C9A84C", padding:"1rem 5%", display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem", flexWrap:"wrap" }}>
      {items.map((item, i) => (
        <>
          {i > 0 && <span key={`d${i}`} style={{ color:"rgba(15,27,61,0.3)", fontSize:"1.2rem" }}>|</span>}
          <div key={item} style={{ display:"flex", alignItems:"center", gap:"0.5rem", fontWeight:600, fontSize:"0.85rem", color:"#0F1B3D" }}>
            <FaStar size={12} style={{ color:"#0F1B3D" }} /> {item}
          </div>
        </>
      ))}
    </div>
  );
}

function LearnSection({ onOpenModal }) {
  const total = LEARN_CARDS.length;
  const loop = [...LEARN_CARDS, ...LEARN_CARDS, ...LEARN_CARDS];
  const [index, setIndex] = useState(total);
  const [animating, setAnimating] = useState(true);
  const [paused, setPaused] = useState(false);
  const [tickReset, setTickReset] = useState(0);
  const [cardStep, setCardStep] = useState(324);

  useEffect(() => {
    const updateStep = () => setCardStep(window.innerWidth <= 768 ? 284 : 324);
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex(prev => prev + 1), 2500);
    return () => clearInterval(id);
  }, [paused, tickReset]);

  useEffect(() => {
    if (index >= total && index < 2 * total) return;
    const id = setTimeout(() => {
      setAnimating(false);
      setIndex((index % total + total) % total + total);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimating(true)));
    }, 750);
    return () => clearTimeout(id);
  }, [index, total]);

  const nudge = (dir) => {
    setIndex(prev => prev + dir);
    setTickReset(t => t + 1);
  };

  const chevronStyle = (side) => ({
    position:"absolute", top:"50%", [side]: "6px", transform:"translateY(-50%)", zIndex:4,
    width:44, height:44, borderRadius:"50%", border:"none", cursor:"pointer",
    background:"#0F1B3D", color:"#C9A84C",
    display:"flex", alignItems:"center", justifyContent:"center",
    boxShadow:"0 8px 24px rgba(15,27,61,0.25)", transition:"transform 0.2s, background 0.2s",
  });

  return (
    <section id="learn" style={{ padding:"100px 5%", background:"#F8F7F4" }}>
      <SectionHeader tag="Programme Curriculum" title="Everything You'll Master" titleEm="Master" sub="A comprehensive NLP-driven framework spanning mindset, communication, influence, and closing — built for real-world B2C and B2B sales." centered />
      <div style={{ position:"relative", maxWidth:"1400px", margin:"0 auto" }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <button aria-label="Previous" onClick={() => nudge(-1)} className="learn-slider-chevron" style={chevronStyle("left")}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; e.currentTarget.style.background = "#1A2D5A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; e.currentTarget.style.background = "#0F1B3D"; }}>
          <FaChevronLeft size={16} />
        </button>
        <button aria-label="Next" onClick={() => nudge(1)} className="learn-slider-chevron" style={chevronStyle("right")}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; e.currentTarget.style.background = "#1A2D5A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; e.currentTarget.style.background = "#0F1B3D"; }}>
          <FaChevronRight size={16} />
        </button>
        <div style={{ position:"relative", overflow:"hidden", WebkitMaskImage:"linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)", maskImage:"linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)" }}>
          <div style={{ display:"flex", gap:"1.5rem", transform:`translateX(-${index * cardStep}px)`, transition: animating ? "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)" : "none", willChange:"transform" }}>
            {loop.map((card, i) => (
              <div key={i} className="learn-slider-card" style={{ animation: `cardPopIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${(i % total) * 0.04}s both` }}>
                <LearnCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnCard({ card }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = ICON_MAP[card.icon];
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background:"#fff", border:"1px solid rgba(0,0,0,0.06)", borderRadius:12, padding:"2rem 1.5rem", position:"relative", overflow:"hidden", transition:"all 0.35s", transform: hovered ? "translateY(-6px)" : "none", boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.04)", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", minHeight:"220px", height:"100%" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#2C3EC1,#C9A84C)", transformOrigin:"left", transform: hovered ? "scaleX(1)" : "scaleX(0)", transition:"transform 0.4s" }} />
      <div style={{ width:60, height:60, borderRadius:14, background:"linear-gradient(135deg,#2C3EC1,#4A5FE0)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1.25rem", boxShadow:"0 8px 22px rgba(44,62,193,0.28)", color:"#fff" }}>
        {IconComponent && <IconComponent size={28} />}
      </div>
      <span style={{ display:"inline-block", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", background:"#E8E8F8", color:"#2C3EC1", padding:"0.25rem 0.7rem", borderRadius:100, marginBottom:"0.85rem" }}>{card.day}</span>
      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", fontWeight:700, color:"#0F1B3D", lineHeight:1.35 }}>{card.title}</h3>
    </div>
  );
}

const DAY_OVERVIEW = {
  1: {
    title: "Day 1 — The Inner Game",
    subtitle: "Mindset + NLP Foundations",
    desc: "Understanding self, customer psychology, and building rapport through NLP.",
  },
  2: {
    title: "Day 2 — The Outer Game",
    subtitle: "Application + Influence + Closing",
    desc: "NLP tools applied to pitching, handling objections, influencing decisions, and closing.",
  },
};

function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);
  const schedule = activeDay === 1 ? DAY1 : DAY2;
  const overview = DAY_OVERVIEW[activeDay];
  return (
    <section id="schedule" style={{ padding:"100px 5%", background:"#0F1B3D" }}>
      <SectionHeader tag="2-Day Agenda" title="Your Workshop Schedule" titleEm="Workshop"
        sub="A structured, intensive two-day programme designed to move from NLP foundations to live closing simulations."
      />
      <style>{`#schedule .section-header h2,#schedule .section-header span,#schedule .section-header p{color:rgba(255,255,255,0.9) !important}.section-header span{color:#E8C97A !important}#schedule p.reveal{color:rgba(255,255,255,0.55) !important}`}</style>
      <div style={{ display:"flex", gap:0, marginBottom:"1.5rem", background:"rgba(255,255,255,0.05)", borderRadius:10, padding:5, width:"fit-content" }}>
        {["Day 1 — The Inner Game","Day 2 — The Outer Game"].map((label, i) => (
          <button key={i} onClick={() => setActiveDay(i+1)} style={{ padding:"0.75rem 2.5rem", borderRadius:7, fontWeight:600, fontSize:"0.9rem", cursor:"pointer", border:"none", fontFamily:"'DM Sans',sans-serif", background: activeDay===i+1 ? "#C9A84C" : "transparent", color: activeDay===i+1 ? "#0F1B3D" : "rgba(255,255,255,0.5)", boxShadow: activeDay===i+1 ? "0 4px 15px rgba(201,168,76,0.3)" : "none", transition:"all 0.3s" }}>{label}</button>
        ))}
      </div>
      <div key={activeDay} style={{ background:"linear-gradient(135deg, rgba(201,168,76,0.08), rgba(44,62,193,0.08))", border:"1px solid rgba(201,168,76,0.25)", borderLeft:"4px solid #C9A84C", borderRadius:12, padding:"1.5rem 1.75rem", marginBottom:"3rem", maxWidth:"720px", animation:"fadeIn 0.4s ease" }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.35rem", fontWeight:700, color:"#fff", marginBottom:"0.35rem" }}>{overview.title}</div>
        <div style={{ fontSize:"0.85rem", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"#E8C97A", marginBottom:"0.75rem" }}>{overview.subtitle}</div>
        <p style={{ fontSize:"0.95rem", lineHeight:1.7, color:"rgba(255,255,255,0.7)" }}>{overview.desc}</p>
      </div>
      <div>
        {schedule.map((block, i) => (
          <div key={i} style={{ marginBottom:"2rem" }}>
            <div style={{ margin:"2.5rem 0 1.25rem" }}>
              <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#C9A84C", marginBottom:"0.4rem", display:"flex", alignItems:"center", gap:"0.75rem" }}>
                {block.section}
                <div style={{ flex:1, height:1, background:"rgba(201,168,76,0.2)" }} />
              </div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", fontWeight:600, color:"#fff", letterSpacing:"0.01em" }}>{block.sectionTitle}</div>
            </div>
            {block.items.map((item, j) => <TimelineItem key={j} item={item} />)}
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display:"flex", gap:"1.5rem", padding:"1.5rem 0", borderBottom:"1px solid rgba(255,255,255,0.06)", paddingLeft: hovered ? "0.5rem" : 0, transition:"padding 0.3s" }}>
      <span style={{ flexShrink:0, width:110, fontFamily:"'DM Mono',monospace", fontSize:"0.8rem", color:"#C9A84C", opacity:0.8, paddingTop:"0.2rem", lineHeight:1.4 }}>{item.time}</span>
      <div style={{ flexShrink:0, width:10, height:10, borderRadius:"50%", background:"#2C3EC1", marginTop:"0.45rem", border:"2px solid rgba(44,62,193,0.4)" }} />
      <div style={{ flex:1 }}>
        <h4 style={{ fontWeight:600, color:"#fff", fontSize:"1rem", marginBottom:"0.65rem" }}>{item.title}</h4>
        <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"0.45rem" }}>
          {item.bullets.map((b, k) => (
            <li key={k} style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.6)", lineHeight:1.65, display:"flex", gap:"0.65rem", alignItems:"baseline" }}>
              <span style={{ color:"#C9A84C", flexShrink:0, fontSize:"0.65rem", marginTop:"0.2rem" }}>▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrainersSection() {
  const trainers = [
    { initial:"J", name:"Jagan", title:"Senior Sales Leader & Certified NLP Practitioner", quote:"Every great sale begins long before the pitch — it starts with understanding how your customer's mind works.", bio:"Jagan is a seasoned professional with 30 years of experience, including 10 years in sales and 20-plus years in Learning & Development. He specializes in delivering high-impact programs on selling skills, which include the entire sales cycle from prospecting to closing the sale, drawing from his firsthand experience in sales to make learning practical and relevant. He also headed the sales enablement function for a large SaaS company, where he guided and coached the sales teams across geographies. Having worked with diverse industries such as IT, pharmaceuticals, manufacturing, and government institutions, he brings a strong contextual understanding to every session. Known for his clarity of thought and ability to simplify complex concepts, Jagan has trained and influenced over 30,000 professionals across India and globally, helping them enhance their sales effectiveness and achieve better business outcomes.", tags:["NLP Practitioner","B2B Sales","Leadership Coaching","Closing Specialist"], bannerGradient:"linear-gradient(135deg,#0F1B3D,#1A2D5A,#2C3EC1)", avatarGradient:"linear-gradient(135deg,#C9A84C,#A07830)", image:JaganImage },
    { initial:"V", name:"Vaishnav Ramesh", title:"Certified NLP & Positive Psychology Coach", quote:"The language you use doesn't just describe reality — it creates it. That's the power we bring to your sales conversations.", bio:"Vaishnav Ramesh is a Certified NLP & Positive Psychology Coach with 16+ years across Oil & Gas and SaaS — closing deals in the field, leading teams to $1M+ pipelines, and enabling 140+ Account Executives to sell with clarity and confidence.", tags:["NLP Communication","Rapport Building","B2C Expert","Storytelling"], bannerGradient:"linear-gradient(135deg,#7A5C20,#C9A84C,#E8C97A)", avatarGradient:"linear-gradient(135deg,#2C3EC1,#0F1B3D)", image:VaishnavImage },
  ];
  return (
    <section id="trainers" style={{ padding:"100px 5%", background:"#F8F7F4" }}>
      <SectionHeader tag="Your Coaches" title="Meet Your Trainers" titleEm="Trainers" sub="Learn from experienced sales leaders and certified NLP practitioners who bring both theory and real-world selling wisdom." centered />
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
      <div style={{ height:120, background:t.bannerGradient, position:"relative" }}>
        <div style={{ position:"absolute", bottom:-30, left:0, right:0, height:60, background:"#fff", clipPath:"ellipse(60% 100% at 50% 100%)" }} />
        <div style={{ position:"absolute", bottom:-30, left:"2rem", width:120, height:120, borderRadius:"50%", overflow:"hidden", border:`4px solid ${t.name === "Jagan" ? "#C9A84C" : "#2C3EC1"}`, boxShadow:"0 4px 15px rgba(0,0,0,0.15)", zIndex:1 }}>
          <img src={t.image} alt={t.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>
      </div>
      <div style={{ padding:"3rem 2rem 2rem" }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", fontWeight:700, color:"#0F1B3D", marginBottom:"0.25rem" }}>{t.name}</div>
        <div style={{ fontSize:"0.85rem", color:"#A07830", fontWeight:600, marginBottom:"1rem" }}>{t.title}</div>
        <div style={{ background:"#E8E8F8", borderLeft:"3px solid #2C3EC1", padding:"1rem 1.25rem", borderRadius:"0 8px 8px 0", fontSize:"0.875rem", fontStyle:"italic", color:"#1A2D5A", lineHeight:1.6, marginBottom:"1.5rem" }}>"{t.quote}"</div>
        <p style={{ fontSize:"0.875rem", color:"#4A4A6A", lineHeight:1.7, marginBottom:"1.5rem" }}>{t.bio}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
          {t.tags.map(tag => <span key={tag} style={{ fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.06em", padding:"0.3rem 0.75rem", borderRadius:100, background:"#E8E8F8", color:"#2C3EC1" }}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

function GallerySection() {
  const images = [
    { src: WorkshopImg1, alt: "Live MKraft workshop — intimate training session", caption: "Live Workshops" },
    { src: WorkshopImg2, alt: "MKraft session with a full audience of sales professionals", caption: "Full-House Sessions" },
    { src: WorkshopImg3, alt: "Jagan delivering a sales psychology session on stage", caption: "Expert-Led Delivery" },
  ];
  return (
    <section style={{ padding:"100px 5%", background:"#F8F7F4" }}>
      <SectionHeader tag="Inside the Sessions" title="Glimpses From Past Workshops" titleEm="Past Workshops" sub="Real moments from MKraft workshops — interactive, immersive, and grounded in practical NLP for sales." centered />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", maxWidth:"1200px", margin:"0 auto" }}>
        {images.map((img, i) => (
          <div key={i} className={`reveal reveal-d${i}`} style={{ position:"relative", borderRadius:16, overflow:"hidden", aspectRatio:"4/3", boxShadow:"0 12px 30px rgba(0,0,0,0.1)", border:"1px solid rgba(0,0,0,0.06)", background:"#fff" }}>
            <img src={img.src} alt={img.alt} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, transparent 55%, rgba(15,27,61,0.78) 100%)" }} />
            <div style={{ position:"absolute", left:"1.25rem", bottom:"1rem", color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", fontWeight:600, letterSpacing:"0.02em" }}>{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventsSection({ onOpenModal }) {
  return (
    <section id="events" style={{ padding:"80px 5%", background:"#fff" }}>
      <div className="events-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", maxWidth:"1150px", margin:"0 auto", alignItems:"center" }}>
        <div className="events-left">
          <span className="reveal" style={{ display:"inline-block", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#A07830", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.25)", padding:"0.3rem 0.75rem", borderRadius:100, marginBottom:"1.25rem" }}>Ready to Transform?</span>
          <h2 className="reveal reveal-d1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.7rem,3vw,2.4rem)", fontWeight:700, lineHeight:1.2, color:"#0F1B3D", marginBottom:"1rem" }}>
            Enroll in the <em style={{ fontStyle:"italic", color:"#2C3EC1" }}>Workshop</em>
          </h2>
          <p className="reveal reveal-d2" style={{ fontSize:"1rem", lineHeight:1.7, color:"#4A4A6A", marginBottom:"1.75rem", maxWidth:480 }}>
            Join us for the full 2-day intensive programme and transform your sales career with practical NLP frameworks you can apply from day one.
          </p>
          <div className="reveal reveal-d3" style={{ padding:"1.25rem 1.5rem", background:"#F8F7F4", borderRadius:12, border:"1px solid rgba(0,0,0,0.05)" }}>
            <p style={{ fontSize:"0.9rem", color:"#4A4A6A", marginBottom:"0.85rem" }}>
              <strong style={{color:"#0F1B3D"}}>Not ready to commit?</strong> Try our 1-hour Masterclass first.
            </p>
            <a href="/nlp-masterclass-experience" style={{ display:"inline-block", padding:"0.6rem 1.25rem", background:"#2C3EC1", color:"#fff", borderRadius:8, textDecoration:"none", fontWeight:600, fontSize:"0.85rem", fontFamily:"'DM Sans',sans-serif" }}>
              Attend Masterclass (₹199) →
            </a>
          </div>
        </div>
        <div className="events-right">
          <EventCard type="workshop" onOpen={() => onOpenModal("workshop")} />
        </div>
      </div>
    </section>
  );
}

function EventCard({ type, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const isMC = type === "masterclass";
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ borderRadius:14, overflow:"hidden", border: isMC ? "2px solid rgba(44,62,193,0.2)" : "2px solid rgba(201,168,76,0.4)", transition:"all 0.35s", transform: hovered ? "translateY(-6px)" : "none", boxShadow: hovered ? (isMC ? "0 20px 50px rgba(44,62,193,0.15)" : "0 20px 50px rgba(201,168,76,0.15)") : "0 6px 20px rgba(0,0,0,0.05)" }}>
      <div style={{ padding:"1.25rem 1.5rem", background: isMC ? "linear-gradient(135deg,#0F1B3D,#1A2D5A)" : "linear-gradient(135deg,#A07830,#7A5C20)" }}>
        <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", marginBottom:"0.5rem" }}>{isMC ? "1-Hour Experience" : "Full Programme"}</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", fontWeight:700, color:"#fff", marginBottom:"0.35rem", lineHeight:1.2 }}>{isMC ? "Free Masterclass" : "2-Day NLP Workshop"}</div>
        <div style={{ fontSize:"1.85rem", fontWeight:800, color:"#fff", lineHeight:1 }}>{isMC ? "₹199" : "₹25,000"} <span style={{ fontSize:"0.85rem", fontWeight:400, opacity:0.7 }}>/ person</span></div>
      </div>
      <div style={{ padding:"1.25rem 1.5rem", background:"#fff" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", marginBottom:"1.1rem" }}>
          {(isMC ? [[<FaCalendarAlt />,"After April 20th, 2025"],[<FaMapMarkerAlt />,"Bangalore (Offline)"],[<FaClock />,"1 Hour Intensive"]] : [[<FaCalendarAlt />,"May 2025 (Dates TBC)"],[<FaMapMarkerAlt />,"Bangalore (Offline)"],[<FaClock />,"2 Full Days (9:30 AM – 5:30 PM)"]]).map(([Icon, text]) => (
            <div key={text} style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.82rem", color:"#4A4A6A" }}><span style={{ color:"#2C3EC1", display:"flex" }}>{Icon}</span>{text}</div>
          ))}
        </div>
        <div style={{ marginBottom:"1.1rem" }}>
          <h4 style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#8888AA", marginBottom:"0.5rem" }}>What's Included</h4>
          {(isMC
            ? ["Introduction to NLP in Sales","Live demonstration of key techniques","Q&A with Jagan & Vaishnav","Early access to Workshop registration","Confirmation email + 1-day reminder"]
            : ["Full 2-day NLP curriculum","Live role-play & peer coaching","Personal Sales Blueprint","MKraft Certificate of Completion","NLP Daily Practice Guide","Confirmation + reminder emails"]
          ).map(item => (
            <div key={item} style={{ display:"flex", alignItems:"center", gap:"0.45rem", fontSize:"0.82rem", color:"#1A1A2E", padding:"0.25rem 0" }}>
              <FaCheckCircle style={{ color:"#22C55E", flexShrink:0 }} size={14} />{item}
            </div>
          ))}
        </div>
        <button onClick={onOpen} style={{ width:"100%", padding:"0.8rem", border:"none", borderRadius:8, fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:"0.9rem", cursor:"pointer", background: isMC ? "#2C3EC1" : "#C9A84C", color: isMC ? "#fff" : "#0F1B3D", transition:"all 0.25s" }}>
          {isMC ? "Register for Masterclass →" : "Enroll in Workshop →"}
        </button>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const go = (dir) => setCurrent((current + dir + total) % total);
  const visible = [TESTIMONIALS[current], TESTIMONIALS[(current+1)%total], TESTIMONIALS[(current+2)%total]];
  return (
    <section id="testimonials" style={{ padding:"100px 5%", background:"#0F1B3D", overflow:"hidden" }}>
      <SectionHeader tag="Participant Stories" title="What Participants Say" titleEm="Participants" sub="Sales professionals who've experienced the MKraft NLP methodology." centered />
      <style>{`#testimonials h2,#testimonials span.reveal,#testimonials p.reveal{color:rgba(255,255,255,0.9) !important}`}</style>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
        {visible.map((t, i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"2rem" }}>
            <div style={{ color:"#C9A84C", fontSize:"0.9rem", letterSpacing:"0.1em", marginBottom:"1rem" }}>★★★★★</div>
            <p style={{ fontSize:"0.9rem", lineHeight:1.7, color:"rgba(255,255,255,0.75)", marginBottom:"1.5rem", fontStyle:"italic" }}>"{t.text}"</p>
            <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
              <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#2C3EC1,#C9A84C)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, color:"#fff", fontSize:"0.9rem" }}>{t.initials}</div>
              <div>
                <div style={{ fontWeight:600, color:"#fff", fontSize:"0.9rem" }}>{t.name}</div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.4)" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginTop:"2.5rem" }}>
        <button onClick={() => go(-1)} style={{ width:44, height:44, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)", background:"transparent", color:"#fff", cursor:"pointer", fontSize:"1rem" }}>←</button>
        <div style={{ display:"flex", gap:"0.5rem" }}>
          {Array.from({length: Math.ceil(total/3)}).map((_, i) => (
            <div key={i} onClick={() => setCurrent(i*3)} style={{ height:8, borderRadius:4, background: Math.floor(current/3)===i ? "#C9A84C" : "rgba(255,255,255,0.2)", width: Math.floor(current/3)===i ? 24 : 8, cursor:"pointer", transition:"all 0.25s" }} />
          ))}
        </div>
        <button onClick={() => go(1)} style={{ width:44, height:44, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.2)", background:"transparent", color:"#fff", cursor:"pointer", fontSize:"1rem" }}>→</button>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding:"100px 5%", background:"#F8F7F4" }}>
      <SectionHeader tag="Questions" title="Frequently Asked" titleEm="Asked" centered />
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        {FAQS.map((faq, i) => (
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

function Footer() {
  return (
    <footer style={{ background:"#0F1B3D", padding:"4rem 5% 2rem", borderTop:"1px solid rgba(201,168,76,0.15)" }}>
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:"3rem", marginBottom:"3rem" }}>
        <div>
          <img src={LogoDark} alt="MKraft Logo" style={{ height:40, marginBottom:"1rem" }} />
          <p style={{ fontSize:"0.875rem", color:"rgba(255,255,255,0.45)", lineHeight:1.7, maxWidth:280 }}>Empowering sales professionals with transformative training programmes that combine psychology, NLP, and practical selling skills.</p>
        </div>
        {[["Programme",["#learn|What You'll Learn","#schedule|2-Day Schedule","#trainers|Meet the Trainers","#events|Register Now"]],["Contact",["mailto:info@mkraft.com|info@mkraft.com","#|Bangalore, India","#faq|FAQ"]]].map(([title, links]) => (
          <div key={title}>
            <h4 style={{ fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:"1.25rem" }}>{title}</h4>
            <ul style={{ listStyle:"none" }}>
              {links.map(link => { const [href, label] = link.split("|"); return (
                <li key={label} style={{ marginBottom:"0.75rem" }}><a href={href} style={{ color:"rgba(255,255,255,0.6)", textDecoration:"none", fontSize:"0.875rem" }}>{label}</a></li>
              ); })}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function WorkshopPage() {
  const [modal, setModal] = useState(null);
  useReveal();

  return (
    <>
      <style>{globalStyles}</style>
      <Nav onOpenModal={setModal} />
      <Hero onOpenModal={setModal} />
      <ProofBar />
      <LearnSection onOpenModal={setModal} />
      <ScheduleSection />
      <TrainersSection />
      <GallerySection />
      <EventsSection onOpenModal={setModal} />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      {modal && <MultiStepRegistrationModal eventType="workshop" onClose={() => setModal(null)} />}
    </>
  );
}