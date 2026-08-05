import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransformSection() {
  const navigate = useNavigate();

  const rhythmSteps = [
    {
      id: "01",
      position: "below",
      title: "Absolute Clarity",
      description: 'Discovery and alignment. We see the organisation as it truly is — and agree on what "better" means.'
    },
    {
      id: "02",
      position: "above",
      title: "Root diagnosis",
      description: "Deep diagnostics and assessment. We locate the cause, never mistaking it for the symptom."
    },
    {
      id: "03",
      position: "below",
      title: "Design",
      description: "Bespoke journey architecture. We craft the intervention to fit you exactly — nothing borrowed."
    },
    {
      id: "04",
      position: "above",
      title: "Action",
      description: "Delivery and experience. Labs, simulations, and coaching bring the design to life in the work."
    },
    {
      id: "05",
      position: "below",
      title: "Sustained impact",
      description: "Embedding and measurement. We stay until the change holds and the capability compounds."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900 relative" id="how-mkraft-transforms">
      
      {/* Dynamic Keyframes for Timeline Light Pulse Animation */}
      <style>{`
        @keyframes lineLightGlow {
          0% {
            left: -20%;
          }
          50% {
            left: 50%;
          }
          100% {
            left: 120%;
          }
        }
        .animate-timeline-glow {
          animation: lineLightGlow 3.2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header Section (Left Aligned) */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block font-poppins">
            Framework
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-tight">
            How Mkraft Transforms
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl pt-1">
            A clean methodology cuts through confusion. We follow a five-stage rhythm that turns organizational diagnosis into measurable, scaled performance.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 sm:gap-6 pt-3">
            <button
              onClick={() => navigate("/assessment")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              Diagnose
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1 transition-colors cursor-pointer group"
            >
              <span>Talk to an Expert</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5-Step Staggered Horizontal Timeline Grid */}
        <div className="relative mt-16 pt-8 pb-8">
          
          {/* Central Horizontal Timeline Line with Animated Light Movement */}
          <div className="hidden md:block absolute top-1/2 left-[2%] right-[2%] h-[3px] bg-sky-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            {/* Sky Blue Track Fill */}
            <div className="w-full h-full bg-[#0284c7]/40 relative">
              {/* Traveling Glowing Light Ray Beam */}
              <div className="absolute top-0 bottom-0 w-44 bg-gradient-to-r from-transparent via-[#0284c7] to-transparent shadow-[0_0_15px_#0284c7] animate-timeline-glow" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10 items-center">
            {rhythmSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-center min-h-[260px] text-left px-1 group cursor-pointer">
                
                {/* ABOVE Content Block (for Node 2 & Node 4) */}
                <div 
                  className={`hidden md:block absolute bottom-1/2 pb-8 left-0 right-3 space-y-1.5 transition-all duration-300 group-hover:-translate-y-2 ${
                    step.position === 'above' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="font-poppins font-extrabold text-xl text-[#01182F] group-hover:text-[#0284c7] transition-colors duration-300 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* DOT DIRECTLY CENTERED ON THE LINE WITH HOVER POP-OUT */}
                <div className="hidden md:flex items-center justify-start relative z-10 py-2">
                  <div className="w-5 h-5 rounded-full bg-[#0284c7] border-4 border-white shadow-md ring-2 ring-sky-300 shrink-0 group-hover:scale-150 group-hover:ring-4 group-hover:ring-sky-400 group-hover:shadow-[0_0_20px_#0284c7] transition-all duration-300" />
                </div>

                {/* BELOW Content Block (for Node 1, Node 3, Node 5) */}
                <div 
                  className={`hidden md:block absolute top-1/2 pt-8 left-0 right-3 space-y-1.5 transition-all duration-300 group-hover:translate-y-2 ${
                    step.position === 'below' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="font-poppins font-extrabold text-xl text-[#01182F] group-hover:text-[#0284c7] transition-colors duration-300 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Mobile View (Stacked Cards) */}
                <div className="md:hidden bg-slate-50 border border-slate-200/90 rounded-2xl p-5 w-full space-y-1.5 shadow-sm group-hover:border-sky-300 group-hover:shadow-md transition-all duration-300">
                  <span className="text-[10px] font-mono font-extrabold text-[#0284c7] uppercase">STEP {step.id}</span>
                  <h3 className="font-poppins font-bold text-lg text-[#01182F] group-hover:text-[#0284c7] transition-colors">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
