const fs = require("fs");
const path = require("path");

let increases = 0;

let INPUT = String(fs.readFileSync(path.join(__dirname, "../data.txt")))
  .split(require("os").EOL)
  .map(Number);

INPUT.forEach((n, i, a) => {
  if (n > a[i - 1]) {
    increases++;
  }
});

console.log("solution 1: ", increases);

increases = 0;
INPUT.forEach((n, i, a) => {
  let data = n + a[i + 1] + a[i + 2];
  let nData = a[i + 1] + a[i + 2] + a[i + 3];

  if (data < nData) {
    increases++;
  }
});

console.log("solution 2: ", increases);
