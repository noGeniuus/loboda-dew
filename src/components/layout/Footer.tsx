"use client";

import { Send, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-elevated/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">
            <span className="gradient-text">{SITE.name}</span>
            <span className="text-white">.dew</span>
          </p>
          <p className="mt-1 text-sm text-muted">{t.footer.tagline}</p>
        </div>
        <div className="flex gap-4">
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            data-cursor-hover
            aria-label="Telegram"
          >
            <Send size={18} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            data-cursor-hover
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted">
          © {year} {SITE.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
