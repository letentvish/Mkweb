import React from "react";
import { BarChart2, Zap, Users, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCards = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <BarChart2 className="w-6 h-6 text-[#0284c7]" />,
      title: "Growth Plateaus",
      subtitle: "RE-IGNITE SCALING",
      description:
        "Market dynamics shifting faster than organizational adaptation, eroding competitive position. We diagnose root barriers and realign growth engines.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0284c7]" />,
      title: "Operational Inefficiency",
      subtitle: "STREAMLINE EXECUTION",
      description:
        "Legacy processes and siloed structures limiting agility and scalability. We remove handoff friction and embed event-driven workflows.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0284c7]" />,
      title: "Talent Constraints",
      subtitle: "LEADERSHIP ALIGNMENT",
      description:
        "Leadership capability gaps and cultural barriers impeding strategic execution. We build high-performing workforce structures.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with PALBON Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>HOW WE CAN HELP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Solving the critical challenges <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              holding back your growth
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We partner with leadership teams to diagnose operational bottlenecks, restructure workflows, and deliver measurable enterprise impact.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-indigo-200/90 rounded-3xl p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <span className="text-[11px] font-extrabold text-[#0284c7] tracking-widest uppercase font-poppins block mb-2">
                  {service.subtitle}
                </span>

                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;