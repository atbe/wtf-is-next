import { Box, Flex, Heading, HStack, Input, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { useGetHistoryQuery } from "../generated/react-graphql";
import { Message } from "./api/chat/history";

const Home: NextPage = () => {
  const [error, setError] = useState<Error | undefined>(undefined);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [spawnTime, setSpawnTime] = useState(0);

  const { data, loading } = useGetHistoryQuery({
    pollInterval: 2000,
  });

  return (
    <Flex p={8} flex={1} minW="100%">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex flexDir={"column"} color="white" gridGap={"8px"} flex={1}>
          <Flex flexDir={"column"} color="white" gridGap={"8px"} w="100%">
            <HStack alignItems={"center"} w="100%">
              <Text fontSize={"1em"}>Username</Text>
              <Input
                onChange={(ev) => setName(ev.target.value)}
                placeContent={"Your name"}
              ></Input>
            </HStack>

            <HStack>
              <Text fontSize={"1em"}>Message</Text>

              <Input
                onChange={(ev) => setMessage(ev.target.value)}
                placeContent={"message"}
                w="100%"
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    sendMessage();
                  }
                }}
                value={message}
              ></Input>
            </HStack>
          </Flex>

          <Box>
            {data?.messages.map(({ message, user, createdAt }) => {
              const time = new Date(createdAt).toLocaleTimeString();
              return (
                <Flex
                  key={name}
                  flexDir={"column"}
                  gridGap={"8px"}
                  fontSize={`12px`}
                  border="1px white solid"
                  p={4}
                  my={4}
                >
                  <Text>
                    {user?.username} - {time}
                  </Text>
                  <Text>{message}</Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </main>
    </Flex>
  );
};

export default Home;
