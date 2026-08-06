import React from "react";
import { ArrowRight } from "lucide-react";
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

  const topRowCards = [
    { title: "Disconnected Tools", image: ImageLeft },
    { title: "Manual Handoffs", image: Frame53 },
    { title: "Siloed Data", image: Frame54 },
    { title: "Delayed Decisions", image: ImageRight },
    { title: "Executive Friction", image: MainImage },
    { title: "Unaligned Strategy", image: Frame247 }
  ];

  const bottomRowCards = [
    { title: "Inconsistent Information", image: ImageLeft1 },
    { title: "Complex Processes", image: Frame54 },
    { title: "Compliance Risks", image: ImageRight1 },
    { title: "Hidden Costs", image: Frame53 },
    { title: "Leadership Silos", image: MainImage },
    { title: "Capability Erosion", image: ImageRight }
  ];

  // Repeat items for seamless infinite marquee loop
  const topLoop = [...topRowCards, ...topRowCards, ...topRowCards];
  const bottomLoop = [...bottomRowCards, ...bottomRowCards, ...bottomRowCards];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80" id="mkraft-gallery">
      
      {/* Keyframe Marquee Loop Animations */}
      <style>{`
        @keyframes marqueeGliderLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marqueeGliderRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }

        .animate-glider-left {
          display: flex;
          width: max-content;
          animation: marqueeGliderLeft 35s linear infinite;
        }

        .animate-glider-left:hover {
          animation-play-state: paused;
        }

        .animate-glider-right {
          display: flex;
          width: max-content;
          animation: marqueeGliderRight 35s linear infinite;
        }

        .animate-glider-right:hover {
          animation-play-state: paused;
        }
      `}</style>

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

      </div>

      {/* Full Width Automatic Infinite Loop Marquee Container */}
      <div className="w-full relative overflow-hidden space-y-6 pt-2">
        
        {/* Top Row: Automatically Glides Left */}
        <div className="animate-glider-left flex items-center gap-6">
          {topLoop.map((card, idx) => (
            <div 
              key={idx}
              className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl border border-slate-200/80 group cursor-pointer"
            >
              {/* Clean Crisp Photo (No Blur) */}
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Crisp Gradient Bottom Title Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/90 via-[#01182F]/20 to-transparent flex items-end p-5 text-left">
                <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: Automatically Glides Right */}
        <div className="animate-glider-right flex items-center gap-6">
          {bottomLoop.map((card, idx) => (
            <div 
              key={idx}
              className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl border border-slate-200/80 group cursor-pointer"
            >
              {/* Clean Crisp Photo (No Blur) */}
              <img 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Crisp Gradient Bottom Title Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/90 via-[#01182F]/20 to-transparent flex items-end p-5 text-left">
                <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
