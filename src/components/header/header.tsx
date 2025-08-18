import { Locale } from "../../../i18n-config";
import { Logo } from '@/components';
import { ActiveLink } from './components';
import { getDictionary } from '@/get-dictionary';

export const Header = async (props: {
  lang: Locale
}) => {
  const { lang } = props;

  const dictionary = await getDictionary(lang);
  
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo homeLink={`/${lang}`} />

          <nav className="flex items-center gap-6">
            <ActiveLink href={`/${lang}`}>{dictionary.header.home}</ActiveLink>
            <ActiveLink href={`/${lang}/projects`}>{dictionary.header.projects}</ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  );
};