import * as React from "react";
import { motion, Variants } from "framer-motion";
import RotatingText from "./RotatingText";
import GridBlocks from "./GridBlocks";

interface IGridBackgroundProps {
  prev?: () => void;
  next?: () => void;
}

export const gridLines: Variants = {
  toLeft: (i) => ({
    transform: ["translateX(0%)", "translateX(-100%)"],
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { delay: 1 + i * 0.1, duration: 0.5 },
    animationFillMode: "forwards",
  }),
  toRight: (i) => ({
    transform: ["translateX(-100%)", "translateX(0%)"],
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { delay: 1 + i * 0.1, duration: 0.5 },
  }),
  toTop: (i) => ({
    transform: ["translateY(0%)", "translateY(-100%)"],
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { delay: 1 + i * 0.1, duration: 0.5 },
    animationFillMode: "forwards",
  }),
  toBottom: (i) => ({
    transform: ["translateY(-100%)", "translateY(0%)"],
    transitionTimingFunction: "cubic-bezier(0.2,-2,0.8,2)",
    transition: { delay: 1 + i * 0.1, duration: 0.5 },
  }),
};

const GridBackground: React.FunctionComponent<IGridBackgroundProps> = ({
  prev,
  next,
  children,
}) => {
  const throttleLimit = 800;
  const time = Date.now();

  return (
    <div
      className="fixed h-screen w-full bg-main-bg shadow-inner-full"
      onWheel={(e) => {
        if (!prev || !next) {
          return;
        }
        var now = Date.now();
        if (now - time < throttleLimit) return;
        if (e.deltaY > 0) {
          return next();
        }
        return prev();
      }}
    >
      <motion.div
        className="fixed w-px h-full bg-stone-600 opacity-50 z-10 left-1/4 -translate-y-full"
        custom={0}
        variants={gridLines}
        animate="toBottom"
        exit="toTop"
      ></motion.div>
      <motion.div
        className="fixed w-px h-full bg-stone-600 opacity-50 z-10 left-1/2 -translate-y-full"
        custom={1}
        variants={gridLines}
        animate="toBottom"
        exit="toTop"
      ></motion.div>
      <motion.div
        className="fixed w-px h-full bg-stone-600 opacity-50 z-10 left-3/4 -translate-y-full"
        custom={2}
        variants={gridLines}
        animate="toBottom"
        exit="toTop"
      ></motion.div>
      <motion.div
        className="fixed w-full h-px bg-stone-600 opacity-50 z-10 top-1/4 -translate-x-full"
        custom={0}
        variants={gridLines}
        animate="toRight"
        exit="toLeft"
      ></motion.div>
      <motion.div
        className="fixed w-full h-px bg-stone-600 opacity-50 z-10 top-1/2 -translate-x-full"
        custom={1}
        variants={gridLines}
        animate="toRight"
        exit="toLeft"
      ></motion.div>
      <motion.div
        className="fixed w-full h-px bg-stone-600 opacity-50 z-10 top-3/4 -translate-x-full"
        custom={2}
        variants={gridLines}
        animate="toRight"
        exit="toLeft"
      ></motion.div>
      <GridBlocks>
        <motion.div
          className="relative top-0 left-0 w-full h-full z-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            animationFillMode: "forwards",
            transition: { delay: 2, duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            animationFillMode: "forwards",
            transition: { delay: 0, duration: 0.5 },
          }}
        >
          {children}
        </motion.div>
      </GridBlocks>
    </div>
  );
};

export default GridBackground;
