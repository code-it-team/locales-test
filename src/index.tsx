import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
