import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  IoMdMenu,
  IoIosClose,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { FaUsersGear } from "react-icons/fa6";
import {
  FaInfoCircle,
  FaBlog,
  FaChalkboardTeacher,
  FaUserTie,
  FaTasks,
  FaProjectDiagram,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { IoMdMail, IoMdHome } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { MdLanguage, MdDarkMode, MdLightMode } from "react-icons/md";
import LogoLight from "../../Assets/MultipliersKraftLogoLight.png";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";
import useNavigationStore from "../../store/navigationStore";

const Loader = () => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#E9B00F]"></div>
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visitedPages, setVisitedPages] = useState(new Set());
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG (US)");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [saasHovered, setSaasHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const languageRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Zustand store
  const { isSaasContext, setSaasContext, resetToMainContext } = useNavigationStore();

  // Check if we're on SAAS-related pages (not home, since home can be either)
  const isSaasRelatedPage = ["/carve", "/assessment", "/ai-proctor", "/datanix"].includes(location.pathname);

  // Update SAAS context based on current page
  useEffect(() => {
    if (isSaasRelatedPage) {
      setSaasContext(true);
    }
    // Don't auto-reset context when navigating away - only logo click resets it
  }, [location.pathname, isSaasRelatedPage, setSaasContext]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        solutionsOpen
      ) {
        setSolutionsOpen(false);
      }
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target) &&
        languageOpen
      ) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [solutionsOpen, languageOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      hoverTimeoutRef.current = null;
    }, 200);
  };

  const pageImages = {
    "/": [LogoLight, LogoDark],
    "/about": [LogoLight, LogoDark],
    "/blog": [LogoLight, LogoDark],
    "/contact": [LogoLight, LogoDark],
    "/capability": [LogoLight, LogoDark],
    "/leadership": [LogoLight, LogoDark],
    "/assessment": [LogoLight, LogoDark],
    "/plus": [LogoLight, LogoDark],
    "/datanix": [LogoLight, LogoDark],
    "/mile": [LogoLight, LogoDark],
    "/corporate-consulting": [LogoLight, LogoDark],
    "/solutions": [LogoLight, LogoDark],
    "/ai-proctor": [LogoLight, LogoDark],
    "/carve": [LogoLight, LogoDark],
    "/extra": [LogoLight, LogoDark],
  };

  const preloadImages = (images) => {
    return Promise.all(
      images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  };

  const handleNavigation = async (path) => {
    if (!visitedPages.has(path)) {
      setIsLoading(true);
      const imagesToLoad = pageImages[path] || [];
      try {
        await preloadImages(imagesToLoad);
        setVisitedPages((prev) => new Set([...prev, path]));
      } catch (error) {
        console.error("Error preloading images:", error);
      } finally {
        setIsLoading(false);
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <IoMdHome /> },
    {
      name: "Our Solutions",
      path: "#",
      icon: <IoExtensionPuzzle />,
      dropdown: true,
    },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Blogs", path: "/blog", icon: <FaBlog /> },
    { name: "Contact Us", path: "/contact", icon: <IoMdMail /> },
  ];

  const softwareCards = [
    {
      category: "Corporate",
      title: "Corporate solutions",
      description: "The personalized learning ecosystem that powers organizational growth.",
      url: "/corporate-consulting",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },
    {
      category: "Saas",
      title: "SaaS Suite",
      description: "One intelligent SaaS platform. Endless possibilities for learning and growth.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
        </svg>
      ),
    },
    {
      category: "MILE",
      title: "Academic solutions",
      description: "Skill and career readiness, integrated into your curriculum.",
      url: "/mile",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          <circle cx="9" cy="6" r="1.5" />
          <circle cx="15" cy="6" r="1.5" />
          <path d="M7 17c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1H7v1z" />
        </svg>
      ),
    },
    {
      category: "HRMS",
      title: "HRMS",
      description: "The all-in-one HRMS, reimagined. (Coming Soon)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
          <path d="M3 20h18v2H3z" />
          <path d="M20 7l-4-4-4 4 1.41 1.41L16 5.83l2.59 2.58z" />
        </svg>
      ),
    },
  ];

  const saasSubItems = [
    {
      category: "Magnetix",
      title: "Magnetix",
      description: "Personalized learning platform",
      url: "https://mkraftmagnetix.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      ),
    },
    {
      category: "CARVE",
      title: "Assessments",
      description: "Comprehensive evaluation tools",
      url: "/assessment",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
        </svg>
      ),
    },
    {
      category: "AI",
      title: "Proctor",
      description: "Intelligent exam monitoring",
      url: "/ai-proctor",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          <circle cx="9" cy="6" r="1.5" />
          <circle cx="15" cy="6" r="1.5" />
          <path d="M7 17c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1H7v1z" />
        </svg>
      ),
    },
    {
      category: "Data Analytics",
      title: "DATANIX",
      description: "Advanced data analytics",
      url: "/datanix",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
          <path d="M3 20h18v2H3z" />
          <path d="M20 7l-4-4-4 4 1.41 1.41L16 5.83l2.59 2.58z" />
        </svg>
      ),
    },
  ];

  const languages = ["ENG (US)", "ESP", "FRA", "DEU", "ITA"];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {isLoading && <Loader />}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b border-outline-variant/60 transition-colors duration-300 ${
          isDarkMode ? "bg-[#0b1c30]/90 text-white" : "bg-[#f8f9ff]/90 text-[#0b1c30]"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3 max-w-[1280px] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div
              onClick={() => {
                resetToMainContext();
                handleNavigation("/");
              }}
              className="flex items-center justify-center w-24 h-12 sm:w-28 sm:h-12 rounded-lg p-1 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <img
                src={isDarkMode ? LogoDark : LogoLight}
                alt="MultipliersKraft Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className={`flex items-center space-x-1 text-[15px] font-semibold transition duration-300 ${
                      solutionsOpen
                        ? "text-[#0058be]"
                        : isDarkMode
                        ? "text-white hover:text-[#0058be]"
                        : "text-[#0b1c30] hover:text-[#0058be]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {solutionsOpen ? (
                      <IoMdArrowDropup className="text-lg" />
                    ) : (
                      <IoMdArrowDropdown className="text-lg" />
                    )}
                  </button>


                  {solutionsOpen && (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        position: "fixed",
                        top: "64px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                        borderRadius: "16px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                        overflow: "hidden",
                      }}
                    >
                      <style>{`
                        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
                      `}</style>
                      <div style={{ padding: "16px", background: isDarkMode ? "#7ecdc8" : "#E8F4F8" }}>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "12px",
                            width: "680px",
                          }}
                        >
                          {(isSaasContext ? saasSubItems : softwareCards).map((card, cardIndex) => (
                            <div
                              key={card.title}
                              onMouseEnter={() => {
                                setHoveredCard(cardIndex);
                                if (card.title === "SaaS Suite") {
                                  setSaasHovered(true);
                                }
                              }}
                              onMouseLeave={() => {
                                setHoveredCard(null);
                                if (card.title === "SaaS Suite") {
                                  setSaasHovered(false);
                                }
                              }}
                              onClick={(e) => {
                                // Check if we clicked on SaaS Suite card
                                if (card.title === "SaaS Suite") {
                                  setSolutionsOpen(false);
                                  setSaasHovered(false);
                                  setSaasContext(true);
                                  handleNavigation("/");
                                  return;
                                }

                                // Only navigate if clicking directly on the card, not the nested dropdown
                                if (card.url && e.target === e.currentTarget) {
                                  if (card.url.startsWith('http')) {
                                    window.open(card.url, '_blank', 'noopener,noreferrer');
                                  } else {
                                    setSolutionsOpen(false);
                                    setSaasHovered(false);
                                    handleNavigation(card.url);
                                  }
                                } else if (card.url) {
                                  // Allow clicks on child elements (like text) to also navigate
                                  const clickedNested = e.target.closest('[data-nested-dropdown]');
                                  if (!clickedNested) {
                                    if (card.url.startsWith('http')) {
                                      window.open(card.url, '_blank', 'noopener,noreferrer');
                                    } else {
                                      setSolutionsOpen(false);
                                      setSaasHovered(false);
                                      handleNavigation(card.url);
                                    }
                                  }
                                }
                              }}
                              style={{
                                backgroundColor: isDarkMode ? "#0d2137" : "#FFFFFF",
                                borderRadius: "10px",
                                padding: "16px 18px 14px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                cursor: "pointer",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                transform: hoveredCard === cardIndex ? "translateY(-3px)" : "translateY(0)",
                                boxShadow:
                                  hoveredCard === cardIndex
                                    ? isDarkMode ? "0 12px 32px rgba(0,0,0,0.35)" : "0 12px 32px rgba(0,0,0,0.15)"
                                    : isDarkMode ? "0 4px 16px rgba(0,0,0,0.2)" : "0 4px 16px rgba(0,0,0,0.08)",
                                position: "relative",
                                overflow: "visible",
                              }}
                            >
                              {/* Subtle glow on hover */}
                              <div
                                style={{
                                  position: "absolute",
                                  top: 0, left: 0, right: 0, bottom: 0,
                                  background:
                                    "radial-gradient(ellipse at top left, rgba(247,200,50,0.06) 0%, transparent 60%)",
                                  opacity: hoveredCard === cardIndex ? 1 : 0,
                                  transition: "opacity 0.3s ease",
                                  pointerEvents: "none",
                                }}
                              />

                              {/* Icon */}
                              <div
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  backgroundColor: isDarkMode ? "#f7c832" : "#E9B00F",
                                  borderRadius: "7px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: isDarkMode ? "#0d2137" : "#FFFFFF",
                                  flexShrink: 0,
                                }}
                              >
                                <div style={{ transform: "scale(0.85)" }}>
                                  {card.icon}
                                </div>
                              </div>

                              {/* Text */}
                              <div>
                                {/* <p
                                  style={{
                                    margin: 0,
                                    fontSize: "10px",
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#7a9ab5",
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    marginBottom: "2px",
                                  }}
                                >
                                  {card.category}
                                </p> */}
                                <h2
                                  style={{
                                    margin: 0,
                                    fontSize: "19px",
                                    fontFamily: "'Sora', sans-serif",
                                    fontWeight: 700,
                                    color: isDarkMode ? "#ffffff" : "#1F2937",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.1,
                                  }}
                                >
                                  {card.title}
                                </h2>
                              </div>

                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "14px",
                                  fontFamily: "'DM Sans', sans-serif",
                                  color: isDarkMode ? "#7a9ab5" : "#6B7280",
                                  lineHeight: 1.3,
                                  fontWeight: 400,
                                }}
                              >
                                {card.description}
                              </p>

                              {/* CTA */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  marginTop: "0px",
                                  color: hoveredCard === cardIndex
                                    ? (isDarkMode ? "#f7c832" : "#E9B00F")
                                    : (isDarkMode ? "#e0e0e0" : "#9CA3AF"),
                                  transition: "color 0.2s ease",
                                  fontFamily: "'DM Sans', sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                }}
                              >
                                <span>Learn More About Software</span>
                                <div
                                  style={{
                                    transform: hoveredCard === cardIndex ? "translateX(4px)" : "translateX(0)",
                                    transition: "transform 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    width="12"
                                    height="12"
                                  >
                                    <path
                                      d="M5 12h14M13 6l6 6-6 6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>

                              {/* Coming Soon Overlay for HRMS */}
                              {card.title === "HRMS" && hoveredCard === cardIndex && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: isDarkMode ? "rgba(13, 33, 55, 0.95)" : "rgba(255, 255, 255, 0.95)",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    zIndex: 10,
                                    animation: "fadeIn 0.2s ease",
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={isDarkMode ? "#f7c832" : "#E9B00F"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                  </svg>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: "16px",
                                      fontFamily: "'Sora', sans-serif",
                                      fontWeight: 700,
                                      color: isDarkMode ? "#f7c832" : "#E9B00F",
                                      textAlign: "center",
                                    }}
                                  >
                                    Coming Soon
                                  </p>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: "11px",
                                      fontFamily: "'DM Sans', sans-serif",
                                      color: isDarkMode ? "#7a9ab5" : "#6B7280",
                                      textAlign: "center",
                                      padding: "0 20px",
                                    }}
                                  >
                                    This feature will be released soon
                                  </p>
                                </div>
                              )}

                              {/* Nested SaaS Dropdown - only show when NOT in SAAS context */}
                              {!isSaasContext && card.title === "SaaS Suite" && saasHovered && (
                                <div
                                  data-nested-dropdown="true"
                                  onMouseEnter={() => setSaasHovered(true)}
                                  onMouseLeave={() => setSaasHovered(false)}
                                  onClick={(e) => e.stopPropagation()}
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "100%",
                                    marginLeft: "12px",
                                    background: isDarkMode ? "#7ecdc8" : "#E8F4F8",
                                    borderRadius: "16px",
                                    padding: "16px",
                                    boxShadow: isDarkMode ? "0 20px 60px rgba(0,0,0,0.25)" : "0 20px 60px rgba(0,0,0,0.12)",
                                    zIndex: 10000,
                                    minWidth: "320px",
                                  }}
                                >
                                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {saasSubItems.map((subItem, subIndex) => (
                                      <div
                                        key={subItem.title}
                                        onClick={() => {
                                          if (subItem.url.startsWith('http')) {
                                            window.open(subItem.url, '_blank', 'noopener,noreferrer');
                                          } else {
                                            setSolutionsOpen(false);
                                            setSaasHovered(false);
                                            handleNavigation(subItem.url);
                                          }
                                        }}
                                        style={{
                                          backgroundColor: isDarkMode ? "#0d2137" : "#FFFFFF",
                                          borderRadius: "10px",
                                          padding: "12px 14px",
                                          cursor: "pointer",
                                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.transform = "translateX(4px)";
                                          e.currentTarget.style.boxShadow = isDarkMode ? "0 8px 24px rgba(0,0,0,0.3)" : "0 8px 24px rgba(0,0,0,0.15)";
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.transform = "translateX(0)";
                                          e.currentTarget.style.boxShadow = "none";
                                        }}
                                      >
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                          <div
                                            style={{
                                              width: "28px",
                                              height: "28px",
                                              backgroundColor: isDarkMode ? "#f7c832" : "#E9B00F",
                                              borderRadius: "6px",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              color: isDarkMode ? "#0d2137" : "#FFFFFF",
                                              flexShrink: 0,
                                            }}
                                          >
                                            {subItem.icon}
                                          </div>
                                          <div>
                                            <p
                                              style={{
                                                margin: 0,
                                                fontSize: "9px",
                                                fontFamily: "'DM Sans', sans-serif",
                                                color: isDarkMode ? "#7a9ab5" : "#6B7280",
                                                letterSpacing: "0.04em",
                                                textTransform: "uppercase",
                                                fontWeight: 500,
                                              }}
                                            >
                                              {subItem.category}
                                            </p>
                                            <h3
                                              style={{
                                                margin: 0,
                                                fontSize: "15px",
                                                fontFamily: "'Sora', sans-serif",
                                                fontWeight: 700,
                                                color: isDarkMode ? "#ffffff" : "#1F2937",
                                                letterSpacing: "-0.01em",
                                                lineHeight: 1.2,
                                              }}
                                            >
                                              {subItem.title}
                                            </h3>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-[15px] font-medium transition duration-300 ${
                    location.pathname === item.path
                      ? "text-[#E9B00F]"
                      : isDarkMode
                      ? "text-white hover:text-[#E9B00F]"
                      : "text-gray-700 hover:text-[#E9B00F]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Side Icons and Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg border-2 transition ${
                isDarkMode
                  ? "border-white hover:bg-white/10 text-white"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              {isDarkMode ? (
                <>
                  <MdDarkMode className="text-xl" />
                  <span className="text-[15px] font-medium">Dark</span>
                </>
              ) : (
                <>
                  <MdLightMode className="text-xl" />
                  <span className="text-[15px] font-medium">Light</span>
                </>
              )}
            </button>

            {/* Get Started Button */}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-transparent border-2 border-[#E9B00F] text-[#E9B00F] text-[15px] font-semibold rounded-lg hover:bg-[#E9B00F] hover:text-white transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/contact");
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden focus:outline-none ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setIsOpen(true)}
          >
            <IoMdMenu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full flex flex-col items-start z-50 px-5 py-10 overflow-y-auto ${
              isDarkMode ? "bg-[#1A2445] text-white" : "bg-white text-gray-700"
            }`}
          >
            {/* Top Bar with Theme Toggle and Close Button */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              {/* Theme Toggle - Left Side */}
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition ${
                  isDarkMode
                    ? "border-white hover:bg-white/10 text-white"
                    : "border-gray-300 hover:bg-gray-100 text-gray-700"
                }`}
              >
                {isDarkMode ? (
                  <>
                    <MdDarkMode className="text-xl" />
                    <span className="text-sm font-medium">Dark</span>
                  </>
                ) : (
                  <>
                    <MdLightMode className="text-xl" />
                    <span className="text-sm font-medium">Light</span>
                  </>
                )}
              </button>

              {/* Close Button - Right Side */}
              <button
                className={`text-3xl hover:text-red-500 transition duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <IoIosClose size={40} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-lg flex-1 pt-12 w-full">
              {navLinks.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="w-full">
                    <button
                      onClick={() =>
                        setMobileSolutionsOpen(!mobileSolutionsOpen)
                      }
                      className={`flex items-center space-x-3 text-2xl w-full text-left ${
                        isDarkMode ? "text-white" : "text-gray-700"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                      {mobileSolutionsOpen ? (
                        <IoMdArrowDropup />
                      ) : (
                        <IoMdArrowDropdown />
                      )}
                    </button>
                    {mobileSolutionsOpen && (
                      <div className="pl-3 mt-3 space-y-3">
                        {(isSaasContext ? saasSubItems : softwareCards).map((card, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              // Check if we clicked on SaaS Suite card
                              if (card.title === "SaaS Suite") {
                                setIsOpen(false);
                                setSaasContext(true);
                                handleNavigation("/");
                                return;
                              }

                              // Don't navigate if it's HRMS
                              if (card.title === "HRMS") {
                                return;
                              }
                              if (card.url) {
                                if (card.url.startsWith('http')) {
                                  window.open(card.url, '_blank', 'noopener,noreferrer');
                                  setIsOpen(false);
                                } else {
                                  setIsOpen(false);
                                  handleNavigation(card.url);
                                }
                              }
                            }}
                            className={`rounded-lg p-4 transition ${
                              card.title === "HRMS" ? "cursor-default" : "cursor-pointer"
                            } ${
                              isDarkMode
                                ? "bg-[#1E2233] hover:bg-[#253045]"
                                : "bg-gray-100 hover:bg-gray-200"
                            } relative`}
                          >
                            <div className="flex items-start space-x-3">
                              <div
                                className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${
                                  isDarkMode ? "bg-[#E9B00F]" : "bg-[#E9B00F]"
                                }`}
                                style={{ color: "#0d2137" }}
                              >
                                {card.icon}
                              </div>
                              <div className="flex-1">
                                {/* <p
                                  className={`text-xs uppercase font-medium mb-1 ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  {card.category}
                                </p> */}
                                <h3 className="text-base font-bold text-[#E9B00F] mb-1">
                                  {card.title}
                                </h3>
                                <p
                                  className={`text-xs ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  {card.description}
                                </p>
                                {card.title === "HRMS" && (
                                  <div className="mt-2 flex items-center gap-2">
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#E9B00F"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <circle cx="12" cy="12" r="10"/>
                                      <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    <span className="text-xs font-semibold text-[#E9B00F]">
                                      Coming Soon
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center space-x-3 text-2xl hover:text-[#E9B00F] ${
                      location.pathname === item.path
                        ? "text-[#E9B00F]"
                        : isDarkMode
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      handleNavigation(item.path);
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )
              )}
            </div>

            <button
              className="w-full bg-[#E9B00F] text-white font-bold py-3 mt-4 rounded-lg hover:bg-[#d4a00e] transition duration-300"
              onClick={() => {
                setIsOpen(false);
                handleNavigation("/contact");
              }}
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* Custom Scrollbar Styles and Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#1A2445' : '#F3F4F6'};
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? '#4B5563' : '#CBD5E1'};
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? '#6B7280' : '#94A3B8'};
        }
      `}} />
    </>
  );
};

export default NavBar;