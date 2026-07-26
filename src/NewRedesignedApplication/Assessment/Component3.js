import { useState, useEffect, useRef } from "react";
import hrImage from "../../Assets/NewHome/WorkWith/hr.jpg";
import educationalImage from "../../Assets/NewHome/WorkWith/Educational.jpg";
import teamImage from "../../Assets/team2.jpg";
import consultingImage from "../../Assets/NewHome/WorkWith/Consulting.jpg";
import "./AssessmentPage.css";

// ── Hooks ──────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Palette / tokens ────────────────────────────────────────────────────────
const C = {
  navy:    "#0F1F3D",
  navyMid: "#162847",
  gold:    "#F5C842",
  goldDim: "#E8B820",
  offWhite:"#F4F8FB",
  white:   "#FFFFFF",
  slate:   "#64748B",
  border:  "#E2EAF0",
};

// ── Global styles injected once ─────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: ${C.offWhite}; color: ${C.navy}; -webkit-font-smoothing: antialiased; }

  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1); }
  .fade-up.in { opacity: 1; transform: translateY(0); }
  .fade-up.d1 { transition-delay: .10s; }
  .fade-up.d2 { transition-delay: .20s; }
  .fade-up.d3 { transition-delay: .30s; }
  .fade-up.d4 { transition-delay: .40s; }
  .fade-up.d5 { transition-delay: .50s; }

  .card-hover { transition: transform .28s cubic-bezier(.22,1,.36,1), box-shadow .28s ease; }
  .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(15,31,61,.13); }

  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
  @keyframes pulse-ring { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(1.55); opacity: 0; } }
  @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes spin-slow { to { transform: rotate(360deg); } }

  /* scrollbar */
  ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 99px; }
