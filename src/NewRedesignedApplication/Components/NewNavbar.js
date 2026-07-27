import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Users,
  BarChart3,
  BookOpen,
  Boxes,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState("nucleus");

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Handle scroll backdrop shift
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTechDropdownOpen(false);
  }, [location.pathname]);

  const handleTechMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setTechDropdownOpen(true);
  };

  const handleTechMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setTechDropdownOpen(false);
    }, 180);
  };

  const techProducts = [
    {
      id: "nucleus",
      name: "Nucleus (HRMS)",
      tagline: "Talent lifecycle, payroll & workforce analytics.",
      category: "HRMS",
      icon: <Users className="w-4 h-4 text-sky-400" />,
      link: "/datanix",
      capabilities: ["Total Talent Orchestration", "Automated Payroll Engine", "Performance Telemetry", "Workforce Analytics"],
      statsLabel: "Payroll & HR",
      statsValue: "100% Automated"
    },
    {
      id: "erp",
      name: "ERP Solution",
      tagline: "Financial automation, procurement & B2B operations.",
      category: "OPERATIONS",
      icon: <BarChart3 className="w-4 h-4 text-sky-400" />,
      link: "/carve",
      capabilities: ["Financial Workflows", "Procurement Management", "Inventory Control", "Resource Allocation"],
      statsLabel: "Efficiency Gain",
      statsValue: "3.4x Velocity"
    },
    {
      id: "magnetics",
      name: "Magnetics (LXP)",
      tagline: "Learning, continuous capability & skill telemetry.",
      category: "LEARNING",
      icon: <BookOpen className="w-4 h-4 text-sky-400" />,
      link: "/mile",
      capabilities: ["AI Skill Pathways", "Career Trajectory Mapping", "Skill Gap Diagnostics", "Institutional L&D"],
      statsLabel: "Skill Retention",
      statsValue: "94% Mastery"
    },
    {
      id: "palbon",
      name: "PALBON Suites",
      tagline: "Combine modules into one modular operating system.",
      category: "MODULAR SUITE",
      icon: <Boxes className="w-4 h-4 text-sky-400" />,
      link: "/palbon",
      capabilities: ["Build Your Own Stack", "Unified Data Model", "Single Sign-On (SSO)", "Zero Tool Friction"],
      statsLabel: "Consolidation",
      statsValue: "1 Single Stack"
    },
  ];

  const currentPreview = techProducts.find(p => p.id === activeProduct) || techProducts[0];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#07091c]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3" 
          : "bg-[#07091c]/80 backdrop-blur-md border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={LogoDark} 
              alt="MultipliersKraft Logo" 
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 font-poppins text-sm font-medium text-slate-300">
            
            {/* Home */}
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/" ? "text-white bg-[#15192B] border border-slate-700/80 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* Technology Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleTechMouseEnter}
              onMouseLeave={handleTechMouseLeave}
              ref={dropdownRef}
            >
              <button 
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  location.pathname.startsWith("/technology") || techDropdownOpen 
                    ? "text-white bg-[#15192B] border border-slate-700/80 font-semibold shadow-md" 
                    : "hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <span>Technology (SaaS)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${techDropdownOpen ? "rotate-180 text-sky-400" : "text-slate-400"}`} />
              </button>

              {/* Mega Dropdown Menu - Dark Deep Navy (#0c1021) */}
              <AnimatePresence>
                {techDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-[#0c1021] border border-slate-800/90 rounded-3xl shadow-2xl backdrop-blur-3xl z-50 overflow-hidden"
                  >
                    {/* Header Bar */}
                    <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between bg-[#080b18]">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                            ENTERPRISE SAAS SUITE
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">One modular platform. Four connected business engines.</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-300 bg-[#161c33] border border-slate-700/80 px-3.5 py-1 rounded-full">
                        4 Modules
                      </span>
                    </div>

                    {/* Dual-Pane Layout */}
                    <div className="grid grid-cols-12 gap-0 p-5">
                      
                      {/* Left Pane: 4 Clean Module Cards */}
                      <div className="col-span-6 space-y-2 pr-5 border-r border-slate-800/70">
                        {techProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            to={prod.link}
                            onMouseEnter={() => setActiveProduct(prod.id)}
                            className={`group flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                              activeProduct === prod.id 
                                ? "bg-[#141a33] border-sky-500/40 shadow-lg" 
                                : "bg-[#0f1429]/60 border-slate-800/60 hover:bg-[#141a33]/80 hover:border-slate-700"
                            }`}
                          >
                            <div className={`p-3 rounded-xl border transition-colors shrink-0 ${
                              activeProduct === prod.id
                                ? "bg-sky-500/20 border-sky-500/40 text-sky-400"
                                : "bg-slate-800/60 border-slate-700/60 text-slate-400 group-hover:text-slate-200"
                            }`}>
                              {prod.icon}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className={`font-poppins font-bold text-sm transition-colors ${
                                  activeProduct === prod.id ? "text-white" : "text-slate-200 group-hover:text-white"
                                }`}>
                                  {prod.name}
                                </h4>
                                <span className="text-[9px] font-semibold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/60">
                                  {prod.category === "HRMS" ? "Core HRMS" : prod.category === "OPERATIONS" ? "Operations" : prod.category === "LEARNING" ? "Learning Platform" : "Modular Bundle"}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                                {prod.tagline}
                              </p>
                            </div>

                            <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                              activeProduct === prod.id ? "text-sky-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                            }`} />
                          </Link>
                        ))}
                      </div>

                      {/* Right Pane: Live Interactive Dashboard Preview */}
                      <div className="col-span-6 pl-5 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-bold text-slate-300 mb-3 font-poppins">
                            {currentPreview.name} Preview
                          </p>

                          {/* Live Dashboard Mockup Card */}
                          <div className="bg-white rounded-2xl p-4 text-slate-900 shadow-2xl border border-slate-200 text-left">
                            
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                              <h5 className="font-poppins font-bold text-xs text-slate-900">Dashboard</h5>
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <div className="w-4 h-4 rounded-full bg-slate-200 text-[8px] font-bold text-slate-700 flex items-center justify-center">AS</div>
                              </div>
                            </div>

                            {/* 3 Metrics Row */}
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <p className="text-[9px] text-slate-400 font-semibold">Total Employees</p>
                                <div className="flex items-baseline justify-between mt-0.5">
                                  <span className="font-bold text-xs text-slate-900">2,650</span>
                                  <span className="text-[8px] font-bold text-emerald-600">↑ 12.8%</span>
                                </div>
                              </div>

                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <p className="text-[9px] text-slate-400 font-semibold">Active Today</p>
                                <div className="flex items-baseline justify-between mt-0.5">
                                  <span className="font-bold text-xs text-slate-900">1,842</span>
                                  <span className="text-[8px] font-bold text-emerald-600">↑ 8.3%</span>
                                </div>
                              </div>

                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <p className="text-[9px] text-slate-400 font-semibold">Avg Performance</p>
                                <div className="flex items-baseline justify-between mt-0.5">
                                  <span className="font-bold text-xs text-slate-900">4.6<span className="text-[9px] text-slate-400">/5</span></span>
                                  <span className="text-[8px] font-bold text-emerald-600">↑ 6.1%</span>
                                </div>
                              </div>
                            </div>

                            {/* Charts Row */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              {/* Line Trend */}
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <p className="text-[9px] font-bold text-slate-500 mb-1">Headcount Trend</p>
                                <div className="h-10 w-full flex items-end">
                                  <svg className="w-full h-8" viewBox="0 0 100 40">
                                    <path d="M 0 35 Q 25 10 50 25 T 100 5" fill="none" stroke="#0284c7" strokeWidth="2" />
                                  </svg>
                                </div>
                              </div>

                              {/* Donut Chart */}
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                                <div className="relative w-8 h-8 shrink-0">
                                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#0284c7" strokeWidth="6" strokeDasharray="40 100" />
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-40" />
                                  </svg>
                                </div>
                                <div className="text-[8px] space-y-0.5 text-slate-600 font-medium">
                                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" /><span>Eng: 40%</span></div>
                                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" /><span>Prod: 25%</span></div>
                                </div>
                              </div>
                            </div>

                            {/* Recent Activity Mini Feed */}
                            <div className="pt-2 border-t border-slate-100 space-y-1 text-[9px]">
                              <div className="flex items-center justify-between text-slate-700">
                                <span className="font-semibold flex items-center gap-1">👤 Joining <span className="text-[8px] text-slate-400 font-normal">24 New Employees</span></span>
                                <span className="text-slate-400">2h ago</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                    </div>

                    {/* Bottom Guidance Footer Bar */}
                    <div className="px-6 py-3 bg-[#080b18] border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Need help choosing the right solution?</span>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-1.5 font-bold text-[#38bdf8] hover:text-sky-300 transition-colors"
                      >
                        <span>Talk to our solution architect</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Academics */}
            <Link 
              to="/mile" 
              className={`px-4 py-2 rounded-full transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/mile" ? "text-white bg-[#15192B] border border-slate-700/80 font-semibold" : ""
              }`}
            >
              Academics (MILE)
            </Link>

            {/* Consulting */}
            <Link 
              to="/corporate-consulting" 
              className={`px-4 py-2 rounded-full transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/corporate-consulting" ? "text-white bg-[#15192B] border border-slate-700/80 font-semibold" : ""
              }`}
            >
              Consulting
            </Link>

            {/* About Company */}
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-full transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/about" ? "text-white bg-[#15192B] border border-slate-700/80 font-semibold" : ""
              }`}
            >
              Company
            </Link>

          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#15192B] hover:bg-[#1c223a] text-white border border-slate-700/80 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate("/palbon")}
              className="bg-[#0369a1] hover:bg-[#0284c7] text-white px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Configure PALBON</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Accordion Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#07091c] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 font-poppins text-sm font-medium text-slate-300">
              
              <Link 
                to="/" 
                className="px-4 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Technology Expandable */}
              <div>
                <button
                  onClick={() => setMobileTechOpen(!mobileTechOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white"
                >
                  <span>Technology (SaaS Suite)</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileTechOpen ? "rotate-180 text-sky-400" : ""}`} />
                </button>

                {mobileTechOpen && (
                  <div className="pl-6 pr-2 py-2 space-y-2 border-l-2 border-slate-800 ml-4 my-1">
                    {techProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        to={prod.link}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {prod.icon}
                        <div>
                          <p className="font-bold text-xs text-white">{prod.name}</p>
                          <p className="text-[11px] text-slate-400">{prod.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/mile" 
                className="px-4 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Academics (MILE)
              </Link>

              <Link 
                to="/corporate-consulting" 
                className="px-4 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consulting
              </Link>

              <Link 
                to="/about" 
                className="px-4 py-2.5 rounded-lg hover:bg-slate-800/60 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>

            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/contact");
                }}
                className="w-full text-center text-slate-300 border border-slate-700 py-2.5 rounded-lg font-semibold"
              >
                Talk to a Solution Architect
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/palbon");
                }}
                className="w-full text-center bg-[#0369a1] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Configure PALBON</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}