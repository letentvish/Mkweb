import React, { useState, useEffect } from "react";
import { Target, TrendingUp, Globe } from "lucide-react";
import { motion } from 'framer-motion';

const WhatSetsUsApart = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
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

  const differentiators = [
    {
      icon: <Target className="w-6 h-6 text-[#5b7ce6]" />,
      title: "Senior Team",
      subtitle: "Engagement",
      description:
        "Partnered engagements with seasoned consultants averaging 15+ years experience. No junior team members learning on your investment.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#5b7ce6]" />,
      title: "Outcome",
      subtitle: "Accountability",
      description:
        "Performance-linked fees and commitments tied to measurable business results. We succeed when you succeed.",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#5b7ce6]" />,
      title: "Global Reach, Local",
      subtitle: "Insight",
      description:
        "Presence in 25 countries with deep local market knowledge and global best practice perspectives.",
    },
  ];

  return (
    <motion.section
      style={{
        padding: windowWidth < 640 ? "48px 12px" : windowWidth < 1024 ? "64px 24px" : "64px 48px",
        background: isDarkMode ? "#000000" : "#F9FAFB",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: windowWidth < 640 ? "16px" : windowWidth < 1024 ? "24px" : "32px",
          borderRadius: windowWidth < 640 ? "12px" : "16px",
          position: "relative",
          background: isDarkMode ? "#1D242D" : "#E5E7EB",
          minHeight: windowWidth > 900 ? "350px" : "auto",
        }}
      >
        <motion.h2
          style={{
            fontSize: windowWidth < 640 ? "24px" : windowWidth < 768 ? "30px" : windowWidth < 1024 ? "36px" : "48px",
            fontWeight: "bold",
            marginBottom: windowWidth < 640 ? "24px" : windowWidth < 1024 ? "32px" : "48px",
            textAlign: "left",
          }}
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
          }}>What Sets Us Apart</span>
        </motion.h2>

        {/* Cards - Absolute positioned on screens > 900px, centered on smaller screens */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: windowWidth < 768 ? "1fr" : "repeat(3, 1fr)",
            gap: windowWidth < 640 ? "12px" : windowWidth < 1024 ? "16px" : "20px",
            position: windowWidth > 900 ? "absolute" : "relative",
            left: windowWidth > 900 ? "24px" : "auto",
            right: windowWidth > 900 ? "24px" : "auto",
            bottom: windowWidth > 900 ? "-80px" : "auto",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              style={{
                padding: windowWidth < 640 ? "16px" : windowWidth < 1024 ? "20px" : "24px",
                borderRadius: "8px",
                background: isDarkMode ? "#1a2332" : "#FFFFFF",
                border: isDarkMode ? "2px solid #2d3748" : "2px solid #D3DFEF",
                cursor: "pointer",
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(91, 124, 230, 0.35)",
                borderColor: "rgba(91, 124, 230, 0.6)",
                background: isDarkMode ? "#1e2a3e" : "#FFFFFF",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Icon */}
              <motion.div
                style={{
                  width: windowWidth < 640 ? "32px" : "40px",
                  height: windowWidth < 640 ? "32px" : "40px",
                  borderRadius: windowWidth < 640 ? "8px" : "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: windowWidth < 640 ? "12px" : windowWidth < 1024 ? "16px" : "20px",
                  background: isDarkMode ? "#1D242D" : "#FFFFFF",
                  border: "2px solid #D3DFEF",
                  boxShadow: "0px 14px 40px 0px rgba(211, 223, 239, 0.8)",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div style={{ color: "#155DFC", fontSize: windowWidth < 640 ? "16px" : "20px" }}>
                  {item.icon}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                style={{
                  fontSize: windowWidth < 640 ? "16px" : "18px",
                  fontWeight: "bold",
                  marginBottom: "4px",
                  color: isDarkMode ? "#FFFFFF" : "#111827",
                }}
                whileHover={{
                  color: "#5b7ce6",
                  transition: { duration: 0.2 }
                }}
              >
                {item.title}
              </motion.h3>

              {/* Subtitle */}
              <motion.p
                style={{
                  fontSize: windowWidth < 640 ? "16px" : "18px",
                  fontWeight: "bold",
                  marginBottom: windowWidth < 640 ? "8px" : "12px",
                  color: isDarkMode ? "#FFFFFF" : "#111827",
                }}
                whileHover={{
                  color: "#5b7ce6",
                  transition: { duration: 0.2 }
                }}
              >
                {item.subtitle}
              </motion.p>

              {/* Description */}
              <p
                style={{
                  fontSize: windowWidth < 640 ? "12px" : "14px",
                  lineHeight: "1.6",
                  color: isDarkMode ? "#9CA3AF" : "#4B5563",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Spacer to account for overflowing cards - only on screens > 900px */}
      <div style={{ height: windowWidth > 900 ? "100px" : "0px" }}></div>
    </motion.section>
  );
};

export default WhatSetsUsApart;