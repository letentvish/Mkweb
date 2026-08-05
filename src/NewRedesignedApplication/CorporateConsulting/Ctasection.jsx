import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden" id="cta-section">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="cta-consulting-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-consulting-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Deep Navy Dark Card */}
        <div className="bg-[#01182F] border border-indigo-900/80 rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 text-left space-y-6">
              {/* Top Glowing Pill Badge */}
              <div className="inline-flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20">
                <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#070c1e] text-white backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-100 tracking-wider uppercase font-poppins">
                    READY TO TRANSFORM YOUR ENTERPRISE?
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-[1.12]">
                Build capability that <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  outlives
                </span> the engagement.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Talk to our senior advisory partners and map out a customized corporate consulting engagement tailored for your organizational strategy.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 shadow-xl shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-base"
                >
                  <Compass className="w-5 h-5" />
                  <span>Book Strategy Session</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-base backdrop-blur-md"
                >
                  <span>Explore Advisory Framework</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300" />
                </button>
              </div>
            </div>

            {/* Right Side 3D Isometric Growth Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              <img
                src="/cta_3d_barchart_1785046320601.png"
                alt="Growth Telemetry Graphic"
                className="max-h-64 sm:max-h-72 lg:max-h-80 w-auto object-contain drop-shadow-[0_20px_40px_rgba(2,132,199,0.3)] hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
