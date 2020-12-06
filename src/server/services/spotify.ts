/* eslint-disable @typescript-eslint/naming-convention */
import querystring from 'querystring';
import { NowPlayingSpotifyResponse, RecentTracksSpotifyResponse, TopTracksSpotifyResponse } from 'types/spotify';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async (): Promise<NowPlayingSpotifyResponse> => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((response) => {
    if (response.status === 204 || response.status > 400) {
      return { is_playing: false };
    }

    return response.json();
  });
};

export const getTopTracks = async (): Promise<TopTracksSpotifyResponse> => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((response) => response.json());
};

export const getRecentTracks = async (): Promise<RecentTracksSpotifyResponse> => {
  const { access_token } = await getAccessToken();

  return fetch(RECENT_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((response) => response.json());
};
