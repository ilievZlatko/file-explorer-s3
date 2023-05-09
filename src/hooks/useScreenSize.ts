import { useState, useEffect } from 'react';
import { off, on } from '../utils/events';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    on(window, 'resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to clean up after yourself ;)
    return () => off(window, 'resize', handleResize);
  }, []);

  return screenSize;
};
