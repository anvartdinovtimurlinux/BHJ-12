'use strict';

const reveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    if (window.innerHeight > reveal.getBoundingClientRect().top 
        && reveal.getBoundingClientRect().bottom > 0) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  })
});
