/* eslint-disable @typescript-eslint/no-use-before-define */
import { Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import Container from 'client/components/Container';
import React from 'react';

export default function Index(): JSX.Element {
  const { colorMode } = useColorMode();
  const occupationColor = {
    light: 'gray.700',
    dark: 'gray.300',
  };

  return (
    <Container>
      <Stack as="main" spacing={8} justifyContent="center" m="0 auto 4rem auto" maxWidth="700px" width="100%">
        <Flex flexDirection="column">
          <Heading letterSpacing="tight" mb={2} size="2xl">
            What I&apos;m listening to
          </Heading>
          <Text color={occupationColor[colorMode]}>
            This is a collection of my favorite albums and recent tracks pulled from spotify.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
