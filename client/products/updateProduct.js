const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
const priceProduct = document.getElementById('price');
const imageProduct = document.getElementById('image');
const btnUpdate = document.getElementById('btnUpdate');



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

})