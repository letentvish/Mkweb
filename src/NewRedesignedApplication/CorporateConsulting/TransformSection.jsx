import React from "react";
import { Search, FileCode, Play, UserCheck, TrendingUp, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransformSection() {
  const navigate = useNavigate();

  const steps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Deep diagnostic audit of your leadership, culture, operating model, and operational friction.",
      icon: <Search className="w-5 h-5 text-[#0284c7]" />,
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Co-creating tailored capability frameworks, operating blueprints, and execution roadmaps.",
      icon: <FileCode className="w-5 h-5 text-[#0284c7]" />,
    },
    {
      step: "03",
      title: "Execution",
      description: "Deploying senior advisory partners and modular frameworks into live enterprise workflows.",
      icon: <Play className="w-5 h-5 text-[#0284c7]" />,
    },
    {
      step: "04",
      title: "Embedding",
      description: "Training internal champions, establishing telemetry, and ensuring internal capability ownership.",
      icon: <UserCheck className="w-5 h-5 text-[#0284c7]" />,
    },
    {
      step: "05",
      title: "Continuous Growth",
      description: "Reviewing performance ROI, refining parameters, and sustaining long-term independence.",
      icon: <TrendingUp className="w-5 h-5 text-[#0284c7]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900 relative" id="how-mkraft-transforms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            How MKraft <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">Transforms</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            A structured 5-stage transformation methodology engineered for clarity, alignment, and sustainable capability.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Methodology</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              <span>Download Blueprint</span>
              <ArrowRight className="w-4 h-4 text-[#0284c7]" />
            </button>
          </div>
        </div>

        {/* Horizontal 5-Step Connected Timeline Flow */}
        <div className="relative mt-16 pt-8">
          
          {/* Connecting Background Horizontal Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-sky-300 via-[#0284c7] to-indigo-400 z-0 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Node Circle Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-sky-400 shadow-xl flex items-center justify-center mb-6 text-[#0284c7] group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300 shrink-0 relative">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 bg-[#01182F] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {item.step}
                  </span>
                </div>

                {/* Step Content */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-5 w-full text-left shadow-sm group-hover:border-sky-300 group-hover:shadow-md transition-all duration-300">
                  <span className="text-[10px] font-mono font-extrabold text-[#0284c7] uppercase tracking-widest block mb-1">
                    STAGE {item.step}
                  </span>
                  <h3 className="font-poppins font-bold text-base text-[#01182F] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
