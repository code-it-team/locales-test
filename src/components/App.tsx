import { ChakraProvider, Container, Flex, Text, theme } from "@chakra-ui/react";
import * as React from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import { Route, Routes } from "react-router-dom";

import { useLocale } from "../hooks/useLocale";
import { LOCALES } from "../i18n/locales";
import { MESSAGES } from "../i18n/messages";
import { ROUTES } from "../utils/routes";
import { HomePage } from "./features/home-page/HomePage";

export const App = () => {
  const { locale } = useLocale(LOCALES.ENGLISH);
  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        defaultLocale={locale}
        key={locale}
        locale={locale}
        messages={MESSAGES[locale]}
        onError={(error) => {
          if (error.code === ReactIntlErrorCode.MISSING_TRANSLATION) {
            return;
          }

          throw error;
        }}
      >
        <Routes>
          <Route element={<HomePage />} path={ROUTES["/"]} />
          <Route
            element={
              <Container>
                <Flex
                  alignItems="center"
                  height="100vh"
                  justifyContent="center"
                >
                  <Text fontSize="3xl">404 Page not found</Text>
                </Flex>
              </Container>
            }
            path="*"
          />
        </Routes>
      </IntlProvider>
    </ChakraProvider>
  );
};
