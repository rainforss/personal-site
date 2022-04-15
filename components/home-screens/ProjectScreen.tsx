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
      <div className="col-start-1 col-span-2 row-start-3 row-span-2 flex justify-center items-center">
        <div className="relative">
          <NavLink text="Case Studies" url="/projects" />
        </div>
      </div>
      <div className="col-start-4 col-span-1 row-start-1 row-span-1 relative flex justify-center items-center">
        <RotatingText
          title="Recent Projects"
          w={32}
          rotatingUrls={[
            {
              text: "York SCS",
              url: "https://high-ed-portal.vercel.app/",
            },
            { text: "Betach", url: "https://betachnew.vercel.app" },
            { text: "Calgary Canucks", url: "https://www.calgarycanucks.org" },
          ]}
        />
      </div>
      <div className="col-start-2 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
        <Image
          alt="Change is forever"
          src="/project.svg"
          width="500px"
          height="500px"
          objectFit="contain"
        />
      </div>
    </motion.div>
  );
};

export default ProjectScreen;
