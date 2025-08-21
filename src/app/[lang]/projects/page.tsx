import { Locale } from "@/i18n-config";
import { Projects } from '@/templates';

export default async function ProjectsPage(props: {
  params: Promise<{ lang: Locale }>;
}) {

  const { lang } = await props.params;

  return <Projects lang={lang} />;
}
