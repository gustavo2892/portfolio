import { Locale } from "@/i18n-config";
import { AboutMe } from "@/templates";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    pt: "Sobre mim",
    en: "About me",
  };

  const descriptions: Record<Locale, string> = {
    pt: "Descubra mais sobre a Freitas Software.",
    en: "Discover more about Freitas Software.",
  };

  const locales: Record<Locale, string> = {
    pt: "pt_BR",
    en: "en_US",
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    robots: "index, follow",
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      url: "https://devfreitas.vercel.app/og-image.jpg",
      siteName: "Freitas Software",
      type: "website",
      locale: locales[lang],
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

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return <AboutMe lang={lang} />;
}
