import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConsultingExcellence = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: <Target className="w-6 h-6 text-[#0284c7]" />,
      title: "Deep Diagnostics & Alignment",
      description: "Rigorous organizational analysis revealing root cause bottlenecks, disconnected data, and untapped strategic opportunities.",
      points: ["Multi-departmental data audit", "Leadership vision alignment", "Execution capability mapping"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0284c7]" />,
      title: "Agile Operating Models",
      description: "Designing streamlined, event-driven workflows that eliminate translation layers between executive decision making and field execution.",
      points: ["Cross-functional workflow design", "KPI & milestone telemetry", "Change management frameworks"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0284c7]" />,
      title: "Measurable Enterprise Impact",
      description: "Delivering sustainable performance breakthroughs backed by robust metrics, clear accountability, and continuous optimization.",
      points: ["ROI & unit economics tracking", "Process automation handoffs", "Long-term governance structure"]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>CONSULTING EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Structured transformation for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              high-growth enterprises
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We don't just deliver advice in deck format. We build operational blueprints that integrate seamlessly into your day-to-day business.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-sky-100 flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Approach</span>
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

export default ConsultingExcellence;