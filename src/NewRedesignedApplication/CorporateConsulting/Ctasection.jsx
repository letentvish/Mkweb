import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import imageLeft from "../../Assets/CorporateConsulting/ImageLeft.jpg";
import imageLeft1 from "../../Assets/CorporateConsulting/ImageLeft1.jpg";
import imageRight from "../../Assets/CorporateConsulting/ImageRight.jpg";
import imageRight1 from "../../Assets/CorporateConsulting/ImageRight1.jpg";
import whatsappImage from "../../Assets/CorporateConsulting/WhatsAppImage.jpg";

const CTASection = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const navigate = useNavigate();
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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

  return (
    <motion.section
      className={`py-16 md:py-24 px-6 lg:px-16 transition-colors duration-300 ${
        isDarkMode ? "bg-[#0f172a]" : "bg-gray-100"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column */}
          <motion.div
            className="lg:w-5/12 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-6 leading-tight"
              style={{
                background: "linear-gradient(90deg, #1447E6 0%, #9C2DA9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              variants={itemVariants}
            >
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Let's Build Your
              </motion.span>
              <br />
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                Competitive Advantage
              </motion.span>
            </motion.h2>

            <motion.p
              className={`text-base sm:text-lg mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Partner with us to transform your business challenges into
              strategic opportunities. Our expert team is ready to help you
              achieve sustainable growth.
            </motion.p>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {/* Glow gradient behind button */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-0"
                animate={{ opacity: [0, 0.4, 0] }}
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
                className={`relative px-8 py-3 rounded-full font-semibold text-white ${
                  isDarkMode
                    ? "bg-[#9B2EAA] hover:bg-purple-500"
                    : "bg-[#9B2EAA] hover:bg-purple-600"
                }`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate('/contact')}
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
                  boxShadow: "0 10px 40px rgba(155, 46, 170, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Asymmetric 5-image grid */}
          <motion.div
            className="lg:w-7/12 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top row */}
            <motion.div
              className="flex gap-4 mb-4 justify-end"
              variants={containerVariants}
            >
              <motion.img
                src={imageLeft}
                alt="Corporate consulting left"
                className="w-[45%] h-40 sm:h-48 object-cover rounded-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
              <motion.img
                src={imageRight}
                alt="Corporate consulting right"
                className="w-[45%] h-40 sm:h-48 object-cover rounded-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
            </motion.div>

            {/* Bottom row */}
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
            >
              <motion.img
                src={imageLeft1}
                alt="Corporate strategy"
                className="w-1/3 h-40 sm:h-48 object-cover rounded-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
              <motion.img
                src={imageRight1}
                alt="Business consulting"
                className="w-1/3 h-40 sm:h-48 object-cover rounded-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
              <motion.img
                src={whatsappImage}
                alt="Corporate excellence"
                className="w-1/3 h-40 sm:h-48 object-cover rounded-2xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
