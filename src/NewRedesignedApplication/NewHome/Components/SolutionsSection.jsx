import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const pillars = [
    {
      id: 0,
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7]" />,
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
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7]" />,
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
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7]" />,
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, pillars.length]);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Section Header with PALBON Badge */}
        <div className="w-full mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>SOLUTIONS ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Core Business Pillars
          </h2>
        </div>

        {/* Main Showcase Dark Container */}
        <div className="w-full h-auto lg:h-[500px] xl:h-[540px] bg-[#01182F] text-white rounded-3xl overflow-hidden shadow-2xl border border-indigo-900/60 relative flex flex-col-reverse lg:flex-row">
          
          {/* Active Card Content Area */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 relative flex flex-col justify-between overflow-hidden min-h-[380px] lg:min-h-[440px]">
            <AnimatePresence mode="popLayout">
              {pillars.map((pillar) =>
                pillar.id === activeTab ? (
                  <motion.div
                    key={pillar.id}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-30%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                    className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6 bg-[#01182F] z-10 overflow-y-auto lg:overflow-hidden"
                  >
                    {/* Left Column: Text & CTA */}
                    <div className="md:col-span-6 flex flex-col justify-center items-start z-10 text-left">
                      <div className="mb-3 p-2.5 rounded-2xl bg-sky-500/10 inline-block border border-sky-500/20">
                        {pillar.icon}
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold tracking-tight text-white mb-3 leading-tight">
                        {pillar.title}
                      </h3>

                      <ul className="space-y-2 mb-6 sm:mb-8 text-slate-300 text-sm sm:text-base">
                        {pillar.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-center gap-2.5 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => navigate(pillar.link)}
                        className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
                      >
                        <span>Explore Pillar</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Right Column: Graphic Preview */}
                    <div className="md:col-span-6 flex items-center justify-center relative h-full min-h-[220px] lg:min-h-[320px]">
                      <img
                        src={pillar.mockup}
                        alt={pillar.title}
                        className="max-h-[240px] sm:max-h-[300px] lg:max-h-[360px] w-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Vertical/Horizontal Tab Controller Strip */}
          <div className="w-full lg:w-72 bg-[#070c1e] border-b lg:border-b-0 lg:border-l border-indigo-900/60 p-3 sm:p-4 flex flex-row lg:flex-col justify-between gap-2 z-20 shrink-0">
            {pillars.map((pillar) => {
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`flex-1 lg:flex-none p-3 sm:p-4 rounded-2xl transition-all duration-200 flex items-center gap-3 text-left cursor-pointer ${
                    isActive
                      ? "bg-white/10 border border-sky-400/40 text-white shadow-lg"
                      : "hover:bg-white/5 text-slate-400 border border-transparent"
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${isActive ? "bg-[#0284c7] text-white" : "bg-white/5 text-slate-400"}`}>
                    {pillar.icon}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-bold font-poppins text-slate-400 uppercase tracking-wider">{pillar.verticalLabel}</p>
                    <p className={`text-sm font-extrabold font-poppins ${isActive ? "text-white" : "text-slate-300"}`}>{pillar.title}</p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
