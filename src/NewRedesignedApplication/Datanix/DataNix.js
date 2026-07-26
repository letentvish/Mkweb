import React, { useState, useEffect } from 'react';
import DataNixComponent1 from './DataNixComponent1';
import DataNixComponent2 from './DataNixComponent2';
import DataNixComponent3 from './DataNixComponent3';
import DataNixComponent4 from './DataNixComponent4';
import DataNixComponent5 from './DataNixComponent5';
import DataNixComponent6 from './DataNixComponent6';

const DataNix = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0B1B3D]' : 'bg-white'
      }`}
    >
      {/* Component 1 */}
      <DataNixComponent1 />

      {/* Component 2 */}
      <DataNixComponent2 />

      {/* Component 3 */}
      <DataNixComponent3 />

      {/* Component 4 */}
      <DataNixComponent4 />

      {/* Component 5 */}
      <DataNixComponent5 />

      {/* Component 6 */}
      <DataNixComponent6 />
    </div>
  );
};

export default DataNix;
