import React from "react";
import { Users, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PalbonClaritySection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-[#101328] text-white relative overflow-hidden border-b border-indigo-950/80" id="clarity-section">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
              <span>CLARITY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-[1.12]">
              A single source <br />
              <span className="text-indigo-400">of truth</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              PALBON unifies scattered data, your people, your processes, and your tech. It is one ecosystem where detail and depth drive better foresight. No more handoffs, handovers, or guesswork.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="text-white hover:text-indigo-300 font-bold py-3.5 inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>

            {/* Bottom Glass Metrics Pill */}
            <div className="mt-8 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 grid grid-cols-3 gap-4 text-left shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">25K+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Active Users</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">99.9%</p>
                  <p className="text-[11px] text-slate-400 font-medium">Data Integrity</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-poppins font-extrabold text-xl sm:text-2xl text-white">10M+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Records Unified</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Full Scale Graphic, No Constraints */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative overflow-visible">
            <img 
              src="/clarity.png" 
              alt="PALBON Single Source of Truth Clarity" 
              className="w-[130%] lg:w-[150%] h-auto object-contain drop-shadow-2xl"
              style={{ maxHeight: 'none', transform: 'scale(1.25)', transformOrigin: 'center center' }}
            />
          </div>

        </div>

      </div>

    </section>
  );
}
