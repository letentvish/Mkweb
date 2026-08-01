import React from 'react';
import mileLogo from "../Assets/MileLogo.png";

const Preloader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spinClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes spinCounterClockwise {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.35;
              transform: scale(0.95);
            }
            50% {
              opacity: 0.85;
              transform: scale(1.08);
            }
          }

          @keyframes logoFloat {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 16px rgba(2, 132, 199, 0.5)); }
            50% { transform: scale(1.06); filter: drop-shadow(0 0 28px rgba(99, 102, 241, 0.8)); }
          }

          @keyframes shimmerBar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes textBlink {
            0%, 100% { opacity: 0.95; }
            50% { opacity: 0.45; }
          }

          .orbit-ring-outer {
            animation: spinClockwise 3.2s linear infinite;
          }

          .orbit-ring-inner {
            animation: spinCounterClockwise 2.4s linear infinite;
          }

          .pulse-core {
            animation: pulseGlow 2.5s ease-in-out infinite;
          }

          .logo-animated {
            animation: logoFloat 3s ease-in-out infinite;
          }

          .progress-shimmer {
            animation: shimmerBar 1.6s ease-in-out infinite;
          }

          .telemetry-blink {
            animation: textBlink 1.4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="fixed inset-0 bg-[#01182F] z-[9999] flex flex-col items-center justify-center overflow-hidden font-sans select-none">
        
        {/* Background Ambient Glow & Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.22)_0%,rgba(1,24,47,0.98)_70%)] pointer-events-none" />
        
        {/* Subtle Tech Dot Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
            <pattern id="loader-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0284c7" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#loader-grid)" />
          </svg>
        </div>

        {/* Central Animated Loader Orb */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          
          {/* Ambient Glowing Core */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-[#0284c7]/35 via-[#6366f1]/25 to-transparent blur-xl pulse-core" />

          {/* Outer Orbital Ring 1 (Cyan Gradient) */}
          <div className="absolute inset-0 rounded-full border border-sky-500/20 orbit-ring-outer">
            <div className="w-full h-full rounded-full border-t-2 border-r-2 border-[#0284c7] shadow-[0_0_22px_#0284c7]" />
          </div>

          {/* Inner Orbital Ring 2 (Indigo/Purple Gradient) */}
          <div className="absolute inset-3.5 rounded-full border border-indigo-500/20 orbit-ring-inner">
            <div className="w-full h-full rounded-full border-b-2 border-l-2 border-[#6366f1] shadow-[0_0_22px_#6366f1]" />
          </div>

          {/* Innermost Tech Rim Ring */}
          <div className="absolute inset-7 rounded-full border border-slate-700/60 flex items-center justify-center">
            <div className="w-full h-full rounded-full border-t border-b border-sky-300/40 animate-spin" style={{ animationDuration: '6s' }} />
          </div>

          {/* Centered Logo */}
          <div className="relative z-10 w-20 h-20 flex items-center justify-center logo-animated">
            <img
              src={mileLogo}
              alt="Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(2,132,199,0.6)]"
            />
          </div>
        </div>

        {/* Telemetry Status Indicator */}
        <div className="relative z-10 mt-10 flex flex-col items-center gap-3">
          
          {/* Progress Shimmer Bar */}
          <div className="w-52 h-1.5 bg-slate-800/90 rounded-full overflow-hidden border border-slate-700/60 shadow-inner">
            <div className="w-full h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#6366f1] progress-shimmer rounded-full" />
          </div>

          {/* Status Text */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-400 uppercase telemetry-blink">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-ping" />
            <span>INITIALIZING SYSTEM...</span>
          </div>

          {/* Subtext */}
          <span className="text-[10px] font-sans font-semibold tracking-widest text-slate-400 uppercase">
            MultipliersKraft Enterprise Ecosystem
          </span>
        </div>

      </div>
    </>
  );
};

export default Preloader;
