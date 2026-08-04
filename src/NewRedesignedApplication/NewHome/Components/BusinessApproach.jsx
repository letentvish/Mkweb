import React from "react";
import { motion } from "framer-motion";
import { Target, UserCheck, TrendingUp } from "lucide-react";

export default function BusinessApproach() {
  const steps = [
    {
      title: "Acquire",
      description: "We diagnose your reality before prescribing a single solution.",
      icon: <Target className="w-8 h-8 text-[#6366f1]" />,
      bg: "bg-[#f0f1ff]",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
    {
      title: "Retain",
      description: "We embed capability that stays long after we leave.",
      icon: <UserCheck className="w-8 h-8 text-[#10b981]" />,
      bg: "bg-[#effcf6]",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      title: "Multiply",
      description: "We scale intelligence through AI-native platforms and data.",
      icon: <TrendingUp className="w-8 h-8 text-[#4f46e5]" />,
      bg: "bg-[#f3f4ff]",
      glowColor: "rgba(79, 70, 229, 0.4)",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] border-b border-outline-variant/60">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="label-md mb-2 text-[#6366f1]">OUR APPROACH</p>
          <h2 className="headline-lg text-[#0b1c30] mb-3 font-poppins font-bold">
            Our Business Approach
          </h2>
          <p className="body-lg text-[#45464d] leading-relaxed">
            A structured, 3-stage methodology engineered to diagnose reality, embed sustainable capability, and scale enterprise intelligence.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Timeline Track */}
          <div className="lg:col-span-6 relative pl-12 md:pl-16 space-y-12">
            
            {/* Background Vertical Timeline Line (Centering Line) */}
            <div className="absolute left-[20px] md:left-[24px] top-6 bottom-6 w-[2.5px] bg-slate-300 -translate-x-1/2 overflow-hidden rounded-full">
              {/* Traveling Glowing Light Blob */}
              <motion.div
                className="w-full h-16 bg-gradient-to-b from-[#6366f1] via-[#10b981] to-[#4f46e5] rounded-full shadow-[0_0_12px_#6366f1]"
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
                {/* Node Dot Marker (100% Dead-Centered on the Line) */}
                <div className="absolute left-[-28px] md:left-[-40px] top-7 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  {/* Base Outer Ring */}
                  <div className="w-4 h-4 rounded-full bg-[#0b1c30] ring-4 ring-[#f8f9ff] shadow-md flex items-center justify-center">
                    {/* Active Glowing Trigger Light Pulse */}
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-teal-400"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 1, 0.3],
                        boxShadow: [
                          "0 0 0px rgba(45, 212, 191, 0)",
                          "0 0 14px rgba(45, 212, 191, 0.9)",
                          "0 0 0px rgba(45, 212, 191, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 2
                      }}
                    />
                  </div>
                </div>

                {/* Stage Icon Box (Triggered Glow Animation) */}
                <motion.div 
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 1px 3px rgba(0,0,0,0.05)",
                      `0 0 20px ${step.glowColor}`,
                      "0 1px 3px rgba(0,0,0,0.05)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 2
                  }}
                  className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl ${step.bg} border border-slate-200/90 shadow-sm transition-all duration-300`}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 2 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Stage Content */}
                <div className="pt-1">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#0b1c30] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="body-lg text-[#45464d] leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Isometric Graphic Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl bg-white rounded-[32px] border border-slate-200/70 shadow-xl p-4 md:p-6 overflow-hidden flex items-center justify-center"
            >
              <img 
                src="/approach_isometric.png" 
                alt="3D Business Approach Illustration" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-md hover:scale-102 transition-transform duration-300"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}



