import { prerender } from "vike/prerender";
import type { InlineConfig } from "vite";
import vikeConfig from "/server/config";

(async () => {
  const config = await vikeConfig();
  await prerender({
    viteConfig: {
      ...config,
      ...{ prerender: true },
    } as InlineConfig,
  });
})();
