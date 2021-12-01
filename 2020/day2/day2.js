const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8')
const input = data.split('\r\n');

let numberAllowedPassword1 = 0;
let numberAllowedPassword2 = 0;

function part1() {
    input.forEach(i => {
        //Get Policy and Password value
        let [policy, password] = i.split(":");
        //Get Number in the policy and the letter
        const [number, letter] = policy.split(" ");

        const [first, last] = number.split("-");

        password = password.trim();

        if(password.includes(letter)) {
            let count = password.split(letter).length -1;
            if(count >= first && count <= last) {
                numberAllowedPassword1++;
            }
        }
    });

    console.log("resultat : " + numberAllowedPassword1);
}

function part2() {
    input.forEach(i => {
        //Get Policy and Password value
        let [policy, password] = i.split(":");
        //Get Number in the policy and the letter
        const [number, letter] = policy.split(" ");

        const [first, last] = number.split("-");

        password = password.trim();

        let firstLetterAt = password[first - 1];
        let lastLetterAt = password[last - 1];

        if((firstLetterAt === letter) !== (lastLetterAt === letter)) {
            numberAllowedPassword2++;
        }
    });

    console.log("resultat : " + numberAllowedPassword2);
}

part1();
part2();