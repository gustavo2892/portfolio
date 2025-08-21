import { BubbleCursor } from "@/templates/home/components";
import { Locale } from "@/i18n-config";
import { Home } from '@/templates';

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
