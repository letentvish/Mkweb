import React from "react";
import { Boxes, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function PalbonFeatureBar() {
  return (
    <section className="py-10 bg-white border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4 p-2">
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
              <Boxes className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Modular by Design</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Pick what you need. Add when you're ready.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Enterprise Grade</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Secure. Scalable. Always available.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">AI-Powered</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Intelligence that learns and adapts.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-[#0284c7] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-slate-900 mb-1">Future-Ready</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Built to evolve with your business.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
