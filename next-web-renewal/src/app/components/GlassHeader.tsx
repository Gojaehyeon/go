"use client";
import { useEffect, useState } from "react";
import { FiUser, FiMail, FiBriefcase } from "react-icons/fi";
import Link from "next/link";

export default function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alpha = Math.min(scrollY / 20, 1) * 0.4;
  const shadowAlpha = Math.min(scrollY / 20, 1) * 0.12;
  const isDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const bgColor = isDark
    ? `rgba(34,34,34,${alpha})`
    : `rgba(255,255,255,${alpha})`;
  const boxShadow = scrollY > 0 ? `0 0 32px 0 rgba(0,0,0,${shadowAlpha})` : "none";

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-10 transition-all duration-300
      ${scrolled ? "px-4 py-2 w-56" : "px-10 py-3 w-[400px] sm:w-[90vw] sm:max-w-xs"} backdrop-blur-md rounded-full border border-white/30 dark:border-black/30`}
      style={{ background: bgColor, boxShadow }}
    >
      <span className="text-2xl font-extrabold tracking-tight">GO</span>
      {scrolled ? (
        <>
          <Link href="/" aria-label="Work" className="transition-transform duration-150 hover:scale-110"><FiBriefcase size={22} /></Link>
          <Link href="/about" aria-label="About" className="transition-transform duration-150 hover:scale-110"><FiUser size={22} /></Link>
          <Link href="/contact" aria-label="Contact" className="transition-transform duration-150 hover:scale-110"><FiMail size={22} /></Link>
        </>
      ) : (
        <>
          <Link href="/" className="text-lg font-medium hover:text-blue-600 transition">Work</Link>
          <Link href="/about" className="text-lg font-medium hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-blue-600 transition">Contact</Link>
        </>
      )}
    </nav>
  );
}
