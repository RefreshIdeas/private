import { motion } from "framer-motion";

export const AnimatedTextWord = ({
  text,
  textClasses,
  delay,
  hightlistText,
  justify = "start",
}) => {
  const words = text.split(" ");

  // Variants for each word.

  const child = {
    visible: {
      translateY: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
    hidden: {
      translateY: "100%",
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-${justify}`}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <div className="h-max overflow-hidden" key={index}>
          {hightlistText?.text.includes(word) ? (
            <motion.p
              variants={child}
              className={`${textClasses} ${hightlistText.class}`}
              key={index}
            >
              {word}
            </motion.p>
          ) : (
            <motion.p variants={child} className={textClasses} key={index}>
              {word}
            </motion.p>
          )}
        </div>
      ))}
    </motion.div>
  );
};
