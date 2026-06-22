"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { testimonials } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const { locale, t } = useI18n();

  return (
    <section className="border-y border-border bg-elevated/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 p-8"
            >
              <p className="text-lg leading-relaxed">
                &ldquo;{locale === "ru" ? item.quoteRu : item.quoteEn}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-accent">{item.author}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {locale === "ru" ? item.roleRu : item.roleEn}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
