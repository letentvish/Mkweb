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
    <section ref={sectionRef} className="relative w-full h-[220vh] bg-surface">
      {/* Sticky Screen Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center py-6 px-4 md:px-8 lg:px-12 overflow-hidden">
        
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="w-full mb-6 text-left">
            <p className="label-md mb-1 text-secondary">SOLUTIONS ARCHITECTURE</p>
            <h2 className="headline-lg text-on-surface">
              Core Business Pillars
            </h2>
          </div>

          {/* Main Showcase Dark Container */}
          <div className="w-full h-[480px] md:h-[520px] bg-[#0b1426] text-white rounded-2xl overflow-hidden shadow-2xl border border-cyan-800/40 relative flex">
            
            {/* Active Card Content Area with Slide Overlap Animation */}
            <div className="flex-1 p-6 md:p-10 relative flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="popLayout">
                {pillars.map((pillar) =>
                  pillar.id === activeTab ? (
                    <motion.div
                      key={pillar.id}
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: "0%", opacity: 1 }}
                      exit={{ x: "-30%", opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
                      className="absolute inset-0 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 bg-[#0b1426] z-10 overflow-hidden"
                    >
                      {/* Left Column: Text & CTA */}
                      <div className="lg:col-span-6 flex flex-col justify-center items-start z-10">
                        <div className="text-teal-400 mb-3 p-2.5 rounded-lg bg-teal-500/10 inline-block border border-teal-500/20">
                          {pillar.icon}
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold tracking-tight text-white mb-4 leading-tight">
                          {pillar.title}
                        </h3>

                        <ul className="space-y-2.5 mb-6">
                          {pillar.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-200 text-sm md:text-base font-medium">
                              <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => navigate(pillar.link)}
                          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-teal-500/20"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Right Column: Clean Aligned Mockup Graphic */}
                      <div className="lg:col-span-6 flex items-center justify-center relative w-full h-full z-10">
                        <div className="relative w-full max-w-md h-[220px] md:h-[260px] lg:h-[300px] rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl flex items-center justify-center group">
                          <img
                            src={pillar.mockup}
                            alt={pillar.title}
                            className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426]/60 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            {/* Vertical Navigation Right Tabs Sidebar (3 vertical strips side-by-side) */}
            <aside className="h-full border-l border-slate-700/60 flex flex-row bg-[#0f1b33] z-20">
              {pillars.map((pillar) => {
                const isActive = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`w-16 sm:w-20 md:w-24 lg:w-28 h-full flex flex-col items-center justify-between py-8 px-2 transition-all duration-300 relative border-r border-slate-700/40 cursor-pointer ${
                      isActive
                        ? "bg-[#1d2b4a] text-teal-400 font-bold"
                        : "bg-[#0b1426] hover:bg-slate-800/60 text-slate-300"
                    }`}
                  >
                    {/* Top Highlight Accent Bar */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-400"></div>
                    )}

                    <div className="p-2 rounded-full bg-slate-800/60 text-white mb-auto mt-2">
                      {pillar.icon}
                    </div>

                    <span className="[writing-mode:vertical-rl] rotate-180 font-semibold text-xs md:text-sm tracking-wide whitespace-nowrap pb-4">
                      {pillar.verticalLabel}
                    </span>
                  </button>
                );
              })}
            </aside>

          </div>

          {/* Bottom Scroll Explore Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-teal-600 text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity">
            <ArrowDown className="w-4 h-4 animate-bounce" />
            <span>Scroll to explore</span>
          </div>

        </div>
      </div>
    </section>
  );
}





