import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useScreenSize } from './useScreenSize';

export const useBreakpoints = () => {
  // Set default values to null, default false makes a falsy component to flash before screen size is calculated
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isTablet, setIsTablet] = useState<boolean | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const { width } = useScreenSize();
  const theme = useTheme();

  useEffect(() => {
    if (width <= theme.breakpoints.sm) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    }

    if (width > theme.breakpoints.sm && width <= theme.breakpoints.lg) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    }

    if (width > theme.breakpoints.lg) {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  }, [width]);

  return { isMobile, isTablet, isDesktop };
};
