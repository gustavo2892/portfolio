"use client";
import { MenuMobileProvider } from './menu-mobile.context';
import { MenuMobileContent } from './components';
import { DictionaryProvider } from '@/contexts';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const MenuMobile = ({
  dictionary,
  lang,
}: {
  dictionary: Dictionary,
  lang: Locale
}) => {
  return (
    <div className="flex md:hidden">
      <MenuMobileProvider>
        <DictionaryProvider dictionary={dictionary} lang={lang}>
          <MenuMobileContent />
        </DictionaryProvider>
      </MenuMobileProvider>
    </div>
  );
};