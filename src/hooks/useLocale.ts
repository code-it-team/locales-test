import { useEffect, useState } from "react";

import { LOCALES } from "../i18n/locales";
import { LOCAL_STORAGE_KEYS } from "../utils/localStorageKeys";

export const useLocale = (updatedLocale?: LOCALES) => {
  const [locale, setLocale] = useState<LOCALES>(
    () =>
      <LOCALES>localStorage.getItem(LOCAL_STORAGE_KEYS.locale) ??
      LOCALES.ENGLISH,
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.locale,
      updatedLocale ?? LOCALES.ENGLISH,
    );
  }, [locale]);

  return {
    locale,
    setLocale,
  };
};
