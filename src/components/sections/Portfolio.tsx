"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { projects, type ProjectCategory } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categories: (ProjectCategory | "all")[] = ["all", "web", "mobile", "telegram", "automation", "ai"];

function ProjectVisual({ title, gradient, accent }: { title: string; gradient: string; accent: string }) {
  const initials = title
    .split(/[\s—-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-black", `bg-gradient-to-br ${gradient}`)}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, ${accent}40 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${accent}25 0%, transparent 40%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-6xl font-bold opacity-20 md:text-7xl"
          style={{ color: accent }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { locale, t } = useI18n();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="bg-elevated/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t.portfolio.title} subtitle={t.portfolio.subtitle} />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all",
                filter === cat
                  ? "bg-accent font-semibold text-black"
                  : "border border-border text-muted hover:border-accent/50 hover:text-white"
              )}
              data-cursor-hover
            >
              {cat === "all" ? t.portfolio.all : t.portfolio.filter[cat]}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
                data-cursor-hover
              >
                <div className="relative">
                  <ProjectVisual
                    title={locale === "ru" ? p.title : p.titleEn}
                    gradient={p.gradient}
                    accent={p.accent}
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
                    {locale === "ru" ? p.result : p.resultEn}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {locale === "ru" ? p.title : p.titleEn}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {locale === "ru" ? p.description : p.descriptionEn}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-elevated px-2 py-0.5 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <div className="mt-4">
                      <a
                        href={p.link}
                        className="flex items-center gap-1 text-xs text-accent hover:underline"
                      >
                        <ExternalLink size={14} /> Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
