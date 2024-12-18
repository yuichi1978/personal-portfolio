"use client";

import Heading from "@/components/sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets/index";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + index * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
      <Heading text={"Skills"} />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, index) => (
          <motion.div
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
          >
            <Image
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
              className="w-[40px] h-auto"
            />
            <p className="text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
