import React from "react";
import { Icon } from "@iconify/react";
import owner from "../../images/all.png";
import { motion } from "framer-motion";
import { Marquee } from "../../animation/Marquee";
export const HomeHero = () => {
  return (
    <section className="first panel">
      <div className="outer">
        <div className="inner">
          <div className="bg one bg-color1">
            <div className="relative  h-[100svh] w-full flex pt-[20vh] overflow-hidden theme_mask_image">
              <div className="absolute left-0 w-full md:top-[40vh] top-[25vh] overflow-hidden bg-cover">
                <div>
                  <Marquee duration={40}>
                    <div className=" lowercase md:text-[20rem] text-[8rem] font-light tracking-[8px] text-color2  flex items-center mr-20">
                      Ashish
                      <Icon
                        className="text-color3 text-[9rem] mx-20 "
                        icon="fluent:text-asterisk-20-regular"
                      />
                      Prajapati
                      <Icon
                        className="text-color3 text-[9rem] mx-20 "
                        icon="fluent:text-asterisk-20-regular"
                      />
                      Elevating
                      <Icon
                        className="text-color3 text-[9rem] mx-20 "
                        icon="fluent:text-asterisk-20-regular"
                      />
                      Possibilities as a{" "}
                      <Icon
                        className="text-color3 text-[9rem] mx-20 "
                        icon="fluent:text-asterisk-20-regular"
                      />{" "}
                      Full Stack Maestro
                    </div>
                  </Marquee>
                </div>
              </div>
              <div className="heroImage">
                <img
                  className="mx-auto w-full lg:block hidden h-[90vh] object-contain z-1  absolute "
                  src={owner}
                />

                <img
                  className="mx-auto w-full md:block hidden lg:hidden h-[90vh] object-contain z-1  absolute bottom-0 object-bottom"
                  src={owner}
                />

                <img
                  className="mx-auto w-full object-bottom h-[60vh] bottom-0 object-cover z-1 absolute md:hidden block"
                  src={owner}
                />
              </div>

              <div className="bottom-0 left-0 w-full absolute h-[200px] theme_dark_gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
