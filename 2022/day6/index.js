const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const arr = [];
  lines[0].split('').every((char, index) => {
    if(arr.length === 4) {
      arr.shift();
    }
    arr.push(char);

    if(new Set(arr).size === 4) {
      console.log(index + 1);
      return false;
    }
    return true;
  })
}

part1();

const part2 = () => {
  const arr = [];
  lines[0].split('').every((char, index) => {
    if(arr.length === 14) {
      arr.shift();
    }
    arr.push(char);

    if(new Set(arr).size === 14) {
      console.log(index + 1);
      return false;
    }
    return true;
  })
}

part2();