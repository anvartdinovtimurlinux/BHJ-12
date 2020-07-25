'use strict';


const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');
const images = document.querySelectorAll('.slider__item');
let currentActiveImage = 0;


const chooseImage = (direction) => () => {
  images[currentActiveImage].classList.remove('slider__item_active');
  dots[currentActiveImage].classList.remove('slider__dot_active');

  currentActiveImage += direction
  if (currentActiveImage == -1) {
    currentActiveImage = images.length - 1;
  }
  if (currentActiveImage == images.length) {
    currentActiveImage = 0;
  }

  images[currentActiveImage].classList.add('slider__item_active');
  dots[currentActiveImage].classList.add('slider__dot_active');
};

const chooseImageWithDots = (index) => () => {
  images[currentActiveImage].classList.remove('slider__item_active');
  dots[currentActiveImage].classList.remove('slider__dot_active');

  currentActiveImage = index;

  dots[index].classList.add('slider__dot_active');
  images[index].classList.add('slider__item_active');
};


prevBtn.onclick = chooseImage(-1);
nextBtn.onclick = chooseImage(1);
Array.from(dots).forEach((dot, index) => {
  dot.onclick = chooseImageWithDots(index);
});