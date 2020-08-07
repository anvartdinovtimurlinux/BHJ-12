'use strict';

const cartProducts = document.querySelector('.cart__products');

// управление колличеством товара в каталоге и добавление в корзину
const products = document.querySelectorAll('.product');
products.forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const quantityDec = product.querySelector('.product__quantity-control_dec');
  const quantityInc = product.querySelector('.product__quantity-control_inc');

  // уменьшение/увеличение количества товара
  quantityDec.addEventListener('click', () => {
    quantityValue.textContent = +quantityValue.textContent === 1
      ? 1
      : +quantityValue.textContent - 1;
  });
  quantityInc.addEventListener('click', () => {
    quantityValue.textContent = +quantityValue.textContent + 1;
  });

  // добавление товара в корзину
  const productAdd = product.querySelector('.product__add');
  productAdd.addEventListener('click', () => {
    const productID = product.dataset.id;
    if (Array.from(cartProducts.children).some(cartProduct => cartProduct.dataset.id == productID)) {
      const currentCartproduct = cartProducts.querySelector(`[data-id="${productID}"]`);
      currentCartproduct.children[1].innerText = +currentCartproduct.children[1].innerText + +quantityValue.textContent;
    } else {
      const newCartProduct = document.createElement('div');
      newCartProduct.className = 'cart__product';
      newCartProduct.dataset.id = productID;
      newCartProduct.innerHTML = `
        <img class="cart__product-image" src="${product.querySelector('img').src}">
        <div class="cart__product-count">${quantityValue.textContent}</div>
      `;

      cartProducts.insertAdjacentElement('beforeEnd', newCartProduct);
    }
  });
});