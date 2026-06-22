/** Ссылки на секции главной — работают с любой страницы */
export const homeSection = (id: string) => `/#${id.replace(/^#/, "")}`;

export const NAV_LINKS = [
  { href: homeSection("services"), key: "services" as const },
  { href: homeSection("portfolio"), key: "portfolio" as const },
  { href: homeSection("stack"), key: "stack" as const },
  { href: "/blog", key: "blog" as const },
  { href: homeSection("contact"), key: "contact" as const },
];
