import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Clock, 
  Puzzle, 
  BarChart2, 
  AlertTriangle, 
  GitFork, 
  ShieldAlert, 
  Coins, 
  ArrowRight, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PalbonFrictionSection() {
  const navigate = useNavigate();

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

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden relative" id="friction-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 flex flex-col items-start space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>FRICTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]">
              Your systems do not <br />
              <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">speak the same language</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end space-y-6 pt-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg text-left">
              Finance closes the books on data HR sent last week. Sales promises what operations cannot see. Every handoff is a small betrayal of the truth. The cost is not just time, it is the slow erosion of good decisions.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Infinite Looping Image Marquee Container */}
      <div className="relative w-full space-y-3 sm:space-y-6 my-2 sm:my-4">
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
            className="flex gap-3 sm:gap-6 shrink-0"
          >
            {loopRow1.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="relative w-48 h-36 sm:w-72 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30 group shrink-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#2e1065]/70 to-[#3b0764]/40 backdrop-blur-[2px]" />

                <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-between z-10">
                  <div className="mx-auto my-auto w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xs sm:text-base text-white text-left tracking-wide leading-tight">
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
            className="flex gap-3 sm:gap-6 shrink-0"
          >
            {loopRow2.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="relative w-48 h-36 sm:w-72 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30 group shrink-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#2e1065]/70 to-[#3b0764]/40 backdrop-blur-[2px]" />

                <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-between z-10">
                  <div className="mx-auto my-auto w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xs sm:text-base text-white text-left tracking-wide leading-tight">
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
          className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
        >
          <ArrowDown className="w-4 h-4" />
          <span>See Solutions</span>
        </button>
      </div>

    </section>
  );
}
