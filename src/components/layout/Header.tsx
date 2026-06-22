"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { NAV_LINKS, homeSection } from "@/lib/navigation";

export default function Header() {
  const { t, locale, toggleLocale } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">Loboda</span>
          <span className="text-white">.dew</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={cn(
                "text-sm text-muted transition-colors hover:text-white",
                l.href === "/blog" && pathname.startsWith("/blog") && "text-white"
              )}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-accent"
            data-cursor-hover
          >
            {locale === "ru" ? "EN" : "RU"}
          </button>
          <Link
            href={homeSection("contact")}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
            data-cursor-hover
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-border md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {t.nav[l.key]}
                </Link>
              ))}
              <Link
                href={homeSection("contact")}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black"
              >
                {t.nav.cta}
              </Link>
              <button type="button" onClick={toggleLocale} className="text-left text-muted">
                {locale === "ru" ? "English" : "Русский"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
