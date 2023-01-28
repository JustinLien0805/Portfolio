import Tilt from "react-parallax-tilt";
const Hero = () => {
  return (
    <Tilt
      className="flex flex-col items-start justify-center h-[100vh] lg:w-[50vw] sm:w-[80vw] w-screen
       font-semibold text-7xl md:text-8xl"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <h1 className="text-6xl">Hello.</h1>
      <h1 className="md:py-2">
        I&apos;m <span className="text-primary">Justin Lien</span>
      </h1>
      <h2 className="text-6xl">
        A{" "}
        <span className="underline decoration-purple-500 underline-offset-4">
          Web Developer
        </span>
      </h2>
    </Tilt>
  );
};

export default Hero;
