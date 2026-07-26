import React, { useState, useEffect } from "react";
import corporateMainImage from "../../Assets/CorporateConsulting/MainImage.webp";

const VideoSection = () => {
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

  return (
    <section
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-12 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500">
            <img
              src={corporateMainImage}
              alt="Corporate Consulting Excellence"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;