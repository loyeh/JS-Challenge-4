const fs = require("fs");
const readline = require("readline");
const numArr = new Array(20);
function findBiggest(arr) {
  let biggest = arr[0][0] * arr[1][1] * arr[2][2] * arr[3][3];
  if (biggest < arr[3][0] * arr[2][1] * arr[1][2] * arr[0][3]) {
    biggest = arr[3][0] * arr[2][1] * arr[1][2] * arr[0][3];
  }
  for (let i = 0; i < 4; i++) {
    let multiplication = 1;
    for (let j = 0; j < 4; j++) {
      multiplication *= arr[i][j];
      if (multiplication > biggest) {
        biggest = multiplication;
      }
      for (let m = 0; m < 4; m++) {
        multiplication *= arr[j][m];
        if (multiplication > biggest) {
          biggest = multiplication;
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
  console.log(numArr);
})();
