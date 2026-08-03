import React from "react";
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatSetsUsApart = () => {
  const navigate = useNavigate();

  const differentiators = [
    {
      icon: <Layers className="w-6 h-6 text-[#0284c7]" />,
      title: "Unified Platform & Strategy Integration",
      description: "Unlike traditional firms that hand off static PDF recommendations, we embed our strategy directly into scalable software architecture."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0284c7]" />,
      title: "Rapid Execution Timelines",
      description: "We focus on high-leverage interventions that deliver early operational wins in weeks, not years-long consulting retainers."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0284c7]" />,
      title: "Full Ownership & Zero Lock-in",
      description: "We configure your custom operating model so your team owns the capability, parameters, and long-term control."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>OUR CONSULTING ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Built for execution, not <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">
              endless advisory retainers
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Our consulting methodology combines deep domain expertise with modular technology blueprints to build self-sustaining enterprise capabilities.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-indigo-200/90 rounded-3xl p-8 shadow-lg shadow-indigo-100/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
                  {diff.icon}
                </div>

                <h3 className="text-xl font-poppins font-extrabold text-slate-900 mb-3 tracking-tight">
                  {diff.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Talk to an Advisor</span>
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

export default WhatSetsUsApart;