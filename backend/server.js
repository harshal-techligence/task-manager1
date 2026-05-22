const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = new sqlite3.Database("./tasks.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed INTEGER DEFAULT 0
  )
`);

// GET all tasks
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks ORDER BY id DESC", (err, rows) => {
    res.json(rows);
  });
});

// ADD task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  db.run(
    "INSERT INTO tasks (title, completed) VALUES (?, 0)",
    [title],
    function () {
      res.json({
        id: this.lastID,
        title,
        completed: 0,
      });
    },
  );
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  db.run(
    "UPDATE tasks SET title=?, completed=? WHERE id=?",
    [title, completed, id],
    function () {
      res.json({ updated: true });
    },
  );
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM tasks WHERE id=?", [id], function () {
    res.json({ deleted: true });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
