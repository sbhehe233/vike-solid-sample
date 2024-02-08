import { User } from "/components/user";
import type { Profile } from "/components/user";
import { useData } from "vike-solid/useData";
import { For } from "solid-js";

export default function Page() {
  const profiles = useData<Profile[]>();
  return (
    <div class="space-y-3">
      <p class="text-4xl">All Users</p>
      <div>
        <For each={profiles}>{(profile) => <User {...profile} />}</For>
      </div>
    </div>
  );
}
