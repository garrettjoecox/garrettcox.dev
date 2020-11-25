import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Stack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';

export default function Index(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };
  const isDark = colorMode === 'dark';
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Flex direction="column" justifyContent="center" alignItems="center" height="100vh">
        <Heading as="h1" size="4xl" isTruncated>
          (4xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="3xl" isTruncated>
          (3xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="2xl">
          (2xl) In love with React & Next
        </Heading>
        <Heading as="h2" size="xl">
          (xl) In love with React & Next
        </Heading>
        <Heading as="h3" size="lg">
          (lg) In love with React & Next
        </Heading>
        <Heading as="h4" size="md">
          (md) In love with React & Next
        </Heading>
        <Heading as="h5" size="sm">
          (sm) In love with React & Next
        </Heading>
        <Heading as="h6" size="xs">
          (xs) In love with React & Next
        </Heading>
      </Flex>
      <Stack spacing="1.5rem" width="100%" maxWidth="48rem" px="1rem">
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
              Chakra UI <Icon as={ExternalLinkIcon} mx="2px" />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <Icon as={ExternalLinkIcon} mx="2px" />
            </ChakraLink>
          </ListItem>
        </List>
      </Stack>
      <Switch position="fixed" top="1rem" right="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />
      <Flex as="footer" py="8rem">
        <Text>Next ❤️ Chakra</Text>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        flexDirection="row"
        position="fixed"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        py={2}
      >
        <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
          <Button width="100%" variant="outline" colorScheme="green">
            chakra-ui
          </Button>
        </ChakraLink>

        <ChakraLink
          isExternal
          href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
          flexGrow={3}
          mx={2}
        >
          <Button width="100%" variant="solid" colorScheme="green">
            View Repo
          </Button>
        </ChakraLink>
      </Flex>
    </Flex>
  );
}
