import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { useLocation } from "react-router-dom";

export const UniversalFadeHorizontal = ({
  starting,
  ending,
  initialPosition,
  children,
  onfinish = false,
  defaultaftrefinish = onfinish || "-100px",
  defaultposition = initialPosition || "translate-x-[100px] opacity-80",
}) => {
  let ref = useRef();
  let location = useLocation();

  useEffect(() => {
    let fadehorizontal = ref.current;
    let fadeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: fadehorizontal,
        start: starting || "top bottom",
        end: ending || `bottom top`,
        scrub: 1,
        // toggleActions: "play none none reverse",
      },
    });
    fadeTimeline.to(fadehorizontal, {
      translateX: onfinish,
      opacity: 1,
      duration: 1.65,
      ease: "power2.inOut",
    });
  }, [location.pathname]);

  return (
    <div ref={ref} className={`fadeHorizontalElement ${defaultposition}`}>
      {children}
    </div>
  );
};
