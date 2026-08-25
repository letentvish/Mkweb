import React, { useState, useEffect } from "react";
import { Star, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./IntroVideo.css";

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
    <section className="intro-video-root" id="testimonial-section">
      <div className="intro-video-grid">
        
        {/* Left Column: Video Spotlight Card */}
        <div className="intro-spotlight-card">
          <div className="intro-video-thumbnail-box">
            
            {/* Background Pattern/Thumbnail */}
            <div className="intro-video-gradient-overlay" />
            
            {/* Decorative Backdrop Glass Square */}
            <div className="intro-video-backdrop-glass" />

            {/* Video Preview Image */}
            <img
              src="/video_testimonial_cover.png"
              alt="Customer Success Video Cover"
              className="intro-video-cover-img"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="intro-video-dark-shade" />

            {/* Interactive Play Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              aria-label="Play Customer Success Video"
              className="intro-play-btn"
            >
              <Play className="w-8 h-8 text-[#4f46e5] fill-current translate-x-0.5" />
            </motion.button>
          </div>
        </div>

        {/* Right Column: Testimonial Content */}
        <div className="intro-testimonial-col">
          
          {/* 5 Star Rating */}
          <div className="intro-star-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-[#4f46e5]" />
            ))}
          </div>

          {/* Quote Statement */}
          <blockquote>
            <p className="intro-quote-text">
              "MultipliersKraft didn't just hand us a strategy. They built the capability inside our people so the results became our own."
            </p>
          </blockquote>

          {/* Attribution Info */}
          <div className="intro-author-row">
            <div className="flex flex-col">
              <span className="intro-author-name">Arun Mehta</span>
              <span className="intro-author-role">CEO, NeoLink</span>
            </div>
            
            <div aria-hidden="true" className="intro-divider-line" />
            
            <div className="intro-partner-badge">
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
            className="intro-modal-backdrop"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="intro-modal-box"
            >
              <button
                onClick={() => setIsPlaying(false)}
                aria-label="Close Video"
                className="intro-close-btn"
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


