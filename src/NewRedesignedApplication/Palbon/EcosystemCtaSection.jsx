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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-slate-900 relative" id="ecosystem-cta-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Gradient CTA Card */}
        <div className="bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 border border-sky-200/80 rounded-3xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-lg shadow-sky-100/50">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* Node 1: Users */}
            <div className="p-3 rounded-2xl bg-white/95 border border-sky-100 shadow-md absolute left-8 sm:left-14 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-[#0284c7]">
              <Users className="w-5 h-5" />
            </div>

            {/* Node 2: Analytics */}
            <div className="p-3 rounded-2xl bg-white/95 border border-sky-100 shadow-md absolute left-20 sm:left-32 bottom-8 hidden md:flex items-center justify-center text-[#0284c7]">
              <BarChart2 className="w-5 h-5" />
            </div>

            {/* Node 3: Pie Chart */}
            <div className="p-3 rounded-2xl bg-white/95 border border-sky-100 shadow-md absolute right-12 sm:right-20 top-10 hidden md:flex items-center justify-center text-[#0284c7]">
              <PieChart className="w-5 h-5" />
            </div>

            {/* Node 4: Database */}
            <div className="p-3 rounded-2xl bg-white/95 border border-sky-100 shadow-md absolute right-20 sm:right-32 bottom-8 hidden md:flex items-center justify-center text-[#0284c7]">
              <Database className="w-5 h-5" />
            </div>
          </div>

          {/* Center Card Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Top Chat Bubble Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 text-[#0284c7] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MessageSquare className="w-7 h-7 text-[#0284c7]" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight mb-4">
              Let's talk about your <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">ecosystem</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Connect with us one-on-one and map what fits best for your organization's unique operating model.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Talk to us</span>
              </button>

              <button
                onClick={() => onOpenSuiteModal ? onOpenSuiteModal() : navigate("/solutions")}
                className="bg-white hover:bg-slate-50 border border-slate-300 text-[#01182F] font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
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
