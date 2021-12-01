const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8')
const input = data.split('\r\n');

function part1(right, down) {
    let lineLength = input[0].length;
    let x = 0;
    let y = 0;
    let numberOfTrees = 0;

    while(y < input.length) {
        const currentX = x % lineLength;

        if(input[y][currentX] === "#") {
            numberOfTrees++;
        }

        x += right;
        y += down;
    }

    return numberOfTrees;
}

function part2() {
    const slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ]

    let result = 1;

    slopes.forEach(slope => {
        result *= part1(slope[0], slope[1]);
    })

    return result;
}

console.log(part1(3, 1));
console.log(part2());