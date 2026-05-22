import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-3 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (onAdd(text), setText(""))}
        className="flex-1 border p-3 rounded-xl"
        placeholder="Add task..."
      />

      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
        className="bg-green-700 text-white px-5 rounded-xl"
      >
        Add
      </button>
    </div>
  );
}
