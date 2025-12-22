import { Locale } from "@/i18n-config";
import { Logo } from "@/components";
import { getDictionary } from "@/get-dictionary";
import { ActiveLink, LocaleSwitcher, MenuMobile } from "./components";

export const Header = async (props: { lang: string }) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang as Locale);

  return (
    <header className="fixed top-0 z-50 w-full bg-secondary-100 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo homeLink={`/${lang}`} />

          <nav className="hidden md:flex items-center gap-6">
            <ActiveLink href={`/${lang}`}>{dictionary.pages.home}</ActiveLink>
            <ActiveLink href={`/${lang}/about-me`}>
              {dictionary.pages["about-me"]}
            </ActiveLink>
            <ActiveLink href={`/${lang}/projects`}>
              {dictionary.pages.projects}
            </ActiveLink>
            <LocaleSwitcher />
          </nav>

          <MenuMobile dictionary={dictionary} lang={lang as Locale} />
        </div>
      </div>
    </header>
  );
};
