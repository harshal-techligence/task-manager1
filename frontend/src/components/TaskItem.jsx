export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between border-b py-3 fade-up">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={!!task.completed}
          onChange={(e) => onToggle(task.id, e.target.checked)}
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>

      <button onClick={() => onDelete(task.id)}>❌</button>
    </div>
  );
}
