import { useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col justify-center h-[80vh] relative space-y-8 my-10">
      <h2
        className="text-5xl font-semibold border-l-4 border-primary pl-4"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        About Me
      </h2>
      <p
        className="text-2xl text-white/50"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        Hi, I'm Justin. I'm a passionate web developer based in Taipei, Taiwan.
        Currently studying at National Cheng-Chi University. I'm always striving
        to build new things and looking for new opportunities to
        learn and grow.
      </p>
      {/* <h3 className="absolute text-[200px] w-full -right-48  -top-12 -z-10 text-black/20 font-bold">
      About Me
    </h3> */}
    </div>
  );
};

export default About;
