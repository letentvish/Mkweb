import { useState, useEffect } from "react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";
import LogoLight from "../../Assets/MultipliersKraftLogoLight.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  const navigate = useNavigate();

  // Sync with theme changes
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

  // Get theme-aware colors
  const getColors = () => ({
    background: isDarkMode ? "#131b2e" : "#eff4ff",
    headingText: isDarkMode ? "#ffffff" : "#0b1c30",
    linkText: isDarkMode ? "#bec6e0" : "#45464d",
    linkHoverText: isDarkMode ? "#ffffff" : "#0058be",
    accentText: isDarkMode ? "#adc6ff" : "#0058be",
  });

  const colors = getColors();

  const footerLinks = {
    home: {
      title: "HOME",
      links: [
        { text: "Our Partners", path: "/", section: "partners" },
        { text: "Business pillars", path: "/", section: "business-pillars" },
        { text: "Trending news and highlights", path: "/", section: "news" }
      ]
    },
    aboutUs: {
      title: "ABOUT US",
      links: [
        { text: "Company history", path: "/about", section: "history" },
        { text: "Leadership team", path: "/about", section: "leadership" }
      ]
    },
    ourSolutions: {
      title: "OUR SOLUTIONS",
      links: [
        { text: "Corporate Consulting", path: "/corporate-consulting", section: null },
        { text: "SaaS", path: "/solutions", section: "saas" },
        { text: "Academic solutions", path: "/mile", section: "academic" },
        { text: "Assessments", path: "/assessment", section: null }
      ]
    },
    contactUs: {
      title: "CONTACT US",
      links: [
        { text: "Support", path: "/contact", section: "support" }
      ]
    }
  };

  const handleNavigation = (link) => {
    navigate(link.path);
    if (link.section) {
      setTimeout(() => {
        const element = document.getElementById(link.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
      <footer style={{
        width: "100%",
        background: colors.background,
        padding: "64px 32px",
      }}>

        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div className="footer-grid">
          {/* Logo and Company Info Column */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: "24px" }}>
              <img
                src={isDarkMode ? LogoDark : LogoLight}
                alt="MultipliersKraft Logo"
                style={{
                  maxHeight: "90px",
                  width: "auto",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
              />
            </div>

            {/* Copyright */}
            <p style={{
              fontSize: "14px",
              color: colors.linkText,
              marginBottom: "32px",
            }}>
              © Multiplierskraft Inc.
            </p>

            {/* Corporate HQ */}
            <div>
              <h4 style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                color: colors.accentText,
              }}>
                CORPORATE HQ
              </h4>
              <address style={{
                fontSize: "14px",
                color: colors.linkText,
                fontStyle: "normal",
                lineHeight: "1.6",
              }}>
                Bangalore, India
              </address>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h4 style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "16px",
              color: colors.headingText,
            }}>
              {footerLinks.home.title}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.home.links.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleNavigation(link)}
                    style={{
                      fontSize: "14px",
                      color: colors.linkText,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHoverText}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.linkText}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "16px",
              color: colors.headingText,
            }}>
              {footerLinks.aboutUs.title}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.aboutUs.links.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleNavigation(link)}
                    style={{
                      fontSize: "14px",
                      color: colors.linkText,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHoverText}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.linkText}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions Links */}
          <div>
            <h4 style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "16px",
              color: colors.headingText,
            }}>
              {footerLinks.ourSolutions.title}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.ourSolutions.links.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleNavigation(link)}
                    style={{
                      fontSize: "14px",
                      color: colors.linkText,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHoverText}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.linkText}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Links */}
          <div>
            <h4 style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "16px",
              color: colors.headingText,
            }}>
              {footerLinks.contactUs.title}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.contactUs.links.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleNavigation(link)}
                    style={{
                      fontSize: "14px",
                      color: colors.linkText,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHoverText}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.linkText}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}