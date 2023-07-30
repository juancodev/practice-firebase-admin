const db = require('./model');

async function addProduct(product) {
  const docRef = db.collection('products');
  return await docRef.add(product);
}

async function getProducts() {
  const snapshot = await db.collection('products').get();
  snapshot.forEach((doc) => {
    console.log(doc.id);
  });
  // snapshot.docs.map((product) => console.log(product.data().category.path));
  return snapshot.docs.map((product) => {
    return {
      id: product.id,
      product: product.data()
    }
  });
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
  list: getProducts,
  update: updateProduct,
  delete: deleteProduct,
}