// 2. Write logging middleware that logs HTTP method, URL path, and timestamp.
const express = require("express");
const app = express();

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Example route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
