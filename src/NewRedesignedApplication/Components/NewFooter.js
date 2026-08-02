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