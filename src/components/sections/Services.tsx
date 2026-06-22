"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { services } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  const { locale, t } = useI18n();

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-accent/30 hover:bg-card"
              data-cursor-hover
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {locale === "ru" ? s.titleRu : s.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {locale === "ru" ? s.descRu : s.descEn}
              </p>
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-accent to-accent-purple transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
