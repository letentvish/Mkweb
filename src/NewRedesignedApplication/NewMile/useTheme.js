import { useState, useEffect } from 'react';

/**
 * Custom hook to detect and sync with the theme attribute on document.documentElement
 * Returns true for dark mode, false for light mode
 */
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const theme = document.documentElement.getAttribute('theme');
    return theme === 'dark';
  });

  useEffect(() => {
    // Observer to watch for theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'theme') {
          const theme = document.documentElement.getAttribute('theme');
          setIsDarkMode(theme === 'dark');
        }
      });
    });

    // Start observing the document element for attribute changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['theme']
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return isDarkMode;
};
