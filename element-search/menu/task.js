'use strict';

const menus = Array.from(document.getElementsByClassName('menu'));
menus.forEach(menu => {
  const menuLinks = Array.from(menu.getElementsByClassName('menu__link'));
  menuLinks.forEach(element => {
    element.onclick = event => {
      const menuSub = element.nextElementSibling
      if (menuSub) {
        event.preventDefault();
        
        if (menuSub.classList.contains('menu_active')) {
          menuSub.classList.remove('menu_active');
          return;
        }
        const menuActive = element.closest('.menu')
          .querySelector('.menu_active');

        if (menuActive) {
          menuActive.classList.remove('menu_active');
        }

        menuSub.classList.add('menu_active');
      }
    };
  });
});