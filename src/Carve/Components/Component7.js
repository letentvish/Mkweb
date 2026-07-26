import { useNavigate } from "react-router-dom";

const HarnessDataCTA = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#032E43",
        padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 80px)",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "clamp(26px, 5vw, 44px)",
          fontWeight: 700,
          margin: "0 0 20px",
          letterSpacing: "-0.01em",
          lineHeight: 1.15,
        }}
      >
        Ready to Harness Your Data Power?
      </h2>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          margin: "0 auto 40px",
          maxWidth: "680px",
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        Join thousands of organizations worldwide who transform massive datasets into actionable
        insights with DATANIX for data-driven decisions and organizational success. Trust our
        platform for their learning needs.
      </p>
      <button
        onClick={() => navigate('/contact')}
        style={{
          background: "linear-gradient(135deg, #F5D547, #e6c235)",
          color: "#1a1a1a",
          border: "none",
          borderRadius: "40px",
          padding: "14px 40px",
          fontSize: "clamp(15px, 1.6vw, 17px)",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxShadow: isDarkMode
            ? "0 4px 24px rgba(245, 213, 71, 0.25)"
            : "0 4px 24px rgba(245, 213, 71, 0.35)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = isDarkMode
            ? "0 6px 32px rgba(245, 213, 71, 0.35)"
            : "0 6px 32px rgba(245, 213, 71, 0.45)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = isDarkMode
            ? "0 4px 24px rgba(245, 213, 71, 0.25)"
            : "0 4px 24px rgba(245, 213, 71, 0.35)";
        }}
      >
        Get in Touch
      </button>
    </div>
  );
};

export default HarnessDataCTA;