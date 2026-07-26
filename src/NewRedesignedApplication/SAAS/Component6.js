import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../../hooks/useTheme";
import man_1Image from '../../Assets/SAAS/man_1.png';
import man_2Image from '../../Assets/SAAS/man_2.png';
import woman_1Image from '../../Assets/SAAS/woman_1.png';
import man_3Image from '../../Assets/SAAS/man_3.png';
import woman_2Image from '../../Assets/SAAS/woman_2.png';

const testimonials = [
  {
    id: 1,
    name: "Raghav Sharma",
    role: "VP of Operations",
    avatar: man_1Image,
    quote:
      "Mile LXP's enterprise solution helped us standardize technical training across our global workforce. The compliance tracking and certification management saved us $2M annually in training costs. Our teams now complete certifications 60% faster with better retention rates.",
    metric: "200+ Engineers Trained",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Iyer",
    role: "Chief Learning Officer",
    avatar: woman_1Image,
    quote:
      "The localization features and advanced analytics gave us real visibility into skill gaps for the first time. We've seen a 45% improvement in employee engagement with learning programs across our global teams.",
    metric: "45% Better Engagement",
    rating: 5,
  },
  {
    id: 3,
    name: "Shantanu Kholar",
    role: "Head of Talent Development",
    avatar: man_2Image,
    quote:
      "The AI-powered learning paths transformed how we onboard new hires. Time-to-productivity dropped by 35% in the first quarter. The platform's intuitive design means our L&D team spends less time on admin and more on strategy.",
    metric: "35% Faster Onboarding",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Director of People & Culture",
    avatar: woman_2Image,
    quote:
      "We evaluated six platforms before choosing Mile LXP. The depth of reporting and the ability to tie learning to business outcomes set it apart. Our executives finally have data they can act on, and our teams love the experience.",
    metric: "6x ROI in Year One",
    rating: 5,
  },
  {
    id: 5,
    name: "Aarav Sharma",
    role: "SVP of Engineering",
    avatar: man_3Image,
    quote:
      "Integrating Mile LXP with our existing HR stack took less than a week. The API documentation is excellent, the support team is responsive, and the platform has scaled effortlessly as we've grown from 800 to 3,000 engineers.",
    metric: "3,000+ Engineers Scaled",
    rating: 5,
  },
];

const WaveDecoration = () => (
  <svg
    viewBox="0 0 300 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "55%",
      opacity: 0.18,
      pointerEvents: "none",
    }}
  >
    <path
      d="M0 80 Q60 20 120 60 T240 40 T300 60"
      fill="none"
      stroke="url(#waveGrad1)"
      strokeWidth="1.5"
    />
    <path
      d="M0 95 Q70 35 140 75 T260 55 T300 75"
      fill="none"
      stroke="url(#waveGrad1)"
      strokeWidth="1.2"
    />
    <path
      d="M20 110 Q80 50 150 85 T270 65 T300 85"
      fill="none"
      stroke="url(#waveGrad1)"
      strokeWidth="1"
    />
    <path
      d="M0 65 Q50 5 110 45 T220 25 T300 45"
      fill="none"
      stroke="url(#waveGrad2)"
      strokeWidth="1"
    />
    <path
      d="M40 115 Q100 55 160 90 T280 70 T300 90"
      fill="none"
      stroke="url(#waveGrad2)"
      strokeWidth="0.8"
    />
    <defs>
      <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
      <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
    </defs>
  </svg>
);

const StarRating = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: "4px", marginTop: "12px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#FBBF24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isCenter, isVisible, isDarkMode }) => {
  return (
    <div
      style={{
        background: isDarkMode
          ? "linear-gradient(145deg, #0f1729 0%, #111827 100%)"
          : "#0C1437",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        position: "relative",
        overflow: "hidden",
        flex: "0 0 auto",
        width: "clamp(280px, 30vw, 420px)",
        minHeight: "320px",
        boxShadow: isCenter
          ? "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.15)"
          : "0 4px 24px rgba(0,0,0,0.35)",
        transform: isCenter ? "scale(1)" : "scale(0.97)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, opacity 0.4s ease",
        opacity: isVisible ? 1 : 0,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(255,255,255,0.1)",
            flexShrink: 0,
          }}
        />
        <div>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
            {testimonial.name}
          </p>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0, marginTop: "2px", fontFamily: "'DM Sans', sans-serif" }}>
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          fontStyle: "italic",
          margin: 0,
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {testimonial.quote}
      </p>

      {/* Footer */}
      <div style={{ marginTop: "24px" }}>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
          {testimonial.metric}
        </p>
        <StarRating count={testimonial.rating} />
      </div>

      <WaveDecoration />
    </div>
  );
};

