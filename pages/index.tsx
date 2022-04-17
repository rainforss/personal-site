import { AnimatePresence } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import GridBackground from "../components/GridBackground";
import Layout from "../components/Layout";
import PageControl from "../components/PageControl";
import AboutScreen from "../components/home-screens/AboutScreen";
import BlogScreen from "../components/home-screens/BlogScreen";
import ContactScreen from "../components/home-screens/ContactScreen";
import EntryScreen from "../components/home-screens/EntryScreen";
import ProjectScreen from "../components/home-screens/ProjectScreen";
import { usePrevious } from "../hooks/usePrevious";
import Logo from "../components/Logo";
import { NextSeo } from "next-seo";
import { devtoService } from "../services/devtoArticle";
import { BatchArticle } from "../types/devto";

interface HomePageProps {
  devToArticles: BatchArticle[];
}

const Home: NextPage<HomePageProps> = ({ devToArticles }) => {
  const [[currentScreen, direction], setCurrentScreen] = React.useState([1, 0]);
  const previousScreen = usePrevious(currentScreen);
  const scroll = (newDirection: number) => {
    setCurrentScreen([currentScreen + newDirection, newDirection]);
  };
  const screens = [EntryScreen, AboutScreen, ProjectScreen];
  return (
    <>
      <NextSeo
        title="Jake Chen's Personal Site"
        description="Home page of Jake's Personal Site. Project experience, thoughts and tips about IT are shared here."
        canonical="https://rainforss.me"
        openGraph={{
          url: "https://rainforss.me/",
          title: "Jake's Home Page",
          description:
            "Home page of Jake's Personal Site. Project experience, thoughts and tips about IT are shared here.",
          site_name: "Jake's Personal Site",
          images: [
            {
              url: "https://personal-site-mocha-pi.vercel.app/home.jpg",
              width: 1920,
              height: 912,
              alt: "Home Screen",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/about_screen.jpg",
              width: 1920,
              height: 912,
              alt: "About Screen",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/projects_screen.jpg",
              width: 1920,
              height: 912,
              alt: "Projects Screen",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/contact_screen.jpg",
              width: 1920,
              height: 912,
              alt: "Contact Screen",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Layout>
        <PageControl
          max={5}
          current={currentScreen}
          previous={previousScreen!}
          next={() =>
            setCurrentScreen((prev) => {
              if (prev[0] !== 5) {
                return [prev[0] + 1, 1];
              }
              return [1, 1];
            })
          }
          prev={() => {
            if (currentScreen === 1) {
              return;
            }
            setCurrentScreen((prev) => {
              if (prev[0] !== 1) {
                return [prev[0] - 1, -1];
              }
              return [1, -1];
            });
          }}
        />
        <Logo />
        <GridBackground
          prev={() => {
            if (currentScreen === 1) {
              return;
            }
            setCurrentScreen((prev) => {
              if (prev[0] !== 1) {
                return [prev[0] - 1, -1];
              }
              return [1, -1];
            });
          }}
          next={() =>
            setCurrentScreen((prev) => {
              if (prev[0] !== 5) {
                return [prev[0] + 1, 1];
              }
              return [1, 1];
            })
          }
        >
          <AnimatePresence custom={direction}>
            {currentScreen === 1 && <EntryScreen key="1" custom={direction} />}
            {currentScreen === 2 && <AboutScreen key="2" custom={direction} />}
            {currentScreen === 3 && (
              <ProjectScreen key="3" custom={direction} />
            )}
            {currentScreen === 4 && (
              <BlogScreen
                key="4"
                custom={direction}
                devtoArticles={devToArticles}
              />
            )}
            {currentScreen === 5 && (
              <ContactScreen key="5" custom={direction} />
            )}
          </AnimatePresence>
        </GridBackground>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const devToArticles = await devtoService(
    process.env.DEVTO_API_KEY!
  ).getAllMyArticles(30);
  return {
    props: {
      devToArticles,
    },
  };
};

export default Home;
