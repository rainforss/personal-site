import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import React from "react";
import GridBackground from "../components/GridBackground";
import Layout from "../components/Layout";
import Logo from "../components/Logo";

const Custom404: NextPage = () => {
  return (
    <>
      <Layout>
        <Logo />
        <GridBackground>
          <AnimatePresence initial={false}>
            <div
              className="w-full h-full grid grid-rows-4 grid-cols-4 font-main-font"
              key="main"
            >
              <div className="col-start-2 col-span-2 row-start-2 row-span-2 text-slate-200 py-16 overflow-hidden border-dashed border-2">
                <div className="h-full px-8 overflow-hidden flex flex-col justify-center items-center">
                  <h1 className="text-6xl text-[#fc7c2c] h-16">404</h1>
                  <hr className="w-full my-8"></hr>
                  <p className="text-2xl h-16">
                    Page does not exist or is still under construction.
                  </p>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </GridBackground>
      </Layout>
    </>
  );
};

export default Custom404;
