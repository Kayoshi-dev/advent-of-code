const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'UTF-8');

    const lines = data.split(/\r?\n/);

    let previous;
    let greater = 0;

    lines.forEach((value, index) => {
        if(index !== 0) {

            if(Number(value) > previous) {
                console.log(value, previous)
                greater++;
            }
        }

        previous = value;
    });

    console.log(greater)
} catch (err) {
    console.error(err);
}