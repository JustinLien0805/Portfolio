import { useInView } from "framer-motion";

type aboutProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};
const About = ({ scrollRef }: aboutProps) => {
  const isInView = useInView(scrollRef, { once: true });
  return (
    <div className="flex flex-col justify-center items-center md:flex-row h-[100vh] sm:h-[80vh]">
      <div
        className="flex flex-col w-full text-6xl md:text-left text-right font-black italic mb-10"
        ref={scrollRef}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="font-outline2 pr-1 md:pl-1">ABOUT ME</h2>
        <h2 className="pr-1 md:pr-1">ABOUT ME</h2>
        <h2 className="font-outline2 pr-1 md:pl-1">ABOUT ME</h2>
      </div>

      <p
        className="flex flex-col space-y-2 md:text-2xl text-xl font-semibold text-left tracking-wider sm:w-4/5 w-full"
        ref={scrollRef}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <span className="w-full text-3xl font-bold md:text-4xl">
          Nice to meet you!
        </span>
        <span className="w-full">I&apos;m Justin.</span>
        <span className="w-full">
          I&apos;m a passionate web developer based in Taipei, Taiwan.
        </span>
        <span className="w-full">
          Specialized in frontend development and love building and creating new
          projects.
        </span>
      </p>
    </div>
  );
};

export default About;
