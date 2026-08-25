import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Layers, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SolutionsSection.css";

export default function SolutionsSection() {
  const navigate = useNavigate();

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
    <section className="solutions-section-root" id="solutions-section">
      <div className="solutions-container">
        
        {/* Section Header */}
        <div className="solutions-header-box">
          <p className="solutions-subtitle">SOLUTIONS ARCHITECTURE</p>
          <h2 className="solutions-title">
            Core Business Pillars
          </h2>
        </div>

        {/* 3 Pillars Cards (Stacked vertically on mobile, 3 columns on desktop) */}
        <div className="solutions-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
