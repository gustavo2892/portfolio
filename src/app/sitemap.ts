import type { MetadataRoute } from "next";

import { i18n } from "@/i18n-config";

const SITE_URL = "https://devfreitas.vercel.app";

// Páginas públicas dentro de app/[lang] ("" = home)
const PAGES = ["", "/about-me", "/projects"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Idioma padrão primeiro, para manter a ordem pt, en em cada página
  const locales = [
    i18n.defaultLocale,
    ...i18n.locales.filter((locale) => locale !== i18n.defaultLocale),
  ];

  return PAGES.flatMap((page) =>
    locales.map((locale) => ({ url: `${SITE_URL}/${locale}${page}` }))
  );
}
