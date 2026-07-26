import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Building2, Globe } from "lucide-react";

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
    <section className="relative py-20 lg:py-28 px-4 bg-[#f8f9ff] overflow-hidden border-b border-outline-variant/60">
      
      {/* Decorative Dot Matrix Patterns */}
      <div className="absolute top-10 right-10 opacity-20 hidden md:block pointer-events-none">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="#0b1c30">
          <circle cx="10" cy="10" r="2.5" /><circle cx="35" cy="10" r="2.5" /><circle cx="60" cy="10" r="2.5" /><circle cx="85" cy="10" r="2.5" />
          <circle cx="10" cy="35" r="2.5" /><circle cx="35" cy="35" r="2.5" /><circle cx="60" cy="35" r="2.5" /><circle cx="85" cy="35" r="2.5" />
          <circle cx="10" cy="60" r="2.5" /><circle cx="35" cy="60" r="2.5" /><circle cx="60" cy="60" r="2.5" /><circle cx="85" cy="60" r="2.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 opacity-20 hidden md:block pointer-events-none">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="#0b1c30">
          <circle cx="10" cy="10" r="2.5" /><circle cx="35" cy="10" r="2.5" /><circle cx="60" cy="10" r="2.5" /><circle cx="85" cy="10" r="2.5" />
          <circle cx="10" cy="35" r="2.5" /><circle cx="35" cy="35" r="2.5" /><circle cx="60" cy="35" r="2.5" /><circle cx="85" cy="35" r="2.5" />
          <circle cx="10" cy="60" r="2.5" /><circle cx="35" cy="60" r="2.5" /><circle cx="60" cy="60" r="2.5" /><circle cx="85" cy="60" r="2.5" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="label-md mb-2 text-[#6366f1]">IMPACT AT SCALE</p>
          <h2 className="headline-lg text-[#0b1c30] mb-3 font-poppins font-bold tracking-tight">
            Enabling Industries At Scale
          </h2>
          <p className="body-lg text-[#45464d] leading-relaxed">
            Quantifiable performance metrics delivered across global enterprises, academic institutions, and workforce ecosystems.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-8 md:p-10 flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-slate-100/80 flex items-center justify-center mb-6 group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300">
                {metric.icon}
              </div>

              {/* Metric Value */}
              <h3 className="text-4xl lg:text-5xl font-extrabold font-poppins text-[#6366f1] mb-2 tracking-tight">
                <AnimatedCountUp value={metric.value} duration={2.2} />
              </h3>

              {/* Accent Divider */}
              <div className="w-8 h-1 bg-slate-200 rounded-full mb-6 group-hover:w-12 group-hover:bg-[#6366f1] transition-all duration-300" />

              {/* Metric Label */}
              <p className="text-slate-700 font-semibold text-base leading-snug">
                {metric.label}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom Accent Feature Icon */}
        <div className="flex justify-center mt-14">
          <div className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}