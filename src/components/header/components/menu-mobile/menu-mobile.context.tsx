"use client";
import { useEffect, useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { useWindowSize } from '@/hooks';

type MenuMobileContextProps = {
  showMenu: boolean;
  closeMenu: () => void;
  openMenu: () => void;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

type MenuMobileProviderProps = {
  children: React.ReactNode;
};

const contextPropsDefault = {
  showMenu: false,
  closeMenu: () => { },
  openMenu: () => { },
  setShowMenu: () => { },
}

const MenuMobileContext = createContext<MenuMobileContextProps>(contextPropsDefault);

const breakPointMobile = 768;

export const MenuMobileProvider = ({ children }: MenuMobileProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width >= breakPointMobile && showMenu) {
      setShowMenu(false);
    }
  }, [showMenu, width]);

  const closeMenu = () => setShowMenu(false);

  const openMenu = () => setShowMenu(true);

  return (
    <MenuMobileContext.Provider value={{ showMenu, closeMenu, openMenu, setShowMenu }}>
      {children}
    </MenuMobileContext.Provider>
  );
};

export const useMenuMobile = () => {
  const menuMobile = useContext(MenuMobileContext);

  if (menuMobile === null) {
    throw new Error('useMenuMobile hook must be used within MenuMobileProvider');
  }

  return menuMobile;
}