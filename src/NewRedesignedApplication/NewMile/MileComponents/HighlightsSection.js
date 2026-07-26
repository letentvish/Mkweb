import React, { useState, useEffect } from 'react';
import { LuUsers } from "react-icons/lu";
import { FiCompass } from "react-icons/fi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import highlightImg from "../../../Assets/Highlightimg.png";
import highlightMain from "../../../Assets/HighlightMain.png";
import cxoImage from "../../../Assets/NewMile/cxo.png";

const HighlightsSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      style={{
        padding: windowWidth < 640 ? "32px 16px" : windowWidth < 1024 ? "48px 24px" : "56px 32px",
        background: isDarkMode ? "#000000" : "#F3F3F3",
        color: isDarkMode ? "#FFFFFF" : "#111827",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: windowWidth < 640 ? "28px" : windowWidth < 1024 ? "32px" : "40px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: windowWidth < 640 ? "32px" : windowWidth < 1024 ? "40px" : "48px",
        }}
      >
        What we Offers: Program Highlights
      </h2>

      {/* Grid wrapper */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: windowWidth < 768 ? "1fr" : windowWidth < 1024 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          gap: windowWidth < 640 ? "16px" : "24px",
        }}
      >

        {/* Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: windowWidth < 640 ? "16px" : "24px",
          }}
        >
          {/* Image Card */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              height: windowWidth < 640 ? "250px" : windowWidth < 1024 ? "280px" : "308px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = windowWidth >= 768 ? "translateY(-8px)" : "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={cxoImage}
              alt="CXO and Expert Masterclasses"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CXO & Expert Masterclasses */}
          <div
            style={{
              borderRadius: "24px",
              padding: windowWidth < 640 ? "20px" : "24px",
              height: windowWidth < 640 ? "auto" : windowWidth < 1024 ? "280px" : "308px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: isDarkMode ? "#1D242D" : "#FFFFFF",
              color: isDarkMode ? "#FFFFFF" : "#111827",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = windowWidth >= 768 ? "translateY(-8px)" : "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: windowWidth < 640 ? "40px" : "48px",
                height: windowWidth < 640 ? "40px" : "48px",
                borderRadius: "12px",
                background: "#252B45",
              }}
            >
              <LuUsers size={windowWidth < 640 ? 20 : 24} style={{ color: "#FFFFFF" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3
                style={{
                  fontSize: windowWidth < 640 ? "18px" : "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                CXO & Expert Masterclasses
              </h3>
              <p
                style={{
                  fontSize: windowWidth < 640 ? "13px" : "14px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                }}
              >
                Attend high-impact masterclasses (offline and virtual) delivered by industry pioneers, IIM/IIT alumni, and global experts from the US, Europe, and Canada.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                marginTop: "16px",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <span style={{ color: "#FFA726", fontSize: "14px", fontWeight: "600" }}>Join Now</span>
              <FaChevronRight style={{ color: "#FFA726", fontSize: "12px" }} />
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <div
            style={{
              borderRadius: "24px",
              padding: windowWidth < 640 ? "24px" : windowWidth < 1024 ? "28px" : "32px",
              height: windowWidth < 640 ? "auto" : windowWidth < 1024 ? "600px" : "668px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: isDarkMode ? "#1D242D" : "#FFFFFF",
              color: isDarkMode ? "#FFFFFF" : "#111827",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = windowWidth >= 768 ? "translateY(-8px)" : "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                position: "relative",
                width: windowWidth < 640 ? "250px" : windowWidth < 1024 ? "300px" : "375px",
                height: windowWidth < 640 ? "250px" : windowWidth < 1024 ? "300px" : "375px",
                marginBottom: windowWidth < 640 ? "20px" : "24px",
              }}
            >
              <img
                src={highlightMain}
                alt="Networking diagram"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: windowWidth < 640 ? "16px" : "16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: windowWidth < 640 ? "40px" : "48px",
                  height: windowWidth < 640 ? "40px" : "48px",
                  borderRadius: "12px",
                  background: "#252B45",
                  marginBottom: windowWidth < 640 ? "12px" : "16px",
                  margin: "0 auto",
                  marginBottom: windowWidth < 640 ? "12px" : "16px",
                }}
              >
                <LuUsers size={windowWidth < 640 ? 20 : 24} style={{ color: "#FFFFFF" }} />
              </div>
              <h3
                style={{
                  fontSize: windowWidth < 640 ? "18px" : "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                Networking Events & Competitions
              </h3>
              <p
                style={{
                  fontSize: windowWidth < 640 ? "13px" : "14px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                  marginBottom: windowWidth < 640 ? "16px" : "16px",
                }}
              >
                Participate in hackathons, ideathons, and networking competitions to gain rewards, network with industry experts, and build your portfolio.
              </p>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <span style={{ color: "#FFA726", fontSize: "14px", fontWeight: "600" }}>Join Now</span>
                <FaChevronRight style={{ color: "#FFA726", fontSize: "12px" }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: windowWidth < 640 ? "16px" : "24px",
          }}
        >
          {/* Career Planning */}
          <div
            style={{
              borderRadius: "24px",
              padding: windowWidth < 640 ? "20px" : "24px",
              height: windowWidth < 640 ? "auto" : windowWidth < 1024 ? "290px" : "322px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: isDarkMode ? "#1D242D" : "#FFFFFF",
              color: isDarkMode ? "#FFFFFF" : "#111827",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = windowWidth >= 768 ? "translateY(-8px)" : "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: windowWidth < 640 ? "40px" : "48px",
                height: windowWidth < 640 ? "40px" : "48px",
                borderRadius: "12px",
                background: "#252B45",
              }}
            >
              <FiCompass size={windowWidth < 640 ? 20 : 24} style={{ color: "#FFFFFF" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3
                style={{
                  fontSize: windowWidth < 640 ? "18px" : "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                Career Planning & Mentorship
              </h3>
              <p
                style={{
                  fontSize: windowWidth < 640 ? "13px" : "14px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                }}
              >
                Receive hyper-personalized 1:1 counseling, resume building, interview prep, and career guidance from industry experts.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                marginTop: "16px",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <span style={{ color: "#FFA726", fontSize: "14px", fontWeight: "600" }}>Join Now</span>
              <FaChevronRight style={{ color: "#FFA726", fontSize: "12px" }} />
            </Link>
          </div>

          {/* Real-World Projects */}
          <div
            style={{
              borderRadius: "24px",
              padding: windowWidth < 640 ? "20px" : "24px",
              height: windowWidth < 640 ? "auto" : windowWidth < 1024 ? "290px" : "322px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: isDarkMode ? "#1D242D" : "#FFFFFF",
              color: isDarkMode ? "#FFFFFF" : "#111827",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = windowWidth >= 768 ? "translateY(-8px)" : "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: windowWidth < 640 ? "40px" : "48px",
                height: windowWidth < 640 ? "40px" : "48px",
                borderRadius: "12px",
                background: "#252B45",
              }}
            >
              <BiBriefcaseAlt size={windowWidth < 640 ? 20 : 24} style={{ color: "#FFFFFF" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3
                style={{
                  fontSize: windowWidth < 640 ? "18px" : "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                Real-World Projects & Internships
              </h3>
              <p
                style={{
                  fontSize: windowWidth < 640 ? "13px" : "14px",
                  lineHeight: "1.6",
                  opacity: 0.8,
                }}
              >
                Apply your skills through capstone projects, simulations, internships, and real-world impact.
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                marginTop: "16px",
                textDecoration: "none",
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <span style={{ color: "#FFA726", fontSize: "14px", fontWeight: "600" }}>Join Now</span>
              <FaChevronRight style={{ color: "#FFA726", fontSize: "12px" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
