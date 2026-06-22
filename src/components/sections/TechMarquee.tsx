"use client";

import { techStack } from "@/data/content";

export default function TechMarquee() {
  const row = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y border-border py-6" aria-hidden>
      <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
