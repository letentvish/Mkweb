import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PalbonFrameworkSection({ onOpenSuiteModal }) {
  const navigate = useNavigate();

  const intelligenceTabData = {
    configuration: {
      badge: "FLEXIBILITY",
      headline: "Adaptable workflows built for your custom operation",
      description: "Configure processes and business rules without complex code rewrites. Maintain complete ownership over system parameters and logic.",
      image: "/configure.webp",
    },
    reasoning: {
      badge: "INTELLIGENCE",
      headline: "Context-aware AI reasoning for complex decision making",
      description: "Leverage AI models that analyze multi-dimensional enterprise data to deliver actionable recommendations and automated workflows.",
      image: "/reasoning.webp",
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200" id="solutions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>AI-POWERED</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]">
            Built for <span className="italic font-serif bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent px-1">your</span> framework
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            We do not sell a rigid single-purpose box. We bring a modular system that bends to how you actually operate. You own the configuration, not a vendor's future guesses.
          </p>
        </div>

        {/* Division 1: Configuration Card Block */}
        <div className="bg-white border border-sky-200/80 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Visual Showcase */}
            <div className="lg:col-span-6 relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]">
              <div className="relative w-full h-full min-h-full bg-slate-100 flex items-center justify-center">
                <img 
                  src={intelligenceTabData.configuration.image} 
                  alt="Configuration visual" 
                  className="w-full h-full object-cover object-center block min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]"
                />
              </div>
            </div>

            {/* Right Column: Text Content Side */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 space-y-4 sm:space-y-6 text-left">
              <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-poppins">
                {intelligenceTabData.configuration.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#01182F] leading-[1.18] tracking-tight">
                {intelligenceTabData.configuration.headline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {intelligenceTabData.configuration.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenSuiteModal}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Configure Suite</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Division 2: Reasoning Card Block */}
        <div className="bg-white border border-sky-200/80 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Visual Showcase */}
            <div className="lg:col-span-6 relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]">
              <div className="relative w-full h-full min-h-full bg-slate-100 flex items-center justify-center">
                <img 
                  src={intelligenceTabData.reasoning.image} 
                  alt="Reasoning visual" 
                  className="w-full h-full object-cover object-center block min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]"
                />
              </div>
            </div>

            {/* Right Column: Text Content Side */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 space-y-4 sm:space-y-6 text-left">
              <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-poppins">
                {intelligenceTabData.reasoning.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-[#01182F] leading-[1.18] tracking-tight">
                {intelligenceTabData.reasoning.headline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {intelligenceTabData.reasoning.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenSuiteModal}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Configure Suite</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
