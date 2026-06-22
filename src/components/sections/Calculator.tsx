"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { calculatorTypes, complexityMultipliers } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Calculator() {
  const { locale, t } = useI18n();
  const [typeId, setTypeId] = useState(calculatorTypes[1].id);
  const [complexityId, setComplexityId] = useState(complexityMultipliers[1].id);

  const estimate = useMemo(() => {
    const type = calculatorTypes.find((x) => x.id === typeId)!;
    const complexity = complexityMultipliers.find((x) => x.id === complexityId)!;
    return Math.round(type.base * complexity.mult);
  }, [typeId, complexityId]);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading title={t.calculator.title} subtitle={t.calculator.subtitle} center />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10"
        >
          <div className="space-y-8">
            <div>
              <label className="mb-3 block text-sm font-medium text-muted">
                {t.calculator.type}
              </label>
              <div className="flex flex-wrap gap-2">
                {calculatorTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setTypeId(type.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-all",
                      typeId === type.id
                        ? "bg-accent font-semibold text-black"
                        : "border border-border text-muted hover:text-white"
                    )}
                    data-cursor-hover
                  >
                    {locale === "ru" ? type.labelRu : type.labelEn}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-muted">
                {t.calculator.complexity}
              </label>
              <div className="flex flex-wrap gap-2">
                {complexityMultipliers.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setComplexityId(c.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-all",
                      complexityId === c.id
                        ? "bg-accent-purple font-semibold text-white"
                        : "border border-border text-muted hover:text-white"
                    )}
                    data-cursor-hover
                  >
                    {locale === "ru" ? c.labelRu : c.labelEn}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="text-sm text-muted">{t.calculator.estimate}</p>
              <motion.p
                key={estimate}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-2 font-display text-5xl font-bold gradient-text"
              >
                {t.calculator.from} ${estimate.toLocaleString()}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
