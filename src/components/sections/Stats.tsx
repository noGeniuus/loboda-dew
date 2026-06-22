"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setVal(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useI18n();
  const items = [
    { end: 47, suffix: "+", label: t.stats.projects },
    { end: 5, suffix: "+", label: t.stats.years },
    { end: 32, suffix: "+", label: t.stats.clients },
    { end: 98, suffix: "%", label: t.stats.satisfaction },
  ];

  return (
    <section className="relative border-y border-border bg-elevated/30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-accent md:text-5xl">
              <Counter end={item.end} suffix={item.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
