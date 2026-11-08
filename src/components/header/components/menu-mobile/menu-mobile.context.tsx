"use client";
import { useEffect, useState, createContext, useContext, Dispatch, SetStateAction } from "react";

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
const desktopMediaQuery = `(min-width: ${breakPointMobile}px)`;

export const MenuMobileProvider = ({ children }: MenuMobileProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  // Fecha o menu quando a janela cruza para o layout desktop (>= 768px).
  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setShowMenu(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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