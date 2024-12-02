import * as fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  let safeReports = 0;

  lines.forEach((line) => {
    const numbers = line.split(" ");

    let previousValue: number | null = null;

    let isCorrect = true;

    const checkIncr = (a: number, b: number) => {
      return a < b ? "incr" : "decr";
    };

    const isIncreasing = checkIncr(parseInt(numbers[0]), parseInt(numbers[1]));

    numbers

      .map((el) => parseInt(el))

      .forEach((number) => {
        if (previousValue) {
          const diff = Math.abs(previousValue - number);

          const isIncreasingPrev = checkIncr(previousValue, number);

          if (diff >= 1 && diff <= 3 && isIncreasing === isIncreasingPrev) {
            previousValue = number;
          } else {
            isCorrect = false;
          }
        } else {
          previousValue = number;
        }
      });

    if (isCorrect) {
      safeReports++;
    }
  });

  console.log(safeReports);
};

part1();
