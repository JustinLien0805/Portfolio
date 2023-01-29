import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type PrjectCardProps = {
  projectTitle: string;
  position: string;
  number: string;
  imgUrl: string;
  websiteUrl: string;
  sourceCodeUrl: string;
  tools: string[];
};

const ProjectCard = ({
  position = "left",
  projectTitle,
  number,
  imgUrl,
  websiteUrl,
  sourceCodeUrl,
  tools,
}: PrjectCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const textRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex flex-col w-full justify-start min-h-screen sm:items-center gap-4 ${
        position === "left"
          ? "md:flex-row items-start"
          : "md:flex-row-reverse items-start"
      }
      font-bold text-6xl relative`}
    >
      <a
        className="flex w-full cursor-pointer"
        rel="noreferrer"
        ref={ref}
        href={websiteUrl}
        target="_blank"
      >
        <img
          src={imgUrl}
          alt="ProjectImage"
          className="rounded-lg aspect-video object-cover w-full"
        />
      </a>
      <motion.h2
        style={{ y }}
        className={`absolute ${
          position === "left"
            ? "md:-left-10 left-0"
            : "md:-right-10 text-right left-0"
        } italic text-primary font-black text-5xl sm:text-6xl`}
      >
        {number}
      </motion.h2>
      <div className="flex flex-col w-full sm:flex-grow gap-4">
        <h2
          className="font-semibold text-5xl border-l-4 border-secondary pl-4"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translatex(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {projectTitle}
        </h2>
        <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-2 gap-2">
          {tools.map((tool) => (
            <div className="badge badge-outline badge-secondary w-full badge-lg">
              {tool}
            </div>
          ))}
        </div>
        <p
          className="text-lg tracking-wider"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translatex(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Our website allows users to easily upload their YouTube watch history
          and receive a detailed yearly report on their viewing habits.
        </p>
        <div className="flex space-x-2">
          <button className="flex-1 btn btn-secondary">
            <a href={websiteUrl} target="_blank" rel="noopener">
              Live Demo
            </a>
          </button>
          <button className="flex-1 btn btn-secondary">
            <a href={sourceCodeUrl} target="_blank" rel="noopener">
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
