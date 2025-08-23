"use client";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { i18n, type Locale } from "@/i18n-config";
import { useMenuMobile } from '../../menu-mobile.context';
import { useDictionary } from '@/contexts';

export const LocaleSwitcherMobile = () => {
  const pathname = usePathname();

  const { closeMenu } = useMenuMobile();

  const { lang } = useDictionary();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleOnChangeLocale = () => {
    closeMenu();
  }

  return (
    <div className="flex flex-row gap-x-5 mt-1">
      {i18n.locales.map((locale) => {
        if (locale === lang) {
          return (
            <Image
              src={`/${locale}.png`}
              alt="Logo site"
              width={36}
              height={34}
              key={`${locale}_mobile`}
              className="opacity-45"
            />
          );
        }

        return (
          <Link
            href={redirectedPathname(locale)}
            className="flex flex-row justify-center gap-3"
            key={`${locale}_mobile`}
            onClick={() => handleOnChangeLocale()}
          >
            <Image
              src={`/${locale}.png`}
              alt="Logo site"
              width={36}
              height={34}
              className="hover:opacity-75"
            />
          </Link>
        )
      })}
    </div>
  );
}
