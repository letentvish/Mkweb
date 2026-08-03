import React from "react";
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, Users } from "lucide-react";

const SuccessStories = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
      value: "3.4x",
      label: "Average Revenue Growth",
      description: "Achieved across enterprise advisory clients within 18 months of operating model deployment."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      value: "65%",
      label: "Reduction in Handoff Friction",
      description: "Measured across cross-departmental workflows following unified data core integration."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      value: "99.8%",
      label: "Execution Compliance",
      description: "Sustained accuracy across automated financial, operational, and HR decision loops."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      value: "100+",
      label: "Enterprise Restructures",
      description: "Successful engagements delivered across technology, healthcare, and financial sectors."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#101328] text-white relative overflow-hidden border-b border-indigo-950/80">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
            <span>MEASURABLE IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight leading-[1.12]">
            Proven results across <br />
            <span className="text-indigo-400">scale and complexity</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Our consulting methodology is grounded in empirical outcomes, quantifiable efficiency gains, and long-term enterprise value.
          </p>
        </div>

        {/* 4 Metric Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <div>
                <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 inline-block mb-6">
                  {m.icon}
                </div>

                <p className="font-poppins font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                  {m.value}
                </p>

                <h3 className="font-poppins font-bold text-base text-indigo-200 mb-2">
                  {m.label}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;