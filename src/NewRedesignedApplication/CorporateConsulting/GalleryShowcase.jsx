import React, { useRef } from "react";
import { 
  Unplug, 
  BarChart2, 
  FileText, 
  Clock, 
  AlertTriangle, 
  Compass, 
  AlertOctagon, 
  GitMerge, 
  ShieldAlert, 
  Coins, 
  Users, 
  TrendingDown, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ImageLeft from "../../Assets/CorporateConsulting/ImageLeft.jpg";
import ImageRight from "../../Assets/CorporateConsulting/ImageRight.jpg";
import ImageLeft1 from "../../Assets/CorporateConsulting/ImageLeft1.jpg";
import ImageRight1 from "../../Assets/CorporateConsulting/ImageRight1.jpg";
import MainImage from "../../Assets/CorporateConsulting/MainImage.webp";
import Frame247 from "../../Assets/Frame247.jpg";
import Frame53 from "../../Assets/Frame53.jpg";
import Frame54 from "../../Assets/Frame54.jpg";

export default function GalleryShowcase() {
  const navigate = useNavigate();
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const scrollLeft = () => {
    if (topRowRef.current && bottomRowRef.current) {
      topRowRef.current.scrollBy({ left: -350, behavior: "smooth" });
      bottomRowRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (topRowRef.current && bottomRowRef.current) {
      topRowRef.current.scrollBy({ left: 350, behavior: "smooth" });
      bottomRowRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const topRowCards = [
    {
      title: "Disconnected Tools",
      icon: <Unplug className="w-5 h-5 text-white" />,
      image: ImageLeft
    },
    {
      title: "Manual Handoffs",
      icon: <BarChart2 className="w-5 h-5 text-white" />,
      image: Frame53
    },
    {
      title: "Siloed Data",
      icon: <FileText className="w-5 h-5 text-white" />,
      image: Frame54
    },
    {
      title: "Delayed Decisions",
      icon: <Clock className="w-5 h-5 text-white" />,
      image: ImageRight
    },
    {
      title: "Executive Friction",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      image: MainImage
    },
    {
      title: "Unaligned Strategy",
      icon: <Compass className="w-5 h-5 text-white" />,
      image: Frame247
    }
  ];

  const bottomRowCards = [
    {
      title: "Inconsistent Information",
      icon: <AlertOctagon className="w-5 h-5 text-white" />,
      image: ImageLeft1
    },
    {
      title: "Complex Processes",
      icon: <GitMerge className="w-5 h-5 text-white" />,
      image: Frame54
    },
    {
      title: "Compliance Risks",
      icon: <ShieldAlert className="w-5 h-5 text-white" />,
      image: ImageRight1
    },
    {
      title: "Hidden Costs",
      icon: <Coins className="w-5 h-5 text-white" />,
      image: Frame53
    },
    {
      title: "Leadership Silos",
      icon: <Users className="w-5 h-5 text-white" />,
      image: MainImage
    },
    {
      title: "Capability Erosion",
      icon: <TrendingDown className="w-5 h-5 text-white" />,
      image: ImageRight
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80" id="mkraft-gallery">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="friction-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#friction-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* 2-Column Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          
          {/* Left Column: Title & Badge */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-mono font-extrabold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>FRICTION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Your systems do not <br />
              speak <span className="text-[#0284c7]">the same</span> <br />
              <span className="text-[#0284c7]">language</span>
            </h2>
          </div>

          {/* Right Column: Subtitle Copy & CTA Link */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Finance closes the books on data HR sent last week. Sales promises what operations cannot see. Every handoff is a small betrayal of the truth. The cost is not just time, it is the slow erosion of good decisions.
            </p>

            <div>
              <button 
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-extrabold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer group font-poppins"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Double-Row Interactive Slider Showcase Container */}
        <div className="relative">
          
          {/* Navigation Controls: Circular Left/Right Arrow Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-800 shadow-xl flex items-center justify-center hover:bg-sky-50 hover:text-[#0284c7] transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous Cards"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-800 shadow-xl flex items-center justify-center hover:bg-sky-50 hover:text-[#0284c7] transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next Cards"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Sliders Container */}
          <div className="space-y-6 overflow-hidden">
            
            {/* Top Row Cards */}
            <div 
              ref={topRowRef}
              className="flex items-center gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1"
            >
              {[...topRowCards, ...topRowCards].map((card, idx) => (
                <div 
                  key={idx}
                  className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-lg group border border-indigo-900/30 cursor-pointer"
                >
                  {/* Background Photo with Dark Purple Overlay */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0b36]/90 via-[#27104b]/75 to-sky-950/60 group-hover:opacity-90 transition-opacity" />

                  {/* Center Icon Circle */}
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-115 group-hover:bg-[#0284c7] transition-all duration-300 shadow-lg">
                    {card.icon}
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-4 left-5 right-5 text-left">
                    <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row Cards (Staggered Offset) */}
            <div 
              ref={bottomRowRef}
              className="flex items-center gap-6 overflow-x-auto scrollbar-none scroll-smooth py-2 px-1 pl-12"
            >
              {[...bottomRowCards, ...bottomRowCards].map((card, idx) => (
                <div 
                  key={idx}
                  className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-lg group border border-indigo-900/30 cursor-pointer"
                >
                  {/* Background Photo with Dark Purple Overlay */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0b36]/90 via-[#27104b]/75 to-sky-950/60 group-hover:opacity-90 transition-opacity" />

                  {/* Center Icon Circle */}
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-115 group-hover:bg-[#0284c7] transition-all duration-300 shadow-lg">
                    {card.icon}
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-4 left-5 right-5 text-left">
                    <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
