import { useEffect, useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import Progress from "./components/Progress";
import TaskInput from "./components/TaskInput";
import FilterSortBar from "./components/FilterSortBar";
import TaskItem from "./components/TaskItem";
import ToastContainer from "./components/ToastContainer";

const API = "http://localhost:5000/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [toasts, setToasts] = useState([]);

  // LOAD TASKS
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTasks(data);
    } catch {
      showToast("Failed to load tasks");
    }
  }

  // TOAST SYSTEM
  function showToast(msg) {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  }

  // ADD TASK
  async function addTask(title) {
    if (!title.trim()) return;

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const newTask = await res.json();
      setTasks((prev) => [newTask, ...prev]);

      showToast("Task added");
    } catch {
      showToast("Failed to add task");
    }
  }

  // TOGGLE TASK
  async function toggleTask(id, checked) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: task.title,
          completed: checked ? 1 : 0,
        }),
      });

      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, completed: checked ? 1 : 0 } : t,
        ),
      );

      showToast(checked ? "Marked done" : "Moved to pending");
    } catch {
      showToast("Update failed");
    }
  }

  // DELETE TASK
  async function deleteTask(id) {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });

      setTasks((prev) => prev.filter((t) => t.id !== id));

      showToast("Task removed");
    } catch {
      showToast("Delete failed");
    }
  }

  // FILTER LOGIC
  let visible = tasks.filter((t) => {
    if (filter === "pending") return !t.completed;
    if (filter === "done") return t.completed;
    return true;
  });

  // SORT LOGIC
  visible = [...visible].sort((a, b) => {
    if (sort === "newest") return b.id - a.id;
    if (sort === "oldest") return a.id - b.id;
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "za") return b.title.localeCompare(a.title);
    if (sort === "pending") return a.completed - b.completed;
    if (sort === "done") return b.completed - a.completed;
    return 0;
  });

  const done = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen max-w-xl mx-auto px-6 py-12 bg-sand">
      <ToastContainer toasts={toasts} />

      <Header />

      <Stats tasks={tasks} />

      <Progress tasks={tasks} done={done} />

      <TaskInput onAdd={addTask} />

      <FilterSortBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className="mt-6">
        {visible.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
