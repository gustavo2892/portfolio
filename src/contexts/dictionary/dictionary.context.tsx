'use client'
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { createContext, useContext } from "react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type DictionaryContextProps = {
  dictionary: Dictionary;
  lang: Locale;
};

const DictionaryContext = createContext<DictionaryContextProps | null>(null)

export const DictionaryProvider = ({
  dictionary,
  lang,
  children,
}: {
  dictionary: Dictionary,
  lang: Locale,
  children: React.ReactNode
}) => {
  return (
    <DictionaryContext.Provider value={{ dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  )
}

export const useDictionary = () => {
  const dictionary = useContext(DictionaryContext)
  if (dictionary === null) {
    throw new Error('useDictionary hook must be used within DictionaryProvider');
  }

  return dictionary
}