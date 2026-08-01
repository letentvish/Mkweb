import React from "react";
import { 
  Flag, 
  Send, 
  TrendingUp, 
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AutomationSection({ onOpenSuiteModal }) {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative border-b border-slate-200/80" id="automation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16 text-left">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex flex-col items-start">
              <span className="text-xs font-extrabold text-[#6366f1] tracking-widest uppercase font-poppins block mb-1">
                INTELLIGENCE
              </span>
              <span className="w-8 h-0.5 bg-[#6366f1] rounded-full" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Automation that works while you lead
            </h2>
          </div>

          {/* Right Column: Narrative & Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              PALBON continuously learns from your data and adapts to your operations. It surfaces what matters, routes what needs action, and keeps your teams aligned without adding to their plate.
            </p>

            {/* Feature Bullets List */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-[#6366f1] shrink-0 shadow-sm">
                  <Flag className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  Anomalies flagged before they become issues
                </span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-[#6366f1] shrink-0 shadow-sm">
                  <Send className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  Approvals routed by context, not by inbox
                </span>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-[#6366f1] shrink-0 shadow-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  Forecasts that learn from your actual rhythm
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 pt-4">
              <button
                onClick={() => onOpenSuiteModal ? onOpenSuiteModal() : navigate("/solutions")}
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                Learn More
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="text-[#6366f1] hover:text-[#4f46e5] font-bold text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Large Graphic Container */}
        <div className="bg-gradient-to-b from-[#F3EFFE] via-[#F8FAFC] to-[#F1ECFE] border border-purple-100/90 rounded-3xl overflow-hidden shadow-sm relative p-2 sm:p-4">
          <img 
            src="/Automation.webp" 
            alt="Automation that works while you lead visual" 
            className="w-full h-auto object-cover rounded-2xl block shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
