import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../utils/routes";

type Props = {
  navLinks: { label: string; url: ROUTES; icon?: IconType }[];
};

export const Navbar = ({ navLinks }: Props) => {
  const intl = useIntl();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Box as="nav">
      <Flex justifyContent="space-between">
        <IconButton
          aria-label={intl.formatMessage({
            defaultMessage: "open-menu",
            id: "iWyGoC",
          })}
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          ref={btnRef}
          variant={useColorModeValue("solid", "outline")}
        />
        <Drawer
          finalFocusRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bg={useColorModeValue("gray.100", "gray.700")} pt="10">
              <Flex display="flex" flexDirection="column" gap="3">
                {navLinks.map(({ label, url, icon }) => (
                  <Link key={label + url} to={url}>
                    <Flex alignItems="center">
                      {icon ? <Icon as={icon} boxSize="5" mr="1" /> : null}
                      <Text fontSize="xl">{label}</Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};
