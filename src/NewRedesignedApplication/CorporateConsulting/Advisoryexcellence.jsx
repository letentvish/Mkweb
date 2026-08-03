import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Cpu, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Advisory = () => {
  const navigate = useNavigate();

  const advisoryPillars = [
    {
      icon: <Compass className="w-6 h-6 text-[#0284c7]" />,
      badge: "EXECUTIVE STRATEGY",
      title: "C-Suite Strategic Advisory",
      description: "Direct counsel for executive leaders navigating market pivots, digital restructuring, and M&A integration."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0284c7]" />,
      badge: "TECHNOLOGY ARCHITECTURE",
      title: "Enterprise System Blueprinting",
      description: "Auditing technical debt and defining unified data core architecture that scales across business divisions."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0284c7]" />,
      badge: "ORGANIZATIONAL DESIGN",
      title: "Workforce & Talent Restructuring",
      description: "Aligning incentive systems, team structures, and cross-departmental accountability with long-term strategy."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>ADVISORY EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Strategic clarity at every <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              stage of maturity
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Whether preparing for market expansion or streamlining complex operations, our advisory practice brings clarity to high-stakes decisions.
          </p>
        </div>

        {/* Advisory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisoryPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-indigo-200/90 rounded-3xl p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>

                <span className="text-[11px] font-extrabold text-[#0284c7] tracking-widest uppercase font-poppins block mb-2">
                  {pillar.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Book Advisory Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Advisory;
