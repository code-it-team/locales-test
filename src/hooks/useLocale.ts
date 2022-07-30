import { useEffect, useState } from "react";
import { createGlobalState } from "react-use";

import { LOCALES } from "../i18n/locales";
import { LOCAL_STORAGE_KEYS } from "../utils/localStorageKeys";

// const useGlobalLocale = createGlobalState(
//   () => localStorage.getItem(LOCAL_STORAGE_KEYS.locale) ?? LOCALES.English,
// );

export const useLocale = () => {
  // const [locale, setLocale] = useGlobalLocale();
  // WE MUST USE GLOBAL STATE TO CAUSE RE-RENDERING, WHY?
  const [locale, setLocale] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEYS.locale) ?? LOCALES.English,
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.locale, locale);
  }, [locale]);

  return {
    locale,
    setLocale,
  };
};
