const http = require("http");
const { readFileSync } = require("fs");

//import all of the files
const homePage = readFileSync("./app/index.html");
const homeStyles = readFileSync("./app/styles.css");
const homeImage = readFileSync("./app/logo.svg");
const homeLogic = readFileSync("./app/browser-app.js");

http
  .createServer()
  .on("request", (req, res) => {
    const url = req.url;
    console.log(url);

    //home page
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      // res.end();
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
    } else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>File not found</h1>");
      // res.end();
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("server is listening on port 3000");
  });
