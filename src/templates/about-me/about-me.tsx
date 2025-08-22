import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export const AboutMe = async (props: {
  lang: Locale
}) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col py-24 flex-grow h-full w-full">
      <header className="pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
          <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
            <div className="md:px-0">
              <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-blue-300">
                {dictionary.pages["about-me"]}
              </h1>
            </div>
          </div>
        </div>

      </header>
      <div className="container space-y-8 mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        {/**About Me */}
      </div>
    </div>
  );
}
