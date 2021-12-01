const fs = require('fs');

let lines;

try {
    const data = fs.readFileSync('input.txt', 'UTF-8');

    lines = data.split(/\r?\n/);

} catch (err) {
    console.error(err);
}

const part1 = () => {
    let previous;
    let greater = 0;

    lines.forEach((value, index) => {
        if (index !== 0) {

            if (Number(value) > previous) {
                greater++;
            }
        }

        previous = value;
    });

    console.log(greater)
}

part1();

// Trying some functional code lmao
const part2 = () => {
    let counter = 0;
    let previous = 0;

    lines
        .map(v => Number(v))
        .map((v, i, arr) => arr.slice(i, i + 3))
        .filter(chunk => chunk.length === 3)
        .map(chunk => chunk.reduce((prev, cur) => prev + cur))
        .map((v, i) => {
            // I'm too bad in functional programming sorry
            if(i !== 0) {
                if(v > previous) counter++;
            }

            previous = v;
        });

    console.log(counter);
}

part2();