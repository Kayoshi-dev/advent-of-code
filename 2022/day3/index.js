const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const alphabet = [...Array(26)]
  .map((_, i) => String.fromCharCode(i + 97))
  .concat([...Array(26)].map((_, i) => String.fromCharCode(i + 65)));

const part1 = () => {
  const result = lines.reduce((acc, current) => {
    const middle = current.length / 2;

    const firstHalf = current.slice(0, middle).split("");
    const secondHalf = current.slice(middle).split("");

    const commonLetter = firstHalf.filter((char) => secondHalf.includes(char));

    return (acc += alphabet.indexOf(commonLetter[0]) + 1);
  }, 0);

  console.log(result);
};

part1();

const part2 = () => {
  const linesArray = [];
  let score = 0;

  lines.forEach((el) => {
    linesArray.push(el);

    if (linesArray.length === 3) {
      let obj = {};
      const newLines = linesArray.map((el) => new Set(el.split("")));

      newLines.forEach((set) => {
        set.forEach((char) => {
          obj[char] = obj[char] + 1 || 1;

          if (obj[char] === 3) {
            score += alphabet.indexOf(char) + 1;
          }
        });
      });

      obj = {};
      linesArray.splice(0, linesArray.length);
    }
  });

  console.log(score);
};

part2();
