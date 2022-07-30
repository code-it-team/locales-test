import "@fontsource/aileron";
import "@fontsource/almarai";
import "@fontsource/inter";

import {
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Route, Routes } from "react-router-dom";

import { useLocale } from "../hooks/useLocale";
import { MESSAGES } from "../i18n/messages";
import { ROUTES } from "../utils/routes";
import { HomePage } from "./features/home-page/HomePage";
import { LostItemFormPage } from "./features/lost-item-form-page/LostItemFormPage";

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: "'Aileron','Almarai', sans-serif",
      heading: "'Inter', 'Almarai', sans-serif",
    },
  });
  const { locale } = useLocale();

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider key={locale} locale={locale} messages={MESSAGES[locale]}>
        <Routes>
          <Route element={<HomePage />} path={ROUTES["/"]}>
            <Route element={<div>----</div>} index />
            <Route
              element={<LostItemFormPage />}
              path={ROUTES["submit-lost-item"]}
            />
          </Route>
          <Route
            element={
              <Container>
                <Flex
                  alignItems="center"
                  height="100vh"
                  justifyContent="center"
                >
                  <Text fontSize="3xl">
                    <FormattedMessage
                      defaultMessage="404 Page not found"
                      id="m8h31M"
                    />
                  </Text>
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
