export default function Row(props: { title: string; value: string }) {
  return (
    <div class="flex flex-col pb-3">
      <dt class="mb-1 text-gray-500">{props.title}</dt>
      <dd class="text-lg font-semibold">{props.value}</dd>
    </div>
  );
}
