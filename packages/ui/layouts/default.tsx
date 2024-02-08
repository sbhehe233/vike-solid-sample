import "./style.scss";
import { Link } from "/components/link";
import type { JSX } from "solid-js";
import logoUrl from "/public/logo.svg";
import { getAssetUrlByEnv } from "/tools/env";

type Props = { children?: JSX.Element };

function Sidebar(props: Props) {
  return <div class="basis-1/4">{props.children}</div>;
}

function Content(props: Props) {
  return <div class="grow">{props.children}</div>;
}

function Logo() {
  return (
    <div class="container">
      <a href="/">
        <img
          src={getAssetUrlByEnv(logoUrl)}
          class="h-24 object-cover"
          alt="logo"
        />
      </a>
    </div>
  );
}

export default function Layout(props: Props) {
  return (
    <>
      <div
        data-theme="cupcake"
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-w-screen min-h-screen flex flex-col p-8"
      >
        <div class="mx-auto bg-white rounded-xl shadow-md p-8 flex flex-grow w-6/12">
          <Sidebar>
            <Logo />
            <div class="flex flex-col space-y-1 p-4">
              <Link href="/">Home</Link>
              <Link href="/feeds">Feeds</Link>
              <Link href="/users">Users</Link>
              <Link href="/counter">Counter</Link>
            </div>
          </Sidebar>
          <Content>{props.children}</Content>
        </div>
      </div>
      <div class="fixed right-5 bottom-1 text-white">
        © {new Date().getFullYear()}
      </div>
    </>
  );
}
