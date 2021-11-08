import "../styles/globals.css";
import { ChakraProvider, extendTheme, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

//const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
