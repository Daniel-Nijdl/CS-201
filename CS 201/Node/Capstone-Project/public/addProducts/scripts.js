const url = '/api/v1/products';
const fileFormDOM = document.querySelector('.file-form');
// const uploadCon = require("../controllers/uploadCon");

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');

const container = document.querySelector('.container');
let imageValue;

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      header: {
        'Content-type': 'multipart/form-data',
      },
    });
    imageValue = src;
  } catch (err) {
    console.log(err);
  }
});

fileFormDOM.addEventListener('submit', (e) => {
  e.preventDefault()
  const response = axios.post(`${url}/uploads/product`, {name: nameInput.value, price: priceInput.value, image: imageValue})
  console.log(response);
})