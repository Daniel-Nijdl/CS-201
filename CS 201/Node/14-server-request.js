const http = require("http");

http
  .createServer()
  .on("request", (req, res) => {
    if(req.url === '/') res.end("welcome")
    else res.end("404")
  })
  // .on("test")
  // .on("load", () => {    console.log("server is listening at port 3000");
  // })
  .listen(3000, () => {
    console.log("server is listening on port 3000");
  })