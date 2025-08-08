export type SkillCategories = {
  [category: string]: string[];
};

export type Education = {
  id: number;
  institution: string;
  degree: string;
  grade?: string;
  period: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export type Contact = {
  phone: string;
  email: string;
  location: string;
  resumePath: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
};

export type ProfileData = {
  name: string;
  title: string;
  avatar: string;
  objective: string;
  skills: SkillCategories;
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  achievements: string[];
  contact: Contact;
};

export const profileData: ProfileData = {
  name: "NANDAN D",
  title: "Full-Stack Developer & AI/ML Enthusiast",
  avatar:
    "https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg",
  objective:
    "Engineering student at PES University with hands-on experience in full-stack development and AI/ML. Seeking to contribute to dynamic teams and gain practical exposure in cutting-edge technologies while building innovative solutions that make a meaningful impact.",
  skills: {
    Languages: ["Python", "JavaScript", "JQuery", "HTML", "CSS", "C", "Data Structures & Algorithms"],
    Frameworks: ["React.js", "Next.js", "React Native", "Node.js", "Express.js", "Tailwind CSS"],
    Databases: ["MongoDB", "Firebase"],
    "AI/ML": ["OpenCV", "MediaPipe", "Streamlit", "Tkinter", "PyTorch", "NLTK", "NumPy", "Pandas", "Selenium", "OpenAI", "GenAI", "LangChain"],
    Tools: ["VS Code", "Git", "GitHub", "Docker", "n8n", "Cursor", "Arduino IDE", "VirtualBox", "LM Studio", "Ollama", "Vercel", "Render"],
  },
  education: [
    {
      id: 1,
      institution: "PES University, Bangalore",
      degree: "B.Tech. (CSE)",
      grade: "6.76 CGPA",
      period: "Expected 2027",
      description:
        "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons.",
    },
    {
      id: 2,
      institution: "Vikasa PU College",
      degree: "PU (12th Grade)",
      grade: "91%",
      period: "2021-2023",
      description:
        "Completed pre-university education with focus on Physics, Chemistry, Mathematics and Computer Science.",
    },
    {
      id: 3,
      institution: "MDRS Anaveri",
      degree: "SSLC (10th Grade)",
      grade: "90%",
      period: "2016-2021",
      description:
        "Completed secondary education with strong foundation in core subjects including Mathematics, Science, and English.",
    },
  ],
  projects: [
    {
      title: "Explore World",
      description: "MERN website for exploring tourist destinations with modern UI and real-time data.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://explore-world-steel.vercel.app/",
      github: "https://github.com/Nandan-D14/explore-world",
    },
    {
      title: "Prompt Pallete",
      description:
        "AI image prompt generator using Next.js & Firebase with user authentication.",
      tech: ["Next.js", "Firebase", "AI/ML", "TypeScript"],
      link: "https://prompt-pallet.vercel.app/",
      github: "https://github.com/Nandan-D14/prompt-pallet",
    },
    {
      title: "Search Pro",
      description:
        "Browser extension for one-click smart search with customizable search engines.",
      tech: ["JavaScript", "Chrome Extension", "HTML/CSS"],
      github: "https://github.com/Nandan-D14/search-pro-browser-extension",
    },
    {
      title: "Type Me",
      description:
        "Typing practice web app with real-time WPM tracking and accuracy metrics.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://inspiring-lamington-029d50.netlify.app/",
      github: "https://github.com/Nandan-D14/Type-Me-website0014",
    },
    {
      title: "Gesture Control",
      description:
        "Touchless PC controller using OpenCV & Arduino with hand gesture recognition.",
      tech: ["Python", "OpenCV", "MediaPipe", "Arduino"],
      github: "https://github.com/Nandan-D14/Vision-Hand-Gesture-Control-System",
    },
    {
      title: "Voice Assistant",
      description:
        "AI-powered assistant using Python & Gemini AI with voice recognition.",
      tech: ["Python", "Gemini AI", "Speech Recognition"],
      github: "https://github.com/Nandan-D14/voice-assistant-project",
    },
    {
      title: "Weather Assistant",
      description:
        "GUI app with real-time weather & voice output using weather APIs.",
      tech: ["Python", "Tkinter", "Weather API", "TTS"],
      github: "https://github.com/Nandan-D14/weather-voice-assistant",
    },
    {
      title: "Skill Bridge",
      description:
        "React Native app connecting skilled professionals with job opportunities.",
      tech: ["React Native", "JavaScript", "Mobile Development"],
      github: "https://github.com/Nandan-D14/skill-bridge",
    },
  ],
  certifications: [
    { name: "Python Programming", issuer: "Udemy", year: "2023" },
    { name: "DSA Problem Solving", issuer: "HackerRank", year: "2023" },
  ],
  achievements: [
    "Participated in multiple hackathons and coding competitions",
    "Awarded 'Good Coder' badge in college contest",
    "Placed 5th in inter-college coding competition",
    "Active contributor to open-source projects on GitHub",
    "Built and deployed 8+ full-stack web applications",
  ],
  contact: {
    phone: "+91 7019475709",
    email: "nandand1482005@gmail.com",
    location: "Shivamogga, Karnataka, India",
    resumePath: "/Nandan_D_Resume.pdf",
    socials: {
      linkedin: "https://linkedin.com/in/nandan-d14",
      github: "https://github.com/Nandan-D14",
      instagram: "https://instagram.com/__nandan__d14",
    },
  },
};