// 4. Create a TTL index on a `sessions` collection for automatic expiration.

const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 }, // Expires after 1 hour (3600 seconds)
});

module.exports = mongoose.model("Session", sessionSchema);
