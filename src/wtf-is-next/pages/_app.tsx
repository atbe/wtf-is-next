import { ApolloProvider } from "@apollo/client";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import createApolloClient from "../lib/apollo/createApolloClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
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
    </ApolloProvider>
  );
}

export default MyApp;
