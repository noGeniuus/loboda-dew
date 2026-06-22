"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current = !!t.closest("a, button, [data-cursor-hover]");
      if (ringRef.current) {
        ringRef.current.style.width = hovering.current ? "56px" : "32px";
        ringRef.current.style.height = hovering.current ? "56px" : "32px";
        ringRef.current.style.borderColor = hovering.current
          ? "rgba(182,255,0,0.8)"
          : "rgba(255,255,255,0.4)";
      }
    };

    let raf: number;
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-[width,height,border-color] duration-300 md:block"
        aria-hidden
      />
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
        aria-hidden
      />
    </>
  );
}
