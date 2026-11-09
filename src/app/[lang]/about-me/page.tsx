import { Locale } from "@/i18n-config";
import { AboutMe } from "@/templates";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return buildPageMetadata(lang, "about-me");
}

export default async function AboutMePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return <AboutMe lang={lang} />;
}
