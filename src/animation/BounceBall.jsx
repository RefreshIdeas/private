import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const BounceBall = ({
  children,
  intialPosition = "translate-y-[-350px] translate-x-[200px]",
}) => {
  let ref = useRef();

  useEffect(() => {
    let ball = ref?.current;
    let tl = gsap.timeline();
    function play() {
      tl.to(ball, 1.25, {
        y: 0,
        ease: "Bounce.easeOut",
        delay: 2,
      }).to(ball, 2.5, { x: "0", rotate: "-360deg" }, "-=1.75");

      tl.to(
        ".videoOverlay",
        0.8,
        {
          width: 0,
          delay: 1,
          ease: "power1.inOut",
        },
        0
      );
    }
    play();

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className={`${intialPosition} max-w-max max-h-max `} ref={ref}>
      {children}
    </div>
  );
};
