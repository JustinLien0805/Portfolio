import { useInView } from "framer-motion";
import { useRef } from "react";

type aboutProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};
const About = ({ scrollRef }: aboutProps) => {
  const isInView = useInView(scrollRef, { once: true });
  return (
    <>
      <div
        className="flex flex-col text-6xl sm:text-left text-right font-black italic mb-10"
        ref={scrollRef}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="font-outline2 pr-1 sm:pl-1">ABOUT ME</h2>
        <h2 className="pr-1 sm:pr-1">ABOUT ME</h2>
        <h2 className="font-outline2 pr-1 sm:pl-1">ABOUT ME</h2>
      </div>
      <div className="flex flex-col w-full relative space-y-8 my-10">
        <p
          className="md:text-3xl text-xl font-semibold text-left sm:w-4/5 w-full"
          ref={scrollRef}
          style={{
            transform: isInView ? "none" : "translatex(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          Hi, I&apos;m Justin. I&apos;m a passionate web developer based in
          Taipei, Taiwan. I specialize in frontend & backend web development but
          also have an interest in design and database development. I am always
          striving to build new things and looking for new opportunities to
          learn and grow.
        </p>
      </div>
    </>
  );
};

export default About;
