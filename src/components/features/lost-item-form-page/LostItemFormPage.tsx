import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

export const LostItemFormPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isTablet = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (phoneNumber || email || title || description) {
      window.onbeforeunload = () => true;
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <Flex justify="center">
      <Box width={isTablet ? "60%" : "100%"}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <VStack py="12" spacing="6">
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">
                <FormattedMessage defaultMessage="Phone number" id="jdJhOL" />
              </FormLabel>
              <Input
                onChange={(event) => setPhoneNumber(event.target.value)}
                type="tel"
                value={phoneNumber}
              />
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">
                <FormattedMessage defaultMessage="Email address" id="hJZwTS" />
              </FormLabel>
              <Input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                value={email}
              />
            </FormControl>

            <Button size="lg">
              <FormattedMessage defaultMessage="Submit" id="wSZR47" />
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
