'use strict';


const getCookie = (name) => {
  const value = "; "+ document.cookie;
  const parts = value.split("; "+ name+ "=");
  console.log(parts);
  if (parts.length === 2) {
    return parts.pop()
                .split(';')
                .shift();
  }
}

const setCookie = (name, value) => {
  document.cookie = `${name}=${encodeURIComponent(value)}`;
  console.log(document.cookie);
};


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  const isModalShow = getCookie('isModalShow');
  if (!isModalShow) {
    modal.classList.add('modal_active');
  }
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  setCookie('isModalShow', 1)
});
