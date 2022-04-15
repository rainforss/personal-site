import * as React from "react";
import { motion } from "framer-motion";
import { screen } from "./EntryScreen";
import NavLink from "../NavLink";

interface IAboutScreenProps {
  custom: number;
}

const AboutScreen: React.FunctionComponent<IAboutScreenProps> = (props) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full grid grid-rows-4 grid-cols-4"
      custom={props.custom}
      variants={screen}
      initial="enter"
      animate="center"
      exit="leave"
      transition={{ duration: 0.5 }}
    >
      <div className="col-start-1 col-span-2 row-start-1 row-span-2 flex justify-center items-center">
        <div className="relative">
          <NavLink text="About me" url="/about" />
        </div>
      </div>
      <div className="col-start-3 col-span-2 row-start-3 row-span-2">
        <h2 className="text-white font-semibold text-7xl uppercase w-3/4 font-main-font">
          Stay up to change with adaptive force
        </h2>
      </div>
    </motion.div>
  );
};

export default AboutScreen;
