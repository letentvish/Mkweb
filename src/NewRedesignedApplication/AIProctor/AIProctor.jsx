import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Comp6 from "./Comp6";
import Comp7 from "./Comp7";

const AIProctor = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('theme');
      setIsDarkMode(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: isDarkMode ? "#0A0F1E" : "#F9FAFB",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
    }}>
      <HeroSection />
      <Comp2 />
      <Comp3 />
      <Comp4/>
      <Comp5 />
      <Comp6/>
      <Comp7/>
    </div>
  );
};

export default AIProctor;
