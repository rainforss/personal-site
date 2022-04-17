import * as React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { screen } from "./EntryScreen";
import NavLink, { linkTextVariants } from "../NavLink";
import { BatchArticle } from "../../types/devto";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
import UnderlineButton from "../UnderlineButton";

interface IBlogScreenProps {
  custom: number;
  devtoArticles?: BatchArticle[];
}

const blogVariants: Variants = {
  enter: (i) => ({
    transform: i > 0 ? "translateX(100%)" : `translateX(-100%)`,
    opacity: 0,
  }),
  center: {
    transform: "translateX(0%)",
    opacity: 1,
  },
  leave: (i) => ({
    transform: i > 0 ? "translateX(-100%)" : `translateX(100%)`,
    opacity: 0,
  }),
};

const BlogScreen: React.FunctionComponent<IBlogScreenProps> = (props) => {
  const [[currentArticle, direction], setCurrentArticle] = React.useState([
    1, 0,
  ]);
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
      <AnimatePresence custom={direction}>
        {props.devtoArticles &&
          props.devtoArticles.map((a, index) => {
            if (index === currentArticle - 1)
              return (
                <motion.div
                  key={index}
                  className="col-start-2 col-span-2 row-start-2 row-span-2 flex flex-col relative justify-center items-start font-main-font text-white"
                  variants={blogVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="leave"
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-2 rounded-full w-8 h-8">
                    <span className="text-2xl">{currentArticle}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-slate-300">
                    <span>DEV Community Article</span>
                    <Link href={a.url} passHref>
                      <motion.a
                        target="_blank"
                        className="text-sm"
                        variants={linkTextVariants}
                        whileHover="hover"
                      >
                        <VscLinkExternal />
                      </motion.a>
                    </Link>
                  </div>

                  <Link href={`/blogs/${a.slug}`} passHref>
                    <motion.a
                      className="first-letter:text-4xl first-letter:text-[#fc7c2c] text-3xl underline underline-offset-0 mb-6"
                      whileHover="hover"
                      variants={linkTextVariants}
                    >
                      {a.title}
                    </motion.a>
                  </Link>
                  <div>
                    <small className="mr-8">
                      {new Date(a.published_at).toLocaleString("en-US")}
                    </small>
                    <small className="mr-8">
                      <span className="text-[#fc7c2c]">
                        {a.reading_time_minutes}
                      </span>{" "}
                      minutes reading
                    </small>
                    {a.tag_list.map((t) => (
                      <small key={t} className="mr-4">
                        #<span className="text-[#fc7c2c]">{t}</span>
                      </small>
                    ))}
                  </div>
                  <p className="text-slate-100 text-lg mb-6">{a.description}</p>
                  <div className="flex gap-6 flex-nowrap text-slate-400">
                    <div className="flex gap-2 items-center">
                      <FaHeart className="text-sm text-[#fc7c2c]" />
                      <small>{a.positive_reactions_count} Likes</small>
                    </div>
                    <div className="flex gap-2 items-center">
                      <BsFillEyeFill className="text-lg text-[#fc7c2c]" />
                      <small>{a.page_views_count} Views</small>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCommentDots className="text-xm text-[#fc7c2c]" />
                      <small>{a.comments_count} Comments</small>
                    </div>
                  </div>
                </motion.div>
              );
          })}
      </AnimatePresence>

      <div className="col-start-1 col-span-2 row-start-3 row-span-2 flex justify-center items-center">
        <div className="relative">
          <UnderlineButton
            text="Newer"
            disabled={currentArticle === 1}
            onClick={() => {
              if (currentArticle === 1) {
                return;
              }
              setCurrentArticle((prev) => {
                if (prev[0] !== 1) {
                  return [prev[0] - 1, -1];
                }
                return [1, -1];
              });
            }}
          />
        </div>
      </div>
      <div className="col-start-3 col-span-2 row-start-3 row-span-2 flex justify-center items-center">
        <div className="relative">
          <UnderlineButton
            text="Older"
            disabled={currentArticle === props.devtoArticles?.length}
            onClick={() => {
              if (currentArticle === props.devtoArticles?.length) {
                return;
              }
              setCurrentArticle((prev) => {
                if (prev[0] !== props.devtoArticles?.length) {
                  return [prev[0] + 1, 1];
                }
                return [props.devtoArticles.length, 1];
              });
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogScreen;
