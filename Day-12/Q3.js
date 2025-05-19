// 3. Use `express.json()` and `express.urlencoded({ extended: true })` to parse request bodies.

const express = require("express");
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route to test body parsing
app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => console.log("Server running on port 3000"));
