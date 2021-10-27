const { readFileSync, writeFileSync, write } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   './content/sync-result.txt',
//   `Here is the result \n${first}, \n${second} `,
//   {flag: 'w'}
// )

// writeFileSync(
//   './content/open.bat',
//   `start "iexplore.exe" http://www.website.com`,
//   {flag: 'a'}
// )

console.log(second)
console.log("finished");
console.log(first);


