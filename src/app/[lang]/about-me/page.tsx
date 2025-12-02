import { Locale } from "@/i18n-config";
import { AboutMe } from "@/templates";
import type { Metadata } from "next";

export const metatadata: Metadata = {
  title: "Freitas Software - About Me",
  description: "Discover more about Freitas Software.",
  robots: "index, follow",
  openGraph: {
    title: "Freitas Software - About Me",
    description: "Discover more about Freitas Software.",
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

export default async function AboutMePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return <AboutMe lang={lang} />;
}
