import * as arMessages from "./lang/ar.json";
import * as enMessages from "./lang/en.json";
import * as trMessages from "./lang/tr.json";
import { LOCALES } from "./locales";

export const MESSAGES = {
  [LOCALES["en-US"]]: {
    ...enMessages,
  },
  [LOCALES["tr-TR"]]: {
    ...trMessages,
  },
  [LOCALES["ar-SY"]]: {
    ...arMessages,
  },
};
