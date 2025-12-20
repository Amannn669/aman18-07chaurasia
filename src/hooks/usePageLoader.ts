import { useState, useEffect } from 'react';

export const usePageLoader = (duration: number = 3000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      
      // After transition animation completes, hide loader
      const transitionTimer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Match this with CSS transition duration

      return () => clearTimeout(transitionTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return { isLoading, isTransitioning };
};
