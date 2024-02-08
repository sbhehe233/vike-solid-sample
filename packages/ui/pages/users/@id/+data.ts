// https://vike.dev/data
export { data };

import { PostQuery, client } from "/lib/query";
import type { PageContextServer } from "vike/types";
import { render } from "vike/abort";

const data = async (pageContext: PageContextServer) => {
  const { data, error } = await client.query(PostQuery, {
    id: Number(pageContext.routeParams?.id),
  });
  if (error) throw error;
  if (!data.postById)
    throw render(404, `Not found - ID: ${pageContext.routeParams?.id}`);
  return data.postById;
};
