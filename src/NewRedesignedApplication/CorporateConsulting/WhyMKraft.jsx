import React from "react";
import { Users, Search, Cpu, Target } from "lucide-react";

export default function WhyMKraft() {

  const cardsLeft = [
    {
      step: "01",
      badge: "BESPOKE",
      title: "Designed around your business",
      description: "Every engagement begins with understanding your organization, not adapting you to a predefined program.",
      icon: <Users className="w-6 h-6 text-[#0284c7]" />
    },
    {
      step: "03",
      badge: "TECHNOLOGY-ENABLED",
      title: "Capability reinforced by technology",
      description: "Our consulting is strengthened by digital platforms that sustain learning and track progress long after implementation.",
      icon: <Cpu className="w-6 h-6 text-[#0284c7]" />
    }
  ];

  const cardsRight = [
    {
      step: "02",
      badge: "RESEARCH-BACKED",
      title: "Evidence before intervention",
      description: "We diagnose before we design, using proven assessments and data to build targeted capability solutions.",
      icon: <Search className="w-6 h-6 text-[#0284c7]" />
    },
    {
      step: "04",
      badge: "OUTCOME-FOCUSED",
      title: "Measured by business performance",
      description: "Success is not measured by attendance. It is measured by improved leadership, stronger teams, and better organizational outcomes.",
      icon: <Target className="w-6 h-6 text-[#0284c7]" />
    }
  ];

  return (
    <section className="bg-[#f7f9fb] py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-700 relative overflow-hidden border-b border-slate-200" id="why-mkraft">
      
      {/* Background Radial Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(2, 132, 199, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(2, 132, 199, 0.06) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-2">
          <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase mb-1">
            WHY MKRAFT
          </p>

          <div className="w-10 h-1 bg-[#0284c7] rounded-full mx-auto my-3" />

          <h2 className="text-5xl md:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Why <span className="text-[#0284c7]">MKraft</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed pt-1">
            Most consulting hands you a deck. <br className="hidden sm:inline" />
            We hand you difference that outlives the engagement.
          </p>
        </header>

        {/* Central Hub & 4 Orbital Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left 2 Cards (01 & 03) */}
          <div className="lg:col-span-4 space-y-8 text-left z-20">
            {cardsLeft.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-sky-100/50 border border-sky-100/80 relative hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
              >
                {/* Step Ribbon Badge (Left Side) */}
                <div className="absolute -left-3 top-6 bg-[#0284c7] text-white font-mono font-extrabold text-sm px-3.5 py-1 rounded-r-xl shadow-md flex items-center justify-center">
                  {card.step}
                </div>

                <div className="pl-4">
                  {/* Top Icon Circle */}
                  <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-full flex items-center justify-center mb-5 text-[#0284c7] group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Sub-tag Badge */}
                  <span className="text-xs font-mono font-extrabold text-[#0284c7] uppercase tracking-wider block mb-2 font-poppins">
                    {card.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#01182F] mb-3 leading-tight tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Central White Circular Hub & Orbital Ring */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-8 lg:py-0">
            
            {/* Orbital Dashed Ring */}
            <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-dashed border-sky-300/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10" />

            {/* Top-Left Orbit Node Circle */}
            <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0284c7] border-4 border-white shadow-xl items-center justify-center text-white absolute -top-2 left-6 z-20">
              <Users className="w-5 h-5 text-white" />
            </div>

            {/* Top-Right Orbit Node Circle */}
            <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0284c7] border-4 border-white shadow-xl items-center justify-center text-white absolute -top-2 right-6 z-20">
              <Search className="w-5 h-5 text-white" />
            </div>

            {/* Bottom-Left Orbit Node Circle */}
            <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0284c7] border-4 border-white shadow-xl items-center justify-center text-white absolute -bottom-2 left-6 z-20">
              <Cpu className="w-5 h-5 text-white" />
            </div>

            {/* Bottom-Right Orbit Node Circle */}
            <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#0284c7] border-4 border-white shadow-xl items-center justify-center text-white absolute -bottom-2 right-6 z-20">
              <Target className="w-5 h-5 text-white" />
            </div>

            {/* Central White Card Hub */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white shadow-2xl border-4 border-sky-100 flex flex-col items-center justify-center text-center p-6 relative z-20 hover:scale-105 transition-transform duration-300">
              <h3 className="font-poppins font-extrabold text-3xl text-[#01182F] tracking-tight">
                MKraft <span className="text-[#0284c7]"></span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium pt-2 max-w-[170px] leading-relaxed">
                Difference that outlives the engagement.
              </p>
            </div>

          </div>

          {/* Right 2 Cards (02 & 04) */}
          <div className="lg:col-span-4 space-y-8 text-left z-20">
            {cardsRight.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-sky-100/50 border border-sky-100/80 relative hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
              >
                {/* Step Ribbon Badge (Right Side) */}
                <div className="absolute -right-3 top-6 bg-[#0284c7] text-white font-mono font-extrabold text-sm px-3.5 py-1 rounded-l-xl shadow-md flex items-center justify-center">
                  {card.step}
                </div>

                <div className="pr-4">
                  {/* Top Icon Circle */}
                  <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-full flex items-center justify-center mb-5 text-[#0284c7] group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Sub-tag Badge */}
                  <span className="text-xs font-mono font-extrabold text-[#0284c7] uppercase tracking-wider block mb-2 font-poppins">
                    {card.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#01182F] mb-3 leading-tight tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
