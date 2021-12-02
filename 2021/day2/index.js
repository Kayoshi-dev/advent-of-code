const fs = require('fs');

let lines;

try {
    const data = fs.readFileSync('input.txt', 'utf-8');

    lines = data.split(/\r?\n/);

} catch (err) {
    console.error(err);
}

const part1 = () => {
    let x = 0;
    let y = 0;

    lines.forEach(line => {
        const [direction, num] = line.split(' ');

        // +num convert to number, it's like using Number()
        if(direction === 'forward') {
            x = x + +num;
        } else if(direction === 'down') {
            y = y + +num;
        } else if(direction === 'up') {
            y = y - +num;
        }
    });

    console.log(x * y);
}

part1();

const part2 = () => {
    let x = 0;
    let y = 0;
    let aim = 0;

    lines.forEach(line => {
        const [direction, num] = line.split(' ');

        // +num convert to number, it's like using Number()
        // Magnificient coding skill
        // I love +++++++++++
        if(direction === 'forward') {
            x = x + +num;
            y = y + (aim * +num)
        } else if(direction === 'down') {
            aim = aim + +num;
        } else if(direction === 'up') {
            aim = aim - +num;
        }
    });

    console.log(x * y);
}

part2();