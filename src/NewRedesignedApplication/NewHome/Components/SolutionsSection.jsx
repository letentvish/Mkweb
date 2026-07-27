import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(1); // 0: Organizational capability, 1: Digital platforms, 2: Academic alignment
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const pillars = [
    {
      id: 0,
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      verticalLabel: "Organizational capability",
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
      verticalLabel: "Digital platforms",
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
      verticalLabel: "Academic alignment",
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
        <div className="w-full h-auto lg:h-[500px] xl:h-[540px] 2xl:h-[580px] bg-[#0b1426] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 relative flex flex-col-reverse lg:flex-row">
          
          {/* Active Card Content Area */}
          <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative flex flex-col justify-between overflow-hidden min-h-[380px] lg:min-h-[440px]">
            <AnimatePresence mode="popLayout">
              {pillars.map((pillar) =>
                pillar.id === activeTab ? (
                  <motion.div
                    key={pillar.id}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-30%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                    className="absolute inset-0 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6 bg-[#0b1426] z-10 overflow-y-auto lg:overflow-hidden"
                  >
                    {/* Left Column: Text & CTA */}
                    <div className="md:col-span-6 flex flex-col justify-center items-start z-10 text-left">
                      <div className="text-sky-400 mb-2 sm:mb-3 p-2 sm:p-2.5 rounded-xl bg-sky-500/10 inline-block border border-sky-500/20">
                        {pillar.icon}
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-bold tracking-tight text-white mb-2 sm:mb-3 leading-tight">
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
                      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg h-[160px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl flex items-center justify-center group">
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

          {/* Navigation Tabs Sidebar: 3 Vertical Strips Stacked Side-by-Side (flex-row) */}
          <aside className="w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-700/60 flex flex-row bg-[#0b1426] z-20 shrink-0 h-auto lg:h-full">
            {pillars.map((pillar) => {
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveTab(pillar.id);
                    setIsPaused(true);
                  }}
                  className={`flex-1 lg:w-24 xl:w-28 2xl:w-32 h-20 sm:h-24 lg:h-full flex flex-col items-center justify-between py-3 lg:py-8 px-2 transition-all duration-300 relative border-r border-slate-700/50 last:border-r-0 cursor-pointer ${
                    isActive
                      ? "bg-[#1e2a4a] text-sky-400 font-bold"
                      : "bg-[#0b1426] hover:bg-slate-800/60 text-slate-300 font-medium"
                  }`}
                >
                  {/* Top Highlight Indicator Bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0369a1]"></div>
                  )}

                  <div className="p-1.5 sm:p-2 rounded-full bg-slate-800/60 text-white mt-1 shrink-0">
                    {pillar.icon}
                  </div>

                  <span className="[writing-mode:vertical-rl] rotate-180 text-xs sm:text-sm lg:text-sm xl:text-base font-semibold tracking-wide whitespace-nowrap pb-4 sm:pb-6">
                    {pillar.verticalLabel}
                  </span>
                </button>
              );
            })}
          </aside>

        </div>

      </div>
    </section>
  );
}
