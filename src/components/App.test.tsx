import { screen } from "@testing-library/react";
import React from "react";

import { render } from "../tests-config/test-utils";
import { App } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
