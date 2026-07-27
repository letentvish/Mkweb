import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowDown, ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(1); // 0: Org capability, 1: Digital platforms (SaaS), 2: Academic alignment
  const navigate = useNavigate();
  const sectionRef = useRef(null);

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

  // Sticky Scroll Progress to switch active cards as user scrolls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveTab(0);
      } else if (latest < 0.66) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen lg:h-[220vh] bg-surface">
      {/* Sticky Screen Viewport Container */}
      <div className="lg:sticky lg:top-0 min-h-screen w-full flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        
        <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="w-full mb-6 text-left">
            <p className="label-md mb-1 text-secondary">SOLUTIONS ARCHITECTURE</p>
            <h2 className="headline-lg text-on-surface text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-extrabold">
              Core Business Pillars
            </h2>
          </div>

          {/* Main Showcase Dark Container */}
          <div className="w-full h-auto lg:h-[540px] xl:h-[580px] 2xl:h-[620px] bg-[#0b1426] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 relative flex flex-col-reverse lg:flex-row">
            
            {/* Active Card Content Area */}
            <div className="flex-1 p-5 sm:p-8 lg:p-12 xl:p-14 relative flex flex-col justify-between overflow-hidden min-h-[420px] sm:min-h-[440px] lg:min-h-[500px]">
              <AnimatePresence mode="popLayout">
                {pillars.map((pillar) =>
                  pillar.id === activeTab ? (
                    <motion.div
                      key={pillar.id}
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: "0%", opacity: 1 }}
                      exit={{ x: "-30%", opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
                      className="absolute inset-0 p-5 sm:p-8 lg:p-12 xl:p-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 xl:gap-12 bg-[#0b1426] z-10 overflow-y-auto lg:overflow-hidden"
                    >
                      {/* Left Column: Text & CTA */}
                      <div className="lg:col-span-6 flex flex-col justify-center items-start z-10 text-left">
                        <div className="text-sky-400 mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-xl bg-sky-500/10 inline-block border border-sky-500/20">
                          {pillar.icon}
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
                          {pillar.title}
                        </h3>

                        <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                          {pillar.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm md:text-base xl:text-lg font-medium">
                              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-sky-400 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => navigate(pillar.link)}
                          className="inline-flex items-center gap-2.5 bg-[#0369a1] hover:bg-[#0284c7] text-white font-bold px-5 sm:px-7 xl:px-8 py-2.5 sm:py-3 xl:py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md text-xs sm:text-sm xl:text-base hover:scale-105 active:scale-95"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5" />
                        </button>
                      </div>

                      {/* Right Column: Clean Aligned Mockup Graphic */}
                      <div className="lg:col-span-6 flex items-center justify-center relative w-full z-10">
                        <div className="relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl h-[180px] sm:h-[220px] lg:h-[300px] xl:h-[340px] 2xl:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl flex items-center justify-center group">
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

            {/* Navigation Tabs Sidebar: Responsive layout (Horizontal on mobile/tablet, Vertical strips on desktop) */}
            <aside className="w-full lg:w-auto border-b lg:border-b-0 lg:border-l border-slate-700/60 flex flex-row bg-[#0f1b33] z-20 shrink-0">
              {pillars.map((pillar) => {
                const isActive = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`flex-1 lg:w-24 xl:w-28 2xl:w-32 h-14 sm:h-16 lg:h-full flex flex-row lg:flex-col items-center justify-center lg:justify-between py-2 sm:py-3 lg:py-10 px-2 sm:px-4 lg:px-2 transition-all duration-300 relative border-r border-slate-700/40 cursor-pointer ${
                      isActive
                        ? "bg-[#1d2b4a] text-sky-400 font-bold"
                        : "bg-[#0b1426] hover:bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    {/* Top Accent Bar (desktop: top bar, mobile/tablet: top indicator line) */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-full h-1 lg:h-1.5 bg-[#0369a1]"></div>
                    )}

                    <div className="p-1.5 sm:p-2.5 rounded-full bg-slate-800/60 text-white lg:mb-auto lg:mt-2 shrink-0">
                      {pillar.icon}
                    </div>

                    <span className="text-xs sm:text-sm lg:text-base lg:[writing-mode:vertical-rl] lg:rotate-180 font-semibold tracking-wide whitespace-nowrap lg:pb-6 ml-2 lg:ml-0">
                      {pillar.verticalLabel}
                    </span>
                  </button>
                );
              })}
            </aside>

          </div>

          {/* Bottom Scroll Explore Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity">
            <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
            <span>Scroll to explore</span>
          </div>

        </div>
      </div>
    </section>
  );
}





