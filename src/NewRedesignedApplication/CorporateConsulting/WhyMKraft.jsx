import React from "react";
import { User, Search, Cpu, Target, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WhyMKraft() {
  const navigate = useNavigate();

  const differentiators = [
    {
      badge: "BESPOKE",
      title: "Designed around your business",
      description: "Every engagement begins with understanding your organization, not adapting you to a predefined program.",
      icon: <User className="w-5 h-5 text-[#0284c7]" />,
      image: "/media__1785045152450.png"
    },
    {
      badge: "RESEARCH-BACKED",
      title: "Evidence before intervention",
      description: "We diagnose before we design, using proven assessments and data to build targeted capability solutions.",
      icon: <Search className="w-5 h-5 text-[#0284c7]" />,
      image: "/media__1785045321185.png"
    },
    {
      badge: "TECHNOLOGY-ENABLED",
      title: "Capability reinforced by technology",
      description: "Our consulting is strengthened by digital platforms that sustain learning and track progress long after implementation.",
      icon: <Cpu className="w-5 h-5 text-[#0284c7]" />,
      image: "/cta_3d_cube_stack_1785046334407.png"
    },
    {
      badge: "OUTCOME-FOCUSED",
      title: "Measured by business performance",
      description: "Success is not measured by attendance. It is measured by improved leadership, stronger teams, and better organizational outcomes.",
      icon: <Target className="w-5 h-5 text-[#0284c7]" />,
      image: "/cta_3d_barchart_1785046320601.png"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="why-mkraft">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="differentiators-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#differentiators-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase mb-1">
            DIFFERENTIATORS
          </p>

          <div className="w-10 h-1 bg-[#0284c7] rounded-full mx-auto my-3" />

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight mb-4">
            Why <span className="text-[#0284c7]">MKraft</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto">
            We are not a catalogue of courses. We are an enterprise capability partner.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-7 shadow-lg shadow-sky-100/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between text-left group overflow-hidden"
            >
              <div>
                {/* Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Sub-tag Badge */}
                <span className="text-[10px] font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block mb-2 font-poppins">
                  {card.badge}
                </span>

                <h3 className="font-poppins font-extrabold text-xl text-[#01182F] mb-3 leading-snug tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                <button
                  onClick={() => navigate("/assessment")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group mb-6"
                >
                  <span>Diagnose</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom Card Image Container */}
              <div className="w-full h-32 rounded-2xl bg-gradient-to-b from-sky-50/60 to-sky-100/40 border border-sky-100 overflow-hidden relative flex items-center justify-center p-2 mt-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
