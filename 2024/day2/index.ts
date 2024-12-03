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

const part2 = () => {
  let safeReports = 0;

  const isValid = (numbers: number[]): boolean => {
    let isIncreasing = numbers[0] < numbers[1];

    for (let i = 1; i < numbers.length; i++) {
      const diff = Math.abs(numbers[i] - numbers[i - 1]);
      const isIncreasingNow = numbers[i] > numbers[i - 1];

      if (diff < 1 || diff > 3 || isIncreasingNow !== isIncreasing) {
        return false;
      }
    }

    return true;
  };

  lines.forEach((line) => {
    const numbers = line.split(" ").map(Number);

    if (isValid(numbers)) {
      safeReports++;
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      const filteredNumbers = numbers.filter((_, index) => index !== i);

      if (isValid(filteredNumbers)) {
        safeReports++;
        return;
      }
    }
  });

  console.log(safeReports);
};

part2();
