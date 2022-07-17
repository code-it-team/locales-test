import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../utils/routes";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      alignItems="center"
      as="footer"
      bg={useColorModeValue("gray.100", "gray.600")}
      color={useColorModeValue("gray.500", "gray.200")}
      display="flex"
      flexDir="column"
      padding="24"
    >
      <Box color={useColorModeValue("purple.600", "purple.400")} mb="6">
        <Heading
          cursor="pointer"
          fontFamily="heading"
          fontSize="7xl"
          fontWeight="bold"
          onClick={() => navigate(ROUTES["/"])}
          size="2xl"
        >
          <FormattedMessage defaultMessage="Honest" id="6yymIa" />
        </Heading>
      </Box>
      <Text fontSize="md">
        <FormattedMessage
          defaultMessage="© {year} <b>code-it</b> Team. All rights reserved"
          id="B2B8xz"
          values={{
            b: (chunks) => <b>{chunks}</b>,
            year: new Date().getFullYear(),
          }}
        />
      </Text>
    </Box>
  );
};
