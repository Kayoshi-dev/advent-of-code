const fs = require("fs");

let lines;

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const sum = lines.reduce((acc, current) => {
    const [elf, player] = current.replace(/[AX]+/g, 'A'.charCodeAt(0) - 64).replace(/[BY]+/g, 'B'.charCodeAt(0) - 64).replace(/[CZ]+/g, 'C'.charCodeAt(0) - 64).split(" ").map(el => parseInt(el, 10));

    if (player === 1 && elf === 3) {
      return acc + 6 + player;
    }

    if (player === 3 && elf === 1) {
      return acc + player;
    }

    if(elf === player) {
      console.log("Tie");
      return acc + 3 + player;
    }

    if(elf > player) {
      console.log("Elf wins");
      return acc + player;
    }

    if(elf < player) {
      console.log("Player wins");

      return acc + 6 + player;
    }
  }, 0);

  console.log(sum);
}

part1();

const part2 = () => {
  const sum = lines.reduce((acc, current) => {
    const [elf, goal] = current.split(' ');

    // Need to lose
    if(goal === "X") {
      // Rock
      if(elf === "A") {
        return acc + 3;
      }

      // Paper
      if(elf === "B") {
        return acc + 1;
      }

      else {
        return acc + 2;
      }
    }

    // Need to draw
    if(goal === "Y") {
      return acc + 3 + elf.charCodeAt(0) - 64;
    }

    // Need to win
    if(goal === "Z") {
      // Rock
      if(elf === "A") {
        return acc + 8;
      }

      // Paper
      if(elf === "B") {
        return acc + 9;
      }

      else {
        return acc + 7;
      }
    }
  }, 0);

  console.log(sum);
}

part2();