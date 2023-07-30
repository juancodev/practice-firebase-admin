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

window.addEventListener('load', () => {
  printProductList()
    .then((products) => {
      const listProducts = products.message.map(products => {
        const printProduct = `
        <ul>
          <li>${products.product.title}</li>
          <li>${products.product.description}</li>
          <li>${products.product.price}</li>
          <li>${products.product.image}</li>
        </ul>
        `;
        return printProduct;
      });
      productList.innerHTML = listProducts.join("");
    })
    .catch((error) => console.error(error));
});

btnAddProduct.addEventListener('click', () => {
  window.location.href = "./addproduct.html";
})