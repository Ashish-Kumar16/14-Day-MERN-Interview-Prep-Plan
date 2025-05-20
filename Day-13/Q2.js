// 2. Connect to MongoDB with retry logic and handle connection errors.

const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/mydatabase"; 
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

let retries = 0;

function connectWithRetry() {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      retries++;
      console.error(`MongoDB connection error: ${err.message}`);
      if (retries < MAX_RETRIES) {
        console.log(
          `Retrying connection (${retries}/${MAX_RETRIES}) in ${
            RETRY_DELAY_MS / 1000
          } seconds...`,
        );
        setTimeout(connectWithRetry, RETRY_DELAY_MS);
      } else {
        console.error("Max retries reached. Could not connect to MongoDB.");
        process.exit(1);
      }
    });
}

connectWithRetry();
