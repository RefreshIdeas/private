import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import astronaut from "../../images/astronout-gif.gif";
import firebaseLogo from "../../images/firebase_logo.png";
import reactLogo from "../../images/react_logo.png";
import shopifyLogo from "../../images/shopify_logo.png";
import sassLogo from "../../images/sass_logo.png";
import htmlLogo from "../../images/html_logo.png";
import cssLogo from "../../images/css_logo.png";
import mysqlLogo from "../../images/mysql_logo.png";
import nodeLogo from "../../images/node_logo.png";
import tailwindLogo from "../../images/tailwind_logo.png";
import bootstrapLogo from "../../images/bootstrap_logo.png";
import sequelizeLogo from "../../images/sequelize_logo.png";
import jsLogo from "../../images/js_Logo.png";
import circle3d from "../../images/3d_circle_gif.gif";
import instaclone from "../../images/instaclone.png";
import youtubeclone from "../../images/youtubeClone.jpg";
import schoolapi from "../../images/schoolapi.jpg";
import { useGSAP } from "@gsap/react";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import { useScreenSize } from "../../hooks/useScreenSize";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Icon } from "@iconify/react";
export const HomeSec3 = ({ scrollTriggered }) => {
  let isLargeDevice = useScreenSize("lg", true);
  let lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }
    gsap.ticker.add(update);
    if (isLargeDevice) {
      ScrollTrigger.enable();
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".animation2",
          scroller: ".scrollableBlock",
          start: "top top",
          end: `${isLargeDevice ? screen.height * 2 : 0} top`,
          pin: ".animation2",
          scrub: 2,
          // snap: 1,
        },
      });
      tl.to(".imageAnimation", {
        ...(isLargeDevice && {
          opacity: 1,
          translateX: "0%",
          right: "0%",
          filter: "grayscale(0)",
          duration: 5,
          ease: "power1.inOut",
        }),
      })?.to(".fadeUp", {
        opacity: 1,
        translateY: "0",
        duration: 4,
        ease: "power1.inOut",
      });
      //second section
      let blocks = gsap.utils.toArray(".hrozontalBlocks");
      blocks.forEach((val, index) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: val,
            scroller: ".horizontal_scroll",
            horizontal: true,
            start: "10% 80%",
            end: `50% 100%`,
            //
            scrub: 2,
            // toggleActions: "play reset play reset",
          },
        });
        tl.to(val, {
          // backgroundColor: "white",
          translateY: 0,
          opacity: 1,
          duration: 1,
        });
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".horizontal_scroll",
          scroller: ".scrollableBlock",
          // horizontal: true,
          start: "start start",
          end: () =>
            "+=" +
            document.body.querySelector(".horizontal_scroll")?.scrollWidth,
          //
          pin: true,
          scrub: 1,
          // snap:
          //   1 /
          //   (document.body.querySelector(".block_wrapper")?.children.length - 1),
        },
      });
      tl2
        .from(".rotatingImg", {
          scale: 0.6,
          duration: 1,
          opacity: 0,
          ease: "power1.out",
        })
        .to(
          ".horizontal_scroll",
          {
            scrollTo: {
              x:
                document.body.querySelector(".horizontal_scroll")?.scrollWidth -
                screen.width,
            },
            duration: 3,
            ease: "power1.out",
          },
          0,
        )
        .to(
          ".rotatingImg",
          {
            rotate: "+=360deg",
            duration: 2,
            display: "block",
            opacity: 1,
            ease: "power1.out",
          },
          0,
        );
      // rotate(360deg) translateY(144px) scale(7.5)
      let imageHole = gsap.timeline({
        scrollTrigger: {
          trigger: ".forImageZoom",
          scroller: ".scrollableBlock",
          start: "top top",
          end: "2000 bottom",
          scrub: 2,
          pin: true,
        },
      });
      imageHole
        .to(
          ".rotatingImg",
          {
            translateY: "144px",
            filter: "grayscale(1)",
            scale: "7.5",
            opacity: 0,
            duration: 5,
            ease: "power1.inOut",
          },
          0,
        )
        .to(".rotatingImg", {
          display: "none",
        });
    }

    return () => {
      gsap.ticker.remove(update);
      // ScrollTrigger.killAll();
      console.log("out");
    };
  }, [isLargeDevice]);

  return (
    <section className="third panel stopScroll">
      <div className="outer">
        <div className="inner overflow-x-hidden">
          <div className="bg one bg-color1">
            <ReactLenis
              options={{
                duration: 2,
              }}
              ref={lenisRef}
              autoRaf={false}
              className="overflow-y-auto overflow-x-hidden no-scrollbar relative h-[100svh] scrollableBlock w-full  "
            >
              <div className="animation2 flex flex-wrap w-full lg:h-[100svh] items-center  container relative justify-between">
                <div className="imageAnimation lg:absolute lg:basis-6/12 basis-full lg:right-[50%] lg:translate-x-[50%]  z-10  items-center lg:h-full flex justify-center overflow-hidden lg:grayscale lg:py-0 pt-[8rem]">
                  <img
                    src={astronaut}
                    alt=""
                    className="lg:max-w-[50vw] lg:h-[70rem] object-contain object-center fixImage mix-blend-color"
                  />
                </div>
                <div className=" lg:basis-5/12 basis-full relative textsection z-10  lg:py-0 pb-[4rem]">
                  <AnimatedTextWord
                    text={` I'm a full-stack developer`}
                    textClasses={
                      "lg:text-[2rem] text-[1.8rem] text-color3 fadeUp normal-case mr-2 leading-[60px] lg:translate-y-[40px] lg:opacity-0"
                    }
                    justify={"start"}
                    delay={0.2}
                    hightlistText={{
                      text: ["crafting", "dynamic", "web", "solutions."],
                      class: "text-color3 font-medium",
                    }}
                  />

                  <p className=" "></p>

                  <div className="max-w-[700px]">
                    <AnimatedTextWord
                      text={`I Can Design Anything You Want`}
                      textClasses={
                        "2xl:text-[6rem] lg:text-[6rem] text-[4rem] 2xl:leading-[8rem] lg:leading-[7rem] leading-[4.5rem] text-color2 normal-case mr-3  lg:mb-0 mb-[20px] fadeUp lg:translate-y-[40px] lg:opacity-0"
                      }
                      justify={"start"}
                      delay={0.8}
                      hightlistText={{
                        text: ["crafting", "dynamic", "web", "solutions."],
                        class: "text-color3 font-medium",
                      }}
                    />
                  </div>

                  <h3 className="">
                    <br className="md:block hidden" />
                  </h3>

                  <AnimatedTextWord
                    text={`Greetings! As a seasoned full-stack developer with 4 years of expertise, I bring a wealth of skills to elevate your project. I thrive on the collaborative design process ensuring success at every stage. Let's create something extraordinary together!`}
                    textClasses={
                      "text-[1.8rem] leading-[30px] pera text-color2 font-extralight fadeUp normal-case mr-2 lg:translate-y-[40px] lg:opacity-0"
                    }
                    justify={"start"}
                    delay={1}
                    hightlistText={{
                      text: ["crafting", "dynamic", "web", "solutions."],
                      class: "text-color3 font-medium",
                    }}
                  />

                  <div className="fadeUp lg:opacity-0 lg:translate-y-[40px]">
                    <a href="#" className="btn secondary btn-lg mt-[5rem]  ">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>

              <img
                src={circle3d}
                className="w-full h-[100svh] rotatingImg fixed origin-center left-0 object-contain object-center hidden top-0"
                alt=""
              />

              <div className="horizontal_scroll hidden lg:h-[100svh] lg:my-0 my-[8rem] md:flex items-end lg:pb-[150px] overflow-x-scroll no-scrollbar center theme_mask_image">
                <div className="block_wrapper  flex w-max items-end no-scrollbar">
                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={reactLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={firebaseLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={shopifyLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={sassLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={htmlLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={cssLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={mysqlLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={nodeLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={tailwindLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={bootstrapLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={sequelizeLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[calc(100vw/4)] w-[100svw] hrozontalBlocks duration-300 ease-linear px-[10px] lg:translate-y-[100px] md:opacity-0">
                    <div className="w-full hover:bg-white group glass_effect rounded-2xl h-full flex justify-center flex-col py-[30px]">
                      <img
                        src={jsLogo}
                        className="h-[100px] w-full object-contain"
                        alt=""
                      />
                      <p className=" group-hover:text-color1 text-color2 group-hover:h-auto text-[16px] font-extralight overflow-hidden px-[20px] mt-[20px] text-center duration-300 ease-linear">
                        React.js expert: Dynamic UIs, Redux state,
                        RESTful/GraphQL, responsive design, testing, CI/CD, Git,
                        performance optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="forImageZoom lg:h-[100svh] lg:mt-0 mt-[8rem]"></div>

              <div className="latestWorkSection relative  z-10 ">
                <div className="container flex items-center justify-center flex-col">
                  <div className="heading w-full px-[2rem]">
                    <h2 className="2xl:text-[6rem] lg:text-[6rem] text-[4rem] 2xl:leading-[8rem] lg:leading-[7rem] leading-[4.5rem] mb-[2rem]  text-start w-full  text-color2 font-light  latestWorkHeading">
                      Latest work
                    </h2>
                  </div>
                  <div className="  latestWork  rounded-[30px] w-full">
                    {/* The button to open modal */}

                    {/* Put this part before </body> tag */}

                    <div className="relative md:pb-[8rem] pb-[5rem] shadow-2xl overflow-hidden">
                      <img
                        src={instaclone}
                        alt="Insta Clone"
                        className=" w-full md:rounded-[4rem] rounded-[2rem] md:h-[70rem] h-[40rem] object-cover object-top z-[1] relative"
                      />
                      <h2 className="text-color2 md:text-[4rem] text-[3rem] font-light leading-[50px] mt-[10px] px-[20px]">
                        {" "}
                        Insta Clone
                      </h2>
                      <p className="text-color2 text-[18px] font-extralight flex items-center uppercase px-[20px]">
                        {" "}
                        Frontend and backend{" "}
                      </p>
                    </div>

                    <div className="relative md:pb-[8rem] pb-[5rem] shadow-2xl overflow-hidden">
                      <img
                        src={youtubeclone}
                        alt="Insta Clone"
                        className=" w-full md:rounded-[4rem] rounded-[2rem] md:h-[70rem] h-[40rem] object-cover object-top z-[1] relative"
                      />
                      <h2 className="text-color2 md:text-[4rem] text-[3rem] font-light leading-[50px] mt-[10px] px-[20px]">
                        {" "}
                        Youtube Clone
                      </h2>
                      <p className="text-color2 text-[18px] font-extralight flex items-center uppercase px-[20px]">
                        {" "}
                        Frontend and backend{" "}
                      </p>
                    </div>

                    <div className="relative md:pb-[8rem] pb-[5rem] shadow-2xl overflow-hidden">
                      <img
                        src={schoolapi}
                        alt="Insta Clone"
                        className=" w-full md:rounded-[4rem] rounded-[2rem] md:h-[70rem] h-[40rem] object-cover object-top z-[1] relative"
                      />
                      <h2 className="text-color2 md:text-[4rem] text-[3rem] font-light leading-[50px] mt-[10px] px-[20px]">
                        {" "}
                        myschool
                      </h2>
                      <p className="text-color2 text-[18px] font-extralight flex items-center uppercase px-[20px]">
                        {" "}
                        Node js api's
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ReactLenis>
          </div>
        </div>
      </div>
    </section>
  );
};
