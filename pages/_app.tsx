import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex
        flexDir={"column"}
        backgroundColor="black"
        minH="100vh"
        minW="100vw"
      >
        <Box p={8}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
export default MyApp;
