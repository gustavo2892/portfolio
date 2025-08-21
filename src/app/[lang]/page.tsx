import { Locale } from "../../../i18n-config";
import { Home } from '@/templates';

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  console.log((await props.params).lang)

  return (
    <Home />
  );
}
