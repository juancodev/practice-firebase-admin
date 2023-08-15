const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
const priceProduct = document.getElementById('price');
const imageProduct = document.getElementById('image');
const btnUpdate = document.getElementById('btnUpdate');


const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
console.log(productID);

const getProductByID = async (id) => {
  const productData = await fetch(`http://localhost:3100/products?id=${id}`, {
    method: 'GET',
  });
  const resultData = await productData.json();

  return resultData;
}

const updateAProduct = async (idProduct, changeProduct) => {
  const productData = await fetch(`http://localhost:3100/products/${idProduct}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changeProduct),
  });
  const resultUpdateData = await productData.json();
  console.log(resultUpdateData);
  return resultUpdateData;
}

document.addEventListener('DOMContentLoaded', () => {
  getProductByID(productID)
    .then((returnProduct) => {
      titleProduct.value = returnProduct.message.title;
      descriptionProduct.value = returnProduct.message.description;
      priceProduct.value = returnProduct.message.price;
      imageProduct.value = returnProduct.message.image;
    })
    .catch((error) => console.error(error));
})

btnUpdate.addEventListener('click', () => {
  const titleUpdate = titleProduct.value;
  const descriptionUpdate = descriptionProduct.value;
  const priceUpdate = priceProduct.value;
  const imageUpdate = imageProduct.value;

  const changeProduct = {
    title: titleUpdate,
    description: descriptionUpdate,
    price: priceUpdate,
    image: imageUpdate,
  }
  updateAProduct(productID, changeProduct)
    .then(() => window.location.href = './index.html')
    .catch((error) => console.log(error));
})