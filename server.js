const http = require("http");
const hostname = "127.0.0.1"; //실행 후 연결 안됨
//const hostname = "43.201.250.106"; // 오류 발생 - Public IPv4 address
//const hostname = "172.31.8.80"; //실행은 되지만 연결시간 초과로 연결 안됨 - Private IPv4 addresses

const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});
server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running at http://${hostname}:${port}/`);
});
