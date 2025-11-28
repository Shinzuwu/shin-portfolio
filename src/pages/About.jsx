import React from "react";
import { Link } from "react-router-dom";
import myImg from "../assets/pfp.jpg";
import { motion } from "framer-motion";
import { FiFeather, FiLayers, FiHeart } from "react-icons/fi";

const focusAreas = [
  {
    title: "Clean design",
    description: "Minimal aesthetics with thoughtful details.",
    icon: <FiFeather size={28} />,
    accent: "from-[#1a1a1a] to-[#0d0d0d]",
  },
  {
    title: "Organized code",
    description: "Modular components and reusable patterns.",
    icon: <FiLayers size={28} />,
    accent: "from-[#1a1a1a] to-[#0d0d0d]",
  },
  {
    title: "User-focused",
    description: "Accessible and intuitive experiences.",
    icon: <FiHeart size={28} />,
    accent: "from-[#1a1a1a] to-[#0d0d0d]",
  },
];

const timeline = [
  {
    period: "2024 — Today",
    title: "Freelance & projects",
    copy: "Building modern web applications with React and Tailwind.",
  },
  {
    period: "2023",
    title: "Learning phase",
    copy: "Mastering HTML, CSS, and JavaScript fundamentals.",
  },
  {
    period: "Always",
    title: "Continuous growth",
    copy: "Staying updated with latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <>
      <section className="relative -mt-10 overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,#221833_0%,rgba(13,13,13,0)_45%),radial-gradient(circle_at_85%_0%,#111111_0%,rgba(13,13,13,0)_50%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="order-2 space-y-6 text-center text-[#ededed] lg:order-1 lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">
              About
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Building clean interfaces with modern design.
            </h1>
            <p className="text-[#a1a1a1]">
              I'm Shin Aro, a frontend developer based in Cebu. I create responsive web applications with clean code and thoughtful design.
            </p>
            <p className="text-[#a1a1a1]">
              Focused on creating user-friendly experiences with modern technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
              <Link
                to="/projects"
                className="rounded-xl border border-[#2a2a2a] bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(106,90,205,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(106,90,205,0.45)]"
              >
                View projects
              </Link>
              <Link
                to="/skills"
                className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f]"
              >
                Skills
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="order-1 relative lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-[#6a5acd20] blur-3xl" />
            <div className="absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-[#8a2be220] blur-3xl" />
            <div className="relative rounded-3xl border border-[#2a2a2a] bg-[#0d0d0d]/90 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-4">
                <img
                  src={myImg}
                  alt="Marvin Barro"
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">
                  Current focus
                </p>
                <p className="text-2xl font-semibold text-white mt-2">
                  Modern web development
                </p>
                <p className="mt-2 text-sm text-[#a1a1a1]">
                  React, Tailwind CSS, and modern design patterns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                className={`rounded-2xl border border-[#2a2a2a] bg-gradient-to-br ${area.accent} p-5 text-left text-[#ededed] shadow-sm transition-all duration-300 hover:border-[#6a5acd]/50 hover:bg-[#1f1f1f] hover:scale-[1.02]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a1a1a] text-[#6a5acd] border border-[#2a2a2a]">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-[#a1a1a1]">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">
              Timeline
            </h2>
            <p className="mt-2 text-[#a1a1a1]">
              My journey in web development.
            </p>

            <div className="mt-10 relative border-l-2 border-[#2a2a2a] pl-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  className="pb-10 text-[#ededed] last:pb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4 border-[#0d0d0d] bg-[#6a5acd] shadow-sm" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a1a1a1]">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#a1a1a1]">
                    {item.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
