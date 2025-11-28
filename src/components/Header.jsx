import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaTiktok } from "react-icons/fa";

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/fcfs", label: "Scheduling" },
  { href: "/resume", label: "Resume" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#2a2a2a] transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className={`rounded-2xl px-6 py-2.5 text-lg font-semibold tracking-tight text-[#ededed] transition-all duration-300 ${
              isHome
                ? "bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] text-white shadow-[0_8px_24px_rgba(106,90,205,0.4)] hover:shadow-[0_12px_32px_rgba(106,90,205,0.5)] hover:scale-[1.02]"
                : "bg-[#1a1a1a] text-[#ededed] border border-[#2a2a2a] hover:border-[#6a5acd]/50 hover:bg-[#1f1f1f]"
            }`}
          >
            Portfolio
          </Link>
        </div>

        <nav
          className="hidden flex-1 justify-end gap-4 px-8 text-sm font-medium tracking-wide text-[#a1a1a1] md:flex"
        >
          {navMenu.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                to={link.href}
                key={link.href}
                className={`group relative rounded-xl px-4 py-2 transition-all duration-300 ${
                  active
                    ? "bg-[#1a1a1a] text-white border border-[#2a2a2a] shadow-sm"
                    : "text-[#a1a1a1] hover:text-white hover:bg-[#1a1a1a]/50 rounded-xl"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 block h-0.5 bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => setSheetOpen(true)}
            className="rounded-xl border border-[#2a2a2a] bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(106,90,205,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(106,90,205,0.45)]"
          >
            Contact
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-[#2a2a2a] p-2 text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1a1a1a]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-3 border-t border-[#2a2a2a] bg-[#0d0d0d]/95 backdrop-blur-xl px-6 py-5 md:hidden">
          {navMenu.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`block rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
                  active
                    ? "border-[#6a5acd] bg-[#1a1a1a] text-white shadow-sm"
                    : "border-[#2a2a2a] text-[#a1a1a1] hover:border-[#6a5acd]/50 hover:text-white hover:bg-[#1a1a1a]/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full rounded-xl border border-[#2a2a2a] bg-gradient-to-r from-[#6a5acd] to-[#8a2be2] py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(106,90,205,0.35)] transition-all duration-300 hover:scale-[1.02]"
          >
            Contact
          </Button>
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="border-l border-[#2a2a2a] bg-[#0d0d0d]/98 text-white backdrop-blur-xl"
        >
          <SheetHeader>
            <SheetTitle className="mt-8 px-4 text-2xl text-white">
              Contact Me
            </SheetTitle>
          </SheetHeader>
          <div className="px-6 pb-10 pt-4 text-sm text-[#a1a1a1]">
            <p className="text-[#a1a1a1]">Available for projects. Response within 24h.</p>
            <div className="mt-6 space-y-4 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 shadow-sm">
              <div className="flex items-center gap-3 text-[#ededed]">
                <MdEmail className="text-[#6a5acd]" size={20} />
                <span>shinaroplays@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#ededed]">
                <MdPhone className="text-[#6a5acd]" size={20} />
                <span>+63 960 655 0639</span>
              </div>
              <div className="flex items-center gap-3 text-[#ededed]">
                <MdLocationOn className="text-[#6a5acd]" size={20} />
                <span>Cordova, Cebu, Philippines</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
              <h4 className="mb-4 text-base text-white">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/shinzu.grimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f] hover:scale-105"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/Shinzuwu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f] hover:scale-105"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.tiktok.com/@shinzukid?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-white transition-all duration-300 hover:border-[#6a5acd] hover:bg-[#1f1f1f] hover:scale-105"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
