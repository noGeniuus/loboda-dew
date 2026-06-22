"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { blogPosts } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogPage() {
  const { locale, t } = useI18n();

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title={t.blog.title} subtitle={t.blog.subtitle} center />

        <div className="mt-16 space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-accent/30"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">{post.tag}</span>
                <time dateTime={post.date}>{post.date}</time>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readTime} min
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold group-hover:text-accent transition-colors">
                {locale === "ru" ? post.titleRu : post.titleEn}
              </h2>
              <p className="mt-2 text-muted leading-relaxed">
                {locale === "ru" ? post.excerptRu : post.excerptEn}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
                data-cursor-hover
              >
                {t.blog.read} <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
