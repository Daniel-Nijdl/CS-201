const http = require("http");

http
  .createServer()
  .on("request", (req, res) => {
    const url = req.url;

    if(url === '/'){
      res.writeHead(200, {'content-type': 'text/html'});
      res.write(`<h1>Home Page</h1>`, () => {
        setTimeout(() => {
          res.end("ended")
        }, 5000);
      });
      // res.end()
    }

  })
  .listen(3000, () => {
    console.log("server is listening at port 3000");
  });
