import React from "react";
import { motion } from "framer-motion";
import { Target, UserCheck, TrendingUp } from "lucide-react";
import "./BusinessApproach.css";

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
    <section className="approach-section-root">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="approach-header-box">
          <p className="approach-label">OUR APPROACH</p>
          <h2 className="approach-title">
            Our Business Approach
          </h2>
          <p className="approach-subtitle">
            A structured, 3-stage methodology engineered to diagnose reality, embed sustainable capability, and scale enterprise intelligence.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="approach-layout-grid">
          
          {/* Left Column: Timeline Track */}
          <div className="approach-timeline-col">
            
            {/* Background Vertical Timeline Line */}
            <div className="approach-timeline-line">
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
                className="approach-step-item"
              >
                {/* Node Dot Marker */}
                <div className="approach-node-dot">
                  <div className="approach-node-ring">
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

                {/* Stage Icon Box */}
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
                  className={`approach-icon-box ${step.bg}`}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 2 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Stage Content */}
                <div style={{ paddingTop: "0.25rem" }}>
                  <h3 className="approach-step-title">
                    {step.title}
                  </h3>
                  <p className="approach-step-desc">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Isometric Graphic Card */}
          <div className="approach-graphic-col">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="approach-graphic-card"
            >
              <img 
                src="/approach_isometric.png" 
                alt="3D Business Approach Illustration" 
                className="approach-isometric-img"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}



