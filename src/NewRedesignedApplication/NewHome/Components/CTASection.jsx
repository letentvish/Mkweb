import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="cta-section">
      
      {/* Main CTA Banner Box */}
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-r from-[#0a0526] via-[#130a42] to-[#0a0526] p-10 md:p-16 lg:p-20 text-center border border-indigo-500/30 shadow-[0_20px_60px_rgba(19,10,66,0.5)] overflow-hidden">
        
        {/* Wavy Gradient Vector Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
            <path d="M 0 100 Q 300 200, 600 100 T 1200 100" stroke="#6366f1" strokeWidth="2" />
            <path d="M 0 200 Q 300 300, 600 200 T 1200 200" stroke="#818cf8" strokeWidth="1.5" />
            <path d="M 0 300 Q 300 100, 600 300 T 1200 300" stroke="#4f46e5" strokeWidth="2" />
          </svg>
        </div>

        {/* Top-Right & Bottom-Right Dot Matrix */}
        <div className="absolute top-6 right-10 opacity-30 pointer-events-none hidden md:block">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="#a5b4fc">
            <circle cx="10" cy="10" r="2" /><circle cx="30" cy="10" r="2" /><circle cx="50" cy="10" r="2" /><circle cx="70" cy="10" r="2" />
            <circle cx="10" cy="30" r="2" /><circle cx="30" cy="30" r="2" /><circle cx="50" cy="30" r="2" /><circle cx="70" cy="30" r="2" />
            <circle cx="10" cy="50" r="2" /><circle cx="30" cy="50" r="2" /><circle cx="50" cy="50" r="2" /><circle cx="70" cy="50" r="2" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-20 opacity-30 pointer-events-none hidden md:block">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="#a5b4fc">
            <circle cx="10" cy="10" r="2" /><circle cx="30" cy="10" r="2" /><circle cx="50" cy="10" r="2" /><circle cx="70" cy="10" r="2" />
            <circle cx="10" cy="30" r="2" /><circle cx="30" cy="30" r="2" /><circle cx="50" cy="30" r="2" /><circle cx="70" cy="30" r="2" />
            <circle cx="10" cy="50" r="2" /><circle cx="30" cy="50" r="2" /><circle cx="50" cy="50" r="2" /><circle cx="70" cy="50" r="2" />
          </svg>
        </div>

        {/* Left 3D Isometric Bar Chart Illustration */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/cta_3d_barchart.png"
          alt="Capability Bar Chart"
          className="absolute bottom-0 left-2 md:left-6 w-36 md:w-56 lg:w-64 object-contain pointer-events-none z-10 hidden sm:block drop-shadow-[0_10px_25px_rgba(79,70,229,0.4)]"
        />

        {/* Right 3D Isometric Stack Platform Illustration */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/cta_3d_cube_stack.png"
          alt="Capability Stack Platform"
          className="absolute bottom-0 right-2 md:right-6 w-36 md:w-56 lg:w-64 object-contain pointer-events-none z-10 hidden sm:block drop-shadow-[0_10px_25px_rgba(79,70,229,0.4)]"
        />

        {/* Main Content Area */}
        <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins text-white tracking-tight mb-4 drop-shadow-md">
            Capability, multiplied
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed mb-8 max-w-xl">
            Your strategy can be copied. Your funding can be matched.<br className="hidden sm:inline" />
            The capability inside your teams cannot.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-9 py-3.5 rounded-full font-bold font-poppins text-base shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Talk to Us</span>
          </motion.button>

        </div>

      </div>

    </section>
  );
}

