import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
export const TextReveal_vertical = ({
  text,
  classes,
  hightlighTextsArray,
  animationStart,
  animationEnd,
  justify = "center",
}) => {
  let arrangedText = text?.replace(/\s{2,}/g, " ");
  let revealText = arrangedText?.split(" ");
  let ref = useRef();
  useGSAP(() => {
    let translatedText = ref.current?.querySelectorAll(".translatedText");

    translatedText.forEach((val) => {
      gsap.to(val, {
        scrollTrigger: {
          trigger: val,
          start: animationStart || "bottom bottom",
          end: `+=${val.getBoundingClientRect().height * 1.5}`,
          //   scrub: 1,
          toggleActions: "play none none reverse",
        },
        translateY: "0",
        duration: 1,
        ease: "power2.inOut",
      });
    });
  }, [animationStart]);

  return (
    <div ref={ref} className={`flex justify-${justify} flex-wrap`}>
      {revealText.map((val, index) => (
        <span className="block h-max overflow-hidden" key={index}>
          {hightlighTextsArray?.includes(val) ? (
            <span
              className={`block whitespace-nowrap translatedText translate-y-[100%] text-color3 font-medium ${classes}`}
            >
              {val}
            </span>
          ) : (
            <span
              className={`block whitespace-nowrap translatedText translate-y-[100%] ${classes}`}
            >
              {val}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};
