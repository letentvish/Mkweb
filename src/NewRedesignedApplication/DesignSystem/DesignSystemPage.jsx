import React, { useState } from "react";
import { 
  Boxes, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  Compass, 
  ShieldCheck,
  Code,
  Palette,
  Type,
  Layers,
  MousePointer
} from "lucide-react";

export default function DesignSystemPage() {
  const [copiedToken, setCopiedToken] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colors = [
    { name: "Primary Navy", hex: "#01182F", bgClass: "bg-[#01182F]", textClass: "text-white", usage: "Main dark text, primary dark hero background & headlines" },
    { name: "Sky Blue Primary", hex: "#0284c7", bgClass: "bg-[#0284c7]", textClass: "text-white", usage: "Primary CTAs, active indicators, status badges, links" },
    { name: "Sky Blue Hover", hex: "#0369a1", bgClass: "bg-[#0369a1]", textClass: "text-white", usage: "Hover states for primary buttons and interactive links" },
    { name: "Indigo Accent", hex: "#6366f1", bgClass: "bg-[#6366f1]", textClass: "text-white", usage: "Secondary accent, sub-headings, gradient highlights" },
    { name: "Light Page Slate", hex: "#F8FAFC", bgClass: "bg-[#F8FAFC] border border-slate-200", textClass: "text-slate-900", usage: "Standard clean surface background for content sections" },
    { name: "Dark Telemetry", hex: "#101328", bgClass: "bg-[#101328]", textClass: "text-white", usage: "Dark telemetry, metrics, and technical showcase sections" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-x-hidden pt-16">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <pattern id="ds-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#94A3B8" opacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#ds-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-[#01182F] text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>DEVELOPER REFERENCE & UI SPECIFICATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-[1.12] mb-4">
            Master <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Design System</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Official design tokens, typography scales, section badges, card geometry, and button components for continuous design system application.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. COLOR TOKENS */}
        <section id="colors">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <Palette className="w-6 h-6 text-[#0284c7]" />
            <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F]">1. Color Palette Tokens</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-md flex flex-col justify-between">
                <div>
                  <div className={`h-24 w-full rounded-2xl ${c.bgClass} ${c.textClass} flex items-end p-4 mb-4 shadow-inner font-mono font-bold text-sm`}>
                    {c.hex}
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-[#01182F] mb-1">{c.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{c.usage}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(c.hex, `color-${idx}`)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedToken === `color-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedToken === `color-${idx}` ? "Copied!" : `Copy ${c.hex}`}</span>
                </button>
              </div>
            ))}
          </div>
        </section>


        {/* 2. TYPOGRAPHY SCALES */}
        <section id="typography">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <Type className="w-6 h-6 text-[#0284c7]" />
            <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F]">2. Typography Scales</h2>
          </div>

          <div className="bg-white border border-indigo-200/90 rounded-3xl p-8 shadow-lg shadow-indigo-100/50 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">h1.font-poppins.font-extrabold.text-4xl.sm:text-5xl.lg:text-6xl</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.12]">
                Headline 1 — Enterprise System
              </h1>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-400 block mb-1">Gradient Headline Clip: bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-[1.15]">
                Headline 2 — <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">Accelerate growth</span>
              </h2>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-400 block mb-1">h3.font-poppins.font-extrabold.text-2xl.sm:text-3xl</span>
              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F] tracking-tight">
                Headline 3 — Modular Capability Architecture
              </h3>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-400 block mb-1">Lead Subtitle: text-slate-600.text-base.sm:text-lg.font-normal</span>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
                Lead paragraph text used under main section headings. Unify your people, processes, data, and technology on one intelligent platform.
              </p>
            </div>
          </div>
        </section>


        {/* 3. SECTION BADGES & STATUS INDICATORS */}
        <section id="badges">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <Sparkles className="w-6 h-6 text-[#0284c7]" />
            <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F]">3. Section Status Badges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-md text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-[#01182F]">Light Section Badge (Primary)</h3>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                  <span>UNIFIED. INTELLIGENT. IMPACTFUL.</span>
                </div>
              </div>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs overflow-x-auto font-mono">
{`<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
  <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
  <span>SECTION TITLE</span>
</div>`}
              </pre>
            </div>

            <div className="bg-[#101328] border border-indigo-950/80 rounded-3xl p-8 shadow-xl text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-white">Dark Section Badge</h3>
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
                  <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                  <span>DARK TELEMETRY</span>
                </div>
              </div>
              <pre className="bg-slate-950 text-slate-300 p-4 rounded-2xl text-xs overflow-x-auto font-mono border border-white/10">
{`<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-bold tracking-wider uppercase font-poppins">
  <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
  <span>DARK TELEMETRY</span>
</div>`}
              </pre>
            </div>
          </div>
        </section>


        {/* 4. BUTTONS & CTA SPECS */}
        <section id="buttons">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <MousePointer className="w-6 h-6 text-[#0284c7]" />
            <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F]">4. Button & CTA System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Primary Sky Blue Pill Button */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-md text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-[#01182F]">Primary Sky Blue Pill Button</h3>
              <div>
                <button className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm">
                  <Boxes className="w-4 h-4" />
                  <span>Configure PALBON Suite</span>
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs overflow-x-auto font-mono">
{`<button className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-sm">
  <Boxes className="w-4 h-4" />
  <span>Button Text</span>
</button>`}
              </pre>
            </div>

            {/* Secondary White Pill Button */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-md text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-[#01182F]">Secondary White Pill Button</h3>
              <div>
                <button className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm">
                  <Play className="w-3.5 h-3.5 text-[#0284c7] fill-current" />
                  <span>Watch Overview</span>
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs overflow-x-auto font-mono">
{`<button className="bg-white hover:bg-slate-50 text-[#01182F] border border-slate-300 font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 text-sm">
  <span>Button Text</span>
</button>`}
              </pre>
            </div>

            {/* Secondary Arrow Link */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-md text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-[#01182F]">Secondary Arrow Link CTA</h3>
              <div>
                <button className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group">
                  <span>Talk to Sales</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs overflow-x-auto font-mono">
{`<button className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group">
  <span>Talk to Sales</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>`}
              </pre>
            </div>

            {/* Dark Banner Glowing Pill */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md text-left space-y-4">
              <h3 className="font-poppins font-bold text-lg text-white">Glowing Banner Pill CTA</h3>
              <div>
                <div className="inline-flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-xl cursor-pointer">
                  <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#070c1e] text-white">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-100">40 Connected Modules</span>
                  </div>
                </div>
              </div>
              <pre className="bg-slate-950 text-slate-300 p-4 rounded-2xl text-xs overflow-x-auto font-mono border border-white/10">
{`<div className="inline-flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-xl cursor-pointer">
  <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#070c1e] text-white">
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
    </span>
    <span className="text-xs font-bold">Badge Text</span>
  </div>
</div>`}
              </pre>
            </div>

          </div>
        </section>


        {/* 5. CARDS & CONTAINER GEOMETRY */}
        <section id="cards">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200">
            <Layers className="w-6 h-6 text-[#0284c7]" />
            <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-[#01182F]">5. Enterprise Cards & Geometry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Standard Enterprise Card */}
            <div className="bg-white border border-sky-200/80 rounded-3xl p-8 shadow-lg shadow-sky-100/50 text-left space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0284c7] tracking-widest uppercase font-poppins block">ENTERPRISE GEOMETRY</span>
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-[#01182F]">rounded-3xl (24px radius) Card</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Standard card geometry used across all feature blocks, solutions, and consulting modules.
              </p>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-2xl text-xs overflow-x-auto font-mono">
{`<div className="bg-white border border-sky-200/80 rounded-3xl p-8 shadow-lg shadow-sky-100/50">
  {/* Card Content */}
</div>`}
              </pre>
            </div>

            {/* Dark Telemetry Card */}
            <div className="bg-[#101328] border border-indigo-950/80 rounded-3xl p-8 shadow-2xl text-left space-y-4">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 inline-block">
                <Compass className="w-6 h-6" />
              </div>
              <p className="font-poppins font-extrabold text-4xl text-white tracking-tight">99.9%</p>
              <h3 className="font-poppins font-bold text-base text-indigo-200">Dark Telemetry Container</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Glassmorphic dark card used in metric showcases and deep technical architecture blocks.
              </p>
              <pre className="bg-slate-950 text-slate-300 p-4 rounded-2xl text-xs overflow-x-auto font-mono border border-white/10">
{`<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
  {/* Dark Metric Content */}
</div>`}
              </pre>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
