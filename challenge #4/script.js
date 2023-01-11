function lengthCheck(elem) {
  return elem.length > 4;
}

function largeArray(arr) {
  return arr.filter(lengthCheck);
}

function firstLetterLast(text) {
  return text.slice(1) + text[0];
}

function pointCalculator(text) {
  let point = 0;
  for (let i = 0; i < text.length; i++) {
    point += text.charCodeAt(i) - 64;
  }
  return point;
}

function myArray(arr) {
  let array = largeArray(arr);
  array.forEach(firstLetterLast);
  return array.sort();
}

function pointsArray(arr) {
  let array = myArray(arr);
  let finalArray = array.map((elem, index) => {
    return pointCalculator(elem) * (index + 1);
  });
  return finalArray;
}

function totalPoint(total, num) {
  return total + num;
}

const fs = require("fs");
fs.readFile("names.txt", (err, data) => {
  if (err) throw err;
  const text = data.toString();
  const arr = text.split('","');
  arr[0] = arr[0].slice(1);
  arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1);
  let totalPoints = pointsArray(arr).reduce(totalPoint);
  console.log(totalPoints);
});
