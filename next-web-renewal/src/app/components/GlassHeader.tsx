"use client";
import { useEffect, useState } from "react";
import { FiUser, FiMail, FiBriefcase } from "react-icons/fi";

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`
      fixed top-6 left-1/2 -translate-x-1/2 z-50
      flex items-center justify-center gap-10
      transition-all duration-300
      ${scrolled ? "px-4 py-2 w-70 shadow-[0_0_32px_0_rgba(0,0,0,0.12)]" : "px-10 py-3 w-[400px] shadow-none"}
      bg-white/40 dark:bg-[#222]/60
      backdrop-blur-md rounded-full
      border border-white/30 dark:border-black/30
    `}>
      <span className="text-2xl font-extrabold tracking-tight">GO</span>
      {scrolled ? (
        <>
          <a href="/" aria-label="Work" className="transition-transform duration-150 hover:scale-110"><FiBriefcase size={22} /></a>
          <a href="/about" aria-label="About" className="transition-transform duration-150 hover:scale-110"><FiUser size={22} /></a>
          <a href="/contact" aria-label="Contact" className="transition-transform duration-150 hover:scale-110"><FiMail size={22} /></a>
        </>
      ) : (
        <>
          <a href="/" className="text-lg font-medium hover:text-blue-600 transition">Work</a>
          <a href="/about" className="text-lg font-medium hover:text-blue-600 transition">About</a>
          <a href="/contact" className="text-lg font-medium hover:text-blue-600 transition">Contact</a>
        </>
      )}
    </nav>
  );
}
