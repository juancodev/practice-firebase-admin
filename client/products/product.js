const productList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');

const printProductList = async () => {
  const dataList = await fetch('http://localhost:3100/products', {
    method: 'GET',
  });
  const dataResult = await dataList.json();
  console.log(dataResult);
  return dataResult;
}

document.addEventListener('DOMContentLoaded', () => {

  printProductList()
    .then((products) => {
      const listProducts = products.message.map(products => {

        function updateProduct() {
          return window.location.href = `./updateproduct.html`;
        }

        const buttons = () => `
          <button id ="test" onclick ="updateProduct()">Update product</button>
          <button id ="btnDeleteProduct">Delete product</button>
        `
        const printProduct = `
        <ul>
          <li>${products.product.title}</li>
          <li>${products.product.description}</li>
          <li>${products.product.price}</li>
          <li>${products.product.image}</li>
          </ul>
          ${buttons()}
        `;
        return printProduct;
      });
      productList.innerHTML = listProducts.join("");

    })
    .catch((error) => console.error(error));

})

btnAddProduct.addEventListener('click', () => {
  window.location.href = "./addproduct.html";
});