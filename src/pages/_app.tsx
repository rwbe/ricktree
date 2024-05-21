import { ChakraProvider, useColorMode, IconButton } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { FC } from "react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    light: {
      background: "#ffffff",
      text: "#000000",
    },
    dark: {
      background: "#1a1a1d",
      text: "#ffffff",
    },
  },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
};

export default App;
