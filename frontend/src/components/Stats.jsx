export default function Stats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const left = total - done;

  return (
    <div className="flex gap-6 mb-6">
      <div>Total: {total}</div>
      <div>Done: {done}</div>
      <div>Left: {left}</div>
    </div>
  );
}
