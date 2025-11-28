import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/shin.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const statHighlights = [
  { label: 'Active builds', value: '03', detail: 'Projects in progress' },
  { label: 'Systems shipped', value: '03', detail: 'UI components' },
  { label: 'Weekly focus', value: '32h', detail: 'Design & code' },
]

const craftHighlights = [
  {
    icon: <FaLaptopCode size={48} />,
    title: 'Clean code',
    copy: 'Modular components and thoughtful architecture.',
  },
  {
    icon: <MdStyle size={48} />,
    title: 'Modern design',
    copy: 'Minimal aesthetics with purposeful details.',
  },
  {
    icon: <TbComponents size={48} />,
    title: 'Smooth motion',
    copy: 'Subtle animations that enhance experience.',
  },
]

const quickPanels = [
  {
    title: 'About',
    copy: 'Learn more about my journey and approach.',
    link: '/about',
    accent: 'from-[#1a1a1a] to-[#0d0d0d]',
  },
  {
    title: 'Skills',
    copy: 'Tools and technologies I work with.',
    link: '/skills',
    accent: 'from-[#1a1a1a] to-[#0d0d0d]',
  },
  {
    title: 'Projects',
    copy: 'Selected work and case studies.',
    link: '/projects',
    accent: 'from-[#1a1a1a] to-[#0d0d0d]',
  },
  {
    title: 'Resume',
    copy: 'Download my resume in PDF format.',
    link: '/resume',
    accent: 'from-[#1a1a1a] to-[#0d0d0d]',
  },
]

const LandingPage = () => {
  return (
    <>
      <section className="relative -mt-10 overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#6a5acd15] to-transparent blur-[120px]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#1a1a1a_0%,rgba(13,13,13,0)_45%),radial-gradient(circle_at_80%_0%,#1a1a1a_0%,rgba(13,13,13,0)_50%)]" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_minmax(0,0.85fr)]">
          <motion.div
            className="space-y-8 text-center text-[#ededed] lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">
              Frontend Developer
            </p>

            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl font-semibold">
              Building modern interfaces with clean design.
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-[#a1a1a1] lg:justify-start">
              <span>Creating</span>

              <TypeAnimation
                sequence={[
                  'modern web apps',
                  1800,
                  'responsive designs',
                  1800,
                  'smooth experiences',
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#6a5acd] font-semibold"
              />
            </div>

            <p className="mx-auto max-w-xl text-base text-[#a1a1a1] lg:mx-0">
              I craft clean, responsive interfaces with thoughtful design and smooth interactions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
              <Link
                to="/projects"
                className="rounded-xl border border-[#2a2a2a] bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(106,90,205,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(106,90,205,0.45)]"
              >
                View work
              </Link>

              <Link
                to="/resume"
                className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f]"
              >
                Resume
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-3">
              {statHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] px-5 py-5 text-left shadow-sm transition-all duration-300 hover:border-[#6a5acd]/50 hover:bg-[#1f1f1f]"
                >
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a1a1a1] mt-1">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xs text-[#a1a1a1]">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#6a5acd20] via-[#8a2be220] to-transparent blur-3xl" />

            <div className="relative rounded-3xl border border-[#2a2a2a] bg-[#0d0d0d]/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-2">
                <img
                  src={profileImg}
                  alt="Shin Aro"
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">Status</p>
                <p className="text-2xl font-semibold text-white mt-2">
                  Available for projects
                </p>
                <p className="mt-2 text-sm text-[#a1a1a1]">
                  Open to new opportunities and collaborations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {craftHighlights.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 text-left shadow-sm backdrop-blur transition-all duration-300 hover:border-[#6a5acd]/50 hover:bg-[#1f1f1f] hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-[#6a5acd]">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-[#a1a1a1]">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <motion.div
          className="mx-auto max-w-5xl space-y-4 text-center text-[#ededed]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#6a5acd]">Explore</p>
          <h2 className="text-3xl font-semibold">Discover more about my work</h2>
          <p className="mx-auto max-w-3xl text-[#a1a1a1]">
            Browse through different sections to learn more.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quickPanels.map((panel) => (
            <Link
              key={panel.title}
              to={panel.link}
              className={`group flex flex-col justify-between rounded-2l border border-[#2a2a2a] bg-gradient-to-br ${panel.accent} p-6 text-[#ededed] shadow-sm transition-all duration-300 hover:border-[#6a5acd]/50 hover:scale-[1.02]`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{panel.title}</h3>
                <p className="mt-2 text-sm text-[#a1a1a1]">{panel.copy}</p>
              </div>

              <span className="mt-6 inline-flex items-center text-sm font-semibold text-white">
                View
                <FiArrowUpRight className="ml-2 text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
