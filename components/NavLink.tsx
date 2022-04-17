import { Variants } from "framer-motion";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface INavLinkProps {
  text: string;
  url: string;
}

export const linkVariants: Variants = {
  hover: () => ({
    transform: [
      "translateX(0%)",
      "translateX(100%)",
      "translateX(-100%)",
      "translateX(0%)",
    ],
    transition: {
      transform: {
        duration: 0.8,
        times: [0, 0.5, 0.5, 1],
        ease: "easeInOut",
      },
    },
  }),
};

export const linkTextVariants: Variants = {
  hover: {
    color: "#fc7c2c",
    transition: {
      opacity: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
};

const NavLink: React.FunctionComponent<INavLinkProps> = (props) => {
  return (
    <motion.div className="relative font-main-font" whileHover="hover">
      <Link href={props.url} passHref>
        <motion.a className="text-white text-3xl" variants={linkTextVariants}>
          {props.text}
        </motion.a>
      </Link>
      <div className="relative w-full h-1 mt-2 overflow-hidden">
        <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-500"></span>
        <motion.span
          className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
          variants={linkVariants}
        ></motion.span>
      </div>
    </motion.div>
  );
};

export default NavLink;
