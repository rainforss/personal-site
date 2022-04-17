import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import MenuButton from "./MenuButton";
import { linkTextVariants, linkVariants } from "./NavLink";

interface INavigationProps {}

const menu: Variants = {
  expand: {
    clipPath: `circle(200vh at 100px 50%)`,
    background: "rgba(0,0,0,1)",
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 1,
      delay: 0.5,
      staggerChildren: 0.3,
      delayChildren: 0.7,
    },
  },
  collapse: {
    clipPath: "circle(30px at 100px 50%)",
    background: "rgba(0,0,0,0)",
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 100,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export const menuItem: Variants = {
  expand: {
    transform: "translateX(0%)",
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.2,
      },
      transform: {
        type: "spring",
        stiffness: 100,
        restDelta: 1,
        duration: 0.2,
      },
    },
    animationFillMode: "forwards",
  },
  collapse: {
    transform: "translateX(200%)",
    opacity: 0,
    transition: {
      opacity: {
        duration: 0.2,
      },
      transform: {
        type: "spring",
        stiffness: 1000,
        damping: 200,
        duration: 0.2,
      },
    },
    animationFillMode: "forwards",
  },
  hover: {},
};

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.div
      key="navigation"
      className={`fixed top-0 left-0 w-full h-full z-30 flex flex-col justify-center items-center gap-24`}
      initial={false}
      animate={menuOpen ? "expand" : "collapse"}
      exit="collapse"
      variants={menu}
    >
      <MenuButton menuOpen={menuOpen} toggle={toggleMenu} />

      <>
        <motion.div
          className="font-main-font"
          initial={{ transform: "translateX(200%)", opacity: 0 }}
          variants={menuItem}
        >
          <motion.div whileHover="hover">
            <Link href="/" passHref>
              <motion.a
                className="text-white text-6xl"
                variants={linkTextVariants}
              >
                Home
              </motion.a>
            </Link>
            <div className="relative w-full h-1 mt-2 overflow-hidden">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
                variants={linkVariants}
              ></motion.span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="font-main-font"
          initial={{ transform: "translateX(200%)", opacity: 0 }}
          variants={menuItem}
        >
          <motion.div whileHover="hover">
            <Link href="/about" passHref>
              <motion.a
                className="text-white text-6xl"
                variants={linkTextVariants}
              >
                About
              </motion.a>
            </Link>
            <div className="relative w-full h-1 mt-2 overflow-hidden">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
                variants={linkVariants}
              ></motion.span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="font-main-font"
          initial={{ transform: "translateX(200%)", opacity: 0 }}
          variants={menuItem}
        >
          <motion.div whileHover="hover">
            <Link href="/projects" passHref>
              <motion.a
                className="text-white text-6xl"
                variants={linkTextVariants}
              >
                Projects
              </motion.a>
            </Link>
            <div className="relative w-full h-1 mt-2 overflow-hidden">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
                variants={linkVariants}
              ></motion.span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="font-main-font"
          initial={{ transform: "translateX(200%)", opacity: 0 }}
          variants={menuItem}
        >
          <motion.div whileHover="hover">
            <Link href="/blogs" passHref>
              <motion.a
                className="text-white text-6xl"
                variants={linkTextVariants}
              >
                Blogs
              </motion.a>
            </Link>
            <div className="relative w-full h-1 mt-2 overflow-hidden">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
                variants={linkVariants}
              ></motion.span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="font-main-font"
          initial={{ transform: "translateX(200%)", opacity: 0 }}
          variants={menuItem}
        >
          <motion.div whileHover="hover">
            <Link href="/contact" passHref>
              <motion.a
                className="text-white text-6xl"
                variants={linkTextVariants}
              >
                Contact
              </motion.a>
            </Link>
            <div className="relative w-full h-1 mt-2 overflow-hidden">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white z-10"
                variants={linkVariants}
              ></motion.span>
            </div>
          </motion.div>
        </motion.div>
      </>
    </motion.div>
  );
};

export default Navigation;
