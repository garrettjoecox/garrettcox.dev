import { NextApiRequest, NextApiResponse } from 'next';
import cache, { CacheKey } from 'server/services/cache';
import { getNowPlaying } from 'server/services/spotify';
import { NowPlayingSpotifyResponse } from 'types/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = JSON.parse((await cache.get(CacheKey.NowPlaying)) as string) as NowPlayingSpotifyResponse;

  if (!data) {
    data = await getNowPlaying();

    await cache.set(
      CacheKey.NowPlaying,
      JSON.stringify({ ...data, cached_at: Date.now() }),
      'PX',
      data.is_playing ? Math.min(1000 * 60, data.item.duration_ms - data.progress_ms) : 1000 * 60,
    ); // TTL 60 Seconds or Duration - Progress
  }

  if (!data.is_playing) {
    return res.status(200).json({
      isPlaying: false,
    });
  }

  const isPlaying = data.is_playing;
  const title = data.item.name;
  const artist = data.item.artists.map((a: any) => a.name).join(', ');
  const album = data.item.album.name;
  const albumImageUrl = data.item.album.images[0].url;
  const songUrl = data.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    progress_ms: data.progress_ms,
    duration_ms: data.item.duration_ms,
  });
};
