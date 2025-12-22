import { Locale } from "@/i18n-config";
import { ProjectsList } from "./components";
import { getDictionary } from "@/get-dictionary";
import { PageSkeleton } from "@/components";

export const Projects = async (props: { lang: Locale }) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang);

  return (
    <PageSkeleton title={dictionary.pages.projects}>
      <ProjectsList dictionary={dictionary} />
    </PageSkeleton>
  );
};
