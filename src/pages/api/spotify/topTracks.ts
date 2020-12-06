import { NextApiRequest, NextApiResponse } from 'next';
import cache, { CacheKey } from 'server/services/cache';
import { getTopTracks } from 'server/services/spotify';
import { TopTracksSpotifyResponse } from 'types/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = JSON.parse((await cache.get(CacheKey.TopTracks)) as string) as TopTracksSpotifyResponse;

  if (!data) {
    data = await getTopTracks();

    await cache.set(CacheKey.TopTracks, JSON.stringify(data), 'EX', 60 * 60 * 24); // TTL 24 Hours
  }

  const tracks = data.items.slice(0, 6).map((track) => ({
    title: track.name,
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    artist: track.artists.map((a) => a.name).join(', '),
    songUrl: track.external_urls.spotify,
  }));

  return res.status(200).json(tracks);
};
