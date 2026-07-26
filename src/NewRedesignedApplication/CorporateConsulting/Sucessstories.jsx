import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [currentIndex, setCurrentIndex] = useState(0);

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
        staggerChildren: 0.15
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

  const successStories = [
    {
      quote:
        "The courses on Learly are incredible. I learned digital marketing from scratch and landed a job in just three months. The instructors are amazing, and the platform is so easy to use. Truly life-changing!",
      author: "Marketing Specialist",
      name: "Jhonny Dope",
      authorImage: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "Learly made learning easy and fun. I explored data science and UI/UX design at my own pace. The detailed courses and hands-on projects helped me build confidence and real skills. Highly recommend it!",
      author: "James Patel",
      role: "Freelance UI/UX Designer",
      authorImage: "https://i.pravatar.cc/150?img=33",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      className={`py-12 sm:py-16 px-3 sm:px-6 lg:px-12 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8 lg:mb-12 gap-4 sm:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
              <span style={{
                background: "linear-gradient(90deg, #1447E6 0%, #9C2DA9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Success Stories</span>
            </h2>
            <p
              className={`text-xs sm:text-sm md:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't just take our word for it! Here's what our Client have to say
              <br className="hidden sm:block" />
              about their journey with Multiplierskraft.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex gap-2 sm:gap-3 ml-0 sm:ml-8">
            <button
              onClick={handlePrev}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isDarkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#5b7ce6] hover:bg-[#4a6bd5] text-white flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className={`p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl cursor-pointer ${
                isDarkMode
                  ? "bg-[#1a2332] border border-white/5"
                  : "bg-gray-50 border border-gray-100"
              }`}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: isDarkMode
                  ? "0px 20px 50px 0px rgba(91, 124, 230, 0.3)"
                  : "0px 20px 50px 0px rgba(91, 124, 230, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.p
                className={`text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 lg:mb-8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                "{story.quote}"
              </motion.p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.img
                    src={story.authorImage}
                    alt={story.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 0 2px #5b7ce6",
                      transition: { duration: 0.3 }
                    }}
                  />
                  <div>
                    <p
                      className={`font-bold text-sm sm:text-base ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {story.author}
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {story.role || story.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
              isDarkMode
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-900"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#5b7ce6] hover:bg-[#4a6bd5] text-white flex items-center justify-center transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;