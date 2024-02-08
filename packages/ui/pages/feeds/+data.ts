// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import { FeedQuery, client } from "/lib/query";

const data = async () => {
  const { data, error } = await client.query(FeedQuery, {});
  if (error) throw error;
  return data.feed;
};
