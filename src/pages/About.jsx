import gsap from "gsap/gsap-core";
import PageTransitions from "../animation/PageTransitions";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import lmsImage from "../images/lms.jpg";
import todoImage from "../images/todo.jpg";
import adminPanelImage from "../images/admin-panel.jpg";
import instaclone from "../images/instaclone.png";
import youtubeclone from "../images/youtubeClone.jpg";
import schoolapi from "../images/schoolapi.jpg";
import firebaseLogo from "../images/firebase_logo.png";
import reactLogo from "../images/react_logo.png";
import shopifyLogo from "../images/shopify_logo.png";
import sassLogo from "../images/sass_logo.png";
import htmlLogo from "../images/html_logo.png";
import cssLogo from "../images/css_logo.png";
import mysqlLogo from "../images/mysql_logo.png";
import nodeLogo from "../images/node_logo.png";
import tailwindLogo from "../images/tailwind_logo.png";
import bootstrapLogo from "../images/bootstrap_logo.png";
import sequelizeLogo from "../images/sequelize_logo.png";
import jsLogo from "../images/js_Logo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal_vertical } from "../animation/TextReveal_vertical";
import { UniversalFadeUp } from "../animation/UniversalFadeUp";
import OverlayTextReveal from "../animation/OverlayTextReveal";
import { RevealRotate } from "../animation/RevealRotate";
import { SkillCard } from "../components/layout/SkillCard";
import { InnerPage_heroSec } from "../components/layout/InnerPage_heroSec";
import { FlareImages } from "../components/layout/FlareImages";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  let skillsArray = [
    { name: "HTML", logo: htmlLogo, percentage: "90" },
    { name: "SCSS", logo: sassLogo, percentage: "80" },
    { name: "REACT JS", logo: reactLogo, percentage: "80" },
    { name: "MYSQL", logo: mysqlLogo, percentage: "82" },
    { name: "SHOPIFY", logo: shopifyLogo, percentage: "65" },
    { name: "CSS", logo: cssLogo, percentage: "80" },
    { name: "BOOTYSTRAP", logo: bootstrapLogo, percentage: "75" },
    { name: "JAVSCRIPT", logo: jsLogo, percentage: "80" },
    { name: "TAILWIND CSS", logo: tailwindLogo, percentage: "90" },
    { name: "NODE JS", logo: nodeLogo, percentage: "75" },
    { name: "SEQUELIZE", logo: sequelizeLogo, percentage: "71" },
    { name: "FIRE BASE", logo: firebaseLogo, percentage: "70" },
  ];

  return (
    <>
      <InnerPage_heroSec
        subheading="Ashish Prajapati"
        heading="Full Stack Developer"
        pera="Full Stack Developer: Crafting seamless digital experiences, from front-end elegance to back-end efficiency, mastering versatile technologies."
      />

      <div className="container overflow-hidden">
        <div className="flex items-center justify-center flex-col max-w-[1100px] mx-auto">
          <TextReveal_vertical
            text="As a seasoned full-stack developer rooted in Apeldoorn since 2020, I seamlessly blend innovation with code. My journey is fueled by a passion for backend development with precision."
            classes="lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-light text-color2 normal-case mr-4"
            justify="start"
          />

          <div className="mt-[4rem] max-w-[1100px]">
            <TextReveal_vertical
              text="Over the years, I've honed my skills to deliver not just
            functional solutions but immersive and delightful experiences.
            From architecting robust backend systems to designing sleek user
            interfaces, my commitment is unwavering. I am now poised and ready
            for collaborative endeavors that go beyond expectations. Let's
            join forces to elevate your digital vision, creating a lasting
            imprint in the vast and ever-evolving landscape of technology."
              classes="lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-light text-color2 normal-case mr-4"
              justify="start"
            />
          </div>
        </div>
      </div>

      <div className="container md:mt-[14rem] mt-[10rem] overflow-hidden">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:basis-6/12 basis-full relative">
            {skillsArray.map(({ name, logo, percentage }, index) => {
              if (index <= 5)
                return (
                  <RevealRotate defaultside="left" key={name}>
                    <SkillCard
                      percent={percentage}
                      skillname={name}
                      skilllogo={logo}
                    />
                  </RevealRotate>
                );
            })}
          </div>
          <div className="md:basis-6/12 basis-full relative md:mt-[100px]">
            {skillsArray.map(({ name, logo, percentage }, index) => {
              if (index >= 6)
                return (
                  <RevealRotate defaultside="right" key={name}>
                    <SkillCard
                      percent={percentage}
                      skillname={name}
                      skilllogo={logo}
                    />
                  </RevealRotate>
                );
            })}
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="max-w-[1000px] mx-auto md:mt-[12rem] mt-[8rem] flex flex-col items-centr justify-center">
          <OverlayTextReveal>
            <h1 className="2xl:text-[6rem] lg:text-[6rem] text-[4rem] 2xl:leading-[8rem] lg:leading-[7rem] leading-[4.5rem] uppercase font-light text-color2 whitespace-nowrap">
              Professional
            </h1>
          </OverlayTextReveal>
          <OverlayTextReveal revealingSide="right">
            <h1 className="2xl:text-[6rem] lg:text-[6rem] text-[4rem] 2xl:leading-[8rem] lg:leading-[7rem] leading-[4.5rem] uppercase font-light text-color2 whitespace-nowrap">
              Journey
            </h1>
          </OverlayTextReveal>
          <div className="md:mt-[5rem] mt-[3.5rem] max-w-[800px] hover:max-w-[100%] duration-500 ease-linear ">
            <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
              <p className="text-color2 font-light md:text-[3rem] text-[2.4rem] md:flex justify-between items-end pb-10">
                The Refresh Ideas
                <span className="md:text-[2rem] text-[1.4rem] font-extralight block">
                  2022 - Present
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
              <p className="text-color2 font-light md:text-[3rem] text-[2.4rem] md:flex justify-between items-end pb-10">
                The Get Enquiry
                <span className="md:text-[2rem] text-[1.4rem] font-extralight block">
                  2020 - 2022{" "}
                  <span className="md:text-[1.4rem] text-[1.1rem]">
                    (Frelance)
                  </span>
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

      <div className="lg:block hidden overflow-hidden">
        <FlareImages
          imagesArray={[
            todoImage,
            adminPanelImage,
            instaclone,
            youtubeclone,
            schoolapi,
            lmsImage,
          ]}
        >
          <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
            <img
              src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
              className="h-[10rem] mx-auto w-[10rem] mb-[3rem] object-center"
              alt=""
            />
          </UniversalFadeUp>
          <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
            <p className="text-color2 text-[2.4rem] max-w-[500px] text-center font-light">
              Follow my GitHub, where the echoes of creativity resonate like a
              lion's roar through the vast expanse of code.
            </p>
          </UniversalFadeUp>
          <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
            <button className="btn primary btn-lg mx-auto block mt-[3rem]">
              Explore
            </button>
          </UniversalFadeUp>
        </FlareImages>
      </div>

      <div className="block lg:hidden py-[8rem] bg-color1 overflow-hidden">
        <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
          <img
            src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
            className="h-[10rem] mx-auto w-[10rem] mb-[3rem] object-center"
            alt=""
          />
        </UniversalFadeUp>
        <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
          <p className="text-color2 text-[2.4rem] text-center font-light">
            Follow my GitHub, where the echoes of creativity resonate like a
            lion's roar through the vast expanse of code.
          </p>
        </UniversalFadeUp>
        <UniversalFadeUp initialPosition="translate-y-[60%] opacity-0">
          <button className="btn primary btn-lg mx-auto block mt-[3rem]">
            Explore
          </button>
        </UniversalFadeUp>
      </div>
    </>
  );
};
export default PageTransitions(About);
