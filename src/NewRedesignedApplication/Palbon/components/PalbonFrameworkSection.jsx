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
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-extrabold text-[#6366f1] tracking-widest uppercase font-poppins block">
            AI-POWERED
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Built for <span className="italic font-serif bg-gradient-to-r from-[#6366f1] to-indigo-600 bg-clip-text text-transparent px-1">your</span> framework
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-1">
            We do not sell a rigid single-purpose box. We bring a modular system that bends to how you actually operate. You own the configuration, not a vendor's future guesses.
          </p>
        </div>

        {/* Division 1: Configuration Card Block */}
        <div className="bg-white border border-indigo-200/90 rounded-3xl overflow-hidden shadow-lg shadow-indigo-100/50 mb-12 lg:mb-16">
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
              <span className="text-xs font-bold text-[#6366f1] tracking-widest uppercase font-poppins">
                {intelligenceTabData.configuration.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                {intelligenceTabData.configuration.headline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {intelligenceTabData.configuration.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenSuiteModal}
                  className="px-7 py-3 rounded-xl border border-indigo-400 hover:border-indigo-600 text-[#6366f1] hover:bg-indigo-50 font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#6366f1]" />
                  <span>Configure Suite</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#6366f1] hover:text-indigo-700 font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk</span>
                  <ArrowRight className="w-4 h-4 text-[#6366f1]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Division 2: Reasoning Card Block */}
        <div className="bg-white border border-indigo-200/90 rounded-3xl overflow-hidden shadow-lg shadow-indigo-100/50">
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
              <span className="text-xs font-bold text-[#6366f1] tracking-widest uppercase font-poppins">
                {intelligenceTabData.reasoning.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                {intelligenceTabData.reasoning.headline}
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {intelligenceTabData.reasoning.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={onOpenSuiteModal}
                  className="px-7 py-3 rounded-xl border border-indigo-400 hover:border-indigo-600 text-[#6366f1] hover:bg-indigo-50 font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#6366f1]" />
                  <span>Configure Suite</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#6366f1] hover:text-indigo-700 font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk</span>
                  <ArrowRight className="w-4 h-4 text-[#6366f1]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