`;

// ── Sub-components ──────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#FCDE53"/>
      <path d="M6 10.5l3 3 5-5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarRow({ n = 5 }) {
  return (
    <div style={{ display:"flex", gap:3 }}>
      {Array.from({length:n}).map((_,i)=>(
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill={C.gold}><path d="M9 1l2.39 4.84 5.35.78-3.87 3.77.91 5.33L9 13.27l-4.78 2.45.91-5.33L1.26 6.62l5.35-.78L9 1z"/></svg>
      ))}
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div style={{ textAlign:"center", padding:"0 28px", borderRight:`1px solid ${C.border}` }}>
      <div style={{ fontFamily:"Sora,sans-serif", fontWeight:700, fontSize:"clamp(1.4rem,3vw,1.75rem)", color:C.navy }}>{value}</div>
      <div style={{ fontSize:".78rem", color:C.slate, marginTop:3, letterSpacing:".02em" }}>{label}</div>
    </div>
  );
}

// Floating card component shown on the right of Section 1
function TestimonialCard() {
  return (
    <div style={{
      background: "#0C1437", borderRadius:20, padding:"32px 28px 28px",
      maxWidth:450, width:"100%", boxShadow:"0 32px 80px rgba(15,31,61,.28)",
      animation:"float 5s ease-in-out infinite",
      position:"relative",
    }}>
      {/* label */}
      <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
        <span style={{
          background:"#F4D06F", color:"#271526", fontSize:".85rem", fontWeight:700,
          letterSpacing:".02em", padding:"8px 24px", borderRadius:99,
          fontFamily:"Sora,sans-serif", textAlign:"center",
        }}>Success Stories</span>
      </div>

      <p style={{ fontFamily:"Sora,sans-serif", fontWeight:700, fontSize:"clamp(1.2rem,3vw,1.6rem)", color:C.white, textAlign:"center", lineHeight:1.4, marginBottom:28 }}>
        Assessed over 1000+<br/>Individuals, Petrons and leaders
      </p>

      {/* inner card */}
      <div style={{ background:C.white, borderRadius:14, padding:"24px 20px 20px", position:"relative", textAlign:"center" }}>
        {/* quote badge */}
        <div style={{
          position:"absolute", top:-18, left:16,
          background:"#F4D06F", borderRadius:"50%", width:36, height:36,
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill={C.navy}><path d="M0 12V7.2C0 3.22 2.29.8 6.86 0l.86 1.44C5.14 2.02 4.07 3.18 3.71 4.8H6V12H0zm10 0V7.2C10 3.22 12.29.8 16.86 0l.86 1.44C15.14 2.02 14.07 3.18 13.71 4.8H16V12H10z"/></svg>
        </div>

        <div style={{ display:"flex", justifyContent:"center" }}>
          <StarRow />
        </div>
        <div style={{
          margin:"12px 0", background:"#F1F5F9", borderRadius:99,
          padding:"5px 14px", display:"inline-block", fontSize:".74rem",
          fontWeight:600, color:C.navy, letterSpacing:".03em",
        }}>200+ Engineers Trained</div>

        <p style={{ fontSize:".82rem", color:C.slate, lineHeight:1.65, fontStyle:"italic", marginTop:10 }}>
          Mile LXP's enterprise solution helped us standardize technical training across our global workforce. The compliance tracking and certification management saved us $2M annually in training costs. Our teams now complete certifications 60% faster with better retention rates.
        </p>

        <div style={{ borderTop:`1px solid ${C.border}`, marginTop:18, paddingTop:14, display:"flex", alignItems:"center", gap:12 }}>
          <div style={{
            width:40, height:40, borderRadius:"50%", overflow:"hidden",
            background:"#CBD5E1", flexShrink:0,
          }}>
            <svg viewBox="0 0 40 40" fill="none" style={{width:"100%",height:"100%"}}>
              <rect width="40" height="40" fill="#94A3B8"/>
              <circle cx="20" cy="15" r="7" fill="#64748B"/>
              <path d="M4 38c0-8.84 7.16-16 16-16s16 7.16 16 16" fill="#64748B"/>
            </svg>
          </div>
          <div style={{ textAlign:"left" }}>
            <div style={{ fontWeight:700, fontSize:".88rem", color:C.navy, fontFamily:"Sora,sans-serif" }}>David Park</div>
            <div style={{ fontSize:".76rem", color:C.slate }}>VP of Operations</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SECTION 1: Designed for Accuracy ───────────────────────────────────────
function AccuracySection() {
  const [ref, vis] = useInView();
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

  const features = [
    "Scenario-based statements",
    "Forced-choice behavioural questions",
    "No right or wrong answers",
    "Mobile-friendly experience",
    "Takes 10–15 minutes to complete",
  ];
  const stats = [
    { value:"15 min", label:"Average time" },
    { value:"95%",    label:"Completion rate" },
    { value:"5/5",    label:"User rating" },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: isDarkMode
          ? "linear-gradient(153.99deg, #0f1419 17.51%, #1a2f3f 173.32%)"
          : "linear-gradient(153.99deg, #FFFFFF 17.51%, #C3FAFF 173.32%)",
        padding:"clamp(60px,8vw,100px) clamp(20px,6vw,80px)",
        overflow:"hidden",
      }}
    >
      <div style={{ maxWidth:1180, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", gap:48, justifyContent:"space-between" }}>

        {/* LEFT */}
        <div style={{ flex:"1 1 380px", maxWidth:540 }}>
          <h2
            className={`fade-up d1 ${vis?"in":""}`}
            style={{ fontFamily:"'Georgia', 'Times New Roman', serif", fontWeight:500, fontSize:"clamp(2rem,4vw,2.75rem)", lineHeight:1.15, color: isDarkMode ? "#e5e7eb" : C.navy, marginBottom:32 }}
          >
            Designed for<br/>Accuracy and Ease
          </h2>

          <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:16, marginBottom:40 }}>
            {features.map((f,i)=>(
              <li key={f} className={`fade-up d${i+2} ${vis?"in":""}`}
                style={{ display:"flex", alignItems:"center", gap:12, fontSize:".95rem", color: isDarkMode ? "#9ca3af" : "#314158", fontWeight:500 }}
              >
                <CheckIcon/>{f}
              </li>
            ))}
          </ul>

          <div className={`fade-up d5 ${vis?"in":""}`} style={{ display:"flex", flexWrap:"wrap", gap:0, paddingTop:24, borderTop:`1px solid ${isDarkMode ? "#374151" : C.border}` }}>
            {stats.map((s,i)=>(
              <div key={s.label} style={{
                textAlign:"center", padding:"0 clamp(14px,3vw,28px)",
                borderRight: i < stats.length-1 ? `1px solid ${isDarkMode ? "#374151" : C.border}` : "none",
              }}>
                <div style={{ fontFamily:"Sora,sans-serif", fontWeight:700, fontSize:"clamp(1.2rem,2.5vw,1.6rem)", color: isDarkMode ? "#e5e7eb" : C.navy }}>{s.value}</div>
                <div style={{ fontSize:".78rem", color: isDarkMode ? "#9ca3af" : C.slate, marginTop:3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – floating card */}
        <div className={`fade-up d3 ${vis?"in":""}`} style={{ flex:"1 1 320px", maxWidth:420, display:"flex", justifyContent:"center" }}>
          <TestimonialCard/>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 2: Who Is Assessment For? ──────────────────────────────────────
const audienceData = [
  {
    tag:     "FOR TEAMS",
    tagBg:   C.gold,
    tagColor:C.navy,
    bg:      C.navy,
    light:   false,
    title:   "HR Leaders & Managers",
    body:    "Use CaRVE to improve recruitment, onboarding, team building, and performance management by understanding how people work.",
    span:    "wide",   // cols 1-2 on large
    imgAlt:  "Team meeting around a table",
    imgSrc:  hrImage,
  },
  {
    tag:     null,
    bg:      "#F1F5F9",
    light:   true,
    title:   "Educators",
    body:    "Help students develop self-awareness and career readiness.",
    span:    "narrow",
    imgAlt:  "Teacher in classroom",
    imgSrc:  educationalImage,
  },
  {
    tag:     null,
    bg:      "#F8FAFC",
    light:   true,
    title:   "Professionals",
    body:    "Gain clarity on your working style and how to collaborate better.",
    span:    "narrow",
    imgAlt:  "Two professionals talking",
    imgSrc:  teamImage,
  },
  {
    tag:     "FOR COACHES",
    tagBg:   C.navyMid,
    tagColor:C.white,
    bg:      C.gold,
    light:   true,
    title:   "Career Coaches & Consultants",
    body:    "Offer data-driven insights to help clients understand their strengths and development areas.",
    span:    "wide",
    imgAlt:  "Coaching session",
    imgSrc:  consultingImage,
  },
];

function AudienceCard({ data, delay }) {
  const [ref, vis] = useInView(0.1);
  const isWide  = data.span === "wide";
  const isDark  = !data.light;
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

  const textCol = isDarkMode
    ? (isDark ? C.white : "#e5e7eb")
    : (isDark ? C.white : C.navy);
  const bodyCol = isDarkMode
    ? (isDark ? "rgba(255,255,255,.7)" : "#9ca3af")
    : (isDark ? "rgba(255,255,255,.7)" : C.slate);

  return (
    <div
      ref={ref}
      className={`card-hover fade-up ${vis?"in":""}`}
      style={{
        transitionDelay: `${delay}s`,
        background: isDarkMode
          ? (isDark ? "#1a2332" : "#1f2937")
          : data.bg,
        borderRadius: 8,
        padding: "28px 24px",
        gridColumn: isWide ? "span 2" : "span 1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
        overflow: "hidden",
        position: "relative",
        minHeight: 200,
        height: "100%",
        cursor: "pointer",
      }}
    >
      {/* text side */}
      <div style={{ flex:"1 1 200px", minWidth:0 }}>
        {data.tag && (
          <span style={{
            background: data.tagBg, color: data.tagColor,
            fontSize:".68rem", fontWeight:700, letterSpacing:".1em",
            padding:"4px 12px", borderRadius:99, display:"inline-block",
            fontFamily:"Sora,sans-serif", textTransform:"uppercase", marginBottom:14,
          }}>{data.tag}</span>
        )}
        <h3 style={{
          fontFamily:"Sora,sans-serif", fontWeight:700,
          fontSize:"clamp(1.1rem,2.5vw,1.4rem)", color:textCol, lineHeight:1.3, marginBottom:10,
        }}>{data.title}</h3>
        <p style={{ fontSize:".875rem", color:bodyCol, lineHeight:1.65, maxWidth:360 }}>{data.body}</p>
      </div>

      {/* illustration side */}
      <div style={{
        flex:"0 0 auto", width:"clamp(120px,30%,220px)", aspectRatio:"4/3",
        borderRadius:8, overflow:"hidden", flexShrink:0,
      }}>
        <img
          src={data.imgSrc}
          alt={data.imgAlt}
          style={{
            width:"100%",
            height:"100%",
            objectFit:"cover",
          }}
        />
      </div>
    </div>
  );
}

function WhoSection() {
  const [ref, vis] = useInView();
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
    <section style={{ background: isDarkMode ? "#0f1419" : C.white, padding:"clamp(60px,8vw,100px) clamp(20px,6vw,80px)" }}>
      <div style={{ maxWidth:1180, margin:"0 auto" }}>
        <h2
          ref={ref}
          className={`fade-up ${vis?"in":""}`}
          style={{
            fontFamily:"Sora,sans-serif", fontWeight:600,
            fontSize:"clamp(1.8rem,4vw,2.6rem)", color: isDarkMode ? "#e5e7eb" : "#0A2540",
            textAlign:"center", marginBottom:"clamp(36px,5vw,56px)",
          }}
        >
          Who Is ASSESSMENT For?
        </h2>

        {/* Bento grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
          gap:16,
        }}>
          {/* Row 1: wide + narrow */}
          <div style={{ gridColumn:"1/-1", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:16, alignItems:"stretch" }}>
            {[0,1].map(i=>(
              <div key={i} style={{ gridColumn: audienceData[i].span==="wide" ? "span 2" : "span 1", display:"flex" }}>
                <AudienceCard data={audienceData[i]} delay={i*0.12} />
              </div>
            ))}
          </div>
          {/* Row 2: narrow + wide */}
          <div style={{ gridColumn:"1/-1", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:16, alignItems:"stretch" }}>
            {[2,3].map(i=>(
              <div key={i} style={{ gridColumn: audienceData[i].span==="wide" ? "span 2" : "span 1", display:"flex" }}>
                <AudienceCard data={audienceData[i]} delay={i*0.12} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



// ── Root ─────────────────────────────────────────────────────────────────────
export default function AssessmentLanding() {
  useEffect(() => {
    if (!document.getElementById("__al_styles")) {
      const s = document.createElement("style");
      s.id = "__al_styles";
      s.textContent = GLOBAL_CSS;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <main>
      <AccuracySection />
      <WhoSection />
    </main>
  );
}