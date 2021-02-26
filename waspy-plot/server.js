const fs = require("fs");
const http = require("http");
const PORT = 3000;
const dataFile = "./data.csv";

const data = fs.readFileSync(dataFile, { encoding: "utf8", flag: "r" });

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
