import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import * as React from "react";
import { rotate } from "./RotatingText";

interface IPageControlProps {
  max: number;
  current: number;
  previous: number;
  prev: () => void;
  next: () => void;
}

export const pageLoad: Variants = {
  enterFromRight: (i) => ({
    transform: "translate(0%,-50%)",
    opacity: 1,
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { duration: 1, delay: 1.5 },
    animationFillMode: "forwards",
  }),
  exitToRight: {
    transform: "translate(100%,-50%)",
    opacity: 0,
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { duration: 1, delay: 0 },
    animationFillMode: "forwards",
  },
  enterFromLeft: (i) => ({
    transform: "translate(0%,-50%)",
    opacity: 1,
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { duration: 1, delay: 1.5 },
    animationFillMode: "forwards",
  }),
  exitToLeft: {
    transform: "translateX(-100%,-50%)",
    opacity: 0,
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { duration: 1, delay: 0 },
    animationFillMode: "forwards",
  },
};

export const track: Variants = {
  trackStep: (i) => {
    if (i.current === 1 && i.previous === 5) {
      return {
        transform: [
          "translateX(100%)",
          "translateX(200%)",
          "translateX(0)",
          "translateX(20%)",
        ],
        transition: { times: [0, 0.3, 0.3, 1], duration: 1 },
      };
    }
    return {
      transform: `translateX(${i.current * 20}%)`,
      transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
      transition: { duration: 1 },
    };
  },
  trackContinuous: {
    transform: [
      "translateX(100%)",
      "translateX(200%)",
      "translateX(0)",
      "translateX(100%)",
    ],
    transition: { times: [0, 0.2, 0.2, 1], duration: 4, repeat: Infinity },
  },
};

const PageControl: React.FunctionComponent<IPageControlProps> = (props) => {
  const variantTrack: Variants = {
    trackStep: (i) => {
      if (i.current === 1 && i.previous === 5) {
        return {
          transform: [
            "translateX(100%)",
            "translateX(200%)",
            "translateX(0)",
            "translateX(20%)",
          ],
          transition: { times: [0, 0.3, 0.3, 1], duration: 1 },
        };
      }
      return {
        transform: `translateX(${i.current * (100 / props.max)}%)`,
        transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
        transition: { duration: 1 },
      };
    },
    trackContinuous: {
      transform: [
        "translateX(100%)",
        "translateX(200%)",
        "translateX(0)",
        "translateX(100%)",
      ],
      transition: { times: [0, 0.2, 0.2, 1], duration: 4, repeat: Infinity },
    },
  };
  const controls = useAnimation();
  controls.start("rotateIn");
  return (
    <motion.div
      variants={pageLoad}
      initial={{ transform: "translate(100%,-50%)", opacity: 0 }}
      animate="enterFromRight"
      exit="exitToRight"
      className="h-21 w-10 flex flex-col justify-between items-stretch absolute top-1/2 right-20 z-20"
    >
      <div
        className="h-10 w-full flex justify-center items-center text-[#fc7c2c] relative overflow-hidden"
        onClick={props.prev}
      >
        <motion.div
          className="h-full w-full flex justify-center items-center absolute top-full left-0"
          variants={rotate}
          animate={controls}
        >
          {props.current}
        </motion.div>
        <motion.div
          className="h-full w-full flex justify-center items-center absolute top-0 left-0"
          variants={rotate}
          animate={controls}
        >
          {props.previous}
        </motion.div>
      </div>
      <div className="h-1 w-full relative bg-slate-400 overflow-hidden z-20">
        <motion.div
          className="h-full w-full absolute top-0 -left-full bg-white z-20"
          animate="trackStep"
          variants={variantTrack}
          custom={{ current: props.current, previous: props.previous }}
        ></motion.div>
      </div>
      <div
        className="h-10 w-full flex justify-center items-center"
        onClick={props.next}
      >
        <button className="text-white">{props.max}</button>
      </div>
    </motion.div>
  );
};

export default PageControl;
