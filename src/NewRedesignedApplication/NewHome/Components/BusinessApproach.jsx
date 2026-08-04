import React from "react";
import { motion } from "framer-motion";
import { Target, UserCheck, TrendingUp } from "lucide-react";

export default function BusinessApproach() {
  const steps = [
    {
      title: "Acquire",
      description: "We diagnose your reality before prescribing a single solution.",
      icon: <Target className="w-7 h-7 text-[#0284c7]" />,
      bg: "bg-sky-50",
      glowColor: "rgba(2, 132, 199, 0.4)",
    },
    {
      title: "Retain",
      description: "We embed capability that stays long after we leave.",
      icon: <UserCheck className="w-7 h-7 text-[#0284c7]" />,
      bg: "bg-sky-50",
      glowColor: "rgba(2, 132, 199, 0.4)",
    },
    {
      title: "Multiply",
      description: "We scale intelligence through AI-native platforms and data.",
      icon: <TrendingUp className="w-7 h-7 text-[#0284c7]" />,
      bg: "bg-sky-50",
      glowColor: "rgba(2, 132, 199, 0.4)",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>OUR APPROACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Our Business Approach
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A structured, 3-stage methodology engineered to diagnose reality, embed sustainable capability, and scale enterprise intelligence.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Timeline Track */}
          <div className="lg:col-span-6 relative pl-12 md:pl-16 space-y-12">
            
            {/* Background Vertical Timeline Line */}
            <div className="absolute left-[20px] md:left-[24px] top-6 bottom-6 w-[2.5px] bg-slate-200 -translate-x-1/2 overflow-hidden rounded-full">
              {/* Traveling Light Pulse */}
              <motion.div
                className="w-full h-16 bg-gradient-to-b from-[#0284c7] via-indigo-500 to-[#0284c7] rounded-full shadow-[0_0_12px_#0284c7]"
                animate={{
                  top: ["-20%", "100%"]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ position: "absolute", left: 0 }}
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6 group"
              >
                {/* Node Dot Marker */}
                <div className="absolute left-[-28px] md:left-[-40px] top-7 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#01182F] ring-4 ring-[#F8FAFC] shadow-md flex items-center justify-center">
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-[#0284c7]"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 2
                      }}
                    />
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="bg-white border border-indigo-200/90 rounded-3xl p-6 sm:p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 w-full text-left">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-[#0284c7] tracking-widest uppercase font-poppins block">
                        STAGE 0{index + 1}
                      </span>
                      <h3 className="text-xl font-poppins font-extrabold text-slate-900 tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Right Column: Isometric Graphics Banner */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-indigo-100">
              <img 
                src="/approach_isometric.png" 
                alt="Business Approach Methodology" 
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
