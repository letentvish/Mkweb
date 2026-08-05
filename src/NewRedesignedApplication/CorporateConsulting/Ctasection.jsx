import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80" id="cta-section">
      
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="cta-consulting-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-consulting-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean White Enterprise Card Container */}
        <div className="bg-white border border-sky-200/80 rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl shadow-sky-100/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-6">
              
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>READY TO TRANSFORM YOUR ENTERPRISE?</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]">
                Build capability that <br className="hidden sm:block" />
                <span className="text-[#0284c7]">outlives</span> the engagement.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Talk to our senior advisory partners and map out a customized corporate consulting engagement tailored for your organizational strategy.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Book Strategy Session</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
                >
                  <span>Explore Advisory Framework</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </button>
              </div>
            </div>

            {/* Right Side 3D Isometric Growth Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              <img
                src="/cta_3d_barchart_1785046320601.png"
                alt="Growth Telemetry Graphic"
                className="max-h-64 sm:max-h-72 lg:max-h-80 w-auto object-contain hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = "/pillar_technology.png"; }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
