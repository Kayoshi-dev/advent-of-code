import * as fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const chunks: Array<string[]> = [];
  let result = 0;

  lines.forEach((line, i) => {
    // Horizontal
    const xmasOrSamx = /(?=(XMAS|SAMX))/g;
    result += line.match(xmasOrSamx)?.length ?? 0;

    const numRows = lines.length;
    const numCols = lines[0].length;

    line.split("").forEach((char, j) => {
      if (i + 3 < numRows && j + 3 < numCols) {
        // bottom right
        chunks.push([
          char,
          lines[i + 1][j + 1],
          lines[i + 2][j + 2],
          lines[i + 3][j + 3],
        ]);
      }

      if (i + 3 < numRows && j - 3 >= 0) {
        // bottom left
        chunks.push([
          char,
          lines[i + 1][j - 1],
          lines[i + 2][j - 2],
          lines[i + 3][j - 3],
        ]);
      }

      if (i - 3 >= 0 && j + 3 < numCols) {
        // top right
        chunks.push([
          char,
          lines[i - 1][j + 1],
          lines[i - 2][j + 2],
          lines[i - 3][j + 3],
        ]);
      }

      if (i - 3 >= 0 && j - 3 >= 0) {
        // top left
        chunks.push([
          char,
          lines[i - 1][j - 1],
          lines[i - 2][j - 2],
          lines[i - 3][j - 3],
        ]);
      }

      if (i - 3 >= 0) {
        // vertical up
        chunks.push([char, lines[i - 1][j], lines[i - 2][j], lines[i - 3][j]]);
      }

      if (i + 3 < numRows) {
        // vertical down
        chunks.push([char, lines[i + 1][j], lines[i + 2][j], lines[i + 3][j]]);
      }
    });
  });

  chunks.forEach((x) => {
    const str = x.join("");
    if (str === "XMAS" || str.split("").reverse().join("") === "SAMX") {
      result++;
    }
  });
  console.log(result);
};

part1();