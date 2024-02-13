import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export let Marquee = ({ children, duration = 10 }) => {
  let ref = useRef();
  let location = useLocation();
  let loopCount = 12;
  let loopArray = Array.from({ length: loopCount }, (_, index) => index);

  useGSAP(() => {
    let currentScroll = 0;
    let isScrollingDown = true;
    let marque = ref.current;
    let tween = gsap
      .to(marque.querySelectorAll(".marquee__part"), {
        xPercent: -100,
        repeat: -1,
        duration: duration,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(marque.querySelector(".marquee__inner"), { xPercent: -50 });

    // window.addEventListener("scroll", function () {
    //   if (window.pageYOffset > currentScroll) {
    //     isScrollingDown = true;
    //   } else {
    //     isScrollingDown = false;
    //   }

    //   gsap.to(tween, {
    //     timeScale: isScrollingDown ? 1 : -1,
    //   });

    //   currentScroll = window.pageYOffset;
    // });
    return () => {
      tween.kill();
    };
  }, [location]);

  return (
    <>
      <div
        ref={ref}
        className="marquee  w-full h-max overflow-hidden theme_mask_image"
      >
        <div className="marquee__inner flex flex-auto " aria-hidden="true">
          {loopArray.map((val, index) => (
            <div className="marquee__part shrink-0" key={index}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
