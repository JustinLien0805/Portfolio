import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <div
      className="flex flex-col w-full justify-center min-h-screen items-start
 font-semibold text-5xl pb-10 space-y-2 relative snap-center max-w-7xl"
    >
      <h2 className="font-semibold border-l-4 border-primary pl-4">
        ProjectName
      </h2>
      <p className="text-xl md:w-1/2">
        Our website allows users to easily upload their YouTube watch history
        and receive a detailed yearly report on their viewing habits. With a
        user-friendly interface, you can easily track your favorite channels,
        discover new content, and gain insights into how you spend your time on
        YouTube over the past year.
      </p>
      <motion.div
        ref={ref}
        style={{
          y,
        }}
        className="hidden absolute md:left-[calc(55%)] text-secondary md:flex flex-col space-y-8 h-48"
      >
        <div className="flex w-[25rem] lg:w-[30rem]">
          <Image
            src={p1}
            alt="ProjectImage"
            className="rounded-lg aspect-video object-cover"
          />
        </div>
        <div className="flex w-[25rem] lg:w-[30rem]">
          <Image
            src={p2}
            alt="ProjectImage"
            className="rounded-lg aspect-video  object-cover"
          />
        </div>
        <div className="flex w-[25rem] lg:w-[30rem]">
          <Image
            src={p3}
            alt="ProjectImage"
            className="rounded-lg aspect-video  object-cover"
          />
        </div>
      </motion.div>
      <div className="carousel rounded-box h-64 md:hidden">
        <div className="carousel-item w-[100%]">
          <Image
            src={p1}
            alt="ProjectImage"
            className="object-cover object-center"
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src={p1}
            alt="ProjectImage"
            className="object-cover object-center"
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src={p1}
            alt="ProjectImage"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
