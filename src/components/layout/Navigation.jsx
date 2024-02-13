import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgvideo from "../../images/bg-menu.mp4";
import { useScreenSize } from "../../hooks/useScreenSize";
export const Navigation = ({ show }) => {
  let [showNav, setShowNav] = useState(false);
  let isLargeDevice = useScreenSize("sm", true);
  let variationNav =
    isLargeDevice !== true
      ? {
          animate: {
            ...(showNav ? { height: "100vh" } : { height: "0" }),
          },
          transition: {
            ease: "linear",
            duration: 0.8,
            delay: !showNav ? 0.8 : 0,
          },
        }
      : "";
  useEffect(() => {
    if (show === true) {
      setShowNav(show);
    }

    if (show === false) {
      setShowNav(show);
    }
  }, [show]);

  return (
    <>
      <motion.nav className="mainNav overflow-hidden" {...variationNav}>
        <ul>
          <li className="overflow-hidden">
            <Link to={"/home"} className="navLink">
              Home
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link to={"/about"} className="navLink">
              About
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link to={"/work"} className="navLink">
              Work
            </Link>
          </li>
          {/* <li className="overflow-hidden">
            <Link className="navLink"> Learn</Link>
          </li> */}
          <li className="overflow-hidden">
            <Link to={"/blog"} className="navLink">
              Blog
            </Link>
          </li>
        </ul>
        <video
          src={bgvideo}
          className="h-[100svh] object-cover w-full absolute z-10 top-0 left-0 opacity-[20%] md:hidden"
          loop
          autoPlay
          muted
        ></video>
        <div className="md:hidden block">
          <div className="flex justify-center items-centeroverflow-hidden">
            <motion.div
              className=" translate-y-[100px]"
              animate={{
                ...(showNav ? { translateY: 0 } : { translateY: "100px" }),
              }}
              transition={{
                ease: "linear",
                duration: 0.8,
                delay: showNav ? 0.6 : 0,
              }}
            >
              <Icon
                icon="mdi:instagram"
                className=" text-color3 text-[38px] mx-2.5"
              />
            </motion.div>

            <motion.div
              className=" translate-y-[100px]"
              animate={{
                ...(showNav ? { translateY: 0 } : { translateY: "100px" }),
              }}
              transition={{
                ease: "linear",
                duration: 0.8,
                delay: showNav ? 0.6 : 0,
              }}
            >
              <Icon
                icon="iconoir:linkedin"
                className=" text-color3 text-[38px] mx-2.5"
              />
            </motion.div>
          </div>
        </div>
      </motion.nav>
      {/* <motion.div
        key={showNav}
        className="bg-black fixed left w-full md:hidden top-0"
        initial={{ ...(!showNav ? { height: "0" } : { height: "100vh" }) }}
        animate={{ ...(!showNav ? { height: "100vh" } : { height: "0" }) }}
        transition={{ duration: 1, delay: !showNav ? 0.5 : 0 }}
      /> */}
    </>
  );
};
