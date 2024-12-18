"use client";

import { useState, useRef, useEffect } from "react";
import Heading from "@/components/sub/Heading";
import Project from "@/components/sub/Project";
import { projectsData, projectsButton } from "@/assets/index";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRef = useRef([]);

  const handleClick = () => {
    animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((text, index) => (
          <motion.button
            ref={(el) => buttonRef.current.push(el)}
            onClick={() => {
              setIndex(index);
              setTech(text)
            }}
            initial={{
              opacity: index === 0 ? 1 : 0.5,
              scale: index === 0 ? 1.2 : 1,
            }}
            key={index}
            className="
          border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light 
          tracking-wide text-gray-400
          "
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((data, index) => (
            <motion.div key={`id-${index}`} layout>
              <Project data={data} index={index} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
