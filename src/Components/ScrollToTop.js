import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});

  useEffect(() => {
    const currentPath = location.pathname;

    // Save current scroll position before navigation
    return () => {
      scrollPositions.current[currentPath] = window.scrollY;
    };
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname;

    // If user clicked back/forward button (POP), restore scroll position
    if (navigationType === 'POP') {
      const savedPosition = scrollPositions.current[currentPath];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      }
    } else {
      // For new navigation (PUSH/REPLACE), scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);

  return null;
}

export default ScrollToTop;
