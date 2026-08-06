import React from "react";
import { 
  Compass, 
  Users, 
  PieChart, 
  Brain, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  LayoutGrid, 
  BarChart2, 
  Settings,
  Rocket
} from "lucide-react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";

export default function AssessmentHubSection() {

  const topOrbitModules = [
    {
      title: "360°",
      subtitle: "Comprehensive 360 Degree Feedback",
      icon: <Compass className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "180°",
      subtitle: "Focused Feedback for Growth",
      icon: <Users className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "270°",
      subtitle: "Extended Feedback Perspective",
      icon: <PieChart className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "Psychometrics",
      subtitle: "Validated Psychometric Assessment",
      icon: <Brain className="w-5 h-5 text-[#0284c7]" />
    }
  ];

  const bottomOrbitModules = [
    {
      title: "Career Archetype",
      subtitle: "Discover Career Archetype and Pathways",
      icon: <Target className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "Engagement Surveys",
      subtitle: "Measure Sentiments, Engagement & Culture",
      icon: <MessageSquare className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "Leadership Competency",
      subtitle: "Assess Leadership Capabilities",
      icon: <ShieldCheck className="w-5 h-5 text-[#0284c7]" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative overflow-hidden" id="assessment-hub">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="assess-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#assess-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Graphic Orbital Diagnostic Ecosystem */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center space-y-6">
            
            {/* Dashed Orbital Rings in Background */}
            <div className="w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full border border-sky-300/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-sky-200/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

            {/* TOP Orbiting Row (4 Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full relative z-20">
              {topOrbitModules.map((mod, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-sky-100/90 rounded-2xl p-3.5 sm:p-4 shadow-lg shadow-sky-100/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 text-left group flex flex-col justify-between min-h-[130px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-2 shrink-0 group-hover:scale-105 transition-transform">
                    {mod.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-xs sm:text-sm text-[#01182F] leading-tight mb-1">
                      {mod.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER Dark Dashboard Tablet Screen */}
            <div className="w-full max-w-[580px] bg-[#070c1e] text-white border-2 border-slate-800/90 rounded-3xl p-5 sm:p-7 shadow-2xl relative z-20 overflow-hidden">
              {/* Dashboard Inner Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <img src={LogoDark} alt="MKraft Logo" className="h-6 sm:h-8 w-auto object-contain brightness-200" />
                  <div className="h-5 w-px bg-slate-700 mx-0.5" />
                  <div>
                    <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white leading-none">
                      <span className="text-[#0284c7]">Assess</span>
                    </h3>
                    <p className="text-[9px] text-slate-400 font-normal pt-0.5">
                      Assess. Understand. Transform.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <LayoutGrid className="w-4 h-4 text-[#0284c7]" />
                  <BarChart2 className="w-4 h-4" />
                  <Settings className="w-4 h-4" />
                </div>
              </div>

              {/* Dashboard Center Telemetry Target Radar */}
              <div className="py-6 flex flex-col items-center justify-center relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-sky-500/30 flex items-center justify-center relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-sky-400/50 flex items-center justify-center">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0284c7] text-white flex items-center justify-center shadow-[0_0_20px_#0284c7] animate-pulse">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM Orbiting Row (3 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full relative z-20">
              {bottomOrbitModules.map((mod, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-sky-100/90 rounded-2xl p-3.5 sm:p-4 shadow-lg shadow-sky-100/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 text-left group flex flex-col justify-between min-h-[130px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-2 shrink-0 group-hover:scale-105 transition-transform">
                    {mod.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-xs sm:text-sm text-[#01182F] leading-tight mb-1">
                      {mod.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Text & Copy Info Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Top Accent Bar & Badge */}
            <div>
              <p className="text-xs font-poppins font-extrabold text-[#0284c7] tracking-widest uppercase mb-1">
                ASSESSMENT HUB
              </p>
              <div className="w-10 h-1 bg-[#0284c7] rounded-full my-3" />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Next-Gen <br />
              <span className="text-[#0284c7]">Assessment Suite</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Deep Diagnostics, Assessments, and Coaching aren't add-ons we tack on at the end. They run as continuous threads through every stage of the engagement — so growth is measured, not assumed.
            </p>

            {/* Rocket Callout Card Container */}
            <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 text-left">
              <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Skip the custom builds and integration delays. Access our Assessment suite of validated, plug-and-play instruments the moment you sign up.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
