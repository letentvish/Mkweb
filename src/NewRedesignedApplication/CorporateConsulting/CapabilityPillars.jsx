import React, { useState, useEffect, useRef } from "react";
import { Users, RefreshCw, BarChart3, GraduationCap, Compass, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CapabilityPillars.css";

export default function CapabilityPillars() {
  const navigate = useNavigate();
  const [version, setVersion] = useState("v2"); // "v1" or "v2"
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const pillarRefs = useRef([]);

  const servicePillars = [
    {
      step: "01",
      pillarTag: "PILLAR 01",
      icon: <Users style={{ width: 28, height: 28 }} />,
      title: "Organisation & Leadership Development",
      subtitle: "Change people choose, not change they survive.",
      description: "We re-architect how the organisation works, decides, and adapts — and bring people along with it, so adoption isn't an afterthought but the design.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "02",
      pillarTag: "PILLAR 02",
      icon: <RefreshCw style={{ width: 28, height: 28 }} />,
      title: "Culture Transformation and Change Management",
      subtitle: "Behavioral acceleration and organizational readiness.",
      description: "Embedding sustainable behavioral change, operational resilience, and agility through proven change management frameworks.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "03",
      pillarTag: "PILLAR 03",
      icon: <BarChart3 style={{ width: 28, height: 28 }} />,
      title: "Talent and Performance Architecture",
      subtitle: "Workforce optimization and KPI alignment.",
      description: "Redesigning competency frameworks, performance feedback loops, and career pathways to maximize human capital output.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "04",
      pillarTag: "PILLAR 04",
      icon: <GraduationCap style={{ width: 28, height: 28 }} />,
      title: "AI LXP and Learning Services",
      subtitle: "Continuous capability and skill telemetry.",
      description: "Deploying personalized learning journeys and AI-powered skill telemetry to continuously upgrade workforce competencies.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    },
    {
      step: "05",
      pillarTag: "PILLAR 05",
      icon: <Compass style={{ width: 28, height: 28 }} />,
      title: "Strategic Advisory and Capability Design",
      subtitle: "Operating model and architecture.",
      description: "Structuring enterprise operating models to eliminate organizational friction, enhance data velocity, and scale execution.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Scroll observer to trigger content zoom in Version 2
  useEffect(() => {
    if (version !== "v2") return;

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index)) {
            setActivePillarIndex(index);
          }
        }
      });
    }, observerOptions);

    pillarRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [version]);

  return (
    <section className="cc-pillars-section" id="capability-pillars">
      
      {/* Background Radial Pattern */}
      <div className="cc-why-pattern" />

      <div className="cc-pillars-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fixed Sticky Section Info Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6 text-left py-4 z-20">
            
            <div className="flex items-center gap-3">
              <p className="cc-why-tag">
                JOURNEYS
              </p>
            </div>

            {/* Main Title */}
            <h2 className="cc-why-title" style={{ fontSize: '3rem', lineHeight: 1.08 }}>
              Five ways we build lasting <span style={{ color: '#0284c7' }}>capability</span>
            </h2>

            <div className="cc-why-divider" style={{ marginLeft: 0 }} />

            <p className="cc-why-intro" style={{ marginLeft: 0, fontSize: '1.125rem' }}>
              We don't deliver one-off training. We design integrated capability systems tailored to your strategy, leaders, and operating rhythm.
            </p>

            {/* Version Toggle Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setVersion("v2")}
                className={`px-4 py-2 text-xs font-poppins font-extrabold rounded-full transition-all cursor-pointer ${
                  version === "v2"
                    ? "bg-[#0284c7] text-white shadow-md shadow-sky-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Immersive View
              </button>

              <button
                onClick={() => setVersion("v1")}
                className={`px-4 py-2 text-xs font-poppins font-extrabold rounded-full transition-all cursor-pointer ${
                  version === "v1"
                    ? "bg-[#0284c7] text-white shadow-md shadow-sky-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Grid View
              </button>
            </div>

            {/* Bottom Strategic Action CTA */}
            <div className="pt-4">
              <button
                onClick={() => navigate("/contact")}
                className="cc-hero-btn-primary"
                style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
              >
                <span>Discuss Your Capability Roadmap</span>
                <ArrowRight style={{ width: 16, height: 16, marginLeft: '0.5rem' }} />
              </button>
            </div>

          </div>

          {/* Right Column: Version 1 (Grid View) or Version 2 (Immersive Vertical Zoom Layout) */}
          <div className="lg:col-span-7 text-left space-y-12">
            
            {/* ================= VERSION 1: ELEGANT GRID CARDS ================= */}
            {version === "v1" && (
              <div className="grid grid-cols-1 gap-8">
                {servicePillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="cc-pillar-card"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                        {pillar.icon}
                      </div>
                      <span className="font-mono font-extrabold text-xs text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        {pillar.pillarTag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-poppins font-extrabold text-[#01182F] mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#0284c7] text-sm font-semibold mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/60 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ================= VERSION 2: IMMERSIVE SCROLL ZOOM & FOCUS ================= */}
            {version === "v2" && (
              <div className="space-y-16">
                {servicePillars.map((pillar, idx) => {
                  const isActive = activePillarIndex === idx;

                  return (
                    <div
                      key={idx}
                      data-index={idx}
                      ref={(el) => (pillarRefs.current[idx] = el)}
                      className={`transition-all duration-700 ease-out bg-white rounded-3xl p-6 sm:p-10 border relative overflow-hidden ${
                        isActive
                          ? "shadow-2xl shadow-sky-200/60 border-sky-400 scale-[1.02] opacity-100 ring-2 ring-sky-400/30"
                          : "shadow-md border-slate-200/80 scale-95 opacity-60 hover:opacity-90"
                      }`}
                    >
                      {/* Top Ribbon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                            isActive ? "bg-[#0284c7] text-white shadow-lg shadow-sky-500/30" : "bg-sky-50 text-[#0284c7]"
                          }`}>
                            {pillar.icon}
                          </div>
                          <span className="font-mono font-extrabold text-xs text-[#0284c7] uppercase tracking-wider font-poppins">
                            {pillar.pillarTag}
                          </span>
                        </div>
                        <span className="text-3xl font-mono font-extrabold text-slate-300">
                          {pillar.step}
                        </span>
                      </div>

                      {/* Header Info */}
                      <h3 className={`text-2xl sm:text-3xl font-poppins font-extrabold mb-3 leading-tight transition-colors duration-500 ${
                        isActive ? "text-[#01182F]" : "text-slate-800"
                      }`}>
                        {pillar.title}
                      </h3>

                      <p className="text-[#0284c7] text-sm sm:text-base font-bold mb-4 font-poppins">
                        {pillar.subtitle}
                      </p>

                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
                        {pillar.description}
                      </p>

                      {/* Image Frame with Dynamic Scale */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg group">
                        <img 
                          src={pillar.image} 
                          alt={pillar.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 ${
                            isActive ? "scale-105" : "scale-100"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/70 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-200">
                            CAPABILITY MATRIX
                          </span>
                          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}
