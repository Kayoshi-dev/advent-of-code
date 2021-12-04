const fs = require('fs');

let lines;

try {
    const data = fs.readFileSync('input.txt', 'utf-8');

    lines = data.split(/\r?\n/).filter(l => l !== "");

} catch (err) {
    console.error(err);
}

const part1 = () => {
    let gamma = [];
    let epsilon = "";

    for (let i = 0; i < lines[0].length; i++) {

        let counterZero = 0;
        let counterOne = 0;

        lines.forEach(line => {
            if(Number(line[i]) === 0) {
                counterZero++;
            } else {
                counterOne++;
            }
        })

        if(counterZero > counterOne) {
            gamma.push(0);
        } else {
            gamma.push(1);
        }
    }

    gamma = gamma.join('');
    epsilon = parseInt([...gamma].map(num => Number(num) === 0 ? 1 : 0).join(''), 2);

    gamma = parseInt(gamma, 2);
    console.log(gamma * epsilon)
}

part1()

// TODO
const part2 = () => {
    const findOxygenGeneratorRating = () => {
        for (let i = 0; i < lines[0].length; i++) {
            let counterZero = 0;
            let counterOne = 0;
        }
    }

    const findCo2ScrubberRating = () => {

    }
}

part2()
