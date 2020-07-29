'use strict';


const tabsNavigationsList = [];
const tabNavigations = Array.from(document.querySelectorAll('.tab__navigation'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabNavigations.forEach((tabNavigation) => {
  const tabs = Array.from(tabNavigation.querySelectorAll('.tab'));
  tabsNavigationsList.push(tabs);
});

tabsNavigationsList.forEach((tabNavigation) => {
  tabNavigation.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      Array.from(document.querySelectorAll('.tab_active'))
        .forEach((tabActive) => {
          tabActive.classList.remove('tab_active');
        });
      document.querySelector('.tab__content_active')
        .classList
        .remove('tab__content_active');
      
      tabContents[index].classList.add('tab__content_active')
      tabsNavigationsList.forEach((tabNavigation) => {
        tabNavigation[index].classList.add('tab_active');
      });
    });
  });
});