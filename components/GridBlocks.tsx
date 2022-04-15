import { motion, Variants } from "framer-motion";
import * as React from "react";

interface IGridBlocksProps {}

export const gridContainer: Variants = {
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hide: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const gridBlock: Variants = {
  show: {
    background: "rgba(0,0,0,0)",
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
  hide: {
    background: "rgba(255,255,255,1)",
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
};

const GridBlocks: React.FunctionComponent<IGridBlocksProps> = ({
  children,
}) => {
  return (
    <motion.div
      className="relative h-full w-full grid grid-cols-4 grid-rows-4"
      variants={gridContainer}
      animate="show"
      exit="hide"
    >
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div className="bg-white" variants={gridBlock}></motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-20"
        animate={{ opacity: [0, 1], transition: { delay: 2, duration: 0.5 } }}
        exit={{ opacity: [1, 0], transition: { delay: 0, duration: 0.5 } }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GridBlocks;
