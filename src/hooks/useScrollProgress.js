import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollData, setScrollData] = useState({
    progress: 0,
    scrollY: 0,
    isScrolled: false,
    velocity: 0
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const timeDiff = Math.max(currentTime - lastTime, 16);
      const scrollDiff = currentScrollY - lastScrollY;
      const velocity = Math.abs(scrollDiff / timeDiff);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(Math.max(currentScrollY / totalHeight, 0), 1) : 0;

      lastScrollY = currentScrollY;
      lastTime = currentTime;

      setScrollData({
        progress,
        scrollY: currentScrollY,
        isScrolled: currentScrollY > 40,
        velocity
      });

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollData((prev) => ({ ...prev, velocity: 0 }));
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return scrollData;
}
