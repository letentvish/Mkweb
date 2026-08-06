import React from "react";
import ImageLeft from "../../Assets/CorporateConsulting/ImageLeft.jpg";
import ImageRight from "../../Assets/CorporateConsulting/ImageRight.jpg";
import ImageLeft1 from "../../Assets/CorporateConsulting/ImageLeft1.jpg";
import ImageRight1 from "../../Assets/CorporateConsulting/ImageRight1.jpg";
import MainImage from "../../Assets/CorporateConsulting/MainImage.webp";
import Frame247 from "../../Assets/Frame247.jpg";
import Frame53 from "../../Assets/Frame53.jpg";
import Frame54 from "../../Assets/Frame54.jpg";

export default function GalleryShowcase() {
  const topGallery = [
    {
      title: "Executive Leadership Retreat",
      category: "LEADERSHIP LABS",
      image: ImageLeft,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      title: "Corporate Capability Summit",
      category: "ENTERPRISE FORUM",
      image: Frame53,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      title: "Interactive Strategy Simulation",
      category: "CAPABILITY DESIGN",
      image: Frame54,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      title: "Culture & Alignment Workshop",
      category: "CULTURE TRANSFORMATION",
      image: ImageRight,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    }
  ];

  const bottomGallery = [
    {
      title: "Leadership Masterclass Session",
      category: "MASTERCLASS",
      image: ImageLeft1,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-2"
    },
    {
      title: "Enterprise Advisory Network",
      category: "STRATEGIC ADVISORY",
      image: MainImage,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    },
    {
      title: "AI Skill Telemetry Lab",
      category: "TECHNOLOGY ENABLED",
      image: Frame247,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4"
    },
    {
      title: "Global Partner Summit",
      category: "EXECUTIVE NETWORK",
      image: ImageRight1,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-3"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#01182F] text-white relative overflow-hidden border-b border-indigo-950/80" id="mkraft-gallery">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <pattern id="gallery-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#38BDF8" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-mono font-extrabold tracking-widest uppercase font-poppins">
            THE MKRAFT EXPERIENCE
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-tight">
            The MultipliersKraft Life
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Connect with like-minded corporate leaders and enjoy the capability transformation process.
          </p>
        </header>

        {/* 8-Photo Gallery Grid */}
        <div className="space-y-6">
          
          {/* Top Row Gallery */}
          <div className="grid grid-cols-12 gap-5">
            {topGallery.map((item, idx) => (
              <div 
                key={idx}
                className={`${item.colSpan} relative rounded-3xl overflow-hidden shadow-xl border border-sky-400/20 group h-64 sm:h-72 cursor-pointer`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/90 via-[#01182F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-mono font-extrabold text-sky-400 tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row Gallery */}
          <div className="grid grid-cols-12 gap-5">
            {bottomGallery.map((item, idx) => (
              <div 
                key={idx}
                className={`${item.colSpan} relative rounded-3xl overflow-hidden shadow-xl border border-sky-400/20 group h-64 sm:h-72 cursor-pointer`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01182F]/90 via-[#01182F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-mono font-extrabold text-sky-400 tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
