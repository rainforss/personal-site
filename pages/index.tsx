import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
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

const Home: NextPage = () => {
  const [[currentScreen, direction], setCurrentScreen] = React.useState([1, 0]);
  const previousScreen = usePrevious(currentScreen);
  const scroll = (newDirection: number) => {
    setCurrentScreen([currentScreen + newDirection, newDirection]);
  };
  const screens = [EntryScreen, AboutScreen, ProjectScreen];
  return (
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
          {currentScreen === 3 && <ProjectScreen key="3" custom={direction} />}
          {currentScreen === 4 && <BlogScreen key="4" custom={direction} />}
          {currentScreen === 5 && <ContactScreen key="5" custom={direction} />}
        </AnimatePresence>
      </GridBackground>
    </Layout>
  );
};

export default Home;
