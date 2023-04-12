import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Hero = () => {
  return (
    <Tilt
      className="flex flex-col items-start justify-center h-[100vh] sm:w-[80vw] w-screen
       font-semibold text-6xl lg:text-8xl"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <h1 className="text-6xl">Hello.</h1>
      <h1 className="md:py-2">
        I&apos;m <span className="text-secondary">Justin Lien</span>
      </h1>
      <h2 className="text-6xl">
        A{" "}
        <span className="underline decoration-purple-500 underline-offset-4">
          Web Developer
        </span>
      </h2>
      <div className="flex items-center space-x-4 pt-4">
        <a target="_blank" href="https://github.com/JustinLien0805">
          <AiFillGithub className="h-12 w-12" />
        </a>
        <a  href="mailto:justinlien0805@gmail.com">
          <AiFillMail className="h-12 w-12" />
        </a>
      </div>
    </Tilt>
  );
};

export default Hero;
