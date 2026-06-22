"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({ title, subtitle, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(center && "text-center")}
    >
      <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className={cn("mt-3 max-w-xl text-muted", center && "mx-auto")}>{subtitle}</p>
      )}
    </motion.div>
  );
}
