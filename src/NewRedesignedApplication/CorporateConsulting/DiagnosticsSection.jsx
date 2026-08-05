import React, { useState } from "react";
import { Activity, ShieldCheck, Users, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DiagnosticsSection() {
  const navigate = useNavigate();

  const [scores] = useState({
    leadership: 88,
    execution: 76,
    culture: 84,
    tech: 92,
    performance: 80
  });

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 text-slate-900 relative" id="diagnostics-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>ORGANIZATIONAL DIAGNOSTICS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Understand your organization before you <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">transform</span> it.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Run diagnostic audits to map organizational friction, leadership readiness, and capability gaps before deploying capital.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => navigate("/assessment")}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm"
            >
              <Activity className="w-4 h-4" />
              <span>Start Assessment</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm"
            >
              <span>View Sample Report</span>
              <ArrowRight className="w-4 h-4 text-[#0284c7]" />
            </button>
          </div>
        </div>

        {/* Interactive Telemetry Card Container */}
        <div className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 border border-sky-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-sky-100/60 max-w-5xl mx-auto text-left">
          
          {/* Top 3 Metric Readout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase font-poppins">Executive Readiness</p>
                <p className="text-xl font-poppins font-extrabold text-[#01182F]">94% <span className="text-xs text-emerald-600 font-bold">Optimal</span></p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase font-poppins">Capability Index</p>
                <p className="text-xl font-poppins font-extrabold text-[#01182F]">88% <span className="text-xs text-emerald-600 font-bold">Strong</span></p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase font-poppins">Engagement Score</p>
                <p className="text-xl font-poppins font-extrabold text-[#01182F]">92% <span className="text-xs text-emerald-600 font-bold">Aligned</span></p>
              </div>
            </div>

          </div>

          {/* Departmental Maturity Telemetry Sliders */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-5">
            <h4 className="font-poppins font-extrabold text-base text-[#01182F] mb-4 flex items-center justify-between">
              <span>Organizational Capability Telemetry Breakdown</span>
              <span className="text-xs font-mono font-bold text-[#0284c7]">Real-time Audit Data</span>
            </h4>

            {/* Slider 1: Leadership */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Leadership Alignment</span>
                <span className="text-[#0284c7] font-mono">{scores.leadership}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284c7] rounded-full" style={{ width: `${scores.leadership}%` }} />
              </div>
            </div>

            {/* Slider 2: Execution */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Execution Agility</span>
                <span className="text-[#0284c7] font-mono">{scores.execution}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-amber-500 rounded-full" style={{ width: `${scores.execution}%` }} />
              </div>
            </div>

            {/* Slider 3: Culture */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Culture & Trust</span>
                <span className="text-[#0284c7] font-mono">{scores.culture}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" style={{ width: `${scores.culture}%` }} />
              </div>
            </div>

            {/* Slider 4: Tech */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Technology Integration</span>
                <span className="text-[#0284c7] font-mono">{scores.tech}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full" style={{ width: `${scores.tech}%` }} />
              </div>
            </div>

            {/* Slider 5: Performance */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Performance Telemetry</span>
                <span className="text-[#0284c7] font-mono">{scores.performance}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-[#0284c7] rounded-full" style={{ width: `${scores.performance}%` }} />
              </div>
            </div>

          </div>

          {/* Footer Legend */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-[11px] font-bold text-slate-500 gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Includes Executive Alignment & Benchmark Data</span>
            </span>
            <span className="text-[#0284c7]">Updated for Q3 Enterprise Audit</span>
          </div>

        </div>

      </div>
    </section>
  );
}
