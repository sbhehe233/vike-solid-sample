import type { InlineConfig } from "vite";

const root = process.cwd();

export default async function viteConfig() {
  const vpvs = (await import("vike-solid/vite")).default as any;
  return {
    root,
    plugins: [vpvs()],
    server: {
      middlewareMode: true,
    },
    appType: "custom",
  } as InlineConfig;
}
