import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../images/Logo-white.png";
import { useScreenSize } from "../../hooks/useScreenSize";
export const SiteLoadLoader = () => {
  let [isSiteLoaded, setIsSiteLoaded] = useState(false);
  let [siteLoad, SetSiteLoad] = useState(false);
  let isLargeDevice = useScreenSize("sm", true);
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsSiteLoaded(true);
      }, 1000);
    };
  });
  return (
    <>
      <motion.div
        className="h-[100svh]  fixed top-0 bg-black flex items-center justify-center z-[100] origin-center  left-0 w-full overflow-hidden"
        key={isSiteLoaded}
        initial={{
          ...(isSiteLoaded && {
            height: "100vh",
          }),
        }}
        animate={{ ...(isSiteLoaded && { height: "0" }) }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: "linear",
        }}
      >
        <motion.div
          className="container  absolute w-full top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"
          key={isSiteLoaded}
          initial={{
            ...(isSiteLoaded && {
              top: "50%",
              translateY: "-50%",
              right: "50%",
              translateX: "50%",
            }),
          }}
          animate={{ ...(isSiteLoaded && { top: 0, translateY: 0 }) }}
          transition={{
            duration: 1,
            ease: "linear",
          }}
        >
          <motion.img
            className={`h-[160px]  absolute top-[-80px] left-[50%] translate-x-[-50%]`}
            key={isSiteLoaded}
            src={Logo}
            alt=""
            initial={{
              ...(isSiteLoaded && {
                height: "160px",
                translateX: "-50%",
                left: "50%",
                top: "-80px",
              }),
            }}
            animate={{
              ...(isSiteLoaded && {
                rotate: 0,
                height: isLargeDevice ? "100px" : "80px",
                translateX: "0",
                left: "15px",
                top: "2.5rem",
              }),
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
