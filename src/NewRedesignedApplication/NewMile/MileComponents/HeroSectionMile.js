import React, { useState, useEffect } from "react";
import studentImage from "../../../Assets/NewMile/HeroImage.png";
import mileBrochure from "../../../Assets/MIlePdf/MILE-Brochure .pdf";

const HeroSectionMile = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

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

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = mileBrochure;
    link.download = 'MILE-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetStarted = () => {
    window.open('https://www.youtube.com/watch?v=eScxxeLYPOs', '_blank');
  };
  return (
    <div
      className={`w-full ${
        isDarkMode ? "bg-black" : "bg-[#F3F3F3]"
      } transition-colors duration-300 overflow-hidden`}
    >
      {/* Main Hero Container */}
      <div className="relative mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-12 order-2 lg:order-1">
              {/* Main Heading */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal leading-tight animate-slideUp ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: "1",
                }}
              >
                AI-Powered Learning for
                <br />
                Skill Growth
              </h1>

              {/* Subtitle */}
              <p
                className={`text-sm md:text-base leading-relaxed max-w-xl animate-slideUp ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                Unlock your potential with an AI-powered learning experience
                solution designed for skill acceleration and personalized growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3 animate-slideUp" style={{ animationDelay: "0.2s" }}>
                <button
                  onClick={handleDownloadBrochure}
                  className={`group flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 font-semibold transition-all duration-300 rounded-full text-xs md:text-sm shadow-lg whitespace-nowrap ${
                    isDarkMode
                      ? "bg-[#FF6B35] text-white hover:bg-[#FF8255] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
                      : "bg-[#FF6B35] text-white hover:bg-[#FF8255] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:rotate-90 transition-transform duration-300"
                  >
                    <path
                      d="M10 5L10 15M5 10L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Download Brochure
                </button>

                <button
                  onClick={handleGetStarted}
                  className={`group flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 font-semibold transition-all duration-300 rounded-full text-xs md:text-sm shadow-lg whitespace-nowrap ${
                    isDarkMode
                      ? "bg-white text-[#FF6B35] hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "bg-[#1447E6] text-white hover:bg-[#0F35B3] hover:scale-105 hover:shadow-[0_0_20px_rgba(20,71,230,0.3)]"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M7 3L15 10L7 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Get Started for Free
                </button>
              </div>
            </div>

            {/* Right Section - Student Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div
                className="relative overflow-hidden w-full max-w-md lg:max-w-none animate-fadeIn shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
                style={{
                  aspectRatio: "630/622",
                  borderRadius: "40px",
                  maxWidth: "630px",
                  animationDelay: "0.2s",
                }}
              >
                {studentImage ? (
                  <img
                    src={studentImage}
                    alt="Students learning together on campus steps"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder when no image is provided
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      isDarkMode
                        ? "bg-gradient-to-br from-gray-800 to-gray-900"
                        : "bg-gradient-to-br from-gray-200 to-gray-300"
                    }`}
                  >
                    <div className="text-center p-8">
                      <svg
                        className="mx-auto mb-4 opacity-50"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <rect
                          width="100"
                          height="100"
                          rx="12"
                          fill={isDarkMode ? "#374151" : "#E5E7EB"}
                        />
                        <g opacity="0.7">
                          {/* Students icon */}
                          <circle
                            cx="40"
                            cy="35"
                            r="8"
                            fill={isDarkMode ? "#6B7280" : "#9CA3AF"}
                          />
                          <circle
                            cx="60"
                            cy="35"
                            r="8"
                            fill={isDarkMode ? "#6B7280" : "#9CA3AF"}
                          />
                          <path
                            d="M25 65C25 55 30 50 40 50C50 50 52 52 50 60L40 70L30 60C28 52 25 55 25 65Z"
                            fill={isDarkMode ? "#6B7280" : "#9CA3AF"}
                          />
                          <path
                            d="M75 65C75 55 70 50 60 50C50 50 48 52 50 60L60 70L70 60C72 52 75 55 75 65Z"
                            fill={isDarkMode ? "#6B7280" : "#9CA3AF"}
                          />
                        </g>
                      </svg>
                      <p
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        Add your student image
                        <br />
                        <span className="text-xs opacity-70">
                          (630px × 622px recommended)
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`mx-auto ${
          isDarkMode ? "bg-[#000000]" : "bg-white"
        }`}
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 - Students Engaged */}
            <div
              className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "bg-[#FEF3C7] hover:bg-[#FDE68A]"
                  : "bg-[#FEF3C7] hover:bg-[#FDE68A]"
              }`}
            >
              <div className="flex items-center gap-4 h-full">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? "bg-[#FF6B35]/20" : "bg-white"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-1 text-[#1F2937]">
                    2000+
                  </h3>
                  <p className="text-xs font-medium text-gray-600">
                    Students Engaged
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 2 - Skill-Focused Sessions */}
            <div
              className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "bg-[#FEF3C7] hover:bg-[#FDE68A]"
                  : "bg-[#FEF3C7] hover:bg-[#FDE68A]"
              }`}
            >
              <div className="flex items-center gap-4 h-full">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? "bg-[#1447E6]/20" : "bg-white"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C2.53043 10 3.03914 10.2107 3.41421 10.5858C3.78929 10.9609 4 11.4696 4 12C4 12.5304 3.78929 13.0391 3.41421 13.4142C3.03914 13.7893 2.53043 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C21.4696 14 20.9609 13.7893 20.5858 13.4142C20.2107 13.0391 20 12.5304 20 12C20 11.4696 20.2107 10.9609 20.5858 10.5858C20.9609 10.2107 21.4696 10 22 10Z"
                      stroke="#1447E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 4V20"
                      stroke="#1447E6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-1 text-[#1F2937]">
                    300+
                  </h3>
                  <p className="text-xs font-medium text-gray-600">
                    Skill-Focused Sessions
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 3 - Real World Projects */}
            <div
              className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "bg-[#FEF3C7] hover:bg-[#FDE68A]"
                  : "bg-[#FEF3C7] hover:bg-[#FDE68A]"
              }`}
            >
              <div className="flex items-center gap-4 h-full">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? "bg-[#9DD9D2]/20" : "bg-white"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                      stroke="#14B8A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-1 text-[#1F2937]">
                    50+
                  </h3>
                  <p className="text-xs font-medium text-gray-600">
                    Real World Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Stat 4 - Hours of Engagement */}
            <div
              className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "bg-[#FEF3C7] hover:bg-[#FDE68A]"
                  : "bg-[#FEF3C7] hover:bg-[#FDE68A]"
              }`}
            >
              <div className="flex items-center gap-4 h-full">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode ? "bg-[#F7C832]/20" : "bg-white"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-1 text-[#1F2937]">
                    1000+
                  </h3>
                  <p className="text-xs font-medium text-gray-600">
                    Hours of Engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSectionMile;