/* eslint-disable @typescript-eslint/no-use-before-define */
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React, { FC } from 'react';
import Particles from 'react-tsparticles';
import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: background-color 0.1 ease-in-out;
`;

const Container: FC<{}> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(16, 18, 25, 0.8)',
  };

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            background: ${colorMode === 'light' ? 'white' : '#101219'};
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          #tsparticles {
            position: absolute;
            z-index: -1;
            min-width: 100vw;
            min-height: 100vh;
            height: 100%;
          }
        `}
      />
      <Particles options={colorMode === 'dark' ? darkParticleConfig : lightParticleConfig} />
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
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/music" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Music
            </Button>
          </NextLink>
          {/* <NextLink href="/games" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Games
            </Button>
          </NextLink>
          <NextLink href="/movies" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Movies
            </Button>
          </NextLink> */}
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" color={primarytextColor[colorMode]} px={[4, 8]}>
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;

const darkParticleConfig = {
  fpsLimit: 60,
  particles: {
    color: {
      value: '#ffffff',
    },
    move: {
      direction: 'top-right',
      enable: true,
      random: true,
      speed: 1,
      outMode: 'out',
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 20,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
};

const lightParticleConfig = {
  ...darkParticleConfig,
  particles: {
    ...darkParticleConfig.particles,
    color: {
      value: '#000000',
    },
  },
};
