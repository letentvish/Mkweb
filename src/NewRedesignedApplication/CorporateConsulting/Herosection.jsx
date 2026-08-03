import React from "react";
import Marquee from 'react-fast-marquee';
import { Compass, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorporateHero = () => {
  const navigate = useNavigate();

  const companyNames = [
    "XPENG",
    "AMPLITUDE",
    "VEROXFLOOR",
    "RPUBLICA",
    "INVOICE2GO",
    "MICROSOFT",
    "DELOITTE",
    "ACCENTURE"
  ];

  const heroPillars = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0284c7]" />,
      title: "Strategy Realignment",
      description: "Diagnosing growth barriers and realignment for rapid market scaling."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0284c7]" />,
      title: "Operational Agility",
      description: "Removing process bottlenecks and automating cross-functional handoffs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0284c7]" />,
      title: "Enterprise Governance",
      description: "Establishing sustainable execution metrics, data integrity, and compliance."
    }
  ];

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/background.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      {/* Tech Node Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="consulting-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#consulting-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-2">
        
        {/* Header Content */}
        <div className="max-w-4xl mx-auto mb-14">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>EXECUTIVE ADVISORY & OPERATIONAL EXCELLENCE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Strategic consulting for <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              high-growth enterprise execution
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4 font-medium">
            We bridge the gap between strategic vision and operational reality. Aligning your leadership, workflows, and data core for sustainable scaling.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Book Strategy Session</span>
            </button>

            <button
              onClick={() => navigate("/solutions")}
              className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              <span>Explore PALBON Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#0284c7]" />
            </button>
          </div>

        </div>

        {/* 3 Hero Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 text-left">
          {heroPillars.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="font-poppins font-extrabold text-xl text-[#01182F] mb-2 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners Marquee */}
        <div className="pt-8 border-t border-slate-200/60 max-w-5xl mx-auto">
          <p className="text-xs font-bold text-slate-500 tracking-widest uppercase font-poppins mb-6">
            TRUSTED BY ENTERPRISE LEADERS NATIONWIDE
          </p>

          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {companyNames.map((name, idx) => (
              <span
                key={idx}
                className="font-poppins font-extrabold text-slate-400 text-lg sm:text-xl tracking-wider mx-8 hover:text-slate-800 transition-colors duration-200 cursor-default"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>

      </div>

    </section>
  );
};

export default CorporateHero;