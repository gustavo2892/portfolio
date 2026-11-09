import type { Metadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";

// Domínio oficial de produção; base para metadataBase, robots.txt e sitemap.xml
export const SITE_URL = "https://devfreitas.vercel.app";

// Nome usado nos títulos das páginas (e no title.template do layout)
export const AUTHOR_NAME = "Gustavo Freitas";

const SITE_NAME = "Freitas Software";

// Páginas públicas e seus caminhos dentro de app/[lang] ("" = home); usado também pelo sitemap
export const PAGE_PATHS = {
  home: "",
  "about-me": "/about-me",
  projects: "/projects",
} as const;

export type SeoPage = keyof typeof PAGE_PATHS;

const OG_LOCALES: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

// Textos em dictionaries/{lang}.json (chave "seo"); URLs relativas são resolvidas
// pelo metadataBase definido em app/[lang]/layout.tsx
export async function buildPageMetadata(
  lang: Locale,
  page: SeoPage
): Promise<Metadata> {
  const { seo } = await getDictionary(lang);
  const { description } = seo[page];
  const path = PAGE_PATHS[page];
  const url = `/${lang}${path}`;

  // Título completo montado aqui para que <title>, og:title e twitter:title sejam idênticos;
  // "absolute" impede que o title.template do layout acrescente o nome novamente
  const title =
    page === "home"
      ? `${AUTHOR_NAME} | ${seo[page].title}`
      : `${seo[page].title} | ${AUTHOR_NAME}`;

  const languages: Record<string, string> = {};
  for (const locale of i18n.locales) {
    languages[locale] = `/${locale}${path}`;
  }
  languages["x-default"] = `/${i18n.defaultLocale}${path}`;

  return {
    title: { absolute: title },
    description,
    robots: "index, follow",
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALES[lang],
      alternateLocale: i18n.locales
        .filter((locale) => locale !== lang)
        .map((locale) => OG_LOCALES[locale]),
      images: [
        {
          url: "/og-image.jpg",
          width: 614,
          height: 343,
          alt: seo["image-alt"],
        },
      ],
    },
  };
}
