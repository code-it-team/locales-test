import { useEffect, useState } from "react";

import { LOCALES } from "../i18n/locales";
import { LOCAL_STORAGE_KEYS } from "../utils/localStorageKeys";

export const useLocale = (updatedLocale?: keyof typeof LOCALES) => {
  const [locale, setLocale] = useState(
    () =>
      <keyof typeof LOCALES>localStorage.getItem(LOCAL_STORAGE_KEYS.locale) ??
      LOCALES["en-US"],
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.locale,
      updatedLocale ? LOCALES[updatedLocale] : LOCALES["en-US"],
    );
  }, [locale]);

  return {
    locale,
    setLocale,
  };
};
