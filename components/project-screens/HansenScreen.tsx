import { motion } from "framer-motion";
import * as React from "react";
import RotatingText from "../RotatingText";
import { screen } from "../home-screens/EntryScreen";
import Link from "next/link";
import { RiGalleryLine, RiExternalLinkLine } from "react-icons/ri";

interface IHansenProps {
  custom: number;
}

const Hansen: React.FunctionComponent<IHansenProps> = (props) => {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-full grid grid-rows-4 grid-cols-4 font-main-font text-white"
        custom={props.custom}
        variants={screen}
        initial="enter"
        animate="center"
        exit="leave"
        transition={{ duration: 0.5 }}
      >
        <div className="col-start-2 col-span-2 row-start-1 row-span-1 flex justify-start flex-col-reverse gap-10">
          <div className="flex justify-between items-center">
            <h2 className="text-6xl self-start text-white">
              NextJS <span className="text-[#fc7c2c]">E-Commerce Demo</span>
            </h2>
            <div className="flex gap-2">
              <Link href="#" passHref>
                <motion.a target="_blank" whileHover={{ color: "#fc7c2c" }}>
                  <RiGalleryLine className="text-2xl" />
                </motion.a>
              </Link>
              <Link href="#" passHref>
                <motion.a target="_blank" whileHover={{ color: "#fc7c2c" }}>
                  <RiExternalLinkLine className="text-2xl" />
                </motion.a>
              </Link>
            </div>
          </div>
          <div className="relative">
            <RotatingText
              title="Used by"
              w={40}
              translateX="0"
              translateY="1/2"
              rotatingUrls={[
                { text: "Hansen CX", url: "https://www.hansencx.com/" },
                { text: "Hansen CX", url: "https://www.hansencx.com/" },
                { text: "Hansen CX", url: "https://www.hansencx.com/" },
              ]}
            />
          </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-2 row-span-3 overflow-hidden py-12">
          <h3 className="text-lg">
            Custom NextJS web application as a{" "}
            <span className="text-[#fc7c2c]">E-Commerce demo website</span> to
            showcase Hansen Technologies&apos;s{" "}
            <span className="text-[#fc7c2c]">CPQ system</span> and
            <span className="text-[#fc7c2c]"> CPQ API</span> capabilities
          </h3>
          <div className="w-full flex items-start mt-12">
            <div className="w-1/2">
              <h5 className="text-[#fc7c2c]">TASKS</h5>
              <ul>
                <li>Solution Design</li>
                <li>D365 Development</li>
                <li>Full-stack Development</li>
                <li>Product Training</li>
                <li>Product Management</li>
                <li>Product Demonstration</li>
              </ul>
            </div>
            <div className="w-1/2">
              <h5 className="text-[#fc7c2c]">TECH & TOOLS</h5>
              <ul>
                <li>
                  Headless CMS <span className="text-[#fc7c2c]">&</span>{" "}
                  Contentful
                </li>
                <li>
                  D365 Plugins <span className="text-[#fc7c2c]">&</span> JS
                  Web-resources
                </li>
                <li>
                  Azure AD <span className="text-[#fc7c2c]">&</span> JS
                  Microsoft Identity Platform
                </li>
                <li>
                  ReactJS <span className="text-[#fc7c2c]">&</span> NextJS
                </li>
                <li>
                  TailWind <span className="text-[#fc7c2c]">&</span>{" "}
                  Framer-Motion
                </li>
                <li>
                  Redis <span className="text-[#fc7c2c]">&</span> Redis Cloud
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hansen;
