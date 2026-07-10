"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedRoles from "@/components/ui/AnimatedRoles";

import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a20,transparent_60%)]" />

      <Container>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
            Personal Portfolio
          </p>

          <h1 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl">
            {hero.name}
          </h1>

          <AnimatedRoles roles={hero.roles} />

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-2xl">
            {hero.subtitle}
          </p>

          <Button>{hero.buttonText}</Button>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-16 flex justify-center"
          >
            <ArrowDown className="h-7 w-7 text-sky-400" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}