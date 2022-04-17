import { AnimatePresence, motion } from "framer-motion";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaHeart, FaCommentDots } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
import GridBackground from "../../../components/GridBackground";
import { screen } from "../../../components/home-screens/EntryScreen";
import Layout from "../../../components/Layout";
import Logo from "../../../components/Logo";
import NavLink, { linkTextVariants } from "../../../components/NavLink";
import PageControl from "../../../components/PageControl";
import UnderlineButton from "../../../components/UnderlineButton";
import { usePrevious } from "../../../hooks/usePrevious";
import { devtoService } from "../../../services/devtoArticle";
import { BatchArticle } from "../../../types/devto";
import fs from "fs";
import path from "path";

interface BlogsPageProps {
  articles: BatchArticle[];
}

interface IParams extends ParsedUrlQuery {
  pageNumber: string;
}

const Blogs: NextPage<BlogsPageProps> = ({ articles }) => {
  const [[currentArticle, direction], setCurrentArticle] = React.useState([
    1, 0,
  ]);
  const previousArticle = usePrevious(currentArticle);
  const router = useRouter();
  const { pageNumber } = router.query;
  return (
    <>
      <NextSeo
        title="Jake's Blogs Page"
        description="Blogs page of Jake's Personal Site. Read all community posts and blogs written by Jake."
        canonical="https://rainforss.me/blogs"
        openGraph={{
          url: "https://rainforss.me/blogs",
          title: "Jake's Blogs Page",
          description:
            "Blogs page of Jake's Personal Site. Read all community posts and blogs written by Jake.",
          site_name: "Jake's Personal Site",
          images: [
            {
              url: "https://personal-site-mocha-pi.vercel.app/about_page.jpg",
              width: 1920,
              height: 912,
              alt: "Blogs Page",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Layout>
        <PageControl
          max={articles.length}
          current={currentArticle}
          previous={previousArticle!}
          next={() => {
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
          prev={() => {
            if (currentArticle === articles.length) {
              return;
            }
            setCurrentArticle((prev) => {
              if (prev[0] !== articles.length) {
                return [prev[0] + 1, 1];
              }
              return [articles.length, 1];
            });
          }}
        />
        <Logo />
        <GridBackground
          prev={() => {
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
          next={() => {
            if (currentArticle === articles.length) {
              return;
            }
            setCurrentArticle((prev) => {
              if (prev[0] !== articles.length) {
                return [prev[0] + 1, 1];
              }
              return [articles.length, 1];
            });
          }}
        >
          <div
            className="w-full h-full grid grid-rows-4 grid-cols-4 font-main-font"
            key="main"
          >
            <div className="col-start-2 col-span-2 row-start-1 row-span-1 text-slate-200">
              <div className="h-full flex items-end">
                <h1 className="text-5xl text-[#fc7c2c]">
                  Blogs and community posts
                </h1>
              </div>
            </div>
            <AnimatePresence custom={direction} initial={false}>
              {articles &&
                articles.map((a, index) => {
                  if (index === currentArticle - 1)
                    return (
                      <motion.div
                        key={index}
                        className="col-start-2 col-span-2 row-start-2 row-span-2 flex flex-col relative justify-center items-start font-main-font text-white"
                        variants={screen}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="leave"
                        transition={{ duration: 0.5 }}
                      >
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
                        <p className="text-slate-100 text-lg mb-6">
                          {a.description}
                        </p>
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
            <div className="col-start-1 col-span-2 row-start-3 row-span-2 text-slate-200 flex justify-center items-center">
              <UnderlineButton
                text="Previous"
                disabled={pageNumber === "1"}
                onClick={() => {
                  if (pageNumber === "1") {
                    return;
                  }
                  router.push(
                    `/blogs/pages/${parseInt(pageNumber as string) - 1}`
                  );
                }}
              />
            </div>
            <div className="col-start-3 col-span-2 row-start-3 row-span-2 text-slate-200 flex justify-center items-center">
              <UnderlineButton
                text="Next"
                onClick={() => {
                  router.push(
                    `/blogs/pages/${parseInt(pageNumber as string) + 1}`
                  );
                }}
              />
            </div>
          </div>
        </GridBackground>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let articles: BatchArticle[] = [];
  const cachedContent = fs.readFileSync(
    path.join(process.cwd(), "buildCache.json"),
    "utf-8"
  );
  const cache = JSON.parse(cachedContent);
  if (!!cache) {
    articles = cache;
  } else {
    articles = await devtoService(process.env.DEVTO_API_KEY!).getAllMyArticles(
      30
    );
    fs.writeFileSync(
      path.join(process.cwd(), "buildCache.json"),
      JSON.stringify(articles)
    );
  }

  const paths: (
    | string
    | {
        params: IParams;
        locale?: string | undefined;
      }
  )[] = [];
  const totalPages = Math.ceil(articles.length / 4);
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: {
        pageNumber: i.toString(),
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageNumber } = params as IParams;
  const articles = await devtoService(
    process.env.DEVTO_API_KEY!
  ).getMyArticlesByPage(parseInt(pageNumber), 4);
  return {
    props: {
      articles,
    },
    revalidate: 60 * 60,
  };
};

export default Blogs;
