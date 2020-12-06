export default async function Fetcher(route: string, ...args: any) {
  const res = await fetch(route, ...args);

  return res.json();
}
