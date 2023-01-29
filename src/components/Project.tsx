import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";

type projectProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};
const Project = ({ scrollRef }: projectProps) => {
  const isInView = useInView(scrollRef, { once: true });
  return (
    <>
      <div
        className="flex flex-col text-6xl text-right font-black italic my-10 md:-mb-20"
        ref={scrollRef}
        style={{
          transform: isInView ? "none" : "translatex(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="font-outline pr-1">PROJECT</h2>
        <h2 className="pr-1">PROJECT</h2>
        <h2 className="font-outline pr-1">PROJECT</h2>
      </div>
      <div className="flex flex-col space-y-12 sm:space-y-0">
        <ProjectCard
          position="left"
          number="01"
          projectTitle="Youtube Recap"
          description="Our website allows users to easily upload their YouTube watch history
          and receive a detailed yearly report on their viewing habits."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fproject1.png?alt=media&token=031db78c-a28f-4fd7-8424-c03006b45582"
          websiteUrl="https://youtube-rewind.vercel.app/"
          sourceCodeUrl="https://github.com/JustinLien0805/youtube_recap"
          tools={["React.js", "Tailwind CSS", "TypeScript", "Vite"]}
        />
        <ProjectCard
          position="right"
          number="02"
          projectTitle="Facial Paralysis Solver"
          description="Helps facial paralysis patients improve their facial expressions through a website built with React that uses a webcam to capture user's picture and generate 16 different facial expressions with an AI model in a Python Flask backend."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fproject4.png?alt=media&token=09487dc0-f0cb-4be3-b54d-db4685295dd5"
          sourceCodeUrl="https://github.com/JustinLien0805/Facial_paralysis_solver"
          tools={["Python", "Flask", "OpenCV", "OpenVINO", "React.js"]}
          object_cover={false}
        />
        <ProjectCard
          position="right"
          number="03"
          projectTitle="NCCU Restaurant Order System"
          description="Allows users to order food for the next day, and users can like or dislike dishes in a Tinder-like interface by swiping the card."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fproject2.png?alt=media&token=1190451f-fe79-4375-974f-ad928dc5970c"
          websiteUrl="http://nccu-restaurant.vercel.app/"
          sourceCodeUrl="https://github.com/JustinLien0805/nccu-restaurant"
          tools={[
            "Next.js",
            "Tailwind CSS",
            "Framer-motion",
            "prisma",
            "MySQL",
            "Firebase",
          ]}
        />
        <ProjectCard
          position="left"
          number="04"
          projectTitle="NCCU Restaurant Dashboard"
          description="Allows employees to manage and use data from the ordering system and perform data analysis."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fproject3.png?alt=media&token=4a0828a4-5767-43be-a76f-635add9cc7f3"
          websiteUrl="https://nccu-dashboard.vercel.app//"
          sourceCodeUrl="https://github.com/JustinLien0805/nccu-dashboard"
          tools={["Next.js", "Tailwind CSS", "ReCharts", "prisma", "MySQL"]}
        />
      </div>
    </>
  );
};

export default Project;
