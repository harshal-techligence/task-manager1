export default function Progress({ tasks, done }) {
  const total = tasks.length;
  const pct = total ? (done / total) * 100 : 0;

  return (
    <div className="bg-white border p-4 rounded-xl mb-6">
      <div className="flex justify-between mb-2">
        <span>Progress</span>
        <span className="text-green-700">
          {done} / {total}
        </span>
      </div>

      <div className="h-1 bg-gray-200 rounded-full">
        <div
          className="h-1 bg-green-700 fill-bar rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
