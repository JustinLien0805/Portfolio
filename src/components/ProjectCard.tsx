import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";
import { useEffect } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type PrjectCardProps = {
  position: string;
  number: string;
  websiteUrl: string;
};

const ProjectCard = ({
  position = "left",
  number,
  websiteUrl,
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
        className="flex w-full cursor-pointer hover:scale-105"
        rel="noreferrer"
        ref={ref}
        href={websiteUrl}
        target="_blank"
      >
        <Image
          src={p1}
          alt="ProjectImage"
          className="rounded-lg aspect-video object-cover"
        />
      </a>
      <motion.h2
        style={{ y }}
        className={`absolute ${
          position === "left"
            ? "md:-left-10 left-[calc(50%+50px)]"
            : "md:-right-10 text-right left-[calc(50%+50px)]"
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
          ProjectName
        </h2>
        <div className="flex space-x-2">
          <div className="badge badge-secondary">TypeScript</div>
          <div className="badge badge-secondary">Tailwind CSS</div>
          <div className="badge badge-secondary">React.js</div>
        </div>
        <p
          className="text-lg"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translatex(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Our website allows users to easily upload their YouTube watch history
          and receive a detailed yearly report on their viewing habits. With a
          user-friendly interface, you can easily track your favorite channels,
          discover new content, and gain insights into how you spend your time
          on YouTube over the past year.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
