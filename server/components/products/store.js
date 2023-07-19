const db = require('./model');

async function addProduct(product) {
  const docRef = db.collection('products');
  return await docRef.add(product);
}

async function getProducts() {
  const snapshot = await db.collection('products').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  })
  return snapshot.docs.map((product) => product.data());
}

module.exports = {
  add: addProduct,
  list: getProducts,
}