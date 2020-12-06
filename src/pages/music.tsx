/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box, Flex, Heading, Image, Stack, Text, useColorMode, Wrap, WrapItem } from '@chakra-ui/react';
import Container from 'client/components/Container';
import fetcher from 'client/services/api';
import React from 'react';
import useSWR from 'swr';

export default function Index(): JSX.Element {
  const { data: recentTracks } = useSWR('/api/spotify/recentTracks', fetcher);
  const { data: topTracks } = useSWR('/api/spotify/topTracks', fetcher);
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
              topTracks.map((track: any) => (
                <WrapItem key={track.title}>
                  <Box minWidth="105px" maxWidth="105px">
                    <Image boxSize="105px" src={track.albumImageUrl} alt={track.album} />
                    <Box pt={1}>
                      <Text
                        fontWeight="medium"
                        maxWidth="105px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track.title}
                      </Text>
                      <Text
                        color="gray.500"
                        maxWidth="105px"
                        mb={2}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track.artist}
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
              recentTracks.map((track: any) => (
                <WrapItem key={track.title}>
                  <Box minWidth="105px" maxWidth="105px">
                    <Image boxSize="105px" src={track.albumImageUrl} alt={track.album} />
                    <Box pt={1}>
                      <Text
                        fontWeight="medium"
                        maxWidth="105px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track.title}
                      </Text>
                      <Text
                        color="gray.500"
                        maxWidth="105px"
                        mb={2}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="xs"
                      >
                        {track.artist}
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
