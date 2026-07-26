import React, { useState, useEffect } from "react";
import { LuGraduationCap, LuBuilding2 } from "react-icons/lu";
import { MdOutlineBungalow } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import studentsImage from "../../../Assets/NewMile/Students.png";
import institutionImage from "../../../Assets/NewMile/Institution.png";
import organizersImage from "../../../Assets/NewMile/Organizers.png";

const BenefitsSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });
  const [activeTab, setActiveTab] = useState("students");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "students", label: "For Students", icon: <LuGraduationCap /> },
    { id: "institutions", label: "For Academic Institution", icon: <MdOutlineBungalow /> },
    { id: "organizations", label: "For Organizations", icon: <LuBuilding2 /> },
  ];

  const tabContent = {
    students: {
      title: "Accelerate Your Career Growth",
      description:
        "MILE empowers students (ages 14-24) to build career-ready skills through personalized learning journeys and real-world exposure.",
      benefits: [
        "Early exposure to industry networks through internships and projects",
        "Skill tracks in trending areas like Cloud Computing, Cybersecurity, and Generative AI",
        "Networking opportunities via hackathons, ideathons, and competitions",
        "Entrepreneurial support with incubators, accelerators, and funding opportunities",
      ],
      cta: "Start Learning Now",
      image: studentsImage,
    },
    institutions: {
      title: "Enhance Your Academic Offerings",
      description:
        "Enhance your institution's educational offerings with MILE's AI-powered tools, designed to improve outcomes and brand value.",
      benefits: [
        "Seamless learning management with an integrated LXP platform",
        "AI-driven assessments and analytics to track student progress",
        "Career planning and mentorship programs to boost placement rates",
        "Collaborative events like hackathons and masterclasses to engage students",
      ],
      cta: "Partner With Us",
      image: institutionImage,
    },
    organizations: {
      title: "Develop Your Future Workforce",
      description:
        "Upskill your workforce with MILE's personalized learning paths, focusing on both technical and people skills.",
      benefits: [
        "Tailored skill tracks in areas like Data Analytics, AI, and Project Management",
        "Soft skills development, including emotional intelligence and ethical leadership",
        "Flexible, self-paced learning with anytime, anywhere access",
        "Real-world projects and simulations to apply new skills",
      ],
      cta: "Explore Enterprise Solutions",
      image: organizersImage,
    },
  };

  const activeContent = tabContent[activeTab];

  // Inline styles for animations
  const benefitItemStyle = (index) => ({
    animation: `slideIn 0.5s ease-out forwards ${index * 0.1}s`,
    opacity: 0,
  });

  // Dynamic styles based on isDarkMode prop - matching other MILE components
  const sectionBg = isDarkMode ? '#000000' : '#F3F3F3'; // Black for dark mode, light gray for light mode
  const tabContainerBg = isDarkMode ? '#1D242D' : '#E8E8E8';
  const headingColor = isDarkMode ? '#FFFFFF' : '#111827';
  const descriptionColor = isDarkMode ? '#FFFFFF' : '#111827';
  const benefitTextColor = isDarkMode ? '#FFFFFF' : '#111827';
  const inactiveTabTextColor = isDarkMode ? '#FFFFFF' : '#333333';
  const imageContainerBg = isDarkMode ? '#1D242D' : '#FFFFFF';
  const ctaTextColor = isDarkMode ? '#FFFFFF' : '#111827';
  const ctaBgColor = isDarkMode ? '#1D242D' : '#FFFFFF';
  const ctaBorderColor = '#FF6B35';

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .benefit-item {
          animation-fill-mode: forwards;
        }
        
        .cta-button {
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .image-container {
          position: relative;
          overflow: hidden;
        }
        
        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .image-container:hover::before {
          opacity: 1;
        }
      `}</style>

      <section
        className="py-8 md:py-10 lg:py-12 transition-colors duration-300"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h2
            className={`text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: headingColor, lineHeight: '1.2' }}
          >
            Learn How Our Academic Solutions Will Help You
          </h2>

          {/* Tabs Section */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div
              className="rounded-full w-full max-w-[703px]"
              style={{ backgroundColor: tabContainerBg }}
            >
              <div className="flex items-center p-2 sm:p-3 gap-2 sm:gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex-1 h-[48px] sm:h-[52px] rounded-full
                        flex items-center justify-center
                        text-xs sm:text-sm font-medium
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#FF6B35] text-white shadow-md"
                            : "bg-transparent hover:bg-opacity-10"
                        }
                      `}
                      style={!isActive ? { color: inactiveTabTextColor } : {}}
                    >
                      <span className="px-2">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-[1200px] mx-auto">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-start">
              <div className="space-y-6 sm:space-y-8">
                {/* Title and Description */}
                <div className="space-y-3 sm:space-y-4">
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color: headingColor, lineHeight: '1.2' }}
                  >
                    {activeContent.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: descriptionColor, opacity: 0.9 }}
                  >
                    {activeContent.description}
                  </p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 sm:space-y-4">
                  {activeContent.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="benefit-item flex items-start gap-3"
                      style={benefitItemStyle(index)}
                    >
                      <IoMdCheckmarkCircleOutline 
                        className="text-[#FF6B35] mt-0.5 flex-shrink-0" 
                        style={{ fontSize: '20px' }}
                      />
                      <span
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: benefitTextColor, opacity: 0.9 }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <Link to="/contact">
                  <button
                    className="cta-button group inline-flex items-center gap-3 sm:gap-4 h-[52px] sm:h-[58px] pl-2 sm:pl-3 pr-5 sm:pr-6 rounded-full border-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B35]/20"
                    style={{
                      backgroundColor: ctaBgColor,
                      borderColor: ctaBorderColor
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0"
                    >
                      <FaArrowRight className="text-white text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    {/* Button Text */}
                    <span className="text-sm sm:text-base font-semibold" style={{ color: ctaTextColor }}>
                      {activeContent.cta}
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN - Image */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="image-container overflow-hidden shadow-2xl w-full max-w-[500px] lg:max-w-[435px]"
                style={{
                  aspectRatio: "435 / 285",
                  borderRadius: "20px",
                  backgroundColor: imageContainerBg,
                }}
              >
                <img
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;