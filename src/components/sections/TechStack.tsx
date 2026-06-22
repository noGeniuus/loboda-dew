"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { techStack } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  const { t } = useI18n();

  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.stack.title} subtitle={t.stack.subtitle} />

        <div className="mt-16 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.08, borderColor: "rgba(182,255,0,0.4)" }}
              className="flex aspect-square items-center justify-center rounded-xl border border-border bg-card/40 p-3 text-center text-xs font-medium text-muted transition-colors hover:text-accent"
              data-cursor-hover
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
