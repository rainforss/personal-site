import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import GridBackground from "../components/GridBackground";
import Layout from "../components/Layout";
import Logo from "../components/Logo";

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About me"
        description="About page of Jake's Personal Site. Find out more about Jake's thoughts and goals."
        canonical="https://rainforss.me"
        openGraph={{
          url: "https://rainforss.me/about",
          title: "Jake's About Page",
          description:
            "About page of Jake's Personal Site. Find out more about Jake's thoughts and goals.",
          site_name: "Jake's Personal Site",
          images: [
            {
              url: "https://personal-site-mocha-pi.vercel.app/about_page.jpg",
              width: 1920,
              height: 912,
              alt: "About Page",
              type: "image/jpeg",
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
              <div className="col-start-2 col-span-2 row-start-1 row-span-4 text-slate-200 py-16 overflow-hidden">
                <div className="h-full px-8 overflow-y-auto">
                  <h1 className="text-6xl inline text-[#fc7c2c]">About me</h1>
                  <article className="inline text-lg">
                    &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nunc non nibh lobortis, facilisis dui nec,
                    posuere odio. Sed in elementum sapien. Integer suscipit
                    luctus dui, at ornare odio dapibus et. Sed eleifend nisl ut
                    dolor ultricies interdum. Nulla elit tellus, vestibulum sed
                    mauris id, condimentum convallis eros. Cras vel velit
                    convallis, sodales enim sed, pulvinar purus. Donec non
                    fermentum arcu. Aliquam accumsan, dui et tempus tempor, est
                    tellus semper nunc, sit amet lobortis nunc nunc vel velit.
                    Sed efficitur sem vitae lorem malesuada pellentesque. Nam
                    convallis eu leo at sollicitudin. Maecenas quis orci
                    laoreet, rutrum sem a, sagittis dui. Proin pulvinar
                    sollicitudin sem at condimentum. Aenean fermentum at ante eu
                    placerat. Suspendisse potenti. Morbi auctor purus sed eros
                    malesuada, ac ultrices massa ornare. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Mauris suscipit tincidunt metus ultricies
                    scelerisque. Proin ut eros eleifend, molestie est vitae,
                    faucibus ante. Phasellus tempor orci eget odio dignissim, et
                    convallis ante semper. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec fringilla, augue quis
                    pharetra eleifend, enim diam vehicula nulla, lobortis
                    tincidunt lectus ligula ac ligula. Nulla est ligula, mollis
                    sit amet est id, imperdiet vestibulum massa. Pellentesque
                    rhoncus sit amet ipsum et lacinia. Vivamus placerat odio id
                    neque auctor pellentesque. Mauris malesuada, sem ut finibus
                    tempus, turpis nulla suscipit elit, vel imperdiet nulla orci
                    iaculis neque. Sed euismod quam sed erat tristique, id
                    volutpat ipsum rutrum. Curabitur rhoncus, sapien id varius
                    euismod, risus arcu sollicitudin nunc, vitae consectetur
                    ipsum nisl id nibh. Quisque risus eros, sodales in ex eu,
                    consequat rutrum urna. Morbi eu finibus risus, id pretium
                    quam. Praesent ex libero, faucibus sagittis libero id,
                    tincidunt consectetur eros. Maecenas ac nulla eget sapien
                    ullamcorper sagittis et id sem. Pellentesque arcu augue,
                    pulvinar sit amet dui quis, scelerisque semper felis. Mauris
                    id lorem tempor, accumsan ipsum ut, vehicula orci. Curabitur
                    feugiat sodales enim, ac posuere lorem gravida et. Duis ut
                    nisl efficitur, ornare dolor a, porta ligula. Morbi odio
                    lectus, posuere quis ex sit amet, sollicitudin finibus odio.
                    Cras accumsan nulla non ultricies tempor. Sed lacus ipsum,
                    tempus id nisl vel, aliquet lobortis ligula. Maecenas
                    pretium sit amet lectus eget auctor. Nullam tempus magna eu
                    nunc sagittis ornare. Ut non urna interdum, pharetra odio
                    vitae, volutpat turpis. Curabitur vitae congue turpis. Nulla
                    vel pellentesque dui. Proin vel vehicula nibh. Nullam
                    iaculis elit ut nulla suscipit, eget viverra nisl fermentum.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Aliquam erat volutpat.
                    Curabitur eu velit lacinia, luctus urna ut, cursus odio.
                    Integer in pretium diam. Nam finibus erat sit amet magna
                    mattis ultrices. Vestibulum gravida non leo in consectetur.
                    Cras pharetra enim quam. Cras fermentum pulvinar magna
                    tincidunt varius. Sed accumsan bibendum nunc, eget blandit
                    metus porta vel. Maecenas a leo quis nisi sollicitudin
                    dapibus eget quis sapien. Vivamus lobortis lobortis urna eu
                    viverra. Maecenas aliquam mauris at nulla ornare, ut sodales
                    nulla commodo. Maecenas semper est enim, at pulvinar tellus
                    malesuada eu. Suspendisse a vestibulum arcu, in dapibus
                    sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc non nibh lobortis, facilisis dui nec, posuere
                    odio. Sed in elementum sapien. Integer suscipit luctus dui,
                    at ornare odio dapibus et. Sed eleifend nisl ut dolor
                    ultricies interdum. Nulla elit tellus, vestibulum sed mauris
                    id, condimentum convallis eros. Cras vel velit convallis,
                    sodales enim sed, pulvinar purus. Donec non fermentum arcu.
                    Aliquam accumsan, dui et tempus tempor, est tellus semper
                    nunc, sit amet lobortis nunc nunc vel velit. Sed efficitur
                    sem vitae lorem malesuada pellentesque. Nam convallis eu leo
                    at sollicitudin. Maecenas quis orci laoreet, rutrum sem a,
                    sagittis dui. Proin pulvinar sollicitudin sem at
                    condimentum. Aenean fermentum at ante eu placerat.
                    Suspendisse potenti. Morbi auctor purus sed eros malesuada,
                    ac ultrices massa ornare. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Mauris suscipit tincidunt metus ultricies scelerisque. Proin
                    ut eros eleifend, molestie est vitae, faucibus ante.
                    Phasellus tempor orci eget odio dignissim, et convallis ante
                    semper. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec fringilla, augue quis pharetra eleifend, enim
                    diam vehicula nulla, lobortis tincidunt lectus ligula ac
                    ligula. Nulla est ligula, mollis sit amet est id, imperdiet
                    vestibulum massa. Pellentesque rhoncus sit amet ipsum et
                    lacinia. Vivamus placerat odio id neque auctor pellentesque.
                    Mauris malesuada, sem ut finibus tempus, turpis nulla
                    suscipit elit, vel imperdiet nulla orci iaculis neque. Sed
                    euismod quam sed erat tristique, id volutpat ipsum rutrum.
                    Curabitur rhoncus, sapien id varius euismod, risus arcu
                    sollicitudin nunc, vitae consectetur ipsum nisl id nibh.
                    Quisque risus eros, sodales in ex eu, consequat rutrum urna.
                    Morbi eu finibus risus, id pretium quam. Praesent ex libero,
                    faucibus sagittis libero id, tincidunt consectetur eros.
                    Maecenas ac nulla eget sapien ullamcorper sagittis et id
                    sem. Pellentesque arcu augue, pulvinar sit amet dui quis,
                    scelerisque semper felis. Mauris id lorem tempor, accumsan
                    ipsum ut, vehicula orci. Curabitur feugiat sodales enim, ac
                    posuere lorem gravida et. Duis ut nisl efficitur, ornare
                    dolor a, porta ligula. Morbi odio lectus, posuere quis ex
                    sit amet, sollicitudin finibus odio. Cras accumsan nulla non
                    ultricies tempor. Sed lacus ipsum, tempus id nisl vel,
                    aliquet lobortis ligula. Maecenas pretium sit amet lectus
                    eget auctor. Nullam tempus magna eu nunc sagittis ornare. Ut
                    non urna interdum, pharetra odio vitae, volutpat turpis.
                    Curabitur vitae congue turpis. Nulla vel pellentesque dui.
                    Proin vel vehicula nibh. Nullam iaculis elit ut nulla
                    suscipit, eget viverra nisl fermentum. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aliquam erat volutpat. Curabitur eu velit
                    lacinia, luctus urna ut, cursus odio. Integer in pretium
                    diam. Nam finibus erat sit amet magna mattis ultrices.
                    Vestibulum gravida non leo in consectetur. Cras pharetra
                    enim quam. Cras fermentum pulvinar magna tincidunt varius.
                    Sed accumsan bibendum nunc, eget blandit metus porta vel.
                    Maecenas a leo quis nisi sollicitudin dapibus eget quis
                    sapien. Vivamus lobortis lobortis urna eu viverra. Maecenas
                    aliquam mauris at nulla ornare, ut sodales nulla commodo.
                    Maecenas semper est enim, at pulvinar tellus malesuada eu.
                    Suspendisse a vestibulum arcu, in dapibus sapien.
                  </article>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </GridBackground>
      </Layout>
    </>
  );
};

export default About;
