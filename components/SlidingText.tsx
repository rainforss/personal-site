import { motion, Variants } from "framer-motion";
import * as React from "react";

interface ISlidingTextProps {
  text: string;
}

const slidingText: Variants = {
  first: () => ({
    transform: [
      "translateX(0%)",
      "translateX(-100%)",
      "translateX(100%)",
      "translateX(0%)",
    ],
    transition: {
      times: [0, 0.5, 0.5, 1],
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  }),
  second: {
    transform: ["translateX(0%)", "translateX(-200%)", "translateX(0%)"],
    transition: {
      times: [0, 1, 1],
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const SlidingText: React.FunctionComponent<ISlidingTextProps> = (props) => {
  return (
    <div className="relative w-40 h-10 overflow-hidden">
      <div className="absolute h-10 left-0 whitespace-nowrap flex items-center">
        <motion.span variants={slidingText} animate="first">
          {props.text}&nbsp;
        </motion.span>
        <motion.span variants={slidingText} animate="second">
          {props.text}&nbsp;
        </motion.span>
      </div>
    </div>
  );
};

export default SlidingText;
