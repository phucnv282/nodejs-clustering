const express = require("express");
const port = 3000;
console.log("test");

const app = express();
console.log(`Worker number ${process.pid} started`);

app.get("/", (req, res) => {
  res.send("Hi there! This application does not use clustering...");
});

app.get("/api/nocluster", (req, res) => {
  console.time("noClusterApi");
  const base = 8;
  let result = 0;
  for (let i = Math.pow(base, 7); i >= 0; --i) {
    result += i + Math.pow(i, 10);
  }
  console.timeEnd("noClusterApi");

  console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
  res.send(`Result number is ${result}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
