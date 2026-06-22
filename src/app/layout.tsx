import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Loboda — Full-stack разработчик",
  description:
    "Строю цифровые продукты: Web, Mobile, Telegram Mini Apps, автоматизация. Портфолио Дмитрия Лободы.",
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: "Loboda — Full-stack разработчик",
    description: "Web, Mobile, Telegram, AI-автоматизация",
    type: "website",
    url: SITE_URL,
    siteName: `${SITE.name}.dew`,
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loboda — Full-stack разработчик",
    description: "Web, Mobile, Telegram, AI-автоматизация",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <div className="noise">
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
