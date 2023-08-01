const productList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

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

        const buttons = () => `
            <button id="btnUpdateProduct">Update product</button>
            <button id="btnDeleteProduct">Delete product</button>
          `
        const printProduct = `
          <ul class="listProduct">
            <li>Title: ${products.product.title}</li>
            <li>Description: ${products.product.description}</li>
            <li>Price: ${products.product.price}</li>
            <img src="${products.product.image}" />
            </ul>
            ${buttons()}
          `;
        return printProduct;
      });
      productList.innerHTML = listProducts.join("");

    })
    .catch((error) => console.error(error));

})

setTimeout(() => {
  const btnUpdateProduct = document.getElementById('btnUpdateProduct');
  if (btnUpdateProduct) {
    btnUpdateProduct.addEventListener('click', () => {
      window.location.href = "./updateproduct.html";
    })
  }
}, 6000);

btnAddProduct.addEventListener('click', () => {
  window.location.href = "./addproduct.html";
});

const getOneProduct = async (titleProduct) => {
  const oneProduct = await fetch(`http://localhost:3100/products?title=${titleProduct}`, {
    method: 'GET',
  });

  const getProduct = await oneProduct.json();

  return getProduct;
};

btnSearch.addEventListener('click', () => {
  const productDetails = inputSearch.value || '';

  // if (inputSearch.length === 0){

  // }
  getOneProduct(productDetails)
    .then((product) => console.log(product))
    .catch((error) => console.error(error));
});