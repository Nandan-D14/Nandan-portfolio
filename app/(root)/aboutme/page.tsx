"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BottomNavbar from "@/components/ui/BottomNavbar";
import { AuroraText } from "@/components/ui/AuroraText";
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconBrandInstagram,
  IconDownload,
  IconExternalLink,
  IconCode,
  IconBrain,
  IconDatabase,
  IconTool,
  IconAward,
  IconSchool,
  IconBriefcase
} from '@tabler/icons-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Skills data organized by category
const skillsData = {
  Languages: ["Python", "JavaScript", "JQuery", "HTML", "CSS", "C", "Data Structures & Algorithms"],
  Frameworks: ["React.js", "Next.js", "React Native", "Node.js", "Express.js", "Tailwind CSS"],
  Databases: ["MongoDB", "Firebase"],
  "AI/ML": ["OpenCV", "MediaPipe", "Streamlit", "Tkinter", "PyTorch", "NLTK", "NumPy", "Pandas", "Selenium", "OpenAI", "GenAI", "LangChain"],
  Tools: ["VS Code", "Git", "GitHub", "Docker", "n8n", "Cursor", "Arduino IDE", "VirtualBox", "LM Studio", "Ollama", "Vercel", "Render"]
};

// Education data
const educationData = [
  {
    id: 1,
    institution: "PES University, Bangalore",
    degree: "B.Tech. (CSE)",
    grade: "6.76 CGPA",
    period: "Expected 2027",
    description: "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons."
  },
  {
    id: 2,
    institution: "Vikasa PU College",
    degree: "PU (12th Grade)",
    grade: "91%",
    period: "2021-2023",
    description: "Completed pre-university education with focus on Physics, Chemistry, Mathematics and Computer Science."
  },
  {
    id: 3,
    institution: "MDRS Anaveri",
    degree: "SSLC (10th Grade)",
    grade: "90%",
    period: "2016-2021",
    description: "Completed secondary education with strong foundation in core subjects including Mathematics, Science, and English."
  }
];

// Projects data
const projectsData = [
  {
    title: "Explore World",
    description: "MERN website for exploring tourist destinations with modern UI and real-time data.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://explore-world-steel.vercel.app/",
    github: "https://github.com/Nandan-D14/explore-world"
  },
  {
    title: "Prompt Pallete",
    description: "AI image prompt generator using Next.js & Firebase with user authentication.",
    tech: ["Next.js", "Firebase", "AI/ML", "TypeScript"],
    link: "https://prompt-pallet.vercel.app/",
    github: "https://github.com/Nandan-D14/prompt-pallet"
  },
  {
    title: "Search Pro",
    description: "Browser extension for one-click smart search with customizable search engines.",
    tech: ["JavaScript", "Chrome Extension", "HTML/CSS"],
    link: "#",
    github: "https://github.com/Nandan-D14/search-pro-browser-extension"
  },
  {
    title: "Type Me",
    description: "Typing practice web app with real-time WPM tracking and accuracy metrics.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://inspiring-lamington-029d50.netlify.app/",
    github: "https://github.com/Nandan-D14/Type-Me-website0014"
  },
  {
    title: "Gesture Control",
    description: "Touchless PC controller using OpenCV & Arduino with hand gesture recognition.",
    tech: ["Python", "OpenCV", "MediaPipe", "Arduino"],
    link: "#",
    github: "https://github.com/Nandan-D14/Vision-Hand-Gesture-Control-System"
  },
  {
    title: "Voice Assistant",
    description: "AI-powered assistant using Python & Gemini AI with voice recognition.",
    tech: ["Python", "Gemini AI", "Speech Recognition"],
    link: "#",
    github: "https://github.com/Nandan-D14/voice-assistant-project"
  },
  {
    title: "Weather Assistant",
    description: "GUI app with real-time weather & voice output using weather APIs.",
    tech: ["Python", "Tkinter", "Weather API", "TTS"],
    link: "#",
    github: "https://github.com/Nandan-D14/weather-voice-assistant"
  },
  {
    title: "Skill Bridge",
    description: "React Native app connecting skilled professionals with job opportunities.",
    tech: ["React Native", "JavaScript", "Mobile Development"],
    link: "#",
    github: "https://github.com/Nandan-D14/skill-bridge"
  }
];

// Certifications data
const certificationsData = [
  { name: "Python Programming", issuer: "Udemy", year: "2023" },
  { name: "DSA Problem Solving", issuer: "HackerRank", year: "2023" }
];

// Achievements data
const achievementsData = [
  "Participated in multiple hackathons and coding competitions",
  "Awarded 'Good Coder' badge in college contest",
  "Placed 5th in inter-college coding competition",
  "Active contributor to open-source projects on GitHub",
  "Built and deployed 8+ full-stack web applications"
];