const NavButton = ({ onClick, direction, disabled, isDarkMode }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous testimonials" : "Next testimonials"}
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: isDarkMode
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid rgba(0,0,0,0.15)",
      background: "transparent",
      color: isDarkMode ? "#fff" : "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background 0.2s, transform 0.2s, opacity 0.2s",
      outline: "none",
      flexShrink: 0,
    }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = isDarkMode
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
  >
    {direction === "prev" ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )}
  </button>
);

export default function TestimonialsSection() {
  const isDarkMode = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(true);
  const sectionRef = useRef(null);
  const CARDS_PER_VIEW = 3;
  const maxIndex = testimonials.length - CARDS_PER_VIEW;

  // Intersection observer for section entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((dir) => {
    setCardVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => Math.min(Math.max(prev + dir, 0), maxIndex));
      setCardVisible(true);
    }, 220);
  }, [maxIndex]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@700;800&display=swap');

        .testimonials-section * { box-sizing: border-box; }

        .section-fade-in {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .section-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .section-fade-in.delay-1 { transition-delay: 0.1s; }
        .section-fade-in.delay-2 { transition-delay: 0.22s; }
        .section-fade-in.delay-3 { transition-delay: 0.35s; }

        .card-row {
          transition: opacity 0.22s ease;
        }
        .card-row.hidden { opacity: 0; }
        .card-row.visible { opacity: 1; }

        @media (max-width: 900px) {
          .cards-container { gap: 16px !important; }
          .cards-container > * { width: clamp(260px, 80vw, 360px) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-section { padding: 48px 20px !important; }
          .section-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .cards-container { gap: 14px !important; }
          .cards-container > * { width: clamp(240px, 85vw, 340px) !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="testimonials-section"
        style={{
          background: isDarkMode ? "#1B2340" : "#EFFBF9",
          padding: "80px 64px",
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "500px",
        }}
      >
        {/* Badge */}
        <div
          className={`section-fade-in ${visible ? "visible" : ""}`}
          style={{ marginBottom: "20px" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#FCDE53",
              color: "#000000",
              fontWeight: 700,
              fontSize: "0.875rem",
              padding: "8px 20px",
              borderRadius: "999px",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Success Stories
          </span>
        </div>

        {/* Header row */}
        <div
          className={`section-header section-fade-in delay-1 ${visible ? "visible" : ""}`}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            gap: "24px",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: isDarkMode ? "#FFFFFF" : "#0f172a",
                margin: "0 0 16px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              What our clients say
            </h2>
            <p
              style={{
                color: isDarkMode ? "#DDDDDD" : "#475569",
                fontSize: "1rem",
                lineHeight: 1.65,
                margin: "0 0 12px 0",
                maxWidth: "520px",
              }}
            >
              Join 50+ enterprise clients who've transformed their workforce with our platforms and curated programs, 5+ language support.
            </p>
            <p
              style={{
                color: isDarkMode ? "#DDDDDD" : "#475569",
                fontSize: "1rem",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "520px",
                fontStyle: "italic",
              }}
            >
              Here are just a few of their remarkable success stories.
            </p>
          </div>

          {/* Nav Buttons */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexShrink: 0 }}>
            <NavButton onClick={() => goTo(-1)} direction="prev" disabled={currentIndex === 0} isDarkMode={isDarkMode} />
            <NavButton onClick={() => goTo(1)} direction="next" disabled={currentIndex >= maxIndex} isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Cards */}
        <div
          className={`section-fade-in delay-2 ${visible ? "visible" : ""}`}
          style={{ overflow: "hidden" }}
        >
          <div
            className={`card-row cards-container ${cardVisible ? "visible" : "hidden"}`}
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {visibleTestimonials.map((t, i) => (
              <TestimonialCard
                key={t.id}
                testimonial={t}
                isCenter={i === 1}
                isVisible={cardVisible}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div
          className={`section-fade-in delay-3 ${visible ? "visible" : ""}`}
          style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "36px" }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCardVisible(false);
                setTimeout(() => { setCurrentIndex(i); setCardVisible(true); }, 220);
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === currentIndex ? "28px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === currentIndex
                  ? (isDarkMode ? "#6366f1" : "#2B8DF8")
                  : (isDarkMode ? "#cbd5e1" : "#94a3b8"),
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
                outline: "none",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}