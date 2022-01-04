const url = "/api/v1/products";
const url2 = "/api/v1/cart"
// const fileDOM = document.querySelector(".wrapper");

const wrapper = document.querySelector(".wrapper");

async function update() {
  try {
    const {
      data: { products },
    } = await axios.get(url);
    const tempProducts = products
      .map((each) => {
        // console.log(each);
        return `
      <div class="box">
      <img src="${each.image}" alt="${each.name}" class="prod-img"/>
      <span class="caption">${each.name}</span><span class="caption price">$${each.price}</span>
      <button class="cartAdd button" onClick="addToCart('${each._id}')">Add to Cart</button>
      </div>
      `;
      })
      .join("");
    wrapper.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}



async function addToCart(id) {
  console.log(id);
  try {
    const { product } = await axios.post(url2, {id});
    console.log(product);
  } catch (error) {
    console.log(error);
  }
}
