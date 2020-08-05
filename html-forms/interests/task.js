'use strict';


const checkedParent = (element) => {
  const parent = element.closest('.interests_active')
                        .closest('.interest');

  if (parent) {
    const childrens = [...parent.querySelectorAll('.interest__check')].slice(1);
    const target = parent.querySelector('.interest__check');

    if (childrens.every((children) => children.checked === true)) {
      target.indeterminate = false;
      target.checked = true;
    } else if (childrens.every((children) => children.checked === false)) {
      target.indeterminate = false;
      target.checked = false;
    } else {
      target.checked = false;
      target.indeterminate = true;
    }

    if(parent.closest('.interests_active')) {
      checkedParent(target);
    }
  }
};


const interests = document.querySelector('.interests_main');
interests.addEventListener('change', event => {
  const target = event.target.closest('.interest');
  const childrens = [...target.querySelectorAll('.interest__check')].slice(1);
  const parent = target.querySelector('.interest__check');

  childrens.forEach(children => {
    if (parent.checked) {
      children.checked = true;
    } else {
      children.checked = false;
    }
  });
  
  checkedParent(target);
});
