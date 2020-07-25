'use strict';


const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');


modalMain.classList.add('modal_active');

modalClose.forEach(element => {
  element.onclick = () => {
    document.querySelector('.modal_active')
      .classList
      .remove('modal_active');
  };
});

showSuccess.onclick = () => {
  modalMain.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};