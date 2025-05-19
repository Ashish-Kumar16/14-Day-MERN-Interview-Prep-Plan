// 4. Serve static assets (images, CSS, JS) from a `public` directory.

const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Example route
app.get("/", (req, res) => {
  res.send("Static assets are served from the public directory.");
});

app.listen(3000, () => console.log("Server running on port 3000"));
