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
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
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
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fmockup1.png?alt=media&token=a0168159-52cc-4e0e-8905-783ac7d69a06"
          websiteUrl="https://youtube-rewind.vercel.app/"
          sourceCodeUrl="https://github.com/JustinLien0805/youtube_recap"
          tools={["React", "Tailwind CSS", "TypeScript", "Vite"]}
        />
        <ProjectCard
          position="right"
          number="02"
          projectTitle="Facial Paralysis Solver"
          description="Helps facial paralysis patients improve their facial expressions through a website built with React that uses a webcam to capture user's picture and generate 16 different facial expressions with an AI model in a Python Flask backend."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fmockup2.png?alt=media&token=8c148c40-79aa-4f5a-8f7e-745db3f6eb12"
          sourceCodeUrl="https://github.com/JustinLien0805/Facial_paralysis_solver"
          tools={["Python", "Flask", "OpenCV", "OpenVINO", "React"]}
          object_cover={false}
        />
        <ProjectCard
          position="right"
          number="03"
          projectTitle="NCCU Restaurant Order System"
          description="Allows users to order food for the next day, and users can like or dislike dishes in a Tinder-like interface by swiping the card."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fmockup3.png?alt=media&token=796e0c0a-cb7d-4070-908f-f7115dcc8040"
          websiteUrl="http://nccu-restaurant.vercel.app/"
          sourceCodeUrl="https://github.com/JustinLien0805/nccu-restaurant"
          tools={["Next.js", "Tailwind CSS", "prisma", "MySQL", "Firebase"]}
        />
        <ProjectCard
          position="left"
          number="04"
          projectTitle="NCCU Restaurant Dashboard"
          description="Allows employees to manage and use data from the ordering system and perform data analysis."
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fmockup4.png?alt=media&token=de985afc-d699-4806-8637-9d60c048b9b5"
          websiteUrl="https://nccu-dashboard.vercel.app//"
          sourceCodeUrl="https://github.com/JustinLien0805/nccu-dashboard"
          tools={["Next.js", "Tailwind CSS", "ReCharts", "prisma", "MySQL"]}
        />
      </div>
    </>
  );
};

export default Project;
