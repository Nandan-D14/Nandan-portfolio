import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";

export const my_cv = "./Nandan_D_Resume.pdf";
export const Name = "Nandan D";

export const skills = {
  Languages: ["Python", "JavaScript", "JQuery", "HTML", "CSS", "C", "DSA"],
};

export const academics = [
  {
    id: 1,
    CollegeName: "PES University, Bangalore",
    Marks: "CSE",
    date: "Aug 2023 – May 2027",
    slogan:
      "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons.",
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Database Management Systems",
    ],
  },
  {
    id: 2,
    CollegeName: "Vikasa PU College",
    Marks: "PU (12th Grade), 95% in PCM",
    date: "June 2021 – May 2023",
    slogan:
      "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons.",
    courses: ["Physics", "Mathematics", "Chemistry", "Biology"],
  },
  {
    id: 3,
    CollegeName: "MDRS Anaveri",
    Marks: "SSLC (10th Grade), 90%",
    date: "Jun 2016 – May 2021",
    slogan:
      "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
    ],
  },
];

export const contactDetails = {
    number : "+91 7019475709",
    location: " Karnataka, India",
    gamil: "nandand1482005@gmail.com",
    github: "https://github.com/Nandan-D14",
    linkedIn: "https://linkedin.com/in/nandan-d14",
    instagram: "https://www.instagram.com/__nandan__d14",
}

export const Certifications = {
    'Python Programming ':'Udemy',
    'DSA Problem Solving' :'HackerRank',
}

