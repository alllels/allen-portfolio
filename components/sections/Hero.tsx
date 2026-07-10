"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a20,transparent_60%)]" />

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
          Personal Portfolio
        </p>

        <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl">
          Allen
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-2xl">
          Building my future through curiosity,
          <br />
          technology, and perseverance.
        </p>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
            Student
          </span>

          <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
            Developer
          </span>

          <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
            Entrepreneur
          </span>

          <span className="rounded-full border border-slate-700 px-4 py-2 text-slate-300">
            Chess Player
          </span>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex justify-center"
        >
          <ArrowDown className="h-7 w-7 text-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}