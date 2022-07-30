import { Box, Button, Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineForm, AiOutlineHome } from "react-icons/ai";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { ROUTES } from "../../../utils/routes";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const HomePage = () => {
  const isMobile = useBreakpointValue({ base: false, sm: true });
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box p="4">
        <Flex
          gap="4"
          justifyContent={isMobile ? "space-between" : "center"}
          pt="2"
          px={isMobile ? 12 : 0}
        >
          <Button onClick={() => navigate(ROUTES["/"])}>
            <Flex alignItems="center">
              <Icon as={AiOutlineHome} boxSize="6" pr="2" />
              <FormattedMessage defaultMessage="Home Page" id="xHJnaY" />
            </Flex>
          </Button>
          <Button>
            <Link to={ROUTES["submit-lost-item"]}>
              <Flex alignItems="center">
                <Icon as={AiOutlineForm} boxSize="6" pr="2" />
                <FormattedMessage
                  defaultMessage="Submit lost item"
                  id="lk7ZVo"
                />
              </Flex>
            </Link>
          </Button>
        </Flex>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
