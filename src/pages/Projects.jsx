// Updated Projects component with unique layout and suitable dark aesthetic UI
// Feel free to integrate this directly into your project.
import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import GymImg from "../assets/gym.png";
import profilecardImg from "../assets/profilecard.jpg";
import clothingImg from "../assets/e-commerce.png";

const Projects = () => {
  const projects = [
    {
      title: "Abby's Mini Gym",
      description:
        "Abby’s Mini Gym Website is a fully responsive fitness platform created to present gym services, workout programs, and membership options in a clear and engaging way. It includes an organized homepage, service highlights, trainer information, and a clean contact section for inquiries and bookings. Designed with modern UI patterns, intuitive navigation, and mobile-first responsiveness, the site ensures that new and returning clients can easily access information and connect with the gym.",
      image: GymImg,
      link: "https://github.com/Shinzuwu/PRELIMACT1",
      tech: ["React", "CSS"],
    },
    {
      title: "Profile Card",
      description:
        "My Profile Card is a personalized component showcasing essential information like my name, age, background, and core skills. Designed with a clean and minimal layout, it highlights key details while keeping accessibility and readability in mind. The card uses a rounded-glass aesthetic with soft purple accents—consistent with my portfolio’s visual system. It serves as a quick introduction to who I am, what I do, and the tools I work with.",
      image: profilecardImg,
      link: "https://github.com/Shinzuwu/apps-dev-react",
      tech: [ "React", "Tailwind"],
    },
    {
      title: "E-Commerce",
      description:
        "This E-Commerce Web App is a fully interactive online shopping platform built using React, API integration, and modern UI/UX practices. It features dynamic product listings, real-time data fetching, shopping cart functionality, and smooth client-side navigation. The site communicates with a live product API, allowing users to view item details, add products to their cart, and simulate checkout—all with fast and responsive UI performance.",
      image: clothingImg,
      link: "https://github.com/JanAro1/Ecommerce-App",
      tech: ["React", "API","CSS"],
    },
    
  ];

  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,#1f1f1f_0%,rgba(13,13,13,0)_60%),radial-gradient(circle_at_80%_70%,#1a1a1a_0%,rgba(13,13,13,0)_65%)]" />

      <div className="mx-auto max-w-7xl space-y-20">
        <div className="text-center space-y-4">
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-[#8a2be2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My Creative & Technical Highlights
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-[#a1a1a1] text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curated selection of the projects that shaped my design thinking and development approach.
          </motion.p>
        </div>

        {/* Grid Layout New Design */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden border border-[#2a2a2a] bg-[#141414] shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(106,90,205,0.35)] transition-all duration-500"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414] opacity-80" />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-[#a1a1a1] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#0d0d0d] border border-[#2e2e2e] text-[#cfcfcf]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#8a2be2] transition-colors"
                >
                  View Project
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
