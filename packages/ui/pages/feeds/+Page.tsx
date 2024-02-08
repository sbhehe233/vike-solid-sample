import { Post } from "/components/post";
import type { PostItem } from "/components/post";
import { useData } from "vike-solid/useData";
import { For } from "solid-js";

export default function Page() {
  const feed = useData<PostItem[]>();

  return (
    <div class="space-y-3">
      <p class="text-4xl">Welcome</p>
      <For each={feed}>{(post) => <Post {...post} />}</For>
    </div>
  );
}
