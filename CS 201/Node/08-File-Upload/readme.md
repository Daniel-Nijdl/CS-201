# Models

### Product

- Name\*

  - String
  - Required

- Price\*

  - Number
  - Required

- Image\*
  - String(URL to the image storage)
  - Required

# Controllers

### Uploading

- uploadImage
  - Takes a req.file and places that file on the local storage

### Products

- createProducts

  - Create a document on the DB of a new product

- getAllProducts
  - Find all products on DB

# Routes

### productsRoute

- '/'

  - post - createProduct
  - get - getAllProducts

- '/uploads'
- post - uploadProductImage