import * as fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const sum = lines.reduce((acc, line, idx) => {
    const sets = line.split(";");

    const setsNumberColor = sets.map((set) =>
      // Dumbass
      set.match(/\b(?:[0-9]|1[0-9]|2[0-9]) (red|blue|green)\b/g)
    );

    const xy = setsNumberColor
      .map((set) => {
        const bag = {
          blue: 0,
          red: 0,
          green: 0,
        };

        set?.forEach((el) => {
          console.log(el);
          const [number, color] = el.split(" ");

          bag[color as keyof typeof bag] += +number;
        });

        if (bag.red <= 12 && bag.green <= 13 && bag.blue <= 14) {
          return true;
        }

        return false;
      })
      .every((el) => el === true);

    if (xy) {
      return acc + idx + 1;
    }

    return acc;
  }, 0);

  console.log(sum);
};

part1();

const part2 = () => {
  const sum: number[] = [];
  lines.map((line) => {
    const group = line.match(/\b(?:[0-9]|1[0-9]|2[0-9]) (red|blue|green)\b/g);

    const bag = {
      green: 0,
      red: 0,
      blue: 0,
    };

    group?.forEach((gr) => {
      const [num, color] = gr.split(" ");

      if (+num > bag[color as keyof typeof bag]) {
        bag[color as keyof typeof bag] = +num;
      }
    });

    sum.push(
      Object.values(bag).reduce((acc, cur) => {
        if (acc === 0) {
          return acc + cur;
        }
        return acc * cur;
      }, 0)
    );
  });

  console.log(sum.reduce((acc, cur) => acc + cur));
};

part2();
