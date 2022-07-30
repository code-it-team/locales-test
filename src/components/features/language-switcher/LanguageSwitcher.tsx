import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaLanguage } from "react-icons/fa";
import { useIntl } from "react-intl";

import { useLocale } from "../../../hooks/useLocale";
import { LOCALES } from "../../../i18n/locales";

export const LanguageSwitcher = () => {
  const intl = useIntl();
  const { setLocale } = useLocale();

  return (
    <Menu>
      <Tooltip
        label={intl.formatMessage({
          defaultMessage: "Switch languages",
          description: "language switcher tooltip in header",
          id: "/WDt1u",
        })}
      >
        <MenuButton
          as={IconButton}
          color="current"
          icon={<Icon as={FaLanguage} boxSize="6" />}
          variant="ghost"
        />
      </Tooltip>

      <MenuList>
        {Object.entries(LOCALES).map(([localeKey, localValue]) => (
          <MenuItem key={localValue} onClick={() => setLocale(localValue)}>
            {localeKey}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
