import { Locale } from '@/i18n-config';
import { AboutMe } from '@/templates';

export default async function AboutMePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <AboutMe lang={lang} />
  );
}