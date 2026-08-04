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
    icon: <Users className="w-6 h-6 text-[#0284c7]" />,
  },
  {
    value: "200+",
    label: "Expert & Mentor Network",
    icon: <GraduationCap className="w-6 h-6 text-[#0284c7]" />,
  },
  {
    value: "120+",
    label: "Enterprise Engagements",
    icon: <Building2 className="w-6 h-6 text-[#0284c7]" />,
  },
  {
    value: "12",
    label: "Industries Served",
    icon: <Globe className="w-6 h-6 text-[#0284c7]" />,
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 px-4 bg-[#F8FAFC] overflow-hidden border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>IMPACT AT SCALE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Enabling Industries At Scale
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Quantifiable performance metrics delivered across global enterprises, academic institutions, and workforce ecosystems.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-indigo-200/90 rounded-3xl p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>

                <p className="font-poppins font-extrabold text-4xl sm:text-5xl text-[#0284c7] tracking-tight mb-2">
                  <AnimatedCountUp value={metric.value} />
                </p>

                <h3 className="font-poppins font-bold text-base text-slate-800">
                  {metric.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}