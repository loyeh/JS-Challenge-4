//from 1 to 9
let from_1_to_9 = "ONE TWO THREE FOuR FIVE SIX SEVEN EIGHT NINE";
const arr1to9 = from_1_to_9.split(" ");

//from 10 to 19
let from_11_to_19 =
  "ELEVEN TWELVE THIRTEEN FOURTEEN FIFTEEN SIXTEEN SEVENTEEN EIGHTEEN NINETEEN";
const arr11to19 = from_11_to_19.split(" ");

//from 20 to 90
let from_10_to_90 = "ten twenty thirty forty fifty sixty seventy eighty ninety";
const arr10to90 = from_10_to_90.split(" ");

//from 100 to 900 is similar to 1 to nine plus hundered foreach

const arr100to900 = arr1to9.map((num) => {
  return num + "hundredand";
});

// console.log(arr100to900);
const obj = {};
for (let i = 1; i < 10; i++) {
  key1to9 = "" + i;
  key11to19 = "1" + i;
  key10to90 = i + "0";
  key100to900 = i + "00";
  obj[key1to9] = arr1to9[i - 1];
  obj[key11to19] = arr11to19[i - 1];
  obj[key10to90] = arr10to90[i - 1];
  obj[key100to900] = arr100to900[i - 1];
}
// console.log(obj);

//takes a number and convert it to words
function number_to_word_converter(num) {
  let text = "";
  let key_one = num % 10;
  let key_ten = (num % 100) - key_one;
  let key_hundred = (num % 1000) - key_ten - key_one;
  if (obj[key_hundred]) {
    text += obj[key_hundred];
  }
  if(10<num<20){}
  if (obj[key_ten]) {text+=obj[key11to19]
    text += obj[key_ten];
  }
  if (obj[key_one]) {
    text += obj[key_one];
  }
  if (num % 100 === 0) {
    text.replace("and", "");
  }

  return text;
}

// console.log(number_to_word_converter(886));

//calculate number of charectors from 1 to 999 in words without spaces in between thrm
function number_of_charectors(n, m) {
  let number_of_chars = 0;
  for (let i = n; i < m; i++) {
    number_of_chars += number_to_word_converter(i).length;
  }
  return number_of_chars;
}
// console.log(number_of_charectors(1, 1000));

let arr = new Array(25);
for (let i = 98; i < 123; i++) {
  arr[i - 1] = number_to_word_converter(i);
}

console.log(arr);
