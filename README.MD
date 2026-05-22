Here’s a **clean, simple, and professional README** you can directly use for your Task Manager project 👇

---

```md
# 📝 Task Manager App

A simple full-stack Task Manager web application built using **React**, **Node.js**, **Express**, and **SQLite**.  
It helps users manage daily tasks with add, update, delete, filter, and sort features.

---

## 🚀 Features

- ➕ Add new tasks
- ✔️ Mark tasks as completed / pending
- 🗑️ Delete tasks
- 🔍 Filter tasks (All / Pending / Done)
- ↕️ Sort tasks (Newest, Oldest, A-Z, Z-A)
- 📊 Live progress tracking
- 🔔 Toast notifications for actions
- 💾 Persistent storage using SQLite

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- SQLite3
- REST API

---

## 📂 Project Structure

```

task-manager/
│
├── backend/        # Express + SQLite server
├── frontend/       # React app
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
````

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /tasks     | Get all tasks      |
| POST   | /tasks     | Create new task    |
| PUT    | /tasks/:id | Update task status |
| DELETE | /tasks/:id | Delete task        |

---


---



---

