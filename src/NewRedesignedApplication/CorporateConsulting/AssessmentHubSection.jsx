import React from "react";
import { Rocket } from "lucide-react";

export default function AssessmentHubSection() {
  return (
    <section 
      className="py-20 lg:py-28 text-slate-900 relative overflow-hidden border-b border-slate-200/80 bg-white" 
      id="assessment-hub"
    >
      {/* Background Graphic Image (bgasses.webp) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bgasses.webp')"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[480px]">
          
          {/* LEFT COLUMN: Text & Info Column */}
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

          {/* RIGHT COLUMN: Empty space allowing bgasses.webp background to show cleanly */}
          <div className="hidden lg:block lg:col-span-7" />

        </div>
      </div>
    </section>
  );
}
