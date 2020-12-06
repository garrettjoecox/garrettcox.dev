/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box, Flex, Heading, Image, Stack, Text, useColorMode, Wrap, WrapItem } from '@chakra-ui/react';
import Container from 'client/components/Container';
import fetcher from 'client/services/api';
import React from 'react';
import useSWR from 'swr';

export default function Index(): JSX.Element {
  const { data: recentTracks } = useSWR('/api/spotify/recentTracks', fetcher, { revalidateOnFocus: false });
  const { data: topTracks } = useSWR('/api/spotify/topTracks', fetcher, { revalidateOnFocus: false });
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
          <Text color={occupationColor[colorMode]} mb={8}>
            This is a collection of my favorite albums and recent tracks pulled from Spotify.
          </Text>
          {/* <Heading letterSpacing="tight" mb={2} size="lg">
            Favorite Albums
          </Heading> */}
          <Heading letterSpacing="tight" mb={4} size="lg">
            Tracks On Rotation
          </Heading>
          <Wrap justify="center">
            {topTracks &&
              topTracks.slice(0, 6).map((track: any) => (
                <WrapItem>
                  <Box minWidth="110px" maxWidth="110px">
                    <Image boxSize="110px" src={track.albumImageUrl} alt={track.album} />
                    <Box pt={1}>
                      <Text
                        fontWeight="medium"
                        maxWidth="110px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track && (track?.title || 'Not Playing')}
                      </Text>
                      <Text
                        color="gray.500"
                        maxWidth="110px"
                        mb={2}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track && (track?.artist || 'Spotify')}
                      </Text>
                    </Box>
                  </Box>
                </WrapItem>
              ))}
          </Wrap>
          <Heading letterSpacing="tight" mb={4} size="lg">
            Recently Played
          </Heading>
          <Wrap justify="center">
            {recentTracks &&
              recentTracks.slice(0, 6).map((track: any) => (
                <WrapItem>
                  <Box minWidth="110px" maxWidth="110px">
                    <Image boxSize="110px" src={track.albumImageUrl} alt={track.album} />
                    <Box pt={1}>
                      <Text
                        fontWeight="medium"
                        maxWidth="110px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track && (track?.title || 'Not Playing')}
                      </Text>
                      <Text
                        color="gray.500"
                        maxWidth="110px"
                        mb={2}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track && (track?.artist || 'Spotify')}
                      </Text>
                    </Box>
                  </Box>
                </WrapItem>
              ))}
          </Wrap>
        </Flex>
      </Stack>
    </Container>
  );
}
