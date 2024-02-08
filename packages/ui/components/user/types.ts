export type Profile = {
  id: string;
  name: string;
  email: string;
  posts?: { id: string }[];
};
