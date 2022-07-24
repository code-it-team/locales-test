import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useIntl } from "react-intl";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const intl = useIntl();

  return (
    <Tooltip
      label={intl.formatMessage({
        defaultMessage: "Switch themes",
        id: "KqS2Br",
      })}
    >
      <IconButton
        aria-label={`Switch to ${text} mode`}
        color="current"
        fontSize="lg"
        icon={<SwitchIcon />}
        marginLeft="2"
        onClick={toggleColorMode}
        size="md"
        variant="ghost"
        {...props}
      />
    </Tooltip>
  );
};
