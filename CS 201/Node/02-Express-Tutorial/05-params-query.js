const express = require("express");
const app = express();
const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
  })
  //create path at /api/products that displays products from data as a json => display name, id, image
  .get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image } = product;
      return { name, id, image };
    });
    res.json(newProducts);
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //This is a params search
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .get("/api/products/:id", (req, res) => {
    // console.log(req.params)
    const { id } = req.params;
    const singleProduct = products.find((product) => {
      return product.id == Number(id);
    });
    if (!singleProduct) {
      // res.status(404).send("Product not found");
      res.json({ results: [], message: "Product not found" });
    }
    res.json({ results: [singleProduct], message: "Found" });
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //query search for data
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    //... creates a new nonmutable copy
    let sortedProducts = [...products];
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedItems = sortedItems.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
      // res.status(404).send("Product not found");
      return res.json({ results: [], message: "Product not found" });
    }
    res.json({ results: sortedProducts, message: "Found" });
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  .all("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
  })
  .listen(3000, () => {
    console.log("server is listening on port 3000");
  });
