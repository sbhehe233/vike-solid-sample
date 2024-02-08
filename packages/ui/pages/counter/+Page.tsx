import { Counter } from "/components/counter";

export default function Page() {
  return (
    <div class="space-y-3">
      <p class="text-4xl">Welcome</p>
      <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-purple-500">
        Rendered to HTML - interactive
      </h1>
      <p>
        {" "}
        <Counter />{" "}
      </p>
    </div>
  );
}
