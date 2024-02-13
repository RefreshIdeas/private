import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { useLocation } from "react-router-dom";

export const UniversalFadeUp = ({
  starting,
  ending,
  initialPosition,
  children,
}) => {
  let ref = useRef();
  let location = useLocation();

  useEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: starting || "bottom bottom",
        end: ending || `+=${ref.current.getBoundingClientRect().height * 1.5}`,
        //   scrub: 1,
        toggleActions: "play none none reverse",
      },
      translateY: "0",
      opacity: 1,
      duration: 1.65,
      ease: "power2.inOut",
    });

    return () => {};
  }, [location.pathname]);

  return (
    <div ref={ref} className={`fadeUpElement ${initialPosition}`}>
      {children}
    </div>
  );
};
