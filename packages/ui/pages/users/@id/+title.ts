export { title };

import type { PostItem } from "/components/post";
import type { PageContext } from "vike/types";

function title(pageContext: PageContext<PostItem>) {
  const post = pageContext.data;
  return post?.title || "";
}
