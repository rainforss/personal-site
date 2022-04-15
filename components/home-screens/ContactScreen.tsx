import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { screen } from "./EntryScreen";
import NavLink from "../NavLink";
import RotatingText from "../RotatingText";

interface IProjectScreenProps {
  custom: number;
}

const ProjectScreen: React.FunctionComponent<IProjectScreenProps> = (props) => {
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
      <div className="col-start-2 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
        <Image
          alt="Change is forever"
          src="/contact.svg"
          width="500px"
          height="500px"
          objectFit="contain"
        />
      </div>
      <div className="col-start-3 col-span-2 row-start-1 row-span-2 flex justify-center items-center">
        <div className="relative">
          <NavLink text="Contact" url="/contact" />
        </div>
      </div>
      <div className="col-start-2 col-span-1 row-start-3 row-span-1 relative flex justify-center items-center">
        <RotatingText
          title="Follow me"
          w={16}
          rotatingUrls={[
            {
              text: "LinkedIn",
              url: "https://www.linkedin.com/in/jake-chen-210818128/",
            },
            {
              text: "PowerApps",
              url: "https://powerusers.microsoft.com/t5/user/viewprofilepage/user-id/372283",
            },
            { text: "Github", url: "https://github.com/rainforss" },
          ]}
        />
      </div>
    </motion.div>
  );
};

export default ProjectScreen;
