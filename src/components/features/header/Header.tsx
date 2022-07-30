import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useIntl } from "react-intl";

import { ROUTES } from "../../../utils/routes";
import { ColorModeSwitcher } from "../color-mode-switcher/ColorModeSwitcher";
import { LanguageSwitcher } from "../language-switcher/LanguageSwitcher";
import { Navbar } from "../navbar/Navbar";
import { SearchBox } from "../search-box/SearchBox";

export const Header = () => {
  const intl = useIntl();

  return (
    <Flex
      as="header"
      boxShadow={useColorModeValue("md", "dark-lg")}
      flexWrap="wrap"
      gap="2"
      justifyContent="space-between"
      p="2"
    >
      <Navbar
        navLinks={[
          {
            label: intl.formatMessage({
              defaultMessage: "Home",
              id: "ZJIrDY",
              description: "home button in navbar",
            }),
            url: ROUTES["/"],
            icon: AiOutlineHome,
          },
          {
            label: intl.formatMessage({
              defaultMessage: "Settings",
              id: "RJ/GFS",
              description: "settings button in navbar",
            }),
            url: ROUTES["settings"],
            icon: FiSettings,
          },
        ]}
      />
      <Flex flexBasis="50%">
        <SearchBox />
      </Flex>
      <div>
        <LanguageSwitcher />
        <ColorModeSwitcher />
      </div>
    </Flex>
  );
};
