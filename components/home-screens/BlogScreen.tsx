import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { screen } from "./EntryScreen";
import NavLink from "../NavLink";

interface IBlogScreenProps {
  custom: number;
}

const BlogScreen: React.FunctionComponent<IBlogScreenProps> = (props) => {
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
      <div className="col-start-3 col-span-2 row-start-1 row-span-2 flex justify-center items-center">
        <div className="relative">
          <NavLink text="Newer" url="/about" />
        </div>
      </div>
      <div className="col-start-3 col-span-2 row-start-3 row-span-2 flex justify-center items-center">
        <div className="relative">
          <NavLink text="Older" url="/about" />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogScreen;
