"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = ["Experiences", "About", "Journal", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-500 ${
          scrolled ? "py-4 bg-[#083A7A]/95 backdrop-blur-md border-b border-[#D97706]/25" : "py-6 md:py-7"
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="flex flex-col leading-none">
            <span className="font-clash text-[1.35rem] md:text-[1.55rem] font-700 text-[#F5F9FD]" style={{ letterSpacing: "0.18em" }}>
              NOMADO
            </span>
            <span className="font-clash text-[8px] md:text-[9px] font-500 text-[#F59E0B] mt-1" style={{ letterSpacing: "0.55em" }}>
              TRAVEL
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9 lg:gap-11">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-clash text-[12px] tracking-[0.18em] uppercase text-[#9DB2C7] hover:text-[#F5F9FD] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="font-clash text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 border border-[#D97706] text-[#F59E0B] hover:bg-[#D97706] hover:text-white transition-all duration-300"
          >
            Plan Journey
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 z-50">
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F9FD] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#083A7A] flex flex-col items-center justify-center gap-9"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-clash text-4xl font-600 text-[#F5F9FD] tracking-widest uppercase"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
