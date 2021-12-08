const fs = require("fs");
const path = require("path");

let increases = 0;

String(fs.readFileSync(path.join(__dirname, "../data.txt")))
  .split(require("os").EOL)
  .map(Number)
  .forEach((n, i, a) => {
    if (n > a[i - 1]) {
      increases++;
    }
  });

console.log(increases);
