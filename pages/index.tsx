import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const [name, setName] = useState("");

  const [shoutouts, setShoutouts] = useState<{ [key: string]: number }>({});

  const getResults = useCallback(async () => {
    console.log("callApi called");

    if (loading) {
      return;
    }

    setLoading(true);

    const response = await fetch("/api/results", {
      body: JSON.stringify({ name }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("response not ok", response.status);
    }

    const json = await response.json();

    const shoutouts = json.shoutouts;
    setShoutouts(shoutouts);

    setLoading(false);
  }, [loading, name]);

  const sayHello = useCallback(async () => {
    const response = await fetch("/api/hello", {
      body: JSON.stringify({ name }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("response not ok", response.status);
    }
    console.log("we said hello!");

    getResults();
  }, [getResults, name]);

  useEffect(() => {
    const id = setInterval(() => {
      getResults();
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [getResults, shoutouts]);

  return (
    <Flex p={8}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex flexDir={"column"} color="white" gridGap={"8px"}>
          <Flex flexDir={"column"} color="white" gridGap={"8px"}>
            <Text fontSize={"2em"}>Send someone a shoutout</Text>
            <Input
              onChange={(ev) => setName(ev.target.value)}
              placeContent={"Your name"}
            ></Input>
            <Button onClick={sayHello} colorScheme={"green"}>
              Say hello
            </Button>
          </Flex>

          <Box>
            {Object.keys(shoutouts).map((name) => {
              const count = shoutouts[name];

              const fontSize = Math.ceil(count / 2) * 2.5 + 12;

              return (
                <Flex
                  key={name}
                  flexDir={"row"}
                  gridGap={"8px"}
                  fontSize={`${fontSize}px`}
                >
                  {name} has been shouted out {count} times
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
