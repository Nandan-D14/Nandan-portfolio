"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import dynamic from "next/dynamic";

const Simple3DBackgroundDynamic = dynamic(
  () => import("@/components/ui/3D/Simple3DBackground"),
  { ssr: false }
);

const InteractiveModelDynamic = dynamic(
  () => import("@/components/ui/3D/InteractiveModel"),
  { ssr: false, loading: () => <div className="absolute inset-0" /> }
);
import { AuroraText } from "@/components/ui/AuroraText";
import BottomNavbar from "@/components/ui/BottomNavbar";
import { profileData } from "@/lib/profile/data";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconDownload,
  IconExternalLink,
  IconMapPin,
  IconCode,
  IconTool,
  IconDatabase,
  IconBrain,
} from "@tabler/icons-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

// Tech stack logos mapping
const techLogos: { [key: string]: string } = {
  // Languages
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  
  // Frameworks & Libraries
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Material-UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  
  // Databases
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  
  // AI/ML
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  
  // Tools & Others
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Vercel": "https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-black.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Slack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
};

// Animated Scrolling Following String Component
const AnimatedScrollString = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Animated Curved String */}
      <svg className="absolute left-8 top-0 w-16 h-full" style={{ opacity }}>
        <defs>
          <linearGradient id="stringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Curved String */}
        <motion.path
          d="M 8 0 Q 16 100, 8 200 Q 0 300, 8 400 Q 16 500, 8 600 Q 0 700, 8 800 Q 16 900, 8 1000"
          stroke="url(#stringGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 1], [0, 1]),
            strokeDasharray: 1,
            strokeDashoffset: useTransform(scrollYProgress, [0, 1], [1, 0]),
          }}
        />
        
        {/* Animated Beads on String */}
        <motion.circle
          cx="8"
          cy="0"
          r="4"
          fill="#3b82f6"
          filter="url(#glow)"
          style={{
            cy: useTransform(scrollYProgress, [0, 1], [0, window.innerHeight - 20]),
          }}
        />
        <motion.circle
          cx="8"
          cy="0"
          r="3"
          fill="#8b5cf6"
          filter="url(#glow)"
          style={{
            cy: useTransform(scrollYProgress, [0, 1], [0, window.innerHeight - 40]),
          }}
          transition={{ delay: 0.1 }}
        />
        <motion.circle
          cx="8"
          cy="0"
          r="2"
          fill="#ec4899"
          filter="url(#glow)"
          style={{
            cy: useTransform(scrollYProgress, [0, 1], [0, window.innerHeight - 60]),
          }}
          transition={{ delay: 0.2 }}
        />
      </svg>

      {/* Floating String Particles */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-80 shadow-lg"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-4 right-4 w-16 h-16 rounded-full border-2 border-neutral-600 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center"
        style={{ opacity }}
      >
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-green-500"
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
        />
        <motion.div
          className="absolute text-xs font-bold text-neutral-300"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) }}
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.div>
      </motion.div>

      {/* Animated Curved Progress Bar */}
      <motion.div
        className="fixed bottom-8 left-8 right-8 h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          style={{ scaleX: pathLength, transformOrigin: "left" }}
        />
      </motion.div>
    </div>
  );
};

