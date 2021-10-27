const { writeFileSync, write } = require("fs");

// writeFileSync("./content/big.txt", ``, { flag: "w" });
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `this is ling ${i}\n`, { flag: "a" });
}
