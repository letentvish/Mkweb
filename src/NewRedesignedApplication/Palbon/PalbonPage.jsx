import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Database, 
  Boxes, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  FileText,
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Layers, 
  GitFork, 
  Puzzle, 
  BarChart2,
  AlertTriangle,
  ShieldAlert,
  Coins
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../Components/NewNavbar";
import NewFooter from "../Components/NewFooter";
import SuiteConfiguratorModal from "./SuiteConfiguratorModal";
import AutomationSection from "./AutomationSection";
import EcosystemCtaSection from "./EcosystemCtaSection";
import CircularGallery from "./CircularGallery";

const HERO_V3_GALLERY_ITEMS = [
  { 
    id: "gl", 
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80", 
    text: "General Ledger", 
    catLabel: "ERP Line", 
    desc: "Multi-entity accounting & GL book of record",
    icon: "💰"
  },
  { 
    id: "ap", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
    text: "Accounts Payable", 
    catLabel: "ERP Line", 
    desc: "3-way matching, automated invoice approvals",
    icon: "📄"
  },
  { 
    id: "tax", 
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", 
    text: "Tax & e-Invoicing", 
    catLabel: "ERP Line", 
    desc: "GST e-way bills & statutory tax compliance",
    icon: "⚡"
  },
  { 
    id: "inv", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", 
    text: "Inventory Engine", 
    catLabel: "ERP Line", 
    desc: "Multi-location stock control & reorder alerts",
    icon: "📦"
  },
  { 
    id: "wms", 
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", 
    text: "Warehouse WMS", 
    catLabel: "ERP Line", 
    desc: "Optimised picking, bin tracking & dispatch",
    icon: "⚙️"
  },
  { 
    id: "crm", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", 
    text: "CRM & Pipeline", 
    catLabel: "ERP Line", 
    desc: "Leads to delivery & sales pipeline management",
    icon: "📊"
  },
  { 
    id: "mrp", 
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", 
    text: "Manufacturing MRP", 
    catLabel: "ERP Line", 
    desc: "Bill of materials & production scheduling",
    icon: "🧩"
  },
  { 
    id: "hr", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", 
    text: "Core HR & Records", 
    catLabel: "HRMS Nucleus", 
    desc: "Single source of truth for employee data",
    icon: "👥"
  },
  { 
    id: "payroll", 
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80", 
    text: "Payroll Engine", 
    catLabel: "HRMS Nucleus", 
    desc: "Automated salary & instant payslip generation",
    icon: "💳"
  },
  { 
    id: "ats", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", 
    text: "Recruitment ATS", 
    catLabel: "HRMS Nucleus", 
    desc: "Applicant tracking & joining workflows",
    icon: "💼"
  },
  { 
    id: "attendance", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", 
    text: "Time & Attendance", 
    catLabel: "HRMS Nucleus", 
    desc: "Biometric integration & mobile attendance",
    icon: "⏰"
  },
  { 
    id: "bi", 
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", 
    text: "Workforce BI", 
    catLabel: "HRMS Nucleus", 
    desc: "Predictive headcount & attrition analytics",
    icon: "✨"
  }
];

