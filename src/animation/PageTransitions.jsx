import { motion } from "framer-motion";

const PageTransitions = (AnimateComponent) => {
  return () => (
    <>
      <AnimateComponent />

      <motion.div
        className="slide-in !glass_effect"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1, borderRadius: "10rem 10rem 0 0" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="slide-out !glass_effect"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default PageTransitions;
