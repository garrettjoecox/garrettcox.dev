import { Box, Image, Link, Progress, Skeleton, Stack, Text, useColorMode } from '@chakra-ui/react';
import fetcher from 'client/services/api';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const NowPlaying = () => {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const { data, revalidate } = useSWR('/api/spotify/nowPlaying', fetcher);
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.700',
  };

  useEffect(() => {
    if (data) {
      setDuration(data.duration_ms);
      setProgress(data.progress_ms);
    } else {
      setDuration(1);
      setProgress(0);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const i = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress > data.duration_ms) {
            revalidate();
          }

          return prevProgress + 1000;
        });
      }, 1000);

      return () => clearInterval(i);
    }
  }, [data]);

  return (
    <Box
      mb={4}
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      border="1px solid"
      borderRadius={8}
      borderColor={borderColor[colorMode]}
      p={1}
      w="300px"
    >
      <Skeleton isLoaded={data}>
        <Image
          alt="Spotify album cover"
          height="65px"
          width="65px"
          borderRadius={8}
          src={data?.albumImageUrl || '/placeholder.jpg'}
        />
      </Skeleton>
      <Stack
        flex={1}
        spacing={0}
        justifyContent="flex-end"
        alignItems="flex-start"
        display="flex"
        flexDirection="column"
        ml={3}
      >
        <Link
          fontWeight="medium"
          maxWidth="190px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          href={data?.songUrl}
          isExternal
        >
          {data && (data?.title || 'Not Playing')}
        </Link>
        <Text color="gray.500" maxWidth="190px" mb={2} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
          {data && (data?.artist || 'Spotify')}
        </Text>
        <Box w="95%" justifySelf="flex-end">
          <Skeleton isLoaded={data}>
            <Progress borderRadius={4} flex={1} size="xs" colorScheme="blue" value={(progress / duration) * 100} />
          </Skeleton>
        </Box>
      </Stack>
    </Box>
  );
};

export default NowPlaying;
