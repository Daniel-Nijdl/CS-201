const str = "test1 test_01.js coding.css script.js testing.coding";
// const re = /test/ //single search
const re = /test/g; //global search

console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));
console.log(str.replace(re, "scriptin"));
