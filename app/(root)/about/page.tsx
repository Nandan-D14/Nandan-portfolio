import React from 'react';
import { motion } from 'framer-motion';
import { skills, academics, contactDetails, Certifications } from '@/public/data';

type Academic = {
  id: number;
  CollegeName: string;
  Marks: string;
  date: string;
};

type CertificationsType = Record<string, string>;

const activities = [
  'Participated in multiple hackathons and coding competitions.',
  'Awarded “Good Coder” badge in college contest.',
  'Placed 5th in inter-college coding competition.'
];

const projects = [
  'Explore World – MERN website for exploring tourist destinations.',
  'Prompt Pallete – AI image prompt generator using Next.js & Firebase.',
  'Search Pro – Browser extension for one-click smart search.',
  'Type Me – Typing practice web app (HTML/CSS/JS).',
  'Gesture Control – Touchless PC controller using OpenCV & Arduino.',
  'Voice Assistant – AI-powered assistant using Python & Gemini AI.',
  'Weather Assistant – GUI app with real-time weather & voice output.',
  'Skill Bridge – React Native app connecting skilled professionals.'
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1a1a23] text-neutral-100 px-4 md:px-16 py-10 flex flex-col items-center">
      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-2 tracking-tight">NANDAN D</h1>
        <p className="text-lg text-neutral-300 mb-2">Shivamogga, Karnataka, India | <span className="text-green-400">+91 7019475709</span> | <span className="underline">nandand1482005@gmail.com</span></p>
        <div className="flex flex-wrap gap-4 mb-4">
          <a href="https://linkedin.com/in/nandan-d14" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/Nandan-D14" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">GitHub</a>
        </div>
        <p className="text-xl font-semibold mb-2">Objective</p>
        <p className="text-md text-neutral-200 mb-2">Engineering student at PES University with hands-on experience in full-stack development and AI/ML. Seeking to contribute to dynamic teams and gain practical exposure.</p>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Skills</h2>
        <div className="mb-4">
          <p className="font-semibold text-neutral-200">Languages:</p>
          <span className="text-neutral-300">{skills.Languages.join(', ')}</span>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-neutral-200">Frameworks:</p>
          <span className="text-neutral-300">React.js, Next.js, React Native, Node.js, Express.js, Tailwind CSS</span>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-neutral-200">Databases:</p>
          <span className="text-neutral-300">MongoDB, Firebase</span>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-neutral-200">AI/ML:</p>
          <span className="text-neutral-300">OpenCV, MediaPipe, Streamlit, Tkinter, PyTorch, NLTK, NumPy, Pandas, Selenium, OpenAI, GenAI, LangChain</span>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-neutral-200">Tools:</p>
          <span className="text-neutral-300">VS Code, Git, GitHub, Docker, n8n, Cursor, Arduino IDE, VirtualBox, LM Studio, Ollama, Vercel, Render</span>
        </div>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Education</h2>
        <ul className="space-y-3">
          {(academics as Academic[]).map((edu) => (
            <li key={edu.id} className="border-b border-neutral-700 pb-2">
              <span className="font-semibold text-neutral-200">{edu.CollegeName}</span> — <span className="text-neutral-300">{edu.Marks}</span>
              <span className="block text-sm text-neutral-400">{edu.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Projects</h2>
        <ul className="list-disc ml-6 space-y-2 text-neutral-200">
          {projects.map((proj, idx) => (
            <li key={idx}>{proj}</li>
          ))}
        </ul>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Certifications</h2>
        <ul className="list-disc ml-6 space-y-2 text-neutral-200">
          {Object.entries(Certifications as CertificationsType).map(([cert, org], idx) => (
            <li key={idx}>{cert} – <span className="text-green-400">{String(org)}</span></li>
          ))}
        </ul>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Achievements & Activities</h2>
        <ul className="list-disc ml-6 space-y-2 text-neutral-200">
          {activities.map((act, idx) => (
            <li key={idx}>{act}</li>
          ))}
        </ul>
      </div>

      <div
        className="w-full max-w-3xl rounded-xl shadow-lg bg-[#23272f]/80 p-8 mb-10"
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Contact</h2>
        <div className="mb-2 text-neutral-200">Phone: <span className="text-green-400">{contactDetails.number}</span></div>
        <div className="mb-2 text-neutral-200">Location: <span className="text-green-400">{contactDetails.location}</span></div>
        <div className="mb-2 text-neutral-200">Email: <span className="underline">{contactDetails.gamil}</span></div>
        <div className="mb-2 text-neutral-200">LinkedIn: <a href={contactDetails.linkedIn} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{contactDetails.linkedIn}</a></div>
        <div className="mb-2 text-neutral-200">GitHub: <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{contactDetails.github}</a></div>
        <div className="mb-2 text-neutral-200">Instagram: <a href={contactDetails.instagram} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">{contactDetails.instagram}</a></div>
      </div>

      <footer className="w-full max-w-3xl text-center py-6 text-neutral-400 text-sm border-t border-neutral-800 mt-10">
        &copy; {new Date().getFullYear()} Nandan D. All rights reserved.
      </footer>
    </main>
  );
}