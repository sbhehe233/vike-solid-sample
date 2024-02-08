import logoUrl from "/public/logo.svg";
import { getAssetUrlByEnv } from "/tools/env";

export default function Head() {
  return (
    <>
      <meta name="description" content="Demo showcasing Vike + Solid" />
      <link rel="icon" href={getAssetUrlByEnv(logoUrl)} />
    </>
  );
}
