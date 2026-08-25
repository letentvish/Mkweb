import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, LineChart, Box, UserCheck } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-[88vh] lg:min-h-screen bg-[#f8f9ff] flex items-center overflow-hidden py-12 lg:py-0 border-b border-outline-variant/60">
      
      {/* Background Layer 1: Dot Matrix Grid Top Left */}
      <div className="absolute top-10 left-10 opacity-25 hidden md:block z-0 pointer-events-none">
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
      <div 
        className="absolute right-0 top-0 w-full lg:w-[50%] h-full bg-[#181636] z-0 pointer-events-none hidden lg:block"
        style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto w-full">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-4 max-w-2xl">
          
          {/* Main Headline (3 Lines Strictly Non-Wrapping) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-poppins font-extrabold text-[#0b1c30] leading-[1.12] tracking-tight">
            <span className="text-[#0369a1] whitespace-nowrap block">Accelerate growth</span>
            <span className="whitespace-nowrap block">through a unified</span>
            <span className="relative inline-block whitespace-nowrap block">
              ecosystem.
              {/* Curvy underline svg */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0369a1]" viewBox="0 0 160 12" fill="none">
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
          <p className="body-lg text-[#45464d] max-w-md pt-1">
            Built with purpose. Driven by integrated solutions to boost productivity and deliver tangible business advantages.
          </p>

          {/* Buttons (Moved Up) */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={() => navigate("/about")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-8 py-3.5 rounded-full font-bold inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-slate-50 text-[#0b1c30] border border-slate-300 px-7 py-3.5 rounded-full font-bold transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right Column: Woman Figure Image & Animated UI Cards */}
        <div className="lg:col-span-6 relative flex items-end justify-center h-full min-h-[540px] md:min-h-[620px] lg:min-h-[680px]">
          
          {/* Main Central Woman Image (Bottom Aligned & Large Size) */}
          <div className="relative z-20 w-full max-w-lg mx-auto flex justify-center items-end h-full">
            <img 
              src={process.env.PUBLIC_URL + "/girl hero.png"} 
              alt="Professional holding tablet" 
              className="max-h-[620px] md:max-h-[700px] lg:max-h-[760px] w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: Business Growth (Top Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" }
            }}
            className="absolute top-6 left-0 md:-left-6 z-30 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 w-56"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-semibold text-slate-500">Business Growth</p>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+14.2%</span>
            </div>
            <div className="h-10 w-full flex items-end">
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
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold font-poppins text-[#0369a1]">78%</span>
              <p className="text-[11px] font-medium text-slate-400">Productivity Increase</p>
            </div>
          </motion.div>

          {/* Floating Card 2: 360° Unified Insights (Middle Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute top-36 left-4 md:left-2 z-30 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 w-48 text-center"
          >
            <div className="relative w-20 h-20 mx-auto mb-2">
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
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-base font-bold font-poppins text-[#0b1c30]">360°</span>
              </div>
            </div>
            <p className="text-xs font-bold text-[#0b1c30]">Unified Insights</p>
          </motion.div>

          {/* Floating Card 3: Stronger Teams (Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.4 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
            }}
            className="absolute bottom-12 left-8 md:left-12 z-30 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-100 w-52"
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
            className="absolute top-10 right-16 z-40"
          >
            <div className="w-11 h-11 rounded-full bg-[#181636]/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <UserCheck className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut", delay: 0.7 }}
            className="absolute right-4 top-1/2 -translate-y-16 z-40"
          >
            <div className="w-11 h-11 rounded-full bg-teal-600/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <LineChart className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
            className="absolute right-12 bottom-32 z-40"
          >
            <div className="w-11 h-11 rounded-full bg-sky-700/80 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
              <Box className="w-5 h-5" />
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}




