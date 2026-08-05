import React from "react";
import { 
  Compass, 
  Users, 
  PieChart, 
  Brain, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  LayoutGrid, 
  BarChart2, 
  Settings, 
  UserCheck,
  Play
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AssessmentHubSection() {
  const navigate = useNavigate();

  const laptopModules = [
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
      subtitle: "Validated Psychometric Assessments",
      icon: <Brain className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "Career Archetype",
      subtitle: "Discover Career Archetypes and Pathways",
      icon: <Target className="w-5 h-5 text-[#0284c7]" />
    },
    {
      title: "Engagement Surveys",
      subtitle: "Measure Sentiment, Engagement & Culture",
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
          
          {/* Left Column: Copy, Headline & Testimonial Badge */}
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
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Skip the custom builds and integration delays. Access our Assessment suite of validated, plug-and-play tools the moment you sign up. Build for higher engagements
            </p>


          </div>

          {/* Right Column: Realistic 3D Laptop & Smartphone App UI Mockup */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Laptop Outer Frame */}
            <div className="w-full max-w-[620px] bg-slate-900 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl border border-slate-800 relative z-10">
              
              {/* Laptop Web Screen Inner Window */}
              <div className="bg-[#F8FAFC] rounded-xl overflow-hidden shadow-inner border border-slate-200 text-left min-h-[380px] sm:min-h-[420px] p-4 sm:p-6 flex flex-col justify-between">
                
                {/* Top Nav Header inside App Screen */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#01182F] text-white flex items-center justify-center font-poppins font-extrabold text-lg shadow-sm">
                      M
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-lg text-[#01182F] leading-none">
                        MKraft <span className="text-[#0284c7]">Assess</span>
                      </h3>
                      <p className="text-[10px] text-slate-400 font-normal pt-0.5">
                        Assess. Understand. Transform.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-slate-400">
                    <LayoutGrid className="w-4 h-4 text-[#0284c7]" />
                    <BarChart2 className="w-4 h-4" />
                    <Settings className="w-4 h-4" />
                  </div>
                </div>

                {/* Main App Grid View */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-grow">
                  {laptopModules.map((mod, idx) => (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mb-2">
                        {mod.icon}
                      </div>

                      <div>
                        <h4 className="font-poppins font-bold text-xs text-[#01182F] mb-1">
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

              {/* Laptop Bottom Base Hinge */}
              <div className="w-full h-3 bg-slate-800 rounded-b-xl mt-1 flex items-center justify-center">
                <div className="w-16 h-1 bg-slate-600 rounded-full" />
              </div>
            </div>

            {/* Mobile Phone Mockup Overlay (Floating Bottom-Right) */}
            <div className="hidden sm:block absolute -bottom-6 -right-2 sm:right-4 w-[180px] sm:w-[210px] bg-slate-900 rounded-[28px] p-2 shadow-2xl border-2 border-slate-800 z-20">
              {/* Phone Inner Screen */}
              <div className="bg-white rounded-[22px] overflow-hidden text-left p-3 border border-slate-200 space-y-2">
                
                {/* Phone Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-poppins font-bold text-[10px] text-[#01182F]">
                    MKraft <span className="text-[#0284c7]">Assess</span>
                  </span>
                  <div className="w-3 h-3 rounded-full bg-sky-50 flex items-center justify-center text-[#0284c7]">
                    <UserCheck className="w-2 h-2" />
                  </div>
                </div>

                {/* Mobile Module List */}
                <div className="space-y-1.5 pt-1">
                  {laptopModules.slice(0, 5).map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                          {m.icon}
                        </div>
                        <div>
                          <div className="font-bold text-[9px] text-[#01182F] leading-tight">{m.title}</div>
                          <div className="text-[7px] text-slate-400 truncate max-w-[90px]">{m.subtitle}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-2.5 h-2.5 text-slate-300" />
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
