import * as fs from "fs";

let lines: string[];

try {
  const data = fs.readFileSync("input.txt", "utf-8");

  lines = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

const part1 = () => {
  let result = 0;
  const dividerIndex = lines.indexOf("");
  const rules = lines.slice(0, dividerIndex);
  const updates = lines.slice(dividerIndex + 1);

  updates.forEach((update) => {
    const updateArray = update.split(",").map((u) => parseInt(u, 10));
    const middleIndex = Math.floor(updateArray.length / 2);

    const middleNumber = updateArray[middleIndex];
    const listToMatch: Array<number> = [...updateArray];

    rules.forEach((rule) => {
      const [left, right] = rule.split("|").map((r) => parseInt(r, 10));

      if (
        update.includes(left.toString()) &&
        update.includes(right.toString())
      ) {
        const firstIndex = listToMatch.indexOf(left);
        const secondIndex = listToMatch.indexOf(right);

        if (firstIndex > secondIndex) {
          // swap the elements in the array
          const temp = listToMatch[firstIndex];

          listToMatch[firstIndex] = listToMatch[secondIndex];

          listToMatch[secondIndex] = temp;
        }
      }
    });

    if (updateArray.join("") === listToMatch.join("")) {
      result += middleNumber;
    }
  });

  console.log(result);
};
part1();

// const part2 = () => {
//   let result = 0;
//   const dividerIndex = lines.indexOf("");
//   const rules = lines.slice(0, dividerIndex);
//   const updates = lines.slice(dividerIndex + 1);

//   updates.forEach((update) => {
//     const updateArray = update.split(",").map((u) => parseInt(u, 10));
//     const middleIndex = Math.floor(updateArray.length / 2);

//     const listToMatch: Array<number> = [...updateArray];

//     let isIncorrect = false;

//     rules.forEach((rule) => {
//       const [left, right] = rule.split("|").map((r) => parseInt(r, 10));
//       const copy = [...listToMatch];

//       if (
//         update.includes(left.toString()) &&
//         update.includes(right.toString())
//       ) {
//         const firstIndex = listToMatch.indexOf(left);
//         const secondIndex = listToMatch.indexOf(right);

//         if (firstIndex > secondIndex) {
//           // swap the elements in the array
//           const temp = listToMatch[firstIndex];

//           listToMatch[firstIndex] = listToMatch[secondIndex];

//           listToMatch[secondIndex] = temp;

//           if (copy.join("") !== listToMatch.join("")) {
//             isIncorrect = true;
//           }
//         }
//       }
//     });

//     console.log("updated", isIncorrect);
//     console.log({ updateArray, listToMatch });

//     if (isIncorrect) {
//       result += listToMatch[middleIndex];
//     }
//   });

//   console.log(result);
// };
// part2();
