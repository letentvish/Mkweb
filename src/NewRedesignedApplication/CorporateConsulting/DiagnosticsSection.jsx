import React from "react";
import { User, Users, Globe, Settings, TrendingUp, BookOpen, Code, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DiagnosticsSection() {
  const navigate = useNavigate();

  const domains = [
    {
      name: "Leadership",
      description: "Strategy, alignment and leadership effectiveness",
      icon: <Users className="w-5 h-5 text-[#0284c7]" />,
      score: "2.3",
      percent: "26%",
      color: "bg-red-500",
      trackColor: "bg-red-400",
      borderColor: "border-red-500"
    },
    {
      name: "Operations",
      description: "Process efficiency, execution and continuous improvement",
      icon: <Settings className="w-5 h-5 text-[#0284c7]" />,
      score: "2.9",
      percent: "47.5%",
      color: "bg-amber-500",
      trackColor: "bg-amber-400",
      borderColor: "border-amber-500"
    },
    {
      name: "Sales",
      description: "Market execution, customer value and growth",
      icon: <TrendingUp className="w-5 h-5 text-[#0284c7]" />,
      score: "3.6",
      percent: "65%",
      color: "bg-[#0284c7]",
      trackColor: "bg-sky-400",
      borderColor: "border-[#0284c7]"
    },
    {
      name: "Learning",
      description: "Learning culture, capability building and knowledge flow",
      icon: <BookOpen className="w-5 h-5 text-[#0284c7]" />,
      score: "2.2",
      percent: "24%",
      color: "bg-amber-600",
      trackColor: "bg-amber-500",
      borderColor: "border-amber-600"
    },
    {
      name: "Engineering",
      description: "Technical excellence, innovation and delivery",
      icon: <Code className="w-5 h-5 text-[#0284c7]" />,
      score: "3.9",
      percent: "72.5%",
      color: "bg-emerald-500",
      trackColor: "bg-emerald-400",
      borderColor: "border-emerald-500"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="diagnostics-section">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="diag-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diag-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <header className="max-w-4xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>CAPABILITY INTELLIGENCE</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-tight">
            Understand your organization <br className="hidden sm:block" />
            before you <span className="text-[#0284c7]">transform</span> it.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Every engagement begins with evidence. We combine leadership, workforce and behavioural diagnostics to uncover where your organization is today and what will create the greatest impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => navigate("/assessment")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 px-8 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <span>Run Diagnostics</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold py-3.5 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-[#0284c7]" />
            </button>
          </div>
        </header>

        {/* Capabilities Row */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg shadow-sky-100/50 border border-sky-200/80 p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-8 justify-between text-left">
          
          {/* Capability 1 */}
          <div className="flex-1 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 shadow-sm">
              <User className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono font-extrabold tracking-wider text-[#0284c7] uppercase mb-1 font-poppins">
                LEADERSHIP
              </div>
              <h3 className="text-xl font-poppins font-extrabold text-[#01182F] mb-1.5 leading-snug">
                Executive<br />Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Assess leadership bench strength, mindset and readiness to lead change.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-slate-200" />

          {/* Capability 2 */}
          <div className="flex-1 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 shadow-sm">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono font-extrabold tracking-wider text-[#0284c7] uppercase mb-1 font-poppins">
                WORKFORCE
              </div>
              <h3 className="text-xl font-poppins font-extrabold text-[#01182F] mb-1.5 leading-snug">
                Capability<br />Heatmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Identify capability gaps, critical roles and skill intensity across teams.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-slate-200" />

          {/* Capability 3 */}
          <div className="flex-1 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0 shadow-sm">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono font-extrabold tracking-wider text-[#0284c7] uppercase mb-1 font-poppins">
                CULTURE
              </div>
              <h3 className="text-xl font-poppins font-extrabold text-[#01182F] mb-1.5 leading-snug">
                Behaviour &<br />Engagement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Measure cultural health, behaviours and engagement drivers.
              </p>
            </div>
          </div>

        </div>

        {/* Dashboard Section (Capability Map & Maturity Readout) */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-sky-200/80 overflow-hidden flex flex-col lg:flex-row text-left">
          
          {/* Left Column: Capability Map */}
          <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-8 bg-slate-50/50">
            <h3 className="text-sm font-poppins font-extrabold tracking-widest uppercase text-[#01182F] mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <span>CAPABILITY MAP</span>
            </h3>

            {/* Table Header */}
            <div className="grid grid-cols-[auto_1fr] gap-4 mb-4 text-xs font-mono font-bold text-slate-400 uppercase border-b border-slate-200 pb-2">
              <div className="w-28">DOMAINS</div>
              <div>DESCRIPTION</div>
            </div>

            {/* Domain List */}
            <div className="space-y-6">
              {domains.map((item, idx) => (
                <div key={idx} className="grid grid-cols-[auto_1fr] gap-4 items-center">
                  <div className="w-28 flex items-center gap-2.5 font-poppins font-bold text-sm text-[#01182F]">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-tight font-normal">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Capability Maturity */}
          <div className="w-full lg:w-2/3 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-poppins font-extrabold tracking-widest uppercase text-[#01182F] mb-6 flex items-center justify-between">
                <span>CAPABILITY MATURITY</span>
                <span className="text-xs font-mono font-bold text-[#0284c7]">READOUT TELEMETRY</span>
              </h3>

              {/* Stages Header */}
              <div className="grid grid-cols-6 gap-2 mb-8 text-center text-[10px] sm:text-xs font-bold text-slate-500">
                <div><div className="uppercase mb-1 text-slate-700">EMERGING</div><div className="font-mono text-[9px] text-slate-400">1.0 - 1.8</div></div>
                <div><div className="uppercase mb-1 text-slate-700">DEVELOPING</div><div className="font-mono text-[9px] text-slate-400">1.9 - 2.6</div></div>
                <div><div className="uppercase mb-1 text-slate-700">ESTABLISHING</div><div className="font-mono text-[9px] text-slate-400">2.7 - 3.4</div></div>
                <div><div className="uppercase mb-1 text-slate-700">STRONG</div><div className="font-mono text-[9px] text-slate-400">3.5 - 4.2</div></div>
                <div><div className="uppercase mb-1 text-slate-700">LEADING</div><div className="font-mono text-[9px] text-slate-400">4.3 - 5.0</div></div>
                <div className="text-[#01182F]"><div className="uppercase mb-1 font-extrabold">OVERALL</div><div className="font-mono text-[9px] text-[#0284c7]">MATURITY</div></div>
              </div>

              {/* Sliders List */}
              <div className="space-y-[32px] mb-8 relative z-10">
                {domains.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex-grow grid grid-cols-5 gap-1 relative h-2.5 rounded-full overflow-hidden bg-slate-100">
                      <div className="bg-red-100" />
                      <div className="bg-amber-100" />
                      <div className="bg-yellow-100" />
                      <div className="bg-sky-100" />
                      <div className="bg-emerald-100" />

                      {/* Progress Fill */}
                      <div className="absolute inset-0 flex">
                        <div className={`h-full ${item.trackColor} rounded-l-full`} style={{ width: item.percent }} />
                        <div 
                          className={`w-4 h-4 rounded-full ${item.color} border-2 border-white shadow-md absolute top-1/2 -translate-y-1/2 -translate-x-1/2`} 
                          style={{ left: item.percent }} 
                        />
                      </div>
                    </div>

                    <div className="w-14 text-center ml-4 shrink-0">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full border-2 ${item.borderColor} text-[#01182F] font-poppins font-extrabold text-xs shadow-sm`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Color Legend */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs pt-4 border-t border-slate-200/80 font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                <div>
                  <span className="font-bold text-[#01182F]">Risk Area</span> — <span className="text-slate-500 text-[11px]">Immediate attention</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                <div>
                  <span className="font-bold text-[#01182F]">High Potential</span> — <span className="text-slate-500 text-[11px]">Focused development</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0284c7] shrink-0" />
                <div>
                  <span className="font-bold text-[#01182F]">Building Strength</span> — <span className="text-slate-500 text-[11px]">Continue investing</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <span className="font-bold text-[#01182F]">Ready for Growth</span> — <span className="text-slate-500 text-[11px]">Leverage and scale</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
