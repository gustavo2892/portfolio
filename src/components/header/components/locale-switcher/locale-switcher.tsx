"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components";

export const LocaleSwitcher = () => {
  const pathname = usePathname();

  const currentLocale = pathname?.split("/")[1];

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-secondary-200 flex flex-row justify-center gap-2 cursor-pointer outline-none">
        <Image
          src={`/${currentLocale}.png`}
          alt="Logo site"
          width={22}
          height={16}
          unoptimized
        />
        {currentLocale?.toLocaleUpperCase()}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="border-transparent bg-secondary-100"
        align="start"
      >
        {i18n.locales.map((locale) => {
          return (
            <DropdownMenuItem
              key={locale}
              className="text-secondary-200"
              disabled={locale === currentLocale}
            >
              <Link
                href={redirectedPathname(locale)}
                className="flex flex-row justify-center gap-3"
              >
                <Image
                  src={`/${locale}.png`}
                  alt="Logo site"
                  width={18}
                  height={16}
                  unoptimized
                />
                {locale?.toLocaleUpperCase()}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
