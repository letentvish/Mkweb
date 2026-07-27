import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Database, 
  GitMerge, 
  PieChart, 
  Boxes, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  Cpu
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../Components/NewNavbar";
import NewFooter from "../Components/NewFooter";

export default function PalbonPage() {
  const navigate = useNavigate();

  const brandLogos = [
    { name: "BYJU'S", font: "font-black tracking-tighter text-slate-800" },
    { name: "Reliance", font: "font-serif font-bold text-slate-800 tracking-tight" },
    { name: "wipro", font: "font-bold text-slate-700 tracking-wide lowercase" },
    { name: "Deloitte.", font: "font-sans font-extrabold text-slate-900 tracking-tight" },
    { name: "vedanta", font: "font-semibold text-slate-700 tracking-wider lowercase" },
    { name: "SWIGGY", font: "font-extrabold text-slate-800 tracking-wider uppercase" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden">
      
      {/* Global Navigation Bar */}
      <NewNavbar />

      {/* Main Hero Container */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        
        {/* Subtle Tech Node Vector Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Primary CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>PALBON INTEGRATED SOLUTIONS</span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Build your <br />
                <span className="text-[#0284c7]">enterprise operating system</span>
              </h1>

              {/* Body Subtext */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Unify your people, processes, data, and technology on one intelligent platform. Designed for the way modern enterprises operate.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Book Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7]">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Overview</span>
                </button>
              </div>

              {/* Social Proof Brand Bar */}
              <div className="pt-8 w-full border-t border-slate-200/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">
                  Trusted by forward-thinking organizations
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {brandLogos.map((brand, idx) => (
                    <span key={idx} className={`text-base md:text-lg opacity-80 hover:opacity-100 transition-opacity ${brand.font}`}>
                      {brand.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Central Executive & Connected Floating Telemetry Nodes */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[580px] lg:min-h-[640px]">
              
              {/* SVG Connected Flow Lines */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
                  {/* Line to Top Left (PEOPLE) */}
                  <path d="M 300 300 L 220 140" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="220" cy="140" r="4" fill="#0284c7" />

                  {/* Line to Bottom Left (DATA) */}
                  <path d="M 300 300 L 180 400" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="180" cy="400" r="4" fill="#0284c7" />

                  {/* Line to Top Right (PROCESSES) */}
                  <path d="M 300 300 L 450 180" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="450" cy="180" r="4" fill="#0284c7" />

                  {/* Line to Bottom Right (OUTCOMES) */}
                  <path d="M 300 300 L 420 440" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="420" cy="440" r="4" fill="#0284c7" />
                </svg>
              </div>

              {/* Main Executive Photo */}
              <div className="relative z-20 w-full max-w-md mx-auto flex justify-center items-end">
                <img 
                  src="/palbon_hero_executive.png" 
                  alt="PALBON Executive holding digital tablet" 
                  className="max-h-[520px] lg:max-h-[580px] w-auto object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Central Hub Medallion: PALBON Unified Intelligence */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl border border-sky-200 p-5 rounded-2xl shadow-2xl text-center w-48 border-2 border-sky-400/40"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                  P
                </div>
                <h3 className="font-poppins font-black text-base text-slate-900 tracking-tight">PALBON</h3>
                <p className="text-[10px] font-bold text-[#0284c7] uppercase tracking-widest mt-0.5">Unified Intelligence</p>
              </motion.div>

              {/* Floating Glass Card 1: PEOPLE (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-4 left-0 sm:left-4 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 w-44"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-sky-100 text-[#0284c7]">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">PEOPLE</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mb-2">Talent & Culture</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-6 w-6 rounded-full bg-sky-400 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">AS</div>
                    <div className="inline-block h-6 w-6 rounded-full bg-indigo-500 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">PK</div>
                    <div className="inline-block h-6 w-6 rounded-full bg-teal-500 ring-2 ring-white text-[9px] font-bold text-white flex items-center justify-center">VR</div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">+2.4k</span>
                </div>
                <p className="text-[9px] text-slate-400 mt-1 font-medium">Active Users</p>
              </motion.div>

              {/* Floating Glass Card 2: DATA (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-2 sm:left-6 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 w-48"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">DATA</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mb-2">Unified & Secure</p>
                {/* Mini Bar Chart Graphic */}
                <div className="h-8 w-full flex items-end gap-1.5 mb-1.5">
                  <div className="flex-1 bg-sky-200 h-[40%] rounded-t" />
                  <div className="flex-1 bg-sky-400 h-[70%] rounded-t" />
                  <div className="flex-1 bg-sky-300 h-[50%] rounded-t" />
                  <div className="flex-1 bg-[#0284c7] h-[90%] rounded-t" />
                  <div className="flex-1 bg-indigo-500 h-[65%] rounded-t" />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                  <span>98.6%</span>
                  <span className="text-slate-400">Data Accuracy</span>
                </div>
              </motion.div>

              {/* Floating Glass Card 3: PROCESSES (Top Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 right-0 sm:right-4 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 w-48"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                    <GitMerge className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">PROCESSES</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mb-2">Workflows</p>
                {/* Node Diagram Preview */}
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 mb-2 flex items-center justify-between">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="h-0.5 flex-1 bg-slate-300 mx-1" />
                  <div className="w-3 h-3 rounded bg-sky-500" />
                  <div className="h-0.5 flex-1 bg-slate-300 mx-1" />
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-slate-800">128</span>
                  <span className="text-slate-400">Automated Workflows</span>
                </div>
              </motion.div>

              {/* Floating Glass Card 4: OUTCOMES (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 right-2 sm:right-6 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 w-48 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-600">
                    <PieChart className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">OUTCOMES</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mb-2">Business Impact</p>
                {/* Circular Gauge Graphic */}
                <div className="relative w-14 h-14 mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="none" r="16" stroke="#E2E8F0" strokeWidth="4" />
                    <circle cx="18" cy="18" fill="none" r="16" stroke="#0284c7" strokeWidth="4" strokeDasharray="82, 100" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-xs text-slate-900">82%</span>
                </div>
                <p className="text-[10px] font-medium text-slate-500">Operational Efficiency</p>
              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom Feature Bar: 4 Pillars */}
      <section className="py-10 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Modular by Design</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Pick what you need. Add when you're ready.</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Enterprise Grade</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Secure. Scalable. Always available.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">AI-Powered</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Intelligence that learns and adapts.</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Future-Ready</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Built to evolve with your business.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Footer */}
      <NewFooter />

    </div>
  );
}
