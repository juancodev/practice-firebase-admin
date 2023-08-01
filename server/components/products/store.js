const db = require('./model');

async function addProduct(product) {
  const docRef = db.collection('products');
  return await docRef.add(product);
}

async function getAllProducts() {
  const snapshot = await db.collection('products').get();

  // snapshot.docs.map((product) => console.log(product.data().category.path));
  return snapshot.docs.map((product) => {
    return {
      id: product.id,
      product: product.data()
    }
  });
}

async function getOnlyProduct(title) {
  const productReference = db.collection('products');
  const snapshot = await productReference.where('title', '==', title).get();

  if (snapshot.empty) {
    console.error('No matching!!');
    return;
  }

  return snapshot.docs.map((product) => {
    return {
      id: product.id,
      product: product.data()
    }
  })
}

async function updateProduct(id, change) {
  const product = db.collection('products').doc(id);

  const updateChange = await product.update(change);

  return updateChange;
}

async function deleteProduct(id) {
  const productDeleted = await db.collection('products').doc(id).delete();

  return productDeleted;
}

module.exports = {
  add: addProduct,
  list: getAllProducts,
  only: getOnlyProduct,
  update: updateProduct,
  delete: deleteProduct,
}