export default function AboutMePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionButtons = [
    { id: 'about', label: 'About', icon: IconBriefcase },
    { id: 'skills', label: 'Skills', icon: IconCode },
    { id: 'education', label: 'Education', icon: IconSchool },
    { id: 'projects', label: 'Projects', icon: IconBrain },
    { id: 'achievements', label: 'Achievements', icon: IconAward },
    { id: 'contact', label: 'Contact', icon: IconMail }
  ];

  const SkillCategory = ({ category, skills }: { category: string; skills: string[] }) => {
    const getIcon = (category: string) => {
      switch (category) {
        case 'Languages': return <IconCode className="w-5 h-5" />;
        case 'Frameworks': return <IconTool className="w-5 h-5" />;
        case 'Databases': return <IconDatabase className="w-5 h-5" />;
        case 'AI/ML': return <IconBrain className="w-5 h-5" />;
        case 'Tools': return <IconTool className="w-5 h-5" />;
        default: return <IconCode className="w-5 h-5" />;
      }
    };

    return (
      <motion.div
        variants={itemVariants}
        className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700"
        whileHover={cardHoverVariants.hover}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-400">
            {getIcon(category)}
          </div>
          <h3 className="text-lg font-semibold text-white">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-neutral-700/50 text-neutral-200 rounded-full text-sm border border-neutral-600 hover:border-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
    <motion.div
      variants={itemVariants}
      className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700 group"
      whileHover={cardHoverVariants.hover}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2">
          {project.link !== "#" && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-400 hover:text-blue-400 transition-colors"
            >
              <IconExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-400 hover:text-green-400 transition-colors"
          >
            <IconBrandGithub className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
      <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="mb-6">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500/30"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg"
                    alt="Nandan D"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/128x128/e2e8f0/475569?text=ND";
                    }}
                  />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <AuroraText>NANDAN D</AuroraText>
                </h1>
                <p className="text-xl text-blue-400 mb-2">Full-Stack Developer & AI/ML Enthusiast</p>
                <p className="text-neutral-300 flex items-center justify-center gap-2">
                  <IconMapPin className="w-4 h-4" />
                  Shivamogga, Karnataka, India
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-8 border border-neutral-700">
              <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <IconBriefcase className="w-6 h-6" />
                Objective
              </h2>
              <p className="text-neutral-200 leading-relaxed text-lg">
                Engineering student at <span className="text-blue-400 font-semibold">PES University</span> with hands-on experience in 
                full-stack development and AI/ML. Seeking to contribute to dynamic teams and gain practical exposure 
                in cutting-edge technologies while building innovative solutions that make a meaningful impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-8 border border-neutral-700">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Quick Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">8+</div>
                  <div className="text-neutral-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">2+</div>
                  <div className="text-neutral-300">Years Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-neutral-300">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5th</div>
                  <div className="text-neutral-300">Competition Rank</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Technical Skills</h2>
              <p className="text-neutral-300">Technologies and tools I work with</p>
            </motion.div>
            {Object.entries(skillsData).map(([category, skills]) => (
              <SkillCategory key={category} category={category} skills={skills} />
            ))}
          </motion.div>
        );

      case 'education':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Education</h2>
              <p className="text-neutral-300">My academic journey</p>
            </motion.div>
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700"
                whileHover={cardHoverVariants.hover}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.institution}</h3>
                    <p className="text-blue-400 font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-green-400 font-semibold">{edu.grade}</p>
                    <p className="text-neutral-400 text-sm">{edu.period}</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Projects</h2>
              <p className="text-neutral-300">Some of my notable work</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectsData.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.div>
        );

      case 'achievements':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Achievements & Activities</h2>
              <p className="text-neutral-300">Recognition and accomplishments</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <IconAward className="w-5 h-5 text-yellow-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certificationsData.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-neutral-700/30 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{cert.name}</p>
                      <p className="text-blue-400 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-neutral-400 text-sm">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <IconAward className="w-5 h-5 text-green-400" />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {achievementsData.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-neutral-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-2">Let's Connect</h2>
              <p className="text-neutral-300">Feel free to reach out for collaborations or opportunities</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+917019475709"
                    className="flex items-center gap-3 text-neutral-200 hover:text-green-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconPhone className="w-5 h-5" />
                    +91 7019475709
                  </motion.a>
                  <motion.a
                    href="mailto:nandand1482005@gmail.com"
                    className="flex items-center gap-3 text-neutral-200 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconMail className="w-5 h-5" />
                    nandand1482005@gmail.com
                  </motion.a>
                  <div className="flex items-center gap-3 text-neutral-200">
                    <IconMapPin className="w-5 h-5" />
                    Shivamogga, Karnataka, India
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-4">Social Links</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://linkedin.com/in/nandan-d14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-200 hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </motion.a>
                  <motion.a
                    href="https://github.com/Nandan-D14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-200 hover:text-green-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconBrandGithub className="w-5 h-5" />
                    GitHub Profile
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/__nandan__d14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-200 hover:text-pink-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <IconBrandInstagram className="w-5 h-5" />
                    Instagram
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <motion.a
                href="./Nandan_D_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconDownload className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full items-center justify-center font-sans">
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      
      <BackgroundBeamsWithCollision>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="w-full max-w-6xl mx-auto px-4 py-8"
        >
          <div className="bg-neutral-800/40 backdrop-blur-md saturate-200 rounded-xl p-8 shadow-sm border border-gray-900 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl">
              {/* Navigation */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {sectionButtons.map((button) => {
                  const Icon = button.icon;
                  return (
                    <motion.button
                      key={button.id}
                      onClick={() => setActiveSection(button.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        activeSection === button.id
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-neutral-700/50 text-neutral-300 hover:bg-neutral-600/50 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                      {button.label}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
          </div>
        </motion.div>
      </BackgroundBeamsWithCollision>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 text-center py-6 text-neutral-400 text-sm border-t border-neutral-800 mt-10"
      >
        © {new Date().getFullYear()} Nandan D. All rights reserved. Made with ❤️ using Next.js
      </motion.footer>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <BottomNavbar />
      </motion.div>
    </div>
  );
}
