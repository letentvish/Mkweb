import { useState, useEffect, useRef } from 'react';

export default function StatsCards() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      label: "ENGAGEMENT HOURS COMPLETED",
      value: "1.5K+",
      bgColor: "bg-[#EFFBF9]",
      textColor: "text-black",
      labelColor: "text-gray-600"
    },
    {
      label: "CORPORATE AND ACADEMIC PARTNERS",
      value: "50+",
      bgColor: "bg-[#1447E6]",
      textColor: "text-white",
      labelColor: "text-blue-100"
    },
    {
      label: "ACTIVE LEARNERS ON PLATFORM",
      value: "1K+",
      bgColor: "bg-[#9DD9D2]",
      textColor: "text-white",
      labelColor: "text-teal-50"
    },
    {
      label: "AVERAGE SATISFACTION SCORE",
      value: "4.87",
      unit: "%",
      bgGradient: "linear-gradient(180deg, rgba(157, 217, 210, 0.3) 0%, rgba(20, 71, 230, 0.4) 100%)",
      textColor: "text-black",
      labelColor: "text-black"
    }
  ];

  return (
    <div ref={ref} className="w-full py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor || ''} rounded-3xl p-8 flex flex-col justify-between min-h-[280px] stat-card`}
              style={{
                ...(stat.bgGradient ? { background: stat.bgGradient } : {}),
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`
              }}
            >
              {/* Label */}
              <h3 className={`${stat.labelColor} text-xs font-semibold tracking-wider uppercase mb-auto`}>
                {stat.label}
              </h3>

              {/* Value */}
              <div className="mt-auto">
                <div className="flex items-baseline gap-3">
                  <span className={`${stat.textColor} text-7xl font-light`}>
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className={`${stat.labelColor} text-4xl font-light`}>
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stat-card {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .stat-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .stat-card:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}