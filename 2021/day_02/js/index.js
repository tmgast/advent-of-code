const fs = require("fs");
const path = require("path");

let INPUT = String(fs.readFileSync(path.join(__dirname, "../data.txt")))
  .trim()
  .split(require("os").EOL);

coords = {
  x: 0,
  y: 0,
  aim: 0,
};

function move(dir, spd) {
  if (dir === "forward") {
    coords.x += Number(spd);
  } else if (dir === "up") {
    coords.y -= Number(spd);
  } else {
    coords.y += Number(spd);
  }
}

INPUT.map((val) => {
  move(...val.trim().split(" "));
});

console.log("solution 1: ", coords.x * coords.y);

coords = {
  x: 0,
  y: 0,
  aim: 0,
};

function vector_move(dir, spd) {
  if (dir === "forward") {
    coords.x += Number(spd);
    coords.y += coords.aim * Number(spd);
  } else if (dir === "up") {
    coords.aim -= Number(spd);
  } else {
    coords.aim += Number(spd);
  }
}

INPUT.map((val) => {
  vector_move(...val.trim().split(" "));
});

console.log("solution 2: ", coords.x * coords.y);
