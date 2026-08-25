import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, LineChart, Box, UserCheck } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <main className="hero-section-container">
      
      {/* Background Layer 1: Dot Matrix Grid Top Left */}
      <div className="hero-dot-matrix">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="#0b1c30">
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="35" cy="10" r="2.5" />
          <circle cx="60" cy="10" r="2.5" />
          <circle cx="10" cy="35" r="2.5" />
          <circle cx="35" cy="35" r="2.5" />
          <circle cx="60" cy="35" r="2.5" />
          <circle cx="10" cy="60" r="2.5" />
          <circle cx="35" cy="60" r="2.5" />
          <circle cx="60" cy="60" r="2.5" />
        </svg>
      </div>

      {/* Background Layer 2: Dark Navy Steep Diagonal Cut on Right */}
      <div className="hero-diagonal-bg" />

      <div className="section-container hero-grid">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-left-col">
          
          {/* Main Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline-blue">Accelerate growth</span>
            <span className="hero-headline-block">through a unified</span>
            <span className="hero-headline-relative">
              ecosystem.
              {/* Curvy underline svg */}
              <svg className="hero-curvy-underline" viewBox="0 0 160 12" fill="none">
                <motion.path 
                  d="M2 6 Q 40 1 80 6 T 158 6" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            Built with purpose. Driven by integrated solutions to boost productivity and deliver tangible business advantages.
          </p>

          {/* Buttons */}
          <div className="hero-cta-wrapper">
            <button
              onClick={() => navigate("/about")}
              className="hero-btn-primary"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="hero-btn-secondary"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right Column: Woman Figure Image & Animated UI Cards */}
        <div className="hero-right-col">
          
          {/* Main Central Woman Image */}
          <div className="hero-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + "/girl hero.png"} 
              alt="Professional holding tablet" 
              className="hero-woman-img"
            />
          </div>

          {/* Floating Card 1: Business Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" }
            }}
            className="hero-card-1"
          >
            <div className="hero-card-header">
              <p className="hero-card-title">Business Growth</p>
              <span className="hero-card-badge">+14.2%</span>
            </div>
            <div className="hero-card-chart">
              <svg className="w-full h-full text-[#0369a1]" viewBox="0 0 100 40">
                <motion.path 
                  d="M0 35 L 25 28 L 50 32 L 75 14 L 100 6" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeWidth="3.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <div className="hero-card-stats">
              <span className="hero-card-num">78%</span>
              <p className="hero-card-sub">Productivity Increase</p>
            </div>
          </motion.div>

          {/* Floating Card 2: 360° Unified Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }
            }}
            className="hero-card-2"
          >
            <div className="hero-circle-wrap">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="none" r="16" stroke="#e2e8f0" strokeWidth="4" />
                <motion.circle 
                  cx="18" 
                  cy="18" 
                  fill="none" 
                  r="16" 
                  stroke="#0369a1" 
                  strokeDasharray="100, 100"
                  strokeLinecap="round" 
                  strokeWidth="4"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 25 }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                />
              </svg>
              <div className="hero-circle-center">
                <span>360°</span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#0b1c30]">Unified Insights</p>
          </motion.div>

          {/* Floating Card 3: Stronger Teams */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.4 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
            }}
            className="hero-card-3"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shadow-sm">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-[#0b1c30]">Stronger Teams</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "82%" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
                  className="h-full bg-teal-500 rounded-full"
                />
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "64%" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
                  className="h-full bg-[#0369a1] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Glassmorphic Icon Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="hero-badge-1"
          >
            <div className="hero-glass-icon">
              <UserCheck className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut", delay: 0.7 }}
            className="hero-badge-2"
          >
            <div className="hero-glass-icon hero-glass-teal">
              <LineChart className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
            className="hero-badge-3"
          >
            <div className="hero-glass-icon hero-glass-sky">
              <Box className="w-5 h-5" />
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}




