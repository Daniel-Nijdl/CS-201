const http = require("http");

http
  .createServer()
  .on("request", (req, res) => {
    // if (req.url === "/")
    //   res.end(`
    // <style> h1{text-align: center} </style>
    // <h1>Welcome to Jenkins Special Puzzle</h1>
    // <p> The end of the first url is the first letter of the title backwards </p>
    // `);
    // else if(req.url === `/emoclew`) res.end(`
    // <style> h1{text-align: center} </style>
    // <h1>You have solved the first puzzle but there are many more to come</h1>
    // <p>  </p>`)
    // else res.end("That answer was wrong");
    switch (req.url) {
      // ========================================================================== //

      case "/":
        res.end(`<style> h1,p{text-align: center} span{text-decoration: underline}</style>  
    <h1>Welcome to Jenkins Special Puzzle</h1> 
    <p>Are you _ _ _ _ _ _ _ or should you go the <span>opposite</span> way? You're not the <span>first</span> one to come, but you will be the last. </p>`);

      // ========================================================================== //

      case "/emoclew":
        res.end(`<style>span{font-weight: bold} </style>
    <h1>You have solved puzzle #1</h1> 
    <p>Do you like it when I bake? Whats your favorite, <span>pi</span>e or cake? Its been a while, almost a <span>decade</span>. But can I have the <span>digits</span> of that girl named bridget?</p>`);

      // ========================================================================== //

      case "/3.1415926535":
        res.end(`<style> div{width: 50px; height: 50px; border: black solid 1px; z-index: 1;} main{display: grid; grid-template-columns: repeat(auto-fill, 50px); grid-gap: 25px;} .special:hover{background: #00fff6; height: 75px; width: 75px; z-index: 2; margin-right: 1rem;} span{font-weight: bold}</style>
    <h1>Amazing! You solved puzzle #2</h1>
    <p>You must find the largest square, it may be different but not bare. If you follow what I've made, you will likely find the <span>shade</span> </p>
    <main>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <a href="https://images.maritimeprofessional.com/images/storage/quebecflag.png"><div class="special"></img></div></a>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    </main>
`);

      // ========================================================================== //

      case "/yellow":
        res.end(`<style> p{color: white; text-align: center; padding-top: 359px } .hidden{display: none;} .unhide{display: block}
         .text{background: none!important; border: none; font-family: arial, sans-serif; padding: 0!important; font-size: 2rem; font-weight: bold; cursor: pointer; text-decoration: underline;} h1{font-family: arial, sans-serif;} </style>
        <script>  function alertBox() {
          alert("The opposite of yes is what you possess.");
        }

        function toggleVis() {
          var x = document.getElementId("secret");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }

         </script>
    <h1>Can you <button class="text" onClick="toggleVis()">solve</button> whats been lost? </h1>
    <button id="secret" onClick="alertBox()">Click Me!</button>`);

      case "/no":
        res.end(`Decipher the code and follow the instructions.`);

      default:
        res.end(`That answer was incorrect, try again`);
    }
  })
  .listen(3000);

//   const http = require("http");

// http
//   .createServer()
//   .on("request", (req, res) => {
//     if(req.url === '/') res.end("welcome")
//     else res.end("404")
//   })
//   // .on("test")
//   // .on("load", () => {    console.log("server is listening at port 3000");
//   // })
//   .listen(3000, () => {
//     console.log("server is listening on port 3000");
//   })
