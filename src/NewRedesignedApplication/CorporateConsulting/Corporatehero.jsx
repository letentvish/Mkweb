import React, { useState, useEffect } from "react";
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const CorporateHero = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

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
  const companyNames = [
    "Reliance Industries",
    "Endurance",
    "Dr. Reddy's",
    "Bosch",
    "Hindustan Petroleum",
    "Merck",
    "Narayana Healthcare",
    "Panasonic",
    "Cotiviti",
  ];

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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }
    })
  };

  // Magnetic button effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setButtonPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  // Split text into words for animation
  const strategyText = "Strategy That Drives".split(" ");
  const impactText = "Lasting Impact".split(" ");

  return (
    <motion.section
      className={`py-12 md:py-20 px-4 sm:px-6 lg:px-12 ${
        isDarkMode ? "bg-[#0B1B3D]" : "bg-gray-50"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.p
          className={`text-xs sm:text-sm uppercase tracking-wider mb-3 md:mb-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          variants={fadeUpVariants}
        >
          CORPORATE TRAINING SERVICES
        </motion.p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4">
          <div className="text-blue-600">
            {strategyText.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className={isDarkMode ? "text-white" : "text-gray-900"}>
            {impactText.map((word, i) => (
              <motion.span
                key={i}
                custom={i + strategyText.length}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p
          className={`text-base sm:text-lg max-w-3xl mx-auto mb-6 md:mb-8 px-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
          variants={fadeUpVariants}
        >
          Craft strategies that are custom-built for your business needs, align
          with your values and drive transformational growth. Find out how our
          solutions can turn your goals into measurable results.
        </motion.p>

        <motion.div
          className="relative inline-block"
          variants={fadeUpVariants}
        >
          {/* Gradient glow behind button */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-xl opacity-0"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ transform: 'scale(1.2)' }}
          />

          {/* Magnetic button */}
          <motion.button
            className="relative px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              x: buttonPosition.x,
              y: buttonPosition.y
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(20, 71, 230, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Trusted Companies */}
        <motion.div
          className="mt-12 md:mt-16"
          variants={fadeUpVariants}
          style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", overflow: "hidden" }}
        >
          <motion.p
            className={`text-xs sm:text-sm uppercase tracking-wider mb-4 md:mb-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Trusted Partners
          </motion.p>
          <motion.div
            className={`py-6 border-t border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Marquee gradient={false} speed={90} pauseOnHover={true}>
              {[...companyNames, ...companyNames, ...companyNames].map((name, index) => (
                <div
                  key={index}
                  className={`font-semibold text-base sm:text-lg md:text-xl mx-8 md:mx-12 whitespace-nowrap transition-all duration-300 ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  style={{
                    opacity: 0.8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {name}
                </div>
              ))}
            </Marquee>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CorporateHero;