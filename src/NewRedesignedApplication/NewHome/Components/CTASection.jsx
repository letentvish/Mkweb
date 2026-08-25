import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section-root" id="cta-section">
      
      {/* Main CTA Banner Box */}
      <div className="cta-banner-box">
        
        {/* Wavy Gradient Vector Background Lines */}
        <div className="cta-wavy-vectors">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
            <path d="M 0 100 Q 300 200, 600 100 T 1200 100" stroke="#6366f1" strokeWidth="2" />
            <path d="M 0 200 Q 300 300, 600 200 T 1200 200" stroke="#818cf8" strokeWidth="1.5" />
            <path d="M 0 300 Q 300 100, 600 300 T 1200 300" stroke="#4f46e5" strokeWidth="2" />
          </svg>
        </div>

        {/* Top-Right & Bottom-Right Dot Matrix */}
        <div className="cta-dot-matrix-tr">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="#a5b4fc">
            <circle cx="10" cy="10" r="2" /><circle cx="30" cy="10" r="2" /><circle cx="50" cy="10" r="2" /><circle cx="70" cy="10" r="2" />
            <circle cx="10" cy="30" r="2" /><circle cx="30" cy="30" r="2" /><circle cx="50" cy="30" r="2" /><circle cx="70" cy="30" r="2" />
            <circle cx="10" cy="50" r="2" /><circle cx="30" cy="50" r="2" /><circle cx="50" cy="50" r="2" /><circle cx="70" cy="50" r="2" />
          </svg>
        </div>
        <div className="cta-dot-matrix-br">
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
          className="cta-barchart-img"
        />

        {/* Right 3D Isometric Stack Platform Illustration */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/cta_3d_cube_stack.png"
          alt="Capability Stack Platform"
          className="cta-cube-img"
        />

        {/* Main Content Area */}
        <div className="cta-content-wrapper">
          
          <h2 className="cta-heading">
            Capability, multiplied
          </h2>

          <p className="cta-desc">
            Your strategy can be copied. Your funding can be matched.<br className="hidden sm:inline" />
            The capability inside your teams cannot.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="cta-btn-talk"
          >
            <span>Talk to Us</span>
          </motion.button>

        </div>

      </div>

    </section>
  );
}

