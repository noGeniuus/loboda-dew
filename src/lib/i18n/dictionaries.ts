export type Locale = "ru" | "en";

export const locales: Locale[] = ["ru", "en"];
export const defaultLocale: Locale = "ru";

export type Dictionary = {
  nav: {
    services: string;
    portfolio: string;
    stack: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cases: string;
    contact: string;
    scroll: string;
  };
  stats: { projects: string; years: string; clients: string; satisfaction: string };
  services: { title: string; subtitle: string };
  portfolio: { title: string; subtitle: string; all: string; filter: Record<string, string> };
  stack: { title: string; subtitle: string };
  testimonials: { title: string; subtitle: string };
  calculator: { title: string; subtitle: string; type: string; complexity: string; estimate: string; from: string };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    task: string;
    budget: string;
    send: string;
    sending: string;
    success: string;
    telegram: string;
    telegramField: string;
    error: string;
    successHint: string;
  };
  footer: { rights: string; tagline: string };
  blog: { title: string; subtitle: string; read: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    nav: {
      services: "Услуги",
      portfolio: "Портфолио",
      stack: "Стек",
      blog: "Блог",
      contact: "Контакты",
      cta: "Обсудить проект",
    },
    hero: {
      eyebrow: "Full-stack разработчик",
      title: "Строю цифровые продукты, которые работают",
      subtitle:
        "Web, мобильные приложения, Telegram Mini Apps и AI-автоматизация. От идеи до продакшена — с измеримым результатом.",
      cases: "Посмотреть кейсы",
      contact: "Связаться",
      scroll: "Листай вниз",
    },
    stats: {
      projects: "Проектов",
      years: "Лет опыта",
      clients: "Клиентов",
      satisfaction: "Довольных клиентов",
    },
    services: {
      title: "Услуги",
      subtitle: "Полный цикл — от прототипа до масштабирования",
    },
    portfolio: {
      title: "Портфолио",
      subtitle: "Реальные проекты с цифрами, а не просто скриншоты",
      all: "Все",
      filter: {
        web: "Web",
        mobile: "Mobile",
        telegram: "Telegram",
        automation: "Автоматизация",
        ai: "AI / Web3",
      },
    },
    stack: { title: "Технологический стек", subtitle: "Инструменты, на которых строю продукты" },
    testimonials: { title: "Отзывы", subtitle: "Что говорят клиенты" },
    calculator: {
      title: "Калькулятор стоимости",
      subtitle: "Ориентировочная оценка — точную дам после брифа",
      type: "Тип проекта",
      complexity: "Сложность",
      estimate: "Оценка",
      from: "от",
    },
    contact: {
      title: "Давайте создадим что-то крутое",
      subtitle: "Опишите задачу — отвечу в течение 24 часов",
      name: "Имя",
      email: "Email",
      task: "Описание задачи",
      budget: "Бюджет",
      send: "Отправить заявку",
      sending: "Отправка…",
      success: "Заявка отправлена!",
      telegram: "Telegram",
      telegramField: "Ваш Telegram (@username)",
      error: "Не удалось отправить — напишите в Telegram",
      successHint: "Ответ придёт на почту или в Telegram",
    },
    footer: { rights: "Все права защищены", tagline: "Think. Build. Ship." },
    blog: { title: "Блог и кейсы", subtitle: "Разборы проектов, стек и инсайты", read: "Читать" },
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      stack: "Stack",
      blog: "Blog",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Full-stack developer",
      title: "I build digital products that actually work",
      subtitle:
        "Web, mobile apps, Telegram Mini Apps & AI automation. From idea to production — with measurable outcomes.",
      cases: "View cases",
      contact: "Get in touch",
      scroll: "Scroll down",
    },
    stats: {
      projects: "Projects",
      years: "Years exp.",
      clients: "Clients",
      satisfaction: "Client satisfaction",
    },
    services: {
      title: "Services",
      subtitle: "Full cycle — from prototype to scale",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Real projects with numbers, not just screenshots",
      all: "All",
      filter: {
        web: "Web",
        mobile: "Mobile",
        telegram: "Telegram",
        automation: "Automation",
        ai: "AI / Web3",
      },
    },
    stack: { title: "Tech stack", subtitle: "Tools I ship products with" },
    testimonials: { title: "Testimonials", subtitle: "What clients say" },
    calculator: {
      title: "Cost calculator",
      subtitle: "Ballpark estimate — exact quote after a brief",
      type: "Project type",
      complexity: "Complexity",
      estimate: "Estimate",
      from: "from",
    },
    contact: {
      title: "Let's build something great",
      subtitle: "Describe your task — I'll reply within 24h",
      name: "Name",
      email: "Email",
      task: "Task description",
      budget: "Budget",
      send: "Send request",
      sending: "Sending…",
      success: "Request sent!",
      telegram: "Telegram",
      telegramField: "Your Telegram (@username)",
      error: "Failed to send — message me on Telegram",
      successHint: "I'll reply via email or Telegram",
    },
    footer: { rights: "All rights reserved", tagline: "Think. Build. Ship." },
    blog: { title: "Blog & cases", subtitle: "Project breakdowns, stack & insights", read: "Read" },
  },
};
