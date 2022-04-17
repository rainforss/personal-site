import * as React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { pageLoad, track } from "./PageControl";

interface IRotatingTextProps {
  title: string;
  rotatingTexts?: string[];
  rotatingUrls?: Array<{ text: string; url: string }>;
  w: number;
  translateX?: string;
  translateY?: string;
}

export const rotate: Variants = {
  rotateContinuous: (i) => ({
    transform: [
      "translateY(0)",
      "translateY(-100%)",
      "translateY(-100%)",
      "translateY(-200%)",
    ],
    opacity: [0, 1, 1, 0],
    transition: {
      times: [0, 0.2, 0.8, 1],
      delay: i * 4,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 7,
    },
  }),
  rotateIn: {
    transform: ["translateY(0)", "translateY(-100%)"],
    opacity: [0, 1],
    transition: { duration: 0.5 },
    animationFillMode: "forwards",
  },
  rotateOut: {
    transform: ["translateY(0)", "translateY(-100%)"],
    opacity: [1, 0],
    transition: { duration: 0.5 },
  },
};

const RotatingText: React.FunctionComponent<IRotatingTextProps> = (props) => {
  return (
    <div
      className={`h-10 flex flex-row justify-start items-center absolute bottom-0 left-0 -translate-x-${
        props.translateX || "1/2"
      } translate-y-1/2`}
    >
      <div className="h-1 w-4 relative bg-slate-400 mr-4 overflow-hidden">
        <motion.div
          className="h-full w-full absolute top-0 -left-full bg-slate-50 z-10 translate-x-0"
          animate="trackContinuous"
          variants={track}
        ></motion.div>
      </div>
      <span className="text-[#fc7c2c] mr-4">{props.title}</span>
      <div className={`relative overflow-hidden h-full w-32`}>
        {props.rotatingTexts &&
          props.rotatingTexts.map((t, index) => (
            <motion.div
              className="absolute top-full left-0 w-full h-full text-slate-300 flex justify-start items-center"
              variants={rotate}
              custom={index}
              animate="rotateContinuous"
              key={t}
            >
              {t}
            </motion.div>
          ))}
        {props.rotatingUrls &&
          props.rotatingUrls.map((t, index) => (
            <motion.a
              className="absolute top-full left-0 w-full h-full text-slate-300 flex justify-start items-center"
              variants={rotate}
              custom={index}
              animate="rotateContinuous"
              key={t.text}
              href={t.url}
            >
              {t.text}
            </motion.a>
          ))}
      </div>
    </div>
  );
};

export default RotatingText;
