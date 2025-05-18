// 5. Use the `cluster` module to fork worker processes and balance HTTP requests.

const cluster = require("cluster");
const http = require("http");
const os = require("os");

const PORT = 3000;

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one.`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(PORT, () => {
      console.log(`Worker ${process.pid} started on port ${PORT}`);
    });
}
