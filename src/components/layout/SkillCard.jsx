import { useEffect, useRef } from "react";

import gsap from "gsap/gsap-core";

export const SkillCard = ({ skilllogo, skillname, percent = "00" }) => {
  let ref = useRef();
  useEffect(() => {
    let hoverCard = ref?.current;
    gsap.set(hoverCard.querySelectorAll(".archieved_text_2 span"), {
      translateY: "100%",
    });

    let slideNumberTimeline = gsap.timeline({ paused: true });
    slideNumberTimeline
      .to(hoverCard.querySelectorAll(".archieved_text_1 span"), {
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.inOut",
        translateY: "-100%",
      })
      .to(
        hoverCard.querySelectorAll(".archieved_text_2 span"),
        {
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.inOut",
          translateY: "0",
        },
        0.3
      )
      .to(
        hoverCard,
        {
          backgroundColor: "#dce5e5e6",
          duration: 1,
          ease: "power1.in",
        },
        "-=1"
      );

    hoverCard.animation = slideNumberTimeline;

    hoverCard.addEventListener("mouseenter", () => {
      hoverCard.animation.play();
    });
    hoverCard.addEventListener("mouseout", () => {
      hoverCard.animation.reverse();
    });

    return () => {
      slideNumberTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full md:h-[340px] h-[300px] bg-[#1f202266] flex flex-col justify-between md:p-[5rem] p-[3rem] rounded-[4rem] relative   mb-[30px] hoverCard group"
    >
      <div className="slideNumber relative h-max overflow-hidden">
        <div className="archieved_text_1 group-hover:text-color1 duration-[1.2s] ease-in-out top-0 md:text-[8rem] text-[5rem] leading-[65px] text-color2 font-medium flex">
          <span className="relative block">{percent[0] || 0}</span>
          <span className="relative block">{percent[1] || 0}</span>
          <span className="relative block text-[5rem]"> %</span>
        </div>
        <div className="archieved_text_2 absolute duration-[1.2s] ease-in-out group-hover:text-color1 top-0 md:text-[8rem] text-[5rem] leading-[65px] text-color2 font-medium flex">
          <span className="relative block">{percent[0] || 0}</span>
          <span className="relative block">{percent[1] || 0}</span>
          <span className="relative block text-[5rem]"> %</span>
        </div>
      </div>

      <p className="text-[3rem] text-end text-color2 font-light group-hover:text-color1 duration-[1.2s] ease-in-out flex_all_center uppercase">
        <img
          src={skilllogo}
          alt=""
          className="h-[30px] mr-4 object-contain ml-auto"
        />
        {skillname}
      </p>
    </div>
  );
};
