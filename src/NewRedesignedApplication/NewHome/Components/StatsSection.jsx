import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Building2, Globe } from "lucide-react";
import "./StatsSection.css";

function AnimatedCountUp({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const rawNum = parseInt(value.replace(/[,+]/g, ""), 10);
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (!isInView || isNaN(rawNum)) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(rawNum * easeOut);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(rawNum);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, rawNum, duration]);

  const formattedStr = count.toLocaleString("en-US") + (hasPlus ? "+" : "");

  return <span ref={ref}>{isInView ? formattedStr : "0"}</span>;
}

const metrics = [
  {
    value: "25,000+",
    label: "Professionals Empowered",
    icon: <Users className="w-8 h-8 text-[#6366f1]" />,
  },
  {
    value: "200+",
    label: "Expert & Mentor Network",
    icon: <GraduationCap className="w-8 h-8 text-[#6366f1]" />,
  },
  {
    value: "120+",
    label: "Enterprise Engagements",
    icon: <Building2 className="w-8 h-8 text-[#6366f1]" />,
  },
  {
    value: "12",
    label: "Industries Served",
    icon: <Globe className="w-8 h-8 text-[#6366f1]" />,
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section-root">
      
      {/* Decorative Dot Matrix Patterns */}
      <div className="stats-dot-matrix-tr">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="#0b1c30">
          <circle cx="10" cy="10" r="2.5" /><circle cx="35" cy="10" r="2.5" /><circle cx="60" cy="10" r="2.5" /><circle cx="85" cy="10" r="2.5" />
          <circle cx="10" cy="35" r="2.5" /><circle cx="35" cy="35" r="2.5" /><circle cx="60" cy="35" r="2.5" /><circle cx="85" cy="35" r="2.5" />
          <circle cx="10" cy="60" r="2.5" /><circle cx="35" cy="60" r="2.5" /><circle cx="60" cy="60" r="2.5" /><circle cx="85" cy="60" r="2.5" />
        </svg>
      </div>

      <div className="stats-dot-matrix-bl">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="#0b1c30">
          <circle cx="10" cy="10" r="2.5" /><circle cx="35" cy="10" r="2.5" /><circle cx="60" cy="10" r="2.5" /><circle cx="85" cy="10" r="2.5" />
          <circle cx="10" cy="35" r="2.5" /><circle cx="35" cy="35" r="2.5" /><circle cx="60" cy="35" r="2.5" /><circle cx="85" cy="35" r="2.5" />
          <circle cx="10" cy="60" r="2.5" /><circle cx="35" cy="60" r="2.5" /><circle cx="60" cy="60" r="2.5" /><circle cx="85" cy="60" r="2.5" />
        </svg>
      </div>

      <div className="stats-container">
        
        {/* Section Header */}
        <div className="stats-header-box">
          <p className="stats-label">IMPACT AT SCALE</p>
          <h2 className="stats-main-heading">
            Enabling Industries At Scale
          </h2>
          <p className="stats-desc">
            Quantifiable performance metrics delivered across global enterprises, academic institutions, and workforce ecosystems.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="stats-cards-grid">
          {metrics.map((metric, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="stats-card-article"
            >
              {/* Icon Container */}
              <div className="stats-icon-circle">
                {metric.icon}
              </div>

              {/* Metric Value */}
              <h3 className="stats-num-heading">
                <AnimatedCountUp value={metric.value} duration={2.2} />
              </h3>

              {/* Accent Divider */}
              <div className="stats-divider" />

              {/* Metric Label */}
              <p className="stats-card-label">
                {metric.label}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom Accent Feature Icon */}
        <div className="stats-bottom-accent">
          <div className="stats-accent-box">
            <div className="stats-grid-dots">
              <div className="stats-dot-white"></div>
              <div className="stats-dot-white"></div>
              <div className="stats-dot-white"></div>
              <div className="stats-dot-white"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}