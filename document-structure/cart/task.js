'use strict';


const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const cart = [];


const addProductToCart = (productID, imgSrc, quantity) => {
  const newProduct = document.createElement('div');
  newProduct.className = 'cart__product';
  newProduct.dataset.id = productID;
  newProduct.innerHTML = `
    <img class="cart__product-image" src="${imgSrc}">
    <div class="cart__product-control">
      <div class="cart__product-count">${quantity}</div>
      <a href="#" class="cart__product-remove">&times;</a>
    </div>`;
  document.querySelector('.cart').classList.remove('cart-empty');

  cartProducts.append(newProduct);
  cart.push({
    ID: productID,
    img: imgSrc,
    quantity: quantity,
  });
  localStorage.setItem('cart', JSON.stringify(cart))

  
  const removeBtn = newProduct.querySelector('.cart__product-remove');
  removeBtn.addEventListener('click', () => {
    event.preventDefault();
    newProduct.remove();
    cart.splice(cart.findIndex((element) => element.ID == productID), 1);
    localStorage.setItem('cart', JSON.stringify(cart))
    
    if (cart.length === 0) {
      document.querySelector('.cart').classList.add('cart-empty');
    }
  });
};


document.addEventListener('DOMContentLoaded', () => {
  const cartFromLS = JSON.parse(localStorage.getItem('cart'));
  if (cartFromLS) {
    for (let product of cartFromLS) {
      addProductToCart(product.ID, product.img, product.quantity);
    }
  }
});


products.forEach((product) => {
  const quantity = product.querySelector('.product__quantity-value');
  const quantityDec = product.querySelector('.product__quantity-control_dec');
  const quantityInc = product.querySelector('.product__quantity-control_inc');
  const addBtn = product.querySelector('.product__add');

  quantityInc.addEventListener('click', () => {
    quantity.textContent = +quantity.textContent + 1;
  });
  quantityDec.addEventListener('click', () => {
    quantity.textContent = +quantity.textContent === 1
      ? 1
      : +quantity.textContent - 1;
  });
  
  addBtn.addEventListener('click', () => {
    const productID = product.dataset.id;

    if (Array.from(cartProducts.children).some((cartProduct) => cartProduct.dataset.id === productID)) {
      const editedProduct = cartProducts.querySelector(`[data-id="${productID}"]`);
      const productQuantity = editedProduct.querySelector('.cart__product-count');
      productQuantity.textContent = +productQuantity.textContent + +quantity.textContent;

      cart[cart.findIndex((element) => element.ID == productID)].quantity += +quantity.textContent;
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      addProductToCart(productID, product.querySelector('img').src, +quantity.textContent);
    }
  });
});