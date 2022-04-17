import { AnimatePresence } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import GridBackground from "../../components/GridBackground";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import { devtoService } from "../../services/devtoArticle";
import { BatchArticle } from "../../types/devto";

interface BlogsPageProps {
  recentArticles: BatchArticle[];
}

const Blogs: NextPage<BlogsPageProps> = ({ recentArticles }) => {
  const [[currentArticle, direction], setCurrentArticle] = React.useState([
    1, 0,
  ]);
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
        <Logo />
        <GridBackground>
          <div
            className="w-full h-full grid grid-rows-4 grid-cols-4 font-main-font"
            key="main"
          >
            <div className="col-start-2 col-span-2 row-start-1 row-span-1 text-slate-200 py-16 overflow-hidden">
              <div className="h-full px-8 overflow-hidden">
                <h1 className="text-4xl inline text-[#fc7c2c]">
                  Blogs and community posts
                </h1>
              </div>
            </div>
            <AnimatePresence custom={direction} initial={false}>
              {}
            </AnimatePresence>
          </div>
        </GridBackground>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recentArticles = await devtoService(
    process.env.DEVTO_API_KEY!
  ).getMyArticlesByPage(1, 100);
  return {
    props: {
      recentArticles,
    },
  };
};

export default Blogs;
