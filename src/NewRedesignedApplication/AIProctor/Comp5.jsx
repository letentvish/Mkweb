import { useState, useEffect, useRef } from "react";
import cardBgImage from "../../Assets/AiProctor/CardBg.png";

/* ═══════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════ */

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════
   SUBCOMPONENTS
   ═══════════════════════════════════════════════ */

function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useInView(0.06);
  const transforms = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "translateY(20px)",
  };
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   WHITE SVG ICONS (for inside purple square)
   ═══════════════════════════════════════════════ */

function WebAppIconWhite() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="19" cy="22" r="13" stroke="white" strokeWidth="1.8" fill="none" opacity="0.95" />
      <ellipse cx="19" cy="22" rx="13" ry="4.5" stroke="white" strokeWidth="1.3" fill="none" opacity="0.7" />
      <ellipse cx="19" cy="22" rx="5.5" ry="13" stroke="white" strokeWidth="1.3" fill="none" opacity="0.7" />
      <line x1="19" y1="9" x2="19" y2="35" stroke="white" strokeWidth="0.8" opacity="0.35" />
      <rect x="24" y="24" width="17" height="14" rx="3" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.6" />
      <line x1="24" y1="29" x2="41" y2="29" stroke="white" strokeWidth="1.2" opacity="0.7" />
      <circle cx="27.5" cy="26.8" r="0.9" fill="white" opacity="0.7" />
      <circle cx="30.2" cy="26.8" r="0.9" fill="white" opacity="0.7" />
      <circle cx="32.9" cy="26.8" r="0.9" fill="white" opacity="0.5" />
    </svg>
  );
}

function APIIconWhite() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="20" cy="22" r="9" stroke="white" strokeWidth="1.8" fill="none" opacity="0.8" />
      <circle cx="20" cy="22" r="4.5" stroke="white" strokeWidth="1.3" fill="rgba(255,255,255,0.1)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 20 + 9 * Math.cos(rad);
        const y1 = 22 + 9 * Math.sin(rad);
        const x2 = 20 + 12.5 * Math.cos(rad);
        const y2 = 22 + 12.5 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />;
      })}
      <rect x="28" y="12" width="14" height="10" rx="5" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.4" />
      <text x="35" y="19.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="sans-serif">API</text>
      <circle cx="34" cy="32" r="2.5" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1" />
      <circle cx="40" cy="26" r="2.5" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1" />
      <line x1="35" y1="22" x2="34" y2="29.5" stroke="white" strokeWidth="1" opacity="0.45" />
      <line x1="39" y1="20" x2="40" y2="23.5" stroke="white" strokeWidth="1" opacity="0.45" />
    </svg>
  );
}

function WhiteLabelIconWhite() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M12 18l14-7 7 7-7 14-14-7z" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="22" cy="22" r="3.5" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.2" />
      <path d="M26 18l6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M28 30l2.5 1.5 4-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M36 12l.8-2.5.8 2.5 2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8z" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

function OnPremiseIconWhite() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M12 26c-3 0-5.5-2.3-5.5-5.2 0-2.6 1.9-4.7 4.3-5.1C11.3 12.5 14 10 17.4 10c3 0 5.5 1.9 6.4 4.5.4-.1.7-.1 1.1-.1 2.7 0 4.9 2.2 4.9 4.9 0 .6-.1 1.2-.3 1.7 1.7.8 2.9 2.5 2.9 4.4 0 2.7-2.2 4.9-4.9 4.9H12z" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <rect x="18" y="25" width="14" height="15" rx="2.5" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.4" />
      <line x1="18" y1="30" x2="32" y2="30" stroke="white" strokeWidth="0.9" opacity="0.45" />
      <line x1="18" y1="35" x2="32" y2="35" stroke="white" strokeWidth="0.9" opacity="0.45" />
      <circle cx="21" cy="27.5" r="1" fill="white" fillOpacity="0.6" />
      <rect x="23.5" y="26.8" width="5.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.3" />
      <circle cx="21" cy="32.5" r="1" fill="white" fillOpacity="0.6" />
      <rect x="23.5" y="31.8" width="5.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.3" />
      <circle cx="21" cy="37.5" r="1" fill="white" fillOpacity="0.5" />
      <rect x="23.5" y="36.8" width="5.5" height="1.5" rx="0.75" fill="white" fillOpacity="0.25" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   LAYERED GLASSMORPHIC ICON COMPONENT
   ═══════════════════════════════════════════════ */

