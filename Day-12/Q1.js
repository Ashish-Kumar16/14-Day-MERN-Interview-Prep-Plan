// 1. Build CRUD routes for a `users` resource (`GET`, `POST`, `PUT`, `DELETE`).

const express = require("express");
const app = express();
app.use(express.json());

let users = []; // In-memory users array
let idCounter = 1;

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST create a new user
app.post("/users", (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// PUT update a user by id
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });
  users[idx] = { ...users[idx], ...req.body };
  res.json(users[idx]);
});

// DELETE a user by id
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });
  users.splice(idx, 1);
  res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