export default function AboutMe() {
  const { skills, projects, certifications, achievements, contact, name, title, objective } = profileData;

  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full overflow-x-hidden text-neutral-100">
        {/* Animated Scrolling Following String */}
        <AnimatedScrollString />
        
        {/* Subtle 3D background (dynamically loaded) */}
        <Simple3DBackgroundDynamic />

        {/* HERO */}
        <section className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">
              <motion.p variants={item} className="inline-flex items-center gap-2 text-sm text-neutral-300/80">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </motion.p>
              <motion.h1 variants={item} className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m <AuroraText className="px-1">{name}</AuroraText>
              </motion.h1>
              <motion.p variants={item} className="text-xl text-blue-300">
                {title}
              </motion.p>
              <motion.p variants={item} className="text-neutral-300/90 leading-relaxed max-w-2xl">
                {objective}
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-3">
                <a
                  href={contact.resumePath}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                >
                  <IconDownload className="h-4 w-4" /> Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-600/60 bg-blue-600/20 px-4 py-2 text-sm text-blue-200 hover:bg-blue-600/30"
                >
                  Contact
                </a>
              </motion.div>
              <motion.div variants={item} className="flex items-center gap-4 text-neutral-300">
                <IconMapPin className="h-4 w-4" /> {contact.location}
              </motion.div>
              <motion.div variants={item} className="flex gap-3 pt-1">
                {contact.socials.github && (
                  <a className="rounded-full p-2 bg-white/5 hover:bg-white/10" href={contact.socials.github} target="_blank" rel="noreferrer">
                    <IconBrandGithub className="h-5 w-5" />
                  </a>
                )}
                {contact.socials.linkedin && (
                  <a className="rounded-full p-2 bg-white/5 hover:bg-white/10" href={contact.socials.linkedin} target="_blank" rel="noreferrer">
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                )}
                {contact.socials.instagram && (
                  <a className="rounded-full p-2 bg-white/5 hover:bg-white/10" href={contact.socials.instagram} target="_blank" rel="noreferrer">
                    <IconBrandInstagram className="h-5 w-5" />
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Right side interactive 3D showcase */}
            <div className="relative min-h-[380px] md:min-h-[520px]">
              <InteractiveModelDynamic />
            </div>
          </div>
        </section>

        {/* ABOUT ME (above skills) */}
        <section id="about" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pb-6 md:pb-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-neutral-800/70 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 p-6 md:p-8"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
              <AuroraText className="px-1">About Me</AuroraText>
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div variants={item} className="lg:col-span-2 leading-relaxed text-neutral-300/90">
                <p className="mb-4">
                  I’m {name}, a curious engineer building delightful full‑stack experiences and practical AI/ML
                  tools. I enjoy turning ideas into shippable products with clean design, fast performance, and
                  thoughtful UX.
                </p>
                <p>
                  Recently, I’ve focused on Next.js apps, realtime UI, and lightweight 3D interactions. I also
                  love automations, data pipelines, and model‑powered features that actually help users.
                </p>
              </motion.div>
              <motion.ul variants={item} className="grid gap-3">
                {(achievements.slice(0, 3)).map((a, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-neutral-800/70 bg-white/5 px-4 py-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-neutral-200">{a}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </section>

        {/* SKILLS - NEW UNIQUE LAYOUT */}
        <section id="skills" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <AuroraText className="px-2">Technical Skills</AuroraText>
            </motion.h2>
            
            {/* FLOWING SKILLS LAYOUT */}
            <div className="space-y-20">
              {Object.entries(skills).map(([category, list], categoryIndex) => {
                const conf = getCategoryVisuals(category);
                return (
                  <motion.div
                    key={category}
                    variants={item}
                    className={`relative ${categoryIndex % 2 === 0 ? 'text-left' : 'text-right'}`}
                  >
                    {/* Category Header */}
                    <motion.div 
                      className={`flex items-center gap-4 mb-8 ${categoryIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${conf.badgeBg} ${conf.badgeRing} shadow-lg`}>
                        {conf.icon}
                      </div>
                      <h3 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                        {category}
                      </h3>
                    </motion.div>

                    {/* Skills Grid - Alternating Layout */}
                    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${
                      categoryIndex % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                      {list.map((skill, skillIndex) => {
                        const logoUrl = techLogos[skill];
                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.08, 
                              y: -8,
                              rotateY: 5,
                              transition: { type: "spring", stiffness: 300 }
                            }}
                            className="group relative"
                          >
                            {/* Skill Card */}
                            <div className="relative bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-4 hover:border-neutral-600/70 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/50">
                              {/* Logo */}
                              <div className="flex justify-center mb-3">
                                {logoUrl ? (
                                  <motion.img
                                    src={logoUrl}
                                    alt={`${skill} logo`}
                                    className="h-12 w-12 object-contain filter drop-shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                ) : (
                                  <motion.div 
                                    className="h-12 w-12 rounded-xl bg-neutral-700 flex items-center justify-center"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                  >
                                    <IconCode className="h-6 w-6 text-neutral-400" />
                                  </motion.div>
                                )}
                              </div>
                              
                              {/* Skill Name */}
                              <div className="text-center">
                                <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                                  {skill}
                                </span>
                              </div>

                              {/* Hover Glow Effect */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-neutral-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Floating Particles Effect */}
                            <div className="absolute inset-0 -z-10">
                              <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                              <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }} />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Category Glow Line */}
                    <motion.div 
                      className={`absolute top-16 h-0.5 bg-gradient-to-r ${categoryIndex % 2 === 0 ? 'from-blue-500 to-purple-500 left-0' : 'from-purple-500 to-blue-500 right-0'} w-32 opacity-60`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* CENTERED SKILLS SHOWCASE */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-neutral-300">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {Object.entries(skills).flatMap(([category, list]) => 
                  list.slice(0, 2).map((skill) => {
                    const logoUrl = techLogos[skill];
                    return (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.15, y: -10 }}
                        className="group relative"
                      >
                        <div className="relative bg-gradient-to-br from-neutral-800/60 to-neutral-700/40 backdrop-blur-md border border-neutral-600/50 rounded-3xl p-6 hover:border-neutral-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50">
                          {logoUrl ? (
                            <motion.img
                              src={logoUrl}
                              alt={`${skill} logo`}
                              className="h-16 w-16 object-contain filter drop-shadow-lg"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <motion.div 
                              className="h-16 w-16 rounded-2xl bg-neutral-700 flex items-center justify-center"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                              <IconCode className="h-8 w-8 text-neutral-400" />
                            </motion.div>
                          )}
                          <div className="mt-3 text-center">
                            <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                              {skill}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8">
              <AuroraText className="px-1">Projects</AuroraText>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">{p.title}</h3>
                    <div className="flex gap-2">
                      {p.link && (
                        <a className="rounded p-2 text-neutral-300 hover:text-blue-300" href={p.link} target="_blank" rel="noreferrer">
                          <IconExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {p.github && (
                        <a className="rounded p-2 text-neutral-300 hover:text-green-300" href={p.github} target="_blank" rel="noreferrer">
                          <IconBrandGithub className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-300/90">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech) => {
                      const logoUrl = techLogos[tech];
                      return (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1.5 rounded border border-blue-500/30 bg-blue-500/10 px-2 py-1 text-xs text-blue-200"
                        >
                          {logoUrl ? (
                            <img
                              src={logoUrl}
                              alt={`${tech} logo`}
                              className="h-3 w-3 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="h-3 w-3 rounded-full bg-blue-600 flex items-center justify-center">
                              <IconCode className="h-1.5 w-1.5 text-blue-200" />
                            </div>
                          )}
                          <span>{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* HIGHLIGHTS - ENHANCED */}
        <section id="highlights" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <AuroraText className="px-2">Highlights & Achievements</AuroraText>
            </motion.h2>
            
            {/* STATS CARDS */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-blue-300 mb-2">{projects.length}+</div>
                  <div className="text-sm text-neutral-300">Projects Completed</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur-sm border border-green-700/50 rounded-2xl p-6 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-green-300 mb-2">{certifications.length}</div>
                  <div className="text-sm text-neutral-300">Certifications</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-purple-300 mb-2">{achievements.length}</div>
                  <div className="text-sm text-neutral-300">Achievements</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-orange-900/40 to-orange-800/20 backdrop-blur-sm border border-orange-700/50 rounded-2xl p-6 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-orange-300 mb-2">2+</div>
                  <div className="text-sm text-neutral-300">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* DETAILED HIGHLIGHTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* CERTIFICATIONS */}
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-sm border border-yellow-700/30 rounded-3xl p-8 group"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                    <IconDownload className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500"></span>
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((c, i) => (
                    <motion.div
                      key={`${c.name}-${i}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-yellow-700/20 hover:border-yellow-600/40 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-neutral-100 mb-1">{c.name}</p>
                        <p className="text-sm text-yellow-300">{c.issuer}</p>
                      </div>
                      {c.year && (
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                            {c.year}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ACHIEVEMENTS */}
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm border border-green-700/30 rounded-3xl p-8 group"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <IconBrain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500"></span>
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((a, i) => (
                    <motion.div
                      key={`${a}-${i}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-green-700/20 hover:border-green-600/40 transition-all duration-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-200 leading-relaxed">{a}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT - ENHANCED */}
        <section id="contact" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <AuroraText className="px-2">Let&apos;s Connect</AuroraText>
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* CONTACT INFO */}
              <motion.div 
                variants={item}
                className="lg:col-span-1 space-y-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-blue-900/20 to-indigo-900/10 backdrop-blur-sm border border-blue-700/30 rounded-3xl p-8 group"
                >
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <IconMapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">Contact Info</h3>
                  <div className="space-y-4">
                    <motion.a 
                      href={`mailto:${contact.email}`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-blue-700/20 hover:border-blue-600/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <IconDownload className="h-5 w-5 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400">Email</p>
                        <p className="text-blue-300 group-hover:text-blue-200 transition-colors">{contact.email}</p>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-green-700/20 hover:border-green-600/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <IconDownload className="h-5 w-5 text-green-300" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400">Phone</p>
                        <p className="text-green-300 group-hover:text-green-200 transition-colors">{contact.phone}</p>
                      </div>
                    </motion.a>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-purple-700/20 hover:border-purple-600/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <IconMapPin className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400">Location</p>
                        <p className="text-purple-300">{contact.location}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* SOCIAL LINKS */}
              <motion.div 
                variants={item}
                className="lg:col-span-2"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 backdrop-blur-sm border border-neutral-700/30 rounded-3xl p-8 group"
                >
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neutral-500 to-gray-500 rounded-full flex items-center justify-center">
                      <IconBrandLinkedin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-300 mb-6">Connect With Me</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contact.socials.linkedin && (
                      <motion.a 
                        href={contact.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-700/30 hover:border-blue-600/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                          <IconBrandLinkedin className="h-6 w-6 text-blue-300 group-hover:text-blue-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-100">LinkedIn</p>
                          <p className="text-sm text-blue-300">Professional Network</p>
                        </div>
                      </motion.a>
                    )}
                    
                    {contact.socials.github && (
                      <motion.a 
                        href={contact.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-900/40 to-green-800/20 border border-green-700/30 hover:border-green-600/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                          <IconBrandGithub className="h-6 w-6 text-green-300 group-hover:text-green-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-100">GitHub</p>
                          <p className="text-sm text-green-300">Code Repository</p>
                        </div>
                      </motion.a>
                    )}
                    
                    {contact.socials.instagram && (
                      <motion.a 
                        href={contact.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-900/40 to-pink-800/20 border border-pink-700/30 hover:border-pink-600/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                          <IconBrandInstagram className="h-6 w-6 text-pink-300 group-hover:text-pink-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-100">Instagram</p>
                          <p className="text-sm text-pink-300">Personal Updates</p>
                        </div>
                      </motion.a>
                    )}
                    
                    <motion.a 
                      href={contact.resumePath}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-900/40 to-orange-800/20 border border-orange-700/30 hover:border-orange-600/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <IconDownload className="h-6 w-6 text-orange-300 group-hover:text-orange-200" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-100">Resume</p>
                        <p className="text-sm text-orange-300">Download CV</p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <footer className="relative z-10 border-t border-neutral-800/80 py-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </footer>

        <div className="fixed bottom-8 left-0 right-0 z-20">
          <BottomNavbar />
        </div>
      </main>
    </SmoothScroll>
  );
}

function getCategoryVisuals(category: string) {
  switch (category) {
    case "Languages":
      return {
        icon: <IconCode className="h-5 w-5 text-blue-300" />,
        bg: "bg-gradient-to-br from-blue-950/50 to-blue-900/10",
        border: "border-blue-900/40",
        badgeBg: "bg-blue-900/40",
        badgeRing: "ring-1 ring-inset ring-blue-800/40",
        chipBorder: "border-blue-800/40",
        glow: "bg-blue-500/10 blur-3xl",
      };
    case "Frameworks":
      return {
        icon: <IconTool className="h-5 w-5 text-purple-300" />,
        bg: "bg-gradient-to-br from-purple-950/50 to-purple-900/10",
        border: "border-purple-900/40",
        badgeBg: "bg-purple-900/40",
        badgeRing: "ring-1 ring-inset ring-purple-800/40",
        chipBorder: "border-purple-800/40",
        glow: "bg-purple-500/10 blur-3xl",
      };
    case "Databases":
      return {
        icon: <IconDatabase className="h-5 w-5 text-emerald-300" />,
        bg: "bg-gradient-to-br from-emerald-950/50 to-emerald-900/10",
        border: "border-emerald-900/40",
        badgeBg: "bg-emerald-900/40",
        badgeRing: "ring-1 ring-inset ring-emerald-800/40",
        chipBorder: "border-emerald-800/40",
        glow: "bg-emerald-500/10 blur-3xl",
      };
    case "AI/ML":
      return {
        icon: <IconBrain className="h-5 w-5 text-pink-300" />,
        bg: "bg-gradient-to-br from-pink-950/50 to-pink-900/10",
        border: "border-pink-900/40",
        badgeBg: "bg-pink-900/40",
        badgeRing: "ring-1 ring-inset ring-pink-800/40",
        chipBorder: "border-pink-800/40",
        glow: "bg-pink-500/10 blur-3xl",
      };
    case "Tools":
      return {
        icon: <IconTool className="h-5 w-5 text-amber-300" />,
        bg: "bg-gradient-to-br from-amber-950/50 to-amber-900/10",
        border: "border-amber-900/40",
        badgeBg: "bg-amber-900/40",
        badgeRing: "ring-1 ring-inset ring-amber-800/40",
        chipBorder: "border-amber-800/40",
        glow: "bg-amber-500/10 blur-3xl",
      };
    default:
      return {
        icon: <IconCode className="h-5 w-5 text-neutral-300" />,
        bg: "bg-gradient-to-br from-neutral-900/50 to-neutral-800/10",
        border: "border-neutral-800/40",
        badgeBg: "bg-neutral-800/40",
        badgeRing: "ring-1 ring-inset ring-neutral-700/40",
        chipBorder: "border-neutral-700/40",
        glow: "bg-white/5 blur-3xl",
      };
  }
}


