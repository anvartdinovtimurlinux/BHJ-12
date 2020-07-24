'use strict';

function getHole(i) {
  return document.getElementById(`hole${i}`);
}

function reset() {
  dead_counter.innerText = '0';
  lost_counter.innerText = '0';
}

function clickOnHole() {
  if (this.className.includes('hole_has-mole')) {
    dead_counter.innerText = +dead_counter.innerText + 1;
    if (dead_counter.innerText === '10') {
      alert('Победа!');
      reset();
    }
  } else {
    lost_counter.innerText = +lost_counter.innerText + 1;
    if (lost_counter.innerText === '5') {
      alert('Поражение :(');
      reset();
    }
  }
}

const dead_counter = document.getElementById('dead');
const lost_counter = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.onclick = clickOnHole;
}