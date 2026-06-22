export type ProjectCategory = "web" | "mobile" | "telegram" | "automation" | "ai";

export type Project = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: ProjectCategory;
  tech: string[];
  result: string;
  resultEn: string;
  gradient: string;
  accent: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "NovaPay Dashboard",
    titleEn: "NovaPay Dashboard",
    description: "Финтех-платформа с real-time аналитикой и платёжными потоками",
    descriptionEn: "Fintech platform with real-time analytics and payment flows",
    category: "web",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    result: "+40% конверсии",
    resultEn: "+40% conversion",
    gradient: "from-emerald-600/40 via-teal-900/60 to-black",
    accent: "#b6ff00",
    link: "#",
  },
  {
    id: "telegram-mini",
    title: "ShopMini — TMA",
    titleEn: "ShopMini — TMA",
    description: "Telegram Mini App для e-commerce с оплатой и каталогом",
    descriptionEn: "Telegram Mini App for e-commerce with payments & catalog",
    category: "telegram",
    tech: ["React", "TON", "Node.js", "Redis"],
    result: "10k+ пользователей",
    resultEn: "10k+ users",
    gradient: "from-blue-600/40 via-indigo-900/60 to-black",
    accent: "#38bdf8",
    link: "#",
  },
  {
    id: "ai-parser",
    title: "DataForge AI",
    titleEn: "DataForge AI",
    description: "Парсинг и AI-обогащение данных для маркетинговых команд",
    descriptionEn: "Scraping & AI data enrichment for marketing teams",
    category: "automation",
    tech: ["Python", "FastAPI", "OpenAI", "Celery"],
    result: "−80% ручной работы",
    resultEn: "−80% manual work",
    gradient: "from-violet-600/40 via-purple-900/60 to-black",
    accent: "#a855f7",
  },
  {
    id: "health-app",
    title: "Pulse Health",
    titleEn: "Pulse Health",
    description: "Телемедицина: видео, записи, интеграция с FHIR",
    descriptionEn: "Telemedicine: video, scheduling, FHIR integration",
    category: "mobile",
    tech: ["React Native", "Twilio", "PostgreSQL"],
    result: "4.8★ в App Store",
    resultEn: "4.8★ on App Store",
    gradient: "from-cyan-600/40 via-slate-900/60 to-black",
    accent: "#22d3ee",
    link: "#",
  },
  {
    id: "web3-wallet",
    title: "ChainVault",
    titleEn: "ChainVault",
    description: "Web3-кошелёк с мультичейн и DeFi-дашбордом",
    descriptionEn: "Web3 wallet with multichain & DeFi dashboard",
    category: "ai",
    tech: ["Solidity", "ethers.js", "Next.js", "WalletConnect"],
    result: "$5M TVL",
    resultEn: "$5M TVL",
    gradient: "from-amber-600/40 via-orange-950/60 to-black",
    accent: "#fbbf24",
    link: "#",
  },
  {
    id: "crm-bot",
    title: "LeadBot CRM",
    titleEn: "LeadBot CRM",
    description: "Telegram-бот для лидогенерации с CRM-интеграцией",
    descriptionEn: "Telegram lead-gen bot with CRM integration",
    category: "telegram",
    tech: ["Python", "aiogram", "HubSpot API"],
    result: "3× больше лидов",
    resultEn: "3× more leads",
    gradient: "from-rose-600/40 via-pink-950/60 to-black",
    accent: "#fb7185",
  },
];

export const services = [
  {
    id: "web",
    icon: "🌐",
    titleRu: "Web-разработка",
    titleEn: "Web development",
    descRu: "SPA, лендинги, SaaS, e-commerce на современном стеке",
    descEn: "SPA, landing pages, SaaS, e-commerce on modern stack",
  },
  {
    id: "mobile",
    icon: "📱",
    titleRu: "Мобильные приложения",
    titleEn: "Mobile apps",
    descRu: "iOS & Android на React Native и Flutter",
    descEn: "iOS & Android with React Native & Flutter",
  },
  {
    id: "telegram",
    icon: "✈️",
    titleRu: "Telegram боты / Mini Apps",
    titleEn: "Telegram bots / Mini Apps",
    descRu: "Боты, TMA, платежи, каталоги внутри Telegram",
    descEn: "Bots, TMA, payments, catalogs inside Telegram",
  },
  {
    id: "automation",
    icon: "⚙️",
    titleRu: "Автоматизация и парсинг",
    titleEn: "Automation & scraping",
    descRu: "Парсеры, ETL, cron-задачи, интеграции API",
    descEn: "Scrapers, ETL, cron jobs, API integrations",
  },
  {
    id: "integrations",
    icon: "🔗",
    titleRu: "Интеграции",
    titleEn: "Integrations",
    descRu: "AI, Web3, платежи, CRM, аналитика",
    descEn: "AI, Web3, payments, CRM, analytics",
  },
];

