export default function Header() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-10">
      <p className="text-xs tracking-widest uppercase text-gray-400">{date}</p>

      <h1 className="text-5xl font-serif">
        My <em className="text-green-700">tasks</em>
      </h1>

      <p className="text-gray-400 text-sm">Keep it simple. Get things done.</p>
    </div>
  );
}
