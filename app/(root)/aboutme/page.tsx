"use client";

import React from "react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Simple3DBackground from "@/components/ui/3D/Simple3DBackground";
import InteractiveModel from "@/components/ui/3D/InteractiveModel";
import { AuroraText } from "@/components/ui/AuroraText";
import BottomNavbar from "@/components/ui/BottomNavbar";
import { profileData } from "@/lib/profile/data";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconDownload, IconExternalLink, IconMapPin } from "@tabler/icons-react";

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

export default function AboutMe() {
  const { skills, projects, certifications, achievements, contact, name, title, objective } = profileData;

  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full overflow-x-hidden text-neutral-100">
        {/* Subtle 3D background */}
        <Simple3DBackground />

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
              <InteractiveModel />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8">
              <AuroraText className="px-1">Technical Skills</AuroraText>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, list]) => (
                <motion.div key={category} variants={item} className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-blue-300">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="rounded-full border border-neutral-700 bg-white/5 px-3 py-1 text-sm text-neutral-200 hover:border-blue-500/60 hover:text-blue-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
                    {p.tech.map((t) => (
                      <span key={t} className="rounded border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-xs text-blue-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8">
              <AuroraText className="px-1">Highlights</AuroraText>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={item} className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6">
                <h3 className="mb-4 text-lg font-semibold text-yellow-300">Certifications</h3>
                <ul className="space-y-3 text-neutral-300/90">
                  {certifications.map((c, i) => (
                    <li key={`${c.name}-${i}`} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-neutral-100">{c.name}</p>
                        <p className="text-sm text-blue-300">{c.issuer}</p>
                      </div>
                      {c.year && <span className="text-xs text-neutral-400">{c.year}</span>}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={item} className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6">
                <h3 className="mb-4 text-lg font-semibold text-green-300">Achievements</h3>
                <ul className="space-y-3 text-neutral-300/90">
                  {achievements.map((a, i) => (
                    <li key={`${a}-${i}`} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8">
              <AuroraText className="px-1">Let&apos;s Connect</AuroraText>
            </motion.h2>
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6">
                <div className="space-y-3 text-neutral-300/90">
                  <a className="block hover:text-blue-300" href={`mailto:${contact.email}`}>{contact.email}</a>
                  <a className="block hover:text-green-300" href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                  <div className="flex items-center gap-2 text-neutral-300"><IconMapPin className="h-4 w-4" /> {contact.location}</div>
                </div>
              </div>
              <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-6">
                <div className="flex flex-wrap gap-3">
                  {contact.socials.linkedin && (
                    <a className="rounded-full border border-neutral-700 bg-white/5 px-4 py-2 text-sm hover:border-blue-500/60 hover:text-blue-200" href={contact.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  )}
                  {contact.socials.github && (
                    <a className="rounded-full border border-neutral-700 bg-white/5 px-4 py-2 text-sm hover:border-green-500/60 hover:text-green-200" href={contact.socials.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {contact.socials.instagram && (
                    <a className="rounded-full border border-neutral-700 bg-white/5 px-4 py-2 text-sm hover:border-pink-500/60 hover:text-pink-200" href={contact.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  )}
                  <a className="rounded-full border border-neutral-700 bg-white/5 px-4 py-2 text-sm hover:border-neutral-500/60" href={contact.resumePath} target="_blank" rel="noreferrer">
                    <span className="inline-flex items-center gap-2"><IconDownload className="h-4 w-4" /> Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
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


