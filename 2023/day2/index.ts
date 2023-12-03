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
