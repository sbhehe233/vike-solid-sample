// https://vike.dev/data
export { data };

import { UserQuery, client } from "/lib/query";

const data = async () => {
  const { data, error } = await client.query(UserQuery, {});
  if (error) throw error;
  return data.allUsers;
};
