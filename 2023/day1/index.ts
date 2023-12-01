import fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  const numbersToAdd = lines.map((line) => {
    const numbers = line.replace(/[^0-9]/g, "");

    if (numbers.length === 1) {
      return +numbers.repeat(2);
    }

    const first = numbers[0];
    const last = numbers.slice(-1);

    return +`${first}${last}`;
  });

  console.log(
    numbersToAdd.reduce((acc, current) => {
      return acc + current;
    }, 0)
  );
};

part1();

const part2 = () => {
  const corresp = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const numbersAndProperties = [
    ...Array.from({ length: 9 }, (_, i) => i + 1),
    ...Object.keys(corresp),
  ].map((x) => `${x}`);

  const numbersListForLine = lines.map((line) => {
    const indexArray: { idx: number; word: string }[] = [];

    numbersAndProperties.forEach((numProp) => {
      const firstIndex = line.indexOf(numProp);
      const lastIndex = line.lastIndexOf(numProp);

      indexArray.push({ idx: firstIndex, word: numProp });
      indexArray.push({ idx: lastIndex, word: numProp });
    });

    const filteredArray = indexArray.filter((x) => x.idx !== -1);
    const [min, max] = [
      Math.min(...filteredArray.map((x) => x.idx)),
      Math.max(...filteredArray.map((x) => x.idx)),
    ];

    const firstNum = indexArray.find((x) => x.idx === min);
    const lastNum = indexArray.find((x) => x.idx === max);

    const isNum = (val: string | undefined) => /^-?\d+$/.test(val || "");

    return `${
      isNum(firstNum?.word)
        ? firstNum?.word
        : corresp[firstNum!.word as keyof typeof corresp]
    }${
      isNum(lastNum?.word)
        ? lastNum?.word
        : corresp[lastNum!.word as keyof typeof corresp]
    }`;
  });

  const x = numbersListForLine.reduce((acc, current) => {
    return +acc + +current;
  }, 0);

  console.log(x);
};

part2();
