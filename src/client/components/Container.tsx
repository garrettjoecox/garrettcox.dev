import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container: FC<{}> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  };

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? <SunIcon color="white" /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        {/* <Box>
          <NextLink href="/music" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Music
            </Button>
          </NextLink>
          <NextLink href="/games" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Games
            </Button>
          </NextLink>
          <NextLink href="/movies" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Movies
            </Button>
          </NextLink>
        </Box> */}
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
