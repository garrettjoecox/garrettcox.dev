export type NowPlayingSpotifyResponse =
  | {
      is_playing: true;
      progress_ms: number;
      item: SpotifyTrack;
    }
  | {
      is_playing: false;
    };

export interface RecentTracksSpotifyResponse {
  items: {
    track: SpotifyTrack;
  }[];
}

export interface TopTracksSpotifyResponse {
  items: SpotifyTrack[];
}

export interface SpotifyItem {
  id: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  uri: string;
}

export interface SpotifyTrack extends SpotifyItem {
  name: string;
  type: 'track';
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
}

export interface SpotifyAlbum extends SpotifyItem {
  name: string;
  type: 'album';
  images: {
    height: number;
    width: number;
    url: string;
  }[];
}

export interface SpotifyArtist extends SpotifyItem {
  name: string;
  type: 'artist';
}
