'use strict';

function transformTimer(timer) {
  return new Date(timer - 3 * 3600000).toLocaleTimeString({
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });
}

function reduceTimer() {
  if (currentTimer === 0) {
    alert('Сейчас файл начнет скачиваться');
    clearInterval(finalCountdown);
    window.location = 'https://rutracker.org/forum/dl.php?t=5761018';
  } else {
    currentTimer -= 1000;
    timer.textContent = transformTimer(currentTimer);
  }
}

const timer = document.getElementById('timer');
const [hh, mm, ss] = timer.textContent.split(':').map(Number);
let currentTimer = (hh * 3600 + mm * 60 + ss) * 1000;

const finalCountdown = setInterval(reduceTimer, 1000);