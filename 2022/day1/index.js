const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const calories = [];
  let caloriesCounter = 0;

  lines.forEach((line) => {
    if (line.length === 0) {
      calories.push(caloriesCounter);
      caloriesCounter = 0;
    } else {
      caloriesCounter = caloriesCounter + parseInt(line);
    }
  });

  console.log(Math.max(...calories));
};

part1();

// What a beautiful solution
const part2 = () => {
  const calories = [];
  let caloriesCounter = 0;

  lines.forEach((line) => {
    if (line.length === 0) {
      calories.push(caloriesCounter);
      caloriesCounter = 0;
    } else {
      caloriesCounter = caloriesCounter + parseInt(line);
    }
  });

  const sorted = calories.sort((a, b) => a - b).reverse();
  console.log(sorted[0] + sorted[1] + sorted[2]);
};

part2();
