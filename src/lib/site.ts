export const SITE = {
  name: "Loboda",
  domain: "loboda.dew",
  email: "loboda.kakapo@icloud.com",
  telegram: "@DmitryWebbRazrab",
  telegramUrl: "https://t.me/DmitryWebbRazrab",
} as const;

/** URL сайта: на Vercel до покупки домена задайте NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? `https://${SITE.domain}`;

export const BUDGET_OPTIONS = [
  { value: "100-200", labelRu: "$100 – $200", labelEn: "$100 – $200" },
  { value: "200-300", labelRu: "$200 – $300", labelEn: "$200 – $300" },
  { value: "300-400", labelRu: "$300 – $400", labelEn: "$300 – $400" },
  { value: "400-500", labelRu: "$400 – $500", labelEn: "$400 – $500" },
  { value: "500+", labelRu: "$500+", labelEn: "$500+" },
] as const;
