import { useState, useEffect, useRef } from 'react';

export default function CompanyHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const expertisePillars = [
    "Academia",
    "HR & Talent",
    "Learning & Development",
    "Leadership Coaching",
    "Technology & AI"
  ];

  return (
    <div ref={ref} className="w-full py-20 lg:py-28 px-4 sm:px-8 bg-[#F8FAFC] relative overflow-hidden" id="company-identity">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.08) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Top Eyebrow Badge */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 font-poppins">
            OUR PURPOSE & IDENTITY
          </span>
        </div>

        {/* Main Section Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-tight"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'
          }}
        >
          Purpose, Passion & <span className="text-[#0284c7]">Performance</span>
        </h2>

        {/* Accent Divider */}
        <div 
          className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
          }}
        />

        {/* Main Center-Aligned Paragraph Content Requested by User */}
        <div
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-sky-100/50 relative overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s'
          }}
        >
          {/* Subtle Top Inner Line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#0284c7] to-transparent absolute top-0 left-0" />

          <p className="text-slate-700 text-lg sm:text-xl lg:text-2xl leading-relaxed font-normal text-center max-w-3xl mx-auto">
            <span className="font-poppins font-extrabold text-[#01182F]">Purpose, Passion, and Perform</span> — that's how we define our identity. We are a group of professionals with core expertise in <span className="text-[#0284c7] font-semibold">Academia, HR, Talent & Learning, Coaching, and Technology</span>.
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal text-center max-w-3xl mx-auto mt-6 pt-6 border-t border-slate-100">
            Our commitment is to remain the most trusted partner in the journey of organization and individual growth by delivering unique, diverse expertise in driving success today and preparing you for tomorrow.
          </p>

          {/* Core Expertise Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 pt-4">
            {expertisePillars.map((pillar, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 text-xs sm:text-sm font-poppins font-bold tracking-wide shadow-xs"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}