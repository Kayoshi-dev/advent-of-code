const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8')
const input = data.split('\r\n').map(Number)

function part1() {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; j++) {
            if(input[i] + input[j] === 2020) {
                console.info(input[i] * input[j]);
                break;
            }
        }
    }
}

function part2() {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; j++) {
            for(let k = 0; k < input.length; k++) {
                if(input[i] + input[j] + input[k] === 2020) {
                    console.info(input[i] * input[j] * input[k]);
                    break;
                }
            }
        }
    }
}

part1()
part2()