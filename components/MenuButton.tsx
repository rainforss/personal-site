import { motion, Variants } from "framer-motion";
import * as React from "react";
import { pageLoad } from "./PageControl";

interface IMenuButtonProps {
  menuOpen: boolean;
  toggle: () => void;
}

const menuButton: Variants = {
  open: (origin) => ({
    transform: ["scale(1,1)", "scale(0.1,1)", "scale(0.1,10)"],
    transformOrigin: origin,
    animationFillMode: "forwards",
    transition: {
      transform: {
        duration: 1,
        times: [0, 0.5, 1],
      },
      transformOrigin: {
        delay: 0.5,
        duration: 0,
      },
    },
  }),
  close: (origin) => ({
    transform: ["scale(0.1,10)", "scale(0.1,1)", "scale(1,1)"],
    animationFillMode: "forwards",
    transformOrigin: origin,
    transition: {
      transform: {
        duration: 1.6,
        times: [0, 0.5, 1],
      },
      transformOrigin: {
        delay: 0.5,
        duration: 0,
      },
    },
  }),
};

const MenuButton: React.FunctionComponent<IMenuButtonProps> = ({
  menuOpen,
  toggle,
}) => {
  return (
    <motion.div
      className="fixed top-1/2 left-20 w-10 h-5 flex flex-col cursor-pointer justify-between items-stretch z-40"
      variants={pageLoad}
      animate="enterFromLeft"
      onClick={toggle}
    >
      <motion.div
        className="h-0.5 bg-white"
        custom={menuOpen ? "top right" : "right 50%"}
        animate={menuOpen ? "open" : "close"}
        variants={menuButton}
      ></motion.div>
      <motion.div
        className="h-0.5 bg-white"
        custom="center"
        animate={menuOpen ? "open" : "close"}
        variants={menuButton}
      ></motion.div>
      <motion.div
        className="h-0.5 bg-white"
        custom={menuOpen ? "bottom left" : "left 50%"}
        animate={menuOpen ? "open" : "close"}
        variants={menuButton}
      ></motion.div>
    </motion.div>
  );
};

export default MenuButton;
