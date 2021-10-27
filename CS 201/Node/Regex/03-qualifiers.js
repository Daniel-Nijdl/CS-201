//phone numbers
//(123) 123 1234
//123-123-1234
//1234567890
//(123)123-1234

const str1 = '(123)123 1234'
const str2 = '123-123-1234'
const str3 = '1234567890'
const str4 = '(123)123-1234'

const re = /^\(?[0-9]{3}[\)-]?[0-9]{3}[ -]?[0-9]{4}$/

console.log(re.test(str1));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



//checking if a number is between 0 and 100
const num1 = '3'; //✅
const num2 = '92'; //✅
const num3 = '100'; //✅
const num4 = '101'; //❌
const num5 = '04'; //❌

const re2 = /^[0-9]$|^[1-9][0-9]$|^100$/

console.log(
  re2.test(num1),
  re2.test(num2),
  re2.test(num3),
  re2.test(num4),
  re2.test(num5),
);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


//checks a password to make sure it is 
//1. starts with 3 letters, capital or lowercase
//2. any 1 optional special character
//3. ends in 1 or more even numbers

const pass1 = 'yEs!4826'
const pass2 = 'yes!4862'
const pass3 = 'yEs&48'
const pass4 = 'yEss48'
const pass5 = 'ys!4826'

const re3 = /^[a-zA-Z]{3}[^a-zA-Z0-9 \n\t]?[02468]+$/

console.log(
  re3.test(pass1),
  re3.test(pass2),
  re3.test(pass3),
  re3.test(pass4),
  re3.test(pass5),
);


