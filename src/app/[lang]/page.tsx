import { BubbleCursor } from "@/templates/home/components";
import { Locale } from "@/i18n-config";
import { Home } from "@/templates";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    pt: "Início",
    en: "Home",
  };

  const descriptions: Record<Locale, string> = {
    pt: "Bem-vindo à página inicial da Freitas Software.",
    en: "Welcome to Freitas Software's homepage.",
  };

  const locales: Record<Locale, string> = {
    pt: "pt_BR",
    en: "en_US",
  };

  return {
    title: titles[lang] ?? titles.pt,
    description: descriptions[lang] ?? descriptions.pt,
    robots: "index, follow",
    openGraph: {
      title: titles[lang] ?? titles.pt,
      description: descriptions[lang] ?? descriptions.pt,
      url: "https://devfreitas.vercel.app/og-image.jpg",
      siteName: "Freitas Software",
      type: "website",
      locale: locales[lang] ?? locales.pt,
      images: [
        {
          url: "https://devfreitas.vercel.app/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Freitas Software",
        },
      ],
    },
  };
}

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <>
      <BubbleCursor />
      <Home lang={lang} />
    </>
  );
}
