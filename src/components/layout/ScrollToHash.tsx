"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Прокрутка к якорю после перехода на главную с /blog и др. */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      if (pathname !== "/") return;
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHash();
    const t1 = setTimeout(scrollToHash, 150);
    const t2 = setTimeout(scrollToHash, 400);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
