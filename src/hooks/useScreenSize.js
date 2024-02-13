import { useState, useEffect } from "react";

export const useScreenSize = (screenSize, param) => {
  const [isMatching, setIsMatching] = useState(false);

  const handleResize = () => {
    const minWidths = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    };

    const currentWidth = window.innerWidth;
    const minWidth = minWidths[screenSize];

    setIsMatching(currentWidth >= minWidth);
  };

  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]); // Re-run the effect when screenSize changes

  return isMatching ? param : null;
};
