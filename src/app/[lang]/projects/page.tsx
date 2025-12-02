import { Locale } from "@/i18n-config";
import { Projects } from "@/templates";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<string, string> = { pt: "Projetos", en: "Projects" };
  const descriptions: Record<string, string> = {
    pt: "Descubra os projetos da Freitas Software.",
    en: "Discover Freitas Software's projects.",
  };
  const locales: Record<string, string> = { pt: "pt_BR", en: "en_US" };

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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return <Projects lang={lang} />;
}