export default function PalbonPage() {
  const navigate = useNavigate();
  const palbon3dIframeRef = useRef(null);
  const [heroVersion, setHeroVersion] = useState("v3"); // "v1" | "v2" | "v3"
  const [activeModelTab, setActiveModelTab] = useState("configuration");
  const [activeArchTab, setActiveArchTab] = useState("single-record");
  const [isSuiteModalOpen, setIsSuiteModalOpen] = useState(false);

  // Swipe navigation for intelligence tabs on mobile
  const modelTabOrder = ["configuration", "reasoning"];
  const swipeStartXRef = useRef(null);
  const handleTabSwipeStart = (e) => {
    swipeStartXRef.current = e.touches ? e.touches[0].clientX : null;
  };
  const handleTabSwipeEnd = (e) => {
    if (swipeStartXRef.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : null;
    if (endX === null) return;
    const diff = swipeStartXRef.current - endX;
    if (Math.abs(diff) < 50) return; // ignore tiny swipes
    const currentIdx = modelTabOrder.indexOf(activeModelTab);
    if (diff > 0) {
      // Swipe left → next tab
      const next = modelTabOrder[(currentIdx + 1) % modelTabOrder.length];
      setActiveModelTab(next);
    } else {
      // Swipe right → previous tab
      const prev = modelTabOrder[(currentIdx - 1 + modelTabOrder.length) % modelTabOrder.length];
      setActiveModelTab(prev);
    }
    swipeStartXRef.current = null;
  };

  // Swipe navigation for architecture tabs on mobile
  const archTabOrder = ["single-record", "event-driven", "shared-logic"];
  const archSwipeStartXRef = useRef(null);
  const handleArchTabSwipeStart = (e) => {
    archSwipeStartXRef.current = e.touches ? e.touches[0].clientX : null;
  };
  const handleArchTabSwipeEnd = (e) => {
    if (archSwipeStartXRef.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : null;
    if (endX === null) return;
    const diff = archSwipeStartXRef.current - endX;
    if (Math.abs(diff) < 50) return; // ignore tiny swipes
    const currentIdx = archTabOrder.indexOf(activeArchTab);
    if (diff > 0) {
      // Swipe left → next tab
      const next = archTabOrder[(currentIdx + 1) % archTabOrder.length];
      setActiveArchTab(next);
    } else {
      // Swipe right → previous tab
      const prev = archTabOrder[(currentIdx - 1 + archTabOrder.length) % archTabOrder.length];
      setActiveArchTab(prev);
    }
    archSwipeStartXRef.current = null;
  };

  const handleHeroMouseMove = (e) => {
    if (heroVersion === "v2" && palbon3dIframeRef.current?.contentWindow) {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      palbon3dIframeRef.current.contentWindow.postMessage({
        mouseX,
        clientX: e.clientX,
        clientY: e.clientY
      }, '*');
    }
  };

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

  // Intelligence Tab Content Data (Section 4)
  const intelligenceTabData = {
    workforce: {
      badge: "AGILITY",
      headline: "Start where the pain is sharpest, expand without disruption",
      description: "You do not need a big bang replacement. Activate the features you need today. Add value modules as you evolve. The system grows with your reality, not against it.",
      image: "/Workforce.jpg",
      hideOverlays: true,
      topCard1: {
        title: "Workforce Insights",
        percent: 82,
        label: "Engagement",
        change: "+12% vs last month"
      },
      topCard2: {
        title: "Cost Efficiency",
        stat: "32%",
        label: "Savings",
        change: "+18% vs last month"
      },
      bottomCard1: {
        title: "Productivity Score",
        stat: "78/100",
        change: "+8% vs last month"
      },
      bottomCard2: {
        title: "Team Alignment",
        avatars: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
        ],
        extra: "+12",
        status: "High Alignment"
      }
    },
    configuration: {
      badge: "FLEXIBILITY",
      headline: "Adaptable workflows built for your custom operation",
      description: "Configure processes and business rules without complex code rewrites. Maintain complete ownership over system parameters and logic.",
      image: "/configure.webp",
      hideOverlays: true,
      topCard1: {
        title: "Module Health",
        percent: 95,
        label: "Modularity",
        change: "+24% vs last month"
      },
      topCard2: {
        title: "Config Efficiency",
        stat: "99.8%",
        label: "Uptime",
        change: "+5% vs last month"
      },
      bottomCard1: {
        title: "Rule Execution",
        stat: "0.2ms",
        change: "Optimal speed"
      },
      bottomCard2: {
        title: "Module Sync",
        avatars: [
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
        ],
        extra: "+8",
        status: "All Modules Synced"
      }
    },
    reasoning: {
      badge: "INTELLIGENCE",
      headline: "Context-aware AI reasoning for complex decision making",
      description: "Leverage AI models that analyze multi-dimensional enterprise data to deliver actionable recommendations and automated workflows.",
      image: "/reasoning.webp",
      hideOverlays: true,
      topCard1: {
        title: "AI Precision",
        percent: 96,
        label: "Accuracy",
        change: "+15% vs last month"
      },
      topCard2: {
        title: "Decision Speed",
        stat: "4.2x",
        label: "Faster",
        change: "+35% vs last month"
      },
      bottomCard1: {
        title: "Predictive Score",
        stat: "94/100",
        change: "+10% vs last month"
      },
      bottomCard2: {
        title: "Active Predictions",
        avatars: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
        ],
        extra: "+15",
        status: "High Accuracy"
      }
    }
  };

  const currentIntelligenceTab = intelligenceTabData[activeModelTab] || intelligenceTabData.reasoning;

  // Architecture Tab Content Data
  const archTabData = {
    "single-record": {
      anchor: "ANCHOR",
      title: "One person, one record, one truth",
      body: "An employee is not a separate entity in HR, payroll, and projects. They are a single record. A change in one place is a change everywhere, instantly.",
      image: "/Single Record.webp"
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
      <NewNavbar />      {/* SECTION 1: HERO (WITH VERSION TOGGLE) */}
      <section onMouseMove={handleHeroMouseMove} className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-slate-900">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img 
            src="/background.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center opacity-95"
          />
        </div>

        {/* Tech Node Vector Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
        </div>

        {/* Hero Version Toggle Control */}
        <div className="flex justify-center mb-8 relative z-30">
          <div className="inline-flex p-1 bg-white/90 backdrop-blur-md border border-slate-300/80 shadow-md rounded-full overflow-x-auto max-w-full">
            <button
              onClick={() => setHeroVersion("v1")}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                heroVersion === "v1"
                  ? "bg-[#01182F] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Hero V1 (Executive Matrix)
            </button>
            <button
              onClick={() => setHeroVersion("v2")}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                heroVersion === "v2"
                  ? "bg-[#01182F] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Hero V2 (Integrated Stack Architecture)
            </button>
            <button
              onClick={() => setHeroVersion("v3")}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                heroVersion === "v3"
                  ? "bg-[#01182F] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Hero V3 (Modular App Grid)
            </button>
          </div>
        </div>

        {/* HERO VERSION 3 (MODULAR ECOSYSTEM APP GRID) */}
        {heroVersion === "v3" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-12 pt-2">
            
            {/* Header Content */}
            <div className="max-w-4xl mx-auto">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>UNIFIED. INTELLIGENT. IMPACTFUL.</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12] max-w-4xl mx-auto">
                Build your <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
                  enterprise operating system
                </span>
              </h1>

              {/* Subheading (P1) */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4 font-medium">
                Unify your people, processes, data, and technology on one intelligent platform. Designed for the way modern enterprises operate.
              </p>

              {/* CTAs directly underneath H1 & P1 */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-2">
                <button
                  onClick={() => setIsSuiteModalOpen(true)}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
                >
                  <Boxes className="w-4 h-4" />
                  <span>Configure PALBON Suite</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0284c7]">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Overview</span>
                </button>
              </div>
            </div>

            {/* 3D WebGL Curved Interactive Circular Gallery - Shifted Upwards */}
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-4 mb-2 overflow-hidden z-20">
              <div style={{ height: 'min(90vw, 640px)', position: 'relative', width: '100%' }}>
                <CircularGallery
                  items={HERO_V3_GALLERY_ITEMS}
                  bend={3}
                  textColor="#01182F"
                  borderRadius={0.06}
                  scrollEase={0.04}
                  scrollSpeed={2}
                  font="bold 28px Figtree"
                  fontUrl="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap"
                />
              </div>
            </div>

            {/* High Impact Bottom Banner */}
            <div className="mt-8 sm:mt-10 inline-flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 hover:scale-105">
              <div className="flex flex-wrap items-center gap-3 px-5 py-2.5 rounded-full bg-[#070c1e] text-white backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 tracking-wide">
                    40 Connected Modules <span className="text-slate-400 mx-1">•</span> One Shared Data Core
                  </span>
                </div>
                <button
                  onClick={() => setIsSuiteModalOpen(true)}
                  className="ml-0 sm:ml-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0284c7] to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-extrabold tracking-wide flex items-center gap-1.5 shadow-md transition-all cursor-pointer group"
                >
                  <span>Open Suite Configurator</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Full Hero 3D WebGL Background when Hero V2 is active */}
        {heroVersion === "v2" && (
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto pt-60 sm:pt-64 lg:pt-72">
            <iframe
              ref={palbon3dIframeRef}
              src="/Palbon_3D_Section/index.html"
              title="PALBON Interactive 3D Architecture Background"
              className="w-full h-full border-0 bg-transparent pointer-events-auto"
            />
          </div>
        )}

        {/* HERO VERSION 1 */}
        {heroVersion === "v1" && (
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
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[620px] lg:min-h-[660px]">
                
                {/* Connecting Lines SVG */}
                <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block">
                  <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
                    {/* Hub to PEOPLE (Top-Left) */}
                    <path d="M 300 300 L 100 80" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
                    <circle cx="100" cy="80" r="3.5" fill="#0066FF" />

                    {/* Hub to DATA (Bottom-Left) */}
                    <path d="M 300 300 L 100 520" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
                    <circle cx="100" cy="520" r="3.5" fill="#0066FF" />

                    {/* Hub to PROCESSES (Top-Right) */}
                    <path d="M 300 300 L 500 80" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
                    <circle cx="500" cy="80" r="3.5" fill="#0066FF" />

                    {/* Hub to OUTCOMES (Bottom-Right) */}
                    <path d="M 300 300 L 500 520" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.6" />
                    <circle cx="500" cy="520" r="3.5" fill="#0066FF" />
                  </svg>
                </div>

                {/* Central Executive Image with smooth bottom fade */}
                <div className="relative z-20 w-full max-w-md mx-auto flex justify-center items-end">
                  <img 
                    src="/palbon_hero_executive.png" 
                    alt="PALBON Executive holding digital tablet" 
                    className="max-h-[520px] lg:max-h-[580px] w-auto object-contain object-bottom drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
                  />
                </div>

                {/* Central Hub Medallion: PALBON Unified Intelligence */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl border-2 border-[#0066FF] p-4 rounded-2xl shadow-2xl text-center w-36 h-36 flex flex-col items-center justify-center"
                >
                  <div className="w-11 h-11 bg-[#0066FF] flex items-center justify-center rounded-xl mb-1.5 shadow-md">
                    <span className="text-white font-extrabold text-2xl">P</span>
                  </div>
                  <p className="font-black text-xs text-[#0b1c30]">PALBON</p>
                  <p className="text-[7px] uppercase font-bold text-gray-400 tracking-tighter">Unified Intelligence</p>
                </motion.div>

                {/* 1. PEOPLE CARD (Top-Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 sm:-left-2 lg:-left-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60 z-30 w-48 sm:w-52 text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">People</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 mb-2">Talent & Culture</p>
                  <div className="flex items-center -space-x-2 mb-2">
                    <img alt="avatar" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"/>
                    <img alt="avatar" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"/>
                    <img alt="avatar" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"/>
                    <div className="w-7 h-7 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center text-[9px] font-bold text-[#0066FF]">+2k</div>
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#0066FF] leading-none">+2.4k</p>
                    <p className="text-[9px] text-gray-500 font-medium">Active Users</p>
                  </div>
                </motion.div>

                {/* 2. DATA CARD (Bottom-Left) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-2 left-0 sm:-left-2 lg:-left-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60 z-30 w-48 sm:w-52 text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 mb-3">Unified & Secure</p>
                  <div className="flex items-end gap-1 mb-2">
                    <div className="w-2.5 bg-blue-100 h-5 rounded-t-sm"></div>
                    <div className="w-2.5 bg-blue-200 h-8 rounded-t-sm"></div>
                    <div className="w-2.5 bg-blue-400 h-7 rounded-t-sm"></div>
                    <div className="w-2.5 bg-blue-300 h-10 rounded-t-sm"></div>
                    <div className="w-2.5 bg-[#0066FF] h-14 rounded-t-sm"></div>
                  </div>
                  <p className="text-base font-bold text-[#0066FF]">98.6%</p>
                  <p className="text-[9px] text-gray-500 font-medium">Data Accuracy</p>
                </motion.div>

                {/* 3. PROCESSES CARD (Top-Right) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
                  className="absolute top-0 right-0 sm:-right-2 lg:-right-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60 z-30 w-48 sm:w-52 text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Processes</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 mb-2">Workflows</p>
                  <div className="relative h-14 w-full mb-2 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1.5 w-full h-full p-1.5 opacity-70">
                      <div className="border border-[#0066FF] rounded-sm h-3.5"></div>
                      <div className="col-span-2 border border-[#0066FF] rounded-sm h-3.5"></div>
                      <div className="col-span-2 border border-[#0066FF] rounded-sm h-3.5"></div>
                      <div className="border border-[#0066FF] rounded-sm h-3.5 flex items-center justify-center">
                        <svg className="w-2 h-2 text-[#0066FF]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-bold text-[#0066FF]">128</p>
                  <p className="text-[9px] text-gray-500 font-medium">Automated Workflows</p>
                </motion.div>

                {/* 4. OUTCOMES CARD (Bottom-Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-2 right-0 sm:-right-2 lg:-right-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60 z-30 w-48 sm:w-52 text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066FF]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Outcomes</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 mb-2">Business Impact</p>
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                      <path className="text-[#0066FF]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3"></path>
                      <text className="text-[8px] font-bold fill-slate-900" textAnchor="middle" x="18" y="20.35">82%</text>
                    </svg>
                  </div>
                  <p className="text-[9px] text-gray-500 font-medium text-center">Operational Efficiency</p>
                </motion.div>

              </div>

            </div>
          </div>
        )}

        {/* HERO VERSION 2 (PALBON 3D BACKGROUND) */}
        {heroVersion === "v2" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center min-h-[760px] lg:min-h-[860px] flex flex-col justify-start pointer-events-none pb-12">
            
            {/* Header Content */}
            <div className="pointer-events-auto pt-2">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                UNIFIED. INTELLIGENT. IMPACTFUL.
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12] max-w-4xl mx-auto">
                Build your <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
                  enterprise operating system
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mt-4 font-medium">
                Unify your people, processes, data, and technology on one intelligent platform. Designed for the way modern enterprises operate.
              </p>
            </div>

          </div>
        )}

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              
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

            {/* Right Column - Full Scale Graphic, No Constraints */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative overflow-visible">
              <img 
                src="/clarity.png" 
                alt="PALBON Single Source of Truth Clarity" 
                className="w-[130%] lg:w-[150%] h-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: 'none', transform: 'scale(1.25)', transformOrigin: 'center center' }}
              />
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 4: BUILT FOR YOUR MODEL */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200" id="solutions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-extrabold text-[#6366f1] tracking-widest uppercase font-poppins block">
              AI-POWERED
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Built for <span className="italic font-serif bg-gradient-to-r from-[#6366f1] to-indigo-600 bg-clip-text text-transparent px-1">your</span> framework
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-1">
              We do not sell a rigid single-purpose box. We bring a modular system that bends to how you actually operate. You own the configuration, not a vendor's future guesses.
            </p>

            <div className="flex items-center justify-center gap-4 pt-3">
              <button
                onClick={() => setIsSuiteModalOpen(true)}
                className="px-6 py-2.5 rounded-xl border border-indigo-500 hover:border-indigo-600 text-[#6366f1] hover:bg-indigo-50 font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                Build Your Suite
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-[#6366f1] hover:text-indigo-700 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Talk</span>
                <ArrowRight className="w-4 h-4 text-[#6366f1]" />
              </button>
            </div>
          </div>

          {/* Division 1: Configuration Card Block */}
          <div className="bg-white border border-indigo-200/90 rounded-3xl overflow-hidden shadow-lg shadow-indigo-100/50 mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Interactive Visual */}
              <div className="lg:col-span-6 relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]">
                <div className="relative w-full h-full min-h-full bg-slate-100 flex items-center justify-center">
                  <img 
                    src={intelligenceTabData.configuration.image} 
                    alt="Configuration visual" 
                    className="w-full h-full object-cover object-center block min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]"
                  />
                </div>
              </div>

              {/* Right Column: Text Content Side */}
              <div className="lg:col-span-6 flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 space-y-4 sm:space-y-6 text-left">
                <span className="text-xs font-bold text-[#6366f1] tracking-widest uppercase font-poppins">
                  {intelligenceTabData.configuration.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                  {intelligenceTabData.configuration.headline}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {intelligenceTabData.configuration.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsSuiteModalOpen(true)}
                    className="px-7 py-3 rounded-xl border border-indigo-400 hover:border-indigo-600 text-[#6366f1] hover:bg-indigo-50 font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#6366f1]" />
                    <span>Configure Suite</span>
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="text-[#6366f1] hover:text-indigo-700 font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Talk</span>
                    <ArrowRight className="w-4 h-4 text-[#6366f1]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Division 2: Reasoning Card Block */}
          <div className="bg-white border border-indigo-200/90 rounded-3xl overflow-hidden shadow-lg shadow-indigo-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Interactive Visual */}
              <div className="lg:col-span-6 relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]">
                <div className="relative w-full h-full min-h-full bg-slate-100 flex items-center justify-center">
                  <img 
                    src={intelligenceTabData.reasoning.image} 
                    alt="Reasoning visual" 
                    className="w-full h-full object-cover object-center block min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]"
                  />
                </div>
              </div>

              {/* Right Column: Text Content Side */}
              <div className="lg:col-span-6 flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 space-y-4 sm:space-y-6 text-left">
                <span className="text-xs font-bold text-[#6366f1] tracking-widest uppercase font-poppins">
                  {intelligenceTabData.reasoning.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                  {intelligenceTabData.reasoning.headline}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {intelligenceTabData.reasoning.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsSuiteModalOpen(true)}
                    className="px-7 py-3 rounded-xl border border-indigo-400 hover:border-indigo-600 text-[#6366f1] hover:bg-indigo-50 font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#6366f1]" />
                    <span>Configure Suite</span>
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="text-[#6366f1] hover:text-indigo-700 font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Talk</span>
                    <ArrowRight className="w-4 h-4 text-[#6366f1]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4.5: AUTOMATION THAT WORKS WHILE YOU LEAD (Unlinked) */}
      {/* <AutomationSection onOpenSuiteModal={() => setIsSuiteModalOpen(true)} /> */}

      {/* SECTION 5: ARCHITECTURE ("The logic of one system") */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 relative overflow-hidden" id="architecture-section">
        
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#94A3B8" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#arch-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-bold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
              The logic of one system
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Complexity is the enemy of execution. A unified structure eliminates the translation layer between departments, making the organization faster by design.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-2.5 rounded-full border-2 border-[#0284c7] hover:bg-[#0284c7] hover:text-white text-[#0284c7] font-extrabold text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-extrabold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 mb-4 sm:mb-8 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveArchTab("single-record")}
              className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
                activeArchTab === "single-record" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span>Single record</span>
              {activeArchTab === "single-record" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
              )}
            </button>

            <button
              onClick={() => setActiveArchTab("event-driven")}
              className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
                activeArchTab === "event-driven" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span>Event driven</span>
              {activeArchTab === "event-driven" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
              )}
            </button>

            <button
              onClick={() => setActiveArchTab("shared-logic")}
              className={`font-poppins font-bold text-sm sm:text-base px-2 sm:px-3 py-1.5 relative transition-colors cursor-pointer ${
                activeArchTab === "shared-logic" ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span>Shared logic</span>
              {activeArchTab === "shared-logic" && (
                <motion.div layoutId="tab-underline-arch" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284c7]" />
              )}
            </button>
          </div>

          {/* Swipe hint dots — mobile only */}
          <div className="flex lg:hidden justify-center items-center gap-2 mb-4">
            {archTabOrder.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveArchTab(tab)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeArchTab === tab
                    ? "w-6 h-2 bg-[#0284c7]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Unboxed Dual Column Layout (Situated Directly on Screen) - Swipeable on Mobile */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
            onTouchStart={handleArchTabSwipeStart}
            onTouchEnd={handleArchTabSwipeEnd}
          >
            
            {/* Left Column: Visual Showcase Frame (Full Height Image Layout) */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden flex items-center justify-center min-h-[220px] max-h-[300px] sm:min-h-[400px] sm:max-h-none lg:min-h-[700px] h-full">
              <img 
                src={currentArchContent.image}
                alt={currentArchContent.title} 
                className="w-full h-full object-contain transition-all duration-700 drop-shadow-xl max-h-[280px] sm:max-h-none"
              />
            </div>

            {/* Right Column: Narrative Copy (Situated directly on page) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-3 sm:space-y-6 text-left pl-0 lg:pl-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
                <span>{currentArchContent.anchor}</span>
              </div>

              <h3 className="text-xl sm:text-3xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]">
                {currentArchContent.title.includes("truth") ? (
                  <>
                    One person, one record, <br className="hidden sm:inline" />
                    one <span className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] bg-clip-text text-transparent">truth</span>
                  </>
                ) : (
                  currentArchContent.title
                )}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                {currentArchContent.body}
              </p>

              <div className="flex items-center gap-4 pt-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 rounded-full border-2 border-[#0284c7] text-[#0284c7] hover:bg-[#0284c7] hover:text-white font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Learn More
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-extrabold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* END CTA SECTION: LET'S TALK ABOUT YOUR ECOSYSTEM */}
      <EcosystemCtaSection onOpenSuiteModal={() => setIsSuiteModalOpen(true)} />

      {/* Suite Configurator Modal */}
      <SuiteConfiguratorModal 
        isOpen={isSuiteModalOpen} 
        onClose={() => setIsSuiteModalOpen(false)} 
      />

      {/* Global Footer */}
      <NewFooter />

    </div>
  );
}
