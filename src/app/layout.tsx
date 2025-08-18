import { i18n, type Locale } from "../../i18n-config";
import '@/styles/globals.css';

export const metadata = {
  title: "Gustavo Vidal de Freitas",
  description: "Portfolio",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
