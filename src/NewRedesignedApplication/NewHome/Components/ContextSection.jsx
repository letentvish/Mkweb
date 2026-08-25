import React from "react";
import { motion } from "framer-motion";
import { User, BarChart3, PieChart, Maximize2, Search, Puzzle, Target, TrendingUp } from "lucide-react";
import "./ContextSection.css";

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
    <section className="context-section-root" id="context-section">
      
      <div className="context-wrapper">
        
        {/* Section Header */}
        <div className="context-header">
          <div className="context-badge">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span className="context-badge-text">OUR IMPACT</span>
          </div>

          <h2 className="context-main-heading">
            Crafted to <span className="context-gradient-text">Your Context</span>
          </h2>
        </div>

        {/* Infographic Main Layout */}
        <div className="context-infographic-layout">
          
          {/* SVG Connecting Flow Lines Overlay */}
          <div className="context-svg-flow">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
              <path d="M 330 80 L 410 80 L 450 175" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 250 L 435 250" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 330 420 L 410 420 L 450 325" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.7" />

              <circle cx="330" cy="80" r="3.5" fill="#6366f1" />
              <circle cx="450" cy="175" r="3.5" fill="#6366f1" />
              <circle cx="330" cy="250" r="3.5" fill="#14b8a6" />
              <circle cx="435" cy="250" r="3.5" fill="#14b8a6" />
              <circle cx="330" cy="420" r="3.5" fill="#f59e0b" />
              <circle cx="450" cy="325" r="3.5" fill="#f59e0b" />

              <path d="M 670 80 L 590 80 L 550 175" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 250 L 565 250" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 670 420 L 590 420 L 550 325" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.7" />

              <circle cx="670" cy="80" r="3.5" fill="#a855f7" />
              <circle cx="550" cy="175" r="3.5" fill="#a855f7" />
              <circle cx="670" cy="250" r="3.5" fill="#06b6d4" />
              <circle cx="565" cy="250" r="3.5" fill="#06b6d4" />
              <circle cx="670" cy="420" r="3.5" fill="#ec4899" />
              <circle cx="550" cy="325" r="3.5" fill="#ec4899" />
            </svg>
          </div>

          {/* Left Column: 3 Cards */}
          <div className="context-col-cards">
            {leftCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`context-card-box ${card.accentColor}`}
              >
                <div className="context-icon-square">
                  {card.icon}
                </div>
                <div>
                  <h3 className="context-card-title">{card.title}</h3>
                  <p className="context-card-desc">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Medallion Hub */}
          <div className="context-center-col">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="context-medallion-wrap"
            >
              <div className="context-indigo-ring" />
              <div className="context-purple-ring" />

              <div className="context-white-core">
                <div className="context-arrow-icon">
                  <TrendingUp className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="flex flex-col items-center justify-center space-y-1">
                  <span className="context-medallion-multiply">
                    MULTIPLY
                  </span>
                  
                  <span className="context-medallion-sub">
                    PERFORMANCE
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="context-col-cards">
            {rightCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`context-card-box ${card.accentColor}`}
              >
                <div>
                  <h3 className="context-card-title">{card.title}</h3>
                  <p className="context-card-desc">
                    {card.description}
                  </p>
                </div>
                <div className="context-icon-square">
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

