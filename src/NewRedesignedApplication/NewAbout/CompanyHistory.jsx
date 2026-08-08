import { useState, useEffect, useRef } from 'react';
import './CompanyHistory.css';
import blueGlobe from '../../Assets/NewAbout/Img - blue-globe.svg';
import blueThreeArrows from '../../Assets/NewAbout/Img - blue-three-arrows.svg';
import blueFinger from '../../Assets/NewAbout/Img - blue-finger.svg';
import bluePackage from '../../Assets/NewAbout/Img - blue-package-base.svg';

export default function CompanyHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, []);

  // Timeless Milestone Framework (Date mentions removed as requested)
  const timelineEvents = [
    {
      iconSrc: blueGlobe,
      title: "Global Reach & Scale",
      subtitle: "Solving everywhere",
      description: "Trusted by hundreds of organizations nationwide, we are expanding into global markets to bring our capability and diagnostic solutions to the world stage."
    },
    {
      iconSrc: blueThreeArrows,
      title: "AI LXP Innovation",
      subtitle: "Expanding our reach",
      description: (
        <>
          Launched <span className="text-[#0284c7] font-bold">Magnetix</span>, our cutting-edge AI-powered LXP, to serve enterprise learning and skill telemetry at scale.
        </>
      )
    },
    {
      iconSrc: bluePackage,
      title: "Enterprise Solutions",
      subtitle: "Proving the model",
      description: "Delivering bespoke leadership interventions, talent architecture frameworks, and culture alignment workshops."
    },
    {
      iconSrc: blueFinger,
      title: "Core Foundation",
      subtitle: "Founded with purpose",
      description: "Setting out to reshape corporate and academic learning through evidence-based diagnostics and capability building."
    }
  ];

  return (
    <div ref={ref} className="w-full py-20 px-4 sm:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Company Description */}
          <div className="space-y-6 text-left">
            <div>
              <span className="text-xs font-mono font-extrabold text-[#0284c7] tracking-widest uppercase block font-poppins mb-2">
                OUR JOURNEY
              </span>
              <h2
                className="text-4xl sm:text-5xl font-poppins font-extrabold text-[#01182F] tracking-tight leading-tight"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                Company Milestones
              </h2>
            </div>

            <p
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
              }}
            >
              Purpose, Passion, and Perform — that's how we define our identity. We are a group of professionals with core expertise in Academia, HR, Talent & Learning, Coaching, and Technology. Our commitment is to remain the most trusted partner in the journey of organization and individual growth by delivering unique, diverse expertise in driving success today and preparing you for tomorrow.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-10 text-left">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="relative timeline-item bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: visibleItems.includes(index) ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Icon and Title Row */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <img src={event.iconSrc} alt={event.title} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[#01182F] tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#0284c7] mt-0.5">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pl-16">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}