export const techStack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "Redis", "Docker", "AWS", "Telegram", "Solidity",
  "OpenAI", "Tailwind", "React Native", "GraphQL", "Prisma", "GSAP",
];

export const testimonials = [
  {
    quoteRu: "Сдал проект раньше срока, конверсия выросла на 40%. Рекомендую.",
    quoteEn: "Delivered ahead of schedule, conversion up 40%. Highly recommend.",
    author: "Alex M.",
    roleRu: "CEO, FinTech стартап",
    roleEn: "CEO, FinTech startup",
  },
  {
    quoteRu: "Лучший разработчик, с которым работали. Понимает бизнес, а не только код.",
    quoteEn: "Best developer we've worked with. Understands business, not just code.",
    author: "Maria K.",
    roleRu: "Product Lead",
    roleEn: "Product Lead",
  },
  {
    quoteRu: "Telegram Mini App запустили за 3 недели. 10k пользователей — без багов.",
    quoteEn: "Telegram Mini App launched in 3 weeks. 10k users — zero critical bugs.",
    author: "Dmitry V.",
    roleRu: "Founder, e-commerce",
    roleEn: "Founder, e-commerce",
  },
];

export const blogPosts = [
  {
    slug: "nextjs-saas-architecture",
    titleRu: "Как я строю SaaS на Next.js 14",
    titleEn: "How I build SaaS on Next.js 14",
    excerptRu: "App Router, серверные компоненты, аутентификация и деплой — полный разбор архитектуры.",
    excerptEn: "App Router, server components, auth & deploy — full architecture breakdown.",
    date: "2025-03-12",
    readTime: 8,
    tag: "Web",
  },
  {
    slug: "telegram-mini-apps-guide",
    titleRu: "Telegram Mini Apps: гайд 2025",
    titleEn: "Telegram Mini Apps: 2025 guide",
    excerptRu: "TMA SDK, платежи, UX-паттерны и монетизация внутри Telegram.",
    excerptEn: "TMA SDK, payments, UX patterns & monetization inside Telegram.",
    date: "2025-02-28",
    readTime: 12,
    tag: "Telegram",
  },
  {
    slug: "ai-automation-roi",
    titleRu: "AI-автоматизация: ROI за 30 дней",
    titleEn: "AI automation: ROI in 30 days",
    excerptRu: "Кейс: как сократили ручную работу на 80% с помощью LLM-пайплайна.",
    excerptEn: "Case study: cutting manual work 80% with an LLM pipeline.",
    date: "2025-01-15",
    readTime: 6,
    tag: "AI",
  },
];

export const calculatorTypes = [
  { id: "landing", labelRu: "Лендинг", labelEn: "Landing page", base: 150 },
  { id: "webapp", labelRu: "Web-приложение", labelEn: "Web app", base: 350 },
  { id: "mobile", labelRu: "Мобильное приложение", labelEn: "Mobile app", base: 450 },
  { id: "telegram", labelRu: "Telegram бот / TMA", labelEn: "Telegram bot / TMA", base: 200 },
  { id: "automation", labelRu: "Автоматизация", labelEn: "Automation", base: 180 },
];

export const complexityMultipliers = [
  { id: "simple", labelRu: "Простой", labelEn: "Simple", mult: 1 },
  { id: "medium", labelRu: "Средний", labelEn: "Medium", mult: 1.5 },
  { id: "complex", labelRu: "Сложный", labelEn: "Complex", mult: 2.2 },
];
