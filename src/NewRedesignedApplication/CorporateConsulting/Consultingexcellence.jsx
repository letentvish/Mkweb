import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import VideoWrapper from "../../Assets/VideoWrapper.jpg";

const SolutionsSection = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const solutions = [
    {
      title: "Deep diagnostics",
      description:
        "Rigorous analysis revealing root causes and untapped opportunities",
    },
    {
      title: "Strategic roadmap",
      description:
        "Clear, actionable plans aligned to competitive positioning",
    },
    {
      title: "Business case development",
      description:
        "Quantified value creation with realistic implementation scenarios",
    },
    {
      title: "Change leadership",
      description:
        "Guiding organizations through transformation with minimal disruption",
    },
    {
      title: "Capability building",
      description:
        "Embedding new skills and ways of working across the organization",
    },
    {
      title: "Performance tracking",
      description:
        "Real-time monitoring ensuring outcomes match strategic intent",
    },
  ];

  return (
    <motion.section
      style={{
        position: "relative",
        width: "100%",
        minHeight: windowWidth < 640 ? "500px" : windowWidth < 1024 ? "600px" : "761px",
        overflow: "hidden",
        backgroundImage: VideoWrapper ? `url(${VideoWrapper})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: windowWidth < 640 ? "60px 12px 80px" : windowWidth < 1024 ? "90px 20px 120px" : "130px 20px 160px",
        }}
      >
        {/* Title Section */}
        <motion.div
          style={{ maxWidth: "100%", marginBottom: windowWidth < 640 ? "30px" : windowWidth < 1024 ? "40px" : "50px", textAlign: "center" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: windowWidth < 640 ? "24px" : windowWidth < 768 ? "32px" : windowWidth < 1024 ? "40px" : "50px",
              lineHeight: "1.2",
              letterSpacing: "-2.5px",
              color: "#FFFFFF",
              marginBottom: windowWidth < 640 ? "16px" : "24px",
            }}
          >
            Integrated Consulting Excellence
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: windowWidth < 640 ? "14px" : windowWidth < 1024 ? "16px" : "18px",
              lineHeight: "1.5",
              letterSpacing: "-0.8px",
              color: "#FFFFFF",
            }}
          >
            Strategic insights paired with hands-on execution capability
          </p>
        </motion.div>

        {/* Cards Grid - Single grid for all screen sizes */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns:
              windowWidth <= 480
                ? "1fr"
                : windowWidth <= 768
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
            gap: windowWidth < 640 ? "12px" : "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solutions.map((item, index) => {
            const cardPadding = windowWidth < 640 ? "16px" : windowWidth < 768 ? "20px" : "30px";
            const titleSize = windowWidth < 640 ? "18px" : windowWidth < 768 ? "20px" : "24px";
            const descSize = windowWidth < 640 ? "13px" : windowWidth < 768 ? "14px" : "16px";

            return (
              <motion.div
                key={index}
                style={{
                  minHeight: windowWidth < 640 ? "160px" : windowWidth < 768 ? "180px" : "195px",
                  padding: cardPadding,
                  background: "#1D242D",
                  borderRadius: "6px",
                  border: "1px solid #2d3748",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  background: "#252e3d",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  borderColor: "#3d4858",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.h4
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: titleSize,
                    lineHeight: "1.3",
                    letterSpacing: "-0.4px",
                    color: "#FFFFFF",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.title}
                </motion.h4>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: descSize,
                    lineHeight: "1.5",
                    letterSpacing: "-0.8px",
                    color: "#94A3B8",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom White Strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: windowWidth < 640 ? "80px" : windowWidth < 1024 ? "100px" : "130px",
          background: isDarkMode ? "#0F172A" : "#FFFFFF",
          zIndex: 2,
        }}
      />
    </motion.section>
  );
};

export default SolutionsSection;