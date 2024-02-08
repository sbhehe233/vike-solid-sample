import type { Config } from "vike/types";
import Layout from "/layouts/default";
import vikeConfig from "vike-solid/config";

export default {
  Layout,
  title: "Template",
  extends: vikeConfig,
} satisfies Config;
