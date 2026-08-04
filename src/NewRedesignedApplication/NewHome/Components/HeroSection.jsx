import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, LineChart, Box, UserCheck, Sparkles } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/background.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      {/* Tech Node Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="home-dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#home-dot-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto w-full">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-4 max-w-2xl text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>UNIFIED ENTERPRISE ECOSYSTEM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]">
              Accelerate growth <br />
              through a <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">unified ecosystem</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl font-medium pt-1">
              Built with purpose. Driven by integrated ERP, HRMS, and advisory solutions to boost productivity and deliver tangible business advantages.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => navigate("/about")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
              >
                <span>Contact Sales</span>
              </button>
            </div>

          </div>

          {/* Right Column: Woman Figure Image & Floating Telemetry Cards */}
          <div className="lg:col-span-6 relative flex items-end justify-center h-full min-h-[500px] md:min-h-[580px]">
            
            {/* Main Central Woman Image */}
            <div className="relative z-20 w-full max-w-lg mx-auto flex justify-center items-end h-full">
              <img 
                src="/hero_woman.png" 
                alt="Professional holding tablet" 
                className="max-h-[540px] md:max-h-[600px] lg:max-h-[640px] w-auto object-contain object-bottom drop-shadow-2xl"
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
              className="absolute top-4 left-0 md:-left-4 z-30 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-200/80 w-56 text-left"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-slate-500">Business Growth</p>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">+14.2%</span>
              </div>
              <div className="h-10 w-full flex items-end">
                <svg className="w-full h-full text-[#0284c7]" viewBox="0 0 100 40">
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
                <span className="text-2xl font-bold font-poppins text-[#0284c7]">78%</span>
                <p className="text-[11px] font-medium text-slate-400">Productivity Gain</p>
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
              className="absolute top-36 left-2 md:-left-2 z-30 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-200/80 w-48 text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#e2e8f0" strokeWidth="4" />
                  <motion.circle 
                    cx="18" 
                    cy="18" 
                    fill="none" 
                    r="16" 
                    stroke="#0284c7" 
                    strokeDasharray="100, 100"
                    strokeLinecap="round" 
                    strokeWidth="4"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 25 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold font-poppins text-[#01182F]">360°</span>
                </div>
              </div>
              <p className="text-xs font-bold text-[#01182F]">Unified Insights</p>
            </motion.div>

            {/* Floating Card 3: Stronger Teams (Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.4 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-8 left-6 md:left-8 z-30 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-200/80 w-52 text-left"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#0284c7] shadow-sm">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#01182F]">Stronger Teams</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
                    className="h-full bg-[#0284c7] rounded-full"
                  />
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "64%" }}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
                    className="h-full bg-indigo-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Icon Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-8 right-12 z-40"
            >
              <div className="w-11 h-11 rounded-full bg-[#01182F]/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <UserCheck className="w-5 h-5 text-sky-400" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut", delay: 0.7 }}
              className="absolute right-2 top-1/2 -translate-y-16 z-40"
            >
              <div className="w-11 h-11 rounded-full bg-[#0284c7]/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <LineChart className="w-5 h-5" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
              className="absolute right-10 bottom-28 z-40"
            >
              <div className="w-11 h-11 rounded-full bg-indigo-600/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Box className="w-5 h-5" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
