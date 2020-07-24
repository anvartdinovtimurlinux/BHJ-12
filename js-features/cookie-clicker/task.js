'use strict';

const cookie = document.getElementById('cookie');
const clicker_counter = document.getElementById('clicker__counter');
const speed_counter = document.getElementById('speed__counter');
let scale = 1.25;
let perviousClickTime = Date.now();

function resize() {
  this.width *= scale;
  clicker_counter.textContent++;

  const currentClickTime = Date.now();
  speed_counter.textContent = (1000 / (currentClickTime - perviousClickTime)).toFixed(2);
  perviousClickTime = currentClickTime

  scale = 1 / scale;
}


cookie.onclick = resize;