const form = document.getElementById('myForm');
const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
const priceProduct = document.getElementById('price');
const imageProduct = document.getElementById('image');
const clientID = 'f645880e6161cdc';

const saveANewProduct = async (product) => {
  const productData = await fetch('http://localhost:3100/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const newProduct = await productData.json();
  console.log(newProduct);
  return newProduct;
}

console.log(form);

document.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  console.log(formData);

  // fetch('https://api.imgur.com/3/image', {
  //     method: 'POST',
  //     headers: {
  //       'accept': '*/*',
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': `Client-ID ${clientID}`
  //     },
  //     body: formData
  //   })
  //   .then((response) => {
  //     response.json().then(data => console.log(data))
  //   }).catch((err) => console.log(err))

  const productValues = {
    title: titleProduct.value,
    description: descriptionProduct.value,
    price: priceProduct.value,
    image: imageProduct.value,
  }

  saveANewProduct(productValues)
    .then((response) => {
      console.log(response);
      window.location.href = "./index.html";
    })
    .catch((error) => console.log(error))
})

// console.log(productValues)
// saveANewProduct(productValues)
//   .then((response) => {
//     console.log(response);
//     window.location.href = "./index.html";
//   })
//   .catch((error) => console.log(error))