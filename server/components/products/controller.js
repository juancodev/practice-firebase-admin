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

function getOnlyProduct(titleProduct) {
  return new Promise((resolve, reject) => {
    if (!titleProduct) {
      console.log("[ProductsController]: Product doesn't have title for search, the title product is empty");
      reject('There is no title product');
    }

    resolve(store.only(titleProduct));
  })
}

function updateProduct(id, changeProduct) {
  return new Promise(async (resolve, reject) => {
    if (!id || !changeProduct) {
      console.log('[updateProduct] Error Data');
      reject('Data invalid in method patch');
    };

    const result = await store.update(id, changeProduct);
    resolve(result);
  });
}

function deleteProduct(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log('[deleteProduct] Error Data');
      reject('Data invalid in method delete');
    };

    const result = await store.delete(id);
    resolve(result);
  });
}

module.exports = {
  addProduct,
  getProducts,
  getOnlyProduct,
  updateProduct,
  deleteProduct,
}