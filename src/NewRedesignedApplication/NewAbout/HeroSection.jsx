import React, { useState, useEffect, useRef } from 'react';

export default function LeadershipHero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const genericHeroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 relative overflow-hidden" id="about-hero">
      
      {/* Background Subtle Radial Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(2, 132, 199, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(2, 132, 199, 0.08) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card Container with Generic Corporate Image & Text Overlay */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end p-6 sm:p-10 lg:p-14 text-left border border-slate-200/80 group"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {/* Background High-Impact Generic Corporate Executive Office Photo */}
          <img
            src={genericHeroImage}
            alt="MultipliersKraft Corporate Architecture"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />

          {/* Dark Executive Overlay for Maximum Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#01182F] via-[#01182F]/75 to-transparent pointer-events-none" />

          {/* Content Overlay Box */}
          <div className="relative z-10 max-w-4xl space-y-4">
            
            {/* About Us Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-400/30 text-sky-300 text-xs font-mono font-extrabold tracking-widest uppercase font-poppins">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>ABOUT MULTIPLIERSKRAFT</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-[1.08]">
              Architecting Human Potential & <br />
              <span className="text-[#0284c7]">Enterprise Capability</span>
            </h1>

          </div>

        </div>

      </div>

    </section>
  );
}