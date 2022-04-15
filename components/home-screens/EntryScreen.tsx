import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import RotatingText from "../RotatingText";
import SlidingText from "../SlidingText";

interface IEntryScreenProps {
  custom: number;
}

export const screen: Variants = {
  enter: (i) => ({
    transform: i > 0 ? "translateY(100%)" : `translateY(-100%)`,
    opacity: 0,
  }),
  center: {
    transform: "translateY(0%)",
    opacity: 1,
  },
  leave: (i) => ({
    transform: i > 0 ? "translateY(-100%)" : `translateY(100%)`,
    opacity: 0,
  }),
};

const EntryScreen: React.FunctionComponent<IEntryScreenProps> = (props) => {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-full grid grid-rows-4 grid-cols-4"
        custom={props.custom}
        variants={screen}
        initial="enter"
        animate="center"
        exit="leave"
        transition={{ duration: 0.5 }}
      >
        <div className="col-start-2 col-span-1 row-start-1 row-span-1 relative flex justify-center items-center">
          <RotatingText
            title="To"
            rotatingTexts={["Learn", "Adapt", "Succeed"]}
            w={16}
          />
        </div>

        <div className="col-start-2 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
          <Image
            alt="Change is forever"
            src="/drawing.svg"
            width="500px"
            height="500px"
            objectFit="contain"
          />
        </div>
        <div className="col-start-4 col-span-1 row-start-4 row-span-1 relative">
          <div className="text-xl text-white absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <SlidingText text="Change is Forever" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EntryScreen;
