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
  Settings
} from "lucide-react";
import LogoDark from "../../Assets/MultipliersKraftLogoDark.png";

export default function AssessmentHubSection() {

  const laptopModules = [
    {
      title: "360°",
      subtitle: "Comprehensive 360 Degree Feedback",
      icon: <Compass className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "180°",
      subtitle: "Focused Feedback for Growth",
      icon: <Users className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "270°",
      subtitle: "Extended Feedback Perspective",
      icon: <PieChart className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "Psychometrics",
      subtitle: "Validated Psychometric Assessments",
      icon: <Brain className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "Career Archetype",
      subtitle: "Discover Career Archetypes and Pathways",
      icon: <Target className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "Engagement Surveys",
      subtitle: "Measure Sentiment, Engagement & Culture",
      icon: <MessageSquare className="w-6 h-6 text-[#0284c7]" />
    },
    {
      title: "Leadership Competency",
      subtitle: "Assess Leadership Capabilities",
      icon: <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
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
          
          {/* Left Column: Copy & Headline */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Top Accent Bar & Badge */}
            <div>
              <div className="w-10 h-1 bg-[#0284c7] rounded-full mb-3" />
              <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block font-poppins">
                ASSESSMENT HUB
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.08]">
              Next-Gen <br />
              Assessment Suite <br />
              <span className="text-[#0284c7]">The Diagnostic Ecosystem</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Deep Diagnostics, Assessments, and Coaching aren't add-ons we tack on at the end. They run as continuous threads through every stage of the engagement — so growth is measured, not assumed.
            </p>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-slate-300 my-4" />

            {/* Paragraph 2 */}
            <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              Skip the custom builds and integration delays. Access our Assessment suite of validated, plug-and-play instruments the moment you sign up.
            </p>

          </div>

          {/* Right Column: High-Impact 3D Laptop App UI Mockup */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Laptop Outer Frame (Enlarged) */}
            <div className="w-full max-w-[760px] lg:max-w-[840px] bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border-2 border-slate-800 relative z-10">
              
              {/* Laptop Web Screen Inner Window */}
              <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden shadow-inner border border-slate-200 text-left min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] p-5 sm:p-8 flex flex-col justify-between">
                
                {/* Top Nav Header inside App Screen */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 mb-6">
                  <div className="flex items-center gap-3">
                    {/* Real MultipliersKraft Official Logo */}
                    <img 
                      src={LogoDark} 
                      alt="MultipliersKraft Logo" 
                      className="h-7 sm:h-9 w-auto object-contain" 
                    />
                    <div className="h-6 w-px bg-slate-300 mx-1" />
                    <div>
                      <h3 className="font-poppins font-extrabold text-lg text-[#01182F] leading-none">
                        <span className="text-[#0284c7]">Assess</span>
                      </h3>
                      <p className="text-[10px] text-slate-400 font-normal pt-0.5">
                        Assess. Understand. Transform.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-3 text-slate-400">
                    <LayoutGrid className="w-5 h-5 text-[#0284c7]" />
                    <BarChart2 className="w-5 h-5" />
                    <Settings className="w-5 h-5" />
                  </div>
                </div>

                {/* Main App Grid View */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
                  {laptopModules.map((mod, idx) => (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-3">
                        {mod.icon}
                      </div>

                      <div>
                        <h4 className="font-poppins font-bold text-sm sm:text-base text-[#01182F] mb-1 leading-tight">
                          {mod.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-normal">
                          {mod.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Laptop Bottom Base Hinge */}
              <div className="w-full h-4 bg-slate-800 rounded-b-2xl mt-1.5 flex items-center justify-center">
                <div className="w-24 h-1.5 bg-slate-600 rounded-full" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
