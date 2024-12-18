"use client";

import { useState } from "react";
import Image from "next/image";
import { heroIcons } from "@/assets/index";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    // console.log(clientX, clientY, x, y);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);

    console.log(innerHeight, innerWidth);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-content-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="
          flex flex-col items-center justify-center gap-y-3
          font-light capitalize
          "
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              className="w-[150px] h-auto"
              priority={true} // priority 属性は、特定の画像に優先順位を付けることができる Next.js の特別な機能
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: btnHover ? 0 : 1,
                scale: btnHover ? 2 : 0,
                y: btnHover ? -40 : 0,
              }}
              transition={{
                opacity: { delay: 0.4 },
              }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1
            className="
            text-center text-3xl font-bold tracking-wider
          text-gray-500 sm:text-2xl dark:text-white"
          >
            My Name is Nick Brown &
          </h1>
          <p
            className="
            text-lg tracking-wide text-gray-700 dark:text-gray-200 
            transition-colors
            "
          >
            I like animations 😊
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center items-center gap-x-10 text-3xl text-yellow-600"
        >
          {heroIcons.map((icon, index) => (
            <a
              key={index}
              href="#"
              className="
              hover:bg-red-400 hover:text-white transition-colors 
              rounded-lg sm:text-2xl
              "
            >
              {icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className="
          mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light 
          capitalize tracking-wider text-white hover:bg-red-500 transition-colors
          "
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Talk to my
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
