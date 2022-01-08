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

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme} resetCSS>
      {/* <Global styles={GlobalStyles} /> */}

      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
