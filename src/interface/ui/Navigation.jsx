import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Navigation = ({ show }) => {
  let [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (show === true) {
      setShowNav(show);
    }

    if (show === false) {
      setTimeout(() => {
        setShowNav(show);
      }, 1000);
    }
  }, [show]);

  if (!showNav) return null;
  return (
    <>
      <nav className="mainNav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Learn</li>
          <li>Blog</li>
        </ul>
        <div className="bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdmVzJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')]  h-screen w-full fixed z-10 top-0 left-0 opacity-10 md:hidden"></div>
        <div className="md:hidden block">
          <div className="flex justify-center items-center">
            <Icon
              icon="mdi:instagram"
              className=" text-color3 text-[38px] mx-2.5"
            />
            <Icon
              icon="iconoir:linkedin"
              className=" text-color3 text-[38px] mx-2.5"
            />
          </div>
        </div>
      </nav>
      <motion.div
        className="navigation_anmation_wrapper md:hidden top-0"
        initial={{ height: "100vh" }}
        animate={{ height: "0" }}
        exit={{ height: "0" }}
        transition={{ duration: 1 }}
      />

      {!show && (
        <motion.div
          className="navigation_anmation_wrapper md:hidden top-0"
          initial={{ height: "0" }}
          animate={{ height: "100vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 1 }}
        />
      )}
    </>
  );
};
