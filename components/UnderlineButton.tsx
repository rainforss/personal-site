import { motion } from "framer-motion";
import * as React from "react";
import { linkTextVariants, linkVariants } from "./NavLink";

interface IUnderlineButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const UnderlineButton: React.FunctionComponent<IUnderlineButtonProps> = (
  props
) => {
  return (
    <motion.div className="relative font-main-font" whileHover="hover">
      <motion.button
        className={`text-white text-3xl decoration-orange-400${
          props.disabled ? " line-through" : ""
        }`}
        variants={linkTextVariants}
        onClick={props.onClick}
      >
        {props.text}
      </motion.button>
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

export default UnderlineButton;
