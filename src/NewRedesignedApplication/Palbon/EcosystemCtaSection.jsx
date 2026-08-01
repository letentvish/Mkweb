import React from "react";
import { 
  MessageSquare, 
  ArrowUpRight, 
  Users, 
  BarChart2, 
  PieChart, 
  Database 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EcosystemCtaSection({ onOpenSuiteModal }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 relative" id="ecosystem-cta-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Gradient CTA Card */}
        <div className="bg-gradient-to-b from-[#F5F2FF] via-[#FAF8FF] to-[#F1EDFF] border border-purple-100/90 rounded-3xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-sm">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Dotted Node Connections & Floating Badges */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="w-full h-full text-indigo-300/40" viewBox="0 0 1000 400" fill="none">
              <path d="M100 200 Q 250 80, 500 200 T 900 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M150 320 Q 350 380, 500 200 T 850 100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Node 1: Users */}
            <div className="p-3 rounded-2xl bg-white/90 border border-purple-100 shadow-md absolute left-8 sm:left-14 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-[#6366f1]">
              <Users className="w-5 h-5" />
            </div>

            {/* Node 2: Analytics */}
            <div className="p-3 rounded-2xl bg-white/90 border border-purple-100 shadow-md absolute left-20 sm:left-32 bottom-8 hidden md:flex items-center justify-center text-[#6366f1]">
              <BarChart2 className="w-5 h-5" />
            </div>

            {/* Node 3: Pie Chart */}
            <div className="p-3 rounded-2xl bg-white/90 border border-purple-100 shadow-md absolute right-12 sm:right-20 top-10 hidden md:flex items-center justify-center text-[#6366f1]">
              <PieChart className="w-5 h-5" />
            </div>

            {/* Node 4: Database */}
            <div className="p-3 rounded-2xl bg-white/90 border border-purple-100 shadow-md absolute right-20 sm:right-32 bottom-8 hidden md:flex items-center justify-center text-[#6366f1]">
              <Database className="w-5 h-5" />
            </div>
          </div>

          {/* Center Card Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Top Chat Bubble Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#6366f1] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MessageSquare className="w-7 h-7 fill-[#6366f1]/20" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight mb-4">
              Let's talk about your <span className="text-[#6366f1]">ecosystem</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Connect with us one-on-one and map what fits best for your organization's unique operating model.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Talk to us</span>
              </button>

              <button
                onClick={() => onOpenSuiteModal ? onOpenSuiteModal() : navigate("/solutions")}
                className="bg-white border border-indigo-200 hover:border-indigo-400 text-[#6366f1] hover:bg-indigo-50/60 font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Learn more</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
