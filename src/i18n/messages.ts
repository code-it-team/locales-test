import * as arMessages from "./lang/ar.json";
import * as enMessages from "./lang/en.json";
import * as trMessages from "./lang/tr.json";
import { LOCALES } from "./locales";

export const MESSAGES = {
  [LOCALES.English]: {
    ...enMessages,
  },
  [LOCALES.Turkish]: {
    ...trMessages,
  },
  [LOCALES.Arabic]: {
    ...arMessages,
  },
};
