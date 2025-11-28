import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Shin-Resume.pdf";

const resumeHighlights = [
  "Complete work history and project timeline.",
  "Technical skills and tools I use.",
  "Education and professional experience.",
];

const Resume = () => {
  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row">
        <motion.div
          className="flex-1 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#6a5acd]/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">
            Resume
          </p>
          <h1 className="mt-4 text-4xl font-semibold">
            Download my resume
          </h1>
          <p className="mt-4 text-[#a1a1a1] leading-relaxed">
            A comprehensive overview of my experience, skills, and projects. Updated regularly with new work and achievements.
          </p>

          <ul className="mt-8 space-y-4 text-[#a1a1a1]">
            {resumeHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#6a5acd]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#2a2a2a] bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(106,90,205,0.35)]"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f]"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 text-[#ededed] shadow-sm transition-all duration-300 hover:border-[#6a5acd]/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a1a1a1]">
              Overview
            </p>
            <h2 className="text-3xl font-semibold text-white">
              What's included
            </h2>
            <p className="text-[#a1a1a1]">
              The resume includes my education, work experience, technical skills, and notable projects built with React, Tailwind, and modern web technologies.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {[
              { label: "Focus", value: "Frontend development" },
              { label: "Location", value: "Cordova, Cebu, Philippines" },
              { label: "Availability", value: "Open to opportunities" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#a1a1a1]">{item.label}</p>
                <p className="text-lg font-semibold text-white mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#a1a1a1]">
            Questions about my experience? Feel free to reach out through the contact section.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
