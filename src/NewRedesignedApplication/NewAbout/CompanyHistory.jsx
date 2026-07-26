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

  const timelineEvents = [
    {
      iconSrc: blueGlobe,
      title: "Today",
      subtitle: "Solving everywhere",
      description: "Trusted by hundreds of organizations nationwide, we are now expanding into the Middle East and Europe to bring our learning solutions to the global stage."
    },
    {
      iconSrc: blueThreeArrows,
      title: "January 15th 2026",
      subtitle: "Expanding our reach",
      description: (
        <>
          Launched <span className="description-highlight">Magnetix</span>, our cutting-edge LXP, to serve the world at scale.
        </>
      )
    },
    {
      iconSrc: bluePackage,
      title: "November 25th 2024",
      subtitle: "Proving the model",
      description: "Delivering our first bespoke leadership intervention."
    },
    {
      iconSrc: blueFinger,
      title: "August 20th 2024",
      subtitle: "Founded with purpose",
      description: "Setting out to reshape corporate and academic learning."
    }
  ];

  return (
    <div ref={ref} className="w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
          {/* Left Column - Company Description */}
          <div className='px-10'>
            <h2
              className="font-semibold company-title mb-8"
              style={{
                fontSize: '48px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              Company history
            </h2>
            <p
              className="company-description"
              style={{
                fontSize:'24px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
              }}
            >
              Purpose, Passion, and Perform that's how we like to define our identity. We
              are a group of professionals with core expertise in Academia, HR, Talent &
              Learning, Coaching, and Technology. Our commitment is to remain as the
              most trusted partner in the journey of organization and individual growth.
              We do this by bringing a unique and diverse range of expertise in driving
              success today and preparing you for tomorrow.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="relative timeline-item"
                style={{
                  opacity: visibleItems.includes(index) ? 1 : 0,
                  transform: visibleItems.includes(index) ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Icon and Title Row */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full icon-container flex items-center justify-center timeline-icon-wrapper">
                    <img src={event.iconSrc} alt={event.title} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold timeline-title">
                      {event.title}
                    </h3>
                    <p className="text-lg timeline-subtitle mt-1">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="timeline-description leading-relaxed pl-16">
                  {event.description}
                </p>

                {/* Divider line (except for last item) */}
                {index < timelineEvents.length - 1 && (
                  <div className="h-px divider-line mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item:hover {
          transform: translateX(4px) !important;
        }

        .timeline-icon-wrapper {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item:hover .timeline-icon-wrapper {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .company-title,
          .company-description,
          .timeline-item,
          .timeline-icon-wrapper {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .timeline-item:hover,
          .timeline-item:hover .timeline-icon-wrapper {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}