import { BubbleCursor } from "@/templates/home/components";
import { Locale } from "@/i18n-config";
import { Home } from "@/templates";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return buildPageMetadata(lang, "home");
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
