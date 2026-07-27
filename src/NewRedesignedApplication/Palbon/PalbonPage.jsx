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
  Cpu,
  Check,
  IndianRupee,
  FolderGit2,
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../Components/NewNavbar";
import NewFooter from "../Components/NewFooter";

export default function PalbonPage() {
  const navigate = useNavigate();
  const [activeModelTab, setActiveModelTab] = useState("workforce");
  const [activeArchTab, setActiveArchTab] = useState("single-record");

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

  // Architecture Tab Content Data
  const archTabData = {
    "single-record": {
      anchor: "ANCHOR",
      title: "One person, one record, one truth",
      body: "An employee is not a separate entity in HR, payroll, and projects. They are a single record. A change in one place is a change everywhere, instantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    "event-driven": {
      anchor: "STREAM",
      title: "Real-time triggers, zero manual intervention",
      body: "Events propagate instantly across the entire architecture. When a project milestone completes, invoicing and commission schedules trigger automatically without human lag.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    "shared-logic": {
      anchor: "UNIFIED",
      title: "Single source of truth for enterprise business rules",
      body: "Define core calculations, compliance rules, and permissions once. Every module inherits the exact same business logic, preventing conflicting metrics across departments.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    }
  };

  const currentArchContent = archTabData[activeArchTab];

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
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase font-poppins">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>PALBON INTEGRATED SOLUTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Build your <br />
                <span className="text-[#0284c7]">enterprise operating system</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Unify your people, processes, data, and technology on one intelligent platform. Designed for the way modern enterprises operate.
              </p>

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
                className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl border-2 border-[#0066FF] p-6 rounded-2xl shadow-2xl text-center w-36 h-36 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 bg-[#0066FF] flex items-center justify-center rounded-xl mb-2 shadow-md">
                  <span className="text-white font-extrabold text-2xl">P</span>
                </div>
                <p className="font-black text-xs text-[#0b1c30]">PALBON</p>
                <p className="text-[7px] uppercase font-bold text-gray-400 tracking-tighter">Unified Intelligence</p>
              </motion.div>

              {/* PEOPLE CARD */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 sm:left-2 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-30 w-52"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">People</span>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-3">Talent & Culture</p>
                <div className="flex items-center -space-x-2 mb-3">
                  <img alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"/>
                  <img alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"/>
                  <img alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"/>
                  <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#0066FF]">+2k</div>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0066FF] leading-none">+2.4k</p>
                  <p className="text-[10px] text-gray-500 font-medium">Active Users</p>
                </div>
              </motion.div>

              {/* DATA CARD */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 left-2 sm:left-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-30 w-48"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data</span>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-4">Unified & Secure</p>
                <div className="flex items-end gap-1 mb-3">
                  <div className="w-3 bg-blue-100 h-6 rounded-t-sm"></div>
                  <div className="w-3 bg-blue-200 h-10 rounded-t-sm"></div>
                  <div className="w-3 bg-blue-400 h-8 rounded-t-sm"></div>
                  <div className="w-3 bg-blue-300 h-12 rounded-t-sm"></div>
                  <div className="w-3 bg-[#0066FF] h-16 rounded-t-sm"></div>
                </div>
                <p className="text-lg font-bold text-[#0066FF]">98.6%</p>
                <p className="text-[10px] text-gray-500 font-medium">Data Accuracy</p>
              </motion.div>

              {/* PROCESSES CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-2 sm:right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-30 w-44"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Processes</span>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-3">Workflows</p>
                <div className="relative h-16 w-full mb-3 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full h-full p-2 opacity-70">
                    <div className="border border-[#0066FF] rounded-sm h-4"></div>
                    <div className="col-span-2 border border-[#0066FF] rounded-sm h-4"></div>
                    <div className="col-span-2 border border-[#0066FF] rounded-sm h-4"></div>
                    <div className="border border-[#0066FF] rounded-sm h-4 flex items-center justify-center">
                      <svg className="w-2 h-2 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold text-[#0066FF]">128</p>
                <p className="text-[10px] text-gray-500 font-medium">Automated Workflows</p>
              </motion.div>

              {/* OUTCOMES CARD */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 right-2 sm:right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 z-30 w-44 text-center"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Outcomes</span>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-4">Business Impact</p>
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    <path className="text-[#0066FF]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3"></path>
                    <text className="text-[8px] font-bold fill-slate-900" textAnchor="middle" x="18" y="20.35">82%</text>
                  </svg>
                </div>
                <p className="text-[10px] text-gray-500 font-medium text-center">Operational Efficiency</p>
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

              {/* Bottom Glass Metrics Pill */}
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

            {/* Right Diagram Column */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] lg:min-h-[580px]">
              <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
                  <path d="M 180 120 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="180" cy="120" r="5" fill="#a7f3d0" />

                  <path d="M 480 120 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="480" cy="120" r="5" fill="#a7f3d0" />

                  <path d="M 160 400 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="160" cy="400" r="5" fill="#a7f3d0" />

                  <path d="M 490 380 L 300 240" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.8" />
                  <circle cx="490" cy="380" r="5" fill="#a7f3d0" />
                </svg>
              </div>

              <div className="relative z-20 w-full max-w-sm ml-auto mr-4 flex justify-end items-end">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80" 
                  alt="PALBON Single Source of Truth Executive" 
                  className="max-h-[460px] w-auto object-cover rounded-3xl shadow-2xl filter brightness-95"
                />
              </div>

              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute z-30 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 rounded-3xl p-1 shadow-2xl border-2 border-indigo-300/40 flex items-center justify-center shadow-indigo-500/50"
              >
                <div className="w-full h-full rounded-2xl bg-indigo-950/60 backdrop-blur-md flex items-center justify-center">
                  <span className="font-poppins font-black text-5xl text-white drop-shadow-lg">P</span>
                </div>
              </motion.div>

              <div className="absolute top-6 left-8 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-indigo-300" />
              </div>

              <div className="absolute top-6 right-8 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-indigo-300" />
              </div>

              <div className="absolute bottom-16 left-4 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <Settings className="w-6 h-6 text-indigo-300" />
              </div>

              <div className="absolute bottom-20 right-4 z-30 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 transition-transform">
                <BarChart2 className="w-6 h-6 text-indigo-300" />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION 4: AI-POWERED ("Built for your model") */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200" id="solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
                <motion.div layoutId="tab-underline-model" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
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
                <motion.div layoutId="tab-underline-model" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
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
                <motion.div layoutId="tab-underline-model" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>
          </div>

          {/* Dual Column Tab Showcase Card Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-indigo-100/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[480px] p-6 flex items-center justify-center bg-slate-50">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={currentTabContent.image}
                  alt={currentTabContent.headline} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
              </div>

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

              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 w-36 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cost Efficiency</p>
                <p className="font-poppins font-black text-2xl text-slate-900">32%</p>
                <p className="text-[10px] font-semibold text-slate-800">Savings</p>
                <span className="text-[9px] text-emerald-600 font-bold">+18% vs last month</span>
              </div>

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

      {/* SECTION 5: ARCHITECTURE ("The logic of one system") */}
      <section className="py-24 lg:py-32 bg-white text-slate-900 relative" id="architecture-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366f1] text-xs font-bold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#6366f1]" />
              <span>ARCHITECTURE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight">
              The logic of one system
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Complexity is the enemy of execution. A unified structure eliminates the translation layer between departments, making the organization faster by design.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-2.5 rounded-full border border-indigo-300 hover:border-indigo-400 text-[#6366f1] font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                Learn More
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex justify-center items-center gap-8 mb-12 border-b border-slate-200 pb-4">
            <button
              onClick={() => setActiveArchTab("single-record")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeArchTab === "single-record" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Single record</span>
              {activeArchTab === "single-record" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>

            <button
              onClick={() => setActiveArchTab("event-driven")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeArchTab === "event-driven" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Event driven</span>
              {activeArchTab === "event-driven" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>

            <button
              onClick={() => setActiveArchTab("shared-logic")}
              className={`font-poppins font-bold text-base px-2 py-1 relative transition-colors ${
                activeArchTab === "shared-logic" ? "text-[#6366f1]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span>Shared logic</span>
              {activeArchTab === "shared-logic" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>
          </div>

          {/* Dual Column Tab Showcase Card Container */}
          <div className="bg-white rounded-3xl shadow-xl border border-indigo-100/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Image & Connected Telemetry Overlays */}
            <div className="lg:col-span-6 relative min-h-[440px] lg:min-h-[520px] p-6 flex items-center justify-center bg-slate-50 overflow-hidden">
              
              {/* Photo */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={currentArchContent.image}
                  alt={currentArchContent.title} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/15 backdrop-blur-[1px]" />
              </div>

              {/* Connected Dotted Lines SVG */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 500 450" fill="none">
                  <path d="M 230 140 L 320 180" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 320 180 L 230 280" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Top Floating Profile Glass Card: Rohan Mehta */}
              <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 overflow-hidden shrink-0 border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Rohan Mehta" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-slate-900 leading-none mb-0.5">Rohan Mehta</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Employee ID: EMP-10234</p>
                  <span className="inline-block mt-1 bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">Active</span>
                </div>
              </div>

              {/* Connected Circle Checkmark Medallion */}
              <div className="absolute top-36 left-48 z-30 w-8 h-8 rounded-full bg-[#6366f1] text-white shadow-lg flex items-center justify-center border-2 border-white">
                <Check className="w-4 h-4" />
              </div>

              {/* Bottom Floating Department Status List Card */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 w-56 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#6366f1]" />
                    <span>HR</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">● Up to date</span>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-t border-slate-100 pt-2">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-[#6366f1]" />
                    <span>Payroll</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">● Up to date</span>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-t border-slate-100 pt-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#6366f1]" />
                    <span>Projects</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">● Up to date</span>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-t border-slate-100 pt-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#6366f1]" />
                    <span>Access</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">● Up to date</span>
                </div>
              </div>

            </div>

            {/* Right Column: Tab Narrative */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center items-start space-y-6">
              
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#6366f1] font-poppins">
                {currentArchContent.anchor}
              </p>

              <h3 className="text-3xl sm:text-4xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentArchContent.title.includes("truth") ? (
                  <>
                    One person, one record, <br />
                    one <span className="text-[#6366f1]">truth</span>
                  </>
                ) : (
                  currentArchContent.title
                )}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed">
                {currentArchContent.body}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-2.5 rounded-full border border-indigo-300 hover:border-indigo-400 text-[#6366f1] font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Learn More
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk to us</span>
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
