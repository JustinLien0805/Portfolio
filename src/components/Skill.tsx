import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiPython,
  SiJava,
  SiMysql,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { DiReact } from "react-icons/di";

const Skill = () => {
  return (
    <div className="min-h-[80vh] grid grid-cols-4">
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="React"
        >
          <DiReact className="text-6xl w-full h-full text-[#61DBFB]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiFigma className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiTypescript className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiJavascript className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <TbBrandNextjs className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiJava className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiCss3 className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiHtml5 className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiPython className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiMysql className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiFirebase className="text-6xl w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <div
          className="rounded shadow w-24 h-24 tooltip-secondary tooltip bg-gray-500/30"
          data-tip="TypeScript"
        >
          <SiTailwindcss className="text-6xl w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
