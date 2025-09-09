import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { PageSkeleton } from '@/components';
import {
  HeroSection,
  FeaturesSection,
  TechnologiesSection
} from './components';

export const AboutMe = async (props: {
  lang: Locale
}) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang);

  return (
    <PageSkeleton title={dictionary.pages["about-me"]}>
      <HeroSection dictionary={dictionary} />
      <TechnologiesSection dictionary={dictionary} />
      <FeaturesSection dictionary={dictionary} />
    </PageSkeleton>
  );
}
