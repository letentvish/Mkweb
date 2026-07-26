import { useState, useEffect, useRef } from "react";
import "./Component2.css";

const WhatIsSection = () => {
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

  return (
    <section ref={ref} className={`whatis-section ${isVisible ? "whatis-visible" : ""}`}>
      <h2 className="whatis-title">What Is the CaRVE Assessment?</h2>
      <p className="whatis-desc">
        The CaRVE Assessment is a psychometric tool designed to understand how
        individuals naturally behave at work.
      </p>
      <p className="whatis-focus">
        It focuses on{" "}
        <span className="orange">
          how people communicate, collaborate, make decisions, and respond to
          challenges
        </span>{" "}
        — not what they know, but how they work.
      </p>
      <div className="whatis-callout">
        CaRVE helps organisations move beyond assumptions and build self-aware,
        high-performing teams.
      </div>
    </section>
  );
};

export default WhatIsSection;
