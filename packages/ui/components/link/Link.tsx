import { usePageContext } from "vike-solid/usePageContext";

export default function Link(props: { href: string; children: string }) {
  const pageContext = usePageContext();
  const isActive = () =>
    props.href === "/"
      ? pageContext.urlPathname === props.href
      : pageContext.urlPathname?.startsWith(props.href);
  const classNames = () =>
    ["link", "link-primary", "link-hover", isActive() ? "font-bold" : null]
      .filter(Boolean)
      .join(" ");
  return (
    <a href={props.href} class={classNames()}>
      {props.children}
    </a>
  );
}
