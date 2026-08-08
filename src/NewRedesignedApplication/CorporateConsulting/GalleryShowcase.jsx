import React from "react";
import { ArrowRight, Compass, Users } from "lucide-react";
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
    { image: ImageLeft },
    { image: Frame53 },
    { image: Frame54 },
    { image: ImageRight },
    { image: MainImage },
    { image: Frame247 }
  ];

  const bottomRowCards = [
    { image: ImageLeft1 },
    { image: Frame54 },
    { image: ImageRight1 },
    { image: Frame53 },
    { image: MainImage },
    { image: ImageRight }
  ];

  // Repeat items for seamless infinite marquee loop
  const topLoop = [...topRowCards, ...topRowCards, ...topRowCards];
  const bottomLoop = [...bottomRowCards, ...bottomRowCards, ...bottomRowCards];

  return (
    <section className="py-20 lg:py-28 bg-[#01182F] text-white relative overflow-hidden border-b border-indigo-950/80" id="mkraft-gallery">
      
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
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="gallery-dark-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#38BDF8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gallery-dark-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* 2-Column Header Section incorporating CTA Text & Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          
          {/* Left Column: CTA Heading & Status Pill Badge */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30 text-xs font-mono font-extrabold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>READY TO TRANSFORM YOUR ENTERPRISE?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-[1.08]">
              Build capability that <br />
              <span className="text-[#0284c7]">outlives</span> the engagement.
            </h2>
          </div>

          {/* Right Column: CTA Paragraph & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Talk to our senior advisory partners and map out a customized corporate consulting engagement tailored for your organizational strategy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0284c7] hover:bg-sky-600 text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Book Strategy Session</span>
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
              >
                <Users className="w-4 h-4 text-sky-400" />
                <span>Talk to an Expert</span>
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
              className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl border border-sky-400/20 group cursor-pointer"
            >
              {/* Pure Crisp Photo */}
              <img 
                src={card.image} 
                alt="MultipliersKraft Corporate Experience"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row: Automatically Glides Right */}
        <div className="animate-glider-right flex items-center gap-6">
          {bottomLoop.map((card, idx) => (
            <div 
              key={idx}
              className="w-72 sm:w-80 h-48 sm:h-52 shrink-0 rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl border border-sky-400/20 group cursor-pointer"
            >
              {/* Pure Crisp Photo */}
              <img 
                src={card.image} 
                alt="MultipliersKraft Corporate Experience"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA Banner Box inside Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 text-left">
        <div className="bg-sky-950/40 border border-sky-500/20 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div>
            <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-white">
              Engineered for Sustainable Impact
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              Diagnosing root causes, aligning leadership vision, and embedding continuous capability across your enterprise.
            </p>
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="text-[#0284c7] hover:text-sky-300 font-extrabold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group font-poppins shrink-0 bg-white/10 px-6 py-3 rounded-full border border-sky-400/30"
          >
            <span>Explore Corporate Engagements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
