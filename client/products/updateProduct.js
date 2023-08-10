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
  const productData = await fetch(`http://localhost:3100/${idProduct}`, {
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

btnUpdate.addEventListener('click', () => {

  // TODO: get data of product by id
  getProductByID(productID)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
})