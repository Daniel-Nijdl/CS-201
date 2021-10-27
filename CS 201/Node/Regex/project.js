const { readFileSync, writeFileSync } = require("fs");

//*Problem #1

const text = readFileSync("coded.txt", "utf8");
// const str = text.toString();

// const re1 = /@[a-zA-Z]+/g
// const re1 = /(?<=@)[a-zA-Z]+/g;

// let match = re1.exec(str);

// let string = "";

// while (match) {
//   string += match[0];
//   match = re1.exec(str);
// }

// for(i = 0; i < string.length; i = i+18){
//   console.log(string.substr(i, 18));
// }

// console.log(string);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// //*Problem #2

const re2 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(°)/g;



let numbers = re2.exec(text);

while (numbers) {
  console.log( numbers[0].replace(/[a-zA-Z]/g, ""))
  numbers[0].replace(/[a-zA-Z]/g, "")

   numbers = re2.exec(text);
}

