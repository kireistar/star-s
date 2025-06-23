// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export function useTheme() {
  // Initialize state from a function to read from localStorage only once.
  const [isDark, setIsDark] = useState(() => {
    // This part runs ONLY on the initial render.
    // We check for window to ensure it doesn't crash on a server.
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme === 'dark';
      }
      // If no theme is stored, check the user's system preference.
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Default to dark theme if window is not available.
    return true;
  });

  // This effect runs whenever `isDark` changes.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Return the state and the function to change it.
  return { isDark, toggleTheme };
}