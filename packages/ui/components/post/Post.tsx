import type { PostItem } from "./types";
import { HR } from "/components/form";

export default function Post(post: PostItem) {
  return (
    <>
      <HR value={`Post ID: ${post.id}`} />
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <div class="card-actions justify-end">
            <div class="form-control">
              <label class="label cursor-pointer space-x-3">
                <span class="label-text">Published</span>
                <input
                  type="checkbox"
                  checked={post.published}
                  class="checkbox checkbox-success"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
