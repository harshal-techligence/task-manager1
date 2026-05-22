export default function FilterSortBar({ filter, setFilter, sort, setSort }) {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* FILTER */}
      <div className="flex gap-2">
        {["all", "pending", "done"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs border ${
              filter === f ? "bg-green-700 text-white" : "text-gray-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-2 py-1 rounded-xl text-xs"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}
