import React, { useState, useEffect } from "react";
import { BarChart2, Zap, Users } from "lucide-react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HowWeCanHelp = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const navigate = useNavigate();

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const services = [
    {
      icon: <BarChart2 className="w-6 h-6" style={{ color: "#1447E6" }} />,
      title: "Growth Plateaus",
      description:
        "Market dynamics shifting faster than organizational adaptation, eroding competitive position",
    },
    {
      icon: <Zap className="w-6 h-6" style={{ color: "#1447E6" }} />,
      title: "Operational Inefficiency",
      description:
        "Legacy processes and siloed structures limiting agility and scalability",
    },
    {
      icon: <Users className="w-6 h-6" style={{ color: "#1447E6" }} />,
      title: "Talent Constraints",
      description:
        "Leadership capability gaps and cultural barriers impeding strategic execution",
    },
  ];

  return (
    <motion.section
      className={`py-12 sm:py-16 lg:pb-32 lg:pt-16 px-3 sm:px-6 lg:px-12 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="bg-gradient-to-r from-[#5b7ce6] to-[#a855f7] bg-clip-text text-transparent">
            How we can help
          </span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="relative mt-8 sm:mt-12 lg:mt-16"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] cursor-pointer group ${
                  index === 0 ? "md:border-l-2 md:border-r-2" : "md:border-r-2"
                } ${isDarkMode ? "border-white/30" : "border-gray-400"}`}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(249, 250, 251, 1)",
                  boxShadow: "0 20px 40px rgba(91, 124, 230, 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Icon and Title Row */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                  {/* Icon + glow */}
                  <div className="relative flex-shrink-0">
                    {isDarkMode && (
                      <motion.div
                        className="absolute -left-4 -top-4 w-20 h-20 bg-white/10 blur-2xl rounded-full"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <motion.div
                      className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: isDarkMode ? "#1D242D" : "#FFFFFF",
                        boxShadow: "0px 14px 40px 0px rgba(211, 223, 239, 0.8)"
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: 6,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-[320px] ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Learn More Button */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-10 lg:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
       
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowWeCanHelp;