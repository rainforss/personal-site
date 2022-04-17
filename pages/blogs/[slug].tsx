import { AnimatePresence } from "framer-motion";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import GridBackground from "../../components/GridBackground";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import { NextSeo } from "next-seo";
import { devtoService } from "../../services/devtoArticle";
import { ParsedUrlQuery } from "querystring";
import { BatchArticle, SingleArticle } from "../../types/devto";
import { BsFillEyeFill } from "react-icons/bs";
import { FaHeart, FaCommentDots } from "react-icons/fa";
import Link from "next/link";
import NavLink from "../../components/NavLink";
import MarkdownIt from "markdown-it";
import fs from "fs";
import path from "path";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface SingleBlogPageProps {
  devToArticle: BatchArticle;
  recentArticles: BatchArticle[];
}

const SingleBlog: NextPage<SingleBlogPageProps> = ({
  devToArticle,
  recentArticles,
}) => {
  return (
    <>
      <NextSeo
        title={devToArticle.title}
        description={devToArticle.description}
        canonical={`https://rainforss.me/blogs/${devToArticle.slug}`}
        openGraph={{
          url: `https://rainforss.me/blogs/${devToArticle.slug}`,
          title: devToArticle.title,
          description: devToArticle.description,
          site_name: "Jake's Personal Site",
          images: [
            {
              url: devToArticle.cover_image,
              width: 1920,
              height: 912,
              alt: "Blog cover image",
              type: "image/png",
            },
          ],
        }}
      />
      <Layout>
        <Logo />
        <GridBackground>
          <AnimatePresence initial={false}>
            <div
              className="w-full h-full grid grid-rows-4 grid-cols-4 font-main-font"
              key="main"
            >
              <div className="col-start-4 col-span-1 row-start-1 row-span-1 text-slate-200 flex justify-center items-center">
                <div className="flex flex-col gap-6 flex-nowrap text-slate-400">
                  <div className="flex gap-2 items-center">
                    <FaHeart className="text-sm text-[#fc7c2c]" />
                    <small>{devToArticle.positive_reactions_count} Likes</small>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaCommentDots className="text-xm text-[#fc7c2c]" />
                    <small>{devToArticle.comments_count} Comments</small>
                  </div>
                </div>
              </div>
              <div className="col-start-4 col-span-1 row-start-2 row-span-2 text-slate-200 flex flex-col justify-center items-center p-10">
                <h4 className="text-slate-200 text-2xl mb-8">Recent Blogs</h4>
                <div className="flex flex-col gap-4">
                  {recentArticles.map((a) => {
                    if (a.slug !== devToArticle.slug)
                      return (
                        <div key={a.id}>
                          <Link href={`/blogs/${a.slug}`} passHref>
                            <a className="underline">{a.title}</a>
                          </Link>
                        </div>
                      );
                  })}
                </div>
              </div>
              <div className="col-start-4 col-span-1 row-start-4 row-span-1 text-slate-200 flex flex-col justify-center items-center">
                <NavLink text="All blogs" url="/blogs" />
              </div>
              <div className="col-start-2 col-span-2 row-start-1 row-span-4 text-slate-200 py-16 overflow-hidden">
                <div className="h-full px-8 overflow-y-auto">
                  <h1 className="text-4xl text-[#fc7c2c] mb-4">
                    {devToArticle.title}
                  </h1>
                  <div className="my-6">
                    <span className="mr-8">DEV Community Article</span>
                    <small className="mr-8">
                      {new Date(devToArticle.published_at).toLocaleString(
                        "en-US"
                      )}
                    </small>
                    <small className="mr-8">
                      <span className="text-[#fc7c2c]">
                        {devToArticle.reading_time_minutes}
                      </span>{" "}
                      minutes reading
                    </small>
                    {devToArticle.tag_list.map((t) => (
                      <small key={t} className="mr-4">
                        #<span className="text-[#fc7c2c]">{t}</span>
                      </small>
                    ))}
                  </div>
                  <article
                    className="text-lg blog"
                    dangerouslySetInnerHTML={{ __html: devToArticle.body_html }}
                  ></article>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </GridBackground>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let articles: BatchArticle[] = [];
  const paths: (
    | string
    | {
        params: IParams;
        locale?: string | undefined;
      }
  )[] = [];
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

  articles.forEach((a) => {
    paths.push({
      params: {
        slug: a.slug,
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const cacheContent = fs.readFileSync(
    path.join(process.cwd(), "buildCache.json"),
    "utf-8"
  );
  const devToArticles: BatchArticle[] = JSON.parse(
    cacheContent as unknown as string
  );
  const devToArticle = devToArticles.find((a) => a.slug === slug);
  const md = new MarkdownIt();
  if (!devToArticle) {
    return {
      props: {},
    };
  }
  devToArticle.body_html = md.render(devToArticle.body_markdown);
  const recentArticles = devToArticles.slice(0, 4);
  return {
    props: {
      devToArticle,
      recentArticles,
    },
  };
};

export default SingleBlog;
