import { useState, useEffect, useRef } from 'react';
import mainImage from '../../Assets/NewAbout/mainImage.webp';

export default function LeadershipHero() {
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

  return (
    <div ref={ref} className="hero-section">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h1
          className="hero-title"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          Empowering Futures with
          <br />
          Cutting-Edge Skills for
          <br />
          Tomorrow's Leaders
        </h1>

        {/* Hero Image */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl hero-image-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
            transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
          }}
        >
          <img
            src={mainImage}
            alt="Business professionals meeting in modern office with city skyline view"
            className="w-full h-auto object-cover"
          />
          {/* Optional overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .hero-image-container {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-image-container:hover {
          transform: translateY(-4px) scale(1.01) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-title,
          .hero-image-container {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .hero-image-container:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}