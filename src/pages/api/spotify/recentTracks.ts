import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentTracks } from 'server/services/spotify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getRecentTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map(({ track }: any) => ({
    title: track.name,
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    artist: track.artists.map((a: any) => a.name).join(', '),
    songUrl: track.external_urls.spotify,
  }));

  return res.status(200).json(tracks);
};
