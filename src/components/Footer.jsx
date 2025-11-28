import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { MdPhone, MdLocationOn } from 'react-icons/md'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/fcfs', label: 'FCFS' },
  { href: '/resume', label: 'Resume' },
]

const contactDetails = [
  { icon: <FaEnvelope />, value: 'shinaroplays@gmail.com' },
  { icon: <MdPhone />, value: '+63 960 655 0639' },
  { icon: <MdLocationOn />, value: 'Cordova, Cebu, Philippines' },
]

const Footer = () => {
  return (
    <footer className="px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-[#2a2a2a] bg-[#0d0d0d]/80 p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#a1a1a1]">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            Shin Aro
          </h2>
          <p className="mt-4 text-[#a1a1a1]">
            Crafting clean interfaces with thoughtful design.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/Shinzuwu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-xl transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f] hover:scale-105"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:shinaroplays@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-xl transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f] hover:scale-105"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Navigate
            </h3>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[#a1a1a1] transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <div key={item.value} className="flex items-center gap-3 text-[#a1a1a1]">
                  <span className="text-xl text-[#6a5acd]">{item.icon}</span>
                  <span className="hover:text-white transition-colors">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-[#2a2a2a] pt-6 text-sm text-[#a1a1a1]">
        <p>© {new Date().getFullYear()} Shin Aro. All rights reserved.</p>
        <p>Designed and built in Cebu.</p>
      </div>
    </footer>
  )
}

export default Footer
