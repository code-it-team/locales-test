import { ChakraProvider, Container, Flex, Text, theme } from "@chakra-ui/react";
import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";
import { HomePage } from "./features/home-page/HomePage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route element={<HomePage />} path={ROUTES["/"]} />
      <Route
        element={
          <Container>
            <Flex alignItems="center" height="100vh" justifyContent="center">
              <Text fontSize="3xl">404 Page not found</Text>
            </Flex>
          </Container>
        }
        path="*"
      />
    </Routes>
  </ChakraProvider>
);
