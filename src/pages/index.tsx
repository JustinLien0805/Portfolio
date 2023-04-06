import About from "@/components/About";
import Hero from "@/components/Hero";
import Head from "next/head";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { AiOutlineDownload } from "react-icons/ai";
import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Justin Lien</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolioLogo.png" />
      </Head>
      <div className="min-h-screen w-screen px-4 sm:px-16 lg:px-28 2xl:px-[18%] overflow-x-hidden">
        <div className="navbar bg-black fixed top-0 left-0 z-50 px-4 sm:px-16 lg:px-28 2xl:px-[18%]">
          <div className="flex-1 text-secondary">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost p-1 mr-4 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#242424] rounded-box w-52"
              >
                <li>
                  <a
                    className="text-xl"
                    onClick={() => {
                      // scrollToProject
                      if (projectRef.current) {
                        window.scrollTo({
                          top: projectRef.current?.offsetTop - 100,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl"
                    onClick={() => {
                      // scrollToProject
                      if (aboutRef.current) {
                        window.scrollTo({
                          top: aboutRef.current?.offsetTop - 350,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl"
                    onClick={() => {
                      // scrollToProject
                      if (contactRef.current) {
                        window.scrollTo({
                          top: contactRef.current?.offsetTop - 100,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="btn btn-ghost normal-case text-3xl p-0"
              onClick={() => {
                // scrollToTop
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              J<span className="text-primary">L</span>
            </a>
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              <li>
                <a
                  className="text-xl"
                  onClick={() => {
                    // scrollToProject
                    if (projectRef.current) {
                      window.scrollTo({
                        top: projectRef.current?.offsetTop - 100,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="text-xl"
                  onClick={() => {
                    // scrollToProject
                    if (aboutRef.current) {
                      window.scrollTo({
                        top: aboutRef.current?.offsetTop - 300,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-xl"
                  onClick={() => {
                    // scrollToProject
                    if (contactRef.current) {
                      window.scrollTo({
                        top: contactRef.current?.offsetTop - 100,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <a
              className="btn btn-secondary btn-outline gap-2"
              // download test.pdf file
              href="練家辰_Resume.pdf"
              download="練家辰_Resume.pdf"
            >
              Resume
              <AiOutlineDownload className="w-6 h-6" />
            </a>
          </div>
        </div>
        <motion.div
          style={{ scaleX }}
          className="fixed h-1 left-0 right-0 bottom-10 bg-primary z-50"
        />
        <Hero />
        <Project scrollRef={projectRef} />
        <About scrollRef={aboutRef} />
        <Contact scrollRef={contactRef} />
      </div>
    </>
  );
}
