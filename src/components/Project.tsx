import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
          imgUrl="https://firebasestorage.googleapis.com/v0/b/react-image-a92d3.appspot.com/o/portfolio%20image%2Fproject1.png?alt=media&token=031db78c-a28f-4fd7-8424-c03006b45582"
          websiteUrl="https://youtube-rewind.vercel.app/"
          sourceCodeUrl="https://github.com/JustinLien0805/youtube_recap"
          tools={["React.js", "Tailwind CSS", "TypeScript", "Vite"]}
        />
        <ProjectCard
          position="right"
          number="02"
          projectTitle="NCCU Restaurant Order System"
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
          number="03"
          projectTitle="NCCU Restaurant Dashboard"
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
