import React from "react";
import { motion } from "framer-motion";
import { User, BarChart3, PieChart, Maximize2, Search, Puzzle, Target, TrendingUp } from "lucide-react";

export default function ContextSection() {
  const leftCards = [
    {
      title: "Bespoke by default",
      description: "No templated playbooks every engagement is designed for your reality.",
      icon: <User className="w-5 h-5 text-indigo-400" />,
      accentColor: "border-indigo-500/30",
    },
    {
      title: "Capability that stays",
      description: "We build the muscle inside your teams, not a dependency on ours.",
      icon: <BarChart3 className="w-5 h-5 text-sky-400" />,
      accentColor: "border-sky-500/30",
    },
    {
      title: "Technology as Enabler",
      description: "Advisory and AI-powered modular solutions, working as one system of change.",
      icon: <PieChart className="w-5 h-5 text-indigo-400" />,
      accentColor: "border-indigo-500/30",
    },
  ];

  const rightCards = [
    {
      title: "Scalability Solved",
      description: "Deploy solutions that grow with your organization seamlessly.",
      icon: <Maximize2 className="w-5 h-5 text-purple-400" />,
      accentColor: "border-purple-500/30",
    },
    {
      title: "Business-first Approach",
      description: "Strategy first. Solutions second. Every engagement tied to a business outcome.",
      icon: <Search className="w-5 h-5 text-sky-400" />,
      accentColor: "border-sky-500/30",
    },
    {
      title: "Integrated Solutions",
      description: "Ecosystem for unified real data and insights",
      icon: <Puzzle className="w-5 h-5 text-indigo-400" />,
      accentColor: "border-indigo-500/30",
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#101328] text-white overflow-hidden border-b border-indigo-950/80" id="context-section">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
            <span>OUR IMPACT</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-white tracking-tight">
            Crafted to <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Your Context</span>
          </h2>
        </div>

        {/* Infographic Main Layout: 3 Columns */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* SVG Connecting Lines Overlay */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
              <path d="M 330 80 L 410 80 L 450 175" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 250 L 435 250" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 420 L 410 420 L 450 325" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.7" />

              <path d="M 670 80 L 590 80 L 550 175" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 250 L 565 250" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 420 L 590 420 L 550 325" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
            </svg>
          </div>

          {/* Left Column: 3 Feature Cards */}
          <div className="lg:col-span-4 space-y-6 z-20">
            {leftCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-white/5 backdrop-blur-xl border ${card.accentColor} rounded-3xl p-6 shadow-xl hover:border-indigo-400/60 transition-all duration-300 text-left`}
              >
                <div className="p-2.5 rounded-2xl bg-white/10 text-indigo-400 inline-block mb-3">
                  {card.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-1.5">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Middle Column: Central Core Hub */}
          <div className="lg:col-span-4 flex items-center justify-center my-6 lg:my-0 z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-56 h-56 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-600/30 to-purple-600/20 border-2 border-indigo-500/40 p-3 shadow-2xl flex items-center justify-center relative"
            >
              <div className="w-full h-full rounded-full bg-[#070c1e] border border-white/10 flex flex-col items-center justify-center p-4 text-center shadow-inner">
                <div className="p-3 rounded-full bg-[#0284c7]/20 text-[#0284c7] mb-2 shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="font-poppins font-extrabold text-sm sm:text-base text-white tracking-tight">MultipliersKraft</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Ecosystem Core</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-4 space-y-6 z-20">
            {rightCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-white/5 backdrop-blur-xl border ${card.accentColor} rounded-3xl p-6 shadow-xl hover:border-indigo-400/60 transition-all duration-300 text-left`}
              >
                <div className="p-2.5 rounded-2xl bg-white/10 text-[#0284c7] inline-block mb-3">
                  {card.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-white mb-1.5">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
