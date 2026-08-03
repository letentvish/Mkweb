import React from "react";
import { Boxes, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircularGallery from "../CircularGallery";

const HERO_V3_GALLERY_ITEMS = [
  // ERP CATEGORY
  { 
    id: "finance-control", 
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", 
    text: "Finance & Control", 
    catLabel: "ERP Line", 
    desc: "General ledger, AP/AR, multi-entity financial consolidation",
    icon: "💰"
  },
  { 
    id: "procure-inventory", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", 
    text: "Procure to Pay & Inventory", 
    catLabel: "ERP Line", 
    desc: "3-way invoice matching, stock control & vendor management",
    icon: "📦"
  },
  { 
    id: "order-sales", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
    text: "Order to Cash & Sales", 
    catLabel: "ERP Line", 
    desc: "Revenue recognition, sales pipeline & billing automation",
    icon: "📊"
  },
  { 
    id: "ops-delivery", 
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", 
    text: "Operations & Delivery", 
    catLabel: "ERP Line", 
    desc: "WMS warehouse dispatch, MRP & project fulfillment",
    icon: "⚙️"
  },

  // HRMS CATEGORY
  { 
    id: "hr-foundation", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", 
    text: "HR Foundation", 
    catLabel: "HRMS Nucleus", 
    desc: "Single record data core for org structure & employee records",
    icon: "👥"
  },
  { 
    id: "hire-onboard", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", 
    text: "Hire to Onboard", 
    catLabel: "HRMS Nucleus", 
    desc: "ATS recruitment tracking & automated joining workflows",
    icon: "💼"
  },
  { 
    id: "pay-compliance", 
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80", 
    text: "Pay & Compliance", 
    catLabel: "HRMS Nucleus", 
    desc: "Automated payroll processing, tax filing & statutory compliance",
    icon: "💳"
  },
  { 
    id: "time-scheduling", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", 
    text: "Time & Scheduling", 
    catLabel: "HRMS Nucleus", 
    desc: "Biometric attendance, shift planning & leave tracking",
    icon: "⏰"
  },
  { 
    id: "perform-grow", 
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", 
    text: "Perform & Grow", 
    catLabel: "HRMS Nucleus", 
    desc: "OKRs, continuous performance reviews & learning paths",
    icon: "🎯"
  },
  { 
    id: "exp-service", 
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", 
    text: "Experience & Service", 
    catLabel: "HRMS Nucleus", 
    desc: "Employee self-service portal, helpdesk & engagement",
    icon: "✨"
  },
  { 
    id: "offboard-analyse", 
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", 
    text: "Offboard & Analyse", 
    catLabel: "HRMS Nucleus", 
    desc: "Exit management, attrition analytics & workforce BI",
    icon: "📈"
  }
];

export default function PalbonHero({ onOpenSuiteModal }) {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/background.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      {/* Tech Node Vector Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* HERO VERSION 3 (MODULAR ECOSYSTEM APP GRID) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-12 pt-2">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>UNIFIED. INTELLIGENT. IMPACTFUL.</span>
          </div>

          {/* Main Headline (H1) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Build your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              enterprise operating system
            </span>
          </h1>

          {/* Subheading (P1) */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4 font-medium">
            Unify your people, processes, data, and technology on one intelligent platform. Designed for the way modern enterprises operate.
          </p>

          {/* CTAs directly underneath H1 & P1 */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-2">
            <button
              onClick={onOpenSuiteModal}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-[#FFFFFF] font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <Boxes className="w-4 h-4 text-[#FFFFFF]" />
              <span>Configure PALBON Suite</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7]">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Overview</span>
            </button>
          </div>
        </div>

        {/* 3D WebGL Curved Interactive Circular Gallery */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-4 mb-2 overflow-hidden z-20">
          <div style={{ height: 'min(90vw, 640px)', position: 'relative', width: '100%' }}>
            <CircularGallery
              items={HERO_V3_GALLERY_ITEMS}
              bend={3}
              textColor="#01182F"
              borderRadius={0.06}
              scrollEase={0.04}
              scrollSpeed={2}
              font="bold 28px Figtree"
              fontUrl="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
            />
          </div>
        </div>

        {/* High Impact Bottom Banner */}
        <div 
          onClick={onOpenSuiteModal}
          className="mt-8 sm:mt-10 inline-flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#070c1e] text-white backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-100 tracking-wide">
              40 Connected Modules <span className="text-slate-400 mx-1.5">•</span> One Shared Data Core
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
