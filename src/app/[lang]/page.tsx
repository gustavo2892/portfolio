import { BubbleCursor } from "@/templates/home/components";
import { Locale } from "@/i18n-config";
import { Home } from "@/templates";
import type { Metadata } from "next";

export const metatadata: Metadata = {
  title: "Freitas Software - Home",
  description: "Welcome to Freitas Software's homepage.",
  robots: "index, follow",
  openGraph: {
    title: "Freitas Software - Home",
    description: "Welcome to Freitas Software's homepage.",
    url: "https://devfreitas.vercel.app/og-image.jpg",
    siteName: "Freitas Software",
    type: "website",
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

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <>
      <BubbleCursor />
      <Home lang={lang} />
    </>
  );
}
