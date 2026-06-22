"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const { t } = useI18n();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      if (!titleRef.current) return;
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
      });
    });
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <Scene3D />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-accent"
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1
          ref={titleRef}
          className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          {t.hero.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: [0.05, 0.9, 0.1, 1] }}
              >
                {word}{" "}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-xl text-lg text-muted md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="#portfolio"
            className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(182,255,0,0.35)]"
            data-cursor-hover
          >
            {t.hero.cases}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-border px-8 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
            data-cursor-hover
          >
            {t.hero.contact}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
