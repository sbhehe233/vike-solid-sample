import type { Profile } from "./types";
import { For } from "solid-js";
import { Row } from "/components/form";
import { HR } from "/components/form";
import { Link } from "/components/link";

export default function User(profile: Profile) {
  return (
    <>
      <HR value={`User ID: ${profile.id}`} />
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <dl class="max-w-md text-gray-900 divide-y divide-gray-200">
            <Row title={"Name"} value={profile.name} />
            <Row title={"Email"} value={profile.email} />
          </dl>
          <h2 class="mb-2 text-lg font-semibold">Posts:</h2>

          <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <For each={profile.posts}>
              {({ id }) => (
                <li>
                  <Link href={`/users/${id}`}>Post {id || ""}</Link>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
