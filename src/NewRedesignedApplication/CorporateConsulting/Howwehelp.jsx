import React, { useState, useEffect } from "react";
import {
  FaRocket,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const HowWeHelp = () => {
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
  const helpServices = [
    {
      icon: <FaRocket className="text-3xl sm:text-4xl text-blue-600" />,
      title: "Business Planning",
      description:
        "Strategic business planning tailored to your organization's unique goals and challenges.",
    },
    {
      icon: <FaChartLine className="text-3xl sm:text-4xl text-blue-600" />,
      title: "Operations and Efficiency",
      description:
        "Optimize operations and maximize efficiency across all business functions.",
    },
    {
      icon: <FaUsers className="text-3xl sm:text-4xl text-blue-600" />,
      title: "Talent Consultants",
      description:
        "Expert talent acquisition and development strategies for building high-performing teams.",
    },
  ];

  return (
    <section
      className={`py-12 md:py-20 px-4 sm:px-6 lg:px-12 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 px-4">
          <span className="text-blue-600">How we can help</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-12">
          {helpServices.map((service, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-xl ${
                isDarkMode ? "bg-[#1A2445]" : "bg-gray-50"
              } hover:shadow-xl transition duration-300`}
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p
                className={`text-sm sm:text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-4 sm:mb-6`}
              >
                {service.description}
              </p>
              <button className="text-blue-600 hover:underline font-semibold text-sm sm:text-base">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;