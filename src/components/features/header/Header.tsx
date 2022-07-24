import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FaSearch, FaSearchDollar } from "react-icons/fa";
import { FiSearch, FiSettings } from "react-icons/fi";
import { useIntl } from "react-intl";

import { ROUTES } from "../../../utils/routes";
import { ColorModeSwitcher } from "../color-mode-switcher/ColorModeSwitcher";
import { Navbar } from "../navbar/Navbar";

export const Header = () => {
  const intl = useIntl();

  return (
    <Flex
      as="header"
      boxShadow={useColorModeValue("md", "dark-lg")}
      justifyContent="space-between"
      p="3"
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
            url: ROUTES["/settings"],
            icon: FiSettings,
          },
        ]}
      />
      <Flex basis="500px">
        <InputGroup>
          <InputLeftElement
            children={
              <Icon as={AiOutlineSearch} boxSize="6" color="gray.300" />
            }
            pointerEvents="none"
          />
          <Input placeholder="Phone number" type="tel" />
        </InputGroup>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
};
