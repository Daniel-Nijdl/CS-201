const express = require("express");
const app = express();
const { menu } = require("../02-Express-Tutorial/public/menu");

app
  .get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/menu">menu</a>');
  })
  .get("/api/menu", (req, res) => {
    const newMenu = menu.map((item) => {
      const { title } = item;
      return { title };
    });

    const cats = [
      ...new Set(
        menu.map((item) => {
          const cat = item.category;
          return cat;
        })
      ),
    ];

    res.json({ titles: [newMenu], categories: [cats] });
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Params Search
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .get("/api/menu/:id", (req, res) => {
    const { id } = req.params;
    const singleItem = menu.find((item) => {
      return item.id == Number(id);
    });
    if (!singleItem) {
      res.json({ results: [], message: "Item not found" });
    }
    res.json({ results: [singleItem], message: "Found" });
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Query Search
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // .get("/api/v1/query", (req, res) => {
  //   // console.log(req.query);
  //   const { search, limit } = req.query;
  //   //... creates a new nonmutable copy
  //   let sortedItems = [...menu];
  //   if (search) {
  //     sortedItems = sortedItems.filter((item) => {
  //       return item.category.includes(search);
  //     });
  //   }
  //   if (limit) {
  //     sortedProducts = sortedItems.slice(0, Number(limit));
  //   }
  //   if (sortedItems.length < 1) {
  //     // res.status(404).send("Product not found");
  //     return res.json({ results: [], message: "Product not found" });
  //   }
  //   res.json({ results: sortedItems, message: "Found" });
  // })

  .get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    //... creates a new nonmutable copy
    let sortedItems = [...menu];
    if (search) {
      sortedItems = sortedItems.filter((item) => {
        return item.category.includes(search);
      });
    }
    if (limit) {
      sortedItems = sortedItems.slice(0, Number(limit));
    }
    if (sortedItems.length < 1) {
      // res.status(404).send("Product not found");
      return res.json({ results: [], message: "Product not found" });
    }
    res.json({ results: sortedItems, message: "Found" });
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Asc and Dec Sort
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .get("/api/menu/v1/asc", (req, res) => {
    let newMenu = [...menu]
    newMenu = newMenu.sort((a, b) => a.price-b.price)


    res.json({ results: newMenu, message: "Found" });
  })

  .get("/api/menu/v1/dec", (req, res) => {
    let newMenu = [...menu]
    newMenu = newMenu.sort((a, b) => b.price-a.price)

    res.json({ results: newMenu, message: "Found" });
  })
  // 

  .all("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
  })
  .listen(3000, () => {
    console.log("server is listening on port 3000");
  });
