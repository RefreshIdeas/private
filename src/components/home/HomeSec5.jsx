import { Icon } from "@iconify/react";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const HomeSec5 = ({ scrollTriggered }) => {
  let [active, setactive] = useState(false);
  let ref = useRef();
  useEffect(() => {
    if (
      ref?.current?.classList?.contains("active") ||
      scrollTriggered === true
    ) {
      setactive(true);
    } else {
      setTimeout(() => {
        setactive(false);
      }, 1000);
    }
  }, [scrollTriggered]);

  var tl = gsap.timeline({});
  function play() {
    tl.to(".ball", 1.25, {
      y: 0,
      stagger: 0.4,
      ease: "Bounce.easeOut",
      delay: 4,
    }).to(".ball", 2.5, { x: "0", rotate: "-360deg", opacity: 1 }, "-=1.75");
  }
  useGSAP(() => {
    if (active) {
      play();
      gsap.to(".marquee__inner", {
        y: 0,
        translateY: 0,
        opacity: 1,
        duration: 2,
        delay: 2.5,
        ease: "power1.in",
      });
    }
  }, [Icon, scrollTriggered, active]);

  return (
    <section className=" " ref={ref}>
      <div className="">
        <div className="no-scrollbar">
          <div className="bg one bg-color1 relative h-[100svh]">
            {active && (
              <div className="flex container relative flex-col items-center h-full justify-center no-scrollbar">
                <div>
                  <AnimatedTextWord
                    text={`Conceive wonders, build the extraordinary`}
                    textClasses={
                      "text-[8rem] text-center text-color2 font-light leading-[100px] normal-case mr-8"
                    }
                    justify={"center"}
                    delay={3.5}
                    hightlistText={{
                      text: ["extraordinary"],
                      class: "gradientText",
                    }}
                  />

                  <div className="flex max-w-[250px] justify-between w-full mt-[50px] mx-auto">
                    <img
                      src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
                      alt=""
                      className="h-[40px] w-[40px] object-contai opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                    />
                    <img
                      src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"
                      alt=""
                      className="h-[42px] rounded-3xl w-[40px] object-contain opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                      alt=""
                      className="h-[40px] w-[40px] object-contain opacity-0 ball translate-y-[-350px] translate-x-[200px]"
                    />
                  </div>
                </div>

                <div
                  className="marquee absolute bottom-[80px] w-full left-0  h-max overflow-hidden "
                  style={{
                    maskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                    placeItems: "center",
                  }}
                >
                  <div
                    className="marquee__inner flex flex-auto translate-y-[100px] opacity-0"
                    aria-hidden="true"
                  >
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                    <div className="marquee__part uppercase text-[5rem] tracking-[8px] text-color2 shrink-0">
                      <Icon
                        className=" inline-block text-[7rem] mx-5"
                        icon="arcticons:mail"
                      />{" "}
                      say hi!
                      <Icon
                        className=" inline-block text-[5rem] mx-5"
                        icon="fluent:text-asterisk-20-regular"
                      />
                      agfrontenddeveloper@gmail.com
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    opacity: 1,
                    width: "100%",
                    transition: { duration: 1, ease: "linear", delay: 1 },
                  }}
                  exite={{
                    opacity: 1,
                    width: "100%",
                    transition: { duration: 1, ease: "linear", delay: 1 },
                  }}
                  className="border-t-[0.1px] border-white absolute bottom-0 z-2 bg-color1 border-opacity-30 w-full mt-[10px] mb-[10px] pt-10 pb-4 flex left-[50%] translate-x-[-50%] justify-between"
                >
                  <motion.div
                    animate={{
                      translateX: "0",
                      opacity: 1,
                      transition: { duration: 0.6, ease: "linear", delay: 2.5 },
                    }}
                    exit={{
                      translateX: "0",
                      opacity: 1,
                      transition: { duration: 0.6, ease: "linear", delay: 2.5 },
                    }}
                    className="basis-6/12 opacity-0 translate-x-[40px] relative"
                  >
                    <p className="text-[16px] text-color2  ">
                      © AP 2010 - 2024.
                    </p>
                  </motion.div>
                  <motion.div
                    animate={{
                      translateX: "0",
                      opacity: 1,
                      transition: { duration: 0.6, ease: "linear", delay: 2.5 },
                    }}
                    exit={{
                      translateX: "0",
                      opacity: 1,
                      transition: { duration: 0.6, ease: "linear", delay: 2.5 },
                    }}
                    className="basis-6/12 opacity-0 -translate-x-[40px] relative"
                  >
                    {" "}
                    <p className="text-[16px] text-color2 text-end gradientText">
                      Terms & conditions
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
