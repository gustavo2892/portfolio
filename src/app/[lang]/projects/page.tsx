import { Locale } from "@/i18n-config";
import { Projects } from "@/templates";
import type { Metadata } from "next";

export const metatadata: Metadata = {
  title: "Freitas Software - Projects",
  description: "Projects by Freitas Software.",
  robots: "index, follow",
  openGraph: {
    title: "Freitas Software - Projects",
    description: "Projects by Freitas Software.",
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

export default async function ProjectsPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return <Projects lang={lang} />;
}
