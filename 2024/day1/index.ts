import * as fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const lefts: number[] = [];
  const rights: number[] = [];
  let totalDistance = 0;

  lines.forEach((line) => {
    const [left, right] = line.split("   ");

    lefts.push(parseInt(left));
    rights.push(parseInt(right));
  });

  lines.forEach(() => {
    const minLeft = Math.min(...lefts);
    const minRight = Math.min(...rights);

    lefts.splice(lefts.indexOf(minLeft), 1);
    rights.splice(rights.indexOf(minRight), 1);

    const distance = Math.abs(minLeft - minRight);

    totalDistance += distance;
  });

  console.log(totalDistance);
};

part1();

const part2 = () => {
  const lefts: number[] = [];
  const rights: number[] = [];
  let total = 0;

  lines.forEach((line) => {
    const [left, right] = line.split("   ");

    lefts.push(parseInt(left));
    rights.push(parseInt(right));
  });

  lefts.forEach((x) => {
    const multiplier = rights.filter((y) => x === y).length;

    total += x * multiplier;
  });

  console.log(total);
};

part2();
