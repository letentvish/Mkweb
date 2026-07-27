import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(0); // 0: Consulting, 1: Technology (SaaS), 2: Academic
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const pillars = [
    {
      id: 0,
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      verticalLabel: "CONSULTING",
      title: "Leadership & OD",
      bullets: [
        "Leadership Development",
        "Culture & Change management",
        "Org Design & Performance"
      ],
      mockup: "/pillar_consulting.png",
      link: "/corporate-consulting"
    },
    {
      id: 1,
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      verticalLabel: "TECHNOLOGY",
      title: "AI Enterprise Solutions",
      bullets: [
        "Nucleus — AI-Native HRMS",
        "PALBON Suites — ERP & Operations",
        "Magnetix — AI-powered LXP"
      ],
      mockup: "/pillar_technology.png",
      link: "/solutions"
    },
    {
      id: 2,
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      verticalLabel: "ACADEMIC SOLUTIONS",
      title: "Future-ready learning",
      bullets: [
        "Hyper-Personalised Skill Tracks",
        "Tailored Executive Masterclasses",
        "Outcome-linked Learning Journeys"
      ],
      mockup: "/pillar_academic.png",
      link: "/mile"
    }
  ];

  // Auto-rotate tabs every 6 seconds unless user interacts
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, pillars.length]);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-surface overflow-hidden">
      <div 
        className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Section Header */}
        <div className="w-full mb-6 sm:mb-8 text-left">
          <p className="label-md mb-1 text-secondary">SOLUTIONS ARCHITECTURE</p>
          <h2 className="headline-lg text-on-surface text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-extrabold">
            Core Business Pillars
          </h2>
        </div>

        {/* Main Showcase Dark Container */}
        <div className="w-full h-auto bg-[#0b1426] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 relative flex flex-col">
          
          {/* Horizontal Pillars Navigation Bar (Stacked Horizontally across top) */}
          <div className="w-full border-b border-slate-700/60 flex flex-row bg-[#0f1b33] z-20 shrink-0">
            {pillars.map((pillar) => {
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveTab(pillar.id);
                    setIsPaused(true);
                  }}
                  className={`flex-1 h-14 sm:h-16 md:h-18 flex flex-row items-center justify-center gap-2 sm:gap-3 py-3 px-2 sm:px-6 transition-all duration-300 relative border-r last:border-r-0 border-slate-700/40 cursor-pointer ${
                    isActive
                      ? "bg-[#1d2b4a] text-sky-400 font-bold"
                      : "bg-[#0b1426] hover:bg-slate-800/60 text-slate-300"
                  }`}
                >
                  {/* Active Highlight Top Indicator Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#0369a1]"></div>
                  )}

                  <div className="p-1.5 sm:p-2 rounded-full bg-slate-800/60 text-white shrink-0">
                    {pillar.icon}
                  </div>

                  <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wide whitespace-nowrap">
                    {pillar.verticalLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Card Content Area */}
          <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-between overflow-hidden min-h-[400px] md:min-h-[420px] lg:min-h-[460px]">
            <AnimatePresence mode="popLayout">
              {pillars.map((pillar) =>
                pillar.id === activeTab ? (
                  <motion.div
                    key={pillar.id}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-30%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                    className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6 bg-[#0b1426] z-10 overflow-y-auto md:overflow-hidden"
                  >
                    {/* Left Column: Text & CTA */}
                    <div className="md:col-span-6 flex flex-col justify-center items-start z-10 text-left">
                      <div className="text-sky-400 mb-2 sm:mb-3 p-2 sm:p-2.5 rounded-xl bg-sky-500/10 inline-block border border-sky-500/20">
                        {pillar.icon}
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold tracking-tight text-white mb-2 sm:mb-3 leading-tight">
                        {pillar.title}
                      </h3>

                      <ul className="space-y-2 mb-4 sm:mb-6">
                        {pillar.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-xs md:text-sm xl:text-base font-medium">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => navigate(pillar.link)}
                        className="inline-flex items-center gap-2 bg-[#0369a1] hover:bg-[#0284c7] text-white font-bold px-4 sm:px-5 md:px-6 xl:px-8 py-2 sm:py-2.5 xl:py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-md text-xs sm:text-xs md:text-sm xl:text-base hover:scale-105 active:scale-95"
                      >
                        <span>Explore Solution</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5" />
                      </button>
                    </div>

                    {/* Right Column: Clean Aligned Mockup Graphic */}
                    <div className="md:col-span-6 flex items-center justify-center relative w-full z-10">
                      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg h-[160px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl flex items-center justify-center group">
                        <img
                          src={pillar.mockup}
                          alt={pillar.title}
                          className="w-full h-full object-cover object-top rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426]/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
