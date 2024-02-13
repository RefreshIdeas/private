import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap/gsap-core";

const OverlayTextReveal = ({
  children,
  revealingSide,
  onlyoverlay,
  starting,
  ending,
  scroller = false,
}) => {
  let ref = useRef();
  let revealside =
    revealingSide === "right" ? "translate-x-[200px]" : "translate-x-[-200px]";
  useGSAP(() => {
    //// text reveal
    let text = ref.current;
    let textReveal = gsap.timeline({
      scrollTrigger: {
        ...(scroller && { scroller: scroller }),
        trigger: text,
        start: starting || "center bottom",
        end: ending || `bottom center`,
        scrub: 2,
      },
    });

    textReveal
      .to(text, {
        translateX: "0px",
        duration: 4,
        ease: "power1.out",
      })
      .to(
        text.querySelector(".overlay"),
        {
          width: 0,
          duration: 3,
          ease: "linear",
        },
        0.5
      );
  }, []);
  return (
    <div
      ref={ref}
      className={`textReveal relative max-w-max ${!onlyoverlay && revealside}`}
    >
      <div className="bg-[#00000087] absolute left-0 top-0 w-full h-full overlay"></div>
      {children}
    </div>
  );
};

export default OverlayTextReveal;
