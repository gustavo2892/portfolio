"use client";
import { Menu, X as LucideX } from 'lucide-react';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Logo,
} from '@/components';
import { useMenuMobile } from '../../menu-mobile.context';
import { ActiveLinkMobile, LocaleSwitcherMobile } from '../';
import { useDictionary } from '@/contexts';

export const MenuMobileContent = () => {
  const { showMenu, openMenu, closeMenu, setShowMenu } = useMenuMobile();
  const { lang, dictionary } = useDictionary();

  const handleOnOpenMenu = () => {
    openMenu();
  }

  const handleOnCloseMenu = () => {
    closeMenu();
  }

  return (
    <Drawer open={showMenu} onOpenChange={setShowMenu}>
      <DrawerTrigger asChild>
        <Menu
          width={40}
          height={30}
          className="text-blue-300 cursor-pointer hover:opacity-80"
          onClick={() => handleOnOpenMenu()}
        />
      </DrawerTrigger>
      <DrawerContent
        className="z-99 bg-secondary-100 h-120 border-blue-300"
        draggable={false}
        data-vaul-no-drag
      >
        <DrawerHeader className="flex flex-col">
          <div className="flex flex-1 -mt-4 justify-end">
            <LucideX
              width={40}
              height={30}
              onClick={() => handleOnCloseMenu()}
              className="text-blue-300 cursor-pointer hover:opacity-80"
            />
          </div>
          <DrawerTitle className="flex flex-1 items-center justify-center text-center -mt-4">
            <Logo width={180} />
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col h-80 justify-center items-center gap-y-6">
          <ActiveLinkMobile href={`/${lang}`}>{dictionary.pages.home}</ActiveLinkMobile>
          <ActiveLinkMobile href={`/${lang}/about-me`}>{dictionary.pages["about-me"]}</ActiveLinkMobile>
          <ActiveLinkMobile href={`/${lang}/projects`}>{dictionary.pages.projects}</ActiveLinkMobile>
          <LocaleSwitcherMobile />
        </div>
      </DrawerContent>
    </Drawer>
  )
}