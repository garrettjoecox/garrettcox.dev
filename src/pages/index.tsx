/* eslint-disable @typescript-eslint/no-use-before-define */
import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react';
import Container from 'client/components/Container';
import React, { FC, useMemo } from 'react';

export default function Index(): JSX.Element {
  const { colorMode } = useColorMode();
  const occupationColor = {
    light: 'gray.700',
    dark: 'gray.300',
  };
  const locationColor = {
    light: 'gray.400',
    dark: 'gray.600',
  };

  const languages: { [index: string]: number } = useMemo(
    () => ({
      Typescript: 5,
      Javascript: 5,
      PHP: 3,
      SQL: 2,
      Java: 2,
      Python: 1,
      Rust: 1,
    }),
    [],
  );
  const tools: { [index: string]: number } = useMemo(
    () => ({
      React: 5,
      'React Native': 5,
      Vue: 4,
      Laravel: 4,
      '.NET': 3,
      AWS: 2,
    }),
    [],
  );
  const yearsOfExperience = useMemo(() => new Date().getFullYear() - new Date('2015').getFullYear(), []);

  return (
    <Container>
      <Stack as="main" spacing={8} justifyContent="center" m="0 auto 4rem auto" maxWidth="700px" width="100%">
        <Flex flexDirection="column">
          <CommandText>whoami</CommandText>
          <Heading letterSpacing="tight" mb={2} size="2xl">
            Garrett Cox
          </Heading>
          <Text color={occupationColor[colorMode]}>
            Software Engineer with ~ {yearsOfExperience} years of professional experience, Father of 3 beautiful girls,
            Video Game Nerd, Dr. Pepper Enthusiast
          </Text>
          <Text color={locationColor[colorMode]}>Norman, Oklahoma</Text>
        </Flex>
        <Flex flexDirection="column" mt={8}>
          <CommandText>cat skills.md</CommandText>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box flex="1 1 300px" mr={4}>
              <Heading letterSpacing="tight" mb={2} size="lg">
                Languages
              </Heading>
              {Object.keys(languages).map((language) => (
                <Flex key={language}>
                  <Box py="2">{language}</Box>
                  <Spacer />
                  <Box py="2">
                    <StarRating rating={languages[language]} />
                  </Box>
                </Flex>
              ))}
            </Box>
            <Box flex="1 1 300px" mr={4}>
              <Heading letterSpacing="tight" mb={2} size="lg">
                Frameworks / Tools
              </Heading>
              {Object.keys(tools).map((tool) => (
                <Flex key={tool}>
                  <Box py="2">{tool}</Box>
                  <Spacer />
                  <Box py="2">
                    <StarRating rating={tools[tool]} />
                  </Box>
                </Flex>
              ))}
              <Flex>
                <Box py="2">And plenty more...</Box>
                <Spacer />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
}

const CommandText: FC<{}> = ({ children }) => {
  const { colorMode } = useColorMode();
  const greenColor = {
    light: 'green.500',
    dark: 'green.300',
  };
  const blueColor = {
    light: 'blue.500',
    dark: 'blue.300',
  };
  return (
    <Flex>
      <Text as="span" fontFamily="monospace" pr="2" fontSize="20px" color={blueColor[colorMode]}>
        ~/dev
      </Text>
      <Text as="span" fontFamily="monospace" pr="2" fontSize="20px">
        ❯❯❯
      </Text>
      <Text as="span" fontFamily="monospace" pr="2" fontSize="20px" color={greenColor[colorMode]}>
        {children}
      </Text>
    </Flex>
  );
};

const StarRating: FC<{ rating: number }> = ({ rating }) => {
  const { colorMode } = useColorMode();
  const starColor = {
    light: 'gray.200',
    dark: 'gray.700',
  };

  return (
    <Box>
      {[1, 2, 3, 4, 5].map((s) => (
        <StarIcon key={s} color={6 - s <= rating ? 'yellow.300' : starColor[colorMode]} />
      ))}
    </Box>
  );
};
