import { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";

export const RevealRotate = ({
  children,
  starting,
  ending,
  defaultside = "right",
  customposition,
}) => {
  let ref = useRef();
  let side =
    defaultside === "right"
      ? "origin-bottom-left rotate-[18deg] translate-x-96 opacity-50"
      : "origin-bottom-left -rotate-[18deg] -translate-x-96 opacity-50";
  useEffect(() => {
    let revealRotate = ref.current;

    let revealImage = gsap.timeline({
      scrollTrigger: {
        trigger: revealRotate,
        start: starting || "top bottom",
        end: ending || "bottom bottom",
        scrub: 2,
        force3D: true,
      },
    });

    revealImage.to(revealRotate, {
      rotate: "0px",
      opacity: 1,
      translateX: "0px",
      duration: 2,
      ease: "linear",
      force3D: true,
    });
    return () => {
      revealImage.kill();
    };
  }, []);
  return (
    <div className={`${customposition || side}`} ref={ref}>
      {children}
    </div>
  );
};
