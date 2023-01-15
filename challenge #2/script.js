const fs = require("fs");
const readline = require("readline");
const numArr = new Array(20);
const array4x4 = new Array(4).fill(new Array(4).fill(1));

function findBiggest(arr) {
  let biggest = arr[0][0] * arr[1][1] * arr[2][2] * arr[3][3];
  if (biggest < arr[3][0] * arr[2][1] * arr[1][2] * arr[0][3]) {
    biggest = arr[3][0] * arr[2][1] * arr[1][2] * arr[0][3];
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let multiplication = 1;
      multiplication *= arr[i][j];
      if (multiplication > biggest) {
        biggest = multiplication;
      }
      let multiplication2 = 1;
      for (let m = 0; m < 4; m++) {
        multiplication2 *= arr[j][m];
        if (multiplication2 > biggest) {
          biggest = multiplication2;
        }
      }
    }
  }
  return biggest;
}

void (async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream("grid.txt"),
    crlfDelay: Infinity,
  });
  let lineNumber = 0;
  rl.on("line", (line) => {
    let text = line.toString();
    numArr[lineNumber] = text.split(" ");
    lineNumber++;
  });
  await new Promise((res) => rl.once("close", res));
  let finalResult = 0;
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      for (let m = 0; m < 4; m++) {
        for (let n = 0; n < 4; n++) {
          array4x4[m][n] = numArr[i + m][j + n];
        }
      }
      let big = findBiggest(array4x4);
      if (finalResult < big) {
        finalResult = big;
      }
    }
  }
  // array16x16.forEach((x) => findBiggest(x));
  console.log(finalResult);
})();
