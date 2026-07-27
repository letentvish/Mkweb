import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Cpu, 
  ArrowRight, 
  Menu, 
  X,
  Users,
  BarChart3,
  BookOpen,
  Boxes,
  Zap
} from "lucide-react";
import LogoLight from "../../Assets/MultipliersKraftLogoLight.png";

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);

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
      badge: "Core HRMS",
      tagline: "Total talent lifecycle, workforce analytics, payroll & performance.",
      icon: <Users className="w-5 h-5 text-sky-400" />,
      color: "from-sky-500/20 to-blue-600/10 border-sky-500/30",
      link: "/datanix",
    },
    {
      id: "erp",
      name: "ERP Solution",
      badge: "Operations",
      tagline: "Financial automation, procurement, inventory & B2B workflows.",
      icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/20 to-purple-600/10 border-indigo-500/30",
      link: "/carve",
    },
    {
      id: "magnetics",
      name: "Magnetics (LXP)",
      badge: "Learning Platform",
      tagline: "AI-driven skill telemetry, career paths & L&D frameworks.",
      icon: <BookOpen className="w-5 h-5 text-teal-400" />,
      color: "from-teal-500/20 to-emerald-600/10 border-teal-500/30",
      link: "/mile",
    },
    {
      id: "m1",
      name: "M1 Integrated Stack",
      badge: "Modular Cart",
      tagline: "Custom assembly of HRMS, ERP & LXP into a single operating stack.",
      icon: <Boxes className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-orange-600/10 border-amber-500/30",
      link: "/assessment",
    },
  ];

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
              src={LogoLight} 
              alt="MultipliersKraft Logo" 
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-poppins text-sm font-medium text-slate-300">
            
            {/* Home */}
            <Link 
              to="/" 
              className={`px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/" ? "text-white bg-slate-800/80 font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* Technology Mega Dropdown (SaaS Suite) */}
            <div 
              className="relative"
              onMouseEnter={handleTechMouseEnter}
              onMouseLeave={handleTechMouseLeave}
              ref={dropdownRef}
            >
              <button 
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 cursor-pointer ${
                  location.pathname.startsWith("/technology") || techDropdownOpen ? "text-white bg-slate-800/80 font-semibold" : ""
                }`}
              >
                <span>Technology (SaaS)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${techDropdownOpen ? "rotate-180 text-sky-400" : "text-slate-400"}`} />
              </button>

              {/* Technology Mega Dropdown Menu */}
              <AnimatePresence>
                {techDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-[#0c102b] border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    {/* Header bar in dropdown */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-poppins">ENTERPRISE SAAS SUITE</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">4 Modular Engines</span>
                    </div>

                    {/* 2-Column Product Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {techProducts.map((prod) => (
                        <Link
                          key={prod.id}
                          to={prod.link}
                          className={`group p-4 rounded-xl border bg-gradient-to-br transition-all duration-300 hover:scale-[1.02] ${prod.color}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80">
                                {prod.icon}
                              </div>
                              <h4 className="font-poppins font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                                {prod.name}
                              </h4>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                              {prod.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed pl-1">
                            {prod.tagline}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA strip in dropdown */}
                    <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Looking to consolidate your software tools?</span>
                      <Link 
                        to="/assessment" 
                        className="inline-flex items-center gap-1.5 font-bold text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Build M1 Custom Stack</span>
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
              className={`px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/mile" ? "text-white bg-slate-800/80 font-semibold" : ""
              }`}
            >
              Academics (MILE)
            </Link>

            {/* Consulting */}
            <Link 
              to="/corporate-consulting" 
              className={`px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/corporate-consulting" ? "text-white bg-slate-800/80 font-semibold" : ""
              }`}
            >
              Consulting
            </Link>

            {/* About Company */}
            <Link 
              to="/about" 
              className={`px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-800/60 ${
                location.pathname === "/about" ? "text-white bg-slate-800/80 font-semibold" : ""
              }`}
            >
              Company
            </Link>

          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer"
            >
              Contact Us
            </button>

            <button
              onClick={() => navigate("/assessment")}
              className="bg-[#0369a1] hover:bg-[#0284c7] text-white px-5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Configure M1</span>
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
                          <p className="text-[11px] text-slate-400">{prod.badge}</p>
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
                Contact Us
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/assessment");
                }}
                className="w-full text-center bg-[#0369a1] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Configure M1 Stack</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}