function LayeredIcon({ IconComponent, hovered }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 24,
      }}
    >
      {/* Layer 1: Outermost frosted container */}
      <div
        style={{
          position: "relative",
          width: "clamp(150px, 22vw, 200px)",
          height: "clamp(150px, 22vw, 200px)",
          borderRadius: "clamp(28px, 4vw, 36px)",
          background: "linear-gradient(155deg, rgba(255,255,255,0.6) 0%, rgba(245,243,255,0.4) 50%, rgba(235,230,252,0.3) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255,255,255,0.65)",
          boxShadow: "0 8px 32px rgba(139,92,246,0.06), 0 1px 2px rgba(0,0,0,0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.45s cubic-bezier(.16,1,.3,1)",
          transform: hovered ? "scale(1.03)" : "scale(1)",
        }}
      >
        {/* Layer 2: Middle frosted container */}
        <div
          style={{
            width: "78%",
            height: "78%",
            borderRadius: "clamp(22px, 3vw, 28px)",
            background: "linear-gradient(155deg, rgba(255,255,255,0.7) 0%, rgba(250,248,255,0.5) 50%, rgba(240,236,253,0.35) 100%)",
            border: "1.5px solid rgba(255,255,255,0.75)",
            boxShadow: "0 4px 20px rgba(139,92,246,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Layer 3: Inner container */}
          <div
            style={{
              width: "77%",
              height: "77%",
              borderRadius: "clamp(16px, 2.5vw, 22px)",
              background: "linear-gradient(155deg, rgba(255,255,255,0.8) 0%, rgba(252,250,255,0.6) 100%)",
              border: "1.5px solid rgba(230,225,245,0.6)",
              boxShadow: "0 2px 12px rgba(139,92,246,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Layer 4: Purple gradient icon square */}
            <div
              style={{
                width: "67%",
                height: "67%",
                borderRadius: "clamp(12px, 2vw, 18px)",
                background:
                  "linear-gradient(145deg, #B88BF7 0%, #8B5CF6 35%, #7C3AED 65%, #6D28D9 100%)",
                boxShadow:
                  "0 8px 24px rgba(124,58,237,0.3), 0 2px 6px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "transform 0.4s cubic-bezier(.16,1,.3,1), box-shadow 0.4s",
                transform: hovered
                  ? "scale(1.06) rotate(-2deg)"
                  : "scale(1)",
              }}
            >
              <IconComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   DEPLOYMENT CARD
   ═══════════════════════════════════════════════ */

function DeploymentCard({
  icon: IconComponent,
  title,
  description,
  delay = 0,
  gradientAngle = 135,
  isBottom = false,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={delay} direction="up">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          backgroundImage: `url(${cardBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 22,
          padding: "clamp(24px, 3vw, 36px)",
          border: "none",
          cursor: "default",
          transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
          transform: hovered ? "translateY(-5px)" : "none",
          boxShadow: hovered
            ? "0 24px 56px rgba(0,0,0,0.3)"
            : "0 4px 16px rgba(0,0,0,0.2)",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Layered glassmorphic icon */}
        <LayeredIcon IconComponent={IconComponent} hovered={hovered} />

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(18px, 1.9vw, 22px)",
            fontWeight: 700,
            color: "#0F172A",
            marginBottom: 8,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(13.5px, 1.3vw, 15px)",
            color: "#5A6478",
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════ */

const deploymentOptions = [
  {
    icon: WebAppIconWhite,
    title: "Standalone Web App",
    description:
      "Fully hosted solution - no setup required. Candidates access exams via branded portal.",
    gradientAngle: 135,
    isBottom: false,
  },
  {
    icon: APIIconWhite,
    title: "API Integration",
    description:
      "RESTful API to embed proctoring into your existing platform. Full documentation included.",
    gradientAngle: 145,
    isBottom: false,
  },
  {
    icon: WhiteLabelIconWhite,
    title: "White Label",
    description:
      "Completely rebrand the platform with your logo, colors, and domain name.",
    gradientAngle: 130,
    isBottom: true,
  },
  {
    icon: OnPremiseIconWhite,
    title: "On-Premise",
    description:
      "Deploy on your own infrastructure for maximum data control and compliance.",
    gradientAngle: 150,
    isBottom: true,
  },
];

export default function DeploymentSection() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const headingFont = "'Space Grotesk', 'DM Sans', sans-serif";

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
    <section
      style={{
        padding: "clamp(72px, 10vw, 140px) 24px",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap');
        .deploy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 2vw, 24px);
        }
        @media (max-width: 680px) {
          .deploy-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <FadeIn delay={0}>
          <h2
            style={{
              fontFamily: headingFont,
              fontSize: "clamp(30px, 4.2vw, 52px)",
              fontWeight: 800,
              color: isDarkMode ? "#F1F5F9" : "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: 18,
            }}
          >
            Deployment & Integration Options
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p
            style={{
              fontSize: "clamp(14.5px, 1.5vw, 17px)",
              color: isDarkMode ? "#94A3B8" : "#64748B",
              lineHeight: 1.65,
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            From meeting prep to follow-up, our platform equips your team
            with the tools, context, and clarity to stay aligned.
          </p>
        </FadeIn>
      </div>

      {/* Cards Grid */}
      <div className="deploy-grid">
        {deploymentOptions.map((option, i) => (
          <DeploymentCard
            key={option.title}
            icon={option.icon}
            title={option.title}
            description={option.description}
            delay={0.1 + i * 0.1}
            gradientAngle={option.gradientAngle}
            isBottom={option.isBottom}
          />
        ))}
      </div>
    </section>
  );
}