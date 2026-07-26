import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  RefreshCw,
  Monitor,
  Layers,
  Globe,
  Shield,
} from "lucide-react";
import { motion } from 'framer-motion';

const AdvisoryServices = () => {
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const advisoryServices = [
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Market expansion, M&A strategy, and revenue optimization",
    },
    {
      icon: RefreshCw,
      title: "Transformation",
      description:
        "Operating model redesign and organizational effectiveness",
    },
    {
      icon: Monitor,
      title: "Digital & Technology",
      description:
        "Digital strategy, innovation, and tech-enabled transformation",
    },
    {
      icon: Layers,
      title: "Operations Excellence",
      description:
        "Process optimization, supply chain, and performance improvement",
    },
    {
      icon: Globe,
      title: "Corporate Strategy",
      description:
        "Portfolio strategy, competitive positioning, and value creation",
    },
    {
      icon: Shield,
      title: "Risk & Resilience",
      description:
        "Enterprise risk management and business continuity planning",
    },
  ];

  return (
    <motion.section
      className={`py-12 sm:py-16 px-3 sm:px-6 lg:px-12 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span style={{
            background: "linear-gradient(90deg, #1447E6 0%, #9C2DA9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Comprehensive Advisory Services
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
        >
          {advisoryServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className={`p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border ${
                  isDarkMode
                    ? "bg-[#1a2332] border-white/5"
                    : "bg-gray-50 border-gray-100"
                }`}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: isDarkMode
                    ? "0 20px 40px rgba(91, 124, 230, 0.2)"
                    : "0 20px 40px rgba(91, 124, 230, 0.15)",
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(156, 163, 175, 0.3)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6"
                  style={{
                    background: "linear-gradient(90deg, #9C2DA9 0%, #1447E6 100%)"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Learn More */}
                <motion.button
                  type="button"
                  className="text-sm font-medium inline-flex items-center gap-2 transition-colors"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Learn More
                  </span>
                  <span style={{ color: "#E17100" }}>→</span>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvisoryServices;
