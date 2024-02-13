import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import coder from "../../images/coder.mp4";
import { AnimatedTextWord } from "../../interface/ui/AnimatedTextWord";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BounceBall } from "../../animation/BounceBall";

export const HomeSec4 = ({ scrollTriggered }) => {
  let [active, setactive] = useState(false);
  let ref = useRef();

  useGSAP(() => {
    if (ref.current.classList.contains("active")) {
      setactive(true);
    } else {
      setTimeout(() => {
        setactive(false);
      }, 1000);
    }
  }, [scrollTriggered]);

  return (
    <section className="panel fourth" ref={ref}>
      <div className="outer">
        <div className="inner ">
          <div className="bg one bg-color1 relative">
            <div className=" container  flex w-full flex-wrap h-full items-center">
              <div className="videoOverlay  lg:w-[50%] w-full h-full bg-black absolute bottom-0 right-0 z-10 "></div>
              <div className="lg:basis-6/12 basis-full absolute top-0 h-full  lg:w-[50%] lg:mx-0 right-0 !px-0 opacity-20 lg:opacity-100">
                <video
                  src={coder}
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover"
                ></video>
              </div>
              <div className="lg:basis-6/12 basis-full">
                {active && (
                  <BounceBall>
                    <img
                      src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
                      className="h-[30px] ml-1 block"
                      alt=""
                    />
                  </BounceBall>
                )}

                <div className="py-[1px]"> </div>
                {active && (
                  <AnimatedTextWord
                    text={"Explore my GitHub creations!"}
                    textClasses={
                      "2xl:text-[6rem] lg:text-[6rem] text-[4rem] 2xl:leading-[8rem] lg:leading-[7rem] leading-[4.5rem] text-color2 font-light mt-[15px] normal-case mr-3"
                    }
                    justify={"start"}
                    delay={1}
                    hightlistText={{
                      text: ["creations!"],
                      class: "text-color3 font-medium",
                    }}
                  />
                )}
                <div className="py-[6px]"> </div>
                {active && (
                  <AnimatedTextWord
                    text={
                      "Explore a diverse array of innovative projects and delve into collaborative code within my extensive GitHub repository collection."
                    }
                    textClasses={
                      "text-[2rem] text-color2 font-light normal-case mr-2 leading-[32px]"
                    }
                    justify={"start"}
                    delay={1.5}
                  />
                )}
                <div className="py-[15px]"> </div>

                <motion.button
                  className="btn primary btn-lg "
                  initial={{ translateY: "30px", opacity: 0 }}
                  animate={{ opacity: 1, translateY: "0px" }}
                  transition={{ duration: 0.5, delay: 1.9, ease: "linear" }}
                >
                  View GitHub
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-max">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/E7hXYyxtCqA?si=EKOhNlmuokuvOYQE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </section>
  );
};
