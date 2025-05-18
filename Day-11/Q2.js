// 2. Stream-pipe a large file to the HTTP response in manageable chunks.

const http = require("http");
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "largefile.txt"); 

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(FILE_PATH);
  res.writeHead(200, { "Content-Type": "text/plain" });
  readStream.pipe(res);

  readStream.on("error", (err) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("File not found or error reading file.");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
