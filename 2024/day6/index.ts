import * as fs from "fs";
import { escape } from "querystring";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const map = lines.map((line) => {
    return line.split("");
  });

  let isVisible = true;

  const totalLines = map.length;
  const totalColumns = map[0].length;

  while (isVisible) {
    map.forEach((line, i) => {
      line.forEach((char, j) => {
        if (char === "^") {
          for (let k = i; k >= 0; k--) {
            // k ligne
            // j colonne

            if (map[k][j] === "#") {
              map[k + 1][j] = ">";
              break;
            } else {
              map[k][j] = "X";
            }

            if (k === 0) {
              isVisible = false;
              break;
            }
          }
        }

        if (char === "v") {
          for (let k = i; k >= 0; k++) {
            // k ligne
            // j colonne

            if (map[k][j] === "#") {
              map[k - 1][j] = "<";
              break;
            } else {
              map[k][j] = "X";
            }

            if (k + 1 >= totalLines) {
              isVisible = false;
              break;
            }
          }
        }

        if (char === "<") {
          for (let k = j; k < line.length; k--) {
            if (map[i][k] === "#") {
              map[i][k + 1] = "^";
              break;
            } else {
              map[i][k] = "X";
            }

            if (k < 0) {
              isVisible = false;
              break;
            }
          }
        }

        if (char === ">") {
          for (let k = j; k < line.length; k++) {
            if (map[i][k] === "#") {
              map[i][k - 1] = "v";
              break;
            } else {
              map[i][k] = "X";
            }

            if (k > totalColumns) {
              isVisible = false;
              break;
            }
          }
        }
      });
    });
  }

  let result = 0;

  map
    .flat()
    .join("")
    .split("")
    .forEach((char) => {
      if (char === "X") {
        result++;
      }
    });

  console.log(result);
};
console.time("Benchmark");

part1();

console.timeEnd("Benchmark");
