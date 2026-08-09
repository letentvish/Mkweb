import React from "react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

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
    <footer className="w-full bg-[#01182F] text-slate-200 border-t border-slate-800 font-sans">
      
      {/* Main Footer Links Grid - Solid Background, No Glow */}
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

            {/* Global Contact Info */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-300">
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

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3 font-poppins">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/multiplierskraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#0284c7] border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-[#0284c7] border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-red-600 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-pink-600 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-blue-600 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
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
      <div className="bg-[#000a14] border-t border-slate-800 py-6 text-xs text-slate-400">
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