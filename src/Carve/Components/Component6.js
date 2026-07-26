import resilientIcon from "../../Assets/Carve/Icon.svg";
import visionaryIcon from "../../Assets/Carve/Layer_1.svg";
import empatheticIcon from "../../Assets/Carve/Vector.svg";

const CaRVEStyles = ({ isDarkMode }) => {
  const styles = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" stroke="#F5D547" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="9" stroke="#F5D547" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="4" fill="#F5D547" />
        </svg>
      ),
      label: "Catalyst",
      desc: "Mastery & Control",
    },
    {
      icon: <img src={resilientIcon} alt="Resilient" style={{ width: "40px", height: "40px" }} />,
      label: "Resilient",
      desc: "Stability & Structure",
    },
    {
      icon: <img src={visionaryIcon} alt="Visionary" style={{ width: "40px", height: "40px" }} />,
      label: "Visionary",
      desc: "Expressiveness",
    },
    {
      icon: <img src={empatheticIcon} alt="Empathetic" style={{ width: "40px", height: "40px" }} />,
      label: "Empathetic",
      desc: "Harmony, balance between Stability & Flexibility",
    },
  ];

  const Arrow = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#F5D547" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: "linear-gradient(180deg, #0A2540 0%, #0D3A5C 50%, #0A2540 100%)",
        padding: "60px 40px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#ffffff",
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 700,
          margin: "0 0 12px",
          letterSpacing: "-0.01em",
        }}
      >
        CaRVE: Four Styles
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.6)",
          fontSize: "clamp(14px, 2vw, 18px)",
          margin: "0 0 48px",
          fontWeight: 400,
        }}
      >
        Four distinct behavioral styles that shape how people work, communicate, and lead
      </p>

      <div
        style={{
         background: "#1A365D80",
          borderRadius: "16px",
          padding: "clamp(24px, 4vw, 48px) clamp(16px, 3vw, 40px)",
          border: isDarkMode
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(8px, 2vw, 24px)",
            flexWrap: "wrap",
          }}
        >
          {styles.map((style, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 24px)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minWidth: "clamp(100px, 15vw, 160px)",
                  maxWidth: "180px",
                }}
              >
                <div
                  style={{
                    width: "clamp(56px, 8vw, 72px)",
                    height: "clamp(56px, 8vw, 72px)",
                    borderRadius: "14px",
                    background: isDarkMode
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    border: isDarkMode
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {style.icon}
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(14px, 1.8vw, 18px)",
                    fontWeight: 600,
                    marginBottom: "6px",
                  }}
                >
                  {style.label}
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(11px, 1.3vw, 14px)",
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {style.desc}
                </div>
              </div>
              {i < styles.length - 1 && (
                <div className="carve-arrow" style={{ flexShrink: 0 }}>
                  <Arrow />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .carve-arrow { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default CaRVEStyles;