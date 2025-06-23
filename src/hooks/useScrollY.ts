// src/hooks/useScrollY.ts
import { useState, useEffect } from 'react';

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Return a cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return scrollY;
}