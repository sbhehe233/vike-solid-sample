export const getAssetUrlByEnv = (url: string) => {
  return import.meta.env.PROD ? url : url.replace("/public", "");
};
