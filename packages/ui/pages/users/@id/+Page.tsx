import { Post } from "/components/post";
import type { PostItem } from "/components/post";
import { useData } from "vike-solid/useData";

export default function Page() {
  const post = useData<PostItem>();
  return (
    <>
      <Post {...post} />
    </>
  );
}
