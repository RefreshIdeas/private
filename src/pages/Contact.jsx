import PageTransitions from "../animation/PageTransitions";
import { InnerPage_heroSec } from "../components/layout/InnerPage_heroSec";
import { useEffect } from "react";
import { UniversalFadeUp } from "../animation/UniversalFadeUp";
import { Icon } from "@iconify/react";
import astronaut from "../images/astronout-gif.gif";
import { MagneticHover } from "../animation/MagneticHover";

const Contact = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <InnerPage_heroSec
        subheading="Let's Collaborate on Your Next Project"
        heading="Get in Touch"
        pera="Transforming creative ideas into seamless and impactful digital experiences through innovative full-stack development and a passion for elegant solutions."
      />

      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <div className="lg:basis-5/12 basis-full lg:order-2 lg:mb-0 mb-36">
            <MagneticHover magneticValue={0.4}>
              <img className="w-full" src={astronaut} alt="" />
            </MagneticHover>
          </div>
          <div className="lg:basis-7/12 relative z-10 basis-full lg:order-1">
            <div className="md:mt-[3.5rem] mt-[2.5rem] max-w-[800px] hover:max-w-[100%] duration-500 ease-linear ">
              <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
                <p className="text-color2 font-light text-[3rem] lg:flex justify-between items-start md:pb-10 pb-7">
                  Location
                  <span className="md:text-[2.4rem] text-[1.8rem] font-light block text-color2 mb-5 lg:text-end ">
                    B-32 mansa ram park, Dwarka, New Delhi, India.
                  </span>
                </p>
                <div className="border border-color2 relative">
                  <Icon
                    icon="formkit:right"
                    className="text-color2 text-[1.5rem] absolute top-[50%] translate-y-[-50%] -right-1"
                  />
                </div>
              </UniversalFadeUp>
            </div>

            <div className="md:mt-[3.5rem] mt-[2.5rem] max-w-[800px] hover:max-w-[100%] duration-500 ease-linear ">
              <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
                <p className="text-color2 font-light text-[3rem] lg:flex justify-between items-start md:pb-10 pb-7">
                  Email
                  <span className="md:text-[2.4rem] text-[1.8rem] font-light block text-color2 mb-5 lg:text-end ">
                    agfrontenddeveloper@gmail.gmail
                  </span>
                </p>
                <div className="border border-color2 relative">
                  <Icon
                    icon="formkit:right"
                    className="text-color2 text-[1.5rem] absolute top-[50%] translate-y-[-50%] -right-1"
                  />
                </div>
              </UniversalFadeUp>
            </div>

            <div className="md:mt-[3.5rem] mt-[2.5rem] max-w-[800px] hover:max-w-[100%] duration-500 ease-linear ">
              <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
                <p className="text-color2 font-light text-[3rem] lg:flex justify-between items-start md:pb-10 pb-7">
                  Phone
                  <span className="md:text-[2.4rem] text-[1.8rem] font-light block text-color2 mb-5 lg:text-end ">
                    +91-9650173941
                  </span>
                </p>
                <div className="border border-color2 relative">
                  <Icon
                    icon="formkit:right"
                    className="text-color2 text-[1.5rem] absolute top-[50%] translate-y-[-50%] -right-1"
                  />
                </div>
              </UniversalFadeUp>
            </div>

            <div className="md:mt-[3.5rem] mt-[2.5rem] max-w-[800px] hover:max-w-[100%] duration-500 ease-linear ">
              <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
                <p className="text-color2 font-light text-[3rem] lg:flex justify-between items-start md:pb-10 pb-7">
                  Follow on
                  <span className="md:text-[2.4rem] text-[1.8rem] font-light  text-color2 mb-5 lg:text-end  flex items-center lg:justify-end">
                    <a className="text-color2" href="insta">
                      Instagram
                    </a>
                    <Icon icon="mdi:dot" height={25} />
                    <a className="text-color2" href="insta">
                      Linkedin
                    </a>
                  </span>
                </p>
                <div className="border border-color2 relative">
                  <Icon
                    icon="formkit:right"
                    className="text-color2 text-[1.5rem] absolute top-[50%] translate-y-[-50%] -right-1"
                  />
                </div>
              </UniversalFadeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransitions(Contact);
