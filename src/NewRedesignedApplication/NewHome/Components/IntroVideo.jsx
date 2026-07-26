import React, { useState, useEffect } from "react";
import { Star, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_ID = "00VR5u-R6dY";

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/60" id="testimonial-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Video Spotlight Card */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
          <div className="w-full h-full bg-[#ede9fe] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden shadow-lg border border-indigo-100">
            
            {/* Background Pattern/Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/20 to-indigo-950/30 z-0" />
            
            {/* Decorative Backdrop Glass Square */}
            <div className="absolute w-1/3 aspect-square bg-white/40 rounded-3xl backdrop-blur-md pointer-events-none z-0" />

            {/* Video Preview Image */}
            <img
              src="/video_testimonial_cover.png"
              alt="Customer Success Video Cover"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent z-0 pointer-events-none" />

            {/* Interactive Play Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              aria-label="Play Customer Success Video"
              className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group cursor-pointer"
            >
              <Play className="w-8 h-8 text-[#4f46e5] fill-current translate-x-0.5 group-hover:text-indigo-600 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Right Column: Testimonial Content */}
        <div className="flex flex-col justify-center">
          
          {/* 5 Star Rating */}
          <div className="flex space-x-1 mb-8 text-[#4f46e5]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-[#4f46e5]" />
            ))}
          </div>

          {/* Quote Statement */}
          <blockquote className="mb-10">
            <p className="text-3xl md:text-4xl font-bold font-poppins text-[#1e1b4b] leading-tight tracking-tight">
              "MultipliersKraft didn't just hand us a strategy. They built the capability inside our people so the results became our own."
            </p>
          </blockquote>

          {/* Attribution Info */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col">
              <span className="text-[#6366f1] font-bold text-lg font-poppins">Arun Mehta</span>
              <span className="text-[#64748b] text-base font-medium">CEO, NeoLink</span>
            </div>
            
            <div aria-hidden="true" className="h-10 w-px bg-slate-300" />
            
            <div className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-400">
              Enterprise Client Partner
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Customer Success Video Modal"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setIsPlaying(false)}
                aria-label="Close Video"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer focus:ring-2 focus:ring-white"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="MultipliersKraft Customer Video"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