const TechStack = [
  {
    id: 1,
    name: "React.js",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterprogramming.pub%2Fgetting-started-with-react-js-part-1-59598ef17780",
  },
  {
    id: 2,
    name: "Node.js",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Express.js",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Next.js",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Python",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const tilelineData = [
  {
    title: "Explore World",
    content: (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* ...existing code... */}
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          A modern, full-stack web application for discovering and exploring
          amazing travel destinations around the world. Built with React.js
          frontend and Node.js/Express backend with MongoDB database.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://explore-world-steel.vercel.app/"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore World
          </a>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/exploreworld/image1.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/exploreworld/image2.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/exploreworld/image3.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/exploreworld/image.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </motion.div>
    ),
  },
  {
    title: "Prompt Pallete",
    content: (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* ...existing code... */}
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          A modern full-stack AI image gallery platform built with Next.js 15,
          Firebase, and TypeScript. Features real-time gallery updates, user
          authentication, admin tools, and AI-powered image prompts.
        </p>
        <p className="mb-8 text-xs font-normal  md:text-sm text-neutral-200">
          prompt pallet is website that have to many ai prompts to edit you
          photos into master piece , and you can generate more accurate prompt
          in your style.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://prompt-pallet.vercel.app/"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prompt Pallete
          </a>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/pp/image1.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/pp/image2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/pp/image3.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/pp/image.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </motion.div>
    ),
  },
  {
    title: "Type Me",
    content: (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          Type me is simple website that i made to practice speed typing , you
          can check it out through clicking below link.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://inspiring-lamington-029d50.netlify.app/"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Type Me
          </a>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/typeme/image.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/typeme/image2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </motion.div>
    ),
  },
  {
    title: "Gesture Control",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          A real-time hand gesture and distance-sensor-based mouse, scroll, and
          volume controller using Python, OpenCV, MediaPipe, and Arduino. This
          hybrid system enables touchless control of PC functions via hand
          gestures and ultrasonic sensor inputs.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://github.com/Nandan-D14/Vision-Hand-Gesture-Control-System"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gesture Control
          </a>
        </p>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🖱️ Hand Tracking with MediaPipe for cursor movement.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            👆 Finger Gestures to perform: Left click (Thumb + Index) ,Right
            click (Thumb + Middle), Drag (Thumb + Ring) ,Double click
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🧭 HC-SR04 Ultrasonic Sensors: Sensor 1: Control volume Sensor 2:
            Control scrolling
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔄 IR Sensor toggle: Lock/Unlock cursor or enable/disable controls.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔌 Auto-detect Arduino COM port.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            📋 On-screen instructions and real-time feedback using OpenCV
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/mpca/img.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/mpca/img1.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    ),
  },
  {
    title: "Voice Assistant",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          A comprehensive voice assistant built with Python that integrates
          Google's Gemini AI for intelligent conversations and responses.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://github.com/Nandan-D14/voice-assistant-project"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voice Assistant
          </a>
        </p>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔊 Text-to-Speech – Natural voice responses with customizable voice
            settings.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🎤 Voice Recognition – Advanced speech-to-text using Google Speech
            Recognition.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🧠 AI Integration – Powered by Google's Gemini AI for intelligent
            responses.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🌐 Web Browsing – Open websites and search the web with voice
            commands.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            📊 System Information – Battery, memory, CPU status reporting.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔊 Text-to-Speech – Natural voice responses with customizable voice
            settings.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            💻 System Control – Shutdown, restart, take screenshots, and more.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🎬 Media Control – Play YouTube videos and search content.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            📚 Wikipedia Integration – Fetch information via voice.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🖥️ Cross-Platform – Works on Windows (others with customization).
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    ),
  },
  {
    title: "Weather Assistant",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          This is a Python-based weather application with a graphical interface
          built using Tkinter. It provides real-time weather updates, a 7-day
          forecast, air quality details (AQI, PM2.5, PM10), and timezone info.
          The app supports both text and voice input, and gives spoken weather
          reports using text-to-speech.
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://github.com/Nandan-D14/weather-voice-assistant"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather Assistant
          </a>
        </p>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            📍 Get current location weather by entering a city name.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🎤 Voice-enabled search (Google Speech Recognition).
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🔊 Weather report spoken aloud using text-to-speech.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            📅 7-day forecast preview with icons and temperatures.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🧭 Show timezone and coordinates for searched cities.
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            💨 Live air quality index (AQI), PM2.5, PM10 levels
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🎨 Changeable theme/background color .
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            🧭 Real-time clock and location details .
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    ),
  },
  {
    title: "Search Pro",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          Search Pro Extension is a modern, customizable Chrome extension that
          provides a sleek, glassy search interface for quick access to multiple
          search engines and custom websites
        </p>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          check live here{" "}
          <a
            href="https://github.com/Nandan-D14/search-pro-browser-extension/"
            className="text-2xl text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search Pro
          </a>
        </p>

        <div id="skillDemo" className="mb-8">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            Search Engine Selection: Choose from default engines (Google,
            YouTube, GitHub, ChatGPT) or custom websites via a dropdown.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/spe/image.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/spe/image3.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/spe/image2.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    ),
  },
  {
    title: "Skill Bridge",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          React Native app connecting skilled professionals.
        </p>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="./hh/img.png"
            alt="hero template"
            width={500}
            height={"auto"}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
          />
          <img
            src="./hh/img2.png"
            alt="feature template"
            width={500}
            height={"auto"}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
          />
          <img
            src="./hh/img3.png"
            alt="hero template"
            width={500}
            height={"auto"}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
          />
          <img
            src="./hh/img4.png"
            alt="feature template"
            width={500}
            height={"auto"}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
          />
        </div>
        <div className="flex flex-row items-center mt-10 w-full">
          <AnimatedTooltip items={TechStack} />
        </div>
      </div>
    ),
  },
  {
    title: "My Portfolio",
    content: (
      <div>
        <p className="mb-8 md:text-xl text-md font-normal text-neutral-200">
          My Portfolio is a showcase of my projects and skills, built with
          Next.JS
        </p>
        {/* <div className="grid grid-cols-4 gap-4">
            <img
              src="./hh/img.png"
              alt="hero template"
              width={500}
              height={"auto"}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
            />
            <img
              src="./hh/img2.png"
              alt="feature template"
              width={500}
              height={"auto"}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
            />
            <img
              src="./hh/img3.png"
              alt="hero template"
              width={500}
              height={"auto"}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
            />
            <img
              src="./hh/img4.png"
              alt="feature template"
              width={500}
              height={"auto"}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-100"
            />
          </div>
          <div className="flex flex-row items-center mt-10 w-full">
            <AnimatedTooltip items={TechStack} />
          </div> */}
      </div>
    ),
  },
];
