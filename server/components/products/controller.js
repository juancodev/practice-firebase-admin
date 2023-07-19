const store = require('./store');

function addProduct(product) {
  return new Promise((resolve, reject) => {
    if (Object.entries(product).length === 0) {
      console.log("[ProductsController]: Product doesn't have content, the product is empty");
      reject('There is no product');
    }

    store.add(product);
    resolve(product);
  });
};

function getProducts() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  addProduct,
  getProducts
}