"use client";
import { useCallback, useEffect, useState } from "react";

export const BreakPoints = {
  mobile: 751,
  tablet: 992,
  desktop: 1440,
} as const;

function getBreakpointFromWidth() {
  const width = window.innerWidth;
  return {
    isMobile: width < BreakPoints.mobile,
    isLessTablet: width <= BreakPoints.tablet,
    isTablet: width > BreakPoints.mobile && width <= BreakPoints.tablet,
    isLaptop: width > BreakPoints.tablet,
    screenSize: width,
  };
}

export const useDevice = () => {
  const [breakPoint, setBreakPoint] = useState(() => {
    if (typeof window == "undefined")
      return {
        isMobile: true,
        isLessTablet: false,
        isTablet: false,
        isLaptop: false,
        screenSize: 0,
      };
    return getBreakpointFromWidth();
  });

  const handleResize = useCallback(() => {
    requestAnimationFrame(() => {
      setBreakPoint(getBreakpointFromWidth());
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakPoint;
};
