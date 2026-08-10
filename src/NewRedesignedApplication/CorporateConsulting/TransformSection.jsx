import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransformSection() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Automatic sequential light pulse timer moving across 5 nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  const rhythmSteps = [
    {
      id: "01",
      position: "below",
      title: "Absolute Clarity",
      description: 'Discovery and alignment. We see the organisation as it truly is — and agree on what "better" means.',
      lightOffset: "left-[0%]"
    },
    {
      id: "02",
      position: "above",
      title: "Root diagnosis",
      description: "Deep diagnostics and assessment. We locate the cause, never mistaking it for the symptom.",
      lightOffset: "left-[23%]"
    },
    {
      id: "03",
      position: "below",
      title: "Design",
      description: "Bespoke journey architecture. We craft the intervention to fit you exactly — nothing borrowed.",
      lightOffset: "left-[48%]"
    },
    {
      id: "04",
      position: "above",
      title: "Action",
      description: "Delivery and experience. Labs, simulations, and coaching bring the design to life in the work.",
      lightOffset: "left-[73%]"
    },
    {
      id: "05",
      position: "below",
      title: "Sustained impact",
      description: "Embedding and measurement. We stay until the change holds and the capability compounds.",
      lightOffset: "left-[95%]"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#01182F] text-white relative overflow-hidden border-b border-indigo-950/80" id="how-mkraft-transforms">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="transform-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#38BDF8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#transform-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header Section (Left Aligned) */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block font-poppins">
            FRAMEWORK
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-tight">
            How Mkraft Transforms
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl pt-1">
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
              className="text-[#0284c7] hover:text-sky-300 font-bold text-sm inline-flex items-center gap-1 transition-colors cursor-pointer group"
            >
              <span>Talk to an Expert</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5-Step Staggered Horizontal Timeline Grid */}
        <div className="relative mt-8 lg:mt-24 pt-4 lg:pt-12 pb-6 lg:pb-12">
          
          {/* Central Horizontal Timeline Line with Dynamic Traveling Light Movement (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[2%] right-[2%] h-[3px] bg-slate-800 -translate-y-1/2 z-0 rounded-full">
            {/* Sky Blue Track Base */}
            <div className="w-full h-full bg-[#0284c7]/40 relative">
              {/* Active Traveling Glowing Light Ray Beam */}
              <div 
                className={`absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_25px_#38BDF8] transition-all duration-700 ease-in-out ${rhythmSteps[currentActive].lightOffset}`} 
              />
            </div>
          </div>

          {/* Desktop Horizontal 5-Step Timeline Grid (lg:grid-cols-5) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative z-10 items-center">
            {rhythmSteps.map((step, idx) => {
              const isSelected = currentActive === idx;

              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="relative flex flex-col justify-center lg:min-h-[260px] text-left px-1 group cursor-pointer"
                >
                  
                  {/* ABOVE Content Block (ONLY for position === 'above') */}
                  {step.position === 'above' && (
                    <div 
                      className={`absolute bottom-1/2 pb-8 left-0 right-3 space-y-1.5 transition-all duration-500 ${
                        isSelected ? '-translate-y-2 opacity-100' : 'opacity-80'
                      }`}
                    >
                      <h3 
                        className={`font-poppins font-extrabold text-xl tracking-tight transition-colors duration-300 ${
                          isSelected ? 'text-[#0284c7] scale-105 origin-left' : 'text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300 ${
                        isSelected ? 'text-slate-100 font-medium' : 'text-slate-300'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  )}

                  {/* DOT DIRECTLY CENTERED ON THE LINE WITH DYNAMIC LIGHT TRIGGER */}
                  <div className="flex items-center justify-start relative z-10 py-2">
                    <div 
                      className={`w-5 h-5 rounded-full border-4 border-[#01182F] shrink-0 transition-all duration-500 ${
                        isSelected
                          ? 'bg-[#0284c7] scale-150 ring-4 ring-sky-400 shadow-[0_0_30px_#38BDF8]'
                          : 'bg-[#0284c7] shadow-md ring-2 ring-sky-500/50 opacity-90'
                      }`} 
                    />
                  </div>

                  {/* BELOW Content Block (ONLY for position === 'below') */}
                  {step.position === 'below' && (
                    <div 
                      className={`absolute top-1/2 pt-8 left-0 right-3 space-y-1.5 transition-all duration-500 ${
                        isSelected ? 'translate-y-2 opacity-100' : 'opacity-80'
                      }`}
                    >
                      <h3 
                        className={`font-poppins font-extrabold text-xl tracking-tight transition-colors duration-300 ${
                          isSelected ? 'text-[#0284c7] scale-105 origin-left' : 'text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed font-normal transition-colors duration-300 ${
                        isSelected ? 'text-slate-100 font-medium' : 'text-slate-300'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Responsive View (Stacked / 2-Column Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 relative z-10">
            {rhythmSteps.map((step, idx) => {
              const isSelected = currentActive === idx;

              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`border rounded-2xl p-5 w-full space-y-2 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-sky-400 shadow-lg text-white ring-1 ring-sky-400/50'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 shadow-sm hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono font-extrabold text-[#0284c7] uppercase">STEP {step.id}</span>
                  <h3 className={`font-poppins font-bold text-lg ${isSelected ? 'text-[#0284c7]' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
