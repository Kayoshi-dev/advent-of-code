import * as fs from "fs";

let lines: string;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data;
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const regex = /mul\(\d+,\d+\)/g;
  console.log(
    lines
      .match(regex)
      ?.map((x) =>
        x
          .split(",")
          .map((y) => y.replace(/[^-.0-9]/g, ""))
          .map((u) => parseInt(u))
          .reduce((p, c) => p * c)
      )
      .reduce((a, b) => a + b)
  );
};

part1();

const part2 = () => {
  let isEnabled = true;
  const regex = /mul\(\d+,\d+\)|(do\b)|(don't\b)/g;
  console.log(
    lines
      .match(regex)
      ?.map((x) => {
        isEnabled = x === "do" ? true : x === "don't" ? false : isEnabled;
        return x !== "do" && x !== "don't"
          ? x
              .split(",")
              .map((y) => y.replace(/[^-.0-9]/g, ""))
              .map((u) => parseInt(u))
              .reduce((p, c) => (isEnabled ? p * c : 0))
          : undefined;
      })
      .filter((el) => el !== undefined)
      .reduce((a, b) => a! + b!)
  );
};

part2();
