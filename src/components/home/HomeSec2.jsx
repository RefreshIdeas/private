import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const HomeSec2 = ({ scrollTriggered }) => {
  let [active, setactive] = useState(false);
  let ref = useRef();
  let text =
    "Full Stack Web Developer crafting dynamic web solutions. Expert in front-end/back-end technologies for seamless user experiences.";
  useEffect(() => {
    if (ref.current.classList.contains("active")) {
      setactive(true);
    } else {
      setTimeout(() => {
        setactive(false);
      }, 1000);
    }
  }, [scrollTriggered]);
  return (
    <section className="second panel" ref={ref}>
      <div className="outer">
        <div className="inner ">
          <div className="bg one bg-color1">
            <div className="max-w-[1100px] px-[15px] md:mt-[15rem] mt-[5rem]">
              {active && (
                <AnimatedTextWord
                  text={text}
                  textClasses={
                    "lg:text-[4rem] md:text-[3rem] text-[2.8rem] font-light text-color2 normal-case mr-4"
                  }
                  justify={"center"}
                  delay={1}
                  hightlistText={{
                    text: ["crafting", "dynamic", "web", "solutions."],
                    class: "text-color3 font-medium",
                  }}
                />
              )}

              {active && (
                <motion.div
                  className="max-w-max mx-auto glass_effect md:py-8 md:px-16 py-4 px-10 mt-16 lg:text-[2.2rem] md:text-[1.8rem] text-[1.4rem] rounded-full text-color2 flex items-center"
                  initial={{
                    translateY: "50px",
                    opacity: 0,
                  }}
                  animate={{
                    translateY: "0",
                    opacity: 1,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 0.8,
                    delay: 1,
                  }}
                >
                  <div>

                    <Icon
                  className=" inline-block text-[3rem] mx-5 text-color3"
                  icon="fluent:text-asterisk-20-regular"
                />  
                  </div>
                  <h2>
                    Explore my <Link to={""}> GitHub </Link> project! Dive into
                    code, witness innovation. Feedback welcome!
                  </h2>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
