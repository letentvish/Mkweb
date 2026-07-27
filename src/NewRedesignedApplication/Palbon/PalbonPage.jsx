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
  FileText,
  Clock,
  Puzzle,
  BarChart2,
  AlertTriangle,
  GitFork,
  ShieldAlert,
  Coins,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Settings,
  Shield,
  TrendingUp,
  Activity,
  Layers,
  Cpu
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../Components/NewNavbar";
import NewFooter from "../Components/NewFooter";

export default function PalbonPage() {
  const navigate = useNavigate();
  const [activeModelTab, setActiveModelTab] = useState("workforce");

  const brandLogos = [
    { name: "BYJU'S", font: "font-black tracking-tighter text-slate-800" },
    { name: "Reliance", font: "font-serif font-bold text-slate-800 tracking-tight" },
    { name: "wipro", font: "font-bold text-slate-700 tracking-wide lowercase" },
    { name: "Deloitte.", font: "font-sans font-extrabold text-slate-900 tracking-tight" },
    { name: "vedanta", font: "font-semibold text-slate-700 tracking-wider lowercase" },
    { name: "SWIGGY", font: "font-extrabold text-slate-800 tracking-wider uppercase" },
  ];

  // Friction Cards Row 1 (Slides Left)
  const frictionRow1 = [
    {
      id: "siloed-data",
      title: "Siloed Data",
      icon: <FileText className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "delayed-decisions",
      title: "Delayed Decisions",
      icon: <Clock className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "disconnected-tools",
      title: "Disconnected Tools",
      icon: <Puzzle className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "manual-handoffs",
      title: "Manual Handoffs",
      icon: <BarChart2 className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Friction Cards Row 2 (Slides Right)
  const frictionRow2 = [
    {
      id: "inconsistent-info",
      title: "Inconsistent Information",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "complex-processes",
      title: "Complex Processes",
      icon: <GitFork className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "compliance-risks",
      title: "Compliance Risks",
      icon: <ShieldAlert className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hidden-costs",
      title: "Hidden Costs",
      icon: <Coins className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const loopRow1 = [...frictionRow1, ...frictionRow1, ...frictionRow1, ...frictionRow1];
  const loopRow2 = [...frictionRow2, ...frictionRow2, ...frictionRow2, ...frictionRow2];

  // Model Tab Content Data
  const modelTabData = {
    workforce: {
      category: "AGILITY",
      headline: "Start where the pain is sharpest, expand without disruption",
      body: "You do not need a big bang replacement. Activate the features you need today. Add value modules as you evolve. The system grows with your reality, not against it.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    configuration: {
      category: "CUSTOMIZATION",
      headline: "Tailored workflows designed around your unique operating model",
      body: "Configure logic, approval matrices, and data schemas without custom code. Adapt rules seamlessly as your organization scales across regions and business units.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    reasoning: {
      category: "INTELLIGENCE",
      headline: "Autonomous decision support powered by unified enterprise context",
      body: "AI agents synthesize signals across HR, ERP, and operations to highlight risk, recommend optimizations, and automate repetitive administrative work.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    }
  };

  const currentTabContent = modelTabData[activeModelTab];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden">
      
      {/* Global Navigation Bar */}
      <NewNavbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
        
        {/* Tech Node Vector Background */}
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
                  <path d="M 300 300 L 220 140" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="220" cy="140" r="4" fill="#0284c7" />

                  <path d="M 300 300 L 180 400" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="180" cy="400" r="4" fill="#0284c7" />

                  <path d="M 300 300 L 450 180" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <circle cx="450" cy="180" r="4" fill="#0284c7" />

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

              {/* Floating Glass Card 1: PEOPLE */}
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

              {/* Floating Glass Card 2: DATA */}
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

              {/* Floating Glass Card 3: PROCESSES */}
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

              {/* Floating Glass Card 4: OUTCOMES */}
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

      {/* Bottom Feature Bar */}
      <section className="py-10 bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Modular by Design</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Pick what you need. Add when you're ready.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Enterprise Grade</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Secure. Scalable. Always available.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-2">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">AI-Powered</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Intelligence that learns and adapts.</p>
              </div>
            </div>

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

      {/* SECTION 2: FRICTION (Dual Row Animated Image Marquee) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden relative" id="friction-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col items-start space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366f1] text-xs font-bold tracking-wider uppercase font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
                <span>FRICTION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Your systems do not <br />
                <span className="text-[#6366f1]">speak the same language</span>
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start lg:items-end space-y-6 pt-2">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg text-left">
                Finance closes the books on data HR sent last week. Sales promises what operations cannot see. Every handoff is a small betrayal of the truth. The cost is not just time, it is the slow erosion of good decisions.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/about")}
                  className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition-all duration-200 shadow-sm"
                >
                  Learn
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Dual Infinite Looping Image Marquee Container */}
        <div className="relative w-full space-y-6 my-4">
          <button className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-xl border border-slate-200 items-center justify-center text-slate-700 hover:scale-110 transition-transform">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 shadow-xl border border-slate-200 items-center justify-center text-slate-700 hover:scale-110 transition-transform">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* ROW 1: Slides LEFT */}
          <div className="flex overflow-hidden relative w-full">
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {loopRow1.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  className="relative w-72 h-56 rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30 group shrink-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#2e1065]/70 to-[#3b0764]/40 backdrop-blur-[2px]" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="mx-auto my-auto w-12 h-12 rounded-full bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="font-poppins font-bold text-base text-white text-left tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ROW 2: Slides RIGHT */}
          <div className="flex overflow-hidden relative w-full">
            <motion.div
              animate={{ x: [-1800, 0] }}
              transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {loopRow2.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  className="relative w-72 h-56 rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30 group shrink-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#2e1065]/70 to-[#3b0764]/40 backdrop-blur-[2px]" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="mx-auto my-auto w-12 h-12 rounded-full bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="font-poppins font-bold text-base text-white text-left tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center z-20 relative">
          <button
            onClick={() => {
              const el = document.getElementById("clarity-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-xl shadow-indigo-500/30 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ArrowDown className="w-4 h-4" />
            <span>See Solutions</span>
          </button>
        </div>

      </section>

      {/* SECTION 3: CLARITY ("A single source of truth") */}
      <section className="py-24 lg:py-32 bg-[#101328] text-white relative overflow-hidden border-b border-indigo-950/80" id="clarity-section">
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                <span>CLARITY</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-[1.12]">
                A single source <br />
                <span className="text-indigo-400">of truth</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                PALBON unifies scattered data, your people, your processes, and your tech. It is one ecosystem where detail and depth drive better foresight. No more handoffs, handovers, or guesswork.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/solutions")}
                  className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-indigo-500/30 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Explore</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-white hover:text-indigo-300 font-bold px-4 py-3.5 inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </button>
              </div>

              {/* Bottom Glass Metrics Pill (3 KPIs) */}
              <div className="mt-8 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 grid grid-cols-3 gap-4 text-left shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">25K+</p>
                    <p className="text-[11px] text-slate-400 font-medium">Active Users</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">99.9%</p>
                    <p className="text-[11px] text-slate-400 font-medium">Data Integrity</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">10M+</p>
                    <p className="text-[11px] text-slate-400 font-medium">Records Unified</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Diagram Column: Woman Executive, Glowing 3D P-Cube & 4 Connected Nodes */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] lg:min-h-[580px]">
              
              {/* SVG Glowing Connected Network Lines */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
                  {/* Top Left User Node to P-Cube */}
                  <path d="M 180 120 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="180" cy="120" r="5" fill="#a7f3d0" />

                  {/* Top Right Database Node to P-Cube */}
                  <path d="M 480 120 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="480" cy="120" r="5" fill="#a7f3d0" />

                  {/* Bottom Left Settings Node to P-Cube */}
                  <path d="M 160 400 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="160" cy="400" r="5" fill="#a7f3d0" />

                  {/* Bottom Right Analytics Node to P-Cube */}
                  <path d="M 490 380 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="490" cy="380" r="5" fill="#a7f3d0" />
                </svg>
              </div>

              {/* Smiling Executive Photo */}
              <div className="relative z-20 w-full max-w-sm ml-auto mr-4 flex justify-end items-end">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80" 
                  alt="PALBON Single Source of Truth Executive" 
                  className="max-h-[460px] w-auto object-cover rounded-3xl shadow-2xl filter brightness-95"
                />
              </div>

              {/* Glowing 3D Purple P-Cube Medallion in Center */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute z-30 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 rounded-3xl p-1 shadow-2xl border-2 border-indigo-300/40 flex items-center justify-center shadow-indigo-500/50"
              >
                <div className="w-full h-full rounded-2xl bg-indigo-950/60 backdrop-blur-md flex items-center justify-center">
                  <span className="font-poppins font-black text-5xl text-white drop-shadow-lg">P</span>
                </div>
              </motion.div>

              {/* Node 1: Top Left (PEOPLE) */}
              <div className="absolute top-6 left-8 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-indigo-300" />
              </div>

              {/* Node 2: Top Right (DATABASE) */}
              <div className="absolute top-6 right-8 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-indigo-300" />
              </div>

              {/* Node 3: Bottom Left (SETTINGS/WORKFLOWS) */}
              <div className="absolute bottom-16 left-4 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Settings className="w-6 h-6 text-indigo-300" />
              </div>

              {/* Node 4: Bottom Right (ANALYTICS) */}
              <div className="absolute bottom-20 right-4 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <BarChart2 className="w-6 h-6 text-indigo-300" />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION 4: AI-POWERED ("Built for your model") */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 relative" id="solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366f1] text-xs font-bold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
              <span>AI-POWERED</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight">
              Built for your model
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We do not sell a rigid single-purpose box. We bring a modular system that bends to how you actually operate. You own the configuration, not a vendor's future guesses.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                Learn More
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex justify-center items-center gap-8 mb-12 border-b border-slate-200 pb-4">
            <button
              onClick={() => setActiveModelTab("workforce")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeModelTab === "workforce" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Workforce</span>
              {activeModelTab === "workforce" && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>

            <button
              onClick={() => setActiveModelTab("configuration")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeModelTab === "configuration" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Configuration</span>
              {activeModelTab === "configuration" && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>

            <button
              onClick={() => setActiveModelTab("reasoning")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeModelTab === "reasoning" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Reasoning</span>
              {activeModelTab === "reasoning" && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>
          </div>

          {/* Dual Column Tab Showcase Card Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-indigo-100/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Graphic Side (3 Professionals Collaborating + 4 Floating Telemetry Glass Cards) */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[480px] p-6 flex items-center justify-center bg-slate-50">
              
              {/* Photo Background */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={currentTabContent.image}
                  alt={currentTabContent.headline} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
              </div>

              {/* Connected Dotted Lines SVG */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 500 400" fill="none">
                  <path d="M 120 100 L 220 180" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="220" cy="180" r="4" fill="#6366f1" />

                  <path d="M 380 120 L 280 200" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="280" cy="200" r="4" fill="#6366f1" />

                  <path d="M 110 320 L 230 250" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="230" cy="250" r="4" fill="#6366f1" />
                </svg>
              </div>

              {/* Floating Glass Card 1: Workforce Insights (Top Left) */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 w-36 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Workforce Insights</p>
                <div className="relative w-12 h-12 mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="none" r="15" stroke="#E2E8F0" strokeWidth="3" />
                    <circle cx="18" cy="18" fill="none" r="15" stroke="#6366f1" strokeWidth="3" strokeDasharray="82, 100" strokeLinecap="round" />
                  </svg>
                  <span className="absolute font-extrabold text-[10px] text-slate-900">82%</span>
                </div>
                <p className="text-[10px] font-semibold text-slate-800">Engagement</p>
                <span className="text-[9px] text-emerald-600 font-bold">+12% vs last month</span>
              </div>

              {/* Floating Glass Card 2: Cost Efficiency (Top Right) */}
              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 w-36 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cost Efficiency</p>
                <p className="font-poppins font-black text-2xl text-slate-900">32%</p>
                <p className="text-[10px] font-semibold text-slate-800">Savings</p>
                <span className="text-[9px] text-emerald-600 font-bold">+18% vs last month</span>
              </div>

              {/* Floating Glass Card 3: Productivity Score (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 w-40">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Productivity Score</p>
                <p className="font-poppins font-black text-xl text-slate-900 mb-1">78<span className="text-xs text-slate-400">/100</span></p>
                <div className="h-4 w-full bg-indigo-50 rounded overflow-hidden flex items-end">
                  <div className="w-1/4 h-2 bg-indigo-300" />
                  <div className="w-1/4 h-3 bg-indigo-400" />
                  <div className="w-1/4 h-2.5 bg-indigo-500" />
                  <div className="w-1/4 h-4 bg-[#6366f1]" />
                </div>
                <span className="text-[9px] text-emerald-600 font-bold mt-1 block">+8% vs last month</span>
              </div>

              {/* Floating Glass Card 4: Team Alignment (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 w-44">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Team Alignment</p>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-sky-500 ring-2 ring-white text-[8px] text-white font-bold flex items-center justify-center">MK</div>
                    <div className="w-5 h-5 rounded-full bg-indigo-500 ring-2 ring-white text-[8px] text-white font-bold flex items-center justify-center">AS</div>
                    <div className="w-5 h-5 rounded-full bg-purple-500 ring-2 ring-white text-[8px] text-white font-bold flex items-center justify-center">PK</div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">+12</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>High Alignment</span>
                </div>
              </div>

            </div>

            {/* Right Text Content Side */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center items-start space-y-6">
              
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] font-poppins">
                {currentTabContent.category}
              </p>

              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentTabContent.headline}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentTabContent.body}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/solutions")}
                  className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Explore
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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
