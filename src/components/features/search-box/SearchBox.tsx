import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import debounce from "lodash.debounce";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useIntl } from "react-intl";

export const SearchBox = () => {
  const intl = useIntl();
  const [searchItem, setSearchItem] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(value);
    // TODO: send API request HERE 👇
  };

  const debouncedResults = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => () => debouncedResults.cancel());

  return (
    <InputGroup>
      <InputLeftElement
        children={<Icon as={AiOutlineSearch} boxSize="6" color="gray.300" />}
        pointerEvents="none"
      />
      <Input
        onChange={debouncedResults}
        placeholder={intl.formatMessage({
          defaultMessage: "Search here",
          description: "search input placeholder in header",
          id: "5Aes6Y",
        })}
        type="text"
      />
    </InputGroup>
  );
};
