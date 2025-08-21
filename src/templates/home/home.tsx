import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const Home = async (props: {
  lang: Locale
}) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang);

  const heroTitle = { __html: `${dictionary["hero-section"].title}` };

  return (
    <section className="container flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center min-h-[30rem] md:h-[36rem]">
        <h1 className="text-blue-300 text-heading-hg font-mont" dangerouslySetInnerHTML={heroTitle} />
      </div>
    </section>
  );
}