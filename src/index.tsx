import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createIntl, createIntlCache, IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = ReactDOM.createRoot(container);

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "en-US",
    messages: {},
  },
  cache,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={navigator.language}>
        <ColorModeScript />
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
