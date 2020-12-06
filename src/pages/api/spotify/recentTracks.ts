import { NextApiRequest, NextApiResponse } from 'next';
import cache, { CacheKey } from 'server/services/cache';
import { getRecentTracks } from 'server/services/spotify';
import { RecentTracksSpotifyResponse } from 'types/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = JSON.parse((await cache.get(CacheKey.RecentTracks)) as string) as RecentTracksSpotifyResponse;

  if (!data) {
    data = await getRecentTracks();

    await cache.set(CacheKey.RecentTracks, JSON.stringify(data), 'EX', 60 * 5); // TTL 5 Minutes
  }

  const tracks = data.items.slice(0, 6).map(({ track }) => ({
    title: track.name,
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    artist: track.artists.map((a) => a.name).join(', '),
    songUrl: track.external_urls.spotify,
  }));

  return res.status(200).json(tracks);
};
