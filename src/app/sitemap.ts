import type { MetadataRoute } from "next";

import { i18n } from "@/i18n-config";
import { PAGE_PATHS, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Idioma padrão primeiro, para manter a ordem pt, en em cada página
  const locales = [
    i18n.defaultLocale,
    ...i18n.locales.filter((locale) => locale !== i18n.defaultLocale),
  ];

  const pageUrl = (locale: string, page: string) => `${SITE_URL}/${locale}${page}`;

  return Object.values(PAGE_PATHS).flatMap((page) => {
    // Versões traduzidas da mesma página (hreflang); o x-default fica nos metadados HTML
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, pageUrl(locale, page)])
    );

    return locales.map((locale) => ({
      url: pageUrl(locale, page),
      alternates: { languages },
    }));
  });
}
