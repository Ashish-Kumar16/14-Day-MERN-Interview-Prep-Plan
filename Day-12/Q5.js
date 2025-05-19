// 5. Integrate Helmet and configure CORS to allow requests from specific origins.

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

// Use Helmet for security headers
app.use(helmet());

// Configure CORS to allow requests from specific origins
const allowedOrigins = ["http://localhost:3000", "https://yourdomain.com"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("Not allowed by CORS"), false);
      }
      return callback(null, true);
    },
  }),
);

// Example route
app.get("/", (req, res) => {
  res.send("Helmet and CORS configured!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
