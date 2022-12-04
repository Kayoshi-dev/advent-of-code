const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const list = [];
  let score = 0;

  lines.forEach(line => {
    list.push(line);
  
    const [firstHalf, secondHalf] = line.split(",");

    const [first, second] = firstHalf.split("-");
    const [third, fourth] = secondHalf.split("-");

    console.log(first);

    if(+first <= +third && +second >= +fourth || +first >= +third && +second <= +fourth) {
      score++;
    }

      list.splice(0, list.length);
  });

  console.log(score);
}

part1();

const part2 = () => {
  const list = [];
  let score = 0;

  lines.forEach(line => {
    list.push(line);
  
    const [firstHalf, secondHalf] = line.split(",");

    const [first, second] = firstHalf.split("-");
    const [third, fourth] = secondHalf.split("-");

    // hmmmmmm wanna kms
    if(+first >= +third && +first <= fourth || +second >= +third && +second <= fourth || +third >= +first && +third <= second || +fourth >= +first && +fourth <= +second) {
      score++;
    }
  })

  console.log(score);
}

part2();