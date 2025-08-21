import { Inter, PT_Sans_Caption } from 'next/font/google';

import { i18n, type Locale } from "../../../i18n-config";
import { Footer, Header, Whatsapp } from '@/components';
import '@/styles/globals.css';

export const metadata = {
  title: "Freitas Software",
  description: "Portfolio",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
});

export default async function Root(props: LayoutProps) {
  const params = await props.params;

  const { children } = props;
  
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-secondary-100`}>
        <Header lang={params.lang} />
        <main className="flex-1 flex flex-col mb-12">{children}</main>
        <Whatsapp />
        <Footer/>
      </body>
    </html>
  );
}
