import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SolutionsSection.css";

export default function SolutionsSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Track vertical scroll progress of this section on mobile & tablet
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll progress into horizontal movement (0% to -67.5%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67.5%"]);

  const pillars = [
    {
      id: 0,
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Organizational capability",
      title: "Leadership & OD",
      bullets: [
        "Leadership Development",
        "Culture & Change management",
        "Org Design & Performance"
      ],
      mockup: "/pillar_consulting.png",
      link: "/corporate-consulting"
    },
    {
      id: 1,
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Digital platforms",
      title: "AI Enterprise Solutions",
      bullets: [
        "Nucleus — AI-Native HRMS",
        "PALBON Suites — ERP & Operations",
        "Magnetix — AI-powered LXP"
      ],
      mockup: "/pillar_technology.png",
      link: "/solutions"
    },
    {
      id: 2,
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      category: "Academic alignment",
      title: "Future-ready learning",
      bullets: [
        "Hyper-Personalised Skill Tracks",
        "Tailored Executive Masterclasses",
        "Outcome-linked Learning Journeys"
      ],
      mockup: "/pillar_academic.png",
      link: "/mile"
    }
  ];

  return (
    <section className="solutions-section-root">
      {/* ========================================================
          MOBILE & TABLET VIEW (< 1024px):
          Vertical scroll pins section and moves 3 cards right-to-left
         ======================================================== */}
      <div 
        ref={sectionRef} 
        className="solutions-mobile-scroll-container"
      >
        <div className="solutions-sticky-wrapper">
          
          {/* Section Header */}
          <div className="solutions-header-box">
            <p className="solutions-subtitle">SOLUTIONS ARCHITECTURE</p>
            <h2 className="solutions-title">
              Core Business Pillars
            </h2>
            <p className="solutions-scroll-hint">Scroll down to explore pillars →</p>
          </div>

          {/* Horizontal Moving Cards Track */}
          <div className="solutions-track-overflow">
            <motion.div
              style={{ x }}
              className="solutions-mobile-track"
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="solutions-card"
                >
                  <div>
                    {/* Header Icon & Category Tag */}
                    <div className="solutions-card-header">
                      <div className="solutions-card-icon-box">
                        {pillar.icon}
                      </div>
                      <span className="solutions-card-category">
                        {pillar.category}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="solutions-card-heading">
                      {pillar.title}
                    </h3>

                    {/* Bullet Points */}
                    <div className="solutions-card-bullets">
                      {pillar.bullets.map((bullet, idx) => (
                        <div key={idx} className="solutions-card-bullet-item">
                          <span className="solutions-bullet-dot" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mockup Graphic */}
                    <div className="solutions-mockup-wrap">
                      <img
                        src={pillar.mockup}
                        alt={pillar.title}
                        className="solutions-mockup-img"
                      />
                      <div className="solutions-mockup-overlay" />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => navigate(pillar.link)}
                    className="solutions-btn-explore"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ========================================================
          DESKTOP VIEW (>= 1024px):
          3 Cards displayed cleanly in a 3-column grid
         ======================================================== */}
      <div className="solutions-desktop-container">
        <div className="solutions-desktop-wrapper">
          
          {/* Section Header */}
          <div className="solutions-header-box" style={{ marginBottom: "2.5rem" }}>
            <p className="solutions-subtitle">SOLUTIONS ARCHITECTURE</p>
            <h2 className="solutions-title">
              Core Business Pillars
            </h2>
          </div>

          {/* 3 Grid Cards */}
          <div className="solutions-desktop-grid">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="solutions-desktop-card"
              >
                <div>
                  {/* Header Icon & Category Tag */}
                  <div className="solutions-card-header" style={{ marginBottom: "1rem" }}>
                    <div className="solutions-card-icon-box">
                      {pillar.icon}
                    </div>
                    <span className="solutions-card-category">
                      {pillar.category}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="solutions-card-heading" style={{ fontSize: "1.375rem", marginBottom: "1rem" }}>
                    {pillar.title}
                  </h3>

                  {/* Bullet Points */}
                  <div className="solutions-card-bullets" style={{ marginBottom: "1.5rem" }}>
                    {pillar.bullets.map((bullet, idx) => (
                      <div key={idx} className="solutions-card-bullet-item" style={{ fontSize: "0.875rem" }}>
                        <span className="solutions-bullet-dot" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mockup Graphic */}
                  <div className="solutions-desktop-mockup">
                    <img
                      src={pillar.mockup}
                      alt={pillar.title}
                      className="solutions-mockup-img"
                    />
                    <div className="solutions-mockup-overlay" />
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => navigate(pillar.link)}
                  className="solutions-btn-explore"
                  style={{ fontSize: "0.875rem", padding: "0.875rem 1.5rem" }}
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
