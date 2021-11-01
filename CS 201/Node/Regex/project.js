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


// //*Problem #2 Part 1

const re2 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(°)/g;



let numbers = re2.exec(text);
let numString = ''

while (numbers) {
  // console.log( numbers[0].replace(/[a-zA-Z]/g, ""))
  numbers[0].replace(/[a-zA-Z]/g, "")

  numString += numbers[0].replace(/[a-zA-Z]/g, "")

   numbers = re2.exec(text);
}


var b = numString.split('°').map(Number);

// console.log(b);

let newArr = []

for (let i = 0; i < b.length; i++) {
  if (b[i] < 256 & b[i] > 0) {
    newArr.push(b[i]);
  }
}

// console.log(newArr);

// console.log(newArr.toString().replace(/[,]/, '°'))
console.log(newArr);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


// //*Problem #2 Part 2

const re3 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(')/g;



let numbers2 = re3.exec(text);
let numString2 = ''

// console.log(numbers[0]);

while(numbers2){
  // console.log(numbers2[0].replace(/[a-zA-Z]/g, ""));
  numbers2[0].replace(/[a-zA-Z]/g, "")

  numString2 += numbers2[0].replace(/[a-zA-Z]/g, "")

  numbers2 = re3.exec(text);
}

// console.log(numString2);


var c = numString2.split("'").map(Number);

// console.log(c);

let newArr2 = []

for (let i = 0; i < c.length; i++) {
  if (c[i] < 64 & c[i] > 0) {
    newArr2.push(c[i]);
  }
}

// console.log((newArr2).toString().replace(/[,]/, "'"))
console.log(newArr2);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


// //*Problem #2 Part 3

const re4 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\.)/g;



let numbers3 = re4.exec(text);
let numString3 = ''

// console.log(numbers[0]);

while(numbers3){
  // console.log(numbers2[0].replace(/[a-zA-Z]/g, ""));
  numbers3[0].replace(/[a-zA-Z]/g, "")

  numString3 += numbers3[0].replace(/[a-zA-Z]/g, "")

  numbers3 = re4.exec(text);
}

// console.log(numString2);


var d = numString3.split(".").map(Number);

// console.log(c);

let newArr3 = []

for (let i = 0; i < d.length; i++) {
  if (d[i] < 64 & d[i] > 0) {
    newArr3.push(d[i]);
  }
}

// console.log((newArr3).toString().replace(/[,]/g, "."))
console.log(newArr3);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


// //*Problem #2 Part 4

const re5 = /(\d)[a-zA-Z]{3,}(")[a-z]{3,}([NEWS])/g;



let numbers4 = re5.exec(text);

let numString4 = ''

// console.log(numbers4[0]);

let directString = ''

while(numbers4){
  // console.log(numbers4[1]+ numbers4[2] + numbers4[3] );
  directString += (numbers4[3])
  numbers4[0].replace(/[a-z]/g, "")

  numString4 += numbers4[0].replace(/[a-zA-Z]/g, "")

  // directString += numbers4[0].replace(/[a-z]/g, "")

  // firstDirection += numbers4[1] + numbers4[2] + numbers4[3]

  numbers4 = re5.exec(text);
}

// console.log(directString);

var f = directString.split('')

// console.log(f);

let firstDirection = f[2]
let secondDirection = f[4]


var e = numString4.split('"').map(Number);



// console.log(e);

let newArr4 = []

for (let i = 0; i < e.length; i++) {
  if (e[i] < 8 & e[i] > 0) {
    newArr4.push(e[i]);
  }
}

// let finalDirections = '';
finalFirst = newArr4[0] + '"' + firstDirection 
finalSecond = newArr4[1] + '"' + secondDirection
finalDirections = []
finalDirections.push(finalFirst)
finalDirections.push(finalSecond)

console.log(finalDirections)
// console.log(`${newArr[0]}${numbers4[0]}`);
// console.log(firstDirection);
// console.log(finalDirections);

let firstCoords = ''
firstCoords = newArr[0] + "°" + newArr2[0] + "'" + newArr3[0] + '.' + newArr4[0] + '"' + finalFirst

let secondCoords = ''
secondCoords = newArr[1] + "°" + newArr2[1] + "'" + newArr3[1] + '.' + newArr4[1] + '"' + finalSecond
console.log(firstCoords);
console.log(secondCoords);





// //*Problem #2 Part 1

// let testStr = 'a[this'

// const re2 = /(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(\d)[a-zA-Z]{3,}(°)/g;
// const re = /([a-zA-Z]{1,7})(\[)([a-zA-Z]{1,7})[^ ]/g
const re = /\[([\w.]+)\s|\s([\w.]+)\]/g;

let bracket = re.exec(text)

let finalMessage = ''

while(bracket){
  let temp = `${bracket[1] || bracket[2]}`

  temp = temp.split('').filter((char) => isNaN(char)).join('')
  
// console.log(temp);


if(!temp){
  bracket = re.exec(text)

  continue
}

finalMessage+= `${temp}`

console.log(temp);
bracket = re.exec(text)
}

// text += `\n${finalMessage}`
console.log(finalMessage);

// console.log(bracket[1] || bracket[2]);


