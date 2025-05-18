// 4. Asynchronously read and parse a JSON file from the filesystem.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json"); // Replace with your JSON file name

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log("Parsed JSON:", jsonData);
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
