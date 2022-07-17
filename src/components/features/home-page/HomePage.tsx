import { Text } from "@chakra-ui/react";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const HomePage = () => (
  <>
    <Header />
    <Text>
      <FormattedMessage defaultMessage="Home Page" id="xHJnaY" />
    </Text>
    <Footer />
  </>
);
