import redis from 'redis';
import { promisify } from 'util';

const { REDIS_HOST: host, REDIS_PORT: port, REDIS_PASSWORD: password } = process.env;

const client = redis.createClient({
  host,
  port: parseInt(port!, 10),
  password,
  tls: {},
});

export enum CacheKey {
  RecentTracks = 'RecentTracks',
  TopTracks = 'TopTracks',
  NowPlaying = 'NowPlaying',
}

export const get = promisify(client.get).bind(client);
export const set = promisify(client.set).bind(client) as (
  key: string,
  value: string,
  mode: string,
  duration: number,
) => void;

export default {
  get,
  set,
};
