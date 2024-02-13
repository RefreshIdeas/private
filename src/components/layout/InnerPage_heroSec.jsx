import { Icon } from "@iconify/react";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import { MagneticHover } from "../../animation/MagneticHover";

export const InnerPage_heroSec = ({
  heading = "heading",
  subheading = "subheading",
  pera = "peragraph",
}) => {
  function scrolldown() {
    gsap.to(window, 1, { scrollTo: { y: screen.height - 250 } });
  }

  return (
    <div>
      <div className="relative container flex items-center flex-col justify-center h-screen heroSection pt-[100px] overflow-hidden">
        <AnimatedTextWord
          text={subheading}
          textClasses={
            "lg:text-[2.4rem] spotlight md:text-[2.4rem] text-[2rem] text-color3 font-light normal-case pr-2"
          }
          justify={"center"}
          delay={1.8}
        />
        <div className="spacer mt-10"></div>
        <AnimatedTextWord
          text={heading}
          textClasses={
            "xl:text-[12rem] xl:leading-[15rem] lg:text-[9rem] lg:leading-[10rem] spotlight md:text-[7rem] md:leading-[8rem] text-[5rem] leading-[7rem] text-color2 font-light normal-case md:pr-10 pr-5"
          }
          justify={"center"}
          delay={1}
        />

        <div className="max-w-[700px] mt-10">
          <AnimatedTextWord
            text={pera}
            textClasses={
              "lg:text-[1.8rem] spotlight text-[1.8rem] text-color2 font-extralight normal-case pr-2"
            }
            justify={"center"}
            delay={1.8}
          />
          <div className="spacer mt-10"></div>
          <MagneticHover magneticValue={0.8}>
            <div className="flex justify-center items-center h-[100px] w-[100px] ">
              <Icon
                icon="fluent-mdl2:drill-down"
                onClick={() => scrolldown()}
                className="w-[2.2rem] h-[2.2rem] mx-auto text-color2  cursor-pointer scrolldown"
              />
            </div>
          </MagneticHover>
        </div>
      </div>
    </div>
  );
};
