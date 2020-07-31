'use strcit';

// Решение с помощью костылей

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// const rotators = document.querySelectorAll('.rotator');
// rotators.forEach(async rotator => {
//   const rotatorCases = rotator.querySelectorAll('.rotator__case');
//   let currentCase = 0;

//   while (true) {
//     const rotatorCase = rotatorCases[currentCase];
//     const color = rotatorCase.dataset.color;
//     const speed = rotatorCase.dataset.speed;

//     rotatorCase.classList.add('rotator__case_active');
//     rotatorCase.style.color = color;

//     await sleep(speed);

//     rotatorCase.classList.remove('rotator__case_active');
//     currentCase = currentCase === rotatorCases.length - 1 
//       ? 0
//       : currentCase + 1;
//     rotatorCases[currentCase].classList.add('rotator__case_active');
//   }
// });


// Решение через setTimeout

const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
  const rotatorCases = rotator.querySelectorAll('.rotator__case');
  let currentCase = 0;

  const rotation = () => {
    let rotatorCase = rotatorCases[currentCase];
    const color = rotatorCase.dataset.color;
    const speed = rotatorCase.dataset.speed;

    rotatorCase.classList.remove('rotator__case_active');
    currentCase = currentCase === rotatorCases.length - 1 
      ? 0
      : currentCase + 1;
    rotatorCase = rotatorCases[currentCase]

    rotatorCase.classList.add('rotator__case_active');
    rotatorCase.style.color = color;

    interval = setTimeout(rotation, speed);
  };

  let interval = setTimeout(rotation, 1000);
});