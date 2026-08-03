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
      id: "palbon",
      name: "PALBON Suites",
      tagline: "Combine modules into one modular operating system.",
      category: "MODULAR SUITE",
      icon: <Boxes className="w-4 h-4 text-sky-400" />,
      link: "/palbon",
      featureTags: ["Unified Data Model", "Zero Tool Friction", "Single Sign-On (SSO)", "Cross-Engine Sync"],
      statsLabel: "Consolidation",
      statsValue: "1 Single Stack"
    },
    {
      id: "nucleus",
      name: "Nucleus (HRMS)",
      tagline: "Talent lifecycle, payroll & workforce analytics.",
      category: "HRMS",
      icon: <Users className="w-4 h-4 text-sky-400" />,
      link: "/datanix",
      featureTags: ["Talent Orchestration", "Automated Payroll", "Performance Telemetry", "Workforce Analytics"],
      statsLabel: "Payroll & HR",
      statsValue: "100% Automated"
    },
    {
      id: "magnetics",
      name: "Magnetics (LXP)",
      tagline: "Learning, continuous capability & skill telemetry.",
      category: "LEARNING",
      icon: <BookOpen className="w-4 h-4 text-sky-400" />,
      link: "/mile",
      featureTags: ["AI Skill Pathways", "Career Trajectories", "Skill Gap Diagnostics", "L&D Frameworks"],
      statsLabel: "Skill Retention",
      statsValue: "94% Mastery"
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
                <span>Technology</span>
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

                      {/* Right Pane: Live Interactive Dashboard Preview & Feature Tags */}
                      <div className="col-span-6 pl-5 flex flex-col justify-between">
                        <div>
                          {/* Module Name & Feature Tags Bar */}
                          <div className="mb-2">
                            <p className="text-xs font-bold text-[#38bdf8] mb-1 font-poppins flex items-center justify-between">
                              <span>{currentPreview.name} Preview</span>
                              <span className="text-[10px] text-slate-400 font-normal">{currentPreview.statsValue}</span>
                            </p>

                            {/* Feature Tags List */}
                            <div className="flex flex-wrap gap-1.5 mb-2.5">
                              {currentPreview.featureTags.map((tag, idx) => (
                                <span 
                                  key={idx}
                                  className="text-[9px] font-semibold text-slate-300 bg-[#161c33] border border-slate-700/80 px-2 py-0.5 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* 4 Distinct Live Dashboard Mockup Cards */}
                          {currentPreview.id === "nucleus" && (
                            /* 1. NUCLEUS HRMS DASHBOARD */
                            <div className="bg-white rounded-2xl p-3.5 text-slate-900 shadow-2xl border border-slate-200 text-left">
                              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-100">
                                <h5 className="font-poppins font-bold text-xs text-slate-900">Workforce & Payroll Telemetry</h5>
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span className="text-[8px] font-bold text-slate-500">Live</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Total Employees</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">2,650 <span className="text-[8px] text-emerald-600 font-bold">↑ 12.8%</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Active Today</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">1,842 <span className="text-[8px] text-emerald-600 font-bold">↑ 8.3%</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Avg Performance</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">4.6/5 <span className="text-[8px] text-emerald-600 font-bold">↑ 6.1%</span></p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] font-bold text-slate-500 mb-1">Headcount Growth</p>
                                  <svg className="w-full h-7" viewBox="0 0 100 40">
                                    <path d="M 0 35 Q 25 10 50 25 T 100 5" fill="none" stroke="#0284c7" strokeWidth="2" />
                                  </svg>
                                </div>
                                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                                  <div className="relative w-7 h-7 shrink-0">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                                      <circle cx="18" cy="18" r="14" fill="none" stroke="#0284c7" strokeWidth="6" strokeDasharray="40 100" />
                                      <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-40" />
                                    </svg>
                                  </div>
                                  <div className="text-[8px] space-y-0.5 text-slate-600 font-medium">
                                    <div>Eng: 40%</div>
                                    <div>Sales: 25%</div>
                                  </div>
                                </div>
                              </div>

                              <div className="pt-1.5 border-t border-slate-100 text-[8px] text-slate-600 flex justify-between font-medium">
                                <span>👤 Joining: 24 New Employees</span>
                                <span className="text-emerald-600 font-bold">Payroll Cleared</span>
                              </div>
                            </div>
                          )}

                          {currentPreview.id === "erp" && (
                            /* 2. ERP OPERATIONS DASHBOARD */
                            <div className="bg-white rounded-2xl p-3.5 text-slate-900 shadow-2xl border border-slate-200 text-left">
                              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-100">
                                <h5 className="font-poppins font-bold text-xs text-slate-900">Financial & Operations Control</h5>
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                  <span className="text-[8px] font-bold text-slate-500">Real-time</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Q3 Revenue</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">$4.2M <span className="text-[8px] text-emerald-600 font-bold">↑ 18%</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Pending POs</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">142 <span className="text-[8px] text-sky-600 font-bold">Auto</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Supply On-Time</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">96.4% <span className="text-[8px] text-emerald-600 font-bold">High</span></p>
                                </div>
                              </div>

                              {/* Revenue Bar Chart Visual */}
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 mb-2.5">
                                <div className="flex justify-between text-[8px] font-bold text-slate-500 mb-1">
                                  <span>Monthly Cashflow & Procurement</span>
                                  <span className="text-sky-600">$1.4M / Mo</span>
                                </div>
                                <div className="h-7 w-full flex items-end gap-1.5">
                                  <div className="flex-1 bg-sky-200 h-[40%] rounded-t" />
                                  <div className="flex-1 bg-sky-400 h-[65%] rounded-t" />
                                  <div className="flex-1 bg-sky-300 h-[50%] rounded-t" />
                                  <div className="flex-1 bg-indigo-500 h-[85%] rounded-t" />
                                  <div className="flex-1 bg-sky-600 h-[100%] rounded-t" />
                                </div>
                              </div>

                              <div className="pt-1.5 border-t border-slate-100 text-[8px] text-slate-600 flex justify-between font-medium">
                                <span>📦 PO #9482 Approved</span>
                                <span className="text-indigo-600 font-bold">$124,500 Vendor Clearance</span>
                              </div>
                            </div>
                          )}

                          {currentPreview.id === "magnetics" && (
                            /* 3. MAGNETICS LXP DASHBOARD */
                            <div className="bg-white rounded-2xl p-3.5 text-slate-900 shadow-2xl border border-slate-200 text-left">
                              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-100">
                                <h5 className="font-poppins font-bold text-xs text-slate-900">Skill Telemetry & L&D Engine</h5>
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                  <span className="text-[8px] font-bold text-slate-500">AI Track</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Active Learners</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">8,920 <span className="text-[8px] text-emerald-600 font-bold">↑ 22%</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Completion</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">94.2% <span className="text-[8px] text-emerald-600 font-bold">Top</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Badges Issued</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">3,410 <span className="text-[8px] text-sky-600 font-bold">Verified</span></p>
                                </div>
                              </div>

                              {/* Skill Competency Progress Bars */}
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 mb-2.5 space-y-1.5">
                                <div className="flex justify-between text-[8px] font-bold text-slate-600">
                                  <span>AI Engineering</span>
                                  <span>88% Mastery</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-indigo-500 w-[88%]" />
                                </div>

                                <div className="flex justify-between text-[8px] font-bold text-slate-600">
                                  <span>Product Leadership</span>
                                  <span>92% Mastery</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-sky-500 w-[92%]" />
                                </div>
                              </div>

                              <div className="pt-1.5 border-t border-slate-100 text-[8px] text-slate-600 flex justify-between font-medium">
                                <span>🎓 Masterclass Certified</span>
                                <span className="text-indigo-600 font-bold">48 Executives Passed</span>
                              </div>
                            </div>
                          )}

                          {currentPreview.id === "palbon" && (
                            /* 4. PALBON UNIFIED ENTERPRISE OS DASHBOARD */
                            <div className="bg-white rounded-2xl p-3.5 text-slate-900 shadow-2xl border border-slate-200 text-left">
                              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-100">
                                <h5 className="font-poppins font-bold text-xs text-slate-900">Unified Operating System</h5>
                                <div className="flex items-center gap-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="text-[8px] font-bold text-emerald-600">100% Synced</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Active Engines</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">4 / 4 <span className="text-[8px] text-emerald-600 font-bold">Connected</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">System Health</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">99.99% <span className="text-[8px] text-emerald-600 font-bold">Optimal</span></p>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                  <p className="text-[8px] text-slate-400 font-semibold">Data Velocity</p>
                                  <p className="font-bold text-xs text-slate-900 mt-0.5">12.4k <span className="text-[8px] text-sky-600 font-bold">req/s</span></p>
                                </div>
                              </div>

                              {/* Connected Ecosystem Matrix Nodes */}
                              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 mb-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[9px] font-bold text-slate-800 bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded">HRMS</span>
                                  <span className="text-slate-300 text-xs">↔</span>
                                  <span className="text-[9px] font-bold text-slate-800 bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded">ERP</span>
                                  <span className="text-slate-300 text-xs">↔</span>
                                  <span className="text-[9px] font-bold text-slate-800 bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">LXP</span>
                                </div>
                                <span className="text-[8px] font-extrabold text-emerald-600">Zero Lag</span>
                              </div>

                              <div className="pt-1.5 border-t border-slate-100 text-[8px] text-slate-600 flex justify-between font-medium">
                                <span>⚡ Single Operating Stack</span>
                                <span className="text-sky-600 font-bold">SSO Enabled</span>
                              </div>
                            </div>
                          )}

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
              Academics
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
                  <span>Technology</span>
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
                Academics
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