import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Opens every page at the top so a new route never starts mid-scroll.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
