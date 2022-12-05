const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const containers = [...Array(9)].map(() => []);

  lines.every((line, index) => {
    if(index === 8) {
      return false; 
    }

    let column = 0;

    while (column < 9) {
      const char = line.charAt(4 * column + 1);
      if(char !== ' ') {
        containers[column].push(char);
      }
      column++;
    }

    return true;
  })

  for (let index = 10; index < lines.length; index++) {
    const [number, from, to] = lines[index].split(' ').map((item) => parseInt(item, 10)).filter((item) => Number.isInteger(item));

    const chosenOnes = containers[from -1].splice(0, number).reverse();

    containers[to - 1] = [...chosenOnes, ...containers[to - 1]];
  }

  console.log(containers.map(container => container[0]).join(''));
}

part1();

const part2 = () => {
  const containers = [...Array(9)].map(() => []);

  lines.every((line, index) => {
    if(index === 8) {
      return false; 
    }

    let column = 0;

    while (column < 9) {
      const char = line.charAt(4 * column + 1);
      if(char !== ' ') {
        containers[column].push(char);
      }
      column++;
    }

    return true;
  })

  for (let index = 10; index < lines.length; index++) {
    const [number, from, to] = lines[index].split(' ').map((item) => parseInt(item, 10)).filter((item) => Number.isInteger(item));

    const chosenOnes = containers[from -1].splice(0, number);

    containers[to - 1] = [...chosenOnes, ...containers[to - 1]];
  }

  console.log(containers.map(container => container[0]).join(''));
}

part2();