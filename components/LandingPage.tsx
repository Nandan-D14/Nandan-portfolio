"use client";

import { IconBrandInstagram } from "@tabler/icons-react";
import { AuroraText, FlipWords } from "./ui/AuroraText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M9.352,6.913L14.72,0h-1.32L9.014,6.082L5.432,0H0l5.626,8.125L0,15.1h1.32l4.634-5.594L10.01,15.1h5.432L9.352,6.913z M7.91,8.455l-0.64-0.908L2.26,1.077h2.05l3.87,5.52l0.64,0.908l5.24,7.47h-2.05L7.91,8.455z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.449 13.5h-13.449v-3h13.449l-4.449-4.449 2.121-2.121 7.879 7.879-7.879 7.879-2.121-2.121z" />
  </svg>
);

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="hero-card bg-neutral-800/40 backdrop-blur-md saturate-200 rounded-0xl p-8 md:p-15 md:mt-[-50px] shadow-sm border border-gray-900 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl w-8xl mx-auto z-10"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-100 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-100 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-50">
        {/* Left Column: Text Content */}
        <motion.div className="md:w-2/3" variants={itemVariants}>
          <motion.div
            className="flex items-center gap-3 mb-[100px]"
            variants={itemVariants}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs font-medium text-green-300">
              Available for work
            </span>
          </motion.div>
          <motion.div className="relative mb-2" variants={itemVariants}>
            <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Hello 👋🏻 <br />
              I&apos;m{" "}
              <span className="relative inline-block font-Bold after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-slate-100 after:transition-all after:duration-300 hover:after:w-full">
                <AuroraText>Nandan D</AuroraText>
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="text-4xl font-bold mb-5 mt-5"
            variants={itemVariants}
          >
            I love{" "}
            <FlipWords
              words={[
                "creating",
                "learning",
                "coding",
                "exploring",
                "building",
                "designing",
                "crafting",
              ]}
              duration={3000}
              className="dark:text-pink-600 text-pink-600 font-semibold"
            />{" "}
            amazing experiences
          </motion.div>
          <motion.p
            className="text-gray-300 mb-8 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Engineering student at{" "}
            <span className="font-medium text-gray-200"> PES University</span>{" "}
            with hands-on experience in full-stack development and AI/ML.
            Seeking to contribute to dynamic teams and gain practical exposure.
            .
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={itemVariants}
          >
            <motion.a
              target="_blank"
              href="./Nandan_D_Resume.pdf"
              className="btn btn-dark px-5 py-2.5 rounded-lg text-sm font-medium bg-slate-100 text-black border border-slate-700 transition-colors hover:bg-slate-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My CV
            </motion.a>
            <motion.a
              href="/about#contact"
              className="btn btn-light px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 border border-slate-700 rounded-lg transition-colors hover:bg-slate-100 hover:text-black"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <ArrowRightIcon />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 mt-8"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-400">Connect:</p>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/nandan-d14"
                className="social-link w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-transform hover:-translate-y-0.5  hover:bg-slate-800"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nandan-14"
                className="social-link w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <LinkedinIcon />
              </motion.a>
              <motion.a
                href="https://instagram.com/__nandan__d14"
                className="social-link w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <IconBrandInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        {/* Right Column: Profile Image */}
        <motion.div
          className="md:w-1/3 flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div
              className="bg-gray-800 grayscale-40 border-2 border-dashed border-gray-700 rounded-3xl w-40 h-40 md:w-88 md:h-108 flex items-center justify-center overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <img
                src="https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/192x192/e2e8f0/475569?text=Image";
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
