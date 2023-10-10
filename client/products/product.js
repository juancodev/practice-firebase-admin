// import {
//   getAuth,
//   onAuthStateChanged
// } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
// import {
//   app
// } from '../firebase/firebase.config.client.js';


const productList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');
// let token;

// const getToken = new Promise((resolve, reject) => {
//   return onAuthStateChanged(getAuth(app), async user => {
//     resolve(user.accessToken);
//   })
// });

const getTokenOnSessionStorage = window.sessionStorage.getItem('firebase:authUser:AIzaSyAD7ocAYXeaoywqVVAkYPk0kgCwg-0gshQ:[DEFAULT]')


const getToken = JSON.parse(getTokenOnSessionStorage);

const token = getToken.stsTokenManager.accessToken;

console.log(token);


const printProductList = async () => {
  const dataList = await fetch('http://localhost:3100/products', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
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
            <button class="update" id="btnUpdateProduct">Update product</button>
            <button class="delete" id="btnDeleteProduct">Delete product</button>
          `
        const printProduct = `
        <div style="width: 100%; border: 1px solid red;" id=${products.id}>
          <ul class="listProduct">
            <li>Title: ${products.product.title}</li>
            <li>Description: ${products.product.description}</li>
            <li>Price: ${products.product.price}</li>
            <img src="${products.product.image}" />
            </ul>
            ${buttons()}
          </div>
          `;
        return printProduct;
      });

      productList.innerHTML = listProducts.join("");

    })
    .catch((error) => console.error(error));

})

productList.addEventListener("click", e => {

  let idProduct;

  if (e.target.closest('.update')) {
    idProduct = e.target.parentElement.id;
    // console.log(e.target.parentElement.id);
    // e.target.parentElement.remove();
    window.location.href = `./updateproduct.html?id=${idProduct}`;
  }

  if (e.target.closest('.delete')) {
    idProduct = e.target.parentElement.id;
    console.log(e.target.parentElement.id);
    deleteProduct(idProduct)
      .then(() => e.target.parentElement.remove())
      .catch((error) => console.error(error));
  }
})

// setTimeout(() => {
//   const btnUpdateProduct = document.getElementById('btnUpdateProduct');
//   const btnDeleteProduct = document.getElementById('btnDeleteProduct');
//   if (btnUpdateProduct) {
//     btnUpdateProduct.addEventListener('click', () => {

//       const iDProduct = 'fdZnGa80PJdDHkd8tsMy';

//       printProductList()
//         .then((products) => {
//           const findProductID = products.message.find(idProduct => idProduct.id === iDProduct);

//           if (findProductID) {
//             window.location.href = "./updateproduct.html";
//           } else {
//             console.log(`Product not found`);
//           }
//         })
//     })
//     if (btnDeleteProduct) {
//       btnDeleteProduct.addEventListener('click', () => {
//         printProductList()
//           .then((products) => {
//             const iDProduct = 'J46YMVzmIyjkj4UZyoVM';

//             // const findProductIDForDelete = products.message.find(idProduct => idProduct.id === iDProduct);

//             deleteProduct(iDProduct)
//               .then(() => window.location.reload())
//               .catch((error) => console.log(error));
//             // if (findProductIDForDelete) {
//             // } else {
//             //   console.log('No se pudo eliminar');
//             // }
//           })
//       })
//     }
//   }
// }, 6000);

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

const deleteProduct = async (id) => {
  const deletedProduct = await fetch(`http://localhost:3100/products/${id}`, {
    method: 'DELETE',
  })
  const deleteSuccess = await deletedProduct.json();

  return deleteSuccess;
}

btnSearch.addEventListener('click', () => {
  const productDetails = inputSearch.value || '';

  // if (inputSearch.length === 0){

  // }
  getOneProduct(productDetails)
    .then((product) => console.log(product))
    .catch((error) => console.error(error));
});