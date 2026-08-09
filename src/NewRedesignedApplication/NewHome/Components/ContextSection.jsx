import React from "react";
import { motion } from "framer-motion";
import { User, BarChart3, PieChart, Maximize2, Search, Puzzle, TrendingUp } from "lucide-react";

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
      icon: <BarChart3 className="w-5 h-5 text-teal-400" />,
      accentColor: "border-teal-500/30",
    },
    {
      title: "Technology as Enabler",
      description: "Advisory and AI-powered modular solutions, working as one system of change.",
      icon: <PieChart className="w-5 h-5 text-amber-400" />,
      accentColor: "border-amber-500/30",
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
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      accentColor: "border-cyan-500/30",
    },
    {
      title: "Integrated Solutions",
      description: "Ecosystem for unified real data and insights",
      icon: <Puzzle className="w-5 h-5 text-pink-400" />,
      accentColor: "border-pink-500/30",
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#07091c] text-white overflow-hidden border-b border-slate-800/80" id="context-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/60 mb-5">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[11px] font-bold tracking-widest text-teal-300 uppercase font-poppins">OUR IMPACT</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins text-white tracking-tight">
            Crafted to <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Your Context</span>
          </h2>
        </div>

        {/* Infographic Main Layout: 3 Columns */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Solid SVG Connecting Flow Lines Overlay */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
              
              {/* Left 3 Card Connecting Lines */}
              <path d="M 330 80 L 410 80 L 450 175" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 250 L 435 250" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 420 L 410 420 L 450 325" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.7" />

              {/* Left End Node Dots */}
              <circle cx="330" cy="80" r="3.5" fill="#6366f1" />
              <circle cx="450" cy="175" r="3.5" fill="#6366f1" />

              <circle cx="330" cy="250" r="3.5" fill="#14b8a6" />
              <circle cx="435" cy="250" r="3.5" fill="#14b8a6" />

              <circle cx="330" cy="420" r="3.5" fill="#f59e0b" />
              <circle cx="450" cy="325" r="3.5" fill="#f59e0b" />

              {/* Right 3 Card Connecting Lines */}
              <path d="M 670 80 L 590 80 L 550 175" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 250 L 565 250" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 420 L 590 420 L 550 325" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.7" />

              {/* Right End Node Dots */}
              <circle cx="670" cy="80" r="3.5" fill="#a855f7" />
              <circle cx="550" cy="175" r="3.5" fill="#a855f7" />

              <circle cx="670" cy="250" r="3.5" fill="#06b6d4" />
              <circle cx="565" cy="250" r="3.5" fill="#06b6d4" />

              <circle cx="670" cy="420" r="3.5" fill="#ec4899" />
              <circle cx="550" cy="325" r="3.5" fill="#ec4899" />
            </svg>
          </div>

          {/* Left Column: 3 Cards */}
          <div className="lg:col-span-4 space-y-5 z-20">
            {leftCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-[#0f1333]/90 border border-slate-700/60 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-slate-500/80 shadow-lg ${card.accentColor}`}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Clean Crisp Medallion Hub with Floating Animation */}
          <div className="lg:col-span-4 flex justify-center z-30 my-8 lg:my-0">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center p-3"
            >
              {/* Concentric Clean Border Rings */}
              <div className="absolute inset-2 rounded-full border-2 border-indigo-500/30" />
              <div className="absolute inset-5 rounded-full border border-purple-500/20" />

              {/* Inner White Medallion Core */}
              <div className="relative z-10 w-full h-full rounded-full bg-white text-[#0b1426] shadow-xl flex flex-col items-center justify-center text-center p-6 border-4 border-slate-200">
                
                {/* Upward Growth Arrow Icon (Moved Up) */}
                <div className="-mt-3 mb-4 text-[#6366f1] flex items-center justify-center p-3 rounded-full bg-indigo-50/80 shadow-sm">
                  <TrendingUp className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="flex flex-col items-center justify-center space-y-1">
                  <span className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-none font-poppins">
                    MULTIPLY
                  </span>
                  
                  <span className="text-[#0b1426] text-sm md:text-base font-extrabold tracking-widest uppercase font-poppins">
                    PERFORMANCE
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-4 space-y-5 z-20">
            {rightCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-[#0f1333]/90 border border-slate-700/60 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:border-slate-500/80 shadow-lg ${card.accentColor}`}
              >
                <div>
                  <h3 className="font-poppins font-bold text-base text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="shrink-0 w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                  {card.icon}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

