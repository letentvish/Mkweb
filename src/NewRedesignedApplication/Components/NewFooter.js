import React, { useState, useEffect } from "react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";
import LogoLight from "../../Assets/MultipliersKraftLogoLight.png";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, ShieldCheck, Globe, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : true; // Default to dark for premium sleek feel
  });

  const navigate = useNavigate();

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

  const handleNavigation = (path, section) => {
    if (path) {
      navigate(path);
    }
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <footer className="w-full bg-[#01182F] text-slate-200 border-t border-slate-800/80 relative overflow-hidden font-sans">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10 border-b border-slate-800/80">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#012243] via-[#02315e] to-[#01182F] border border-sky-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Transform Your Operating System</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Ready to assemble the enterprise platform you actually need?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-3 font-medium">
              Start with the modules that solve today's problems, then scale smoothly on one shared data core.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => navigate("/palbon")}
              className="w-full sm:w-auto bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm whitespace-nowrap"
            >
              <span>Explore PALBON Suite</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-sm whitespace-nowrap"
            >
              <span>Schedule Executive Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={LogoDark}
                alt="MultipliersKraft Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-normal">
              MultipliersKraft delivers next-generation modular ERP & HRMS software, corporate consulting, and data intelligence engineered for agile enterprise scale.
            </p>

            {/* Live System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Cloud Systems Operational</span>
            </div>

            {/* Global Contact Info */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0284c7] shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#0284c7] shrink-0" />
                <a href="mailto:connect@multiplierskraft.com" className="hover:text-white transition-colors">
                  connect@multiplierskraft.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: PALBON Suite */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-l-2 border-[#0284c7] pl-2.5">
              PALBON Suite
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Executive Matrix", path: "/palbon" },
                { name: "ERP Capability Line", path: "/palbon" },
                { name: "HRMS Nucleus Engine", path: "/palbon" },
                { name: "Single Record Data Core", path: "/palbon" },
                { name: "40-Module Configurator", path: "/palbon" },
                { name: "Automated Workflows", path: "/palbon" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#0284c7] transition-colors" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-l-2 border-indigo-500 pl-2.5">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Corporate Consulting", path: "/corporate-consulting" },
                { name: "SaaS Ecosystem", path: "/solutions" },
                { name: "Academic MILE Platform", path: "/mile" },
                { name: "DataNix Analytics", path: "/datanix" },
                { name: "Workforce Assessments", path: "/assessment" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Trust */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About MultipliersKraft", path: "/about" },
                { name: "Leadership Team", path: "/about" },
                { name: "Success Stories", path: "/about" },
                { name: "Security & Compliance", path: "/contact" },
                { name: "Contact & Support", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs sm:text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="bg-[#000d1a] border-t border-slate-800/80 py-6 relative z-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} MultipliersKraft Inc. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => handleNavigation("/privacy")} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNavigation("/terms")} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => handleNavigation("/security")} className="hover:text-white transition-colors cursor-pointer">
              Security
            </button>
            <div className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}