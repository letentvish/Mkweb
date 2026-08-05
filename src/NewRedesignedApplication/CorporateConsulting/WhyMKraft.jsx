import React from "react";
import { Target, Search, UserCheck, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WhyMKraft() {
  const navigate = useNavigate();

  const advantages = [
    {
      id: "01",
      icon: <Target className="w-6 h-6 text-[#0284c7]" />,
      title: "Tailored to your real context",
      description: "No templated playbooks. Every advisory engagement is custom designed around your organization's unique operating reality.",
      image: "/media__1785045152450.png"
    },
    {
      id: "02",
      icon: <Search className="w-6 h-6 text-[#0284c7]" />,
      title: "Evidence before prescription",
      description: "We conduct deep diagnostic audits before recommending solutions, ensuring complete root-cause alignment and accuracy.",
      image: "/media__1785045321185.png"
    },
    {
      id: "03",
      icon: <UserCheck className="w-6 h-6 text-[#0284c7]" />,
      title: "Capability embedded, dependency eliminated",
      description: "We build muscle inside your organization so your internal leadership teams own execution long after we conclude.",
      image: "/cta_3d_cube_stack_1785046334407.png"
    },
    {
      id: "04",
      icon: <TrendingUp className="w-6 h-6 text-[#0284c7]" />,
      title: "Measured performance & business outcomes",
      description: "Every milestone is linked directly to quantifiable business metrics, workforce productivity, and ROI tracking.",
      image: "/cta_3d_barchart_1785046320601.png"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 text-slate-900 relative" id="why-mkraft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-extrabold tracking-wider uppercase font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>WHY MKRAFT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight">
            Why <span className="bg-gradient-to-r from-[#01182F] via-[#0284c7] to-[#01182F] bg-clip-text text-transparent">MKraft</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Diagnosing reality, embedding capability, and driving measurable business outcomes across global enterprise teams.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-sky-200/80 rounded-3xl p-6 sm:p-7 shadow-lg shadow-sky-100/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Top Badge ID & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg text-[#01182F] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="text-[#0284c7] hover:text-[#0369a1] font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer group mb-6"
                >
                  <span>Explore Advantage</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom Card Vector Graphic Illustration */}
              <div className="w-full h-28 rounded-2xl bg-sky-50/50 border border-sky-100/80 overflow-hidden relative flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
