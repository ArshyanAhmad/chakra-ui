import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, theme, ColorModeScript } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);
