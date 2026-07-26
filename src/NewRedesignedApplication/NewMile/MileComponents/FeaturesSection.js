import React, { useState, useEffect } from "react";
import { CiMobile2 } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturesSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => observer.disconnect();
  }, []);
  
  const features = [
    {
      title: "Course and Content Management",
      description:
        "Create, deliver, and organize courses with ease. Upload files in any format and integrate existing courses into a marketplace for learning and growth.",
      icon: <FiBookOpen size={40} />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    },
    {
      title: "Bring Your Own Learning",
      description:
        "Personalize your learning by creating and uploading your own content to the platform.",
      icon: <CiPlay1 size={40} />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    },
    {
      title: "Assessment and Evaluation",
      description:
        "Design quizzes, exams, and projects with automated grading and feedback mechanisms to track progress.",
      icon: <IoMdCheckboxOutline size={40} />,
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
    },
    {
      title: "Social Learning and Gamification",
      description:
        "Engage with peers and instructors through chat and collaboration tools, plus enjoy a gamified experience to enhance learning.",
      icon: <BiComment size={40} />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    },
    {
      title: "Mobile Learning and Personalization",
      description:
        "Access MILE on the go with mobile-optimized learning and personalized recommendations tailored to your needs.",
      icon: <CiMobile2 size={40} />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    },
  ];


  const colors = {
    background: isDarkMode ? "#000000" : "#F3F3F3",
    titleColor: isDarkMode ? "#FFFFFF" : "#111827",
    descColor: isDarkMode ? "#FFFFFF" : "#111827",
    cardBg: isDarkMode ? "#1D242D" : "#FFFFFF",
    cardBorder: isDarkMode ? "#2a3a4a" : "#E5E7EB",
    cardBorderActive: "#FF6B35",
    iconBg: isDarkMode ? "#252B45" : "#FFFFFF",
    iconBorder: isDarkMode ? "#3a4a5a" : "#FF6B35",
    iconColor: isDarkMode ? "#FFFFFF" : "#FF6B35",
    accentColor: "#FF6B35",
    overlayGradient: isDarkMode
      ? "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)"
      : "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
    glowColor1: isDarkMode ? "rgba(255, 107, 53, 0.1)" : "rgba(255, 107, 53, 0.05)",
    glowColor2: isDarkMode ? "rgba(255, 193, 7, 0.1)" : "rgba(255, 107, 53, 0.05)",
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, features.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  // Calculate 3D positioning for cards - CURVED LAYOUT
  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const totalCards = features.length;
    
    // Normalize the difference for circular navigation
    let normalizedDiff = diff;
    if (Math.abs(diff) > 2) {
      if (diff > 0) {
        normalizedDiff = diff - totalCards;
      } else {
        normalizedDiff = diff + totalCards;
      }
    }

    // Only show 5 cards at a time (2 on each side + center)
    if (Math.abs(normalizedDiff) > 2) {
      return {
        opacity: 0,
        pointerEvents: 'none',
        transform: 'scale(0)',
        display: 'none',
      };
    }

    const isCenter = normalizedDiff === 0;
    
    // Enhanced curved positioning
    const horizontalSpacing = 340; // Distance between cards
    const baseX = normalizedDiff * horizontalSpacing;
    
    // Create arc/curve effect - cards rise up as they move away from center
    const arcHeight = Math.abs(normalizedDiff) * 40;
    const baseY = arcHeight;
    
    // Rotation for 3D effect
    const rotateY = normalizedDiff * 25;
    
    // Scale - center card is largest
    const scale = isCenter ? 1 : 0.75 - Math.abs(normalizedDiff) * 0.05;
    
    // Opacity - fade out cards further from center
    const opacity = isCenter ? 1 : 0.5 - Math.abs(normalizedDiff) * 0.1;
    
    // Z-index for proper stacking
    const zIndex = 10 - Math.abs(normalizedDiff);

    return {
      transform: `
        translateX(${baseX}px) 
        translateY(${baseY}px) 
        translateZ(${isCenter ? 100 : -50}px)
        rotateY(${rotateY}deg) 
        scale(${scale})
      `,
      opacity,
      zIndex,
      filter: isCenter ? 'brightness(1)' : 'brightness(0.7)',
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      pointerEvents: 'auto',
    };
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .bg-animated-gradient {
          background: ${colors.background};
        }

        .carousel-3d {
          perspective: 2000px;
          perspective-origin: 50% 50%;
        }
        
        .feature-card-3d {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
        
        .feature-card-3d:hover {
          filter: brightness(1.1) !important;
        }

        .nav-button-glow {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 0 ${colors.accentColor}00;
        }
        
        .nav-button-glow:hover {
          transform: scale(1.15);
          box-shadow: 0 0 25px ${colors.accentColor}99;
        }

        .dot-indicator {
          transition: all 0.3s ease;
        }

        .dot-indicator:hover {
          transform: scale(1.3);
        }

        .card-shadow {
          box-shadow: ${isDarkMode 
            ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 193, 7, 0.1)'
            : '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(255, 107, 53, 0.1)'
          };
        }
      `}</style>

      <section className="bg-animated-gradient py-10 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: colors.glowColor1, opacity: 1 }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: colors.glowColor2, opacity: 1 }}
          ></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ 
                color: colors.titleColor,
                textShadow: isDarkMode ? '0 0 30px rgba(255, 193, 7, 0.2)' : '0 0 30px rgba(255, 107, 53, 0.2)'
              }}
            >
              Key Features
            </h2>
          </div>

          {/* 3D Carousel */}
          <div className="carousel-3d relative h-[550px] md:h-[600px] flex items-center justify-center mb-12">
            <div className="relative w-full h-full flex items-center justify-center">
              {features.map((feature, index) => {
                const cardStyle = getCardStyle(index);
                const isActive = index === currentIndex;

                return (
                  <div
                    key={index}
                    className="feature-card-3d absolute cursor-pointer"
                    style={{
                      ...cardStyle,
                      width: '400px',
                      maxWidth: '90vw',
                    }}
                    onClick={() => handleDotClick(index)}
                  >
                    <div
                      className="card-shadow w-full h-full rounded-2xl overflow-hidden"
                      style={{
                        background: colors.cardBg,
                        borderRadius: '20px',
                        height: '480px',
                        border: `2px solid ${isActive ? colors.cardBorderActive : colors.cardBorder}`,
                      }}
                    >
                      {/* Image Section */}
                      <div className="relative h-[260px] overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div 
                          className="absolute inset-0"
                          style={{ background: colors.overlayGradient }}
                        ></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                          <div 
                            className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
                            style={{
                              background: colors.iconBg,
                              border: `3px solid ${colors.iconBorder}`,
                              color: colors.iconColor,
                            }}
                          >
                            {feature.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 pt-10 text-center">
                        <h3 
                          className="text-xl md:text-2xl font-bold mb-3 leading-tight px-2"
                          style={{ color: colors.titleColor }}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-sm md:text-base leading-relaxed px-2"
                          style={{ color: colors.descColor, opacity: 0.9 }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="nav-button-glow w-14 h-14 rounded-full flex items-center justify-center transition-all"
              style={{
                border: `2px solid ${colors.accentColor}`,
                color: colors.accentColor,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentColor;
                e.currentTarget.style.color = isDarkMode ? '#1a1d2e' : '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.accentColor;
              }}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="dot-indicator rounded-full transition-all duration-300"
                  style={{
                    width: index === currentIndex ? '40px' : '12px',
                    height: '12px',
                    backgroundColor: index === currentIndex 
                      ? colors.accentColor 
                      : isDarkMode ? '#4A4A4A' : '#D0D0D0',
                  }}
                  aria-label={`Feature ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="nav-button-glow w-14 h-14 rounded-full flex items-center justify-center transition-all"
              style={{
                border: `2px solid ${colors.accentColor}`,
                color: colors.accentColor,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentColor;
                e.currentTarget.style.color = isDarkMode ? '#1a1d2e' : '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.accentColor;
              }}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm transition-colors"
              style={{ 
                color: isDarkMode ? '#9CA3AF' : '#6B7280',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#9CA3AF' : '#6B7280';
              }}
            >
              {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;