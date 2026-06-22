"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import type { blogPosts } from "@/data/content";

type Post = (typeof blogPosts)[number];

export default function BlogArticle({ post }: { post: Post }) {
  const { locale } = useI18n();
  const title = locale === "ru" ? post.titleRu : post.titleEn;
  const excerpt = locale === "ru" ? post.excerptRu : post.excerptEn;

  const bodyRu = [
    "Этот кейс — пример того, как я подхожу к архитектуре и выбору стека. Каждый проект начинается с брифа и карты рисков, а не с кода.",
    "Ключевые решения: модульная структура, типизация end-to-end, CI/CD с первого дня. Это позволяет масштабировать без переписывания.",
    "Результат — предсказуемые релизы, прозрачная аналитика и довольная команда заказчика.",
  ];

  const bodyEn = [
    "This case study shows how I approach architecture and stack selection. Every project starts with a brief and risk map — not code.",
    "Key decisions: modular structure, end-to-end typing, CI/CD from day one. That enables scaling without rewrites.",
    "The outcome: predictable releases, transparent analytics, and a happy client team.",
  ];

  const paragraphs = locale === "ru" ? bodyRu : bodyEn;

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          data-cursor-hover
        >
          <ArrowLeft size={16} /> Blog
        </Link>

        <header className="mt-8">
          <span className="text-xs uppercase tracking-widest text-accent">{post.tag}</span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{excerpt}</p>
          <time className="mt-4 block text-sm text-muted" dateTime={post.date}>
            {post.date} · {post.readTime} min read
          </time>
        </header>

        <div className="prose-custom mt-12 space-y-6 text-lg leading-relaxed text-white/80">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
