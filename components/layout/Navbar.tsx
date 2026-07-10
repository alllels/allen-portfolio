"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-6 py-4 backdrop-blur-md">
        <a
          href="#"
          className="text-lg font-bold tracking-wide text-white"
        >
          Allen
        </a>

        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition hover:text-sky-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}