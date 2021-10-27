const http = require(`http`);
const fs = require(`fs`);

http
  .createServer()
  .on(`request`, (req, res) => {
    const fileStream = fs.createReadStream(`./content/big.txt`, `utf8`);
    //pipe is a file stream method that allows us to return a value to a server
    fileStream.on(`open`, () => {
      fileStream.pipe(res);
    });
    fileStream.on(`error`, () => {
      res.end(err);
    });
  })
  .listen(3000);
