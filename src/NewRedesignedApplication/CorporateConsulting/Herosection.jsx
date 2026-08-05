import React from "react";
import Marquee from 'react-fast-marquee';
import { Users, Compass, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorporateHero = () => {
  const navigate = useNavigate();

  const companyNames = [
    "NeoLink",
    "Endurance",
    "Dr. Reddy's",
    "Bosch",
    "Hindustan Petroleum",
    "Merck",
    "Narayana Healthcare",
    "Panasonic",
    "Cotiviti"
  ];

  const heroCards = [
    {
      title: "Leadership that multiplies",
      description: "Build leaders who create leaders and strengthen every layer.",
      icon: <Users className="w-6 h-6 text-[#0284c7]" />,
      image: "/pillar_consulting.png",
      isCenter: false
    },
    {
      title: "Transformation that lasts",
      description: "Redesign organizations and drive change that delivers sustainable impact.",
      icon: <Compass className="w-6 h-6 text-[#0284c7]" />,
      image: "/pillar_academic.png",
      isCenter: true
    },
    {
      title: "Outcomes you can measure",
      description: "Develop capabilities that move the needle on what matters most.",
      icon: <BarChart3 className="w-6 h-6 text-[#0284c7]" />,
      image: "/pillar_technology.png",
      isCenter: false
    }
  ];

  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="consulting-hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#consulting-hero-grid)" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left pt-4">
        
        {/* Top Section Header: 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          
          {/* Left Column: Accent Line & Main Headline */}
          <div className="lg:col-span-7">
            {/* Top Blue Accent Bar */}
            <div className="w-12 h-1 bg-[#0284c7] rounded-full mb-6" />

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Build organizations <br />
              that <span className="text-[#0284c7]">perform</span>
            </h1>
          </div>

          {/* Right Column: Paragraph Subtext & Action Buttons */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 pb-2">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We help enterprises build leaders, redesign organizations, drive transformation, and develop capabilities that create measurable business outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
              >
                <span>Explore</span>
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
              >
                <span>Talk to an Expert</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom 3 Hero Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {heroCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group transition-all duration-500 flex flex-col justify-end ${
                card.isCenter ? "min-h-[460px] lg:min-h-[500px] shadow-sky-900/20" : "min-h-[420px] lg:min-h-[460px]"
              }`}
            >
              {/* Full Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01182F] via-[#01182F]/70 to-transparent" />

              {/* Bottom Content Area */}
              <div className="relative z-10 p-6 sm:p-8 text-left space-y-3">
                {/* Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-center text-[#0284c7] group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="font-poppins font-extrabold text-2xl text-white tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-normal max-w-xs">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners Marquee */}
        <div className="pt-8 border-t border-slate-200/80 max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-slate-500 tracking-widest uppercase font-poppins mb-6">
            TRUSTED BY ENTERPRISE LEADERS NATIONWIDE
          </p>

          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {companyNames.map((name, idx) => (
              <span
                key={idx}
                className="font-poppins font-extrabold text-slate-400 text-lg sm:text-xl tracking-wider mx-8 hover:text-slate-800 transition-colors duration-200 cursor-default"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>

      </div>

    </section>
  );
};

export default CorporateHero;