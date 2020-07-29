'use strict';


const dropdowns = document.querySelectorAll('.dropdown');
Array.from(dropdowns).forEach((dropdown) => {
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  const dropdownList = dropdown.querySelector('.dropdown__list');
  const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');


  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  Array.from(dropdownLinks).forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownValue.textContent = link.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    });
  });
})