import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import React from "react";
import GridBackground from "../../components/GridBackground";
import Layout from "../../components/Layout";
import PageControl from "../../components/PageControl";
import { usePrevious } from "../../hooks/usePrevious";
import LangaraScreen from "../../components/project-screens/LangaraScreen";
import ActionCoachScreen from "../../components/project-screens/ActionCoachScreen";
import RFPScreen from "../../components/project-screens/RFPScreen";
import D365CmsScreen from "../../components/project-screens/D365CmsScreen";
import HansenScreen from "../../components/project-screens/HansenScreen";
import Logo from "../../components/Logo";
import { NextSeo } from "next-seo";

const Project: NextPage = () => {
  const [[currentScreen, direction], setCurrentScreen] = React.useState([1, 0]);
  const previousScreen = usePrevious(currentScreen);
  return (
    <>
      <NextSeo
        title="Projects"
        description="Projects page of Jake's Personal Site. Find out more about Jake's past and ongoing projects details."
        canonical="https://personal-site-mocha-pi.vercel.app/"
        openGraph={{
          url: "https://personal-site-mocha-pi.vercel.app/projects",
          title: "Jake's Projects Page",
          description:
            "Projects page of Jake's Personal Site. Find out more about Jake's past and ongoing projects details.",
          site_name: "Jake's Personal Site",
          images: [
            {
              url: "https://personal-site-mocha-pi.vercel.app/d365_cms_screen.jpg",
              width: 1920,
              height: 912,
              alt: "D365 CMS Project Details",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/langara_screen.jpg",
              width: 1920,
              height: 912,
              alt: "Langara Project Details",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/actioncoach_screen.jpg",
              width: 1920,
              height: 912,
              alt: "ActionCOACH Project Details",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/hansen_screen.jpg",
              width: 1920,
              height: 912,
              alt: "Hansen Technologies Project Details",
              type: "image/jpeg",
            },
            {
              url: "https://personal-site-mocha-pi.vercel.app/rfp_screen.jpg",
              width: 1920,
              height: 912,
              alt: "RFP Demos Details",
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
            {currentScreen === 1 && (
              <D365CmsScreen key="1" custom={direction} />
            )}
            {currentScreen === 2 && (
              <LangaraScreen key="2" custom={direction} />
            )}
            {currentScreen === 3 && (
              <ActionCoachScreen key="3" custom={direction} />
            )}
            {currentScreen === 4 && <HansenScreen key="4" custom={direction} />}
            {currentScreen === 5 && <RFPScreen key="5" custom={direction} />}
          </AnimatePresence>
        </GridBackground>
      </Layout>
    </>
  );
};

export default Project;
