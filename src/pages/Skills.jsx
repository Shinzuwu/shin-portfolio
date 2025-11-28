import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Framer Motion", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-[#151515] border border-[#2A2A2A] shadow-lg hover:shadow-purple-700/20 transition shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
              <p className="text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
