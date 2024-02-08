import { usePageContext } from "vike-solid/usePageContext";

export default function Page() {
  const pageContext = usePageContext();

  let title: string; // Message shown to the user
  const { abortReason, abortStatusCode } = pageContext;
  if (abortStatusCode === 403) {
    // Handle `throw render(403)`
    title =
      "You cannot access this page because you don't have enough privileges.";
  } else if (abortStatusCode === 401) {
    // Handle `throw render(401)`
    title =
      "You cannot access this page because you aren't logged in. Please log in.";
  } else {
    // Fallback error message
    title = pageContext.is404
      ? "This page doesn't exist."
      : "Something went wrong. Sincere apologies. Try again (later).";
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{abortReason}</p>
    </>
  );
}

// When using TypeScript you can define the type of `abortReason`
declare global {
  namespace Vike {
    interface PageContext {
      abortReason?: string | { notAdmin: true };
    }
  }
}
