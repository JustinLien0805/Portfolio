import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        className="flex flex-col text-6xl text-right font-black italic mt-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="font-outline pr-1">PROJECT</h2>
        <h2 className="pr-1">PROJECT</h2>
        <h2 className="font-outline pr-1">PROJECT</h2>
      </div>
      <ProjectCard position="left" number="#001" />
      <ProjectCard position="right" number="#002" />
    </>
  );
};

export default Project;
