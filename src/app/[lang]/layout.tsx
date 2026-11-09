import { PT_Sans_Caption, Montserrat } from "next/font/google";

import type { Metadata } from "next";

import { i18n } from "@/i18n-config";
import { AUTHOR_NAME, SITE_URL } from "@/lib/seo";
import { Footer, Header, Whatsapp } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: AUTHOR_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: "Portfolio",
};

// Apenas os idiomas de generateStaticParams são válidos; qualquer outro valor de [lang] retorna 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mont",
});

export default async function Root({ children, params }: LayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${ptSansCaption.className} ${montserrat.className} relative flex min-h-screen flex-col bg-secondary-100`}
      >
        <Header lang={lang} />
        <main className="flex-1 flex flex-col mb-12">{children}</main>
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
