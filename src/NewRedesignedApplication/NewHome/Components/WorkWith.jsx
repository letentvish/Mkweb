import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import consultingImg from "../../../Assets/NewHome/WorkWith/Consulting.jpg";
import educationImg from "../../../Assets/NewHome/WorkWith/Educational.jpg";
import enterpriseImg from "../../../Assets/NewHome/WorkWith/Enterprise.jpg";
import governmentImg from "../../../Assets/NewHome/WorkWith/Government.jpg";
import hrImg from "../../../Assets/NewHome/WorkWith/hr.jpg";

const TWO_PI = Math.PI * 2;

const categories = [
  {
    id: 1,
    title: "Consulting & Training Partners",
    img: consultingImg,
    pos: { top: "40px", left: "380px" },
    width: "360px",
    orbit: 10,
    speed: 8,
    phase: 0,
  },
  {
    id: 2,
    title: "Educational Institutions",
    img: educationImg,
    pos: { top: "150px", right: "40px" },
    width: "320px",
    orbit: 12,
    speed: 9,
    phase: TWO_PI / 5,
  },
  {
    id: 3,
    title: "Enterprise & Corporate",
    img: enterpriseImg,
    pos: { top: "260px", left: "40px" },
    width: "320px",
    orbit: 10,
    speed: 10,
    phase: (TWO_PI * 2) / 5,
  },
  {
    id: 4,
    title: "Public Sector & Government",
    img: governmentImg,
    pos: { top: "440px", left: "320px" },
    width: "380px",
    orbit: 14,
    speed: 12,
    phase: (TWO_PI * 3) / 5,
  },
  {
    id: 5,
    title: "HR, L&D & Talent Teams",
    img: hrImg,
    pos: { top: "380px", right: "60px" },
    width: "320px",
    orbit: 8,
    speed: 7,
    phase: (TWO_PI * 4) / 5,
  },
];

export default function WhoWeWorkWith() {
  const orbitRefs = useRef([]);

  useEffect(() => {
    let frame;
    const t0 = performance.now();

    const tick = (now) => {
      const elapsed = now - t0;
      orbitRefs.current.forEach((el, i) => {
        if (!el) return;
        const { orbit, speed, phase } = categories[i];
        const angle = (elapsed / (speed * 1000)) * TWO_PI + phase;
        el.style.transform = `translate3d(${Math.cos(angle) * orbit}px,${
          Math.sin(angle) * orbit * 0.55
        }px,0)`;
      });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const renderPill = (cat) => (
    <div className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant rounded-full shadow-sm hover:border-secondary transition-all duration-200 cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-outline-variant/60">
        <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
      </div>
      <span className="body-md font-semibold text-on-surface pr-3">
        {cat.title}
      </span>
    </div>
  );

  return (
    <section className="w-full py-[120px] bg-surface-container-low/30 border-b border-outline-variant/60 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Desktop Container (Floating Orbital Nodes) */}
        <div className="hidden lg:block relative min-h-[580px]">
          {/* Center Heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 max-w-lg">
            <p className="label-md mb-2">ENTERPRISE ECOSYSTEM</p>
            <h2 className="headline-lg text-on-surface mb-6">
              Who We Work With
            </h2>
            <Link to="/contact">
              <button className="btn-nexus-primary">
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Floating Orbiting Pills */}
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="absolute transition-all"
              style={{ ...cat.pos, width: cat.width }}
            >
              <div ref={(el) => (orbitRefs.current[i] = el)}>
                {renderPill(cat)}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden text-center space-y-8">
          <div>
            <p className="label-md mb-2">ENTERPRISE ECOSYSTEM</p>
            <h2 className="headline-lg text-on-surface mb-4">
              Who We Work With
            </h2>
            <Link to="/contact">
              <button className="btn-nexus-primary">
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.id}>
                {renderPill(cat)}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

