"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SITE, BUDGET_OPTIONS } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const { locale, t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-elevated/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

            <div className="mt-10 flex flex-col gap-4">
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
                data-cursor-hover
              >
                <Send className="text-accent" size={20} />
                <div>
                  <p className="font-medium">{t.contact.telegram}</p>
                  <p className="text-sm text-muted">{SITE.telegram}</p>
                </div>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
                data-cursor-hover
              >
                <Mail className="text-accent" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted">{SITE.email}</p>
                </div>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="text-accent" size={48} />
                <p className="mt-4 font-display text-xl">{t.contact.success}</p>
                <p className="mt-2 text-sm text-muted">{t.contact.successHint}</p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <input
                    name="name"
                    required
                    placeholder={t.contact.name}
                    className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.email}
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                    <input
                      name="telegram"
                      placeholder={t.contact.telegramField}
                      className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <textarea
                    name="task"
                    required
                    rows={4}
                    placeholder={t.contact.task}
                    className="w-full resize-none rounded-xl border border-border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                  <select
                    name="budget"
                    required
                    className="w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-muted outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.contact.budget}
                    </option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {locale === "ru" ? opt.labelRu : opt.labelEn}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 w-full rounded-full bg-accent py-3.5 font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
                  data-cursor-hover
                >
                  {status === "loading" ? t.contact.sending : t.contact.send}
                </button>
                {status === "error" && (
                  <p className="mt-2 text-center text-sm text-red-400">{t.contact.error}</p>
                )}
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
